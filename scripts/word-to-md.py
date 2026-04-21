#!/usr/bin/env python3
"""
word-to-md.py — конвертер Word (.docx) → Markdown для сайта Елены Масоловой
────────────────────────────────────────────────────────────────────────────

Что делает:
  • Читает .docx-файл (распаковывает zip внутри)
  • Извлекает текст с сохранением жирного/курсива/ссылок/заголовков/списков/цитат
  • Вытаскивает картинки → сохраняет как assets/posts/<slug>-N.<ext>
  • Парсит теги (строка «Теги: …» или «#тэг» в конце документа)
  • Генерит .md с frontmatter
  • Предупреждает о сложных элементах, которые может обработать криво

Использование:
  python3 scripts/word-to-md.py file.docx --slug my-post --date 2026-04-21
  python3 scripts/word-to-md.py file.docx --slug my-post --lang en --pin
  python3 scripts/word-to-md.py file.docx --slug my-post --dry-run

Опции:
  --slug <slug>      обязательно. Латиница-дефисы. Становится именем .md и префиксом картинок.
  --date <YYYY-MM-DD> дата публикации. По умолчанию сегодняшняя.
  --lang <ru|en>     язык поста. По умолчанию ru.
  --title <text>     если не задано — берётся из первого Heading 1 или имени файла.
  --summary <text>   краткое описание для превью. Если не задано — оставляем пустым.
  --kicker <text>    рубрика (подпись над заголовком).
  --pin              закрепить пост на главной.
  --draft            пометить как черновик (status: draft).
  --dry-run          показать что получится, ничего не создавая.
  --force            перезаписать существующий .md.

Зависимости: только стандартная библиотека Python 3.8+.
"""

import argparse
import sys
import re
import os
import html
import io
import shutil
import zipfile
from pathlib import Path
from datetime import date
from xml.etree import ElementTree as ET


# ═══════════════════════════════════════════════════════════════════
# Константы
# ═══════════════════════════════════════════════════════════════════

ROOT = Path(__file__).resolve().parent.parent
POSTS_DIR = ROOT / "content" / "posts"
ASSETS_DIR = ROOT / "assets" / "posts"

# Namespaces в OOXML (.docx — это zip с XML внутри)
NS = {
    "w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
    "r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
    "a": "http://schemas.openxmlformats.org/drawingml/2006/main",
    "pic": "http://schemas.openxmlformats.org/drawingml/2006/picture",
}


# ═══════════════════════════════════════════════════════════════════
# Предупреждения о сложных элементах
# ═══════════════════════════════════════════════════════════════════

def scan_warnings(document_xml):
    """Сканирует XML документа на элементы, которые скрипт не обрабатывает
    идеально. Возвращает список предупреждений."""
    warnings = []

    if b"<w:tbl" in document_xml:
        warnings.append("ТАБЛИЦЫ: таблицы Word не поддерживаются — ячейки "
                        "станут обычными абзацами. Лучше перевести таблицу "
                        "в обычный текст или прислать как картинку.")

    if b"<w:cols " in document_xml and b'w:num="2"' in document_xml:
        warnings.append("КОЛОНКИ: многоколоночный макет потеряется — "
                        "текст станет одной колонкой.")

    if b"<w:footnoteReference" in document_xml or b"<w:endnoteReference" in document_xml:
        warnings.append("СНОСКИ: сноски и концевые сноски не будут "
                        "отображены. Переведи их в обычные скобки в тексте.")

    if b"<w:comment" in document_xml or b"<w:commentReference" in document_xml:
        warnings.append("КОММЕНТАРИИ: комментарии будут проигнорированы.")

    if b"<w:ins " in document_xml or b"<w:del " in document_xml:
        warnings.append("ОТСЛЕЖИВАНИЕ ИЗМЕНЕНИЙ: есть непринятые правки. "
                        "Прими/отклони все через Review → Accept All, "
                        "иначе текст может быть некорректным.")

    if b"<mc:AlternateContent" in document_xml or b"SmartArt" in document_xml:
        warnings.append("SMARTART / OLE-\u043e\u0431\u044a\u0435\u043a\u0442\u044b: сложные объекты (SmartArt, "
                        "Excel-таблицы, WordArt) не экспортируются. "
                        "Лучше сделать скриншот и вставить как картинку.")

    # Реальные Word-диаграммы: ищем c:chart-элемент DrawingML Chart namespace
    if b"http://schemas.openxmlformats.org/drawingml/2006/chart" in document_xml:
        warnings.append("ДИАГРАММЫ: Word-диаграммы не экспортируются в md. "
                        "Сделай скриншот и вставь как картинку.")

    if b"<w:bookmarkStart" in document_xml:
        # Обычно безвредно, просто информация
        pass

    return warnings


# ═══════════════════════════════════════════════════════════════════
# Парсинг docx
# ═══════════════════════════════════════════════════════════════════

def extract_docx(docx_path):
    """Возвращает (document_xml_bytes, rels_xml_bytes, images_dict)."""
    with zipfile.ZipFile(docx_path, "r") as z:
        names = z.namelist()
        document_xml = z.read("word/document.xml")
        rels_xml = z.read("word/_rels/document.xml.rels") if "word/_rels/document.xml.rels" in names else b""

        images = {}
        for name in names:
            if name.startswith("word/media/"):
                images[name] = z.read(name)
    return document_xml, rels_xml, images


def parse_rels(rels_xml):
    """Парсит связи: id → (type, target). Нужно для картинок и гиперссылок."""
    rels = {}
    if not rels_xml:
        return rels
    root = ET.fromstring(rels_xml)
    ns = {"pr": "http://schemas.openxmlformats.org/package/2006/relationships"}
    for rel in root.findall("pr:Relationship", ns):
        rels[rel.get("Id")] = {
            "type": rel.get("Type", "").split("/")[-1],
            "target": rel.get("Target", ""),
        }
    return rels


# ═══════════════════════════════════════════════════════════════════
# Парсинг run'ов (инлайн)
# ═══════════════════════════════════════════════════════════════════

def qn(tag):
    """Короткая запись тэга с namespace."""
    prefix, name = tag.split(":")
    return f"{{{NS[prefix]}}}{name}"


def parse_runs_in_element(elem, rels, hyperlink_url=None):
    """Парсит <w:r> элементы внутри абзаца/гиперссылки.
    Возвращает markdown-строку."""
    out = []
    for child in elem:
        tag = child.tag

        if tag == qn("w:r"):
            out.append(run_to_md(child, rels))

        elif tag == qn("w:hyperlink"):
            url = None
            rid = child.get(qn("r:id"))
            if rid and rid in rels:
                url = rels[rid]["target"]
            anchor = child.get(qn("w:anchor"))
            if not url and anchor:
                url = f"#{anchor}"
            inner = parse_runs_in_element(child, rels, hyperlink_url=url)
            if url:
                out.append(f"[{inner}]({url})")
            else:
                out.append(inner)

    text = "".join(out)
    return text


def run_to_md(run, rels):
    """Одна <w:r>-нода → markdown-кусок с форматированием."""
    rpr = run.find(qn("w:rPr"))
    bold = rpr is not None and rpr.find(qn("w:b")) is not None
    italic = rpr is not None and rpr.find(qn("w:i")) is not None

    # Собираем текст и вложенные элементы (в т.ч. картинки, переносы)
    parts = []
    for node in run:
        t = node.tag
        if t == qn("w:t"):
            parts.append(node.text or "")
        elif t == qn("w:tab"):
            parts.append("\t")
        elif t == qn("w:br"):
            parts.append("  \n")  # markdown мягкий перенос
        elif t == qn("w:drawing"):
            # Картинка. Находим rId и srcRect (кроп)
            blip = node.find(".//" + qn("a:blip"))
            if blip is not None:
                rid = blip.get(qn("r:embed")) or blip.get(qn("r:link"))
                if rid:
                    srcRect = node.find(".//" + qn("a:srcRect"))
                    crop = ""
                    if srcRect is not None:
                        l = srcRect.get("l", "0")
                        r = srcRect.get("r", "0")
                        top = srcRect.get("t", "0")
                        b = srcRect.get("b", "0")
                        if any(v and v != "0" for v in (l, r, top, b)):
                            crop = f":{l},{top},{r},{b}"
                    parts.append(f"\x00IMAGE:{rid}{crop}\x00")
        elif t == qn("w:sym"):
            # Символ по font/char
            ch = node.get(qn("w:char"))
            if ch:
                try:
                    parts.append(chr(int(ch, 16)))
                except Exception:
                    pass

    text = "".join(parts)
    if not text:
        return ""

    # Применяем форматирование только к непробельным частям, аккуратно
    if bold and italic:
        return wrap_md(text, "***")
    if bold:
        return wrap_md(text, "**")
    if italic:
        return wrap_md(text, "*")
    return text


def wrap_md(text, mark):
    """Обёртка с сохранением пробелов в начале/конце."""
    m = re.match(r'^(\s*)(.*?)(\s*)$', text, re.DOTALL)
    if not m or not m.group(2):
        return text
    return f"{m.group(1)}{mark}{m.group(2)}{mark}{m.group(3)}"


# ═══════════════════════════════════════════════════════════════════
# Парсинг абзацев
# ═══════════════════════════════════════════════════════════════════

def para_style(p):
    """Возвращает имя стиля абзаца (Heading 1, Heading 2, Quote, …)."""
    pPr = p.find(qn("w:pPr"))
    if pPr is None:
        return None
    pStyle = pPr.find(qn("w:pStyle"))
    if pStyle is None:
        return None
    return pStyle.get(qn("w:val"), "")


def is_list_item(p):
    """True если абзац — элемент списка."""
    pPr = p.find(qn("w:pPr"))
    if pPr is None:
        return False, None
    # Способ 1: <w:numPr> — явная нумерация
    numPr = pPr.find(qn("w:numPr"))
    if numPr is not None:
        return True, "ul"
    # Способ 2: стиль "List Bullet" / "List Paragraph" / "ListBullet"
    pStyle = pPr.find(qn("w:pStyle"))
    if pStyle is not None:
        style_val = (pStyle.get(qn("w:val")) or "").lower()
        if "bullet" in style_val or "list" in style_val:
            # "listnumber", "listnumer2" etc = нумерованный
            if "number" in style_val:
                return True, "ol"
            return True, "ul"
    return False, None


def paragraph_to_md(p, rels):
    """Один <w:p> → строка markdown (может быть пустой)."""
    style = (para_style(p) or "").lower()

    # Получаем сырой текст с разметкой
    text = parse_runs_in_element(p, rels).strip()

    # Пустой абзац = разделитель (вернём пустую строку, вызывающий сам вставит \n\n)
    if not text:
        return ""

    # Заголовки
    if style.startswith("heading"):
        m = re.search(r"(\d)", style)
        level = int(m.group(1)) if m else 1
        # H1 в frontmatter как title, в тело его НЕ кладём (первый — заголовок поста)
        # Но не можем различать здесь, вызывающий решает
        level = max(2, min(level + 1, 4))  # H1 Word → ## в md (т.к. <h1> у нас title)
        return f"{'#' * level} {text}"

    # Цитата (Quote, IntenseQuote, BlockQuote и пр.)
    if "quote" in style:
        return f"> {text}"

    # Списки
    is_list, kind = is_list_item(p)
    if is_list:
        return f"- {text}"

    # Обычный параграф
    return text


# ═══════════════════════════════════════════════════════════════════
# Главный парсер документа
# ═══════════════════════════════════════════════════════════════════

def docx_to_markdown(document_xml, rels, slug, images_dict):
    """Возвращает (title, markdown_body, image_map, tags_found)."""
    root = ET.fromstring(document_xml)
    body = root.find(qn("w:body"))

    paragraphs = []
    found_title = None
    image_counter = [0]
    image_map = {}  # rId → filename
    first_text_para_seen = False

    for p in body.findall(qn("w:p")):
        md = paragraph_to_md(p, rels)

        # Первая непустая строка документа = title поста (любой стиль)
        if not first_text_para_seen and md.strip():
            first_text_para_seen = True
            # Снимаем markdown-разметку (#, **, *) и берём как title
            clean = md.lstrip("#").strip()
            clean = re.sub(r"^\*+|\*+$", "", clean).strip()
            found_title = clean
            continue  # не кладём в тело

        # Обрабатываем плейсхолдеры картинок \x00IMAGE:rId[:crop]\x00
        while "\x00IMAGE:" in md:
            m = re.search(r"\x00IMAGE:([^\x00]+)\x00", md)
            if not m:
                break
            token = m.group(1)
            if ":" in token:
                rid, crop_str = token.split(":", 1)
            else:
                rid, crop_str = token, ""
            target = rels.get(rid, {}).get("target", "")
            if target:
                image_counter[0] += 1
                ext = Path(target).suffix.lower() or ".png"
                if ext in (".jpeg",):
                    ext = ".jpg"
                filename = f"{slug}-{image_counter[0]}{ext}"
                # Ключ уникальный на каждую вставку (один rId может быть
                # использован дважды с разными кропами)
                image_map[f"{rid}#{image_counter[0]}"] = (target, filename, crop_str)
                md_link = f"![](/assets/posts/{filename})"
                md = md[:m.start()] + md_link + md[m.end():]
            else:
                md = md[:m.start()] + md[m.end():]

        paragraphs.append(md)

    # Склейка: пустые строки между блоками разного типа
    def kind_of(line):
        if line.startswith("- "):
            return "list"
        if line.startswith("> "):
            return "quote"
        if line.startswith("#"):
            return "heading"
        return "para"

    out_lines = []
    for line in paragraphs:
        if line == "":
            continue
        if out_lines:
            prev_kind = kind_of(out_lines[-1])
            curr_kind = kind_of(line)
            # Пустая строка между всем, кроме подряд идущих списков/цитат одного вида
            if not (prev_kind == curr_kind and curr_kind in ("list", "quote")):
                out_lines.append("")
        out_lines.append(line)

    md_text = "\n".join(out_lines).strip() + "\n"

    # Пост-обработка: склеиваем соседние **a** **b** → **a b** (и аналогично для *, ***)
    # Это частый артефакт Word: жирный выделен кусками, пробелы между ними остаются без формата.
    for mark in ("***", "**", "*"):
        esc = re.escape(mark)
        # повторяем пока находится (цепочки из 3+ фрагментов)
        # Склеиваем только через обычные пробелы (не через перевод строки и не через md-soft-break «  \n»)
        pattern = re.compile(esc + r"([^*\n]+?)" + esc + r"([ \t]+)" + esc + r"([^*\n]+?)" + esc)
        prev = None
        while prev != md_text:
            prev = md_text
            md_text = pattern.sub(mark + r"\1\2\3" + mark, md_text)

    # Теги: ищем в последних 5 абзацах строку «Теги: x, y, z» или «#тэг #тэг»
    tags = extract_tags(md_text)
    # Убираем строку тегов из тела
    md_text = strip_tag_lines(md_text)

    return found_title, md_text, image_map, tags


# ═══════════════════════════════════════════════════════════════════
# Теги
# ═══════════════════════════════════════════════════════════════════

TAGS_RE = re.compile(r"^\s*(?:теги|tags)\s*[:\-]\s*(.+)$", re.IGNORECASE | re.MULTILINE)
HASHTAG_RE = re.compile(r"(?:^|\s)#([^\s#,.!?]+)")


def extract_tags(md_text):
    tags = []
    # Способ 1: строка «Теги: …»
    for m in TAGS_RE.finditer(md_text):
        raw = m.group(1)
        parts = re.split(r"[,;]\s*|\s{2,}", raw.strip())
        for p in parts:
            t = p.strip().lstrip("#").strip()
            if t and t not in tags:
                tags.append(t)
    # Способ 2: хэштеги в последнем абзаце
    if not tags:
        last_block = md_text.strip().split("\n\n")[-1] if md_text.strip() else ""
        if last_block.count("#") >= 2 and last_block.count("#") >= len(last_block.split()) * 0.5:
            for m in HASHTAG_RE.finditer(last_block):
                t = m.group(1).strip()
                if t and t not in tags:
                    tags.append(t)
    return tags


def strip_tag_lines(md_text):
    # Убираем строки «Теги: …»
    md_text = TAGS_RE.sub("", md_text)
    # Убираем последний абзац, если он состоит только из хэштегов
    blocks = md_text.strip().split("\n\n")
    if blocks:
        last = blocks[-1].strip()
        if last and all(w.startswith("#") or not w.strip() for w in last.split()):
            blocks = blocks[:-1]
    return "\n\n".join(blocks).strip() + "\n"


# ═══════════════════════════════════════════════════════════════════
# Сохранение картинок
# ═══════════════════════════════════════════════════════════════════

def save_images(image_map, images_dict, dry_run=False):
    """image_map: key → (target_in_docx, new_filename, crop_str).
    crop_str — '' или 'l,t,r,b' в формате Word (доли × 100000)."""
    if not image_map:
        return []
    ASSETS_DIR.mkdir(parents=True, exist_ok=True)
    saved = []
    for key, (target, filename, crop_str) in image_map.items():
        source_key = f"word/{target}" if not target.startswith("word/") else target
        source_key = source_key.replace("word/../", "")
        if source_key not in images_dict:
            name_only = Path(target).name
            candidates = [k for k in images_dict if k.endswith("/" + name_only)]
            if candidates:
                source_key = candidates[0]
            else:
                print(f"  ! картинка не найдена: {target}", file=sys.stderr)
                continue

        data = images_dict[source_key]
        if crop_str:
            data = apply_crop(data, crop_str, filename)

        dest = ASSETS_DIR / filename
        if dry_run:
            note = " (кроп применён)" if crop_str else ""
            print(f"  [dry-run] сохранил бы: {dest}{note}")
        else:
            dest.write_bytes(data)
            note = " (кроп применён)" if crop_str else ""
            print(f"  ✓ картинка: assets/posts/{filename}{note}")
        saved.append(filename)
    return saved


def apply_crop(image_bytes, crop_str, filename):
    """Применяет Word-кроп. Возвращает новые байты."""
    try:
        from PIL import Image
    except ImportError:
        print(f"  ! Pillow не установлен — кроп для {filename} НЕ применён (pip install Pillow)", file=sys.stderr)
        return image_bytes

    try:
        l, t, r, b = (int(x or 0) for x in crop_str.split(","))
        img = Image.open(io.BytesIO(image_bytes))
        w, h = img.size
        # Word: 100000 = 100%. Значения — доля, которую НАДО ОТРЕЗАТЬ
        left = int(w * l / 100000)
        top = int(h * t / 100000)
        right = int(w * (1 - r / 100000))
        bottom = int(h * (1 - b / 100000))
        if right <= left or bottom <= top:
            print(f"  ! некорректный кроп для {filename}, оставляю оригинал", file=sys.stderr)
            return image_bytes
        cropped = img.crop((left, top, right, bottom))
        out = io.BytesIO()
        fmt = img.format or ("JPEG" if filename.endswith((".jpg", ".jpeg")) else "PNG")
        save_kwargs = {}
        if fmt == "JPEG":
            save_kwargs["quality"] = 92
            save_kwargs["optimize"] = True
            if cropped.mode in ("RGBA", "P"):
                cropped = cropped.convert("RGB")
        cropped.save(out, format=fmt, **save_kwargs)
        return out.getvalue()
    except Exception as e:
        print(f"  ! ошибка кропа для {filename}: {e} — оставляю оригинал", file=sys.stderr)
        return image_bytes


# ═══════════════════════════════════════════════════════════════════
# Frontmatter
# ═══════════════════════════════════════════════════════════════════

def build_frontmatter(title, slug, date_str, lang, kicker, tags, pinned, draft):
    lines = ["---"]
    lines.append(f'title: "{yaml_escape(title)}"')
    lines.append(f'slug: "{slug}"')
    lines.append(f'date: "{date_str}"')
    lines.append(f'lang: "{lang}"')
    if tags:
        lines.append("tags:")
        for t in tags:
            lines.append(f'  - "{yaml_escape(t)}"')
    if kicker:
        lines.append(f'kicker: "{yaml_escape(kicker)}"')
    lines.append(f'status: "{"draft" if draft else "published"}"')
    lines.append(f'pinned: {"true" if pinned else "false"}')
    lines.append("---")
    return "\n".join(lines) + "\n\n"


def yaml_escape(s):
    if s is None:
        return ""
    return str(s).replace('\\', '\\\\').replace('"', '\\"')


# ═══════════════════════════════════════════════════════════════════
# MAIN
# ═══════════════════════════════════════════════════════════════════

def main():
    ap = argparse.ArgumentParser(description="Word (.docx) → Markdown конвертер для сайта Елены Масоловой")
    ap.add_argument("docx", help="путь к .docx файлу")
    ap.add_argument("--slug", required=True, help="slug поста (латиница, дефисы)")
    ap.add_argument("--date", default=date.today().isoformat(), help="YYYY-MM-DD (по умолчанию сегодня)")
    ap.add_argument("--lang", default="ru", choices=["ru", "en"])
    ap.add_argument("--title", default=None, help="если не задано — берётся из первой строки документа или имени файла")
    ap.add_argument("--kicker", default="", help="рубрика, подпись над заголовком")
    ap.add_argument("--pin", action="store_true", help="закрепить на главной")
    ap.add_argument("--draft", action="store_true", help="пометить как черновик")
    ap.add_argument("--dry-run", action="store_true", help="показать что получится, ничего не создавая")
    ap.add_argument("--force", action="store_true", help="перезаписать существующий .md")
    args = ap.parse_args()

    src = Path(args.docx)
    if not src.exists():
        print(f"✗ файл не найден: {src}", file=sys.stderr)
        sys.exit(1)

    # Валидация slug
    if not re.match(r'^[a-z0-9]+(?:-[a-z0-9]+)*$', args.slug):
        print(f"✗ некорректный slug: {args.slug}", file=sys.stderr)
        print("  формат: латиница в нижнем регистре, слова через дефис", file=sys.stderr)
        sys.exit(1)

    out_md = POSTS_DIR / f"{args.slug}.md"
    if out_md.exists() and not args.force and not args.dry_run:
        print(f"✗ файл уже существует: {out_md}", file=sys.stderr)
        print("  добавь --force чтобы перезаписать", file=sys.stderr)
        sys.exit(1)

    print(f"▶ конвертация {src.name}")

    # 1. Распаковываем docx
    document_xml, rels_xml, images_dict = extract_docx(src)

    # 2. Предупреждения
    warnings = scan_warnings(document_xml)
    if warnings:
        print("\n⚠ ПРЕДУПРЕЖДЕНИЯ:")
        for w in warnings:
            print(f"  • {w}")
        print()

    # 3. Парсинг
    rels = parse_rels(rels_xml)
    found_title, md_body, image_map, tags_found = docx_to_markdown(
        document_xml, rels, args.slug, images_dict
    )

    # 4. Сохраняем картинки
    save_images(image_map, images_dict, dry_run=args.dry_run)

    # 5. Заголовок
    title = args.title or found_title or src.stem
    print(f"  заголовок: {title}")

    # 6. Теги
    if tags_found:
        print(f"  теги: {', '.join(tags_found)}")

    # 7. Собираем финальный .md
    fm = build_frontmatter(
        title=title,
        slug=args.slug,
        date_str=args.date,
        lang=args.lang,
        kicker=args.kicker,
        tags=tags_found,
        pinned=args.pin,
        draft=args.draft,
    )
    full = fm + md_body

    # 8. Пишем или показываем
    if args.dry_run:
        print("\n─── результат (dry-run) ───────────────────────────")
        print(full)
        print("───────────────────────────────────────────────────")
        print(f"[dry-run] НЕ сохранено: {out_md}")
    else:
        POSTS_DIR.mkdir(parents=True, exist_ok=True)
        out_md.write_text(full, encoding="utf-8")
        print(f"\n✔ готово: {out_md}")
        print(f"  картинок: {len(image_map)}")
        print(f"  символов: {len(md_body)}")
        print("\nследующие шаги:")
        print(f"  1. Проверь файл: content/posts/{args.slug}.md")
        print(f"  2. python3 scripts/build.py  — локальная пересборка")
        print(f"  3. git add & commit & push  — деплой")


if __name__ == "__main__":
    main()

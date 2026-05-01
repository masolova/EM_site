#!/usr/bin/env python3
"""
build.py — сборщик сайта Елены Масоловой
────────────────────────────────────────────────────────────────────
Что делает:
  1. Читает все .md-файлы из content/posts/
  2. Парсит frontmatter (title, slug, date, lang, tags,
     kicker, reading_time, status, pinned)
     Лид для карточек/RSS/мета-тегов — первое предложение тела поста (авто)
  3. Пропускает посты со status: draft
  4. Для каждого опубликованного поста создаёт /articles/<slug>/index.html
     на основе templates/article.html
  5. Вставляет карточки в ленту между <!-- POSTS:START --> и
     <!-- POSTS:END --> в index.html (ru) и index-en.html (en)
  6. Посты сортируются по дате, новые сверху
  7. Заглушки-карточки НИЖЕ маркеров НЕ трогаются

Запуск локально:
    python3 scripts/build.py

В CI:
    автоматически через .github/workflows/build.yml
"""

import os
import re
import sys
import html
from pathlib import Path
from datetime import date, datetime, timezone

# ─── Пути ───────────────────────────────────────────────────────────
ROOT = Path(__file__).resolve().parent.parent
POSTS_DIR = ROOT / "content" / "posts"
ARTICLES_DIR = ROOT / "articles"
ARTICLES_EN_DIR = ROOT / "en" / "articles"
TEMPLATES_DIR = ROOT / "templates"
INDEX_RU = ROOT / "index.html"
INDEX_EN = ROOT / "index-en.html"

# ─── Маркеры в index.html ───────────────────────────────────────────
MARK_START = "<!-- POSTS:START -->"
MARK_END = "<!-- POSTS:END -->"

# --- RSS ---
SITE_URL = "https://elenamasolova.com"
FEED_RU = ROOT / "feed.xml"
FEED_EN = ROOT / "feed-en.xml"


# ═══════════════════════════════════════════════════════════════════
# Парсинг frontmatter (простой YAML-ридер без внешних зависимостей)
# ═══════════════════════════════════════════════════════════════════

def parse_frontmatter(text):
    """
    Разбирает YAML-frontmatter в начале файла.
    Возвращает (meta: dict, body: str).
    Поддерживает: строки, числа, bool, списки (- item), простые комменты.
    """
    if not text.startswith("---"):
        return {}, text

    end = text.find("\n---", 3)
    if end < 0:
        return {}, text

    raw = text[3:end].strip()
    body = text[end + 4:].lstrip("\n")

    meta = {}
    lines = raw.split("\n")
    i = 0
    while i < len(lines):
        line = lines[i]
        # Пропускаем комментарии и пустые
        stripped = line.strip()
        if not stripped or stripped.startswith("#"):
            i += 1
            continue

        # key: value
        m = re.match(r'^([a-zA-Z_][a-zA-Z0-9_]*)\s*:\s*(.*)$', line)
        if not m:
            i += 1
            continue

        key, value = m.group(1), m.group(2).strip()

        # Список через следующие строки "  - item"
        if value == "":
            items = []
            j = i + 1
            while j < len(lines):
                nl = lines[j]
                nm = re.match(r'^\s*-\s+(.*)$', nl)
                if nm:
                    items.append(strip_quotes(nm.group(1).strip()))
                    j += 1
                elif nl.strip() == "" or nl.strip().startswith("#"):
                    j += 1
                else:
                    break
            if items:
                meta[key] = items
                i = j
                continue

        meta[key] = coerce(strip_quotes(value))
        i += 1

    return meta, body


def strip_quotes(s):
    if len(s) >= 2 and s[0] == s[-1] and s[0] in ('"', "'"):
        return s[1:-1]
    return s


def coerce(s):
    if isinstance(s, str):
        low = s.lower()
        if low == "true":
            return True
        if low == "false":
            return False
        if re.match(r'^-?\d+$', s):
            return int(s)
    return s


# ═══════════════════════════════════════════════════════════════════
# Markdown → HTML (минимальный конвертер для тела поста)
# ═══════════════════════════════════════════════════════════════════

def _img_orient(src):
    """Определяет 'portrait' если h > w * 1.1, иначе ''. Читает реальный файл."""
    try:
        from PIL import Image as _PILImage
        rel = src.lstrip('/')
        full = ROOT / rel
        if not full.exists():
            return ''
        with _PILImage.open(full) as im:
            w, h = im.size
        return 'portrait' if h > w * 1.1 else ''
    except Exception:
        return ''


def md_to_html(md):
    """
    Простой Markdown-конвертер. Поддерживает:
      # ## ### заголовки
      **жирный** *курсив* `код`
      [текст](url)
      ![alt](url) — картинки
      > цитаты
      - списки и 1. нумерованные
      ```код```
      параграфы
    """
    lines = md.split("\n")
    out = []
    i = 0
    # Стек открытых списков: [("ul"|"ol", indent_level, li_open_bool)]
    # li_open_bool — есть ли незакрытый <li> в этом списке (родитель для вложенных)
    list_stack = []
    in_quote = False
    in_code = False

    def close_top_list():
        """Закрывает верхний список. Если у него есть открытый <li> — сначала его."""
        if not list_stack:
            return
        kind, lvl, li_open = list_stack.pop()
        if li_open:
            out.append("</li>")
        out.append(f"</{kind}>")

    def close_lists_to_level(target_level):
        """Закрывает списки с indent > target_level (с их открытыми <li>)."""
        while list_stack and list_stack[-1][1] > target_level:
            close_top_list()
            # После закрытия вложенного списка родительский <li> на верхнем элементе стека
            # должен оставаться открытым, но мы должны его закрыть, потому что вложенный
            # список был его последним содержимым.
            if list_stack and list_stack[-1][2]:
                out.append("</li>")
                k, l, _ = list_stack[-1]
                list_stack[-1] = (k, l, False)

    def close_lists():
        """Полное закрытие всех списков — используется перед не-списочными блоками."""
        nonlocal in_quote
        while list_stack:
            close_top_list()
        if in_quote:
            out.append("</blockquote>")
            in_quote = False

    while i < len(lines):
        line = lines[i]

        # Блок кода
        if line.strip().startswith("```"):
            if in_code:
                out.append("</code></pre>")
                in_code = False
            else:
                close_lists()
                out.append("<pre><code>")
                in_code = True
            i += 1
            continue
        if in_code:
            out.append(html.escape(line))
            i += 1
            continue

        # Пустая строка
        if line.strip() == "":
            # Если мы внутри списка и следующая непустая строка тоже элемент списка,
            # то список продолжается (пустые строки внутри списка для визуального разделения).
            if list_stack:
                # Проверяем, есть ли дальше элемент списка
                k = i + 1
                while k < len(lines) and lines[k].strip() == "":
                    k += 1
                if k < len(lines) and re.match(r'^[ \t]*([-*]|\d+\.)\s+', lines[k]):
                    # Продолжаем список — просто скипаем пустую строку
                    i += 1
                    continue
            close_lists()
            i += 1
            continue

        # Заголовки
        m = re.match(r'^(#{1,4})\s+(.+)$', line)
        if m:
            close_lists()
            level = len(m.group(1)) + 1  # H1 в frontmatter.title, тут начинаем с H2
            if level > 4:
                level = 4
            out.append(f"<h{level}>{inline(m.group(2))}</h{level}>")
            i += 1
            continue

        # Цитата
        if line.startswith(">"):
            if not in_quote:
                close_lists()
                out.append("<blockquote>")
                in_quote = True
            out.append(f"<p>{inline(line[1:].strip())}</p>")
            i += 1
            continue
        elif in_quote:
            out.append("</blockquote>")
            in_quote = False

        # Список (маркированный или нумерованный, с вложенностью по отступу)
        # Отступ: 4 пробела или 1 таб = +1 уровень
        m_ul = re.match(r'^([ \t]*)[-*]\s+(.+)$', line)
        m_ol = re.match(r'^([ \t]*)\d+\.\s+(.+)$', line)
        m_list = m_ul or m_ol
        if m_list:
            indent_str = m_list.group(1)
            content = m_list.group(2)
            kind = "ul" if m_ul else "ol"
            # Рассчитываем уровень вложенности: таб = 4 пробела
            spaces = indent_str.replace("\t", "    ")
            level = len(spaces) // 4
            # Закрываем все списки с уровнем > level (они закроются вместе со своими <li>)
            while list_stack and list_stack[-1][1] > level:
                close_top_list()
                # После закрытия вложенного списка родительский <li> закрывается
                if list_stack and list_stack[-1][2]:
                    out.append("</li>")
                    k, l, _ = list_stack[-1]
                    list_stack[-1] = (k, l, False)
            # Если на этом уровне уже есть список, но другого вида (ul vs ol) — закроем
            if list_stack and list_stack[-1][1] == level and list_stack[-1][0] != kind:
                close_top_list()
            # Если на этом уровне нет открытого списка — открываем
            if not list_stack or list_stack[-1][1] < level:
                if in_quote:
                    out.append("</blockquote>")
                    in_quote = False
                # Если открываем вложенный список — НЕ закрываем родительский <li>,
                # вложенный список становится содержимым родительского <li>.
                out.append(f"<{kind}>")
                list_stack.append((kind, level, False))
            else:
                # На этом уровне уже открыт список того же вида — закрываем предыдущий <li>
                if list_stack[-1][2]:
                    out.append("</li>")
                    k, l, _ = list_stack[-1]
                    list_stack[-1] = (k, l, False)
            # Открываем <li> и оставляем его открытым (помечаем флагом).
            # Если внутри буллета есть .snitch-floater — добавляем класс has-snitch к <li>,
            # чтобы CSS работал без :has() (для совместимости с любыми браузерами).
            li_class = ' class="has-snitch"' if 'class="snitch-floater"' in content else ''
            out.append(f"<li{li_class}>{inline(content)}")
            k, l, _ = list_stack[-1]
            list_stack[-1] = (k, l, True)
            i += 1
            continue

        # HTML-блок (строка начинается с <тег) — выводим как есть, без оборачивания в <p>
        if re.match(r'^\s*<(?:p|div|section|article|aside|figure|table|ul|ol|h[1-6])\b', line, re.IGNORECASE):
            close_lists()
            block = [line]
            j = i + 1
            # Собираем многострочный HTML-блок до пустой строки
            while j < len(lines) and lines[j].strip() != "":
                block.append(lines[j])
                j += 1
            out.append("\n".join(block))
            i = j
            continue

        # Параграф (собираем многострочный)
        para = [line]
        j = i + 1
        while j < len(lines) and lines[j].strip() and not re.match(r'^(#{1,4}\s|>|[-*]\s|\d+\.\s|```|\s*<(?:p|div|section|article|aside|figure|table|ul|ol|h[1-6])\b)', lines[j]):
            para.append(lines[j])
            j += 1
        out.append(f"<p>{inline(' '.join(para))}</p>")
        i = j

    if in_code:
        out.append("</code></pre>")
    close_lists()
    return "\n".join(out)


def inline(text):
    """Обрабатывает инлайновый markdown."""
    # Экранируем HTML-спецсимволы (но осторожно — уже вставленные теги не трогаем)
    # Этот парсер работает с чистым markdown, HTML-теги внутри обрабатываются как есть.

    # Картинки ![alt](url) — добавляем data-orient="portrait" для высоких
    def _img_repl(m):
        alt, src = m.group(1), m.group(2)
        orient = _img_orient(src)
        attr = f' data-orient="{orient}"' if orient else ''
        return f'<img src="{src}" alt="{alt}"{attr}>'
    text = re.sub(r'!\[([^\]]*)\]\(([^)]+)\)', _img_repl, text)
    # Ссылки [text](url)
    text = re.sub(r'\[([^\]]+)\]\(([^)]+)\)',
                  r'<a href="\2">\1</a>', text)
    # Жирный **
    text = re.sub(r'\*\*([^*]+)\*\*', r'<strong>\1</strong>', text)
    # Зачёркнутый ~~текст~~
    text = re.sub(r'~~([^~]+)~~', r'<s>\1</s>', text)
    # Курсив *
    text = re.sub(r'(?<!\*)\*([^*]+)\*(?!\*)', r'<em>\1</em>', text)
    # Код `
    text = re.sub(r'`([^`]+)`', r'<code>\1</code>', text)
    return text


# ═══════════════════════════════════════════════════════════════════
# Загрузка всех постов
# ═══════════════════════════════════════════════════════════════════

def first_sentence(markdown_body):
    """Авто-лид: первое предложение первого текстового абзаца.
    Пропускает заголовки (#), картинки (![]()), цитаты (>), списки (-).
    Снимает markdown-разметку **/*/`/[](). Обрезает на . ! ?"""
    for block in re.split(r"\n\s*\n", markdown_body.strip()):
        first_line = block.strip().split("\n", 1)[0].strip()
        if not first_line:
            continue
        if first_line.startswith(("#", ">", "-", "*", "!", "|", "```")):
            continue
        if re.match(r"^\d+\.\s", first_line):
            continue
        # Снимаем разметку
        t = first_line
        t = re.sub(r"!\[[^\]]*\]\([^)]+\)", "", t)  # картинки
        t = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", t)  # ссылки → текст
        t = re.sub(r"\*\*([^*]+)\*\*", r"\1", t)
        t = re.sub(r"(?<!\*)\*([^*]+)\*(?!\*)", r"\1", t)
        t = re.sub(r"`([^`]+)`", r"\1", t)
        t = t.strip()
        if not t:
            continue
        # Первое предложение — до . ! ? (не путаться с сокращениями: оставляем простым)
        m = re.search(r"[.!?](?:\s|$)", t)
        if m:
            return t[: m.end()].strip()
        return t
    return ""


def load_posts():
    posts = []
    if not POSTS_DIR.exists():
        return posts

    for path in sorted(POSTS_DIR.glob("*.md")):
        # Шаблон не обрабатываем
        if path.name.startswith("_"):
            continue
        if path.name.lower() == "readme.md":
            continue

        text = path.read_text(encoding="utf-8")
        meta, body = parse_frontmatter(text)

        # Пропускаем черновики
        status = meta.get("status", "published")
        if status == "draft":
            print(f"  · skip (draft): {path.name}")
            continue

        # Обязательные поля
        if not meta.get("slug") or not meta.get("title"):
            print(f"  ! skip (нет slug или title): {path.name}", file=sys.stderr)
            continue

        meta["body_html"] = md_to_html(body)
        meta["source_file"] = path.name
        meta["lang"] = meta.get("lang", "ru")
        meta["pinned"] = bool(meta.get("pinned", False))
        # Авто-лид из первого предложения тела
        meta["lead"] = first_sentence(body)

        # Дата → сортируемое
        d = meta.get("date", "")
        try:
            meta["_date_key"] = datetime.strptime(str(d)[:10], "%Y-%m-%d").date()
        except Exception:
            meta["_date_key"] = date(1970, 1, 1)

        posts.append(meta)

    # Сортировка: закреплённые сверху, потом по дате (новые сверху)
    posts.sort(key=lambda p: (not p["pinned"], -p["_date_key"].toordinal()))
    return posts


# ═══════════════════════════════════════════════════════════════════
# Генерация страниц постов
# ═══════════════════════════════════════════════════════════════════

def render_post_page(post):
    """Создаёт /articles/<slug>/index.html (ru) или /en/articles/<slug>/index.html (en)."""
    lang = post.get("lang", "ru")
    tpl_name = "article-en.html" if lang == "en" else "article.html"
    tpl_path = TEMPLATES_DIR / tpl_name
    if not tpl_path.exists():
        # Fallback на общий шаблон, если en-шаблона нет
        tpl_path = TEMPLATES_DIR / "article.html"
    if not tpl_path.exists():
        print(f"  ! templates/{tpl_name} не найден — пропускаю генерацию страниц", file=sys.stderr)
        return False

    tpl = tpl_path.read_text(encoding="utf-8")

    # Простая замена плейсхолдеров
    replacements = {
        "{{TITLE}}": escape(post["title"]),
        "{{SUMMARY}}": escape(post.get("lead", "")),
        "{{LEAD}}": escape(post.get("lead", "")),
        "{{LANG}}": post.get("lang", "ru"),
        "{{DATE}}": str(post.get("date", "")),
        "{{KICKER}}": escape(post.get("kicker", "")),
        "{{BODY}}": post["body_html"],
        "{{READING_TIME}}": str(post.get("reading_time", "")),
    }
    out = tpl
    for k, v in replacements.items():
        out = out.replace(k, v)

    # Условные блоки {{#KICKER}}…{{/KICKER}}
    out = resolve_conditionals(out, post)

    base_dir = ARTICLES_EN_DIR if lang == "en" else ARTICLES_DIR
    out_dir = base_dir / post["slug"]
    out_dir.mkdir(parents=True, exist_ok=True)
    (out_dir / "index.html").write_text(out, encoding="utf-8")
    return True


def resolve_conditionals(html_str, post):
    """Поддержка {{#FIELD}}...{{/FIELD}} — блок показывается если FIELD задано."""
    for field, marker in [("kicker", "KICKER"), ("reading_time", "READING_TIME")]:
        pattern = r"\{\{#" + marker + r"\}\}(.*?)\{\{/" + marker + r"\}\}"
        if post.get(field):
            html_str = re.sub(pattern, r"\1", html_str, flags=re.DOTALL)
        else:
            html_str = re.sub(pattern, "", html_str, flags=re.DOTALL)
    return html_str


def escape(s):
    return html.escape(str(s or ""), quote=True)


# ═══════════════════════════════════════════════════════════════════
# Вставка карточек в index.html и index-en.html
# ═══════════════════════════════════════════════════════════════════

def render_card(post):
    """Одна <li>-карточка как в существующей ленте."""
    lang = post.get("lang", "ru")
    prefix = "/en/articles" if lang == "en" else "/articles"
    url = f'{prefix}/{post["slug"]}/'
    title = post["title"]
    cls = ' class="is-pinned"' if post.get("pinned") else ''
    # В существующих карточках используется &nbsp; для типографики — автоматически не ставим,
    # пусть автор сам расставляет в title если надо
    return f'<li data-slug="{escape(post["slug"])}"{cls}><a href="{url}">{escape(title)}</a></li>'


def inject_cards(index_path, cards_html):
    if not index_path.exists():
        print(f"  ! {index_path} не найден", file=sys.stderr)
        return

    text = index_path.read_text(encoding="utf-8")
    if MARK_START not in text or MARK_END not in text:
        print(f"  ! в {index_path.name} нет маркеров POSTS:START/END — пропускаю", file=sys.stderr)
        return

    pattern = re.compile(
        re.escape(MARK_START) + r".*?" + re.escape(MARK_END),
        re.DOTALL,
    )
    block = f"{MARK_START}\n{cards_html}\n          {MARK_END}"
    new_text = pattern.sub(block, text)
    if new_text != text:
        index_path.write_text(new_text, encoding="utf-8")
        print(f"  ✓ {index_path.name}: обновлено")
    else:
        print(f"  · {index_path.name}: без изменений")


# ═══════════════════════════════════════════════════════════════════
# MAIN
# ═══════════════════════════════════════════════════════════════════

def main():
    print("▶ Сборка сайта Елены Масоловой")
    print(f"  корень: {ROOT}")

    posts = load_posts()
    print(f"  постов (опубликованных): {len(posts)}")

    # 1. Генерация страниц постов
    generated = 0
    for post in posts:
        if render_post_page(post):
            generated += 1
            prefix = "/en/articles" if post.get("lang") == "en" else "/articles"
            print(f"  ✓ {prefix}/{post['slug']}/ ({post['lang']})")
    print(f"  сгенерировано страниц: {generated}")

    # 2. Вставка карточек на главные
    by_lang = {"ru": [], "en": []}
    for post in posts:
        lang = post.get("lang", "ru")
        if lang in by_lang:
            by_lang[lang].append(post)

    for lang, path in [("ru", INDEX_RU), ("en", INDEX_EN)]:
        cards = "\n          ".join(render_card(p) for p in by_lang[lang])
        if not cards.strip():
            cards = ""  # пусто — маркеры остаются пустыми
        inject_cards(path, cards)

    # 3. RSS-фиды (для Buttondown и читателей)
    write_feed(FEED_RU, by_lang["ru"], lang="ru",
               title="Елена Масолова — блог",
               description="Продукт, данные, AI, языки.")
    write_feed(FEED_EN, by_lang["en"], lang="en",
               title="Elena Masolova — blog",
               description="Product, data, AI, languages.")

    print("✔ Готово")




# ═══════════════════════════════════════════════════════════════════
# RSS-фид (для Buttondown и читателей)
# ═══════════════════════════════════════════════════════════════════

def rfc822(d):
    """Дата в RFC822 для RSS."""
    if isinstance(d, date) and not isinstance(d, datetime):
        d = datetime(d.year, d.month, d.day)
    return d.strftime("%a, %d %b %Y %H:%M:%S +0000")


def write_feed(path, posts, lang, title, description):
    """Валидный RSS 2.0. Buttondown читает фид и шлёт письмо
    на каждый новый <item>."""
    feed_url = f"{SITE_URL}/{path.name}"
    items_xml = []
    for p in posts:
        plang = p.get("lang", "ru")
        prefix = "/en/articles" if plang == "en" else "/articles"
        url = f"{SITE_URL}{prefix}/{p['slug']}/"
        pub = rfc822(p["_date_key"])
        summary = p.get("lead", "")
        body = p["body_html"]
        items_xml.append(f"""    <item>
      <title>{escape(p['title'])}</title>
      <link>{url}</link>
      <guid isPermaLink="true">{url}</guid>
      <pubDate>{pub}</pubDate>
      <description>{escape(summary)}</description>
      <content:encoded><![CDATA[{body}]]></content:encoded>
    </item>""")

    now = rfc822(datetime.now(timezone.utc))
    xml = f"""<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>{escape(title)}</title>
    <link>{SITE_URL}/</link>
    <description>{escape(description)}</description>
    <language>{lang}</language>
    <lastBuildDate>{now}</lastBuildDate>
    <atom:link href="{feed_url}" rel="self" type="application/rss+xml"/>
{chr(10).join(items_xml)}
  </channel>
</rss>
"""
    path.write_text(xml, encoding="utf-8")
    print(f"  RSS {path.name}: {len(posts)} пост(ов)")


if __name__ == "__main__":
    main()

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
    in_ul = False
    in_ol = False
    in_quote = False
    in_code = False

    def close_lists():
        nonlocal in_ul, in_ol, in_quote
        if in_ul:
            out.append("</ul>")
            in_ul = False
        if in_ol:
            out.append("</ol>")
            in_ol = False
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

        # Пустая
        if line.strip() == "":
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

        # Маркированный список
        m = re.match(r'^[-*]\s+(.+)$', line)
        if m:
            if not in_ul:
                close_lists()
                out.append("<ul>")
                in_ul = True
            out.append(f"<li>{inline(m.group(1))}</li>")
            i += 1
            continue
        elif in_ul:
            out.append("</ul>")
            in_ul = False

        # Нумерованный список
        m = re.match(r'^\d+\.\s+(.+)$', line)
        if m:
            if not in_ol:
                close_lists()
                out.append("<ol>")
                in_ol = True
            out.append(f"<li>{inline(m.group(1))}</li>")
            i += 1
            continue
        elif in_ol:
            out.append("</ol>")
            in_ol = False

        # Параграф (собираем многострочный)
        para = [line]
        j = i + 1
        while j < len(lines) and lines[j].strip() and not re.match(r'^(#{1,4}\s|>|[-*]\s|\d+\.\s|```)', lines[j]):
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

    # Картинки ![alt](url)
    text = re.sub(r'!\[([^\]]*)\]\(([^)]+)\)',
                  r'<img src="\2" alt="\1">', text)
    # Ссылки [text](url)
    text = re.sub(r'\[([^\]]+)\]\(([^)]+)\)',
                  r'<a href="\2">\1</a>', text)
    # Жирный **
    text = re.sub(r'\*\*([^*]+)\*\*', r'<strong>\1</strong>', text)
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
    """Создаёт /articles/<slug>/index.html из шаблона."""
    tpl_path = TEMPLATES_DIR / "article.html"
    if not tpl_path.exists():
        print(f"  ! templates/article.html не найден — пропускаю генерацию страниц", file=sys.stderr)
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

    out_dir = ARTICLES_DIR / post["slug"]
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
    url = f'/articles/{post["slug"]}/'
    title = post["title"]
    # В существующих карточках используется &nbsp; для типографики — автоматически не ставим,
    # пусть автор сам расставляет в title если надо
    return f'<li data-slug="{escape(post["slug"])}"><a href="{url}">{escape(title)}</a></li>'


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
            print(f"  ✓ /articles/{post['slug']}/ ({post['lang']})")
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
        url = f"{SITE_URL}/articles/{p['slug']}/"
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

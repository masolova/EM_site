#!/usr/bin/env python3
"""
Создаёт/обновляет страницы /tags/<slug>/index.html для всех тегов,
встречающихся в постах. Берёт шаблон из tags/pelevin/index.html.
Список постов формируется из content/posts/*.md (только status=published, lang=ru).
Затем нужно вызвать rebuild-sidebar.py — он обновит сайдбар на всех страницах.
"""
import re, yaml, shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
POSTS_DIR = ROOT / "content" / "posts"
TAGS_DIR = ROOT / "tags"
TEMPLATE = TAGS_DIR / "pelevin" / "index.html"

# Должно совпадать с rebuild-sidebar.py
TAG_SLUGS = {
    "дизайн": "design", "стартап": "startup", "норильск": "norilsk",
    "кремниевая долина": "silicon-valley", "лонгрид": "longread",
    "forza": "forza", "пелевин": "pelevin", "гумилёв": "gumilev",
    "кант": "kant", "ai": "ai", "ии": "ai", "топ": "top",
    "бродский": "brodsky", "толкин": "tolkien", "макиавелли": "machiavelli",
    "друкер": "drucker", "твен": "twain", "олеша": "olesha",
}
TAG_LABELS = {
    "design": "Дизайн", "startup": "Стартап", "norilsk": "Норильск",
    "silicon-valley": "Кремниевая долина", "longread": "Лонгрид",
    "forza": "Forza", "pelevin": "Пелевин", "gumilev": "Гумилёв",
    "kant": "Кант", "ai": "AI", "top": "Топ",
    "brodsky": "Бродский", "tolkien": "Толкин", "machiavelli": "Макиавелли",
    "drucker": "Друкер", "twain": "Твен", "olesha": "Олеша",
}


def collect_posts_by_tag():
    by_tag = {}
    for md in POSTS_DIR.glob("*.md"):
        if md.name.startswith("_") or md.name == "README.md":
            continue
        text = md.read_text(encoding="utf-8")
        m = re.match(r"^---\n(.*?)\n---", text, re.DOTALL)
        if not m:
            continue
        meta = yaml.safe_load(m.group(1)) or {}
        if meta.get("status", "published") != "published":
            continue
        if meta.get("lang", "ru") != "ru":
            continue
        title = meta.get("title", md.stem)
        slug = meta.get("slug", md.stem)
        date = str(meta.get("date", ""))
        for t in meta.get("tags", []) or []:
            tag_slug = TAG_SLUGS.get(t.lower())
            if not tag_slug:
                continue
            by_tag.setdefault(tag_slug, []).append({
                "title": title, "slug": slug, "date": date,
            })
    # Сортируем по дате убыв.
    for ts, posts in by_tag.items():
        posts.sort(key=lambda p: p["date"], reverse=True)
    return by_tag


def render_post_list(posts):
    items = []
    for p in posts:
        items.append(
            f'          <li><a href="/articles/{p["slug"]}/">{p["title"]}</a></li>'
        )
    return "\n".join(items)


def make_page(slug, label, posts):
    template_html = TEMPLATE.read_text(encoding="utf-8")
    # 1. <title>
    new = re.sub(
        r'<title>[^<]*</title>',
        f'<title>Посты с тегом «{label}» — Елена Масолова</title>',
        template_html, count=1
    )
    # 2. <section class="posts" aria-label="..."> ... </section>
    posts_block = (
        f'<section class="posts" aria-label="Посты с тегом {label}">\n'
        f'        <ul class="posts__list posts__list--arrow">\n'
        f'{render_post_list(posts)}\n'
        f'        </ul>\n'
        f'      </section>'
    )
    new = re.sub(
        r'<section class="posts"[^>]*>.*?</section>',
        lambda m: posts_block, new, count=1, flags=re.DOTALL
    )
    out_dir = TAGS_DIR / slug
    out_dir.mkdir(parents=True, exist_ok=True)
    (out_dir / "index.html").write_text(new, encoding="utf-8")


def main():
    by_tag = collect_posts_by_tag()
    print("теги:", {k: len(v) for k, v in by_tag.items()})
    for slug, posts in by_tag.items():
        label = TAG_LABELS.get(slug, slug)
        make_page(slug, label, posts)
        print(f"  ✓ /tags/{slug}/  ({len(posts)} постов)")


if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""
Полностью перестраивает блок <aside class="tags"> на главной и на страницах тегов:
- список тегов = реальные теги, посчитанные по постам, по убыванию count
  (при равенстве — по алфавиту);
- кнопка «Показать все» удаляется (её больше не нужно);
- активный тег помечается классом is-active и aria-current.

Карта рус. тег → slug:
  дизайн             -> design
  стартап            -> startup
  норильск           -> norilsk
  кремниевая долина  -> silicon-valley
  лонгрид            -> longread
"""
import re, yaml
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
POSTS_DIR = ROOT / "content" / "posts"
TAGS_DIR = ROOT / "tags"

TAG_SLUGS = {
    "дизайн": "design",
    "стартап": "startup",
    "норильск": "norilsk",
    "кремниевая долина": "silicon-valley",
    "лонгрид": "longread",
    "forza": "forza",
    "пелевин": "pelevin",
}
TAG_LABELS = {
    "design": "Дизайн",
    "startup": "Стартап",
    "norilsk": "Норильск",
    "silicon-valley": "Кремниевая долина",
    "longread": "Лонгрид",
    "forza": "Forza",
    "pelevin": "Пелевин",
}


def collect_tag_counts():
    counts = {}
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
        for t in meta.get("tags", []) or []:
            slug = TAG_SLUGS.get(t.lower())
            if not slug:
                continue
            counts[slug] = counts.get(slug, 0) + 1
    return counts


def render_aside(active_slug=None):
    counts = collect_tag_counts()
    items = sorted(
        counts.items(),
        key=lambda kv: (-kv[1], TAG_LABELS[kv[0]].lower())
    )
    lis = []
    for slug, cnt in items:
        label = TAG_LABELS[slug]
        a_attrs = ""
        if active_slug == slug:
            a_attrs = ' class="is-active" aria-current="page"'
        lis.append(
            f'          <li><a href="/tags/{slug}/"{a_attrs}>'
            f'<span class="tag">{label}</span>'
            f'<span class="count">{cnt}</span></a></li>'
        )

    return (
        '      <aside class="tags" aria-label="Теги">\n'
        '        <div class="tags__head">\n'
        '          <h2 class="tags__title">Темы</h2>\n'
        '        </div>\n'
        '        <ul class="tags__list">\n'
        + "\n".join(lis) + "\n"
        '        </ul>\n'
        '      </aside>'
    )


ASIDE_RE = re.compile(
    r'<aside class="tags"[^>]*>.*?</aside>',
    re.DOTALL | re.IGNORECASE
)


def replace_in(path, active_slug=None):
    html = path.read_text(encoding="utf-8")
    new_block = render_aside(active_slug)
    new = ASIDE_RE.sub(lambda m: new_block, html, count=1)
    if new != html:
        path.write_text(new, encoding="utf-8")
        return True
    return False


def main():
    print("теги:", collect_tag_counts())
    changed = 0

    idx = ROOT / "index.html"
    if replace_in(idx):
        print(f"  ✓ {idx.relative_to(ROOT)}")
        changed += 1

    for d in sorted(TAGS_DIR.iterdir()):
        if not d.is_dir():
            continue
        f = d / "index.html"
        if not f.exists():
            continue
        if replace_in(f, active_slug=d.name):
            print(f"  ✓ {f.relative_to(ROOT)}")
            changed += 1

    print(f"обновлено: {changed}")


if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""
Синхронизирует шапку (<header class="top">) и био-блок (<section class="bio">)
на всех страницах /tags/<slug>/index.html из главной index.html (ru).

Нужно запускать после правок главной, чтобы страницы тегов не расходились
с актуальной биографией и хайлайтами.
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

def extract_block(html, start_tag_re, tag_name):
    """Достаёт блок <tag ...>...</tag> по регулярке старт-тега."""
    m = start_tag_re.search(html)
    if not m:
        raise RuntimeError(f"start tag not found for {tag_name}")
    start = m.start()
    # ищем закрывающий тег того же уровня простым счётчиком
    depth = 0
    i = start
    open_re = re.compile(r"<" + tag_name + r"\b", re.IGNORECASE)
    close_re = re.compile(r"</" + tag_name + r"\s*>", re.IGNORECASE)
    while i < len(html):
        om = open_re.search(html, i)
        cm = close_re.search(html, i)
        if not cm:
            raise RuntimeError(f"close tag not found for {tag_name}")
        if om and om.start() < cm.start():
            depth += 1
            i = om.end()
        else:
            depth -= 1
            i = cm.end()
            if depth == 0:
                return html[start:i]
    raise RuntimeError(f"unbalanced {tag_name}")

def replace_block(html, start_tag_re, tag_name, new_block):
    """Заменяет первый блок <tag ...>...</tag> на new_block."""
    old = extract_block(html, start_tag_re, tag_name)
    return html.replace(old, new_block, 1)

def fix_relative_paths(block, level_up):
    """
    На главной картинка в bio — src="assets/elena.jpg" (относительный путь).
    На страницах тегов нужен абсолютный "/assets/elena.jpg", чтобы работало с /tags/xxx/.
    """
    # assets/ (без ведущего слеша) -> /assets/
    block = re.sub(r'src="assets/', 'src="/assets/', block)
    block = re.sub(r"src='assets/", "src='/assets/", block)
    # href="#" brand -> href="/"
    block = re.sub(r'<a href="#" class="brand">', '<a href="/" class="brand">', block)
    return block

def main():
    main_html = (ROOT / "index.html").read_text(encoding="utf-8")

    header_re   = re.compile(r'<header\s+class="top"', re.IGNORECASE)
    bio_re      = re.compile(r'<section\s+class="bio"', re.IGNORECASE)
    hlmob_re    = re.compile(r'<nav\s+class="hl-mobile"', re.IGNORECASE)

    new_header = extract_block(main_html, header_re, "header")
    new_bio    = extract_block(main_html, bio_re, "section")
    try:
        new_hlmob = extract_block(main_html, hlmob_re, "nav")
    except RuntimeError:
        new_hlmob = None

    new_header = fix_relative_paths(new_header, 2)
    new_bio    = fix_relative_paths(new_bio, 2)
    if new_hlmob:
        new_hlmob = fix_relative_paths(new_hlmob, 2)

    tag_dirs = sorted((ROOT / "tags").iterdir())
    changed = 0
    for d in tag_dirs:
        if not d.is_dir():
            continue
        f = d / "index.html"
        if not f.exists():
            continue
        html = f.read_text(encoding="utf-8")
        new = replace_block(html, header_re, "header", new_header)
        new = replace_block(new,  bio_re,    "section", new_bio)
        # Обработка hl-mobile — либо заменить существующий, либо вставить сразу после </header>
        if new_hlmob:
            if hlmob_re.search(new):
                new = replace_block(new, hlmob_re, "nav", new_hlmob)
            else:
                # вставляем после первого </header>
                new = re.sub(
                    r'(</header>)',
                    r'\1\n\n    ' + new_hlmob,
                    new,
                    count=1,
                )
        if new != html:
            f.write_text(new, encoding="utf-8")
            changed += 1
            print(f"  ✓ {f.relative_to(ROOT)}")
        else:
            print(f"  · {f.relative_to(ROOT)} — без изменений")
    print(f"обновлено страниц: {changed}")

if __name__ == "__main__":
    main()

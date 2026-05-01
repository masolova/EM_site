#!/usr/bin/env python3
"""build-en-tags.py — генерирует /en/tags/<slug>/index.html для английских тегов.
Запускать после build.py.
"""
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parent.parent
POSTS_DIR = ROOT / "content" / "posts"
EN_TAGS_DIR = ROOT / "en" / "tags"

# slug → (display name, posts list as (slug, title, date))
TAGS = {
    "startup": "Startup",
    "longread": "Longread",
    "forza": "Forza",
    "silicon-valley": "Silicon&nbsp;Valley",
    "norilsk": "Norilsk",
    "design": "Design",
}

# Соответствие тег-name → slug
TAG_SLUG = {
    "Startup": "startup",
    "Longread": "longread",
    "Forza": "forza",
    "Silicon Valley": "silicon-valley",
    "Norilsk": "norilsk",
    "Design": "design",
}


def parse_fm(text):
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
        s = line.strip()
        if not s or s.startswith("#"):
            i += 1; continue
        m = re.match(r'^([a-zA-Z_][a-zA-Z0-9_]*)\s*:\s*(.*)$', line)
        if not m:
            i += 1; continue
        key, value = m.group(1), m.group(2).strip()
        if value == "":
            items = []
            j = i + 1
            while j < len(lines):
                nl = lines[j]
                nm = re.match(r'^\s*-\s+(.*)$', nl)
                if nm:
                    v = nm.group(1).strip()
                    if len(v) >= 2 and v[0] == v[-1] and v[0] in ('"', "'"):
                        v = v[1:-1]
                    items.append(v)
                    j += 1
                elif nl.strip() == "" or nl.strip().startswith("#"):
                    j += 1
                else:
                    break
            if items:
                meta[key] = items
                i = j
                continue
        if len(value) >= 2 and value[0] == value[-1] and value[0] in ('"', "'"):
            value = value[1:-1]
        meta[key] = value
        i += 1
    return meta, body


# Собираем EN-посты
en_posts = []  # list of dicts {slug, title, date, tags, pinned}
for path in sorted(POSTS_DIR.glob("*.md")):
    if path.name.startswith("_") or path.name.lower() == "readme.md":
        continue
    text = path.read_text(encoding="utf-8")
    meta, _ = parse_fm(text)
    if meta.get("lang") != "en":
        continue
    if meta.get("status", "published") == "draft":
        continue
    en_posts.append({
        "slug": meta["slug"],
        "title": meta["title"],
        "date": meta.get("date", ""),
        "tags": meta.get("tags", []),
        "pinned": str(meta.get("pinned", "")).lower() == "true",
    })

# Сортировка: pinned сверху, потом по дате (новые сверху)
en_posts.sort(key=lambda p: (not p["pinned"], p["date"]), reverse=False)
# Нужно: pinned сверху, дата убывание. Применим стабильную сортировку:
en_posts.sort(key=lambda p: p["date"], reverse=True)
en_posts.sort(key=lambda p: not p["pinned"])

# Считаем теги
tag_counts = {}
for p in en_posts:
    for t in p["tags"]:
        slug = TAG_SLUG.get(t)
        if slug:
            tag_counts[slug] = tag_counts.get(slug, 0) + 1

# Шаблон страницы
def render_tag_page(active_slug, active_name):
    posts_in_tag = []
    target_name = next((n for n, s in TAG_SLUG.items() if s == active_slug), None)
    for p in en_posts:
        if target_name in p["tags"]:
            posts_in_tag.append(p)

    # tags aside (sorted by count desc, then by predefined order)
    tag_order = ["startup", "longread", "forza", "silicon-valley", "norilsk", "design"]
    tags_aside_items = []
    for slug in tag_order:
        cnt = tag_counts.get(slug, 0)
        if cnt == 0:
            continue
        name = TAGS[slug]
        cls = ' class="is-active" aria-current="page"' if slug == active_slug else ''
        tags_aside_items.append(
            f'<li><a href="/en/tags/{slug}/"{cls}><span class="tag">{name}</span><span class="count">{cnt}</span></a></li>'
        )

    posts_list_items = []
    for p in posts_in_tag:
        cls = ' class="is-pinned"' if p["pinned"] else ''
        posts_list_items.append(
            f'<li data-slug="{p["slug"]}"{cls}><a href="/en/articles/{p["slug"]}/">{p["title"]}</a></li>'
        )

    # name without &nbsp; for title
    plain_name = active_name.replace("&nbsp;", " ")

    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{plain_name} — Elena Masolova</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,400;0,700;1,400&family=IBM+Plex+Sans:wght@400;500;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/styles.css">
  <script defer src="/assets/site.js"></script>
  <!-- Favicon -->
  <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16.png">
  <link rel="shortcut icon" href="/assets/favicon/favicon.ico">
  <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png">
  <link rel="manifest" href="/assets/favicon/site.webmanifest">
  <meta name="theme-color" content="#1a1a1a">
</head>
<body class="page-tag">
  <div class="page">

    <header class="top">
      <a href="/index-en.html" class="brand">Elena Masolova</a>
      <div class="top-right">

        <nav class="top-nav">

          <a href="/en/articles/looking-for-eir/">Looking for EIR<span class="emo-d" aria-hidden="true"> 🦸‍♂️</span></a>
          <a href="/en/articles/request-for-startups/">Request for Startups<span class="emo-d" aria-hidden="true"> 💎</span></a>
          <a href="/games/connections/">Connections&nbsp;game</a>

        </nav>

        <div class="lang" data-lang>
          <button type="button" class="lang__current" aria-haspopup="listbox" aria-expanded="false">
            <span class="lang__flag" aria-hidden="true">🇬🇧</span>EN<span class="lang__chev" aria-hidden="true"></span>
          </button>
          <div class="lang__menu" role="listbox">
            <a href="/" role="option"><span class="lang__flag" aria-hidden="true">🇷🇺</span>Russian</a>
            <a href="#" class="is-active" role="option"><span class="lang__flag" aria-hidden="true">🇬🇧</span>English</a>
          </div>
        </div>

        <button class="top-burger" aria-label="Menu" type="button">
        <span></span><span></span><span></span>
      </button>

      </div>
    </header>

    <nav class="hl-mobile" aria-label="Highlights">
      <a href="/en/articles/looking-for-eir/">Looking for EIR<span class="emo-d" aria-hidden="true"> 🦸‍♂️</span></a>
      <a href="/en/articles/request-for-startups/">Request for Startups<span class="emo-d" aria-hidden="true"> 💎</span></a>
    </nav>

    <!-- Bio — same as homepage -->
    <section class="bio">
      <div class="bio__photo">
        <img src="/assets/elena.jpg" alt="Elena Masolova">
      </div>
      <div class="bio__text">
        <h1>Elena Masolova</h1>
        <div class="bio__body">
          <p>Entrepreneur with 6&nbsp;exits (including Groupon, Pixonic, Eduson).</p>
          <p>Built 11&nbsp;startups with $1M+ revenue (including AddVenture&nbsp;II, Wallstr, BeautyBox).</p>
          <p>Investor at <a href="https://forza.capital" target="_blank" rel="noopener">Forza.Capital</a>.</p>
          <p>
            Norilsk
            <span class="arrow" aria-hidden="true">
              <svg viewBox="0 0 22 12" fill="none" stroke="#1f1f1e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M1 6 H20 M15 2 L20 6 L15 10"/>
              </svg>
            </span>
            Moscow
            <span class="arrow" aria-hidden="true">
              <svg viewBox="0 0 22 12" fill="none" stroke="#1f1f1e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M1 6 H20 M15 2 L20 6 L15 10"/>
              </svg>
            </span>
            Silicon&nbsp;Valley.
          </p>
          <p>I read 180–200&nbsp;books a&nbsp;year <span class="emo">📚</span> and love tennis <span class="emo">🎾</span>.</p>
        </div>

        <div class="bio__socials">
          <a href="https://linkedin.com/in/masolova" target="_blank" rel="noopener">LinkedIn</a>
          <a href="https://x.com/masolova" target="_blank" rel="noopener">Twitter</a>
          <a href="https://www.instagram.com/elena_masolova/" target="_blank" rel="noopener">Instagram</a>
          <a href="https://www.goodreads.com/user/show/107770261-elena-masolova" target="_blank" rel="noopener">Goodreads</a>
        </div>
      </div>
    </section>

    <aside class="cta-strip" aria-label="Subscribe">
      <form class="cta-strip__form" action="https://buttondown.com/api/emails/embed-subscribe/elenamasolova" method="post" target="popupwindow" onsubmit="window.open('https://buttondown.com/elenamasolova', 'popupwindow')">
        <input type="hidden" name="tag" value="en">
        <input type="email" name="email" placeholder="Your email" required>
        <button type="submit">Subscribe</button>
      </form>
      <div class="cta-strip__hint">Digest once a month.</div>
    </aside>

    <!-- Tag sidebar (active highlighted) + filtered posts list -->
    <main class="main">

                                    <aside class="tags" aria-label="Topics">
        <div class="tags__head">
          <h2 class="tags__title">Topics</h2>
        </div>
        <ul class="tags__list">
          {chr(10).join('          ' + item for item in tags_aside_items).strip()}
        </ul>
      </aside>

      <section class="posts" aria-label="Posts tagged {plain_name}">
        <ul class="posts__list posts__list--arrow">
          {chr(10).join('          ' + item for item in posts_list_items).strip()}
        </ul>
      </section>

    </main>

    <footer class="foot">
      <a class="foot__email" href="mailto:hello@masolova.com">hello@masolova.com</a>
      <p>© Elena Masolova</p>
    </footer>

  </div>
</body>
</html>
"""


def main():
    print("▶ EN tag pages")
    EN_TAGS_DIR.mkdir(parents=True, exist_ok=True)
    for slug, name in TAGS.items():
        if tag_counts.get(slug, 0) == 0:
            continue
        out_dir = EN_TAGS_DIR / slug
        out_dir.mkdir(parents=True, exist_ok=True)
        html = render_tag_page(slug, name)
        (out_dir / "index.html").write_text(html, encoding="utf-8")
        print(f"  ✓ /en/tags/{slug}/ ({tag_counts[slug]} posts)")
    print("✔ Done")


if __name__ == "__main__":
    main()

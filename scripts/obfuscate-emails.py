#!/usr/bin/env python3
"""Replace plain mailto: emails with data-u/data-d attributes.
Bots scraping HTML will not find any '@' or 'mailto:' for these addresses."""
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Pattern: <a class="..." href="mailto:USER@DOMAIN">USER@DOMAIN</a>
# Replace with: <a class="..." data-u="USER" data-d="DOMAIN"></a>
PATTERN = re.compile(
    r'<a\s+([^>]*?)href="mailto:([^"@]+)@([^"]+)"([^>]*)>\s*[^<]*?\s*</a>',
    re.IGNORECASE
)

def obfuscate(match):
    pre = match.group(1).strip()
    user = match.group(2)
    domain = match.group(3)
    post = match.group(4).strip()
    attrs = []
    if pre:
        attrs.append(pre)
    if post:
        attrs.append(post)
    attrs.append(f'data-u="{user}"')
    attrs.append(f'data-d="{domain}"')
    return f'<a {" ".join(attrs)}></a>'

def process_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        html = f.read()
    new = PATTERN.sub(obfuscate, html)
    if new != html:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new)
        return True
    return False

if __name__ == '__main__':
    changed = []
    for dirpath, dirnames, filenames in os.walk(ROOT):
        dirnames[:] = [d for d in dirnames if not d.startswith('.') and d != 'admin']
        for fn in filenames:
            if not fn.endswith('.html'):
                continue
            p = os.path.join(dirpath, fn)
            if process_file(p):
                changed.append(os.path.relpath(p, ROOT))
    print(f'Updated {len(changed)} files')
    for p in changed:
        print(f'  + {p}')

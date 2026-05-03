#!/usr/bin/env python3
"""Inject <script src="...subscribe.js"> into every page that has a Buttondown form."""
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def find_targets():
    targets = []
    for dirpath, dirnames, filenames in os.walk(ROOT):
        # Skip hidden dirs
        dirnames[:] = [d for d in dirnames if not d.startswith('.') and d != 'admin']
        for fn in filenames:
            if not fn.endswith('.html'):
                continue
            p = os.path.join(dirpath, fn)
            with open(p, 'r', encoding='utf-8') as f:
                content = f.read()
            if 'buttondown' in content:
                targets.append(p)
    return targets

def inject(path):
    with open(path, 'r', encoding='utf-8') as f:
        html = f.read()

    if 'subscribe.js' in html:
        return False

    # Determine path style by looking at how site.js is referenced
    site_js_match = re.search(r'src="(/?assets/site\.js)"', html)
    if site_js_match:
        site_js_src = site_js_match.group(1)
        sub_src = site_js_src.replace('site.js', 'subscribe.js')
        # Insert subscribe.js script tag right after site.js script line
        new_tag = f'<script defer src="{sub_src}"></script>'
        new_html = re.sub(
            r'(<script\s+defer\s+src="/?assets/site\.js"></script>)',
            r'\1\n  ' + new_tag,
            html,
            count=1,
        )
    else:
        # Fallback: insert before </body>
        sub_src = '/assets/subscribe.js'
        new_tag = f'<script defer src="{sub_src}"></script>\n'
        new_html = html.replace('</body>', new_tag + '</body>', 1)

    with open(path, 'w', encoding='utf-8') as f:
        f.write(new_html)
    return True

if __name__ == '__main__':
    targets = find_targets()
    print(f'Found {len(targets)} files with Buttondown forms')
    changed = 0
    for p in targets:
        if inject(p):
            changed += 1
            print(f'  + {os.path.relpath(p, ROOT)}')
        else:
            print(f'  = {os.path.relpath(p, ROOT)} (already has subscribe.js)')
    print(f'\nUpdated {changed} files')

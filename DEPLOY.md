# Подключение домена elenamasolova.com к GitHub Pages

Разовая настройка. Дальше при пуше в `main` сайт сам обновляется.

---

## Шаг 1. Включить GitHub Pages в репо

1. Зайти: `https://github.com/masolova/EM_site/settings/pages`
2. В разделе **Build and deployment**:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` + `/ (root)` → **Save**
3. Подождать 1–2 минуты — появится строка «Your site is live at https://masolova.github.io/EM_site/»
4. В разделе **Custom domain** ввести `elenamasolova.com` → **Save**
   - GitHub сразу начнёт проверять DNS. Увидишь жёлтую надпись «DNS check in progress» — это нормально, пока не прописаны записи.
5. Галочку **Enforce HTTPS** пока не ставить — она станет доступна после того, как DNS заработает.

Файл `CNAME` с содержимым `elenamasolova.com` уже лежит в корне репо — GitHub его использует.

---

## Шаг 2. Прописать DNS-записи в GoDaddy

1. Зайти: `https://dcc.godaddy.com/domains` → открыть `elenamasolova.com`
2. Найти раздел **DNS** → **DNS Records**
3. **Удалить** существующие записи `A` и `CNAME`, которые указывают куда-то ещё (GoDaddy parking, Forwarding). Оставить только MX-записи для почты если они есть.

### Добавить 4 записи типа A (apex-домен)

| Type | Name | Value           | TTL    |
|------|------|-----------------|--------|
| A    | @    | 185.199.108.153 | 1 час  |
| A    | @    | 185.199.109.153 | 1 час  |
| A    | @    | 185.199.110.153 | 1 час  |
| A    | @    | 185.199.111.153 | 1 час  |

Это официальные IP GitHub Pages. Они постоянные.

### Добавить запись CNAME для www

| Type  | Name | Value                   | TTL   |
|-------|------|-------------------------|-------|
| CNAME | www  | masolova.github.io.     | 1 час |

(точка в конце обязательна — GoDaddy сам её иногда добавляет)

### Если GoDaddy предлагает «Forwarding» для www

Выключить. Forwarding ломает HTTPS.

---

## Шаг 3. Проверить

1. Подождать 10–30 минут (иногда до 24 часов — DNS propagation).
2. Открыть `https://www.whatsmydns.net/#A/elenamasolova.com` — должны светиться IP `185.199.108–111.153`.
3. Открыть в браузере `http://elenamasolova.com` — должен показаться сайт.
4. Вернуться в GitHub → Settings → Pages → поставить галочку **Enforce HTTPS**.
5. Через 5–10 минут `https://elenamasolova.com` должен работать.

---

## Типичные проблемы

**«DNS check in progress» не проходит больше 30 минут**
→ Проверить записи A в GoDaddy: должно быть ровно 4 штуки с указанными IP. Без www.

**Сайт открывается, но HTML показывает README.md вместо главной**
→ В корне репо должен быть `index.html`. Он есть.

**www.elenamasolova.com работает, а без www — нет (или наоборот)**
→ Обе версии должны быть прописаны: A-записи для `@` и CNAME для `www`. Проверить.

**SSL-сертификат не выпускается**
→ Подождать. Let's Encrypt иногда выдаёт сертификат через 1–2 часа после того как DNS стал корректным. Если через сутки всё ещё нет — снять и поставить заново галочку Enforce HTTPS.

---

## Итого после подключения

- `https://elenamasolova.com` → твой сайт
- `https://www.elenamasolova.com` → редирект на без-www
- При каждом пуше в `main`: GitHub Actions → build.py → коммит → GitHub Pages деплой (~60 сек суммарно)

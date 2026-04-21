# Редактор постов (Decap CMS) + Build-скрипт — инструкция

## Что нового в v19

Добавлены:
- `scripts/build.py` — читает `content/posts/*.md`, генерит `/articles/<slug>/index.html` для каждого поста, вставляет карточки в `index.html` и `index-en.html` между маркерами `<!-- POSTS:START -->` и `<!-- POSTS:END -->`.
- `templates/article.html` — шаблон страницы поста.
- `.github/workflows/build.yml` — GitHub Actions, автозапуск сборки при любом пуше в main.

Заглушки на главной остаются ниже маркеров и не трогаются. Новые посты встают сверху.

## Как добавить пост

### Вариант 1. Через Decap (после настройки OAuth)
- Открыть `/admin/editor-v18/`
- Нажать «Новый пост» → заполнить поля → Publish
- GitHub Actions сам пересоберёт сайт за минуту

### Вариант 2. Руками через .md-файл
- Написать файл `content/posts/<slug>.md` по образцу `content/posts/_template.md`
- Закоммитить в `main` через GitHub UI или локальный git
- Сборка запустится автоматически

### Локально
```bash
python3 scripts/build.py
```

---

# Редактор постов (Decap CMS) — инструкция по первому запуску

Один раз настраиваешь — потом пишешь посты с кнопками B/I/ссылка/картинка, как в ЖЖ.

---

## Что это

`/admin/editor-v18/` — это визуальный редактор постов прямо на твоём сайте.
Открываешь → логинишься через GitHub → пишешь пост → жмёшь «Publish» → он сам
создаёт коммит в репо `masolova/EM_site`. Сборка сайта подхватит новый
`.md`-файл в `content/posts/` и пост появится на главной.

Работает в паре со старой админкой:
- Эта страница (`editor-v18/`) — **только про содержимое поста**: заголовок, текст, картинки.
- Старая админка (`admin/home.html`) — **про главную**: pin постов, Highlight-1/2/3.

---

## Разовая настройка (15 минут)

### Шаг 1. Создать OAuth App в GitHub

1. Зайти: https://github.com/settings/developers
2. Нажать **New OAuth App**
3. Заполнить:
   - **Application name**: `Elena Masolova CMS`
   - **Homepage URL**: `https://elenamasolova.com`
   - **Authorization callback URL**: `https://api.netlify.com/auth/done`
4. Нажать **Register application**
5. На следующей странице:
   - Записать **Client ID** (короткая строка)
   - Нажать **Generate a new client secret** → записать **Client Secret**

### Шаг 2. Подключить OAuth-сервис

У Decap нет своего сервера авторизации. Используем **готовый публичный** от Netlify
(он просто передаёт тебе токен, пароль не видит).

Вариант А (без регистрации, но через Netlify) — **рекомендую**:
1. Зарегистрироваться на netlify.com через GitHub (бесплатно, навсегда).
2. Зайти в **Site → Site configuration → Access & security → OAuth**.
3. Нажать **Install provider** → GitHub → вставить Client ID + Client Secret из шага 1.

Вариант Б (если не хочется Netlify):
Развернуть `https://github.com/vencax/netlify-cms-github-oauth-provider` на любом
VPS или на Vercel. Тогда в `admin/editor-v18/config.yml` заменить:
```yaml
base_url: https://TVOY-HOSTING.com
```

### Шаг 3. Залить v18 в репо

Распаковать `elena-site-v18.zip` → содержимое закоммитить в `main` ветку
репо `masolova/EM_site`.

### Шаг 4. Проверить

1. Открыть `https://elenamasolova.com/admin/editor-v18/`
2. Должна появиться кнопка **Login with GitHub** → нажать.
3. GitHub спросит разрешение — подтвердить.
4. Откроется редактор с коллекциями **Посты** и **Настройки сайта**.

---

## Картинки (Cloudflare R2)

Сейчас в конфиге Decap картинки временно падают в `assets/posts/` внутри репо
(чтобы редактор сразу работал). Когда настроишь R2 — заменим на внешнюю медиатеку.

### Что надо сделать в R2:

1. В Cloudflare → **R2** → создать бакет, например `elena-media`.
2. В бакете → **Settings → Custom domain** → привязать `cdn.elenamasolova.com`
   (домен должен быть в том же Cloudflare-аккаунте).
3. В бакете → **Settings → CORS Policy** → добавить:
   ```json
   [{
     "AllowedOrigins": ["https://elenamasolova.com"],
     "AllowedMethods": ["GET", "PUT", "POST"],
     "AllowedHeaders": ["*"]
   }]
   ```
4. Создать API-токен с правами на этот бакет.

Когда будет готово — пришлёшь мне `base_url` (например `https://cdn.elenamasolova.com`)
и я подключу внешнюю медиатеку в `config.yml`.

---

## Локальный тест без GitHub

Если хочешь попробовать редактор до настройки OAuth:

```bash
cd elena-site-v18
npx decap-server &   # запустит proxy на localhost:8081
npx http-server . -p 8080
```

Открыть `http://localhost:8080/admin/editor-v18/` — Decap напишет изменения
прямо в твои локальные файлы, без GitHub. Это настоящий тест всех полей и кнопок.

---

## Что умеет этот редактор

### Для поста:
- Все поля из `_template.md`: title, slug, date, summary, lang, tags, kicker,
  reading_time, status, pinned.
- **WYSIWYG-тело поста** с кнопками: **B**, *I*, `code`, ссылка, H2, H3,
  цитата, маркированный список, нумерованный список, картинка, блок кода.
- Фильтры в списке: «Опубликованные», «Черновики», «Закреплённые».
- Создание новых постов + редактирование существующих `.md`.

### Для настроек сайта:
- Профиль (имя, фото, био, список «о себе»).
- Меню в шапке (перетаскиваемый список).
- Email-рассылка (провайдер, URL формы, тексты).
- Внешние ссылки (телеграм, email).
- Хранилище картинок (repo/r2, base_url, сжатие).
- SEO (title, description, og_image).

---

## Совместимость с ручным редактированием

Можно продолжать писать посты в Word → сохранять `.md` в `content/posts/` →
коммитить в репо напрямую. Decap увидит эти посты как обычные, откроет их
для редактирования и не потеряет поля frontmatter (в схеме прописаны **все**
поля из шаблона).

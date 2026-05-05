// Lena Learns Latvian — облачный синк через Supabase.
// КАК ВКЛЮЧИТЬ:
//   1. Зарегистрируйся на supabase.com (бесплатно).
//   2. Создай новый проект (любое имя, любой регион).
//   3. В разделе SQL Editor выполни:
//        create table if not exists lll_progress (
//          user_id uuid primary key references auth.users(id) on delete cascade,
//          vocabulary jsonb not null default '[]'::jsonb,
//          phrase_state jsonb not null default '{}'::jsonb,
//          session_count int not null default 0,
//          deck_mode text,
//          streak jsonb not null default '{}'::jsonb,
//          stage_progress jsonb not null default '{}'::jsonb,
//          updated_at timestamptz not null default now()
//        );
//        -- Если таблица уже была без streak/stage_progress, добавь колонки:
//        alter table lll_progress add column if not exists streak jsonb not null default '{}'::jsonb;
//        alter table lll_progress add column if not exists stage_progress jsonb not null default '{}'::jsonb;
//        -- ВКЛЮЧИТЬ REALTIME (иначе мгновенный синк не работает):
//        alter publication supabase_realtime add table lll_progress;
//        alter table lll_progress enable row level security;
//        create policy "own row select" on lll_progress for select using (auth.uid() = user_id);
//        create policy "own row upsert" on lll_progress for insert with check (auth.uid() = user_id);
//        create policy "own row update" on lll_progress for update using (auth.uid() = user_id);
//   4. В Project Settings → API скопируй "Project URL" и "anon public" ключ.
//   5. Вставь их в две строки ниже:

const SUPABASE_URL = 'https://jihwcozfchbgrduvelmu.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_1CrK38TDNj93GgWxjKDkdw_zvm19KUV';

(function () {
  // Если ключи не заполнены — auth выключен, всё работает оффлайн.
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.info('[lll auth] Cloud sync disabled (no SUPABASE keys set).');
    window.LLL_AUTH = { enabled: false };
    return;
  }
  if (!window.supabase || !window.supabase.createClient) {
    console.warn('[lll auth] Supabase JS not loaded.');
    window.LLL_AUTH = { enabled: false };
    return;
  }
  const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: { persistSession: true, autoRefreshToken: true, storageKey: 'lll2_supabase_auth' },
  });

  let currentUser = null;
  let pushTimer = null;
  // v43: echo guard — хэш последнего пуша. Если pull вернёт такой же хэш — игнорим (это наше же эхо).
  let lastPushedHash = null;
  function hashPayload(state, vocab) {
    return JSON.stringify(state || {}) + '|' + JSON.stringify(vocab || []);
  }

  async function pull() {
    if (!currentUser) return;
    const { data: rawData, error } = await sb.from('lll_progress').select('*').eq('user_id', currentUser.id).maybeSingle();
    if (error) { console.warn('[lll pull]', error); return; }
    if (!rawData) return; // первого визита ещё нет облачной строки
    // v43 echo guard: если облако вернуло ровно то, что мы только что туда положили — выходим.
    if (lastPushedHash) {
      const incomingHash = hashPayload(rawData.phrase_state, rawData.vocabulary);
      if (incomingHash === lastPushedHash) { return; }
    }
    // v39: чистим облачные данные через миграционный маппинг
    let data = rawData;
    let cloudWasDirty = false;
    if (window.__v39 && window.__v39.cloudClean) {
      const before = JSON.stringify({ v: rawData.vocabulary || [], s: rawData.phrase_state || {} });
      data = window.__v39.cloudClean(rawData);
      const after = JSON.stringify({ v: data.vocabulary || [], s: data.phrase_state || {} });
      cloudWasDirty = before !== after;
      if (cloudWasDirty) console.log('[v39 cloudClean] cloud data was migrated');
    }
    try {
      // Merge: облако приоритетнее по updated_at, но мерджим vocabulary и phrase_state по элементам.
      const localVocabRaw = localStorage.getItem('lll2_vocabulary') || '[]';
      const localVocab = JSON.parse(localVocabRaw);
      const cloudVocab = data.vocabulary || [];
      const mergedVocab = mergeVocab(localVocab, cloudVocab);
      const localStateRaw = localStorage.getItem('lll2_phrase_state') || '{}';
      const localState = JSON.parse(localStateRaw);
      const cloudState = data.phrase_state || {};
      const mergedState = mergePhraseState(localState, cloudState);
      const localSession = parseInt(localStorage.getItem('lll2_session_count') || '0', 10) || 0;
      const cloudSession = data.session_count || 0;
      const newVocabRaw = JSON.stringify(mergedVocab);
      const newStateRaw = JSON.stringify(mergedState);
      const newSession = String(Math.max(localSession, cloudSession));

      // Streak: мердж дней (max по count) + recoverDate из облака если новее
      const localStreakRaw = localStorage.getItem('lll2_streak') || '{}';
      const localStreak = JSON.parse(localStreakRaw);
      const cloudStreak = data.streak || {};
      const mergedStreak = mergeStreak(localStreak, cloudStreak);
      const newStreakRaw = JSON.stringify(mergedStreak);
      const streakChanged = newStreakRaw !== localStreakRaw;

      // Stage progress: мердж по ключу — берём максимум
      const localStageRaw = localStorage.getItem('lll2_stage_progress') || '{}';
      const localStage = JSON.parse(localStageRaw);
      const cloudStage = data.stage_progress || {};
      const mergedStage = mergeStageProgress(localStage, cloudStage);
      const newStageRaw = JSON.stringify(mergedStage);
      const stageChanged = newStageRaw !== localStageRaw;

      // Проверяем, изменился ли хоть один ключ в результате merge.
      // Если ничего не поменялось — НЕ пишем в localStorage и НЕ перезагружаем, иначе будет петля.
      const vocabChanged = newVocabRaw !== localVocabRaw;
      const stateChanged = newStateRaw !== localStateRaw;
      const sessionChanged = newSession !== String(localSession);
      const deckChanged = data.deck_mode && data.deck_mode !== localStorage.getItem('lll2_deck_mode');
      // v39: если облако было грязное — принудительно push даже если локалка не изменилась,
      // чтобы переписать в облаке почищенный state и vocab.
      const needCloudWriteback = cloudWasDirty && !localStorage.getItem('lll2_cloud_cleaned_v40');
      if (!vocabChanged && !stateChanged && !sessionChanged && !deckChanged && !streakChanged && !stageChanged && !needCloudWriteback) {
        // Ничего не поменялось — выходим без reload.
        return;
      }
      if (needCloudWriteback) {
        localStorage.setItem('lll2_cloud_cleaned_v40', 'true');
        // push() позже в onAuthStateChange / pushDebounced
        setTimeout(function(){ try { push(); } catch(e){} }, 500);
      }
      if (vocabChanged) localStorage.setItem('lll2_vocabulary', newVocabRaw);
      if (stateChanged) localStorage.setItem('lll2_phrase_state', newStateRaw);
      if (sessionChanged) localStorage.setItem('lll2_session_count', newSession);
      if (deckChanged) localStorage.setItem('lll2_deck_mode', data.deck_mode);
      if (streakChanged) localStorage.setItem('lll2_streak', newStreakRaw);
      if (stageChanged) localStorage.setItem('lll2_stage_progress', newStageRaw);
      // НЕ делаем location.reload() — иначе текущая фраза пропадает. Главный код слушает
      // 'lll:cloud-sync' и перерисовывает подвижные части (стрик, словарь, стадии) без сброса фразы.
      window.dispatchEvent(new CustomEvent('lll:cloud-sync', { detail: {
        vocab: vocabChanged, state: stateChanged, session: sessionChanged,
        deck: deckChanged, streak: streakChanged, stage: stageChanged
      }}));
    } catch (e) {
      console.warn('[lll pull merge]', e);
    }
  }

  function mergeVocab(a, b) {
    const map = new Map();
    [...a, ...b].forEach(v => {
      if (!v || v.id == null) return;
      const key = String(v.id);
      const prev = map.get(key);
      if (!prev) { map.set(key, v); return; }
      // OR-семантика: если хоть в одной fav/learned — true.
      map.set(key, {
        id: v.id,
        lv: v.lv || prev.lv,
        ru: v.ru || prev.ru,
        fav: !!(v.fav || prev.fav),
        learned: !!(v.learned || prev.learned),
      });
    });
    return Array.from(map.values());
  }

  function mergeStreak(a, b) {
    a = a || {}; b = b || {};
    const daysA = a.days || {};
    const daysB = b.days || {};
    const days = {};
    const keys = new Set([...Object.keys(daysA), ...Object.keys(daysB)]);
    keys.forEach(k => {
      const ca = (daysA[k] && daysA[k].count) || 0;
      const cb = (daysB[k] && daysB[k].count) || 0;
      days[k] = { count: Math.max(ca, cb) };
    });
    // recoverDate: берём непустой; если оба заданы — приоритет облаку (b)
    const recoverDate = b.recoverDate || a.recoverDate || null;
    return { days: days, recoverDate: recoverDate };
  }

  function mergeStageProgress(a, b) {
    a = a || {}; b = b || {};
    const out = {};
    const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
    keys.forEach(k => {
      const va = parseInt(a[k] || 0, 10) || 0;
      const vb = parseInt(b[k] || 0, 10) || 0;
      out[k] = Math.max(va, vb);
    });
    return out;
  }

  function mergePhraseState(a, b) {
    // v47: last-write-wins по полю updated_at.
    // Локальная запись побеждает облачную, если её updated_at новее (и наоборот).
    // Если updated_at нет — считаем 0 (старая запись, проигрывает свежей).
    // Спец-ключи (вроде '_v') пропускаем.
    const out = {};
    const keys = new Set([...Object.keys(a || {}), ...Object.keys(b || {})]);
    keys.forEach(k => {
      if (k === '_v') { out[k] = (a[k] || b[k]); return; }
      const ea = a[k], eb = b[k];
      if (!ea) { out[k] = eb; return; }
      if (!eb) { out[k] = ea; return; }
      const ta = (ea && typeof ea === 'object' && ea.updated_at) || 0;
      const tb = (eb && typeof eb === 'object' && eb.updated_at) || 0;
      if (ta >= tb) out[k] = ea; else out[k] = eb;
    });
    return out;
  }

  // Если в БД нет колонок streak/stage_progress — переключимся на legacy-payload
  let pushSchemaLegacy = false;
  let lastPushAt = null;
  let lastPushError = null;
  async function push() {
    if (!currentUser) return;
    // v39: ставим маркер версии _v=39 в phrase_state перед отправкой
    let _state = JSON.parse(localStorage.getItem('lll2_phrase_state') || '{}');
    // v43: принудительно фильтруем через жёсткий cloudCleanState (id 1..3792 only)
    if (window.__v39 && window.__v39.cloudCleanState) {
      _state = window.__v39.cloudCleanState(_state);
    } else if (window.__v39 && window.__v39.stampVersion) {
      _state = window.__v39.stampVersion(_state);
    }
    let _vocab = JSON.parse(localStorage.getItem('lll2_vocabulary') || '[]');
    if (window.__v39 && window.__v39.cloudCleanVocab) {
      _vocab = window.__v39.cloudCleanVocab(_vocab);
    }
    const basePayload = {
      user_id: currentUser.id,
      vocabulary: _vocab,
      phrase_state: _state,
      session_count: parseInt(localStorage.getItem('lll2_session_count') || '0', 10) || 0,
      deck_mode: localStorage.getItem('lll2_deck_mode') || null,
      updated_at: new Date().toISOString(),
    };
    const payload = pushSchemaLegacy ? basePayload : Object.assign({}, basePayload, {
      streak: JSON.parse(localStorage.getItem('lll2_streak') || '{}'),
      stage_progress: JSON.parse(localStorage.getItem('lll2_stage_progress') || '{}'),
    });
    const { error } = await sb.from('lll_progress').upsert(payload, { onConflict: 'user_id' });
    if (error) {
      // Колонок streak/stage_progress нет в БД — фолбэк на legacy без них
      if (!pushSchemaLegacy && /streak|stage_progress|column/i.test(error.message || '')) {
        console.warn('[lll push] schema missing streak/stage_progress, falling back. Run the ALTER TABLE in auth.js header to enable streak sync.');
        pushSchemaLegacy = true;
        const { error: e2 } = await sb.from('lll_progress').upsert(basePayload, { onConflict: 'user_id' });
        if (e2) { console.warn('[lll push fallback]', e2); lastPushError = e2.message; }
        else { lastPushAt = new Date(); lastPushError = null; }
      } else {
        console.warn('[lll push]', error);
        lastPushError = error.message;
      }
    } else {
      lastPushAt = new Date();
      lastPushError = null;
      // v43 echo guard: запоминаем хэш того, что успешно ушло в облако
      lastPushedHash = hashPayload(_state, _vocab);
    }
    updateDiagBanner();
  }

  // Диагностический баннер (?diag в URL): показывает email, размер streak, статус push
  function diagEnabled() {
    // Диагностика полностью отключена. Чистим локальный флаг и выходим.
    try { localStorage.removeItem('lll2_diag'); } catch(e) {}
    return false;
  }
  function ensureDiagBanner() {
    if (!diagEnabled()) return null;
    let el = document.getElementById('lllDiagBanner');
    if (el) return el;
    el = document.createElement('div');
    el.id = 'lllDiagBanner';
    el.style.cssText = 'position:fixed!important;left:0!important;right:0!important;top:0!important;z-index:2147483647!important;background:#b91c1c!important;color:#fff!important;font:14px/1.4 monospace!important;padding:10px 14px!important;white-space:pre-wrap!important;max-height:60vh!important;overflow:auto!important;border-bottom:3px solid #fff!important;display:block!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important;';
    document.body.appendChild(el);
    return el;
  }
  function updateDiagBanner() {
    const el = ensureDiagBanner();
    if (!el) return;
    const streakRaw = localStorage.getItem('lll2_streak') || '{}';
    let streakDays = 0;
    let streakSample = '';
    try {
      const s = JSON.parse(streakRaw);
      streakDays = Object.keys(s.days || {}).length;
      streakSample = JSON.stringify(s).slice(0, 200);
    } catch(e) {}
    const stageRaw = localStorage.getItem('lll2_stage_progress') || '{}';
    let stageKeys = 0;
    try { stageKeys = Object.keys(JSON.parse(stageRaw)).length; } catch(e) {}
    const lines = [
      'email: ' + (currentUser ? (currentUser.email || currentUser.id) : '<НЕ АВТОРИЗОВАН>'),
      'streak дней в LS: ' + streakDays + (streakSample ? '  образец: ' + streakSample : ''),
      'stage_progress ключей: ' + stageKeys,
      'last push: ' + (lastPushAt ? lastPushAt.toLocaleTimeString() : 'было нет') + (pushSchemaLegacy ? '  [LEGACY!]' : ''),
      'last push error: ' + (lastPushError || 'нет'),
    ];
    el.textContent = lines.join('\n');
  }
  function pushDebounced() {
    if (pushTimer) clearTimeout(pushTimer);
    // 200 мс — почти мгновенно, но коалесцируем серии setItem подряд
    pushTimer = setTimeout(push, 200);
  }

  // Слушаем изменения localStorage, чтобы пушить в облако.
  const origSetItem = Storage.prototype.setItem;
  Storage.prototype.setItem = function (k, v) {
    origSetItem.call(this, k, v);
    if (currentUser && (k === 'lll2_vocabulary' || k === 'lll2_phrase_state' || k === 'lll2_session_count' || k === 'lll2_deck_mode' || k === 'lll2_streak' || k === 'lll2_stage_progress')) {
      pushDebounced();
      updateDiagBanner();
    }
  };

  // При открытии оверлея стрика — принудительный push, чтобы гарантировать свежие данные в облаке
  document.addEventListener('click', function (ev) {
    const t = ev.target && ev.target.closest && ev.target.closest('#streakBtn');
    if (t && currentUser) push();
  }, true);

  // UI: кнопка «Войти/Выйти» в шапке.
  function injectAuthButton() {
    const header = document.querySelector('.header-right') || document.querySelector('.app-header') || document.body;
    if (!header || document.getElementById('authBtn')) return;
    const btn = document.createElement('button');
    btn.id = 'authBtn';
    btn.type = 'button';
    btn.className = 'auth-btn';
    btn.textContent = 'Войти';
    btn.addEventListener('click', onAuthClick);
    header.appendChild(btn);
    return btn;
  }

  async function onAuthClick() {
    if (currentUser) {
      const ok = confirm('Выйти из аккаунта ' + (currentUser.email || '') + '?');
      if (!ok) return;
      await sb.auth.signOut();
      currentUser = null;
      updateAuthBtn();
      return;
    }
    const email = prompt('Введи email — пришлю ссылку для входа:');
    if (!email) return;
    const { error } = await sb.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: location.href },
    });
    if (error) { alert('Ошибка: ' + error.message); return; }
    alert('Готово. Проверь почту — там будет ссылка для входа. После клика страница перезагрузится с твоим прогрессом.');
  }

  // SHA-256 хэш email VIP-юзера. Сам email в коде не хранится.
  const VIP_HASH = 'f528e3bba67c600b849d2a39f5f72846e036ef925772c1ccdf77195e08965645';
  async function sha256Hex(str) {
    try {
      const buf = new TextEncoder().encode(str);
      const h = await crypto.subtle.digest('SHA-256', buf);
      return Array.from(new Uint8Array(h)).map(b => b.toString(16).padStart(2, '0')).join('');
    } catch(_) { return ''; }
  }
  async function checkVip(email) {
    if (!email) return false;
    const h = await sha256Hex(email.trim().toLowerCase());
    return h === VIP_HASH;
  }

  function updateAuthBtn() {
    const btn = document.getElementById('authBtn');
    if (!btn) return;
    const iconUser = '<svg class="auth-btn-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>';
    const iconCheck = '<svg class="auth-btn-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/><path d="M16 11l2 2 4-4"/></svg>';
    if (currentUser) {
      const e = currentUser.email || '';
      // Секретные чипы — проверка по хэшу (email в коде не светится)
      const wasElena = document.body.classList.contains('is-elena');
      checkVip(e).then(isElena => {
        if (isElena) {
          document.body.classList.add('is-elena');
        } else {
          document.body.classList.remove('is-elena');
        }
        if (wasElena !== isElena) {
          try { document.dispatchEvent(new CustomEvent('lll:elena-changed', { detail: { isElena: isElena } })); } catch(_) {}
        }
      });
      // Имя из email: часть до @, первая буква заглавная.
      let name = e.split('@')[0] || '';
      // Берём часть до точки/плюса/подчёркивания, чтобы из first.last получить First.
      name = name.split(/[._+\-]/)[0] || name;
      if (name.length > 0) name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
      if (name.length > 14) name = name.slice(0, 13) + '…';
      btn.classList.add('auth-btn--in');
      document.body.classList.add('auth-in');
      // Компактный вид: только имя, «выйти» серым нежирным, в confirm() при клике.
      btn.innerHTML = '<span class="auth-btn-name">' + name + '</span><span class="auth-btn-logout">выйти</span>';
      btn.title = 'Вы вошли как ' + e + '. Клик для выхода.';
      btn.setAttribute('aria-label', 'Аккаунт ' + e);
    } else {
      btn.classList.remove('auth-btn--in');
      document.body.classList.remove('auth-in');
      const wasElena2 = document.body.classList.contains('is-elena');
      document.body.classList.remove('is-elena');
      if (wasElena2) {
        try { document.dispatchEvent(new CustomEvent('lll:elena-changed', { detail: { isElena: false } })); } catch(_) {}
      }
      btn.innerHTML = iconUser + '<span class="auth-btn-text">Войти</span>';
      btn.title = 'Войти, чтобы синхронизировать прогресс между устройствами';
      btn.setAttribute('aria-label', 'Войти');
    }
  }

  // Запуск.
  document.addEventListener('DOMContentLoaded', async function () {
    injectAuthButton();
    updateAuthBtn(); // сразу рендерим иконку, не ждём Supabase
    updateDiagBanner();
    const { data } = await sb.auth.getSession();
    if (data && data.session && data.session.user) {
      currentUser = data.session.user;
      updateAuthBtn();
      updateDiagBanner();
      await pull();
      // При входе сразу пушим текущее локальное состояние — включая streak/stage_progress
      push();
      startPeriodicSync();
    }
    sb.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN' && session) {
        currentUser = session.user;
        updateAuthBtn();
        updateDiagBanner();
        await pull();
        push();
        startPeriodicSync();
      } else if (event === 'SIGNED_OUT') {
        currentUser = null;
        updateAuthBtn();
        updateDiagBanner();
        stopPeriodicSync();
      }
    });
  });

  // Периодический и event-driven pull, чтобы десктоп подхватывал прогресс с телефона
  let pullInterval = null;
  let pullInFlight = false;
  async function safePull() {
    if (pullInFlight) return;
    pullInFlight = true;
    try { await pull(); } finally { pullInFlight = false; }
  }
  function startPeriodicSync() {
    stopPeriodicSync();
    // Каждые 8 секунд при активной вкладке (страховка на случай если Realtime отвалился)
    pullInterval = setInterval(function () {
      if (currentUser && document.visibilityState === 'visible') safePull();
    }, 8000);
    startRealtime();
  }
  function stopPeriodicSync() {
    if (pullInterval) { clearInterval(pullInterval); pullInterval = null; }
    stopRealtime();
  }

  // Realtime: подписываемся на изменения СВОЕЙ строки. Любое обновление от другого
  // устройства мгновенно прилетает по WebSocket и тригерит pull.
  let realtimeChannel = null;
  function startRealtime() {
    stopRealtime();
    if (!currentUser) return;
    try {
      realtimeChannel = sb.channel('lll_progress_' + currentUser.id)
        .on('postgres_changes', {
          event: '*',
          schema: 'public',
          table: 'lll_progress',
          filter: 'user_id=eq.' + currentUser.id,
        }, function () { safePull(); })
        .subscribe();
    } catch (e) { console.warn('[lll realtime]', e); }
  }
  function stopRealtime() {
    if (realtimeChannel) {
      try { sb.removeChannel(realtimeChannel); } catch (e) {}
      realtimeChannel = null;
    }
  }
  // При возврате во вкладку и получении фокуса — сразу подтягиваем
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'visible' && currentUser) safePull();
  });
  window.addEventListener('focus', function () {
    if (currentUser) safePull();
  });

  window.LLL_AUTH = { enabled: true, push, pull };
})();

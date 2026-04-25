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
//          updated_at timestamptz not null default now()
//        );
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

  async function pull() {
    if (!currentUser) return;
    const { data, error } = await sb.from('lll_progress').select('*').eq('user_id', currentUser.id).maybeSingle();
    if (error) { console.warn('[lll pull]', error); return; }
    if (!data) return; // первого визита ещё нет облачной строки
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
      // Проверяем, изменился ли хоть один ключ в результате merge.
      // Если ничего не поменялось — НЕ пишем в localStorage и НЕ перезагружаем, иначе будет петля.
      const vocabChanged = newVocabRaw !== localVocabRaw;
      const stateChanged = newStateRaw !== localStateRaw;
      const sessionChanged = newSession !== String(localSession);
      const deckChanged = data.deck_mode && data.deck_mode !== localStorage.getItem('lll2_deck_mode');
      if (!vocabChanged && !stateChanged && !sessionChanged && !deckChanged) {
        // Ничего не поменялось — выходим без reload.
        return;
      }
      if (vocabChanged) localStorage.setItem('lll2_vocabulary', newVocabRaw);
      if (stateChanged) localStorage.setItem('lll2_phrase_state', newStateRaw);
      if (sessionChanged) localStorage.setItem('lll2_session_count', newSession);
      if (deckChanged) localStorage.setItem('lll2_deck_mode', data.deck_mode);
      // Перезагружаем только если реально что-то прилетело из облака.
      location.reload();
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

  function mergePhraseState(a, b) {
    const out = {};
    const keys = new Set([...Object.keys(a || {}), ...Object.keys(b || {})]);
    keys.forEach(k => {
      const ea = a[k], eb = b[k];
      if (!ea) { out[k] = eb; return; }
      if (!eb) { out[k] = ea; return; }
      // Берём более продвинутую стадию; если стадии равны — больший due.
      if (ea.stage > eb.stage) out[k] = ea;
      else if (ea.stage < eb.stage) out[k] = eb;
      else out[k] = (ea.due >= eb.due ? ea : eb);
    });
    return out;
  }

  async function push() {
    if (!currentUser) return;
    const payload = {
      user_id: currentUser.id,
      vocabulary: JSON.parse(localStorage.getItem('lll2_vocabulary') || '[]'),
      phrase_state: JSON.parse(localStorage.getItem('lll2_phrase_state') || '{}'),
      session_count: parseInt(localStorage.getItem('lll2_session_count') || '0', 10) || 0,
      deck_mode: localStorage.getItem('lll2_deck_mode') || null,
      updated_at: new Date().toISOString(),
    };
    const { error } = await sb.from('lll_progress').upsert(payload, { onConflict: 'user_id' });
    if (error) console.warn('[lll push]', error);
  }
  function pushDebounced() {
    if (pushTimer) clearTimeout(pushTimer);
    pushTimer = setTimeout(push, 1500);
  }

  // Слушаем изменения localStorage, чтобы пушить в облако.
  const origSetItem = Storage.prototype.setItem;
  Storage.prototype.setItem = function (k, v) {
    origSetItem.call(this, k, v);
    if (currentUser && (k === 'lll2_vocabulary' || k === 'lll2_phrase_state' || k === 'lll2_session_count' || k === 'lll2_deck_mode')) {
      pushDebounced();
    }
  };

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

  function updateAuthBtn() {
    const btn = document.getElementById('authBtn');
    if (!btn) return;
    const iconUser = '<svg class="auth-btn-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>';
    const iconCheck = '<svg class="auth-btn-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/><path d="M16 11l2 2 4-4"/></svg>';
    if (currentUser) {
      const e = currentUser.email || '';
      // Имя из email: часть до @, первая буква заглавная.
      let name = e.split('@')[0] || '';
      // Берём часть до точки/плюса/подчёркивания, чтобы для elena.masolova получить Elena.
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
      btn.innerHTML = iconUser + '<span class="auth-btn-text">Войти</span>';
      btn.title = 'Войти, чтобы синхронизировать прогресс между устройствами';
      btn.setAttribute('aria-label', 'Войти');
    }
  }

  // Запуск.
  document.addEventListener('DOMContentLoaded', async function () {
    injectAuthButton();
    updateAuthBtn(); // сразу рендерим иконку, не ждём Supabase
    const { data } = await sb.auth.getSession();
    if (data && data.session && data.session.user) {
      currentUser = data.session.user;
      updateAuthBtn();
      await pull();
    }
    sb.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN' && session) {
        currentUser = session.user;
        updateAuthBtn();
        await pull();
      } else if (event === 'SIGNED_OUT') {
        currentUser = null;
        updateAuthBtn();
      }
    });
  });

  window.LLL_AUTH = { enabled: true, push, pull };
})();

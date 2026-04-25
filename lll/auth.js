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
      const localVocab = JSON.parse(localStorage.getItem('lll2_vocabulary') || '[]');
      const cloudVocab = data.vocabulary || [];
      const mergedVocab = mergeVocab(localVocab, cloudVocab);
      const localState = JSON.parse(localStorage.getItem('lll2_phrase_state') || '{}');
      const cloudState = data.phrase_state || {};
      const mergedState = mergePhraseState(localState, cloudState);
      const localSession = parseInt(localStorage.getItem('lll2_session_count') || '0', 10) || 0;
      const cloudSession = data.session_count || 0;
      localStorage.setItem('lll2_vocabulary', JSON.stringify(mergedVocab));
      localStorage.setItem('lll2_phrase_state', JSON.stringify(mergedState));
      localStorage.setItem('lll2_session_count', String(Math.max(localSession, cloudSession)));
      if (data.deck_mode) localStorage.setItem('lll2_deck_mode', data.deck_mode);
      // Перезагружаем страницу, чтобы JS подхватил данные.
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
    btn.style.cssText = 'border:0;background:transparent;color:#5a4a44;cursor:pointer;font:inherit;padding:6px 10px;border-radius:8px;';
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
    if (currentUser) {
      const e = currentUser.email || '';
      const short = e.length > 22 ? e.slice(0, 20) + '…' : e;
      btn.textContent = short + ' · выйти';
      btn.title = 'Вы вошли как ' + e;
    } else {
      btn.textContent = 'Войти';
      btn.title = 'Войти, чтобы синхронизировать прогресс между устройствами';
    }
  }

  // Запуск.
  document.addEventListener('DOMContentLoaded', async function () {
    injectAuthButton();
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

/**
 * Subscribe handler — POSTs to Cloudflare Worker, which forwards to Kit.
 * Works with all forms on the site (any class) that include:
 *   - <input type="email" name="email" required>
 *   - <input type="hidden" name="tag" value="ru" | "en">
 */
(function () {
  'use strict';

  var WORKER_URL = 'https://kit-subscribe.elena-masolova.workers.dev/';

  // Localized messages by tag
  var MSG = {
    ru: {
      success: 'Спасибо! Проверьте почту — нужно подтвердить подписку.',
      bad_email: 'Проверьте email.',
      error: 'Что-то пошло не так. Попробуйте позже.',
      sending: 'Отправляю…'
    },
    en: {
      success: 'Thanks! Check your inbox to confirm.',
      bad_email: 'Please check the email.',
      error: 'Something went wrong. Please try again later.',
      sending: 'Sending…'
    }
  };

  function getLang(form) {
    var hidden = form.querySelector('input[name="tag"]');
    var v = hidden && hidden.value ? hidden.value.toLowerCase() : '';
    return v === 'en' ? 'en' : 'ru';
  }

  function showMessage(form, text, isError) {
    // Replace form contents with a status message in the same container
    var msg = form.querySelector('.subscribe-msg');
    if (!msg) {
      msg = document.createElement('p');
      msg.className = 'subscribe-msg';
      msg.style.margin = '0';
      msg.style.padding = '12px 0';
      msg.style.fontSize = '15px';
      form.appendChild(msg);
    }
    msg.textContent = text;
    msg.style.color = isError ? '#c0392b' : 'inherit';
  }

  function handleSubmit(e) {
    var form = e.currentTarget;
    if (!form || form.dataset.kitBusy === '1') {
      e.preventDefault();
      return;
    }

    e.preventDefault();

    var lang = getLang(form);
    var dict = MSG[lang];
    var emailInput = form.querySelector('input[type="email"]');
    var button = form.querySelector('button[type="submit"], button:not([type])');
    if (!emailInput) return;

    var email = (emailInput.value || '').trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showMessage(form, dict.bad_email, true);
      return;
    }

    form.dataset.kitBusy = '1';
    var prevText = '';
    if (button) {
      prevText = button.textContent;
      button.disabled = true;
      button.textContent = dict.sending;
    }

    fetch(WORKER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email, lang: lang })
    })
      .then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { return { ok: r.ok && j && j.ok, body: j }; }); })
      .then(function (res) {
        if (res.ok) {
          // Replace the entire form children with a success line, keep .cta__title etc visible if exists
          // But simplest: hide the inputs row, show success message
          var inputsRow = form.querySelector('.cta__form, .cta-strip__form, .cta-band__form, .cta-footer__form, .sidebar-cta__form');
          if (inputsRow && inputsRow !== form) {
            inputsRow.style.display = 'none';
          } else {
            // Hide all inputs and buttons inside the form
            var inputs = form.querySelectorAll('input:not([type="hidden"]), button');
            for (var i = 0; i < inputs.length; i++) inputs[i].style.display = 'none';
          }
          showMessage(form, dict.success, false);
        } else {
          showMessage(form, dict.error, true);
          if (button) { button.disabled = false; button.textContent = prevText; }
          form.dataset.kitBusy = '';
        }
      })
      .catch(function () {
        showMessage(form, dict.error, true);
        if (button) { button.disabled = false; button.textContent = prevText; }
        form.dataset.kitBusy = '';
      });
  }

  function init() {
    // Match any form that has both an email input and a hidden tag field
    var forms = document.querySelectorAll('form');
    for (var i = 0; i < forms.length; i++) {
      var f = forms[i];
      var hasEmail = f.querySelector('input[type="email"][name="email"]');
      var hasTag = f.querySelector('input[type="hidden"][name="tag"]');
      if (hasEmail && hasTag) {
        // Strip Buttondown attributes that would otherwise cause popup/redirect
        f.removeAttribute('action');
        f.removeAttribute('method');
        f.removeAttribute('target');
        f.onsubmit = null;
        f.addEventListener('submit', handleSubmit);
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

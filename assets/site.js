// Интерактив: раскрытие био, раскрытие списка тегов, мобильное меню
(function () {
  'use strict';

  // --- Био: «Больше →» раскрывает/сворачивает дополнительный текст
  var bioMore = document.querySelector('.bio__more');
  if (bioMore) {
    var bio = bioMore.closest('.bio');
    bioMore.addEventListener('click', function () {
      var open = bio.classList.toggle('is-open');
      bioMore.setAttribute('aria-expanded', open ? 'true' : 'false');
      bioMore.firstChild.nodeValue = open ? 'Скрыть ' : 'Больше ';
    });
  }

  // --- Теги: «Показать все N →» раскрывает/сворачивает хвост списка
  var tagsToggle = document.querySelector('.tags__toggle');
  if (tagsToggle) {
    var tags = tagsToggle.closest('.tags');
    tagsToggle.addEventListener('click', function () {
      var open = tags.classList.toggle('is-open');
      tagsToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      tagsToggle.textContent = open ? 'Скрыть \u2190' : 'Показать все\u00a020\u00a0\u2192';
    });
  }

  // --- Бургер на мобильном: раскрывает top-nav как оверлей
  var burger = document.querySelector('.top-burger');
  if (burger) {
    burger.addEventListener('click', function () {
      var open = document.body.classList.toggle('menu-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // --- Config: pin постов и назначенные Highlight-1/2/3
  //    Читает /config.json и применяет настройки к текущей странице.
  (function () {
    var lang = (document.documentElement.lang || 'ru').toLowerCase().indexOf('en') === 0 ? 'en' : 'ru';
    fetch('/config.json', { cache: 'no-cache' })
      .then(function (r) { return r.ok ? r.json() : null; })
      .catch(function () { return null; })
      .then(function (cfg) {
        if (!cfg) return;
        // --- Highlights: проставить заголовок + ссылку, показать
        var hl = (cfg.highlights && cfg.highlights[lang]) || {};
        ['1','2','3'].forEach(function (slot) {
          var link = document.querySelector('[data-highlight-slot="' + slot + '"]');
          if (!link) return;
          var item = hl[slot];
          if (!item || !item.title) return; // слот пуст — скрыт
          link.textContent = item.title;
          link.setAttribute('href', item.url || '#');
          link.removeAttribute('hidden');
        });
        // --- Pin: перенести закреплённые посты наверх списка
        var list = document.querySelector('.posts__list');
        var pinned = (cfg.pinned && cfg.pinned[lang]) || [];
        if (list && pinned.length) {
          for (var i = pinned.length - 1; i >= 0; i--) {
            var slug = pinned[i];
            var el = list.querySelector('li[data-slug="' + slug + '"]');
            if (el) {
              el.classList.add('is-pinned');
              list.insertBefore(el, list.firstChild);
            }
          }
        }
      });
  })();

  // --- Dropdown языка
  var lang = document.querySelector('[data-lang]');
  if (lang) {
    var btn = lang.querySelector('.lang__current');
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = lang.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('click', function (e) {
      if (!lang.contains(e.target)) {
        lang.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }
})();

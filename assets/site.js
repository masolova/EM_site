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

  // --- Теги (ТОЛЬКО МОБАЙЛ): облако с автообрезкой до 4 строк
  //     + ссылка «Все посты»/«All topics» в конце.
  //     На десктопе сайдбар — вертикальный список, показываем все теги без обрезки.
  (function () {
    var list = document.querySelector('.tags__list');
    if (!list) return;
    var MOBILE_MAX = 800; // совпадает с медиа-брейкпоинтом в styles.css
    var lang = (document.documentElement.lang || 'ru').toLowerCase().indexOf('en') === 0 ? 'en' : 'ru';
    var labelMore = lang === 'en' ? 'All topics' : 'Все посты';
    var labelLess = lang === 'en' ? 'Hide' : 'Скрыть';
    var tags = list.closest('.tags');

    // Ссылка "Все посты" в конце
    var moreLi = document.createElement('li');
    moreLi.className = 'tags__more';
    var moreA = document.createElement('a');
    moreA.className = 'tags__toggle';
    moreA.href = '#';
    moreA.setAttribute('role', 'button');
    moreA.setAttribute('aria-expanded', 'false');
    moreA.textContent = labelMore;
    moreLi.appendChild(moreA);
    list.appendChild(moreLi);

    var items = Array.from(list.querySelectorAll('li:not(.tags__more)'));
    var applied = false;

    function fitMobile() {
      // снимаем ранее проставленные overflow, чтобы пересчитать чисто
      items.forEach(function (li) { li.classList.remove('tags__overflow'); });
      tags.classList.remove('is-open');
      moreA.setAttribute('aria-expanded', 'false');
      moreA.textContent = labelMore;
      moreLi.style.display = '';
      // Реальную высоту строки вычисляем по первым двум видимым тегам на разных строках.
      // Ищем первый тег, у которого top отличается от первого — это и есть rowH.
      var rowH = 26;
      if (items.length >= 2) {
        var firstA = items[0].querySelector('a');
        var t1 = firstA.getBoundingClientRect().top;
        for (var k = 1; k < items.length; k++) {
          var a = items[k].querySelector('a');
          var tk = a.getBoundingClientRect().top;
          if (tk - t1 > 2) { rowH = tk - t1; break; }
        }
      }
      var maxH = rowH * 4 + 2;
      if (list.scrollHeight <= maxH) {
        moreLi.style.display = 'none';
        return;
      }
      // Прячем теги с конца, пока:
      //  (1) общая высота (включая moreLi) не влезет в maxH
      //  (2) «Все посты» не окажется на той же строке, что и последний видимый тег
      var t1Initial = items[0].querySelector('a').getBoundingClientRect().top;
      function moreOnLastRow() {
        var moreTop = moreA.getBoundingClientRect().top;
        // Находим последний видимый тег
        for (var j = items.length - 1; j >= 0; j--) {
          if (!items[j].classList.contains('tags__overflow')) {
            var lastTop = items[j].querySelector('a').getBoundingClientRect().top;
            return Math.abs(moreTop - lastTop) < rowH * 0.6;
          }
        }
        return true;
      }
      for (var i = items.length - 1; i >= 0; i--) {
        items[i].classList.add('tags__overflow');
        void list.offsetHeight;
        if (list.scrollHeight <= maxH && moreOnLastRow()) break;
      }
    }

    function reset() {
      moreLi.style.display = 'none';
      items.forEach(function (li) { li.classList.remove('tags__overflow'); });
      tags.classList.remove('is-open');
      moreA.setAttribute('aria-expanded', 'false');
      moreA.textContent = labelMore;
    }

    function apply() {
      var isMobile = window.matchMedia('(max-width: ' + MOBILE_MAX + 'px)').matches;
      if (isMobile) {
        applied = true;
        fitMobile();
      } else if (applied) {
        applied = false;
        reset();
      } else {
        moreLi.style.display = 'none';
      }
    }

    apply();
    // После загрузки шрифтов размеры могут измениться — пересчитываем
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(apply);
    }
    var t;
    window.addEventListener('resize', function () {
      clearTimeout(t);
      t = setTimeout(apply, 120);
    });

    moreA.addEventListener('click', function (e) {
      e.preventDefault();
      var open = tags.classList.toggle('is-open');
      moreA.setAttribute('aria-expanded', open ? 'true' : 'false');
      moreA.textContent = open ? labelLess : labelMore;
      moreA.blur();
    });
  })();

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

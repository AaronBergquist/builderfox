/* BuilderFox — Living Board. Tilt cells, translate-only reveals,
   scroll-driven turn counter. Degrades clean: no JS = static board
   (html.js class pattern), pointer:fine only for the cursor lamp/tilt,
   reduced motion respected, nothing is ever hidden behind a reveal. */
(function () {
  var fine = window.matchMedia('(pointer: fine)').matches;
  var calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* --- tilt + cursor lamp: board cells lift toward the pointer,
         the cover glare follows it --- */
  if (fine && !calm) {
    document.querySelectorAll('[data-tilt]').forEach(function (cell) {
      var max = parseFloat(cell.getAttribute('data-tilt')) || 6;
      cell.addEventListener('pointermove', function (e) {
        var r = cell.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - 0.5;
        var py = (e.clientY - r.top) / r.height - 0.5;
        cell.style.setProperty('--rx', (-py * max).toFixed(2) + 'deg');
        cell.style.setProperty('--ry', (px * max).toFixed(2) + 'deg');
        cell.style.setProperty('--gx', ((px + 0.5) * 100).toFixed(1) + '%');
        cell.style.setProperty('--gy', ((py + 0.5) * 100).toFixed(1) + '%');
      });
      cell.addEventListener('pointerleave', function () {
        cell.style.removeProperty('--rx');
        cell.style.removeProperty('--ry');
      });
    });
  }

  /* --- reveals: translate-only (content never invisible) --- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !calm) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -5% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* --- turn counter: sections are turns; the header chip plays along --- */
  var view = document.querySelector('[data-turnview]');
  var turns = document.querySelectorAll('[data-turn]');
  if (view && turns.length && 'IntersectionObserver' in window) {
    var tio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { view.textContent = en.target.getAttribute('data-turn'); }
      });
    }, { rootMargin: '-40% 0px -50% 0px' });
    turns.forEach(function (s) { tio.observe(s); });
  }
})();

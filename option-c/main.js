// Option C, Schematic. Plot-on-scroll line drawing and the preview-only form.
(function () {
  'use strict';

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var plots = Array.prototype.slice.call(document.querySelectorAll('.plot'));

  function finish(svg) {
    svg.querySelectorAll('[pathLength]').forEach(function (el) { el.removeAttribute('pathLength'); });
    svg.classList.add('is-done');
  }

  function plot(svg) {
    if (svg.classList.contains('is-plotted')) return;
    svg.classList.add('is-plotted');
    var n = svg.querySelectorAll('.ln > *').length;
    window.setTimeout(function () { finish(svg); }, 1200 + n * 60);
  }

  if (reduce || !('IntersectionObserver' in window)) {
    plots.forEach(function (svg) { svg.classList.add('is-plotted', 'is-done'); });
  } else {
    plots.forEach(function (svg) {
      svg.querySelectorAll('.ln > *').forEach(function (el, i) {
        el.setAttribute('pathLength', '1');
        el.style.setProperty('--i', String(i % 14));
      });
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { plot(e.target); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.15 });
    plots.forEach(function (svg) { io.observe(svg); });
    // Safety net: never leave a drawing unplotted.
    window.setTimeout(function () { plots.forEach(plot); }, 6000);
  }

  // Form: preview only, nothing leaves the page.
  var form = document.getElementById('book-form');
  if (!form) return;
  var status = document.getElementById('form-status');
  var urgent = document.getElementById('f-urgent');
  var note = document.getElementById('urgent-note');
  var urgentText = 'For sparks, smoke or a burning smell, call 911 first. Otherwise call our 24/7 line (Sample): (469) 555-0132.';

  function syncUrgent() { note.textContent = urgent.checked ? urgentText : ''; }
  urgent.addEventListener('change', syncUrgent);
  syncUrgent();

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    status.textContent = '';
    window.setTimeout(function () { status.textContent = 'Preview only. Nothing was sent.'; }, 50);
  });
})();

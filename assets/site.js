/* Tabaka Fitness – tiny progressive-enhancement script: mobile menu, scroll progress, scroll reveals. The site works fully without it. */
(function () {
  var d = document, root = d.documentElement;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Mobile menu
  var btn = d.querySelector('.nav-toggle'), panel = d.getElementById('site-nav');
  if (btn && panel) {
    var setOpen = function (open) {
      panel.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', String(open));
    };
    btn.addEventListener('click', function () { setOpen(btn.getAttribute('aria-expanded') !== 'true'); });
    d.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') { setOpen(false); btn.focus(); }
    });
    panel.addEventListener('click', function (e) { if (e.target.closest && e.target.closest('a')) setOpen(false); });
  }

  // Header state and scroll progress bar
  var header = d.querySelector('.site-header');
  var bar = d.querySelector('.progress span');
  var ticking = false;
  function update() {
    var y = window.pageYOffset || 0;
    var max = root.scrollHeight - window.innerHeight;
    if (header) header.classList.toggle('scrolled', y > 8);
    if (bar) bar.style.transform = 'scaleX(' + (max > 0 ? Math.min(1, y / max) : 0) + ')';
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
  }, { passive: true });
  window.addEventListener('resize', update);
  update();

  // Scroll reveals
  if (reduce || !('IntersectionObserver' in window)) return;
  var sel = [
    'main .block .wrap > *:not(.grid):not(.quotes):not(.steps):not(.price-cards)',
    'main .grid > *', 'main .quotes > *', 'main .steps > li', 'main .facts > li',
    'main .price-cards > *', 'main .cta .wrap > *'
  ].join(',');
  var els = Array.prototype.slice.call(d.querySelectorAll(sel));
  var counts = new Map();
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      io.unobserve(el);
      el.classList.add('in');
      // Remove the helper classes afterwards so hover transforms work normally.
      window.setTimeout(function () { el.classList.remove('reveal', 'in'); el.style.removeProperty('--d'); }, 1100);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  els.forEach(function (el) {
    var parent = el.parentNode;
    var i = counts.get(parent) || 0;
    counts.set(parent, i + 1);
    el.style.setProperty('--d', Math.min(i, 5) * 80 + 'ms');
    el.classList.add('reveal');
    io.observe(el);
  });
})();

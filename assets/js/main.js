// Progressive enhancement: the navigation works without JavaScript.
// With JavaScript, small screens get a collapsible menu button.
(function () {
  var root = document.documentElement;
  root.classList.remove('no-js');
  root.classList.add('js');

  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? 'Close' : 'Menu';
  });
})();

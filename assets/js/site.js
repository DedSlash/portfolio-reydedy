/* ============================================================
   Rey Dedy Pangou — Script commun
   Nav mobile · Scroll blur header · Reveal · Theme toggle
   ============================================================ */

(function () {
  'use strict';

  /* ---------- Toggle thème ---------- */
  const themeBtn = document.querySelector('[data-theme-toggle]');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      const isDark = document.documentElement.classList.contains('dark');
      document.documentElement.classList.remove('dark', 'light');
      const next = isDark ? 'light' : 'dark';
      document.documentElement.classList.add(next);
      try { localStorage.setItem('theme', next); } catch (e) { /* noop */ }
    });
  }

  /* ---------- Hamburger + drawer mobile ---------- */
  const header = document.querySelector('.site-header');
  const hamburger = document.querySelector('[data-hamburger]');
  if (header && hamburger) {
    hamburger.addEventListener('click', function () {
      const open = header.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
      hamburger.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    });
    header.querySelectorAll('.drawer a').forEach(function (a) {
      a.addEventListener('click', function () {
        header.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Scroll blur du header ---------- */
  if (header) {
    const onScroll = function () {
      if (window.scrollY > 12) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- Marquer le lien actif du header ---------- */
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  document.querySelectorAll('.site-header a[data-nav]').forEach(function (a) {
    const target = a.getAttribute('data-nav');
    const isRoot = target === '/' && (path === '/' || path === '' || path.endsWith('/index.html'));
    const matches = isRoot || (target !== '/' && path.endsWith(target));
    if (matches) a.classList.add('active');
  });

  /* ---------- Reveal on scroll ---------- */
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(function (el, i) {
      el.style.transitionDelay = (Math.min(i, 6) * 40) + 'ms';
      io.observe(el);
    });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- Année courante dans le footer ---------- */
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();

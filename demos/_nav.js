/* ============================================================
   Navigation partagée entre maquettes de démonstration.
   Injecte :
   - Une barre fixe en bas d'écran : [← Catalogue] · [‹] X/N [›]
   - Un masquage responsive du back-badge top-left sur mobile
     (le bouton "Catalogue" de la barre reprend la fonction)
   - Raccourcis clavier ← / → et swipe horizontal
   Aux extrémités : boutons prev/next désactivés, pas de boucle.

   Maintenance : ajouter une démo = 1 ligne dans ORDER (+ le label)
   et ajouter <script src="_nav.js" defer></script> dans le fichier.
   ============================================================ */
(function () {
  'use strict';

  const ORDER = [
    'restaurant.html',
    'cafe.html',
    'boutique.html',
    'marque.html',
    'cabinet.html',
    'dentaire.html',
    'ophtalmo.html',
    'kine.html',
    'ecole.html',
    'formation.html',
    'portfolio.html',
    'studio.html',
    'startup.html',
    'saas.html',
    'refonte.html',
    'dashboard.html',
  ];

  const LABELS = {
    'restaurant.html': 'Restaurant',
    'cafe.html': 'Café',
    'boutique.html': 'Boutique',
    'marque.html': 'Marque',
    'cabinet.html': 'Cabinet médical',
    'dentaire.html': 'Dentaire',
    'ophtalmo.html': 'Ophtalmo',
    'kine.html': 'Kinésithérapie',
    'ecole.html': 'École',
    'formation.html': 'Formation',
    'portfolio.html': 'Portfolio',
    'studio.html': 'Studio',
    'startup.html': 'Startup',
    'saas.html': 'SaaS',
    'refonte.html': 'Refonte',
    'dashboard.html': 'Dashboard',
  };

  const currentFile = (location.pathname.split('/').pop() || '').toLowerCase();
  const idx = ORDER.indexOf(currentFile);
  if (idx === -1) return;

  const prevFile = idx > 0 ? ORDER[idx - 1] : null;
  const nextFile = idx < ORDER.length - 1 ? ORDER[idx + 1] : null;
  const prevLabel = prevFile ? (LABELS[prevFile] || prevFile) : '';
  const nextLabel = nextFile ? (LABELS[nextFile] || nextFile) : '';

  const style = document.createElement('style');
  style.textContent = `
    .demo-nav {
      position: fixed;
      bottom: 16px; left: 50%; transform: translateX(-50%);
      z-index: 100;
      display: flex; align-items: stretch; gap: 2px;
      background: rgba(15,15,20,0.82);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 999px;
      padding: 4px;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      font-size: 12px;
      color: rgba(255,255,255,0.92);
      letter-spacing: 0.3px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.35);
      user-select: none;
      max-width: calc(100vw - 24px);
    }
    .demo-nav a, .demo-nav .demo-nav-btn {
      display: inline-flex; align-items: center; justify-content: center;
      padding: 8px 12px; border-radius: 999px;
      color: inherit; text-decoration: none;
      transition: background .18s ease, color .18s ease;
      gap: 6px; line-height: 1; white-space: nowrap;
    }
    .demo-nav a:hover { background: rgba(255,255,255,0.1); }
    .demo-nav a:focus-visible {
      outline: 2px solid rgba(255,255,255,0.7);
      outline-offset: 2px;
    }
    .demo-nav .demo-nav-btn.disabled {
      opacity: 0.32; pointer-events: none;
    }
    .demo-nav .demo-nav-back { font-weight: 500; }
    .demo-nav .demo-nav-arrow { font-size: 15px; padding: 8px 14px; }
    .demo-nav .demo-nav-sep {
      width: 1px; background: rgba(255,255,255,0.14);
      margin: 4px 2px;
    }
    .demo-nav .demo-nav-counter {
      display: inline-flex; align-items: center;
      padding: 0 10px;
      font-family: 'JetBrains Mono', ui-monospace, monospace;
      font-size: 11px;
      color: rgba(255,255,255,0.72);
      letter-spacing: 0.5px;
      white-space: nowrap;
      flex-shrink: 0;
    }
    .demo-nav .demo-nav-arrow, .demo-nav .demo-nav-back { flex-shrink: 0; }
    .demo-nav .lbl-desktop { display: inline; }
    .demo-nav .lbl-mobile { display: none; }
    .demo-nav .demo-nav-grid {
      display: inline-block; vertical-align: -1px;
      color: rgba(255,255,255,0.85);
    }
    @media (max-width: 640px) {
      .demo-nav { bottom: 12px; font-size: 11.5px; }
      .demo-nav a, .demo-nav .demo-nav-btn { padding: 7px 10px; }
      .demo-nav .demo-nav-arrow { padding: 7px 12px; }
      .demo-nav .lbl-desktop { display: none; }
      .demo-nav .lbl-mobile { display: inline; }
      /* Chantier 1 — le back-badge top-left recouvre le hero sur mobile.
         La barre du bas fournit déjà "Catalogue", donc on masque le badge. */
      .back-badge { display: none !important; }
    }
    @media (prefers-reduced-motion: reduce) {
      .demo-nav a, .demo-nav .demo-nav-btn { transition: none; }
    }
  `;
  document.head.appendChild(style);

  const nav = document.createElement('nav');
  nav.className = 'demo-nav';
  nav.setAttribute('aria-label', 'Navigation entre maquettes de démonstration');

  const back = document.createElement('a');
  back.href = '../exemples.html';
  back.className = 'demo-nav-back';
  back.setAttribute('aria-label', 'Revenir au catalogue des maquettes');
  back.innerHTML =
    '<svg class="demo-nav-grid" width="11" height="11" viewBox="0 0 11 11" aria-hidden="true">' +
      '<rect x="0" y="0" width="4.5" height="4.5" rx="0.8" fill="currentColor"/>' +
      '<rect x="6.5" y="0" width="4.5" height="4.5" rx="0.8" fill="currentColor"/>' +
      '<rect x="0" y="6.5" width="4.5" height="4.5" rx="0.8" fill="currentColor"/>' +
      '<rect x="6.5" y="6.5" width="4.5" height="4.5" rx="0.8" fill="currentColor"/>' +
    '</svg>' +
    '<span class="lbl-desktop">Catalogue</span>' +
    '<span class="lbl-mobile">Tous</span>';
  nav.appendChild(back);

  const sep = document.createElement('span');
  sep.className = 'demo-nav-sep';
  sep.setAttribute('aria-hidden', 'true');
  nav.appendChild(sep);

  const makeArrow = (file, label, glyph, isPrev) => {
    let el;
    if (file) {
      el = document.createElement('a');
      el.href = file;
      el.setAttribute('aria-label', `${isPrev ? 'Démo précédente' : 'Démo suivante'} : ${label}`);
    } else {
      el = document.createElement('span');
      el.setAttribute('role', 'link');
      el.setAttribute('aria-disabled', 'true');
      el.setAttribute('aria-label', isPrev ? 'Aucune démo précédente' : 'Aucune démo suivante');
      el.classList.add('demo-nav-btn', 'disabled');
    }
    el.classList.add('demo-nav-arrow', isPrev ? 'demo-nav-prev' : 'demo-nav-next');
    el.innerHTML = `<span aria-hidden="true">${glyph}</span>`;
    return el;
  };

  nav.appendChild(makeArrow(prevFile, prevLabel, '‹', true));

  const counter = document.createElement('span');
  counter.className = 'demo-nav-counter';
  counter.textContent = `${idx + 1} / ${ORDER.length}`;
  counter.setAttribute('aria-label', `Démo ${idx + 1} sur ${ORDER.length}`);
  nav.appendChild(counter);

  nav.appendChild(makeArrow(nextFile, nextLabel, '›', false));

  document.body.appendChild(nav);

  document.addEventListener('keydown', function (e) {
    const t = e.target;
    if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.key === 'ArrowLeft' && prevFile) {
      e.preventDefault();
      location.href = prevFile;
    } else if (e.key === 'ArrowRight' && nextFile) {
      e.preventDefault();
      location.href = nextFile;
    }
  });

  let startX = 0, startY = 0, startT = 0;
  const SWIPE_MIN = 60;
  const SWIPE_MAX_V = 40;
  const SWIPE_MAX_T = 500;

  document.addEventListener('touchstart', function (e) {
    if (e.touches.length !== 1) return;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    startT = Date.now();
  }, { passive: true });

  document.addEventListener('touchend', function (e) {
    if (startT === 0) return;
    const dt = Date.now() - startT;
    startT = 0;
    if (dt > SWIPE_MAX_T) return;
    const t = e.changedTouches[0];
    if (!t) return;
    const dx = t.clientX - startX;
    const dy = t.clientY - startY;
    if (Math.abs(dy) > SWIPE_MAX_V) return;
    if (Math.abs(dx) < SWIPE_MIN) return;
    if (dx < 0 && nextFile) {
      location.href = nextFile;
    } else if (dx > 0 && prevFile) {
      location.href = prevFile;
    }
  }, { passive: true });
})();

# Portfolio — Rey Dedy Pangou

Site personnel d'un développeur fullstack Java/Spring/Angular basé à Dakar.
Fusion en un seul site cohérent de trois anciennes propriétés distinctes
(portfolio, catalogue de démos, formulaire de contact).

**En ligne :** https://portfolio-reydedy.netlify.app

## Stack

- **HTML / CSS / JS statique**, aucun framework, aucun build step
- **Typographie** : Fraunces (titres) + Inter (corps) + JetBrains Mono (mono) via Google Fonts
- **Palette** : fond `#07070b`, accent or `#c9a84c`, mode clair alternatif toggle-able
- **Formulaire de devis** : Web3Forms (email) + redirection WhatsApp
- **Déploiement Netlify direct** : `publish = "."`, aucun `npm install` requis

## Structure

```
/
├── index.html               → Accueil
├── realisations.html        → 7 projets réels (Joseph Yusuf en tête)
├── exemples.html            → Catalogue de démos (avec bandeau explicite)
├── services.html            → 3 formules avec tarifs
├── devis.html               → Formulaire Web3Forms + WhatsApp
├── favicon.ico
├── netlify.toml             → configuration Netlify (pas de build)
├── demos/                   → 6 maquettes autonomes
│   ├── restaurant.html      → vitrine + réservation
│   ├── boutique.html        → e-commerce avec Wave/Orange Money
│   ├── cabinet.html         → prise de RDV libéral
│   ├── portfolio.html       → portfolio créatif
│   ├── startup.html         → landing produit
│   └── refonte.html         → démo avant/après
├── assets/
│   ├── css/site.css         → design system commun
│   ├── js/site.js           → nav, scroll blur, reveal, theme toggle
│   ├── img/photo-rey.jpeg
│   └── cv-rey-dedy-pangou.pdf
├── _legacy_angular/         → ancien portfolio Angular (archivé)
└── _legacy_sources/         → catalogue + formulaire originaux (archivés)
```

## Routes

| URL                | Page                                                          |
|--------------------|---------------------------------------------------------------|
| `/`                | Accueil — qui je suis, Joseph Yusuf, CTA                      |
| `/realisations`    | 7 projets réels avec stack et démo live                       |
| `/exemples`        | 6 maquettes de démonstration (avec avertissement explicite)   |
| `/services`        | 3 formules avec tarifs et processus                           |
| `/devis`           | Formulaire de qualification (email + WhatsApp)                |

## Lancer en local

Aucune dépendance à installer. Un simple serveur HTTP suffit :

```bash
# Python 3
python3 -m http.server 8000

# ou Node
npx serve .
```

Puis ouvrir http://localhost:8000

## Déploiement Netlify

### Option 1 — Netlify CLI (recommandé pour un premier déploiement)

```bash
netlify deploy --prod --dir .
```

### Option 2 — Git-based (déploiement automatique à chaque push)

Le fichier `netlify.toml` déclare `publish = "."`, donc Netlify publie les fichiers de la racine du dépôt tels quels — pas de commande de build, pas de dépendances à installer.

Sur le dashboard Netlify :
1. **New site from Git** → connecter le dépôt
2. **Build command** : (laisser vide, `netlify.toml` s'en occupe)
3. **Publish directory** : `.`
4. Deploy site

### Option 3 — Drag &amp; drop

Aller sur https://app.netlify.com/drop et glisser le dossier racine (sans `_legacy_*/`).

## Configuration formulaire

- **Web3Forms access key** : intégrée dans `devis.html` — les soumissions arrivent sur `dedypangou@gmail.com`
- **WhatsApp** : redirection vers `+221 78 160 20 37`

## Historique

- `_legacy_angular/` — ancien portfolio Angular 20 (Tailwind, standalone components)
- `_legacy_sources/catalogue_rea_rey_dedy/` — ancien site catalogue autonome
- `_legacy_sources/formulaire_projet_rey_dedy.html` — ancien formulaire de contact autonome

Ces dossiers sont conservés pour référence et pourront être supprimés
une fois la migration validée en production.

## Contact

- **WhatsApp** : [+221 78 160 20 37](https://wa.me/221781602037)
- **Email** : dedypangou@gmail.com
- **GitHub** : [DedSlash](https://github.com/DedSlash)
- **LinkedIn** : [rey-dedy-pangou](https://www.linkedin.com/in/rey-dedy-pangou/)

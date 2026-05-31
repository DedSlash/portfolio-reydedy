# Portfolio — Rey Dedy Pangou

Portfolio personnel d'un développeur fullstack Java/Spring/Angular basé à Dakar.

**En ligne :** _(URL Netlify à venir)_

## Stack

- **Angular 20** (standalone components, routing avec lazy-loading)
- **TailwindCSS 3** avec variables CSS pour le thème dark/light
- **Typographie** : Fraunces (titres) + Inter (corps) via Google Fonts
- **Pas de backend** — les projets sont définis dans `src/app/data/projects.data.ts`
- **Build statique** déployé sur Netlify

## Direction visuelle

« Dark Gold » — fond noir profond + accent or (`#c9a84c`), cohérent avec mon SaaS
[josephyusuf.com](https://josephyusuf.com). Mode sombre par défaut, toggle clair
mémorisé dans `localStorage`, détection automatique de `prefers-color-scheme`
au premier chargement.

## Structure

```
src/app/
├── data/             # projects.data.ts + interface Project
├── services/         # ThemeService (signal-based)
├── shared/           # Header, Footer, ThemeToggle, Marquee, ProjectCard
└── pages/            # home, projects, services, about, contact
```

## Routes

| Path        | Page                                                            |
|-------------|-----------------------------------------------------------------|
| `/`         | Accueil                                                         |
| `/projets`  | Grille des 7 projets                                            |
| `/services` | Offres + tarifs                                                 |
| `/a-propos` | Parcours, manifesto, CV                                         |
| `/contact`  | Lien vers formulaire2contact.netlify.app + contacts directs     |

## Lancer en local

```bash
npm install
npm start          # ng serve sur http://localhost:4200
npm run build      # build prod dans dist/portfolio-reydedy/browser/
```

## Déploiement Netlify

Configuration dans `netlify.toml` :
- Build : `npm run build`
- Publish : `dist/portfolio-reydedy/browser`
- Fallback SPA : toute route inconnue → `/index.html` (le router Angular prend le relais)

## Contact

WhatsApp : +221 78 160 20 37 · Email : dedypangou@gmail.com
GitHub : [DedSlash](https://github.com/DedSlash) · LinkedIn : [rey-dedy-pangou](https://www.linkedin.com/in/rey-dedy-pangou/)

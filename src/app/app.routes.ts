import { Routes } from '@angular/router';

/**
 * Routes du portfolio — lazy-loadées pour réduire le bundle initial.
 * L'ordre n'a pas d'impact côté router, juste pour la lisibilité.
 */
export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Rey Dedy Pangou — Développeur Fullstack Java/Spring/Angular',
  },
  {
    path: 'projets',
    loadComponent: () =>
      import('./pages/projects/projects.component').then((m) => m.ProjectsComponent),
    title: 'Projets — Rey Dedy Pangou',
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./pages/services/services.component').then((m) => m.ServicesComponent),
    title: 'Services — Rey Dedy Pangou',
  },
  {
    path: 'a-propos',
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.AboutComponent),
    title: 'À propos — Rey Dedy Pangou',
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then((m) => m.ContactComponent),
    title: 'Contact — Rey Dedy Pangou',
  },
  // Fallback : tout chemin inconnu → accueil
  { path: '**', redirectTo: '' },
];

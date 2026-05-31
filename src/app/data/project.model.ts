/**
 * Modèle de données pour un projet du portfolio.
 * Le tri visuel suit l'ordre du tableau dans projects.data.ts.
 */
export interface Project {
  /** Identifiant utilisé dans les routes éventuelles (slug url-safe). */
  id: string;
  /** Titre vendeur (≠ nom technique du repo). */
  title: string;
  /** Catégorie courte affichée comme badge (ex: "SaaS en production"). */
  category: string;
  /** Pitch marketing 1-2 phrases. */
  pitch: string;
  /** Statut honnête (ex: "En production publique depuis mai 2026"). */
  status?: string;
  /** Tags techniques affichés sous le pitch. */
  stack: string[];
  /** Points forts (bullets) — utilisés sur la page Projets. */
  highlights?: string[];
  /** URL du repo GitHub (obligatoire). */
  repoUrl: string;
  /** URL démo live si applicable. */
  liveUrl?: string;
  /** Crédentials de démo (compte de test) — affichés en discret. */
  demoCredentials?: { user: string; password: string };
  /** Mise en avant : phare = grande carte, secondaire = carte normale. */
  featured: 'phare' | 'secondaire';
  /** Badge spécial : "EN PRODUCTION", "PROJET PHARE", etc. */
  badges?: string[];
}

import { Injectable, signal } from '@angular/core';

export type Theme = 'dark' | 'light';
const STORAGE_KEY = 'theme';

/**
 * Gère le thème dark / light de l'application.
 *
 * Au démarrage, le script inline dans index.html a déjà appliqué la bonne
 * classe sur <html> pour éviter le flash. Ce service synchronise le signal
 * avec cet état initial et expose un toggle.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  /** Signal lisible par les composants pour réagir au changement de thème. */
  readonly theme = signal<Theme>(this.detectInitialTheme());

  private detectInitialTheme(): Theme {
    if (typeof document === 'undefined') return 'dark';
    return document.documentElement.classList.contains('light') ? 'light' : 'dark';
  }

  /** Bascule entre dark et light, persiste dans localStorage. */
  toggle(): void {
    const next: Theme = this.theme() === 'dark' ? 'light' : 'dark';
    this.apply(next);
  }

  /** Force un thème spécifique (utile pour de futurs réglages). */
  set(theme: Theme): void {
    this.apply(theme);
  }

  private apply(theme: Theme): void {
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* localStorage indisponible (navigation privée, etc.) — on continue. */
    }
    this.theme.set(theme);
  }
}

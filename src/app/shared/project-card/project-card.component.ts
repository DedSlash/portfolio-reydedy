import { Component, computed, input } from '@angular/core';
import { Project } from '../../data/project.model';

@Component({
  selector: 'app-project-card',
  standalone: true,
  templateUrl: './project-card.component.html',
})
export class ProjectCardComponent {
  /** Projet à afficher. */
  readonly project = input.required<Project>();
  /** Force le rendu en large (pleine largeur) — sinon dépend de project.featured. */
  readonly forceLarge = input<boolean>(false);

  protected readonly isLarge = computed(
    () => this.forceLarge() || this.project().featured === 'phare',
  );

  /** Tags visibles (max 6) + flag s'il y en a d'autres. */
  protected readonly visibleStack = computed(() => this.project().stack.slice(0, 6));
  protected readonly extraCount = computed(() => Math.max(0, this.project().stack.length - 6));
}

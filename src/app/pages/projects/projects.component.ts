import { Component } from '@angular/core';
import { PROJECTS } from '../../data/projects.data';
import { ProjectCardComponent } from '../../shared/project-card/project-card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent],
  template: `
    <section class="layout-container pt-20 md:pt-28 pb-12">
      <p class="kicker mb-6">Mes projets</p>
      <h1 class="font-serif text-h1-mobile md:text-h1-desktop text-text-primary mb-6 max-w-[820px]">
        Sept systèmes, sept terrains de jeu.
      </h1>
      <p class="max-w-prose text-text-muted text-lg leading-relaxed">
        Du SaaS multi-microservices en production aux APIs petit-format soignées, voici les projets qui
        composent ma pratique. Chacun a son repo public, sa stack assumée, et — pour certains — sa démo live.
      </p>
    </section>

    <section class="layout-container pb-24">
      <div class="grid md:grid-cols-2 gap-6">
        @for (p of projects; track p.id) {
          <app-project-card [project]="p"/>
        }
      </div>
    </section>
  `,
})
export class ProjectsComponent {
  protected readonly projects = PROJECTS;
}

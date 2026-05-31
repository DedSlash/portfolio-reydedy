import { Component, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROJECTS } from '../../data/projects.data';
import { ProjectCardComponent } from '../../shared/project-card/project-card.component';
import { MarqueeComponent } from '../../shared/marquee/marquee.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ProjectCardComponent, MarqueeComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  /** Joseph Yusuf — grande carte solo. */
  protected readonly heroProject = computed(() => PROJECTS.find((p) => p.id === 'joseph-yusuf')!);
  /** Lets-Travel + Neo4flix — grille 2 colonnes. */
  protected readonly secondaryPhare = computed(() =>
    PROJECTS.filter((p) => ['lets-travel', 'neo4flix'].includes(p.id)),
  );

  protected readonly stats = [
    { value: '10+', label: 'projets livrés' },
    { value: '11', label: 'microservices en prod' },
    { value: '3', label: 'ans d’expérience' },
    { value: '01', label: 'SaaS en production' },
  ];

  protected readonly whyMe = [
    {
      title: 'Solutionneur, pas dev',
      body: 'Je projette les solutions avant de coder. Plusieurs hypothèses, le bout du tunnel visible dès le départ.',
    },
    {
      title: 'De l’idée à la prod',
      body: 'Architecture, développement, déploiement, monitoring. Je couvre toute la chaîne sans dépendre d’une équipe.',
    },
    {
      title: 'Stack senior assumée',
      body: 'Microservices Spring Cloud, CI/CD Jenkins, observabilité Prometheus/Grafana, infra-as-code Ansible.',
    },
  ];
}

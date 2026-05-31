import { Component } from '@angular/core';

interface TimelineEntry {
  period: string;
  title: string;
  org: string;
  body: string;
}

interface SkillGroup {
  category: string;
  items: string[];
}

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
})
export class AboutComponent {
  protected readonly timeline: TimelineEntry[] = [
    {
      period: '2024 — Présent',
      title: 'Développeur Fullstack Java/Angular',
      org: 'Zone01 Dakar (Atos Sénégal)',
      body: 'Spécialisation Java Fullstack. Conception et développement de SaaS multi-microservices.',
    },
    {
      period: '2023 — 2024',
      title: 'Formation Développeur Full Stack',
      org: 'Zone01 Dakar (18 mois)',
      body: 'Go, Java, JavaScript/TypeScript, Rust, SQL/NoSQL, GraphQL. Pédagogie par projet, peer-learning.',
    },
    {
      period: '2017 — 2019',
      title: 'Licence Génie Logiciel & Bases de Données',
      org: 'MIT Dakar',
      body: 'Fondamentaux de l’ingénierie logicielle, conception de bases relationnelles, architecture applicative.',
    },
    {
      period: '2016 — 2017',
      title: 'Baccalauréat Scientifique',
      org: 'CPRED, Pointe-Noire, Congo',
      body: 'Série C — Mathématiques et physique-chimie.',
    },
  ];

  protected readonly skills: SkillGroup[] = [
    {
      category: 'Backend',
      items: ['Java 17', 'Spring Boot 3', 'Spring Cloud', 'Spring Security', 'REST', 'GraphQL', 'Go', 'Python'],
    },
    {
      category: 'Frontend',
      items: ['Angular 17/20', 'TypeScript', 'RxJS', 'TailwindCSS', 'PrimeNG', 'Angular Material'],
    },
    {
      category: 'Bases de données',
      items: ['PostgreSQL', 'MongoDB', 'Neo4j', 'Elasticsearch', 'Redis', 'SQLite'],
    },
    {
      category: 'DevOps / CI-CD',
      items: ['Docker', 'Jenkins', 'Ansible', 'SonarQube', 'Nginx', 'Hetzner VPS', 'Netlify'],
    },
    {
      category: 'Sécurité',
      items: ['JWT', '2FA email', 'OAuth2', 'HashiCorp Vault', 'Bucket4j', 'HTTPS/TLS'],
    },
    {
      category: 'Architecture',
      items: ['Microservices', 'Event-driven (Kafka)', 'API Gateway', 'Service Discovery (Eureka)'],
    },
    {
      category: 'Outils',
      items: ['Git', 'GitHub CLI', 'IntelliJ IDEA', 'VS Code', 'Postman', 'Maven'],
    },
    {
      category: 'Autres',
      items: ['Rust', 'Dart / Flutter', 'C++', 'WebSocket', 'Stripe', 'PayPal'],
    },
  ];
}

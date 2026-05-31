import { Component } from '@angular/core';

interface StackGroup {
  label: string;
  items: string[];
}

@Component({
  selector: 'app-marquee',
  standalone: true,
  template: `
    <div class="marquee-container marquee-mask overflow-hidden py-8 border-y border-border-base bg-bg-surface/40">
      <div class="marquee-track flex gap-12 whitespace-nowrap font-sans text-[14px]">
        <!-- Liste dupliquée pour défilement seamless -->
        @for (pass of [0, 1]; track pass) {
          @for (group of groups; track group.label; let last = $last) {
            <div class="flex items-center gap-3 shrink-0">
              <span class="text-accent text-[10px] tracking-[0.22em] uppercase font-medium">{{ group.label }}</span>
              <span class="text-text-dim">·</span>
              @for (item of group.items; track item; let l = $last) {
                <span class="text-text-primary">{{ item }}</span>
                @if (!l) { <span class="text-text-dim">·</span> }
              }
            </div>
            <!-- Séparateur diamant entre catégories -->
            <span class="shrink-0 text-accent/60">◆</span>
          }
        }
      </div>
    </div>
  `,
})
export class MarqueeComponent {
  protected readonly groups: StackGroup[] = [
    { label: 'Langages', items: ['Java 17', 'TypeScript', 'Go', 'Rust', 'Python', 'Dart'] },
    { label: 'Backend', items: ['Spring Boot 3', 'Spring Cloud', 'Spring Security', 'REST APIs', 'GraphQL'] },
    { label: 'Frontend', items: ['Angular 17', 'RxJS', 'TailwindCSS', 'Angular Material'] },
    { label: 'Bases de données', items: ['PostgreSQL', 'MongoDB', 'Neo4j', 'Elasticsearch', 'Redis'] },
    { label: 'Messaging', items: ['Apache Kafka', 'WebSocket'] },
    { label: 'DevOps', items: ['Docker', 'Jenkins', 'Ansible', 'SonarQube', 'Nginx'] },
    { label: 'Sécurité', items: ['JWT + 2FA', 'OAuth2', 'HashiCorp Vault', 'Bucket4j'] },
  ];
}

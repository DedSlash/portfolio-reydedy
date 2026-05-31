import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="border-t border-border-base mt-32">
      <div class="layout-container py-10 grid md:grid-cols-3 gap-6 items-center text-sm">

        <!-- Copyright -->
        <p class="text-text-dim">© {{ year }} Rey Dedy Pangou — Développeur Fullstack, Dakar</p>

        <!-- Liens -->
        <div class="flex md:justify-center flex-wrap gap-5 text-text-muted">
          <a href="https://github.com/DedSlash" target="_blank" rel="noopener" class="link-discreet">GitHub</a>
          <a href="https://www.linkedin.com/in/rey-dedy-pangou/" target="_blank" rel="noopener" class="link-discreet">LinkedIn</a>
          <a href="https://wa.me/221781602037" target="_blank" rel="noopener" class="link-discreet">WhatsApp</a>
          <a href="mailto:dedypangou&#64;gmail.com" class="link-discreet">Email</a>
        </div>

        <!-- Crédit tech -->
        <p class="md:text-right text-text-dim">
          Construit avec <span class="text-accent">Angular 20</span> + <span class="text-accent">amour</span>
        </p>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  protected readonly year = new Date().getFullYear();
}

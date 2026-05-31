import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Service {
  num: string;
  title: string;
  priceFcfa: string;
  priceUsd: string;
  popular?: boolean;
  pitch: string;
  bullets: string[];
  delay: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './services.component.html',
})
export class ServicesComponent {
  protected readonly services: Service[] = [
    {
      num: '01',
      title: 'Création de site',
      priceFcfa: 'à partir de 150 000 F',
      priceUsd: '$250',
      pitch: 'Site vitrine, e-commerce, ou application web complète.',
      bullets: [
        'Design responsive et soigné',
        'Intégration paiement locale (Wave, Orange Money, Stripe)',
        'Backend Spring Boot et frontend Angular si besoin',
      ],
      delay: '2-4 semaines',
    },
    {
      num: '02',
      title: 'Refonte design',
      priceFcfa: 'à partir de 80 000 F',
      priceUsd: '$130',
      popular: true,
      pitch: 'Nouveau look, UI/UX moderne, responsive mobile sur site existant.',
      bullets: [
        'Travail sur votre site actuel (WordPress, sur-mesure, etc.)',
        'Livraison rapide, focus mobile',
        'Améliorations UX concrètes',
      ],
      delay: '1-2 semaines',
    },
    {
      num: '03',
      title: 'Refonte technique',
      priceFcfa: 'à partir de 100 000 F',
      priceUsd: '$165',
      pitch: 'Nouvelles fonctionnalités, APIs, intégrations tierces, optimisations.',
      bullets: [
        'Performance, SEO, sécurité',
        'APIs REST + intégrations (paiement, email, analytics)',
        'Migration de stack, refactoring de code existant',
      ],
      delay: '2-3 semaines',
    },
  ];

  protected readonly included = [
    'Design responsive (mobile, tablette, desktop)',
    'Backend robuste Spring Boot',
    'Déploiement Docker / CI-CD automatisé',
    'Livraison sous 2-4 semaines',
    'Support et maintenance après livraison',
    'Devis gratuit en 24h',
  ];

  protected readonly process = [
    {
      n: '01',
      title: 'Cadrage',
      body: 'On définit ensemble votre besoin, vos contraintes, vos délais. Devis ferme sous 24h.',
    },
    {
      n: '02',
      title: 'Conception',
      body: 'Maquettes, architecture, validation des choix techniques avant la moindre ligne de code.',
    },
    {
      n: '03',
      title: 'Développement',
      body: 'Cycles courts, démos régulières. Vous voyez l’avancement chaque semaine.',
    },
    {
      n: '04',
      title: 'Livraison & support',
      body: 'Mise en production, formation, support pendant 1 mois inclus.',
    },
  ];
}

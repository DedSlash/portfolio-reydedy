import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  protected readonly contacts = [
    {
      label: 'WhatsApp',
      value: '+221 78 160 20 37',
      href: 'https://wa.me/221781602037',
      external: true,
    },
    {
      label: 'Email',
      value: 'dedypangou@gmail.com',
      href: 'mailto:dedypangou@gmail.com',
      external: false,
    },
    {
      label: 'GitHub',
      value: 'github.com/DedSlash',
      href: 'https://github.com/DedSlash',
      external: true,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/rey-dedy-pangou',
      href: 'https://www.linkedin.com/in/rey-dedy-pangou/',
      external: true,
    },
  ];
}

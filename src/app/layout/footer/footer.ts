import { ChangeDetectionStrategy, Component } from '@angular/core';

interface FooterLink {
  readonly label: string;
  readonly href: string;
  readonly external: boolean;
}

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  protected readonly links: readonly FooterLink[] = [
    { label: 'Github', href: 'https://github.com/', external: true },
    { label: 'LinkedIn', href: 'https://linkedin.com/', external: true },
    { label: 'Email', href: 'mailto:kontakt@daniel-korbmacher.de', external: false },
    { label: 'Legal Notice', href: '#legal-notice', external: false },
  ];
}
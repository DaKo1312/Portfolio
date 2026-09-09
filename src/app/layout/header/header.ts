import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

export type Language = 'EN' | 'DE';

export interface NavLink {
  readonly id: string;
  readonly label: string;
}

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.is-menu-open]': 'menuOpen()',
    '(document:keydown.escape)': 'closeMenu()',
  },
})
export class Header {
  protected readonly activeLink = signal<string | null>(null);
  protected readonly menuOpen = signal(false);
  protected readonly languages: readonly Language[] = ['EN', 'DE'];
  protected readonly language = signal<Language>('EN');

  protected readonly navLinks: readonly NavLink[] = [
    { id: 'about', label: 'About me' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
  ];

  protected selectLanguage(language: Language): void {
    this.language.set(language);
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected selectLink(id: string): void {
    this.activeLink.set(id);
    this.closeMenu();
  }

  protected scrollToTop(): void {
    this.activeLink.set(null);
    this.closeMenu();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
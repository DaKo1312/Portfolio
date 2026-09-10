import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../core/language/language';
import { Translations } from '../../core/language/translations';

export type NavKey = keyof Translations['header']['nav'];

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
  protected readonly language = inject(LanguageService);
  protected readonly t = this.language.t;
  protected readonly activeLink = signal<NavKey | null>(null);
  protected readonly menuOpen = signal(false);
  protected readonly navLinks: readonly NavKey[] = ['about', 'skills', 'projects'];

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected selectLink(id: NavKey): void {
    this.activeLink.set(id);
    this.closeMenu();
  }

  protected scrollToTop(): void {
    this.activeLink.set(null);
    this.closeMenu();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

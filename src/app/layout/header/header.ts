import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

export type Language = 'EN' | 'DE';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  protected readonly activeLink = signal<string | null>(null);
  protected readonly languages: readonly Language[] = ['EN', 'DE'];
  protected readonly language = signal<Language>('EN');
  protected selectLanguage(language: Language): void {
    this.language.set(language);
  }
}
import { DOCUMENT, Injectable, computed, effect, inject, signal } from '@angular/core';
import { DE } from './de';
import { EN } from './en';
import { Language, Translations } from './translations';

const STORAGE_KEY = 'portfolio-language';

const DICTIONARIES: Readonly<Record<Language, Translations>> = { EN, DE };

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly document = inject(DOCUMENT);
  private readonly value = signal<Language>(this.restore());

  readonly languages: readonly Language[] = ['EN', 'DE'];
  readonly current = this.value.asReadonly();
  readonly t = computed(() => DICTIONARIES[this.value()]);

  constructor() {
    effect(() => {
      const language = this.value();
      this.document.documentElement.lang = language.toLowerCase();
      this.store(language);
    });
  }

  use(language: Language): void {
    this.value.set(language);
  }

  private restore(): Language {
    const stored = this.read();
    if (stored) {
      return stored;
    }

    const preferred = this.document.defaultView?.navigator.language ?? '';
    return preferred.toLowerCase().startsWith('de') ? 'DE' : 'EN';
  }

  private read(): Language | null {
    try {
      const value = this.document.defaultView?.localStorage.getItem(STORAGE_KEY);
      return value === 'EN' || value === 'DE' ? value : null;
    } catch {
      return null;
    }
  }

  private store(language: Language): void {
    try {
      this.document.defaultView?.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      return;
    }
  }
}

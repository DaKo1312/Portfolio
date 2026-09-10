import { TestBed } from '@angular/core/testing';
import { LanguageService } from './language';
import { DE } from './de';
import { EN } from './en';

describe('LanguageService', () => {
  beforeEach(() => {
    localStorage.clear();
    TestBed.resetTestingModule();
  });

  it('starts in English when nothing is stored', () => {
    const service = TestBed.inject(LanguageService);
    expect(service.current()).toBe('EN');
    expect(service.t()).toBe(EN);
  });

  it('switches the dictionary and the document language', () => {
    const service = TestBed.inject(LanguageService);
    service.use('DE');
    TestBed.tick();

    expect(service.t()).toBe(DE);
    expect(document.documentElement.lang).toBe('de');
  });

  it('remembers the selected language', () => {
    const service = TestBed.inject(LanguageService);
    service.use('DE');
    TestBed.tick();

    expect(localStorage.getItem('portfolio-language')).toBe('DE');

    TestBed.resetTestingModule();
    expect(TestBed.inject(LanguageService).current()).toBe('DE');
  });

  it('keeps both dictionaries structurally identical', () => {
    const keys = (value: unknown, path = ''): string[] => {
      if (!value || typeof value !== 'object') {
        return [path];
      }
      return Object.entries(value as Record<string, unknown>).flatMap(([key, child]) =>
        keys(child, path ? `${path}.${key}` : key),
      );
    };

    expect(keys(DE)).toEqual(keys(EN));
  });
});

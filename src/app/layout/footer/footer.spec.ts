import { TestBed } from '@angular/core/testing';
import { Footer } from './footer';

describe('Footer', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [Footer] }).compileComponents();
  });

  it('creates the component', () => {
    const fixture = TestBed.createComponent(Footer);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders the four footer links in template order', () => {
    const fixture = TestBed.createComponent(Footer);
    fixture.detectChanges();

    const labels = Array.from<HTMLAnchorElement>(
      fixture.nativeElement.querySelectorAll('.footer__link'),
    ).map((link) => link.textContent?.trim());

    expect(labels).toEqual(['Github', 'LinkedIn', 'Email', 'Legal Notice']);
  });

  it('opens only the external links in a new tab', () => {
    const fixture = TestBed.createComponent(Footer);
    fixture.detectChanges();

    const links: HTMLAnchorElement[] = Array.from(
      fixture.nativeElement.querySelectorAll('.footer__link'),
    );

    const external = links.filter((link) => link.getAttribute('target') === '_blank');
    expect(external.map((link) => link.textContent?.trim())).toEqual(['Github', 'LinkedIn']);
    expect(external.every((link) => link.getAttribute('rel') === 'noopener noreferrer')).toBe(true);

    const mail = links.find((link) => link.textContent?.trim() === 'Email');
    expect(mail?.getAttribute('target')).toBeNull();
    expect(mail?.getAttribute('href')).toBe('mailto:kontakt@daniel-korbmacher.de');
  });

  it('gives every link a decorative marker that is hidden from screen readers', () => {
    const fixture = TestBed.createComponent(Footer);
    fixture.detectChanges();

    const markers = fixture.nativeElement.querySelectorAll('.footer__marker');
    expect(markers.length).toBe(4);
    expect(
      Array.from<HTMLElement>(markers).every((m) => m.getAttribute('aria-hidden') === 'true'),
    ).toBe(true);
  });

  it('renders branding, location and copyright', () => {
    const fixture = TestBed.createComponent(Footer);
    fixture.detectChanges();

    const info = fixture.nativeElement.querySelector('.footer__info').textContent;
    expect(info).toContain('Web Developer');
    expect(info).toContain('Troisdorf Germany');

    const copyright = fixture.nativeElement.querySelector('.footer__copyright');
    expect(copyright.textContent.trim()).toBe('©Daniel Korbmacher 2026');
  });

  it('stacks a decorative hover logo on top of the default one', () => {
    const fixture = TestBed.createComponent(Footer);
    fixture.detectChanges();

    const base: HTMLImageElement = fixture.nativeElement.querySelector('.footer__logo-default');
    const hover: HTMLImageElement = fixture.nativeElement.querySelector('.footer__logo-hover');

    expect(base.getAttribute('src')).toBe('logo/logo.png');
    expect(hover.getAttribute('src')).toBe('logo/logo1.png');

    expect(base.getAttribute('alt')).toBe('Daniel Korbmacher logo');
    expect(hover.getAttribute('alt')).toBe('');
    expect(hover.getAttribute('aria-hidden')).toBe('true');
  });

  it('labels the footer navigation landmark', () => {
    const fixture = TestBed.createComponent(Footer);
    fixture.detectChanges();

    const nav = fixture.nativeElement.querySelector('nav');
    expect(nav.getAttribute('aria-label')).toBe('Footer navigation');
  });
});
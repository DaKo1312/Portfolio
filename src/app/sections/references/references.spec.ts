import { ComponentFixture, TestBed } from '@angular/core/testing';

import { References } from './references';

describe('References', () => {
  let fixture: ComponentFixture<References>;
  let element: HTMLElement;

  const arrows = (): HTMLButtonElement[] =>
    Array.from(element.querySelectorAll<HTMLButtonElement>('.references__arrow'));

  const activeSlide = (): number =>
    Array.from(element.querySelectorAll('.references__slide')).findIndex((slide) =>
      slide.classList.contains('references__slide--active'),
    );

  const activeDot = (): number =>
    Array.from(element.querySelectorAll('.references__dot')).findIndex((dot) =>
      dot.classList.contains('references__dot--active'),
    );

  const settleTrack = (): void => {
    const track = element.querySelector('.references__track');
    const event = new Event('transitionend', { bubbles: true });

    Object.defineProperty(event, 'propertyName', { value: 'transform' });
    track?.dispatchEvent(event);
    fixture.detectChanges();
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [References],
    }).compileComponents();

    fixture = TestBed.createComponent(References);
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the section heading', () => {
    expect(element.querySelector('.references__title')?.textContent?.trim()).toBe(
      'What my colleagues say about me',
    );
  });

  it('should expose an anchor target for the navigation', () => {
    expect(element.querySelector('section')?.id).toBe('references');
  });

  it('should render every reference plus one clone on each side', () => {
    const slides = element.querySelectorAll('.references__slide');
    const authors = Array.from(slides).map((slide) =>
      slide.querySelector('.reference__author')?.textContent?.trim(),
    );

    expect(slides.length).toBe(5);
    expect(element.querySelectorAll('.references__dot').length).toBe(3);
    expect(authors[0]).toBe('A. Fischer - Team Partner');
    expect(authors[1]).toBe('T. Schulz - Frontend Developer');
    expect(authors[4]).toBe('T. Schulz - Frontend Developer');
  });

  it('should start on the first reference', () => {
    expect(activeSlide()).toBe(1);
    expect(activeDot()).toBe(0);
  });

  it('should advance to the next reference', () => {
    const [, next] = arrows();

    next.click();
    fixture.detectChanges();
    expect(activeSlide()).toBe(2);
    expect(activeDot()).toBe(1);
  });

  it('should run through the trailing clone and settle back on the first reference', () => {
    const [, next] = arrows();

    next.click();
    next.click();
    next.click();
    fixture.detectChanges();
    expect(activeSlide()).toBe(4);
    expect(activeDot()).toBe(0);
    settleTrack();
    expect(activeSlide()).toBe(1);
    expect(activeDot()).toBe(0);
  });

  it('should run through the leading clone and settle back on the last reference', () => {
    const [previous] = arrows();

    previous.click();
    fixture.detectChanges();
    expect(activeSlide()).toBe(0);
    expect(activeDot()).toBe(2);
    settleTrack();
    expect(activeSlide()).toBe(3);
    expect(activeDot()).toBe(2);
  });

  it('should suspend the transition while the clone snaps back', () => {
    const track = element.querySelector('.references__track');
    const [previous] = arrows();

    expect(track?.classList.contains('references__track--animated')).toBe(true);
    previous.click();
    fixture.detectChanges();
    settleTrack();
    expect(track?.classList.contains('references__track--animated')).toBe(false);
  });

  it('should jump to a reference when its dot is clicked', () => {
    const dots = element.querySelectorAll<HTMLButtonElement>('.references__dot');

    dots[2].click();
    fixture.detectChanges();
    expect(activeSlide()).toBe(3);
    expect(dots[2].getAttribute('aria-current')).toBe('true');
  });

  it('should shift the track transform with the active slide', () => {
    const track = element.querySelector<HTMLElement>('.references__track');
    const [, next] = arrows();

    expect(track?.style.transform).toContain('1 *');
    next.click();
    fixture.detectChanges();
    expect(track?.style.transform).toContain('2 *');
  });
});

import { TestBed } from '@angular/core/testing';
import { Contact } from './contact';

describe('Contact', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [Contact] }).compileComponents();
  });

  it('creates the component', () => {
    const fixture = TestBed.createComponent(Contact);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders the three field labels', () => {
    const fixture = TestBed.createComponent(Contact);
    fixture.detectChanges();
    const labels = fixture.nativeElement.querySelectorAll('.contact__label');
    expect(labels.length).toBe(3);
  });

  it('surfaces the privacy error only after an invalid submit', () => {
    const fixture = TestBed.createComponent(Contact);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.contact__hint')).toBeNull();
    fixture.nativeElement.querySelector('form').dispatchEvent(new Event('submit'));
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.contact__hint')).not.toBeNull();
  });

  it('swaps the placeholder for the error text after leaving an empty field', () => {
    const fixture = TestBed.createComponent(Contact);
    fixture.detectChanges();
    const input: HTMLInputElement = fixture.nativeElement.querySelector('#contact-name');
    expect(input.placeholder).toBe('Your name goes here');
    input.dispatchEvent(new Event('blur'));
    fixture.detectChanges();
    expect(input.placeholder).toBe('Oops! it seems your name is missing');
  });
});
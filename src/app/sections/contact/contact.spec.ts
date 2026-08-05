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

  it('toggles the error text on each click of the field', () => {
    const fixture = TestBed.createComponent(Contact);
    fixture.detectChanges();

    const field: HTMLElement = fixture.nativeElement.querySelector('.contact__field');
    expect(fixture.nativeElement.querySelector('.contact__message')).toBeNull();

    field.click();
    fixture.detectChanges();
    const message = fixture.nativeElement.querySelector('.contact__message');
    expect(message.textContent.trim()).toBe('Oops! it seems your name is missing');

    field.click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.contact__message')).toBeNull();
  });

  it('shows the error when clicking the heading, not just the input', () => {
    const fixture = TestBed.createComponent(Contact);
    fixture.detectChanges();

    const heading: HTMLElement = fixture.nativeElement.querySelector('.contact__label');
    heading.click();
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.contact__message')).not.toBeNull();
  });

  it('leaves the native placeholder untouched', () => {
    const fixture = TestBed.createComponent(Contact);
    fixture.detectChanges();

    const input: HTMLInputElement = fixture.nativeElement.querySelector('#contact-name');
    fixture.nativeElement.querySelector('.contact__field').click();
    fixture.detectChanges();

    expect(input.placeholder).toBe('Your name goes here');
  });

  it('drops the error text as soon as the field receives input', () => {
    const fixture = TestBed.createComponent(Contact);
    fixture.detectChanges();

    const input: HTMLInputElement = fixture.nativeElement.querySelector('#contact-name');
    fixture.nativeElement.querySelector('.contact__field').click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.contact__message')).not.toBeNull();

    input.value = 'Daniel';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.contact__message')).toBeNull();
  });
});
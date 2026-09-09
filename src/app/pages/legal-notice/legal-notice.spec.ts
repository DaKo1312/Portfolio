import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LegalNotice } from './legal-notice';

describe('LegalNotice', () => {
  let fixture: ComponentFixture<LegalNotice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegalNotice],
    }).compileComponents();

    fixture = TestBed.createComponent(LegalNotice);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the page heading', () => {
    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelector('h1')?.textContent).toContain('Legal Notice');
  });

  it('should render the imprint and all legal sections', () => {
    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelectorAll('.legal__block').length).toBe(7);
    expect(element.querySelector('.legal__imprint')?.textContent).toContain('Daniel Korbmacher');
  });
});

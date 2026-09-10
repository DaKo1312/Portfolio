import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrivacyPolicy } from './privacy-policy';

describe('PrivacyPolicy', () => {
  let fixture: ComponentFixture<PrivacyPolicy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivacyPolicy],
    }).compileComponents();

    fixture = TestBed.createComponent(PrivacyPolicy);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the page heading', () => {
    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelector('h1')?.textContent).toContain('Privacy Policy');
  });

  it('should render the controller block and all policy sections', () => {
    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelectorAll('.legal__block').length).toBe(11);
    expect(element.querySelector('.legal__imprint')?.textContent).toContain('Daniel Korbmacher');
  });
});

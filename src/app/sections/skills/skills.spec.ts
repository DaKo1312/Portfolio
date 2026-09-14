import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Skills } from './skills';

describe('Skills', () => {
  let component: Skills;
  let fixture: ComponentFixture<Skills>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Skills],
    }).compileComponents();

    fixture = TestBed.createComponent(Skills);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render every skill of the list', () => {
    const items = fixture.nativeElement.querySelectorAll('.skills__item');

    expect(items.length).toBe(11);
  });

  it('should render an icon file for every skill', () => {
    const icons: NodeListOf<HTMLImageElement> =
      fixture.nativeElement.querySelectorAll('img.skills__icon');

    expect(icons.length).toBe(11);
    icons.forEach((icon) => expect(icon.getAttribute('src')).toMatch(/^img-icons\/.+\.svg$/));
  });

  it('should link the contact button to the contact section', () => {
    const button: HTMLAnchorElement = fixture.nativeElement.querySelector('.skills__button');

    expect(button.getAttribute('href')).toBe('#contact');
  });
});

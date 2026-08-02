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

    expect(items.length).toBe(8);
  });

  it('should render an icon path for every skill', () => {
    const paths: NodeListOf<SVGPathElement> =
      fixture.nativeElement.querySelectorAll('.skills__icon path');

    expect(paths.length).toBe(8);
    paths.forEach((path) => expect(path.getAttribute('d')?.length).toBeGreaterThan(0));
  });

  it('should link the contact button to the contact section', () => {
    const button: HTMLAnchorElement = fixture.nativeElement.querySelector('.skills__button');

    expect(button.getAttribute('href')).toBe('#contact');
  });
});
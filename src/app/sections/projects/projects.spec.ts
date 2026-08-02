import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projects } from './projects';

describe('Projects', () => {
    let fixture: ComponentFixture<Projects>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
        imports: [Projects],
        }).compileComponents();
        fixture = TestBed.createComponent(Projects);
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(fixture.componentInstance).toBeTruthy();
    });

    it('should render the section heading', () => {
        const element: HTMLElement = fixture.nativeElement;

        expect(element.querySelector('.section__eyebrow')?.textContent?.trim()).toBe('Portfolio');
        expect(element.querySelector('.section__title')?.textContent?.trim()).toBe('Featured Projects');
    });

    it('should expose an anchor target for the navigation', () => {
        const element: HTMLElement = fixture.nativeElement;

        expect(element.querySelector('section')?.id).toBe('projects');
    });

    it('should render every project with its stack', () => {
        const element: HTMLElement = fixture.nativeElement;
        const items = element.querySelectorAll('.projects__item');

        expect(items.length).toBe(3);
        expect(items[0].querySelector('.projects__name')?.textContent?.trim()).toBe('Join');
        expect(items[0].querySelectorAll('.projects__technology').length).toBe(5);
        expect(items[1].querySelector('.projects__name')?.textContent?.trim()).toBe('El Pollo Loco');
        expect(items[2].querySelector('.projects__name')?.textContent?.trim()).toBe('DA Bubble');
    });
});
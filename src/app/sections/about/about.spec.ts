import { ComponentFixture, TestBed } from '@angular/core/testing';
import { About } from './about';

describe('About', () => {
    let fixture: ComponentFixture<About>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [About],
        }).compileComponents();

        fixture = TestBed.createComponent(About);
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(fixture.componentInstance).toBeTruthy();
    });

    it('should render the section heading', () => {
        const element: HTMLElement = fixture.nativeElement;
        expect(element.querySelector('h2')?.textContent).toContain('About me');
    });

    it('should render all highlights', () => {
        const element: HTMLElement = fixture.nativeElement;
        expect(element.querySelectorAll('.about__highlight').length).toBe(3);
    });

    it('should hide the photo while no image is set', () => {
        const element: HTMLElement = fixture.nativeElement;
        expect(element.querySelector('.about__photo-image')).toBeNull();
    });
});

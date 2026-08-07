import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Projects } from './projects';

describe('Projects', () => {
    let fixture: ComponentFixture<Projects>;
    let element: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [Projects],
        }).compileComponents();
        fixture = TestBed.createComponent(Projects);
        element = fixture.nativeElement;
        fixture.detectChanges();
    });

    function openProject(index = 0): void {
        element.querySelectorAll<HTMLButtonElement>('.projects__trigger')[index].click();
        fixture.detectChanges();
    }

    it('should create the component', () => {
        expect(fixture.componentInstance).toBeTruthy();
    });

    it('should render the section heading', () => {
        expect(element.querySelector('.section__eyebrow')?.textContent?.trim()).toBe('Portfolio');
        expect(element.querySelector('.section__title')?.textContent?.trim()).toBe('Featured Projects');
    });

    it('should expose an anchor target for the navigation', () => {
        expect(element.querySelector('section')?.id).toBe('projects');
    });

    it('should render every project with its stack', () => {
        const items = element.querySelectorAll('.projects__item');

        expect(items.length).toBe(3);
        expect(items[0].querySelector('.projects__name')?.textContent?.trim()).toContain('Join');
        expect(items[0].querySelectorAll('.projects__technology').length).toBe(5);
        expect(items[1].querySelector('.projects__name')?.textContent?.trim()).toContain('El Pollo Loco');
        expect(items[2].querySelector('.projects__name')?.textContent?.trim()).toContain('DA Bubble');
    });

    it('should give every project a keyboard-accessible trigger', () => {
        const triggers = element.querySelectorAll<HTMLButtonElement>('.projects__trigger');

        expect(triggers.length).toBe(3);
        expect(triggers[0].getAttribute('aria-label')).toBe('Open Join project details');
    });

    it('should show the preview image only while a row is hovered', () => {
        expect(element.querySelector('.projects__preview')).toBeNull();

        element.querySelectorAll('.projects__item')[1].dispatchEvent(new MouseEvent('mouseenter'));
        fixture.detectChanges();

        expect(element.querySelector<HTMLImageElement>('.projects__preview-image')?.getAttribute('src')).toBe(
            'images/pollo.png',
        );
    });

    it('should keep the overlay closed until a project is opened', () => {
        expect(element.querySelector('[role="dialog"]')).toBeNull();
    });

    it('should open the overlay with number, name, question and image', () => {
        openProject(0);

        const dialog = element.querySelector('[role="dialog"]');
        expect(dialog).not.toBeNull();
        expect(dialog?.getAttribute('aria-modal')).toBe('true');
        expect(element.querySelector('.projects__dialog-index')?.textContent?.trim()).toBe('01');
        expect(element.querySelector('.projects__dialog-name')?.textContent?.trim()).toBe('Join');
        expect(element.querySelector('.projects__dialog-question')?.textContent?.trim()).toBe(
            'What is this project about?',
        );
        expect(element.querySelector<HTMLImageElement>('.projects__dialog-image')?.getAttribute('src')).toBe(
            'images/join.png',
        );
    });

    it('should pad the project number to two digits', () => {
        openProject(2);
        expect(element.querySelector('.projects__dialog-index')?.textContent?.trim()).toBe('03');
    });

    it('should render an icon for every technology in the overlay', () => {
        openProject(0);

        const entries = element.querySelectorAll('.projects__dialog-technology');
        expect(entries.length).toBe(5);
        expect(entries[0].querySelector('svg path')?.getAttribute('d')?.length).toBeGreaterThan(0);
        expect(entries[0].textContent?.trim()).toBe('Angular');
    });

    it('should link to the repository and the live test in a new tab', () => {
        openProject(0);

        const actions = element.querySelectorAll<HTMLAnchorElement>('.projects__action');
        expect(actions.length).toBe(2);
        expect(actions[0].textContent?.trim()).toBe('GitHub');
        expect(actions[1].textContent?.trim()).toBe('Live Test');
        expect(actions.item(0).getAttribute('target')).toBe('_blank');
        expect(actions.item(0).getAttribute('rel')).toBe('noopener noreferrer');
    });

    it('should advance to the next project and wrap around', () => {
        openProject(2);
        element.querySelector<HTMLButtonElement>('.projects__next')?.click();
        fixture.detectChanges();

        expect(element.querySelector('.projects__dialog-index')?.textContent?.trim()).toBe('01');
        expect(element.querySelector('.projects__dialog-name')?.textContent?.trim()).toBe('Join');
    });

    it('should move focus to the close button when the overlay opens', () => {
        openProject(0);

        expect(document.activeElement).toBe(element.querySelector('.projects__close'));
    });

    it('should close the overlay with the close button', () => {
        openProject(0);
        element.querySelector<HTMLButtonElement>('.projects__close')?.click();
        fixture.detectChanges();

        expect(element.querySelector('[role="dialog"]')).toBeNull();
    });

    it('should close the overlay when Escape is pressed', () => {
        openProject(0);
        document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
        fixture.detectChanges();

        expect(element.querySelector('[role="dialog"]')).toBeNull();
    });

    it('should close the overlay on a backdrop click but not on a dialog click', () => {
        openProject(0);
        element.querySelector<HTMLElement>('.projects__dialog')?.click();
        fixture.detectChanges();
        expect(element.querySelector('[role="dialog"]')).not.toBeNull();

        element.querySelector<HTMLElement>('.projects__overlay')?.click();
        fixture.detectChanges();
        expect(element.querySelector('[role="dialog"]')).toBeNull();
    });
});
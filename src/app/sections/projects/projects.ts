import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface Project {
    readonly name: string;
    readonly stack: readonly string[];
}

@Component({
    selector: 'app-projects',
    imports: [],
    templateUrl: './projects.html',
    styleUrl: './projects.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class Projects {
    protected readonly projects = signal<readonly Project[]>([
        { name: 'Join', stack: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'] },
        { name: 'El Pollo Loco', stack: ['HTML', 'CSS', 'JavaScript'] },
        { name: 'DA Bubble', stack: ['Angular', 'Firebase', 'TypeScript'] },
    ]);
}
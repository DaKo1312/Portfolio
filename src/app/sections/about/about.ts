import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

type HighlightIcon = 'location' | 'cognition' | 'releases';

interface Highlight {
    readonly icon: HighlightIcon;
    readonly text: string;
}

@Component({
    selector: 'app-about',
    imports: [],
    templateUrl: './about.html',
    styleUrl: './about.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
    protected readonly photo = signal<string | null>(null);
    protected readonly intro = signal(
        "Hey there, I'm Daniel! Write some information about yourself that is IT related. " +
        'Why are you passionate about coding? What is your source of inspiration for improving ' +
        'your programming skills?',
    );

    protected readonly highlights = signal<readonly Highlight[]>([
    {
        icon: 'location',
        text: 'Based in Troisdorf, Germany — available for remote work across Europe.',
        },
    {
        icon: 'cognition',
        text:
            'Placeholder: describe how you approach problems. What does your workflow look like, ' +
            'and what do you value in a codebase?',
        },
    {
        icon: 'releases',
        text:
            'Placeholder: describe what you are learning right now and where you want to grow. ' +
            'Mention the technologies you are exploring and what drives you to keep improving as ' +
            'a developer.',
        },
    ]);
}

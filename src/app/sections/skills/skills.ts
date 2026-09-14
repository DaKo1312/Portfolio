import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { LanguageService } from '../../core/language/language';

export interface Skill {
  readonly name: string;
  readonly icon: string;
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skills {
  protected readonly t = inject(LanguageService).t;

  protected readonly skills = signal<readonly Skill[]>([
    { name: 'HTML', icon: 'img-icons/html.svg' },
    { name: 'CSS', icon: 'img-icons/css.svg' },
    { name: 'JavaScript', icon: 'img-icons/js.svg' },
    { name: 'TypeScript', icon: 'img-icons/ts.svg' },
    { name: 'Angular', icon: 'img-icons/angular.svg' },
    { name: 'YAML', icon: 'img-icons/yaml.svg' },
    { name: 'REST-API', icon: 'img-icons/api.svg' },
    { name: 'Supabase', icon: 'img-icons/supabase.svg' },
    { name: 'GIT', icon: 'img-icons/git.svg' },
    { name: 'Scrum', icon: 'img-icons/scrum.svg' },
    { name: 'Growth mindset', icon: 'img-icons/mindset.svg' },
  ]);
}

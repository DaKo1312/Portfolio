import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { LanguageService } from '../../core/language/language';

type HighlightIcon = 'location' | 'cognition' | 'releases';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  protected readonly t = inject(LanguageService).t;
  protected readonly photo = signal<string | null>(null);
  protected readonly icons: readonly HighlightIcon[] = ['location', 'cognition', 'releases'];
}

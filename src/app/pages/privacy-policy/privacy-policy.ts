import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LanguageService } from '../../core/language/language';

@Component({
  selector: 'app-privacy-policy',
  imports: [],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivacyPolicy {
  protected readonly t = inject(LanguageService).t;
  private readonly title = inject(Title);

  constructor() {
    effect(() => this.title.setTitle(this.t().meta.privacyPolicy));
  }
}

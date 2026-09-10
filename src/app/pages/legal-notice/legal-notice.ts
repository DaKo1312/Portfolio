import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LanguageService } from '../../core/language/language';

@Component({
  selector: 'app-legal-notice',
  imports: [],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LegalNotice {
  protected readonly t = inject(LanguageService).t;
  private readonly title = inject(Title);

  constructor() {
    effect(() => this.title.setTitle(this.t().meta.legalNotice));
  }
}

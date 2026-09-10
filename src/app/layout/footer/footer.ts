import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../core/language/language';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  protected readonly t = inject(LanguageService).t;
  protected readonly githubUrl = 'https://github.com/';
  protected readonly linkedinUrl = 'https://linkedin.com/';
  protected readonly mailto = 'mailto:kontakt@daniel-korbmacher.de';

  protected scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

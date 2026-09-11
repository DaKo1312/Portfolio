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
  protected readonly githubUrl = 'https://github.com/DaKo1312';
  protected readonly linkedinUrl = 'https://www.linkedin.com/in/daniel-korbmacher-5b8453355/';
  protected readonly mailto = 'mailto:kontakt@daniel-korbmacher.de';
  protected readonly year = new Date().getFullYear();

  protected scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../core/language/language';

const FORM_ENDPOINT = '/sendmail.php';
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type SubmitStatus = 'idle' | 'sending' | 'sent' | 'error';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
})
export class Contact {
  protected readonly t = inject(LanguageService).t;
  protected readonly name = signal('');
  protected readonly email = signal('');
  protected readonly message = signal('');
  protected readonly accepted = signal(false);
  protected readonly website = signal('');
  protected readonly nameShown = signal(false);
  protected readonly emailShown = signal(false);
  protected readonly messageShown = signal(false);
  protected readonly submitted = signal(false);
  protected readonly status = signal<SubmitStatus>('idle');
  protected readonly nameError = computed(
    () => (this.nameShown() || this.submitted()) && this.name().trim().length === 0,
  );
  protected readonly emailError = computed(
    () => (this.emailShown() || this.submitted()) && !EMAIL_PATTERN.test(this.email().trim()),
  );
  protected readonly messageError = computed(
    () => (this.messageShown() || this.submitted()) && this.message().trim().length === 0,
  );
  protected readonly privacyError = computed(() => this.submitted() && !this.accepted());
  protected readonly nameMessage = computed(() =>
    this.nameError() && this.name().length === 0 ? this.t().contact.nameError : '',
  );
  protected readonly emailMessage = computed(() =>
    this.emailError() && this.email().length === 0 ? this.t().contact.emailError : '',
  );
  protected readonly messageMessage = computed(() =>
    this.messageError() && this.message().length === 0 ? this.t().contact.messageError : '',
  );

  protected readonly emailHint = computed(() =>
    this.emailError() && this.email().length > 0 ? this.t().contact.emailError : '',
  );

  private readonly valid = computed(
    () =>
      this.name().trim().length > 0 &&
      EMAIL_PATTERN.test(this.email().trim()) &&
      this.message().trim().length > 0 &&
      this.accepted(),
  );

  protected async submit(event: Event): Promise<void> {
    event.preventDefault();
    this.submitted.set(true);
    if (!this.valid()) {
      return;
    }

    this.status.set('sending');
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: this.name().trim(),
          email: this.email().trim(),
          message: this.message().trim(),
          website: this.website(),
        }),
      });
      if (!response.ok) {
        throw new Error(`Request failed with ${response.status}`);
      }
      this.status.set('sent');
      this.resetForm();
    } catch {
      this.status.set('error');
    }
  }

  private resetForm(): void {
    this.name.set('');
    this.email.set('');
    this.message.set('');
    this.accepted.set(false);
    this.website.set('');
    this.nameShown.set(false);
    this.emailShown.set(false);
    this.messageShown.set(false);
    this.submitted.set(false);
  }
}

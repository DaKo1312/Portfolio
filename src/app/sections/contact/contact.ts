import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

const FORM_ENDPOINT = 'https://api.web3forms.com/submit'
const FORM_ACCESS_KEY = 'YOUR_ACCESS_KEY';
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NAME_ERROR = 'Oops! it seems your name is missing';
const EMAIL_ERROR = 'Hoppla! your email is required';
const MESSAGE_ERROR = 'What do you need to develop?';

type SubmitStatus = 'idle' | 'sending' | 'sent' | 'error';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class Contact {
  protected readonly name = signal('');
  protected readonly email = signal('');
  protected readonly message = signal('');
  protected readonly accepted = signal(false);
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
    this.nameError() && this.name().length === 0 ? NAME_ERROR : '',
  );
  protected readonly emailMessage = computed(() =>
    this.emailError() && this.email().length === 0 ? EMAIL_ERROR : '',
  );
  protected readonly messageMessage = computed(() =>
    this.messageError() && this.message().length === 0 ? MESSAGE_ERROR : '',
  );

  protected readonly emailHint = computed(() =>
    this.emailError() && this.email().length > 0 ? EMAIL_ERROR : '',
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

    if (FORM_ACCESS_KEY === 'YOUR_ACCESS_KEY') {
      this.status.set('error');
      console.warn('[contact] FORM_ACCESS_KEY ist noch der Platzhalter — Versand deaktiviert.');
      return;
    }

    this.status.set('sending');
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: FORM_ACCESS_KEY,
          name: this.name().trim(),
          email: this.email().trim(),
          message: this.message().trim(),
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
    this.nameShown.set(false);
    this.emailShown.set(false);
    this.messageShown.set(false);
    this.submitted.set(false);
  }
}
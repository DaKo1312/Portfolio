import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

/** Web3Forms-Endpoint. Jeder JSON-Form-Dienst funktioniert mit gleicher Payload-Struktur. */
const FORM_ENDPOINT = 'https://api.web3forms.com/submit';

/**
 * Kostenlos per E-Mail unter https://web3forms.com anfordern und hier eintragen.
 * Solange der Platzhalter steht, wird nicht real gesendet.
 */
const FORM_ACCESS_KEY = 'YOUR_ACCESS_KEY';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Texte 1:1 aus der Vorlage, inklusive des deutschen "Hoppla!". */
const NAME_ERROR = 'Oops! it seems your name is missing';
const EMAIL_ERROR = 'Hoppla! your email is required';
const MESSAGE_ERROR = 'What do you need to develop?';

const NAME_PLACEHOLDER = 'Your name goes here';
const EMAIL_PLACEHOLDER = 'youremail@email.com';
const MESSAGE_PLACEHOLDER = 'Hello Daniel, I am interested in...';

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

  /** Fehler erscheinen erst, nachdem ein Feld verlassen oder abgesendet wurde. */
  protected readonly nameTouched = signal(false);
  protected readonly emailTouched = signal(false);
  protected readonly messageTouched = signal(false);
  protected readonly submitted = signal(false);

  protected readonly status = signal<SubmitStatus>('idle');

  protected readonly nameError = computed(
    () => (this.nameTouched() || this.submitted()) && this.name().trim().length === 0,
  );
  protected readonly emailError = computed(
    () => (this.emailTouched() || this.submitted()) && !EMAIL_PATTERN.test(this.email().trim()),
  );
  protected readonly messageError = computed(
    () => (this.messageTouched() || this.submitted()) && this.message().trim().length === 0,
  );
  protected readonly privacyError = computed(() => this.submitted() && !this.accepted());

  /** Fehlertext ersetzt den Placeholder — so zeigt es die Vorlage. */
  protected readonly namePlaceholder = computed(() =>
    this.nameError() ? NAME_ERROR : NAME_PLACEHOLDER,
  );
  protected readonly emailPlaceholder = computed(() =>
    this.emailError() ? EMAIL_ERROR : EMAIL_PLACEHOLDER,
  );
  protected readonly messagePlaceholder = computed(() =>
    this.messageError() ? MESSAGE_ERROR : MESSAGE_PLACEHOLDER,
  );

  /** Greift nur, wenn trotz Eingabe ungueltig ist — dann verdeckt der Wert den Placeholder. */
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
    this.nameTouched.set(false);
    this.emailTouched.set(false);
    this.messageTouched.set(false);
    this.submitted.set(false);
  }
}
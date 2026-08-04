import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

const ARROW_BACK_ICON =
  'M11.29 5.29 4.59 12l6.7 6.71 1.42-1.42L8.41 13H20v-2H8.41l4.3-4.29-1.42-1.42Z';

const ARROW_FORWARD_ICON =
  'M12.71 5.29 19.41 12l-6.7 6.71-1.42-1.42L15.59 13H4v-2h11.59l-4.3-4.29 1.42-1.42Z';

export interface Reference {
  readonly quote: string;
  readonly author: string;
  readonly role: string;
}

@Component({
  selector: 'app-references',
  imports: [],
  templateUrl: './references.html',
  styleUrl: './references.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class References {
  protected readonly backIcon = ARROW_BACK_ICON;
  protected readonly forwardIcon = ARROW_FORWARD_ICON;

  protected readonly references = signal<readonly Reference[]>([
    {
      quote: 'Our project benefited enormously from Daniel efficient way of working.',
      author: 'T. Schulz',
      role: 'Frontend Developer',
    },
    {
      quote:
        'Daniel has proven to be a reliable group partner. His technical skills and proactive approach were crucial to the success of our project.',
      author: 'H. Janisch',
      role: 'Team Partner',
    },
    {
      quote:
        "I had the good fortune of working with Daniel in a group project at the Developer Akademie that involved a lot of effort. He always stayed calm, cool, and focused, and made sure our team was set up for success. He's super knowledgeable, easy to work with, and I'd happily work with him again given the chance.",
      author: 'A. Fischer',
      role: 'Team Partner',
    },
  ]);

  protected readonly slides = computed<readonly Reference[]>(() => {
    const items = this.references();

    if (items.length < 2) {
      return items;
    }
    return [...items, ...items, ...items];
  });

  protected readonly position = signal(this.references().length);
  protected readonly animated = signal(true);
  protected readonly activeIndex = computed(() => this.position() % this.references().length);

  protected readonly trackTransform = computed(
    () => `translateX(calc(${this.position()} * (var(--card-width) + var(--card-gap)) * -1))`,
  );
  protected previous(): void {
    this.step(-1);
  }
  protected next(): void {
    this.step(1);
  }

  protected select(index: number): void {
    if (index < 0 || index >= this.references().length) {
      return;
    }
    this.animated.set(true);
    this.position.set(this.references().length + index);
  }

  protected onTrackSettled(event: TransitionEvent): void {
    const target = event.target as HTMLElement | null;

    if (event.propertyName !== 'transform' || !target?.classList.contains('references__track')) {
      return;
    }

    const count = this.references().length;
    const current = this.position();

    if (current >= count && current < count * 2) {
      return;
    }
    this.animated.set(false);
    this.position.set(count + (current % count));
    requestAnimationFrame(() => this.animated.set(true));
  }

  private step(offset: number): void {
    this.animated.set(true);
    this.position.update((current) => current + offset);
  }
}
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

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
    return [items[items.length - 1], ...items, items[0]];
  });
  
  protected readonly position = signal(1);
  protected readonly animated = signal(true);
  protected readonly activeIndex = computed(() => {
    const count = this.references().length;

    return (this.position() - 1 + count) % count;
  });

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
    this.position.set(index + 1);
  }

  protected onTrackSettled(event: TransitionEvent): void {
    const target = event.target as HTMLElement | null;

    if (event.propertyName !== 'transform' || !target?.classList.contains('references__track')) {
      return;
    }

    const count = this.references().length;
    const current = this.position();

    if (current !== 0 && current !== count + 1) {
      return;
    }
    this.animated.set(false);
    this.position.set(current === 0 ? count : 1);
    requestAnimationFrame(() => this.animated.set(true));
  }

  private step(offset: number): void {
    const count = this.references().length;

    this.animated.set(true);
    this.position.update((current) => {
      const next = current + offset;

      if (next < 0) {
        return count;
      }
      if (next > count + 1) {
        return 1;
      }
      return next;
    });
  }
}

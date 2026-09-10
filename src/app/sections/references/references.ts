import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { LanguageService } from '../../core/language/language';
import { Reference } from '../../core/language/translations';

const ARROW_BACK_ICON =
  'M11.29 5.29 4.59 12l6.7 6.71 1.42-1.42L8.41 13H20v-2H8.41l4.3-4.29-1.42-1.42Z';

const ARROW_FORWARD_ICON =
  'M12.71 5.29 19.41 12l-6.7 6.71-1.42-1.42L15.59 13H4v-2h11.59l-4.3-4.29 1.42-1.42Z';

@Component({
  selector: 'app-references',
  imports: [],
  templateUrl: './references.html',
  styleUrl: './references.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class References {
  protected readonly t = inject(LanguageService).t;
  protected readonly backIcon = ARROW_BACK_ICON;
  protected readonly forwardIcon = ARROW_FORWARD_ICON;

  protected readonly references = computed<readonly Reference[]>(() => this.t().references.items);

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
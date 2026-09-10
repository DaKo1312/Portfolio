import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  OnDestroy,
  computed,
  inject,
  signal,
} from '@angular/core';
import { LanguageService } from '../../core/language/language';
import { Reference } from '../../core/language/translations';

const ARROW_BACK_ICON =
  'M11.29 5.29 4.59 12l6.7 6.71 1.42-1.42L8.41 13H20v-2H8.41l4.3-4.29-1.42-1.42Z';

const ARROW_FORWARD_ICON =
  'M12.71 5.29 19.41 12l-6.7 6.71-1.42-1.42L15.59 13H4v-2h11.59l-4.3-4.29 1.42-1.42Z';

const SETTLE_FALLBACK = 400;

@Component({
  selector: 'app-references',
  imports: [],
  templateUrl: './references.html',
  styleUrl: './references.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class References implements OnDestroy {
  private readonly document = inject(DOCUMENT);

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
  protected readonly activeIndex = computed(() => this.wrap(this.position()));

  protected readonly trackTransform = computed(
    () => `translateX(calc(${this.position()} * (var(--card-width) + var(--card-gap)) * -1))`,
  );

  private settleTimer: ReturnType<typeof setTimeout> | null = null;
  private moving = false;

  ngOnDestroy(): void {
    this.clearTimer();
  }

  protected previous(): void {
    this.step(-1);
  }

  protected next(): void {
    this.step(1);
  }

  protected select(index: number): void {
    const count = this.references().length;

    if (index < 0 || index >= count) {
      return;
    }
    this.clearTimer();
    this.moving = false;
    this.animated.set(true);
    this.position.set(count + index);
  }

  protected onTrackSettled(event: TransitionEvent): void {
    const target = event.target as HTMLElement | null;

    if (event.propertyName !== 'transform' || !target?.classList.contains('references__track')) {
      return;
    }
    this.settle();
  }

  private step(offset: number): void {
    if (this.moving || this.references().length < 2) {
      return;
    }
    this.animated.set(true);
    this.position.update((current) => current + offset);

    if (this.prefersReducedMotion()) {
      this.settle();
      return;
    }
    this.moving = true;
    this.settleTimer = setTimeout(() => this.settle(), SETTLE_FALLBACK);
  }

  private settle(): void {
    this.clearTimer();
    this.moving = false;

    const count = this.references().length;
    const current = this.position();
    const target = count + this.wrap(current);

    if (target === current) {
      return;
    }
    this.animated.set(false);
    this.position.set(target);
    this.document.defaultView?.requestAnimationFrame(() => this.animated.set(true));
  }

  private wrap(value: number): number {
    const count = this.references().length;

    if (count < 1) {
      return 0;
    }
    return ((value % count) + count) % count;
  }

  private prefersReducedMotion(): boolean {
    const query = this.document.defaultView?.matchMedia?.('(prefers-reduced-motion: reduce)');
    return query?.matches ?? false;
  }

  private clearTimer(): void {
    if (this.settleTimer === null) {
      return;
    }
    clearTimeout(this.settleTimer);
    this.settleTimer = null;
  }
}

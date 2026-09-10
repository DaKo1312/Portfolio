export type Language = 'EN' | 'DE';

export type ProjectId = 'join' | 'pollo' | 'bubble';

export interface Reference {
  readonly quote: string;
  readonly author: string;
  readonly role: string;
}

export interface LegalSection {
  readonly title: string;
  readonly paragraphs: readonly string[];
}

export interface LegalPage {
  readonly title: string;
  readonly addressTitle: string;
  readonly address: readonly string[];
  readonly sections: readonly LegalSection[];
  readonly date: string;
}

export interface Translations {
  readonly meta: {
    readonly home: string;
    readonly legalNotice: string;
    readonly privacyPolicy: string;
  };
  readonly header: {
    readonly openMenu: string;
    readonly closeMenu: string;
    readonly mainNavigation: string;
    readonly backToTop: string;
    readonly logoAlt: string;
    readonly switchTo: Readonly<Record<Language, string>>;
    readonly nav: {
      readonly about: string;
      readonly skills: string;
      readonly projects: string;
    };
  };
  readonly hero: {
    readonly role: string;
    readonly work: string;
    readonly contact: string;
    readonly scrollDown: string;
    readonly marquee: readonly string[];
  };
  readonly about: {
    readonly eyebrow: string;
    readonly title: string;
    readonly portraitAlt: string;
    readonly intro: string;
    readonly highlights: readonly string[];
  };
  readonly skills: {
    readonly eyebrow: string;
    readonly title: string;
    readonly text: string;
    readonly ctaTitle: string;
    readonly ctaText: string;
    readonly button: string;
  };
  readonly projects: {
    readonly eyebrow: string;
    readonly title: string;
    readonly lead: string;
    readonly openDetails: (name: string) => string;
    readonly dialogLabel: (name: string) => string;
    readonly close: string;
    readonly question: string;
    readonly repo: string;
    readonly live: string;
    readonly next: string;
    readonly about: Readonly<Record<ProjectId, string>>;
  };
  readonly references: {
    readonly title: string;
    readonly previous: string;
    readonly next: string;
    readonly show: (position: number) => string;
    readonly items: readonly Reference[];
  };
  readonly contact: {
    readonly eyebrow: string;
    readonly title: string;
    readonly pitchTitle: string;
    readonly pitchText: string;
    readonly nameLabel: string;
    readonly namePlaceholder: string;
    readonly nameError: string;
    readonly emailLabel: string;
    readonly emailPlaceholder: string;
    readonly emailError: string;
    readonly messageLabel: string;
    readonly messagePlaceholder: string;
    readonly messageError: string;
    readonly privacyBefore: string;
    readonly privacyLink: string;
    readonly privacyAfter: string;
    readonly privacyError: string;
    readonly submit: string;
    readonly sending: string;
    readonly sent: string;
    readonly failed: string;
  };
  readonly footer: {
    readonly navigation: string;
    readonly backToTop: string;
    readonly logoAlt: string;
    readonly role: string;
    readonly location: string;
    readonly legalNotice: string;
    readonly email: string;
  };
  readonly legal: LegalPage;
  readonly privacy: LegalPage;
}

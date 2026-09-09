import { ChangeDetectionStrategy, Component } from '@angular/core';

export interface LegalSection {
  readonly title: string;
  readonly paragraphs: readonly string[];
}

@Component({
  selector: 'app-legal-notice',
  imports: [],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LegalNotice {
  protected readonly imprint: readonly string[] = [
    'Daniel Korbmacher',
    '[Street and house number]',
    '[Postcode] Troisdorf',
    'Germany',
    'Email: kontakt@daniel-korbmacher.de',
  ];

  protected readonly sections: readonly LegalSection[] = [
    {
      title: 'Acceptance of terms',
      paragraphs: [
        'By accessing and using this portfolio website (the Product), you acknowledge and agree to the following terms and conditions, and any policies, guidelines, or amendments thereto that may be presented to you from time to time. I may update or change these terms and conditions from time to time without notice.',
      ],
    },
    {
      title: 'Scope and ownership of the product',
      paragraphs: [
        'This portfolio has been developed as part of a web development bootcamp at the Developer Akademie GmbH. It has an educational and self-presenting purpose and is not intended for extensive personal or business usage. As such, I cannot guarantee consistent availability, reliability, accuracy, or any other aspect of quality regarding this Product.',
        'The underlying design of this portfolio is owned by the Developer Akademie GmbH. Unauthorized use, reproduction, modification, distribution, or replication of the design is strictly prohibited.',
      ],
    },
    {
      title: 'Proprietary rights',
      paragraphs: [
        'Aside from the design owned by Developer Akademie GmbH, I retain all proprietary rights in this portfolio, including any associated copyrighted material, trademarks, and other proprietary information.',
      ],
    },
    {
      title: 'Use of the product',
      paragraphs: [
        'This portfolio is intended to be used for lawful purposes only, in accordance with all applicable laws and regulations. Any use of the Product for illegal activities, or to harass, harm, threaten, or intimidate another person, is strictly prohibited. You are solely responsible for your interactions with this Product.',
      ],
    },
    {
      title: 'Disclaimer of warranties and limitation of liability',
      paragraphs: [
        'This portfolio is provided "as is" without warranty of any kind, whether express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement. In no event will I, or the Developer Akademie, be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses, even if I have been advised of the possibility of such damages, arising out of or in connection with the use or performance of this portfolio.',
      ],
    },
    {
      title: 'Indemnity',
      paragraphs: [
        'You agree to indemnify, defend and hold harmless me, the Developer Akademie, and our affiliates, partners, officers, directors, agents, and employees, from and against any claim, demand, loss, damage, cost, or liability (including reasonable legal fees) arising out of or relating to your use of this portfolio and/or your breach of this Legal Notice.',
        'For any questions or notices, please contact me at kontakt@daniel-korbmacher.de.',
      ],
    },
  ];

  protected readonly updatedAt = 'Date: September 9, 2026';
}

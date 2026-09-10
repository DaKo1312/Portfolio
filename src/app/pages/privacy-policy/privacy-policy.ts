import { ChangeDetectionStrategy, Component } from '@angular/core';

export interface PrivacySection {
  readonly title: string;
  readonly paragraphs: readonly string[];
}

@Component({
  selector: 'app-privacy-policy',
  imports: [],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivacyPolicy {
  protected readonly controller: readonly string[] = [
    'Daniel Korbmacher',
    '[Street and house number]',
    '[Postcode] Troisdorf',
    'Germany',
    'Email: kontakt@daniel-korbmacher.de',
  ];

  protected readonly sections: readonly PrivacySection[] = [
    {
      title: 'Overview',
      paragraphs: [
        'This privacy policy explains which personal data is processed when you visit this portfolio website, for which purpose, and which rights you have. Processing takes place in accordance with the General Data Protection Regulation (GDPR) and the German Federal Data Protection Act (BDSG).',
        'Personal data is any information relating to an identified or identifiable natural person, for example your name, your email address, or your IP address.',
      ],
    },
    {
      title: 'Controller',
      paragraphs: [
        'The controller responsible for data processing on this website is the person named above. You can reach the controller at any time using the contact details listed there.',
        'A data protection officer has not been appointed, as the legal requirements for such an appointment are not met.',
      ],
    },
    {
      title: 'Hosting and server log files',
      paragraphs: [
        'This website is hosted by an external provider that processes data on behalf of the controller under a data processing agreement pursuant to Art. 28 GDPR.',
        'Each time a page is opened, the hosting provider automatically records the information your browser transmits. This includes the requested file, the date and time of the request, the amount of data transferred, the referring page, your browser type and version, your operating system, and your IP address.',
        'This data is processed on the basis of Art. 6 (1) (f) GDPR, given the legitimate interest in the secure, stable, and error-free operation of this website. It is not merged with other data sources and is deleted after a short storage period.',
      ],
    },
    {
      title: 'Contact form and email contact',
      paragraphs: [
        'If you use the contact form, the name, email address, and message you enter are transmitted in order to process your enquiry. The form is delivered through an external form service that forwards the submission by email and acts as a processor pursuant to Art. 28 GDPR. The same data categories apply to enquiries you send by email directly.',
        'Processing is based on Art. 6 (1) (b) GDPR where your enquiry relates to a contract or to pre-contractual measures, and otherwise on Art. 6 (1) (f) GDPR, given the legitimate interest in answering enquiries addressed to the controller. Where you give consent, processing is based on Art. 6 (1) (a) GDPR and can be withdrawn at any time with effect for the future.',
        'The data is stored until your enquiry has been dealt with in full and no statutory retention periods prevent its deletion.',
      ],
    },
    {
      title: 'Google Fonts',
      paragraphs: [
        'This website uses the typefaces Fira Code and Karla, which are loaded from Google servers when a page is opened. In the course of this, your IP address is transmitted to Google Ireland Limited and may be transferred to servers of Google LLC in the United States.',
        'The fonts are used to present this website consistently across browsers and devices, which constitutes a legitimate interest pursuant to Art. 6 (1) (f) GDPR. Further information is available in the Google privacy policy at https://policies.google.com/privacy.',
      ],
    },
    {
      title: 'Cookies and local storage',
      paragraphs: [
        'This website does not set cookies for analysis, advertising, or tracking, and it does not store personal data in your browser. A consent banner is therefore not required.',
      ],
    },
    {
      title: 'External links',
      paragraphs: [
        'This website links to external services such as GitHub and LinkedIn. As soon as you follow such a link, this privacy policy no longer applies. The privacy policy of the respective provider then applies to any data processing that takes place there.',
      ],
    },
    {
      title: 'Encryption',
      paragraphs: [
        'This website uses TLS encryption for security reasons and to protect the transmission of confidential content. You can recognise an encrypted connection by the "https://" prefix in the address bar of your browser.',
      ],
    },
    {
      title: 'Your rights',
      paragraphs: [
        'You have the right to obtain information about the personal data stored about you (Art. 15 GDPR), to have inaccurate data corrected (Art. 16 GDPR), to have your data erased (Art. 17 GDPR), to have processing restricted (Art. 18 GDPR), and to receive your data in a portable format (Art. 20 GDPR).',
        'You also have the right to object at any time, on grounds relating to your particular situation, to processing based on Art. 6 (1) (f) GDPR (Art. 21 GDPR), and to withdraw consent you have given with effect for the future.',
        'Irrespective of this, you have the right to lodge a complaint with a supervisory authority, for example the State Commissioner for Data Protection and Freedom of Information of North Rhine-Westphalia, Kavalleriestr. 2-4, 40213 Duesseldorf, Germany.',
      ],
    },
    {
      title: 'Changes to this privacy policy',
      paragraphs: [
        'This privacy policy is adjusted whenever changes to this website or to legal requirements make it necessary. The version published here always applies.',
      ],
    },
  ];

  protected readonly updatedAt = 'Date: September 9, 2026';
}

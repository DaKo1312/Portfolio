import { Translations } from './translations';

export const EN: Translations = {
  meta: {
    home: 'Daniel Korbmacher | Frontend Developer',
    legalNotice: 'Legal Notice | Daniel Korbmacher',
    privacyPolicy: 'Privacy Policy | Daniel Korbmacher',
  },
  header: {
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    mainNavigation: 'Main navigation',
    backToTop: 'Back to top',
    logoAlt: 'Daniel Korbmacher logo',
    switchTo: {
      EN: 'Switch to English',
      DE: 'Switch to German',
    },
    nav: {
      about: 'About me',
      skills: 'Skills',
      projects: 'Projects',
    },
  },
  hero: {
    role: 'Frontend Developer',
    work: 'Check my work',
    contact: 'Contact me',
    scrollDown: 'Scroll down',
    marquee: [
      'Available for remote work',
      'Frontend Developer',
      'Based in Troisdorf',
      'Open to work',
    ],
  },
  about: {
    eyebrow: 'Who I Am',
    title: 'About me',
    portraitAlt: 'Portrait of Daniel Korbmacher',
    intro:
      "Hey there, I'm Daniel! Write some information about yourself that is IT related. Why are you passionate about coding? What is your source of inspiration for improving your programming skills?",
    highlights: [
      'Based in Troisdorf, Germany — available for remote work across Europe.',
      "Coming from JavaScript, I'm currently deep in TypeScript and Angular — and I like the moment a new concept finally clicks. New tools don't scare me; I'd rather read the docs and build something with them.",
      'I break a problem down until every piece is testable, then build back up from there. Automating my own smart home taught me persistence — the elegant solution usually turns up on the third attempt.',
    ],
  },
  skills: {
    eyebrow: 'Technologies',
    title: 'Skill Set',
    text: 'A short introduction of your skills. Highlight your experience of using different front-end technologies and emphasise your openness to learning and adapting to new technologies. Show how important it is for you to keep up with the rapid changes in web development.',
    ctaTitle: 'You need another skill?',
    ctaText: 'Feel free to contact me. I look forward to expanding on my previous knowledge.',
    button: "Let's Talk",
  },
  projects: {
    eyebrow: 'Portfolio',
    title: 'Featured Projects',
    lead: 'Explore a selection of my work here - Interact with projects to see my skills in action.',
    openDetails: (name) => `Open ${name} project details`,
    dialogLabel: (name) => `${name} project details`,
    close: 'Close project details',
    question: 'What is this project about?',
    repo: 'GitHub',
    live: 'Live Test',
    next: 'Next project',
    about: {
      join: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      pollo:
        'Jump-and-run game built with vanilla JavaScript and the Canvas API. Object-oriented game loop with collision detection, sprite animations, sound and a final boss fight.',
    },
  },
  references: {
    title: 'What my colleagues say about me',
    previous: 'Show previous reference',
    next: 'Show next reference',
    show: (position) => `Show reference ${position}`,
    items: [
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
    ],
  },
  contact: {
    eyebrow: 'Contact me',
    title: "Let's work together",
    pitchTitle: 'Got a problem to solve?',
    pitchText:
      "Encourage people to contact you and describe what role you are interested in. Show that you will add value to their projects through your work. Need a Frontend developer? Let's talk!",
    nameLabel: "What's your name?",
    namePlaceholder: 'Your name goes here',
    nameError: 'Oops! it seems your name is missing',
    emailLabel: "What's your email?",
    emailPlaceholder: 'youremail@email.com',
    emailError: 'Oops! we need a valid email address',
    messageLabel: 'How can I help you?',
    messagePlaceholder: 'Hello Daniel, I am interested in...',
    messageError: 'What do you need to develop?',
    privacyBefore: "I've read the ",
    privacyLink: 'privacy policy',
    privacyAfter: ' and agree to the processing of my data as outlined.',
    privacyError: 'Please accept the privacy policy.',
    submit: 'Send',
    sending: 'Sending...',
    sent: 'Thanks — your message is on its way.',
    failed: 'Something went wrong. Please try again in a moment.',
  },
  footer: {
    navigation: 'Footer navigation',
    backToTop: 'Back to top',
    logoAlt: 'Daniel Korbmacher logo',
    role: 'Web Developer',
    location: 'Troisdorf Germany',
    legalNotice: 'Legal Notice',
    email: 'Email',
  },
  legal: {
    title: 'Legal Notice',
    addressTitle: 'Imprint',
    address: [
      'Daniel Korbmacher',
      'Uckendorferstr. 6a',
      '53844 Troisdorf',
      'Germany',
      'Email: kontakt@daniel-korbmacher.de',
    ],
    sections: [
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
    ],
    date: 'Date: September 9, 2026',
  },
  privacy: {
    title: 'Privacy Policy',
    addressTitle: 'Responsible for data processing',
    address: [
      'Daniel Korbmacher',
      'Uckendorferstr. 6a',
      '53844 Troisdorf',
      'Germany',
      'Email: kontakt@daniel-korbmacher.de',
    ],
    sections: [
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
          'This website does not set cookies for analysis, advertising, or tracking. Your language selection is stored in your browser so that the site opens in the language you chose. This data stays on your device and is not transmitted.',
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
    ],
    date: 'Date: September 9, 2026',
  },
};

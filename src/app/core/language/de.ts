import { Translations } from './translations';

export const DE: Translations = {
  meta: {
    home: 'Daniel Korbmacher | Frontend-Entwickler',
    legalNotice: 'Impressum | Daniel Korbmacher',
    privacyPolicy: 'Datenschutzerklärung | Daniel Korbmacher',
  },
  header: {
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
    mainNavigation: 'Hauptnavigation',
    backToTop: 'Zurück nach oben',
    logoAlt: 'Logo von Daniel Korbmacher',
    switchTo: {
      EN: 'Auf Englisch umschalten',
      DE: 'Auf Deutsch umschalten',
    },
    nav: {
      about: 'Über mich',
      skills: 'Skills',
      projects: 'Projekte',
    },
  },
  hero: {
    role: 'Frontend-Entwickler',
    work: 'Meine Arbeit ansehen',
    contact: 'Kontakt aufnehmen',
    scrollDown: 'Nach unten scrollen',
    marquee: [
      'Verfügbar für Remote-Arbeit',
      'Frontend-Entwickler',
      'Ansässig in Troisdorf',
      'Offen für neue Aufgaben',
    ],
  },
  about: {
    eyebrow: 'Wer ich bin',
    title: 'Über mich',
    portraitAlt: 'Porträt von Daniel Korbmacher',
    intro:
      'Hallo, ich bin Daniel! Schreibe hier etwas über dich mit IT-Bezug. Warum begeistert dich das Programmieren? Woher nimmst du die Inspiration, deine Fähigkeiten immer weiter zu verbessern?',
    highlights: [
      'Ansässig in Troisdorf, Deutschland — verfügbar für Remote-Arbeit in ganz Europa.',
      'Aus der JavaScript-Welt kommend stecke ich gerade tief in TypeScript und Angular — und mag den Moment, in dem ein neues Konzept endlich klickt. Neue Werkzeuge schrecken mich nicht ab; ich lese lieber die Doku und baue etwas damit.',
      'Ich zerlege ein Problem, bis jedes Teilstück testbar ist, und baue von dort wieder auf. Das Automatisieren meines Smart Homes hat mich Ausdauer gelehrt — die elegante Lösung kommt meist beim dritten Versuch.',
    ],
  },
  skills: {
    eyebrow: 'Technologien',
    title: 'Skill Set',
    text: 'Eine kurze Vorstellung deiner Fähigkeiten. Hebe deine Erfahrung mit verschiedenen Frontend-Technologien hervor und betone deine Offenheit, Neues zu lernen und dich anzupassen. Zeige, wie wichtig es dir ist, mit den schnellen Veränderungen in der Webentwicklung Schritt zu halten.',
    ctaTitle: 'Du brauchst eine andere Technologie?',
    ctaText:
      'Melde dich gerne bei mir. Ich freue mich darauf, mein bisheriges Wissen zu erweitern.',
    button: 'Lass uns reden',
  },
  projects: {
    eyebrow: 'Portfolio',
    title: 'Ausgewählte Projekte',
    lead: 'Hier findest du eine Auswahl meiner Arbeiten — öffne ein Projekt und sieh meine Fähigkeiten in Aktion.',
    openDetails: (name) => `Projektdetails zu ${name} öffnen`,
    dialogLabel: (name) => `Projektdetails zu ${name}`,
    close: 'Projektdetails schließen',
    question: 'Worum geht es in diesem Projekt?',
    repo: 'GitHub',
    live: 'Live-Test',
    next: 'Nächstes Projekt',
    about: {
      join: 'Aufgabenverwaltung nach dem Kanban-Prinzip. Aufgaben per Drag and Drop anlegen und ordnen, Nutzer und Kategorien zuweisen.',
      pollo:
        'Jump-and-Run-Spiel mit purem JavaScript und der Canvas-API. Objektorientierte Game-Loop mit Kollisionsabfrage, Sprite-Animationen, Sound und Endgegner-Kampf.',
    },
  },
  references: {
    title: 'Was meine Kolleginnen und Kollegen über mich sagen',
    previous: 'Vorherige Referenz anzeigen',
    next: 'Nächste Referenz anzeigen',
    show: (position) => `Referenz ${position} anzeigen`,
    items: [
      {
        quote: 'Unser Projekt hat enorm von Daniels effizienter Arbeitsweise profitiert.',
        author: 'T. Schulz',
        role: 'Frontend-Entwickler',
      },
      {
        quote:
          'Daniel hat sich als verlässlicher Gruppenpartner erwiesen. Seine technischen Fähigkeiten und sein vorausschauendes Handeln waren entscheidend für den Erfolg unseres Projekts.',
        author: 'H. Janisch',
        role: 'Teampartner',
      },
      {
        quote:
          'Ich hatte das Glück, mit Daniel in einem sehr aufwendigen Gruppenprojekt an der Developer Akademie zu arbeiten. Er blieb immer ruhig, gelassen und fokussiert und hat dafür gesorgt, dass unser Team erfolgreich arbeiten konnte. Er weiß fachlich enorm viel, ist unkompliziert in der Zusammenarbeit, und ich würde jederzeit wieder mit ihm arbeiten.',
        author: 'A. Fischer',
        role: 'Teampartner',
      },
    ],
  },
  contact: {
    eyebrow: 'Kontakt',
    title: 'Lass uns zusammen\u00ADarbeiten',
    pitchTitle: 'Du hast ein Problem zu lösen?',
    pitchText:
      'Ermutige Besucher, dich zu kontaktieren, und beschreibe, welche Rolle dich interessiert. Zeige, dass du mit deiner Arbeit einen echten Mehrwert für ihre Projekte lieferst. Du brauchst einen Frontend-Entwickler? Lass uns sprechen!',
    nameLabel: 'Wie heißt du?',
    namePlaceholder: 'Hier kommt dein Name hin',
    nameError: 'Hoppla! Dein Name fehlt noch',
    emailLabel: 'Wie lautet deine E-Mail-Adresse?',
    emailPlaceholder: 'deinemail@email.de',
    emailError: 'Hoppla! Wir brauchen eine gültige E-Mail-Adresse',
    messageLabel: 'Wie kann ich dir helfen?',
    messagePlaceholder: 'Hallo Daniel, ich interessiere mich für...',
    messageError: 'Was möchtest du entwickeln lassen?',
    privacyBefore: 'Ich habe die ',
    privacyLink: 'Datenschutzerklärung',
    privacyAfter: ' gelesen und stimme der Verarbeitung meiner Daten wie beschrieben zu.',
    privacyError: 'Bitte akzeptiere die Datenschutzerklärung.',
    submit: 'Senden',
    sending: 'Wird gesendet...',
    sent: 'Danke — deine Nachricht ist unterwegs.',
    failed: 'Da ist etwas schiefgelaufen. Bitte versuche es gleich noch einmal.',
  },
  footer: {
    navigation: 'Footer-Navigation',
    backToTop: 'Zurück nach oben',
    logoAlt: 'Logo von Daniel Korbmacher',
    role: 'Webentwickler',
    location: 'Troisdorf Deutschland',
    legalNotice: 'Impressum',
    email: 'E-Mail',
  },
  legal: {
    title: 'Impressum',
    addressTitle: 'Angaben gemäß § 5 DDG',
    address: [
      'Daniel Korbmacher',
      '[Straße und Hausnummer]',
      '[PLZ] Troisdorf',
      'Deutschland',
      'E-Mail: kontakt@daniel-korbmacher.de',
    ],
    sections: [
      {
        title: 'Annahme der Bedingungen',
        paragraphs: [
          'Mit dem Aufruf und der Nutzung dieser Portfolio-Website (das Produkt) erkennst du die folgenden Bedingungen an und stimmst ihnen zu, ebenso allen Richtlinien, Hinweisen oder Änderungen, die dir von Zeit zu Zeit vorgelegt werden. Ich kann diese Bedingungen jederzeit und ohne vorherige Ankündigung anpassen oder ändern.',
        ],
      },
      {
        title: 'Zweck und Eigentum am Produkt',
        paragraphs: [
          'Dieses Portfolio ist im Rahmen eines Webentwicklungs-Bootcamps bei der Developer Akademie GmbH entstanden. Es dient der Ausbildung und der eigenen Darstellung und ist nicht für umfangreiche private oder geschäftliche Nutzung gedacht. Daher kann ich keine durchgehende Verfügbarkeit, Zuverlässigkeit, Richtigkeit oder sonstige Qualität dieses Produkts zusichern.',
          'Das zugrunde liegende Design dieses Portfolios ist Eigentum der Developer Akademie GmbH. Die unbefugte Nutzung, Vervielfältigung, Bearbeitung, Verbreitung oder Nachbildung des Designs ist untersagt.',
        ],
      },
      {
        title: 'Schutzrechte',
        paragraphs: [
          'Abgesehen von dem Design, das der Developer Akademie GmbH gehört, liegen sämtliche Rechte an diesem Portfolio bei mir. Das umfasst alle zugehörigen urheberrechtlich geschützten Inhalte, Marken und sonstigen geschützten Informationen.',
        ],
      },
      {
        title: 'Nutzung des Produkts',
        paragraphs: [
          'Dieses Portfolio darf ausschließlich zu rechtmäßigen Zwecken und im Einklang mit allen geltenden Gesetzen und Vorschriften genutzt werden. Jede Nutzung des Produkts für rechtswidrige Handlungen oder um andere Personen zu belästigen, zu schädigen, zu bedrohen oder einzuschüchtern, ist untersagt. Für deinen Umgang mit diesem Produkt bist du allein verantwortlich.',
        ],
      },
      {
        title: 'Haftungsausschluss und Haftungsbeschränkung',
        paragraphs: [
          'Dieses Portfolio wird ohne jede ausdrückliche oder stillschweigende Gewährleistung bereitgestellt, insbesondere ohne Gewährleistung der Marktgängigkeit, der Eignung für einen bestimmten Zweck und der Nichtverletzung von Rechten Dritter. Weder ich noch die Developer Akademie haften für unmittelbare, mittelbare, zufällige, besondere Schäden, Folgeschäden oder Strafschadensersatz, insbesondere nicht für entgangenen Gewinn, Rufschädigung, Nutzungsausfall, Datenverlust oder andere immaterielle Verluste, die aus der Nutzung oder Leistungsfähigkeit dieses Portfolios entstehen, auch wenn auf die Möglichkeit solcher Schäden hingewiesen wurde.',
        ],
      },
      {
        title: 'Freistellung',
        paragraphs: [
          'Du stellst mich, die Developer Akademie sowie unsere verbundenen Unternehmen, Partner, Führungskräfte, Geschäftsführer, Vertreter und Mitarbeitenden von allen Ansprüchen, Forderungen, Verlusten, Schäden, Kosten oder Haftungen frei, einschließlich angemessener Rechtsverfolgungskosten, die aus deiner Nutzung dieses Portfolios oder aus einem Verstoß gegen dieses Impressum entstehen.',
          'Bei Fragen oder Hinweisen erreichst du mich unter kontakt@daniel-korbmacher.de.',
        ],
      },
    ],
    date: 'Stand: 9. September 2026',
  },
  privacy: {
    title: 'Datenschutz\u00ADerklärung',
    addressTitle: 'Verantwortlich für die Datenverarbeitung',
    address: [
      'Daniel Korbmacher',
      '[Straße und Hausnummer]',
      '[PLZ] Troisdorf',
      'Deutschland',
      'E-Mail: kontakt@daniel-korbmacher.de',
    ],
    sections: [
      {
        title: 'Überblick',
        paragraphs: [
          'Diese Datenschutzerklärung erklärt, welche personenbezogenen Daten beim Besuch dieser Portfolio-Website verarbeitet werden, zu welchem Zweck das geschieht und welche Rechte du hast. Die Verarbeitung erfolgt nach der Datenschutz-Grundverordnung (DSGVO) und dem Bundesdatenschutzgesetz (BDSG).',
          'Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen, zum Beispiel dein Name, deine E-Mail-Adresse oder deine IP-Adresse.',
        ],
      },
      {
        title: 'Verantwortlicher',
        paragraphs: [
          'Verantwortlich für die Datenverarbeitung auf dieser Website ist die oben genannte Person. Du erreichst den Verantwortlichen jederzeit über die dort angegebenen Kontaktdaten.',
          'Ein Datenschutzbeauftragter wurde nicht bestellt, da die gesetzlichen Voraussetzungen dafür nicht vorliegen.',
        ],
      },
      {
        title: 'Hosting und Server-Logfiles',
        paragraphs: [
          'Diese Website wird bei einem externen Anbieter gehostet, der die Daten im Auftrag des Verantwortlichen auf Grundlage eines Vertrags zur Auftragsverarbeitung nach Art. 28 DSGVO verarbeitet.',
          'Bei jedem Seitenaufruf erfasst der Hosting-Anbieter automatisch die Informationen, die dein Browser übermittelt. Dazu gehören die abgerufene Datei, Datum und Uhrzeit des Abrufs, die übertragene Datenmenge, die zuvor besuchte Seite, Typ und Version deines Browsers, dein Betriebssystem und deine IP-Adresse.',
          'Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt im sicheren, stabilen und störungsfreien Betrieb dieser Website. Die Daten werden nicht mit anderen Datenquellen zusammengeführt und nach kurzer Speicherdauer gelöscht.',
        ],
      },
      {
        title: 'Kontaktformular und E-Mail-Kontakt',
        paragraphs: [
          'Wenn du das Kontaktformular nutzt, werden der eingegebene Name, die E-Mail-Adresse und die Nachricht übermittelt, um deine Anfrage zu bearbeiten. Das Formular wird über einen externen Formulardienst zugestellt, der die Übermittlung per E-Mail weiterleitet und als Auftragsverarbeiter nach Art. 28 DSGVO tätig ist. Für Anfragen, die du direkt per E-Mail sendest, gelten dieselben Datenkategorien.',
          'Die Verarbeitung erfolgt nach Art. 6 Abs. 1 lit. b DSGVO, soweit deine Anfrage einen Vertrag oder vorvertragliche Maßnahmen betrifft, ansonsten nach Art. 6 Abs. 1 lit. f DSGVO aufgrund des berechtigten Interesses an der Beantwortung von Anfragen. Soweit du eine Einwilligung erteilst, erfolgt die Verarbeitung nach Art. 6 Abs. 1 lit. a DSGVO; du kannst sie jederzeit mit Wirkung für die Zukunft widerrufen.',
          'Die Daten werden gespeichert, bis deine Anfrage vollständig bearbeitet ist und keine gesetzlichen Aufbewahrungsfristen der Löschung entgegenstehen.',
        ],
      },
      {
        title: 'Google Fonts',
        paragraphs: [
          'Diese Website verwendet die Schriftarten Fira Code und Karla, die beim Seitenaufruf von Servern von Google geladen werden. Dabei wird deine IP-Adresse an die Google Ireland Limited übermittelt und kann an Server der Google LLC in den USA weitergeleitet werden.',
          'Die Schriften sorgen für eine einheitliche Darstellung dieser Website über Browser und Geräte hinweg. Das stellt ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO dar. Weitere Informationen findest du in der Datenschutzerklärung von Google unter https://policies.google.com/privacy.',
        ],
      },
      {
        title: 'Cookies und lokale Speicherung',
        paragraphs: [
          'Diese Website setzt keine Cookies zur Analyse, Werbung oder Nachverfolgung. Deine Sprachauswahl wird in deinem Browser gespeichert, damit die Seite in der gewählten Sprache öffnet. Diese Angabe bleibt auf deinem Gerät und wird nicht übermittelt.',
        ],
      },
      {
        title: 'Externe Links',
        paragraphs: [
          'Diese Website verlinkt auf externe Dienste wie GitHub und LinkedIn. Sobald du einem solchen Link folgst, gilt diese Datenschutzerklärung nicht mehr. Für die dortige Datenverarbeitung gilt die Datenschutzerklärung des jeweiligen Anbieters.',
        ],
      },
      {
        title: 'Verschlüsselung',
        paragraphs: [
          'Diese Website nutzt aus Sicherheitsgründen eine TLS-Verschlüsselung, um die Übertragung vertraulicher Inhalte zu schützen. Eine verschlüsselte Verbindung erkennst du am Präfix "https://" in der Adresszeile deines Browsers.',
        ],
      },
      {
        title: 'Deine Rechte',
        paragraphs: [
          'Du hast das Recht auf Auskunft über die zu dir gespeicherten personenbezogenen Daten (Art. 15 DSGVO), auf Berichtigung unrichtiger Daten (Art. 16 DSGVO), auf Löschung (Art. 17 DSGVO), auf Einschränkung der Verarbeitung (Art. 18 DSGVO) und auf Datenübertragbarkeit (Art. 20 DSGVO).',
          'Außerdem kannst du einer Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO jederzeit aus Gründen widersprechen, die sich aus deiner besonderen Situation ergeben (Art. 21 DSGVO), und eine erteilte Einwilligung mit Wirkung für die Zukunft widerrufen.',
          'Unabhängig davon steht dir ein Beschwerderecht bei einer Aufsichtsbehörde zu, zum Beispiel bei der Landesbeauftragten für Datenschutz und Informationsfreiheit Nordrhein-Westfalen, Kavalleriestr. 2-4, 40213 Düsseldorf.',
        ],
      },
      {
        title: 'Änderungen dieser Datenschutzerklärung',
        paragraphs: [
          'Diese Datenschutzerklärung wird angepasst, sobald Änderungen an dieser Website oder an der Rechtslage es erforderlich machen. Es gilt jeweils die hier veröffentlichte Fassung.',
        ],
      },
    ],
    date: 'Stand: 9. September 2026',
  },
};

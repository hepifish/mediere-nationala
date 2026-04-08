export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Centrul Național de Mediere și Conflict Management",
    alternateName: "CNMCM",
    url: "https://mediere-nationala.com",
    telephone: "+40742056906",
    email: "office@mediere-nationala.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Str. Erou Iancu Nicolae, Nr. 29, David Business Center",
      addressLocality: "Voluntari",
      addressRegion: "Ilfov",
      addressCountry: "RO",
    },
    foundingDate: "2014",
    description:
      "Centrul Național de Mediere și Conflict Management oferă servicii inovatoare de mediere în România — mediere comercială, civilă, de familie și penală.",
    areaServed: {
      "@type": "Country",
      name: "România",
    },
    serviceType: [
      "Mediere comercială",
      "Mediere civilă",
      "Mediere de familie",
      "Mediere penală",
      "Dialog social",
      "Consultanță și formare profesională",
    ],
    founder: {
      "@type": "Person",
      name: "Violeta Marin",
      jobTitle: "Președinte",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Care este avantajul principal al medierii față de un proces în instanță?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Spre deosebire de procesele publice în instanță care durează ani și sunt decise de judecători, medierea oferă control total asupra soluției. Procesul rămâne confidențial, rentabil și mai rapid, rezultând un Acord de Mediere cu aceeași forță juridică ca o hotărâre judecătorească.",
        },
      },
      {
        "@type": "Question",
        name: "Ce se întâmplă dacă am deja un proces pe rol în instanță? Mai pot apela la mediere?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Da, medierea poate fi inițiată în orice etapă a conflictului, chiar și după începerea litigiului. Legea permite suspendarea cauzei pe durata negocierilor.",
        },
      },
      {
        "@type": "Question",
        name: "Ce valoare legală are acordul semnat la finalul medierii?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Acordul de Mediere este un document oficial care produce efecte juridice depline. Odată semnat și confirmat de instanță sau autentificat notarial, acesta devine titlu executoriu.",
        },
      },
      {
        "@type": "Question",
        name: "Cum mă asigur că acordul final este corect din punct de vedere legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Echipa centrului este compusă din specialiști juridici și avocați. Fiecare acord de mediere este redactat în strictă conformitate cu normele legale în vigoare.",
        },
      },
      {
        "@type": "Question",
        name: "Cât de protejate sunt informațiile discutate în timpul procesului de mediere?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Confidențialitatea este protejată legal și centrală pentru operațiunile noastre. Tot ce se discută în cadrul ședințelor rămâne strict confidențial.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

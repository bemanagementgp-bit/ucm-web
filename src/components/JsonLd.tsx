interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "MedicalOrganization",
        name: "UCM – Unidad de Cuidado Mamario",
        description:
          "Unidad de Cuidado Mamario especializada en prevención, diagnóstico, tratamiento y seguimiento de la salud mamaria.",
        url: "https://ucm-imp.com",
        medicalSpecialty: "Breast health",
        location: [
          {
            "@type": "MedicalClinic",
            name: "UCM – Instituto Médico Platense",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Av. 51 Nº 315",
              addressLocality: "La Plata",
              addressRegion: "Buenos Aires",
              addressCountry: "AR",
            },
            parentOrganization: {
              "@type": "MedicalOrganization",
              name: "Instituto Médico Platense",
              url: "https://www.institutomedicoplatense.com/",
            },
          },
          {
            "@type": "MedicalClinic",
            name: "UCM – Centro Médico de Diagnóstico City Bell",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Calle 474 Nº 583",
              addressLocality: "City Bell",
              addressRegion: "Buenos Aires",
              addressCountry: "AR",
            },
            parentOrganization: {
              "@type": "MedicalOrganization",
              name: "Centro Médico de Diagnóstico City Bell",
              url: "https://www.cmdcitybell.com.ar/",
            },
          },
        ],
      }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      }}
    />
  );
}

export function FAQPageJsonLd({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        name,
        description,
        url,
        provider: {
          "@type": "MedicalOrganization",
          name: "UCM – Unidad de Cuidado Mamario",
        },
      }}
    />
  );
}

// import ElectricVehicles from "@/components/ElectricVehicles";

// // Next.js SEO Metadata
// export const metadata = {
//   title: "EV Automation & Test Systems | Micrologic",
//   description:
//     "Automation and test systems for EV components including battery packs, BMS, motor controllers, VCU, on-board chargers, and DC-DC converters.",
//   keywords: [
//     "EV automation",
//     "electric vehicle testing",
//     "battery pack assembly",
//     "BMS testing",
//     "motor controller automation",
//     "EV component manufacturing",
//     "electric vehicle assembly",
//     "Micrologic",
//   ],
//   authors: [{ name: "Micrologic" }],
//   creator: "Micrologic",
//   publisher: "Micrologic",

//   // Open Graph
//   openGraph: {
//     title: "EV Automation & Test Systems | Micrologic",
//     description:
//       "Automation and test systems for EV components including battery packs, BMS, motor controllers, VCU, on-board chargers, and DC-DC converters.",
//     url: "https://www.micrologicglobal.com/industries/ev",
//     siteName: "Micrologic",
//     images: [
//       {
//         url: "/assets/evfinalimg.webp",
//         width: 1200,
//         height: 630,
//         alt: "Electric Vehicle Automation Systems",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },

//   // Twitter Card
//   twitter: {
//     card: "summary_large_image",
//     title: "EV Automation & Test Systems | Micrologic",
//     description:
//       "Automation and test systems for EV components including battery packs, BMS, motor controllers, VCU, on-board chargers, and DC-DC converters.",
//     images: ["/assets/evfinalimg.webp"],
//   },

//   // Canonical URL
//   alternates: {
//     canonical: "https://www.micrologicglobal.com/industries/ev",
//   },

//   // Robots
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
// };

// export default function EVPage() {
//   return <ElectricVehicles />;
// }
import ElectricVehicles from "@/components/ElectricVehicles";

export const metadata = {
  title:
    "Electric Vehicle Automation Systems | EV Battery & Power Electronics Manufacturing | Micrologic",

  description:
    "Micrologic provides automation and testing systems for electric vehicle components including battery packs, BMS, motor controllers, VCU, on-board chargers and DC-DC converters.",

  keywords: [
    "EV automation systems",
    "electric vehicle manufacturing automation",
    "EV battery assembly automation",
    "BMS testing systems",
    "motor controller testing",
    "EV electronics manufacturing",
    "electric vehicle production automation",
  ],

  alternates: {
    canonical:
      "https://www.micrologicglobal.com/industries/electric-vehicle-automation",
  },

  openGraph: {
    title: "Electric Vehicle Automation Systems | Micrologic",
    description:
      "Automation and testing systems for EV battery packs, BMS, motor controllers, and power electronics manufacturing.",
    url:
      "https://www.micrologicglobal.com/industries/electric-vehicle-automation",
    siteName: "Micrologic",
    images: [
      {
        url: "https://www.micrologicglobal.com/assets/evfinalimg.webp",
        width: 1200,
        height: 630,
        alt: "Electric Vehicle Automation Systems",
      },
    ],
    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "EV Automation & Test Systems | Micrologic",
    description:
      "Automation systems for EV battery packs, BMS testing, and power electronics manufacturing.",
    images: ["https://www.micrologicglobal.com/assets/evfinalimg.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function EVPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.micrologicglobal.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Electric Vehicle Automation",
        item:
          "https://www.micrologicglobal.com/industries/electric-vehicle-automation",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Electric Vehicle Automation Solutions",
    description:
      "Automation and testing solutions for EV battery packs, BMS modules, motor controllers, and power electronics manufacturing.",
    provider: {
      "@type": "Organization",
      name: "Micrologic",
      url: "https://www.micrologicglobal.com",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    serviceType: "Electric Vehicle Manufacturing Automation",
    url:
      "https://www.micrologicglobal.com/industries/electric-vehicle-automation",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is EV automation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "EV automation refers to automated assembly, inspection, and testing systems used in electric vehicle manufacturing including battery packs, BMS modules, and power electronics.",
        },
      },
      {
        "@type": "Question",
        name: "What EV components can be automated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "EV manufacturing automation can be applied to battery pack assembly, BMS modules, motor controllers, on-board chargers, DC-DC converters, and vehicle control units.",
        },
      },
      {
        "@type": "Question",
        name: "Why is testing important in EV manufacturing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Testing ensures safety and performance of EV components by validating electrical parameters, insulation resistance, functional behavior, and communication protocols.",
        },
      },
    ],
  };

  return (
    <>
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <ElectricVehicles />
    </>
  );
}
// import Electronics from "@/components/Electronics";

// // Next.js SEO Metadata
// export const metadata = {
//   title: "Electronics Assembly & Test Automation | Micrologic",
//   description:
//     "Automation systems for electronics assembly, inspection and testing including energy meters, solar controllers, consumer electronics and telecom devices.",
//   keywords: [
//     "electronics automation",
//     "PCB assembly",
//     "electronics testing",
//     "AOI inspection",
//     "consumer electronics manufacturing",
//     "telecom device assembly",
//     "smart energy meters",
//     "Micrologic",
//   ],
//   authors: [{ name: "Micrologic" }],
//   creator: "Micrologic",
//   publisher: "Micrologic",

//   // Open Graph
//   openGraph: {
//     title: "Electronics Assembly & Test Automation | Micrologic",
//     description:
//       "Automation systems for electronics assembly, inspection and testing including energy meters, solar controllers, consumer electronics and telecom devices.",
//     url: "https://www.micrologicglobal.com/industries/electronics",
//     siteName: "Micrologic",
//     images: [
//       {
//         url: "/assets/electronicsandelectrical.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Electronics Assembly Automation Systems",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },

//   // Twitter Card
//   twitter: {
//     card: "summary_large_image",
//     title: "Electronics Assembly & Test Automation | Micrologic",
//     description:
//       "Automation systems for electronics assembly, inspection and testing including energy meters, solar controllers, consumer electronics and telecom devices.",
//     images: ["/assets/electronicsandelectrical.jpg"],
//   },

//   // Canonical URL
//   alternates: {
//     canonical: "https://www.micrologicglobal.com/industries/electronics",
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

// export default function ElectronicsPage() {
//   return <Electronics />;
// }
import Electronics from "@/components/Electronics";

export const metadata = {
  title:
    "Electronics Manufacturing Automation | PCB Assembly & Test Systems | Micrologic",

  description:
    "Micrologic provides automation solutions for electronics manufacturing including PCB assembly, AOI inspection, RF testing, and electronics device validation.",

  keywords: [
    "electronics manufacturing automation",
    "PCB assembly automation",
    "AOI inspection systems",
    "electronics testing automation",
    "RF testing systems",
    "consumer electronics manufacturing",
  ],

  alternates: {
    canonical:
      "https://www.micrologicglobal.com/industries/electrical-and-electronics-automation",
  },

  openGraph: {
    title: "Electronics Manufacturing Automation | Micrologic",
    description:
      "Automation systems for electronics assembly, inspection and testing including PCB modules, RF devices and smart electronics.",
    url:
      "https://www.micrologicglobal.com/industries/electrical-and-electronics-automation",
    siteName: "Micrologic",
    images: [
      {
        url: "https://www.micrologicglobal.com/assets/electronicsandelectrical.webp",
        width: 1200,
        height: 630,
        alt: "Electronics Manufacturing Automation",
      },
    ],
    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "Electronics Assembly & Test Automation | Micrologic",
    description:
      "Automation systems for PCB assembly, AOI inspection, RF testing and electronics device validation.",
    images: [
      "https://www.micrologicglobal.com/assets/electronicsandelectrical.webp",
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ElectronicsPage() {

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
        name: "Electrical & Electronics Automation",
        item:
          "https://www.micrologicglobal.com/industries/electrical-and-electronics-automation",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Electronics Manufacturing Automation",
    description:
      "Automation solutions for electronics manufacturing including PCB assembly systems, vision inspection, RF testing, and electronics device validation.",
    provider: {
      "@type": "Organization",
      name: "Micrologic",
      url: "https://www.micrologicglobal.com",
    },
    serviceType: "Electronics Manufacturing Automation",
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    url:
      "https://www.micrologicglobal.com/industries/electrical-and-electronics-automation",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is electronics manufacturing automation?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Electronics manufacturing automation uses robotics, inspection systems, and automated testing platforms to assemble and validate electronic components with high precision.",
        },
      },
      {
        "@type": "Question",
        name: "What systems are used in electronics automation?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Electronics automation systems include PCB assembly lines, AOI inspection systems, RF testing stations, firmware flashing systems, and end-of-line validation platforms.",
        },
      },
      {
        "@type": "Question",
        name: "Why is inspection important in electronics manufacturing?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Inspection ensures component placement accuracy, detects defects early, and guarantees reliability of electronic devices before shipment.",
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

      <Electronics />
    </>
  );
}
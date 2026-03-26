import { Metadata } from "next";
import Automotive from "@/components/AutomotiveDetail";

// // Next.js SEO Metadata (replaces your Seo component)
// export const metadata = {
//   title: "Automotive Automation Systems | Micrologic",
//   description:
//     "Advanced automotive automation solutions for assembly, inspection, EV battery manufacturing, and electronics testing with full traceability.",
//   keywords: [
//     "automotive automation",
//     "assembly systems",
//     "EV battery manufacturing",
//     "automotive electronics testing",
//     "ADAS components",
//     "automotive inspection systems",
//     "Micrologic",
//   ],
//   authors: [{ name: "Micrologic" }],
//   creator: "Micrologic",
//   publisher: "Micrologic",
  
//   // Open Graph
//   openGraph: {
//     title: "Automotive Automation Systems | Micrologic",
//     description:
//       "Advanced automotive automation solutions for assembly, inspection, EV battery manufacturing, and electronics testing with full traceability.",
//     url: "https://www.micrologicglobal.com/industries/automotive",
//     siteName: "Micrologic",
//     images: [
//       {
//         url: "/assets/car.webp",
//         width: 1200,
//         height: 630,
//         alt: "Automotive Automation Systems",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },

//   // Twitter Card
//   twitter: {
//     card: "summary_large_image",
//     title: "Automotive Automation Systems | Micrologic",
//     description:
//       "Advanced automotive automation solutions for assembly, inspection, EV battery manufacturing, and electronics testing with full traceability.",
//     images: ["/assets/car.webp"],
//   },

//   // Canonical URL
//   alternates: {
//     canonical: "https://www.micrologicglobal.com/industries/automotive",
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

// export default function AutomotivePage() {
//   return <Automotive />;
// }
export const metadata = {
  title:
    "Automotive Automation Solutions | EV Battery & Electronics Manufacturing | Micrologic",

  description:
    "Micrologic provides advanced automotive automation solutions including EV battery assembly, automotive electronics testing, inspection systems and Industry 4.0 manufacturing.",

  keywords: [
    "automotive automation",
    "EV battery assembly automation",
    "automotive electronics manufacturing",
    "ADAS electronics testing",
    "automotive inspection systems",
    "automotive assembly automation",
  ],

  alternates: {
    canonical:
      "https://www.micrologicglobal.com/industries/automotive-automation",
  },

  openGraph: {
    title: "Automotive Automation Solutions | Micrologic",
    description:
      "Automation solutions for automotive electronics assembly, inspection systems and EV battery manufacturing.",
    url:
      "https://www.micrologicglobal.com/industries/automotive-automation",
    siteName: "Micrologic",
    images: [
      {
        url: "https://www.micrologicglobal.com/assets/car.webp",
        width: 1200,
        height: 630,
        alt: "Automotive Automation Systems",
      },
    ],
    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "Automotive Automation Solutions | Micrologic",
    description:
      "Automation systems for automotive electronics and EV battery manufacturing.",
    images: ["https://www.micrologicglobal.com/assets/car.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function AutomotiveAutomationPage() {

  // Breadcrumb
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
        name: "Automotive Automation",
        item:
          "https://www.micrologicglobal.com/industries/automotive-automation",
      },
    ],
  };

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Automotive Automation Solutions",
    description:
      "Micrologic provides advanced automotive automation solutions including assembly systems, inspection systems, EV battery manufacturing automation, and end-of-line testing.",
    provider: {
      "@type": "Organization",
      name: "Micrologic",
      url: "https://www.micrologicglobal.com",
    },
    serviceType: "Industrial Automotive Automation",
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    url:
      "https://www.micrologicglobal.com/industries/automotive-automation",
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is automotive automation?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Automotive automation refers to the use of robotics, intelligent machines, inspection systems and automated assembly lines to manufacture automotive components efficiently and with high precision.",
        },
      },
      {
        "@type": "Question",
        name: "Which automotive components can be automated?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Automation can be used for controllers, sensors, lighting modules, display devices, EV battery components, and automotive electronic assemblies.",
        },
      },
      {
        "@type": "Question",
        name: "Why is traceability important in automotive manufacturing?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Traceability helps manufacturers track components, processes, and test results for each product, ensuring quality control, regulatory compliance, and efficient recall management.",
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

      <Automotive />
    </>
  );
}
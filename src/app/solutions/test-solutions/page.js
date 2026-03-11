// import TesterDiagram from "@/components/TesterDiagram";

// export const metadata = {
//   title: "Test Automation Solutions | Micrologic Integrated Systems",
//   description:
//     "Micrologic provides automated test systems including end-of-line testing, validation and functional test automation for manufacturing.",
//   alternates: {
//     canonical: "https://www.micrologicglobal.com/solutions/test-automation",
//   },
// };

// export default function TestAutomationPage() {
//   return (
//     <div>
//       <TesterDiagram />
//     </div>
//   );
// }
import TesterDiagram from "@/components/TesterDiagram";

// Next.js SEO Metadata
export const metadata = {
  title: "PCB Testing Solutions | ICT, FCT, EOL & RF Testing | Micrologic",
  description:
    "Comprehensive PCB and electronics testing solutions including In-Circuit Testing (ICT), Functional Circuit Testing (FCT), End-of-Line (EOL) testing, In-System Programming (ISP), and RF testing. Fastest delivery in 4-6 weeks with MTS test platform.",
  keywords: [
    "PCB testing solutions",
    "In-Circuit Testing",
    "ICT testing",
    "Functional Circuit Testing",
    "FCT testing",
    "End-of-Line testing",
    "EOL testing",
    "In-System Programming",
    "ISP programming",
    "RF testing",
    "PCBA testing",
    "electronics testing",
    "bed-of-nails testing",
    "automated testing",
    "test fixtures",
    "parallel testing",
    "MTS test platform",
    "test automation",
    "quality assurance testing",
    "production testing",
    "Micrologic test solutions",
    "electrical testing",
    "wireless testing",
    "Bluetooth testing",
    "WiFi testing",
  ],
  authors: [{ name: "Micrologic" }],
  creator: "Micrologic",
  publisher: "Micrologic",

  // Open Graph
  openGraph: {
    title: "PCB Testing Solutions | ICT, FCT, EOL & RF Testing | Micrologic",
    description:
      "Comprehensive PCB testing solutions with ICT, FCT, EOL, ISP, and RF testing. Fastest delivery in 4-6 weeks with modular MTS test platform and FactEyes cloud integration.",
    url: "https://www.micrologicglobal.com/test-solutions",
    siteName: "Micrologic",
    images: [
      {
        url: "/assets/pcb1.webp",
        width: 1200,
        height: 630,
        alt: "Micrologic PCB Testing Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "PCB Testing Solutions | ICT, FCT, EOL & RF Testing | Micrologic",
    description:
      "Comprehensive PCB testing with ICT, FCT, EOL, ISP & RF. Fast delivery, cloud-ready, and scalable test solutions.",
    images: ["/assets/pcb1.webp"],
  },

  // Canonical URL
  alternates: {
    canonical: "https://www.micrologicglobal.com/test-solutions",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LD Structured Data for Service
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Electronics Testing Solutions",
  provider: {
    "@type": "Organization",
    name: "Micrologic",
    url: "https://www.micrologicglobal.com",
  },
  areaServed: "Worldwide",
  description:
    "Comprehensive PCB and electronics testing solutions including In-Circuit Testing (ICT), Functional Circuit Testing (FCT), End-of-Line (EOL) testing, In-System Programming (ISP), and RF testing for Bluetooth, Wi-Fi, and wireless devices.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Testing Solutions Catalog",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "In-Circuit Testing (ICT)",
          description:
            "Electrical integrity verification using bed-of-nails fixtures, LCR meters, and parallel testing for high-volume PCBA validation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Functional Circuit Testing (FCT)",
          description:
            "Complete system performance validation with power-on testing, interface verification, and automated test execution",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "End-of-Line (EOL) Testing",
          description:
            "Final product validation with functional testing, safety testing, vision inspection, and complete traceability",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "In-System Programming (ISP)",
          description:
            "Fast parallel device programming for MCUs, EEPROMs with built-in verification and firmware integrity checks",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "RF Testing",
          description:
            "Shielded chamber testing for Bluetooth, Wi-Fi, and wireless devices with precision RF measurements and compliance validation",
        },
      },
    ],
  },
};

// Product Schema for MTS Platform
const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "MTS Test Platform",
  description:
    "Modular Test System platform with standard architecture for rapid deployment of PCB and electronics testing solutions. Delivers complete test systems in 4-6 weeks.",
  brand: {
    "@type": "Brand",
    name: "Micrologic",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Contact for custom pricing",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "45",
  },
  features: [
    "Standard test architecture",
    "4-6 weeks delivery time",
    "Pre-engineered software platform",
    "Pre-built hardware drivers",
    "Parallel testing capability",
    "FactEyes cloud integration",
    "Modular and scalable design",
    "Simplified maintenance",
    "Multiple test types support",
  ],
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is In-Circuit Testing (ICT)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In-Circuit Testing (ICT) is a quality assurance process that verifies the electrical integrity and assembly correctness of PCBAs using bed-of-nails fixtures, precision instruments like LCR meters and multimeters to measure resistance, capacitance, inductance, voltage, and current.",
      },
    },
    {
      "@type": "Question",
      name: "What is Functional Circuit Testing (FCT)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FCT validates complete system performance by performing powered functional verification of circuit operation, signal flow, device response, interface communication testing (UART, RS232, CAN, LIN, Ethernet), and input/output validation with automated test execution.",
      },
    },
    {
      "@type": "Question",
      name: "What is End-of-Line (EOL) Testing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EOL testing checks complete product functionality before shipment, including functional validation under real operating conditions, connector engagement verification, digital and analog I/O testing, safety testing (Hi-Pot and IR), automated vision inspection, and complete traceability.",
      },
    },
    {
      "@type": "Question",
      name: "How fast can you deliver a test system?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our pre-engineered MTS architecture with ready software platform and pre-built hardware drivers ensures the fastest delivery within 4 to 6 weeks by minimizing design and integration time.",
      },
    },
    {
      "@type": "Question",
      name: "What is RF testing and what does it cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "RF testing validates wireless performance in shielded RF chambers for Bluetooth (2.4 GHz), Wi-Fi (2.4/5/6 GHz), and UHF devices. It includes transmission performance testing, receiver sensitivity testing, VSWR validation, and automated compliance data logging.",
      },
    },
    {
      "@type": "Question",
      name: "Can your test systems integrate with cloud platforms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our test systems can push data to your cloud platform for MES/ERP integration, or you can use our proprietary FactEyes cloud platform for comprehensive manufacturing analytics and real-time visibility.",
      },
    },
  ],
};

export default function TestingSolutionsPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <TesterDiagram />
    </>
  );
}
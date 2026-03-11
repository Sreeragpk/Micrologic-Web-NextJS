import TraceabilityFlow from "@/components/TraceabilityFlow";

// Next.js SEO Metadata
export const metadata = {
  title: "Production Traceability Solutions | Traceware System | Micrologic",
  description:
    "Complete production traceability with Micrologic Traceware. Track parts, processes, and quality data from assembly to analytics. Error-proofing with poka-yoke and real-time process monitoring for manufacturing excellence.",
  keywords: [
    "production traceability",
    "Traceware",
    "manufacturing traceability",
    "part traceability",
    "process traceability",
    "poka-yoke",
    "error proofing",
    "quality traceability",
    "assembly traceability",
    "batch tracking",
    "serial number tracking",
    "barcode tracking",
    "RFID traceability",
    "manufacturing history",
    "product genealogy",
    "recall management",
    "quality control system",
    "regulatory compliance",
    "Micrologic Traceware",
  ],
  authors: [{ name: "Micrologic" }],
  creator: "Micrologic",
  publisher: "Micrologic",

  // Open Graph
  openGraph: {
    title: "Production Traceability Solutions | Traceware System | Micrologic",
    description:
      "Complete production traceability with Micrologic Traceware. Track parts, processes, and quality data from assembly to analytics with error-proofing and real-time monitoring.",
    url: "https://www.micrologicglobal.com/production-traceability",
    siteName: "Micrologic",
    images: [
      {
        url: "/assets/scanning.webp",
        width: 1200,
        height: 630,
        alt: "Micrologic Production Traceability Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Production Traceability Solutions | Traceware | Micrologic",
    description:
      "Complete production traceability with part tracking, process monitoring, and error-proofing for manufacturing excellence.",
    images: ["/assets/scanning.webp"],
  },

  // Canonical URL
  alternates: {
    canonical: "https://www.micrologicglobal.com/production-traceability",
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

// JSON-LD Structured Data for Product/Software
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Micrologic Traceware",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Multi-platform",
  description:
    "Comprehensive production traceability system that tracks parts, processes, and quality parameters throughout the manufacturing lifecycle. Features error-proofing with poka-yoke and complete product genealogy.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Contact for custom pricing",
  },
  featureList: [
    "Part Traceability - Track components, materials, batch codes, supplier information",
    "Process Traceability - Monitor voltage, current, torque, test results",
    "Error Proofing (Poka-Yoke) - Prevent assembly mistakes by design",
    "Barcode & RFID Integration",
    "Serial Number Tracking",
    "Quality Control Integration",
    "Regulatory Compliance Support",
    "Recall Management",
    "Root Cause Analysis",
    "Real-time Monitoring",
    "Legacy System Integration",
  ],
  provider: {
    "@type": "Organization",
    name: "Micrologic",
    url: "https://www.micrologicglobal.com",
  },
};

// Service Schema
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Production Traceability Solutions",
  provider: {
    "@type": "Organization",
    name: "Micrologic",
    url: "https://www.micrologicglobal.com",
  },
  areaServed: "Worldwide",
  description:
    "End-to-end production traceability solutions including part tracking, process monitoring, error-proofing, and quality control integration.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Traceability Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Part Traceability",
          description:
            "Track and record all parts, materials, batch codes, and supplier information for complete component visibility",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Process Traceability",
          description:
            "Monitor and log process parameters including voltage, current, torque, and test results against product IDs",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Error Proofing (Poka-Yoke)",
          description:
            "Implement mistake-proofing mechanisms to prevent defects and ensure correct assembly",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Legacy System Integration",
          description:
            "Integrate traceability into existing manufacturing systems for complete visibility",
        },
      },
    ],
  },
};

// FAQ Schema for Traceability
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is production traceability?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Production traceability is the ability to track and record the complete history of a product throughout its manufacturing lifecycle, including parts used, processes performed, test results, and quality data. It creates a detailed 'birth certificate' for every product.",
      },
    },
    {
      "@type": "Question",
      name: "What is part traceability?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Part traceability tracks and records all parts and materials used in production, including components, consumables, and housing. Details such as batch code, supplier code, and date code are tracked and recorded for each product ID.",
      },
    },
    {
      "@type": "Question",
      name: "What is process traceability?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Process traceability tracks and records all process parameters and settings such as voltage, current, torque, test results, and defects against each product ID throughout the manufacturing process.",
      },
    },
    {
      "@type": "Question",
      name: "What is poka-yoke error proofing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Poka-yoke (mistake-proofing) is a method of preventing errors by design. It makes it impossible or obvious to mix up or skip a process through design features, sensors, vision systems, and fool-proof tools.",
      },
    },
    {
      "@type": "Question",
      name: "Can Micrologic Traceware integrate with legacy systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Micrologic Traceware can be effortlessly adapted to any existing legacy machines to provide complete visibility and important insights without replacing existing equipment.",
      },
    },
    {
      "@type": "Question",
      name: "Why is production traceability important?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Production traceability is crucial for quality control (identifying defect sources), regulatory compliance, efficient warranty and recall management, and continuous improvement through data analysis.",
      },
    },
  ],
};

export default function ProductionTraceabilityPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <TraceabilityFlow />
    </>
  );
}
import AssemblyCells from "@/components/AssemblyCells";
import Script from "next/script";

// Next.js SEO Metadata
export const metadata = {
  title: "Automated Assembly Cells | Assembly Line Automation | Micrologic",
  description:
    "Automated assembly cells integrating fixtures, conveyors, and smart tooling for high-productivity manufacturing. Features precision fixturing, modular design, vision systems, and MES connectivity with 95% automation rate.",
  keywords: [
    "automated assembly cells",
    "assembly line automation",
    "assembly stations",
    "automated assembly line",
    "robotic assembly",
    "assembly fixtures",
    "conveyor systems",
    "modular assembly",
    "assembly automation",
    "manufacturing automation",
    "production line automation",
    "bowl feeders",
    "screw fixing automation",
    "pressing fixtures",
    "connector engagement",
    "vision inspection assembly",
    "MES integration",
    "poka-yoke",
    "smart tooling",
    "Micrologic assembly",
  ],
  authors: [{ name: "Micrologic" }],
  creator: "Micrologic",
  publisher: "Micrologic",

  // Open Graph
  openGraph: {
    title: "Automated Assembly Cells | Assembly Line Automation | Micrologic",
    description:
      "Purpose-built automated assembly stations with fixtures, conveyors, and smart tooling. 95% automation rate, 300+ units/hour, 99.7% first pass yield.",
    url: "https://www.micrologicglobal.com/products/automated-assembly-cells",
    siteName: "Micrologic",
    images: [
      {
        url: "/assets/Assy line.JPG",
        width: 1200,
        height: 630,
        alt: "Micrologic Automated Assembly Cells",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Automated Assembly Cells | Micrologic",
    description:
      "Automated assembly automation with 95% automation rate and 99.7% first pass yield.",
    images: ["/assets/Assy line.JPG"],
  },

  // Canonical URL
  alternates: {
    canonical: "https://www.micrologicglobal.com/products/automated-assembly-cells",
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

// JSON-LD Structured Data
const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Automated Assembly Cells",
  description:
    "Purpose-built automated assembly stations integrating fixtures, conveyors, and intelligent tooling systems for high-productivity manufacturing with 95% automation rate.",
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
    ratingCount: "52",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are automated assembly cells?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Assembly Cells are sophisticated manufacturing stations designed to automate and streamline product assembly processes. These integrated systems combine fixtures, conveyors, feeders, and smart tooling to deliver high productivity, exceptional repeatability, and enhanced operator safety across manual, semi-automated, and fully automated production environments.",
      },
    },
    {
      "@type": "Question",
      name: "What is the automation rate of assembly cells?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our assembly cells achieve 95% automation rate with production capacity of 300+ units per hour and 99.7% first pass yield for consistent quality output.",
      },
    },
    {
      "@type": "Question",
      name: "What features do automated assembly cells include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Assembly cells include precision fixturing, conveyor integration, modular design, smart tooling (screwdrivers, presses, feeders), vision inspection systems, poka-yoke checks, and full MES connectivity for traceability.",
      },
    },
    {
      "@type": "Question",
      name: "Are assembly cells customizable for different products?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, assembly cells feature modular and scalable designs that support multiple product variants with quick changeover capabilities, allowing flexible production of different assembly configurations.",
      },
    },
    {
      "@type": "Question",
      name: "What safety standards do assembly cells comply with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Assembly cells are CE compliant and feature robust safety enclosures, ergonomic operator stations, and industry-standard safety sensors to ensure safe 24/7 production operations.",
      },
    },
  ],
};

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
      name: "Products",
      item: "https://www.micrologicglobal.com/products",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Automated Assembly Cells",
      item: "https://www.micrologicglobal.com/products/automated-assembly-cells",
    },
  ],
};

export default function AutomatedAssemblyCellsPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AssemblyCells />
    </>
  );
}
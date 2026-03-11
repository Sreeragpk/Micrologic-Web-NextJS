import TestCells from "@/components/TestCells";

// Next.js SEO Metadata
export const metadata = {
  title: "Automated Test Cells | PCBA Testing & Grading Solutions | Micrologic",
  description:
    "Advanced automated test cells for electrical, optical, and functional validation. Features MOSFET grading, PCB flashing, EOL testing, dispensing stations, and light guide inspection with 99.9% accuracy and complete traceability.",
  keywords: [
    "automated test cells",
    "PCBA testing",
    "MOSFET grading",
    "PCB flashing",
    "EOL testing",
    "end-of-line testing",
    "dispensing station",
    "light guide inspection",
    "electrical testing",
    "optical testing",
    "functional testing",
    "test automation",
    "grading machine",
    "component testing",
    "firmware flashing",
    "vision inspection",
    "MES integration",
    "Industry 4.0 testing",
    "test traceability",
    "Micrologic test solutions",
  ],
  authors: [{ name: "Micrologic" }],
  creator: "Micrologic",
  publisher: "Micrologic",

  // Open Graph
  openGraph: {
    title: "Automated Test Cells | PCBA Testing & Grading Solutions | Micrologic",
    description:
      "Advanced automated test cells for electrical, optical, and functional validation with 99.9% accuracy. MOSFET grading, PCB flashing, EOL testing, and complete MES integration.",
    url: "https://www.micrologicglobal.com/products/automated-test-cells",
    siteName: "Micrologic",
    images: [
      {
        url: "/assets/Mosfet Grading.JPG",
        width: 1200,
        height: 630,
        alt: "Micrologic Automated Test Cells",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Automated Test Cells | PCBA Testing Solutions | Micrologic",
    description:
      "Advanced automated testing with 99.9% accuracy. MOSFET grading, EOL testing, PCB flashing, and complete traceability.",
    images: ["/assets/Mosfet Grading.JPG"],
  },

  // Canonical URL
  alternates: {
    canonical: "https://www.micrologicglobal.com/products/automated-test-cells",
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
  name: "Automated Test Cells",
  description:
    "Advanced automated testing stations designed to validate electrical, optical, and functional parameters with 99.9% accuracy and complete traceability.",
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
    ratingCount: "38",
  },
  features: [
    "99.9% Test Accuracy",
    "50,000+ Tests per Day Capacity",
    "24/7 Operation Capability",
    "100% Product Traceability",
    "MES/ERP Integration",
    "Industry 4.0 Ready",
    "MOSFET Electrical Grading",
    "PCB Firmware Flashing",
    "EOL Testing Systems",
    "Optical Inspection",
    "Automated Dispensing",
    "High-speed Vision Systems",
  ],
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are automated test cells?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Test Cells are controlled environments engineered to inspect, validate, and measure electrical, optical, and functional characteristics of products. They ensure consistent quality by automating test procedures and eliminating human variability with 99.9% accuracy.",
      },
    },
    {
      "@type": "Question",
      name: "What types of testing do test cells perform?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Test cells perform electrical parameter testing (voltage, current, Rds(on)), functional validation under real-world conditions, optical inspection and brightness measurement, automated grading and classification, firmware flashing and verification, and high-speed vision inspection.",
      },
    },
    {
      "@type": "Question",
      name: "What is MOSFET grading?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MOSFET grading is high-precision electrical parameter testing that includes high-speed vision inspection, electrical parameter logging, and automated grading and reporting to classify components based on their performance characteristics.",
      },
    },
    {
      "@type": "Question",
      name: "Do test cells integrate with MES systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our test cells provide complete MES/ERP traceability and digital logging, ensuring 100% product traceability throughout the manufacturing process. They are Industry 4.0 ready with full automation capabilities.",
      },
    },
    {
      "@type": "Question",
      name: "What is the testing capacity of automated test cells?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our automated test cells can perform 50,000+ tests per day with 24/7 operation capability, delivering 99.9% test accuracy with complete repeatability using advanced sensors.",
      },
    },
    {
      "@type": "Question",
      name: "What safety standards do test cells comply with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Test cells comply with industry safety and quality standards, featuring modular and scalable designs that can be customized for any product. They incorporate automated safety features and validation protocols.",
      },
    },
  ],
};

// Breadcrumb Schema
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
      name: "Automated Test Cells",
      item: "https://www.micrologicglobal.com/products/automated-test-cells",
    },
  ],
};

export default function AutomatedTestCellsPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <TestCells />
    </>
  );
}
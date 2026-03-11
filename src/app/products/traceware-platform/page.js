import Traceware from "@/components/Traceware";

// Next.js SEO Metadata
export const metadata = {
  title: "Traceware Manufacturing Traceability Software | Product Genealogy | Micrologic",
  description:
    "Traceware is Micrologic's comprehensive digital manufacturing and traceability platform. Features complete product genealogy, real-time production monitoring, UID generation, and web-based Traceware 2.0 Manager for global factory visibility.",
  keywords: [
    "Traceware",
    "manufacturing traceability software",
    "product traceability",
    "production tracking",
    "UID generator",
    "barcode tracking",
    "QR code traceability",
    "product genealogy",
    "manufacturing intelligence",
    "production monitoring",
    "quality control software",
    "Traceware 2.0 Manager",
    "web-based traceability",
    "factory visibility",
    "manufacturing analytics",
    "production planning software",
    "Micrologic Traceware",
    "digital manufacturing",
    "compliance tracking",
    "audit trail software",
  ],
  authors: [{ name: "Micrologic" }],
  creator: "Micrologic",
  publisher: "Micrologic",

  // Open Graph
  openGraph: {
    title: "Traceware Manufacturing Traceability Software | Micrologic",
    description:
      "Complete digital manufacturing platform with product traceability, real-time monitoring, UID generation, and web-based management for global factory visibility.",
    url: "https://www.micrologicglobal.com/products/traceware",
    siteName: "Micrologic",
    images: [
      {
        url: "/assets/traceware.png",
        width: 1200,
        height: 630,
        alt: "Traceware Manufacturing Traceability Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Traceware Manufacturing Traceability Software | Micrologic",
    description:
      "Complete digital manufacturing platform with product traceability, real-time monitoring, and web-based management.",
    images: ["/assets/traceware.png"],
  },

  // Canonical URL
  alternates: {
    canonical: "https://www.micrologicglobal.com/products/traceware",
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

// JSON-LD Structured Data for Software Product
const productSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Traceware Manufacturing Traceability Software",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Windows, Web-based",
  description:
    "Comprehensive digital manufacturing and traceability platform that delivers complete product genealogy, real-time production monitoring, UID generation, analytics, and web-based Traceware 2.0 Manager for global factory visibility.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Contact for licensing and pricing",
  },
  featureList: [
    "Traceware Server - Centralized data management",
    "UID Generator - Unique product identification",
    "Traceware Client - Workstation management",
    "Traceware Client Manager - Reports and analytics",
    "Traceware 2.0 Manager - Web-based global access",
    "Real-time production monitoring",
    "Complete product genealogy",
    "Barcode and QR code support",
    "Role-based user management",
    "Compliance and audit trail",
    "Mobile responsive interface",
    "Cloud-based deployment option",
  ],
  provider: {
    "@type": "Organization",
    name: "Micrologic",
    url: "https://www.micrologicglobal.com",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "42",
  },
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Traceware?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Traceware is a comprehensive digital manufacturing platform that ensures complete product traceability, transparency, and quality control across your entire production ecosystem. It consists of four core components: Traceware Server, UID Generator, Traceware Client, and Traceware Client Manager.",
      },
    },
    {
      "@type": "Question",
      name: "What are the core components of Traceware?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Traceware consists of four core components: 1) Traceware Server for centralized data management, 2) UID Generator for unique product identification, 3) Traceware Client for workstation barcode scanning and validation, and 4) Traceware Client Manager for reporting and analytics.",
      },
    },
    {
      "@type": "Question",
      name: "What is Traceware 2.0 Manager?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Traceware 2.0 Manager is a revolutionary web-based management platform providing global visibility and control of your entire manufacturing operations from any device, anywhere in the world. It features real-time monitoring, production planning, analytics, and enterprise-grade security.",
      },
    },
    {
      "@type": "Question",
      name: "Does Traceware support barcode and QR code tracking?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Traceware supports both barcode and QR code tracking (2D/3D) through its UID Generator component, which generates unique identifiers for products and integrates with barcode and QR printers for complete traceability.",
      },
    },
    {
      "@type": "Question",
      name: "Can Traceware be accessed remotely?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Traceware 2.0 Manager is a cloud-based web platform that can be accessed from anywhere in the world through a secure web browser. It's fully optimized for tablets and smartphones, allowing remote monitoring and control of production operations.",
      },
    },
    {
      "@type": "Question",
      name: "What reports does Traceware generate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Traceware generates comprehensive reports including Measurement Reports, Production Reports, Traceability Reports, Rework Reports, and Summary Reports. It also provides customizable dashboards, advanced analytics, and trend analysis for data-driven decision making.",
      },
    },
  ],
};

// BreadcrumbList Schema
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
      name: "Traceware",
      item: "https://www.micrologicglobal.com/products/traceware",
    },
  ],
};

export default function TracewarePage() {
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
      <Traceware />
    </>
  );
}
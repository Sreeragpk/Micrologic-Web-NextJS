import MtsSoftware from "@/components/MtsSoftware";

// Next.js SEO Metadata
export const metadata = {
  title: "MTS Test & Measurement Software | PCBA & Box Build Testing | Micrologic",
  description:
    "MTS is Micrologic's comprehensive test and measurement software for PCBA and box-build verification. Supports CAN, LIN, RS232, RS485, digital I/O, automated test sequences, user management, and complete production traceability.",
  keywords: [
    "MTS software",
    "test measurement software",
    "PCBA testing software",
    "box build testing",
    "automated test software",
    "CAN protocol testing",
    "LIN protocol testing",
    "RS232 testing",
    "RS485 testing",
    "test automation software",
    "production testing software",
    "test sequence editor",
    "device configuration",
    "test reporting software",
    "Micrologic MTS",
    "electronics test software",
    "manufacturing test platform",
    "UDS diagnostics",
    "barcode traceability",
    "QR code scanning",
    "digital IO testing",
    "measurement devices",
    "test execution software",
  ],
  authors: [{ name: "Micrologic" }],
  creator: "Micrologic",
  publisher: "Micrologic",

  // Open Graph
  openGraph: {
    title: "MTS Test & Measurement Software | PCBA & Box Build Testing | Micrologic",
    description:
      "Comprehensive test and measurement software with protocol support for CAN, LIN, RS232/RS485, automated test sequences, and complete production traceability.",
    url: "https://www.micrologicglobal.com/products/mts-software",
    siteName: "Micrologic",
    images: [
      {
        url: "/assets/mts-software-platform.png",
        width: 1200,
        height: 630,
        alt: "MTS Test & Measurement Software Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "MTS Test & Measurement Software | Micrologic",
    description:
      "Comprehensive test software for PCBA and box-build with CAN, LIN, RS232/RS485 support and complete traceability.",
    images: ["/assets/mts-software-platform.png"],
  },

  // Canonical URL
  alternates: {
    canonical: "https://www.micrologicglobal.com/products/mts-test-software",
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
  name: "MTS - Micrologic Test & Measurement Software",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Windows",
  description:
    "Comprehensive test and measurement software for PCBA and box-build verification with support for industrial communication protocols (CAN, LIN, RS232, RS485), automated test sequences, user management, and production traceability.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Contact for licensing and pricing",
  },
  featureList: [
    "Device Configuration - Digital IO, CAN, LIN, RS232, RS485 support",
    "Tool Monitoring - Real-time performance visualization",
    "Test Edit - User-friendly test sequence editor",
    "Auto Run - Automated test execution with dashboards",
    "User Management - Role-based access control",
    "Reports - Measurement reports and defect logs",
    "Hardware Configurator - Power supplies, DMM, electronic loads",
    "Protocol Configurator - CAN, LIN, RS232, RS485, UDS",
    "Barcode and QR Code Support - 2D/3D traceability",
    "Production Traceability - Complete test data logging",
  ],
  provider: {
    "@type": "Organization",
    name: "Micrologic",
    url: "https://www.micrologicglobal.com",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "35",
  },
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is MTS Software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MTS (Micrologic Test & Measurement Software) is a comprehensive, user-friendly application for test and measurement designed for PCBA testing and box-build verification. It offers flexibility, integration with industrial communication protocols, and complete production traceability.",
      },
    },
    {
      "@type": "Question",
      name: "What communication protocols does MTS support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MTS supports CAN, LIN, RS232, RS485, and UDS communication protocols, along with digital I/O and various measurement device interfaces for comprehensive test coverage.",
      },
    },
    {
      "@type": "Question",
      name: "What are the main features of MTS Software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MTS includes Device Configuration, Tool Monitoring, Test Edit (sequence editor), Auto Run (automated execution), User Management (role-based access), and comprehensive Reports for measurements, defects, and production summaries.",
      },
    },
    {
      "@type": "Question",
      name: "Does MTS support production traceability?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, MTS supports barcode and QR code scanning (2D/3D) for complete production traceability, linking test results to serial numbers and providing comprehensive test data logging.",
      },
    },
    {
      "@type": "Question",
      name: "What types of devices can MTS configure and control?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MTS can configure and control power supplies, digital multimeters (DMM), electronic loads, digital I/O devices, and various measurement instruments through its hardware configurator.",
      },
    },
    {
      "@type": "Question",
      name: "Is MTS suitable for both PCBA and box-build testing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, MTS is designed for application areas ranging from PCBA testing to box-build level assembly verification, making it versatile for various production testing needs.",
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
      name: "MTS Software",
      item: "https://www.micrologicglobal.com/products/mts-test-software",
    },
  ],
};

export default function MTSSoftwarePage() {
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
      <MtsSoftware />
    </>
  );
}
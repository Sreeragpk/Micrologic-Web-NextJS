import RFShielded from "@/components/RFShielded";

// Next.js SEO Metadata
export const metadata = {
  title: "RF Shielded Test Chambers | EMC/EMI Testing Solutions | Micrologic",
  description:
    "Professional-grade RF shielded test chambers for EMC compliance, EMI testing, antenna measurements, and wireless device certification. Custom configurations with ≥90 dB shielding effectiveness.",
  keywords: [
    "RF shielded chamber",
    "RF test chamber",
    "EMC test chamber",
    "EMI shielded room",
    "electromagnetic shielding",
    "RF enclosure",
    "Faraday cage",
    "shielded enclosure",
    "EMC compliance testing",
    "antenna test chamber",
    "wireless device testing",
    "RF isolation chamber",
    "electromagnetic interference",
    "shielding effectiveness",
    "RF attenuation",
    "EMC/EMI testing",
    "radio frequency shielding",
    "test chamber manufacturer",
    "custom RF chamber",
    "Micrologic RF solutions",
  ],
  authors: [{ name: "Micrologic" }],
  creator: "Micrologic",
  publisher: "Micrologic",

  // Open Graph
  openGraph: {
    title: "RF Shielded Test Chambers | Professional EMC Testing Solutions",
    description:
      "Professional-grade RF shielded chambers with ≥90 dB attenuation. Custom configurations for EMC compliance, antenna testing, and wireless device certification.",
    url: "https://www.micrologicglobal.com/products/rf-shielded-test-enclosures",
    siteName: "Micrologic",
    images: [
      {
        url: "/assets/RF Chamber.webp",
        width: 1200,
        height: 630,
        alt: "RF Shielded Test Chamber - Professional Installation",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "RF Shielded Test Chambers | EMC/EMI Testing Solutions",
    description:
      "Professional-grade RF shielded chambers with ≥90 dB attenuation. Custom configurations for EMC compliance and wireless device testing.",
    images: ["/assets/RF Chamber.webp"],
  },

  // Canonical URL
  alternates: {
    canonical: "https://www.micrologicglobal.com/products/rf-shielded-test-enclosures",
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

// JSON-LD Structured Data for Product
const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "RF Shielded Test Chamber",
  description:
    "Professional-grade electromagnetic shielding solutions engineered for precision testing, EMC compliance, antenna measurements, and research applications. Features multi-layer panel construction with precision gaskets ensuring consistent attenuation across broad frequency ranges.",
  brand: {
    "@type": "Brand",
    name: "Micrologic",
  },
  manufacturer: {
    "@type": "Organization",
    name: "Micrologic",
    url: "https://www.micrologicglobal.com",
  },
  image: [
    "https://www.micrologicglobal.com/assets/RF Chamber.webp",
    "https://www.micrologicglobal.com/assets/RF chamber -Switch.webp",
  ],
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    price: "0",
    priceValidUntil: "2025-12-31",
    availability: "https://schema.org/InStock",
    description: "Contact for custom quote based on specifications",
  },
  additionalProperty: [
    {
      "@type": "PropertyValue",
      name: "Shielding Effectiveness",
      value: "≥90 dB typical, >100 dB available",
    },
    {
      "@type": "PropertyValue",
      name: "Frequency Range",
      value: "10 MHz – 18 GHz (customizable)",
    },
    {
      "@type": "PropertyValue",
      name: "Standard Panel Sizes",
      value: "1m × 1m, 2m × 2m (custom available)",
    },
    {
      "@type": "PropertyValue",
      name: "Door System",
      value: "Multi-lip RF gasket with compression locks",
    },
    {
      "@type": "PropertyValue",
      name: "Ventilation",
      value: "Filtered HVAC with EMI suppression",
    },
    {
      "@type": "PropertyValue",
      name: "Power Filtering",
      value: "Multi-stage filtered feedthroughs",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "28",
    bestRating: "5",
    worstRating: "1",
  },
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an RF shielded test chamber?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An RF shielded test chamber is a controlled electromagnetic environment that blocks external interference and contains emissions. It is essential for EMC/EMI testing, antenna measurements, wireless device certification, and sensitive R&D applications.",
      },
    },
    {
      "@type": "Question",
      name: "What shielding effectiveness do your RF chambers provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our RF shielded chambers provide ≥90 dB typical shielding effectiveness, with configurations available exceeding 100 dB. Multi-layer panel construction with precision gaskets ensures consistent attenuation across broad frequency ranges.",
      },
    },
    {
      "@type": "Question",
      name: "What frequency range do RF chambers cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our standard RF chambers cover 10 MHz to 18 GHz frequency range. Custom configurations are available to meet specific application requirements for both lower and higher frequency ranges.",
      },
    },
    {
      "@type": "Question",
      name: "Can RF chambers be customized to specific requirements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all our RF shielded chambers can be tailored to your specific testing requirements, facility constraints, and performance objectives. We offer custom engineering for dimensions, shielding performance, and system integration.",
      },
    },
    {
      "@type": "Question",
      name: "What is included in the RF chamber installation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our turnkey installation includes detailed CAD drawings, precision-manufactured panels and doors, filtered power distribution, HVAC systems with EMI suppression, professional on-site assembly, performance verification testing, and comprehensive documentation with training.",
      },
    },
    {
      "@type": "Question",
      name: "What applications are RF shielded chambers used for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "RF shielded chambers are used for EMC/EMI compliance testing, antenna measurements and characterization, wireless device certification, sensitive R&D applications, military and aerospace testing, and medical device testing.",
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
      name: "RF Shielded Test Enclosures",
      item: "https://www.micrologicglobal.com/products/rf-shielded-test-enclosures",
    },
  ],
};

// Service Schema
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "RF Shielded Chamber Design & Installation",
  provider: {
    "@type": "Organization",
    name: "Micrologic",
    url: "https://www.micrologicglobal.com",
  },
  description:
    "Complete turnkey RF shielded chamber solutions including engineering, manufacturing, installation, and commissioning for EMC testing and research applications.",
  areaServed: {
    "@type": "Place",
    name: "Worldwide",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "RF Shielding Solutions",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Engineering & Planning",
          description: "Detailed CAD drawings, site assessments, and comprehensive project plans",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Precision Manufacturing",
          description: "Custom-fabricated panels, doors, and components built to exact specifications",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Professional Installation",
          description: "Expert on-site assembly, alignment, and integration by experienced technical teams",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Performance Verification",
          description: "Complete attenuation testing across specified frequency ranges with certified measurements",
        },
      },
    ],
  },
};

export default function RFShieldedPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <RFShielded />
    </>
  );
}
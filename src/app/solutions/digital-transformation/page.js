import DigitalTransformation from "@/components/DigitalTransformation";

// Next.js SEO Metadata
export const metadata = {
  title: "Digital Transformation & Industry 4.0 Solutions | FactEyes Platform | Micrologic",
  description:
    "Transform your manufacturing with FactEyes - our cloud-based analytics platform. Real-time OEE monitoring, SPC analysis, bottleneck detection, and predictive maintenance powered by Azure and Power BI.",
  keywords: [
    "digital transformation",
    "Industry 4.0",
    "FactEyes",
    "manufacturing analytics",
    "OEE dashboard",
    "SPC analysis",
    "Power BI manufacturing",
    "Azure IoT",
    "real-time monitoring",
    "predictive maintenance",
    "bottleneck analysis",
    "smart factory",
    "IIoT platform",
    "production analytics",
    "Micrologic FactEyes",
    "CPK analysis",
    "gauge R&R",
    "manufacturing intelligence",
  ],
  authors: [{ name: "Micrologic" }],
  creator: "Micrologic",
  publisher: "Micrologic",

  // Open Graph
  openGraph: {
    title: "Digital Transformation & Industry 4.0 Solutions | FactEyes Platform | Micrologic",
    description:
      "Transform your manufacturing with FactEyes - our cloud-based analytics platform. Real-time OEE monitoring, SPC analysis, bottleneck detection, and predictive maintenance.",
    url: "https://www.micrologicglobal.com/digital-transformation",
    siteName: "Micrologic",
    images: [
      {
        url: "/assets/digitalimagefinal.webp",
        width: 1200,
        height: 630,
        alt: "FactEyes Digital Transformation Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Digital Transformation & Industry 4.0 Solutions | FactEyes | Micrologic",
    description:
      "Transform your manufacturing with FactEyes - cloud-based analytics platform with real-time OEE, SPC analysis, and predictive maintenance.",
    images: ["/assets/digitalimagefinal.webp"],
  },

  // Canonical URL
  alternates: {
    canonical: "https://www.micrologicglobal.com/digital-transformation",
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

// JSON-LD Structured Data for Software/SaaS Product
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "FactEyes Manufacturing Analytics Platform",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Cloud-based",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Contact for custom pricing",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "50",
  },
  description:
    "FactEyes is a comprehensive manufacturing intelligence platform that provides real-time analytics, OEE monitoring, SPC analysis, bottleneck detection, and predictive maintenance capabilities powered by Azure cloud and Power BI.",
  features: [
    "Real-time OEE Dashboard",
    "Statistical Process Control (SPC)",
    "Bottleneck Analysis",
    "Predictive Maintenance",
    "Power BI Integration",
    "Azure Cloud Platform",
    "IoT Sensor Integration",
    "Live Data Streaming",
    "Custom KPI Tracking",
    "Quality Analytics",
  ],
  screenshot: [
    "https://www.micrologicglobal.com/assets/oee-dashboard.png",
    "https://www.micrologicglobal.com/assets/cpk-analysis.png",
    "https://www.micrologicglobal.com/assets/facteyes-dashboard.png",
  ],
  provider: {
    "@type": "Organization",
    name: "Micrologic",
    url: "https://www.micrologicglobal.com",
  },
};

// Additional Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Micrologic",
  url: "https://www.micrologicglobal.com",
  logo: "https://www.micrologicglobal.com/logo.png",
  description:
    "Leading provider of digital transformation and Industry 4.0 solutions for manufacturing",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9663-521132",
    contactType: "Sales",
    email: "info@micrologicglobal.com",
    availableLanguage: ["English"],
  },
  sameAs: [
    "https://www.linkedin.com/company/micrologic",
    "https://twitter.com/micrologic",
  ],
};

// Service Schema
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Digital Transformation & Manufacturing Analytics",
  provider: {
    "@type": "Organization",
    name: "Micrologic",
  },
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Transformation Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "FactEyes Analytics Platform",
          description: "Cloud-based manufacturing intelligence platform",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "OEE Monitoring",
          description: "Real-time Overall Equipment Effectiveness tracking",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Predictive Maintenance",
          description: "AI-powered predictive maintenance solutions",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Statistical Process Control",
          description: "Advanced SPC analysis with Cp, Cpk, Cg, Cgk tracking",
        },
      },
    ],
  },
};

export default function DigitalTransformationPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <DigitalTransformation />
    </>
  );
}
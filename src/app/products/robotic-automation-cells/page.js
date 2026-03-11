import RoboticCells from "@/components/RoboticCells";
import Script from "next/script";

// Next.js SEO Metadata
export const metadata = {
  title: "Robotic Assembly Cells | Automated Screwing & Dispensing | Micrologic",
  description:
    "Advanced robotic assembly cells for precision automation. Features automated screwing with torque control, sealant dispensing, vision inspection, and 99.9% quality rate. 40% faster production with 24/7 operation capability.",
  keywords: [
    "robotic assembly cells",
    "automated assembly",
    "robotic screwing",
    "precision screwing",
    "torque control",
    "sealant dispensing",
    "vision inspection",
    "robotic automation",
    "industrial robots",
    "assembly automation",
    "quality inspection",
    "automated manufacturing",
    "collaborative robots",
    "flexible automation",
    "MES integration",
    "production automation",
    "Micrologic robotics",
    "defect detection",
    "assembly line automation",
    "smart manufacturing",
  ],
  authors: [{ name: "Micrologic" }],
  creator: "Micrologic",
  publisher: "Micrologic",

  // Open Graph
  openGraph: {
    title: "Robotic Assembly Cells | Automated Screwing & Dispensing | Micrologic",
    description:
      "Advanced robotic assembly cells with precision screwing, sealant dispensing, and vision inspection. 40% faster production, 99.9% quality rate, 24/7 operation.",
    url: "https://www.micrologicglobal.com/products/robotic-assembly-cells",
    siteName: "Micrologic",
    images: [
      {
        url: "/assets/Robotic Screwing.JPG",
        width: 1200,
        height: 630,
        alt: "Robotic Assembly Cell with Precision Screwing",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Robotic Assembly Cells | Micrologic",
    description:
      "Advanced robotic assembly with precision screwing, dispensing, and vision inspection. 99.9% quality rate.",
    images: ["/assets/Robotic Screwing.JPG"],
  },

  // Canonical URL
  alternates: {
    canonical: "https://www.micrologicglobal.com/products/robotic-assembly-cells",
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
  name: "Robotic Assembly Cells",
  description:
    "Advanced robotic assembly cells featuring precision automation for screwing, dispensing, and inspection with 40% faster production and 99.9% quality rate.",
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
    ratingCount: "47",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are robotic assembly cells?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Robotic assembly cells are automated manufacturing stations that use high-precision robotic arms to perform complex assembly tasks with consistent accuracy, including screwing, dispensing, inspection, and material handling. They reduce human error while increasing throughput and operating 24/7.",
      },
    },
    {
      "@type": "Question",
      name: "What is the accuracy of robotic screwing systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our robotic screwing systems provide torque control ranging from 0.1 to 5.0 Nm with ±2% accuracy, positioning accuracy of ±0.05mm, and cycle times of 3-8 seconds per assembly operation with real-time monitoring.",
      },
    },
    {
      "@type": "Question",
      name: "What industries use robotic assembly cells?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Robotic assembly cells are used across electronics assembly, automotive components, medical devices (ISO 7 clean room compatible), and consumer products manufacturing with flexible changeover capabilities.",
      },
    },
    {
      "@type": "Question",
      name: "Can robotic cells integrate with existing production lines?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our robotic cells seamlessly integrate with existing production lines, PLCs, and MES systems. They support major industrial protocols and provide real-time data logging with full traceability.",
      },
    },
    {
      "@type": "Question",
      name: "What safety features do robotic assembly cells have?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our robotic cells include advanced safety features such as light curtains, emergency stops, collaborative robot technology, safety PLCs, and compliance with ISO 10218 and CE safety standards for operator protection.",
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
      name: "Robotic Assembly Cells",
      item: "https://www.micrologicglobal.com/products/robotic-assembly-cells",
    },
  ],
};

export default function RoboticAssemblyCellsPage() {
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
      <RoboticCells />
    </>
  );
}
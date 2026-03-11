import BONFixtures from "@/components/BONFixtures";

export const metadata = {
  title: "BON Test Fixtures | Professional Board-On Testing Solutions | Micrologic",
  description:
    "Professional Board-On (BON) testing fixtures engineered for precision, reliability, and efficiency. Advanced pneumatic clamping, high-speed testing, and modular architecture for superior PCB testing.",
  keywords: [
    "BON test fixtures",
    "board-on-nail testing",
    "PCB test fixtures",
    "pneumatic test fixtures",
    "flying probe alternative",
    "ICT fixtures",
    "in-circuit test",
    "functional test fixtures",
    "PCB testing equipment",
    "pogo pin fixtures",
    "bed of nails tester",
    "test fixture design",
    "manufacturing test",
    "quality control testing",
    "automated testing",
    "production testing",
    "electronics testing",
    "test point access",
    "fixture customization",
    "Micrologic test solutions",
  ],
  authors: [{ name: "Micrologic" }],
  creator: "Micrologic",
  publisher: "Micrologic",

  openGraph: {
    title: "BON Test Fixtures | Professional PCB Testing Solutions",
    description:
      "Advanced Board-On testing fixtures with 99.98% accuracy, 100K+ cycle life, and modular design. Industry 4.0 compatible.",
    url: "https://www.micrologicglobal.com/products/bon-test-fixtures",
    siteName: "Micrologic",
    images: [
      {
        url: "/assets/StationBONFixture.JPG",
        width: 1200,
        height: 630,
        alt: "BON Test Fixture Station - Professional PCB Testing",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "BON Test Fixtures | Professional PCB Testing Solutions",
    description:
      "Advanced Board-On testing fixtures with 99.98% accuracy and 100K+ cycle life. Industry 4.0 compatible.",
    images: ["/assets/StationBONFixture.JPG"],
  },

  alternates: {
    canonical: "https://www.micrologicglobal.com/products/bon-test-fixtures",
  },

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

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "BON Test Fixtures",
  description:
    "Professional Board-On testing fixtures engineered for precision, reliability, and efficiency. Features advanced pneumatic clamping system, high-speed pogo pins, modular design, and laser-guided positioning.",
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
    "https://www.micrologicglobal.com/assets/StationBONFixture.JPG",
    "https://www.micrologicglobal.com/assets/Stn-BON.JPG",
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
      name: "Test Accuracy",
      value: "99.98%",
    },
    {
      "@type": "PropertyValue",
      name: "Cycle Life",
      value: "100,000+ cycles",
    },
    {
      "@type": "PropertyValue",
      name: "Setup Time",
      value: "Less than 30 seconds",
    },
    {
      "@type": "PropertyValue",
      name: "Board Sizes",
      value: "50-450mm",
    },
    {
      "@type": "PropertyValue",
      name: "Contact Force",
      value: "50-200g adjustable",
    },
    {
      "@type": "PropertyValue",
      name: "Positioning Accuracy",
      value: "±0.05mm",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "35",
    bestRating: "5",
    worstRating: "1",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a BON (Board-On-Nail) test fixture?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A BON test fixture is a specialized testing system that uses an array of spring-loaded pins (pogo pins) to make electrical contact with test points on a PCB. It enables rapid, automated testing of assembled circuit boards with high accuracy and repeatability.",
      },
    },
    {
      "@type": "Question",
      name: "What is the accuracy of BON test fixtures?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our BON test fixtures achieve 99.98% test accuracy with positioning accuracy of ±0.05mm. The high-speed pogo pins feature gold-plated contacts rated for over 100,000 test cycles.",
      },
    },
    {
      "@type": "Question",
      name: "What board sizes can BON fixtures accommodate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our modular BON fixtures can accommodate board sizes ranging from 50mm to 450mm. The interchangeable test modules allow for various board sizes and test point configurations.",
      },
    },
    {
      "@type": "Question",
      name: "How long does setup take for BON test fixtures?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Setup time is less than 30 seconds thanks to the laser-guided positioning system and tool-free component replacement design. The pneumatic clamping system ensures rapid board loading and unloading.",
      },
    },
    {
      "@type": "Question",
      name: "Are BON fixtures compatible with Industry 4.0?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our BON fixtures are Industry 4.0 compatible with USB 3.0 and Ethernet interfaces. Integrated sensors provide real-time monitoring of contact resistance, temperature, and test status.",
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
      name: "BON Test Fixtures",
      item: "https://www.micrologicglobal.com/products/bon-test-fixtures",
    },
  ],
};

export default function BONFixturesPage() {
  return (
    <>
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
      <BONFixtures />
    </>
  );
}
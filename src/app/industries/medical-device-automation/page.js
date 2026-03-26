// import MedicalDevices from "@/components/MedicalDevices";

// // Next.js SEO Metadata (replaces your Seo component)
// export const metadata = {
//   title: "Medical Device Automation & Inspection | Micrologic",
//   description:
//     "Automation solutions for medical device assembly, inspection and testing including sensors, safety syringes, vials and orthopaedic components with full traceability.",
//   keywords: [
//     "medical device automation",
//     "medical assembly systems",
//     "FDA compliant automation",
//     "GAMP validation",
//     "medical inspection systems",
//     "cleanroom automation",
//     "medical traceability",
//     "Micrologic",
//   ],
//   authors: [{ name: "Micrologic" }],
//   creator: "Micrologic",
//   publisher: "Micrologic",

//   // Open Graph
//   openGraph: {
//     title: "Medical Device Automation & Inspection | Micrologic",
//     description:
//       "Automation solutions for medical device assembly, inspection and testing including sensors, safety syringes, vials and orthopaedic components with full traceability.",
//     url: "https://www.micrologicglobal.com/industries/medical",
//     siteName: "Micrologic",
//     images: [
//       {
//         url: "/assets/med.png",
//         width: 1200,
//         height: 630,
//         alt: "Medical Device Automation Systems",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },

//   // Twitter Card
//   twitter: {
//     card: "summary_large_image",
//     title: "Medical Device Automation & Inspection | Micrologic",
//     description:
//       "Automation solutions for medical device assembly, inspection and testing including sensors, safety syringes, vials and orthopaedic components with full traceability.",
//     images: ["/assets/med.png"],
//   },

//   // Canonical URL
//   alternates: {
//     canonical: "https://www.micrologicglobal.com/industries/medical",
//   },

//   // Robots
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
// };

// export default function MedicalPage() {
//   return <MedicalDevices />;
// }
import MedicalDevices from "@/components/MedicalDevices";

export const metadata = {
  title:
    "Medical Device Automation Systems | Assembly, Inspection & Testing | Micrologic",

  description:
    "Micrologic provides automation solutions for medical device manufacturing including assembly, vision inspection, traceability systems and regulatory-compliant testing.",

  keywords: [
    "medical device automation",
    "medical assembly automation",
    "medical device inspection systems",
    "FDA compliant automation",
    "GAMP validated automation",
    "cleanroom automation systems",
  ],

  alternates: {
    canonical:
      "https://www.micrologicglobal.com/industries/medical-device-automation",
  },

  openGraph: {
    title: "Medical Device Automation Systems | Micrologic",
    description:
      "Automation systems for medical device assembly, inspection, traceability and regulatory compliant manufacturing.",
    url:
      "https://www.micrologicglobal.com/industries/medical-device-automation",
    siteName: "Micrologic",
    images: [
      {
        url: "https://www.micrologicglobal.com/assets/med.png",
        width: 1200,
        height: 630,
        alt: "Medical Device Automation Systems",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Medical Device Automation | Micrologic",
    description:
      "Automation solutions for medical device assembly, inspection and compliance testing.",
    images: ["https://www.micrologicglobal.com/assets/med.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function MedicalPage() {

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
        name: "Medical Device Automation",
        item:
          "https://www.micrologicglobal.com/industries/medical-device-automation",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Medical Device Automation Solutions",
    description:
      "Automation systems for medical device manufacturing including assembly systems, vision inspection, testing, packaging and traceability.",
    provider: {
      "@type": "Organization",
      name: "Micrologic",
      url: "https://www.micrologicglobal.com",
    },
    serviceType: "Medical Device Manufacturing Automation",
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    url:
      "https://www.micrologicglobal.com/industries/medical-device-automation",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is medical device automation?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Medical device automation uses automated assembly, inspection and testing systems to manufacture medical devices with high precision and regulatory compliance.",
        },
      },
      {
        "@type": "Question",
        name: "Why is traceability important in medical manufacturing?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Traceability ensures every device can be tracked through production, enabling regulatory compliance, quality control and patient safety.",
        },
      },
      {
        "@type": "Question",
        name: "What standards apply to medical automation systems?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Medical automation systems must comply with standards such as FDA 21 CFR Part 11, GAMP 5 validation and ISO medical device manufacturing regulations.",
        },
      },
    ],
  };

  return (
    <>
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <MedicalDevices />
    </>
  );
}
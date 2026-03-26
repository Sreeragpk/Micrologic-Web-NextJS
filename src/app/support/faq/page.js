// app/support/faq/page.js
import ProfessionalFAQ from "@/components/FAQ";

export const metadata = {
  title: "FAQ | Automation, Testing & Traceability Questions",
  description:
    "Find answers to frequently asked questions about Micrologic's automation solutions, testing systems, vision inspection, assembly lines, traceability, Industry 4.0, and support services.",
  keywords: [
    "automation FAQ",
    "testing solutions FAQ",
    "manufacturing automation questions",
    "vision inspection FAQ",
    "assembly automation FAQ",
    "traceability FAQ",
    "Industry 4.0 FAQ",
    "Micrologic FAQ",
  ],
  alternates: {
    canonical: "https://www.micrologicglobal.com/support/faq",
  },
  openGraph: {
    title: "FAQ | Automation & Testing Questions | Micrologic",
    description:
      "Answers to common questions about automated assembly, testing, vision inspection, traceability, and Industry 4.0 solutions.",
    url: "https://www.micrologicglobal.com/support/faq",
    siteName: "Micrologic",
    images: [
      {
        url: "https://www.micrologicglobal.com/assets/micrologic.png",
        width: 1200,
        height: 630,
        alt: "Micrologic FAQ — Automation and testing solutions questions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | Micrologic Automation Solutions",
    description:
      "Find answers about automated assembly, testing, traceability, and Industry 4.0 solutions.",
    images: ["https://www.micrologicglobal.com/assets/micrologic.png"],
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

// FAQ Schema — matches visible content on this page
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does your company specialize in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide end-to-end automation solutions including robotic systems, automated assembly lines, vision inspection systems, and functional testing solutions tailored to manufacturing environments.",
      },
    },
    {
      "@type": "Question",
      name: "Which industries do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve automotive, EV, electronics, medical devices, and industrial manufacturing sectors.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide turnkey automation solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We handle the complete lifecycle from concept design and simulation to manufacturing, installation, commissioning, and after-sales support.",
      },
    },
    {
      "@type": "Question",
      name: "What types of automation solutions do you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer robotic assembly, robotic screw fixing, dispensing, vision inspection, palletizing, material handling, and special-purpose machines (SPMs).",
      },
    },
    {
      "@type": "Question",
      name: "Can your systems integrate with existing machines?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our solutions are designed to seamlessly integrate with legacy machines, PLCs, MES, and ERP systems.",
      },
    },
    {
      "@type": "Question",
      name: "What inspection solutions do you provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer camera-based vision inspection systems for presence checks, dimensional measurement, OCR/OCV, 3D Optical Inspection and defect detection.",
      },
    },
    {
      "@type": "Question",
      name: "Do you use AI-based inspection?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We use AI and deep-learning-based vision systems for complex defect detection and pattern recognition where traditional vision is limited.",
      },
    },
    {
      "@type": "Question",
      name: "What types of testing systems do you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer functional testing, electrical testing, leak testing, vibration testing, end-of-line (EOL) testing, and durability testing systems.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer traceability solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide end-to-end traceability using barcodes, RFID, and vision-based identification across assembly and test lines.",
      },
    },
    {
      "@type": "Question",
      name: "Do you support Industry 4.0 and smart factory concepts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our systems are Industry 4.0 ready with connectivity for MES, cloud platforms, AI analytics, and digital twins.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to deliver an automation project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Project timelines vary based on complexity, but we typically deliver within 8–16 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "What kind of after-sales support do you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer AMC, remote support, on-site service, and spare parts support to ensure maximum uptime.",
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
      name: "FAQ",
      item: "https://www.micrologicglobal.com/support/faq",
    },
  ],
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <ProfessionalFAQ />
    </>
  );
}
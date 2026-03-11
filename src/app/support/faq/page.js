import ProfessionalFAQ from "@/components/FAQ";

// Next.js SEO Metadata
export const metadata = {
  title: "Frequently Asked Questions | Automation Solutions | Micrologic",
  description:
    "Find answers to common questions about our automation solutions, robotic systems, vision inspection, testing solutions, and Industry 4.0 services for manufacturing.",
  keywords: [
    "automation FAQ",
    "robotic automation questions",
    "vision inspection systems",
    "assembly automation",
    "testing solutions",
    "Industry 4.0",
    "manufacturing automation",
    "turnkey automation",
    "collaborative robots",
    "Micrologic support",
    "automation services",
  ],
  authors: [{ name: "Micrologic" }],
  creator: "Micrologic",
  publisher: "Micrologic",

  // Open Graph
  openGraph: {
    title: "Frequently Asked Questions | Automation Solutions | Micrologic",
    description:
      "Find answers to common questions about our automation solutions, robotic systems, vision inspection, testing solutions, and Industry 4.0 services for manufacturing.",
    url: "https://www.micrologicglobal.com/faq",
    siteName: "Micrologic",
    images: [
      {
        url: "/assets/faq-automation.jpg",
        width: 1200,
        height: 630,
        alt: "Micrologic Automation Solutions FAQ",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions | Automation Solutions | Micrologic",
    description:
      "Find answers to common questions about our automation solutions, robotic systems, vision inspection, testing solutions, and Industry 4.0 services for manufacturing.",
    images: ["/assets/faq-automation.jpg"],
  },

  // Canonical URL
  alternates: {
    canonical: "https://www.micrologicglobal.com/faq",
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

// JSON-LD Structured Data for FAQ Page
const jsonLd = {
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
        text: "We offer robotic assembly, Robotic screw fixing, dispensing, Vision Inspection, palletizing, material handling, and special-purpose machines (SPMs).",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with collaborative robots (cobots)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We integrate both industrial robots and collaborative robots depending on safety, space, and application requirements.",
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
        text: "We offer functional testing, electrical testing, leak testing, Vibration Testing, end-of-line (EOL) testing, and durability testing systems.",
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
  ],
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProfessionalFAQ />
    </>
  );
}
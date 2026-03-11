import MedicalDevices from "@/components/MedicalDevices";

// Next.js SEO Metadata (replaces your Seo component)
export const metadata = {
  title: "Medical Device Automation & Inspection | Micrologic",
  description:
    "Automation solutions for medical device assembly, inspection and testing including sensors, safety syringes, vials and orthopaedic components with full traceability.",
  keywords: [
    "medical device automation",
    "medical assembly systems",
    "FDA compliant automation",
    "GAMP validation",
    "medical inspection systems",
    "cleanroom automation",
    "medical traceability",
    "Micrologic",
  ],
  authors: [{ name: "Micrologic" }],
  creator: "Micrologic",
  publisher: "Micrologic",

  // Open Graph
  openGraph: {
    title: "Medical Device Automation & Inspection | Micrologic",
    description:
      "Automation solutions for medical device assembly, inspection and testing including sensors, safety syringes, vials and orthopaedic components with full traceability.",
    url: "https://www.micrologicglobal.com/industries/medical",
    siteName: "Micrologic",
    images: [
      {
        url: "/assets/med.png",
        width: 1200,
        height: 630,
        alt: "Medical Device Automation Systems",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Medical Device Automation & Inspection | Micrologic",
    description:
      "Automation solutions for medical device assembly, inspection and testing including sensors, safety syringes, vials and orthopaedic components with full traceability.",
    images: ["/assets/med.png"],
  },

  // Canonical URL
  alternates: {
    canonical: "https://www.micrologicglobal.com/industries/medical",
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

export default function MedicalPage() {
  return <MedicalDevices />;
}
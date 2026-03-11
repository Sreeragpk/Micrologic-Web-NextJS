import { Metadata } from "next";
import Automotive from "@/components/AutomotiveDetail";

// Next.js SEO Metadata (replaces your Seo component)
export const metadata = {
  title: "Automotive Automation Systems | Micrologic",
  description:
    "Advanced automotive automation solutions for assembly, inspection, EV battery manufacturing, and electronics testing with full traceability.",
  keywords: [
    "automotive automation",
    "assembly systems",
    "EV battery manufacturing",
    "automotive electronics testing",
    "ADAS components",
    "automotive inspection systems",
    "Micrologic",
  ],
  authors: [{ name: "Micrologic" }],
  creator: "Micrologic",
  publisher: "Micrologic",
  
  // Open Graph
  openGraph: {
    title: "Automotive Automation Systems | Micrologic",
    description:
      "Advanced automotive automation solutions for assembly, inspection, EV battery manufacturing, and electronics testing with full traceability.",
    url: "https://www.micrologicglobal.com/industries/automotive",
    siteName: "Micrologic",
    images: [
      {
        url: "/assets/car.webp",
        width: 1200,
        height: 630,
        alt: "Automotive Automation Systems",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Automotive Automation Systems | Micrologic",
    description:
      "Advanced automotive automation solutions for assembly, inspection, EV battery manufacturing, and electronics testing with full traceability.",
    images: ["/assets/car.webp"],
  },

  // Canonical URL
  alternates: {
    canonical: "https://www.micrologicglobal.com/industries/automotive",
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

export default function AutomotivePage() {
  return <Automotive />;
}
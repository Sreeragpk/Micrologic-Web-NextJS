import Electronics from "@/components/Electronics";

// Next.js SEO Metadata
export const metadata = {
  title: "Electronics Assembly & Test Automation | Micrologic",
  description:
    "Automation systems for electronics assembly, inspection and testing including energy meters, solar controllers, consumer electronics and telecom devices.",
  keywords: [
    "electronics automation",
    "PCB assembly",
    "electronics testing",
    "AOI inspection",
    "consumer electronics manufacturing",
    "telecom device assembly",
    "smart energy meters",
    "Micrologic",
  ],
  authors: [{ name: "Micrologic" }],
  creator: "Micrologic",
  publisher: "Micrologic",

  // Open Graph
  openGraph: {
    title: "Electronics Assembly & Test Automation | Micrologic",
    description:
      "Automation systems for electronics assembly, inspection and testing including energy meters, solar controllers, consumer electronics and telecom devices.",
    url: "https://www.micrologicglobal.com/industries/electronics",
    siteName: "Micrologic",
    images: [
      {
        url: "/assets/electronicsandelectrical.jpg",
        width: 1200,
        height: 630,
        alt: "Electronics Assembly Automation Systems",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Electronics Assembly & Test Automation | Micrologic",
    description:
      "Automation systems for electronics assembly, inspection and testing including energy meters, solar controllers, consumer electronics and telecom devices.",
    images: ["/assets/electronicsandelectrical.jpg"],
  },

  // Canonical URL
  alternates: {
    canonical: "https://www.micrologicglobal.com/industries/electronics",
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

export default function ElectronicsPage() {
  return <Electronics />;
}
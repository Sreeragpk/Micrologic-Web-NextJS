import ElectricVehicles from "@/components/ElectricVehicles";

// Next.js SEO Metadata
export const metadata = {
  title: "EV Automation & Test Systems | Micrologic",
  description:
    "Automation and test systems for EV components including battery packs, BMS, motor controllers, VCU, on-board chargers, and DC-DC converters.",
  keywords: [
    "EV automation",
    "electric vehicle testing",
    "battery pack assembly",
    "BMS testing",
    "motor controller automation",
    "EV component manufacturing",
    "electric vehicle assembly",
    "Micrologic",
  ],
  authors: [{ name: "Micrologic" }],
  creator: "Micrologic",
  publisher: "Micrologic",

  // Open Graph
  openGraph: {
    title: "EV Automation & Test Systems | Micrologic",
    description:
      "Automation and test systems for EV components including battery packs, BMS, motor controllers, VCU, on-board chargers, and DC-DC converters.",
    url: "https://www.micrologicglobal.com/industries/ev",
    siteName: "Micrologic",
    images: [
      {
        url: "/assets/evfinalimg.webp",
        width: 1200,
        height: 630,
        alt: "Electric Vehicle Automation Systems",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "EV Automation & Test Systems | Micrologic",
    description:
      "Automation and test systems for EV components including battery packs, BMS, motor controllers, VCU, on-board chargers, and DC-DC converters.",
    images: ["/assets/evfinalimg.webp"],
  },

  // Canonical URL
  alternates: {
    canonical: "https://www.micrologicglobal.com/industries/ev",
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

export default function EVPage() {
  return <ElectricVehicles />;
}
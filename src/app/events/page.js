import EventsExhibitions from "@/components/EventsExhibitions";

// Next.js SEO Metadata
export const metadata = {
  title: "Productronica 2025 Highlights | Events & Exhibitions | Micrologic",
  description:
    "Relive Micrologic's presence at Productronica 2025 – live automation demos, electronics manufacturing solutions, ICT/FCT/RF test automation, cobot handling with Bosch Rexroth, palletized conveyors, SCARA cells and smart factory integrations from Hall 4, Booth G85 at BIEC, Bengaluru.",
  keywords: [
    "Productronica 2025",
    "electronics manufacturing automation",
    "test automation ICT FCT RF",
    "end of line testers",
    "cobot integration",
    "Bosch Rexroth cobot",
    "palletized conveyor systems",
    "SCARA automation",
    "auto feeders",
    "smart manufacturing exhibition",
    "Micrologic events",
  ],
  authors: [{ name: "Micrologic" }],
  creator: "Micrologic",
  publisher: "Micrologic",

  // Open Graph
  openGraph: {
    title: "Productronica 2025 Highlights | Events & Exhibitions | Micrologic",
    description:
      "Relive Micrologic's presence at Productronica 2025 – live automation demos, electronics manufacturing solutions, ICT/FCT/RF test automation, cobot handling with Bosch Rexroth, palletized conveyors, SCARA cells and smart factory integrations from Hall 4, Booth G85 at BIEC, Bengaluru.",
    url: "https://www.micrologicglobal.com/events",
    siteName: "Micrologic",
    images: [
      {
        url: "/assets/exhibition-thumbnail.jpg", // Create a video thumbnail
        width: 1200,
        height: 630,
        alt: "Productronica 2025 Event Highlights",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Productronica 2025 Highlights | Events & Exhibitions | Micrologic",
    description:
      "Relive Micrologic's presence at Productronica 2025 – live automation demos, electronics manufacturing solutions, ICT/FCT/RF test automation, cobot handling with Bosch Rexroth, palletized conveyors, SCARA cells and smart factory integrations from Hall 4, Booth G85 at BIEC, Bengaluru.",
    images: ["/assets/exhibition-thumbnail.jpg"],
  },

  // Canonical URL
  alternates: {
    canonical: "https://www.micrologicglobal.com/events",
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

export default function EventsPage() {
  return <EventsExhibitions />;
}
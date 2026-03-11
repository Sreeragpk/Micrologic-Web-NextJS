import AboutPage from "@/components/About";

// Next.js SEO Metadata
export const metadata = {
  title: "From Evolution to Excellence | Micrologic Integrated Systems",
  description:
    "Explore Micrologic's journey from evolution to excellence – combining in-house mechanical, electrical, software and system integration expertise to deliver turnkey automation solutions since 2006.",
  keywords: [
    "Micrologic",
    "automation solutions",
    "manufacturing automation",
    "system integration",
    "mechanical engineering",
    "electrical engineering",
    "software development",
    "Industry 4.0",
    "about Micrologic",
  ],
  authors: [{ name: "Micrologic" }],
  creator: "Micrologic",
  publisher: "Micrologic",

  // Open Graph
  openGraph: {
    title: "From Evolution to Excellence | Micrologic Integrated Systems",
    description:
      "Explore Micrologic's journey from evolution to excellence – combining in-house mechanical, electrical, software and system integration expertise to deliver turnkey automation solutions since 2006.",
    url: "https://www.micrologicglobal.com/about",
    siteName: "Micrologic",
    images: [
      {
        url: "/assets/office.png",
        width: 1200,
        height: 630,
        alt: "Micrologic Office and Team",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "From Evolution to Excellence | Micrologic Integrated Systems",
    description:
      "Explore Micrologic's journey from evolution to excellence – combining in-house mechanical, electrical, software and system integration expertise to deliver turnkey automation solutions since 2006.",
    images: ["/assets/office.png"],
  },

  // Canonical URL
  alternates: {
    canonical: "https://www.micrologicglobal.com/about",
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

export default function About() {
  return <AboutPage />;
}
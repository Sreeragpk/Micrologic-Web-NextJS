import Careers from "@/components/Careers";

// Next.js SEO Metadata
export const metadata = {
  title: "Careers at Micrologic | Automation, Robotics & Software Jobs in Bengaluru",
  description:
    "Join Micrologic Integrated Systems and build the future of automation. We hire Mechanical, Electrical, Electronics, Robotics, Machine Vision, Application Engineers, and .NET/Python/AI-ML Developers for cutting-edge manufacturing projects.",
  keywords: [
    "automation careers",
    "robotics jobs",
    "machine vision engineer",
    "mechanical design engineer jobs",
    "electrical engineer automation",
    "application engineer",
    ".NET developer",
    "Python developer",
    "AI ML engineer",
    "jobs in Bengaluru",
    "Micrologic careers",
  ],
  authors: [{ name: "Micrologic" }],
  creator: "Micrologic",
  publisher: "Micrologic",

  // Open Graph
  openGraph: {
    title: "Careers at Micrologic | Automation, Robotics & Software Jobs in Bengaluru",
    description:
      "Join Micrologic Integrated Systems and build the future of automation. We hire Mechanical, Electrical, Electronics, Robotics, Machine Vision, Application Engineers, and .NET/Python/AI-ML Developers for cutting-edge manufacturing projects.",
    url: "https://www.micrologicglobal.com/careers",
    siteName: "Micrologic",
    images: [
      {
        url: "/assets/team1.jpg",
        width: 1200,
        height: 630,
        alt: "Micrologic Team Working",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Careers at Micrologic | Automation, Robotics & Software Jobs in Bengaluru",
    description:
      "Join Micrologic Integrated Systems and build the future of automation. We hire Mechanical, Electrical, Electronics, Robotics, Machine Vision, Application Engineers, and .NET/Python/AI-ML Developers for cutting-edge manufacturing projects.",
    images: ["/assets/team1.jpg"],
  },

  // Canonical URL
  alternates: {
    canonical: "https://www.micrologicglobal.com/careers",
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

export default function CareersPage() {
  return <Careers />;
}
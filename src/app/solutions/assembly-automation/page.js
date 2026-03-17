// import AssemblyAutomationSection from "@/components/AssemblyAutomationSection";

// export const metadata = {
//   title: "Assembly Automation Solutions | Micrologic Integrated Systems",
//   description:
//     "Micrologic delivers advanced assembly automation solutions including conveyors, robotic automation, rotary indexing and vision inspection systems.",
//   keywords: [
//     "assembly automation systems",
//     "industrial automation",
//     "robotic assembly automation",
//     "vision inspection systems",
//     "manufacturing automation"
//   ],
//   alternates: {
//     canonical: "https://www.micrologicglobal.com/solutions/assembly-automation",
//   },
//   openGraph: {
//     title: "Assembly Automation Solutions | Micrologic",
//     description:
//       "Advanced assembly automation systems including conveyors, robotics and vision inspection.",
//     url: "https://www.micrologicglobal.com/solutions/assembly-automation",
//     siteName: "Micrologic Integrated Systems",
//     type: "website",
//   },
// };

// export default function AssemblyAutomationPage() {
//   return (
//     <div>
//       <AssemblyAutomationSection />
//     </div>
//   );
// }
import AssemblyAutomationSection from "@/components/AssemblyAutomationSection";

export const metadata = {
  title: "Assembly Automation Solutions | Robotics, Conveyors & Vision Systems | Micrologic",

  description:
    "Micrologic Integrated Systems provides advanced assembly automation solutions including conveyors, robotic automation, rotary indexing systems, and machine vision inspection for modern manufacturing industries.",

  keywords: [
    "assembly automation systems",
    "industrial automation solutions",
    "robotic assembly automation",
    "vision inspection systems",
    "manufacturing automation",
    "factory automation solutions",
    "industrial robotics integration",
  ],

  alternates: {
    canonical:
      "https://www.micrologicglobal.com/solutions/assembly-automation",
  },

  openGraph: {
    title: "Assembly Automation Solutions | Micrologic",
    description:
      "Advanced industrial assembly automation including conveyors, robotics, rotary indexing and machine vision inspection.",
    url: "https://www.micrologicglobal.com/solutions/assembly-automation",
    siteName: "Micrologic Integrated Systems",
    images: [
      {
        url: "https://www.micrologicglobal.com/assets/robotnew.webp",
        width: 1200,
        height: 630,
        alt: "Micrologic Assembly Automation Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Assembly Automation Solutions | Micrologic",
    description:
      "Advanced assembly automation systems including robotics, conveyors and vision inspection technologies.",
    images: [
      "https://www.micrologicglobal.com/assets/robotnew.webp",
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function AssemblyAutomationPage() {

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Assembly Automation Solutions",
    description:
      "Micrologic provides industrial assembly automation solutions including conveyors, robotic automation, rotary indexing systems and vision inspection technologies.",
    provider: {
      "@type": "Organization",
      name: "Micrologic Integrated Systems",
      url: "https://www.micrologicglobal.com",
      logo: "https://www.micrologicglobal.com/assets/micrologic.png",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    serviceType: "Industrial Assembly Automation",
    url: "https://www.micrologicglobal.com/solutions/assembly-automation",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is assembly automation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Assembly automation uses robotics, conveyors, and intelligent control systems to assemble products efficiently with high precision and minimal human intervention.",
        },
      },
      {
        "@type": "Question",
        name: "Which industries use assembly automation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Industries such as automotive, electric vehicles, electronics manufacturing, and medical device manufacturing widely use assembly automation.",
        },
      },
      {
        "@type": "Question",
        name: "What are the benefits of robotic assembly automation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Robotic assembly automation improves production speed, ensures consistent product quality, reduces manufacturing costs, and allows scalable production.",
        },
      },
    ],
  };

  return (
    <>
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

      <AssemblyAutomationSection />
    </>
  );
}
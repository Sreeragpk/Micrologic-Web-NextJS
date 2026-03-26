
// import AssemblyAutomationSection from "@/components/AssemblyAutomationSection";

// export const metadata = {
//   title:
//     "Assembly Automation Solutions | Robotics, Conveyors & Vision Systems | Micrologic",

//   description:
//     "Micrologic Integrated Systems provides advanced assembly automation solutions including conveyors, robotic automation, rotary indexing systems, and machine vision inspection for modern manufacturing industries.",

//   keywords: [
//     "assembly automation systems",
//     "industrial automation solutions",
//     "robotic assembly automation",
//     "vision inspection systems",
//     "manufacturing automation",
//     "factory automation solutions",
//     "industrial robotics integration",
//   ],

//   alternates: {
//     canonical: "https://www.micrologicglobal.com/solutions/assembly-automation",
//   },

//   openGraph: {
//     title: "Assembly Automation Solutions | Micrologic",
//     description:
//       "Advanced industrial assembly automation including conveyors, robotics, rotary indexing and machine vision inspection.",
//     url: "https://www.micrologicglobal.com/solutions/assembly-automation",
//     siteName: "Micrologic Integrated Systems",
//     images: [
//       {
//         url: "https://www.micrologicglobal.com/assets/robotnew.webp",
//         width: 1200,
//         height: 630,
//         alt: "Micrologic Assembly Automation Solutions",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },

//   twitter: {
//     card: "summary_large_image",
//     title: "Assembly Automation Solutions | Micrologic",
//     description:
//       "Advanced assembly automation systems including robotics, conveyors and vision inspection technologies.",
//     images: ["https://www.micrologicglobal.com/assets/robotnew.webp"],
//   },

//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-image-preview": "large",
//     },
//   },
// };

// export default function AssemblyAutomationPage() {
//   const serviceSchema = {
//     "@context": "https://schema.org",
//     "@type": "Service",
//     name: "Assembly Automation Solutions",
//     description:
//       "Micrologic provides industrial assembly automation solutions including conveyors, robotic automation, rotary indexing systems and vision inspection technologies.",
//     provider: {
//       "@type": "Organization",
//       name: "Micrologic Integrated Systems",
//       url: "https://www.micrologicglobal.com",
//       logo: "https://www.micrologicglobal.com/assets/micrologic.png",
//     },
//     areaServed: {
//       "@type": "Country",
//       name: "India",
//     },
//     serviceType: "Industrial Assembly Automation",
//     url: "https://www.micrologicglobal.com/solutions/assembly-automation",
//   };

//   const faqSchema = {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     mainEntity: [
//       {
//         "@type": "Question",
//         name: "What is assembly automation?",
//         acceptedAnswer: {
//           "@type": "Answer",
//           text: "Assembly automation uses robotics, conveyors, and intelligent control systems to assemble products efficiently with high precision and minimal human intervention.",
//         },
//       },
//       {
//         "@type": "Question",
//         name: "Which industries use assembly automation?",
//         acceptedAnswer: {
//           "@type": "Answer",
//           text: "Industries such as automotive, electric vehicles, electronics manufacturing, and medical device manufacturing widely use assembly automation.",
//         },
//       },
//       {
//         "@type": "Question",
//         name: "What are the benefits of robotic assembly automation?",
//         acceptedAnswer: {
//           "@type": "Answer",
//           text: "Robotic assembly automation improves production speed, ensures consistent product quality, reduces manufacturing costs, and allows scalable production.",
//         },
//       },
//     ],
//   };
//   const breadcrumbSchema = {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     itemListElement: [
//       {
//         "@type": "ListItem",
//         position: 1,
//         name: "Home",
//         item: "https://www.micrologicglobal.com",
//       },
//       {
//         "@type": "ListItem",
//         position: 2,
//         name: "Assembly Automation",
//         item: "https://www.micrologicglobal.com/solutions/assembly-automation",
//       },
//     ],
//   };
//   return (
//     <>
//       {/* Breadcrumb Schema */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify(breadcrumbSchema),
//         }}
//       />
//       {/* Service Schema */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify(serviceSchema),
//         }}
//       />

//       {/* FAQ Schema */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify(faqSchema),
//         }}
//       />

//       <AssemblyAutomationSection />
//     </>
//   );
// }
import AssemblyAutomationSection from "@/components/AssemblyAutomationSection";

export const metadata = {
  title:
    "Assembly Automation Solutions | Robotics, Conveyors & Vision Systems | Micrologic",
  description:
    "Micrologic provides advanced assembly automation solutions including conveyors, robotic automation, rotary indexing systems, cellular manufacturing cells, and machine vision inspection for high-precision manufacturing.",
  keywords: [
    "assembly automation systems",
    "industrial automation solutions",
    "robotic assembly automation",
    "vision inspection systems",
    "manufacturing automation",
    "factory automation solutions",
    "industrial robotics integration",
    "conveyor systems",
    "rotary indexing tables",
    "cellular manufacturing",
    "robotic pick and place",
    "robotic soldering",
    "robotic dispensing",
    "machine vision inspection",
    "automated assembly line",
  ],
  authors: [{ name: "Micrologic" }],
  creator: "Micrologic",
  publisher: "Micrologic",

  alternates: {
    canonical: "https://www.micrologicglobal.com/solutions/assembly-automation",
  },

  openGraph: {
    title:
      "Assembly Automation Solutions | Robotics, Conveyors & Vision | Micrologic",
    description:
      "Advanced industrial assembly automation including conveyors, robotics, rotary indexing, cellular cells, and machine vision inspection for scalable manufacturing.",
    url: "https://www.micrologicglobal.com/solutions/assembly-automation",
    siteName: "Micrologic",
    images: [
      {
        url: "https://www.micrologicglobal.com/assets/robotnew.webp",
        width: 1200,
        height: 630,
        alt: "Micrologic Assembly Automation Solutions — Robotic integration, conveyors, and vision inspection systems",
      },
    ],
    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "Assembly Automation Solutions | Micrologic",
    description:
      "Advanced assembly automation systems including robotics, conveyors, rotary indexing, and vision inspection technologies.",
    images: ["https://www.micrologicglobal.com/assets/robotnew.webp"],
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

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Assembly Automation Solutions",
  url: "https://www.micrologicglobal.com/solutions/assembly-automation",
  image: "https://www.micrologicglobal.com/assets/robotnew.webp",
  description:
    "Micrologic provides industrial assembly automation solutions including conveyors, robotic automation, rotary indexing systems, cellular manufacturing cells, and machine vision inspection technologies for precision manufacturing.",
  provider: {
    "@type": "Organization",
    name: "Micrologic",
    url: "https://www.micrologicglobal.com",
    logo: "https://www.micrologicglobal.com/assets/micrologic.png",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      availableLanguage: "English",
    },
  },
  areaServed: {
    "@type": "Place",
    name: "Worldwide",
  },
  serviceType: "Industrial Assembly Automation",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Assembly Automation Solutions Catalog",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Conveyors & Transfer Systems",
          description:
            "Chain conveyors, belt conveyors, and pallet movers with ESD-safe fixtures for structured material flow in automated assembly lines.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cellular Manufacturing Cells",
          description:
            "Modular discrete stations combining assembly, testing, and inspection in optimized compact workspaces.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Rotary Indexing Systems",
          description:
            "High-speed rotary indexing tables for precise, repeatable part positioning through sequential assembly operations.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Robotic Automation",
          description:
            "Robotic screw fixing, soldering, dispensing, and pick-and-place systems for fully automated production.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Vision Inspection Systems",
          description:
            "AI-powered machine vision inspection with OCR, BLOB detection, color verification, and object presence validation.",
        },
      },
    ],
  },
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
        text: "Assembly automation uses robotics, conveyors, rotary indexing systems, and intelligent control systems to assemble products efficiently with high precision, consistent quality, and minimal human intervention.",
      },
    },
    {
      "@type": "Question",
      name: "Which industries use assembly automation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Industries such as automotive, electric vehicles, electronics manufacturing, medical device manufacturing, and consumer electronics widely use assembly automation for high-volume, precision production.",
      },
    },
    {
      "@type": "Question",
      name: "What are the benefits of robotic assembly automation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Robotic assembly automation improves production speed, ensures consistent product quality, reduces manufacturing costs, enables 24/7 operation, and allows scalable production with quick changeover for different product variants.",
      },
    },
    {
      "@type": "Question",
      name: "What types of assembly automation solutions does Micrologic offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Micrologic offers conveyors and transfer systems, cellular manufacturing cells, rotary indexing tables, robotic automation (screw fixing, soldering, dispensing, pick & place), and machine vision inspection systems.",
      },
    },
    {
      "@type": "Question",
      name: "What is machine vision inspection in assembly automation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Machine vision inspection uses advanced cameras and AI-powered algorithms to detect defects, verify component presence, perform OCR reading, BLOB detection, and color verification in real-time during the assembly process.",
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
      name: "Assembly Automation",
      item: "https://www.micrologicglobal.com/solutions/assembly-automation",
    },
  ],
};

export default function AssemblyAutomationPage() {
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
          __html: JSON.stringify(serviceSchema),
        }}
      />
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
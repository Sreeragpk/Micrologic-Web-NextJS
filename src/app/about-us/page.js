
// import AboutPage from "@/components/About";

// export const metadata = {
//   title: "About Micrologic | Industrial Automation & System Integration",

//   description:
//     "Micrologic is a leading provider of industrial automation and manufacturing system integration solutions. Since 2006 we have delivered assembly automation, testing systems and Industry 4.0 solutions worldwide.",

//   keywords: [
//     "Micrologic company",
//     "industrial automation company",
//     "manufacturing automation company",
//     "system integration company",
//     "automation engineering company",
//   ],

//   alternates: {
//     canonical: "https://www.micrologicglobal.com/about",
//   },

//   openGraph: {
//     title: "About Micrologic | Industrial Automation & System Integration",
//     description:
//       "Learn about Micrologic and our journey delivering industrial automation solutions since 2006.",
//     url: "https://www.micrologicglobal.com/about",
//     siteName: "Micrologic",
//     images: [
//       {
//         url: "https://www.micrologicglobal.com/assets/office.png",
//         width: 1200,
//         height: 630,
//         alt: "Micrologic Office",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },

//   twitter: {
//     card: "summary_large_image",
//     title: "About Micrologic | Industrial Automation",
//     description:
//       "Learn about Micrologic's journey delivering automation and manufacturing solutions since 2006.",
//     images: ["https://www.micrologicglobal.com/assets/office.png"],
//   },

//   robots: {
//     index: true,
//     follow: true,
//   },
// };

// export default function About() {

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
//         name: "About",
//         item: "https://www.micrologicglobal.com/about",
//       },
//     ],
//   };

//   const organizationSchema = {
//     "@context": "https://schema.org",
//     "@type": "Organization",
//     name: "Micrologic",
//     url: "https://www.micrologicglobal.com",
//     logo: "https://www.micrologicglobal.com/logo.png",
//     description:
//       "Micrologic provides industrial automation, assembly systems, testing solutions and Industry 4.0 manufacturing analytics.",
//     foundingDate: "2006",
//     address: {
//       "@type": "PostalAddress",
//       addressCountry: "India",
//     },
//     sameAs: [
//       "https://www.linkedin.com/company/micrologic",
//     ],
//   };

//   const aboutPageSchema = {
//     "@context": "https://schema.org",
//     "@type": "AboutPage",
//     name: "About Micrologic",
//     url: "https://www.micrologicglobal.com/about",
//     description:
//       "Learn about Micrologic's journey delivering automation and manufacturing system integration solutions since 2006.",
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

//       {/* Organization Schema */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify(organizationSchema),
//         }}
//       />

//       {/* About Page Schema */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify(aboutPageSchema),
//         }}
//       />

//       <AboutPage />
//     </>
//   );
// }
import AboutPage from "@/components/About";

export const metadata = {
  title:
    "About Micrologic | Industrial Automation & System Integration Company in Bengaluru",
  description:
    "Micrologic is a Bengaluru-based industrial automation and system integration company. Since 2006, we have delivered 2,000+ installations across assembly automation, test & validation, robotics and Industry 4.0 solutions for 50+ global clients.",
  keywords: [
    "Micrologic",
    "Micrologic Bengaluru",
    "industrial automation company India",
    "manufacturing automation Bengaluru",
    "system integration company India",
    "automation engineering company Karnataka",
    "assembly automation India",
    "test and validation systems",
    "Industry 4.0 solutions India",
    "robotics integration Bengaluru",
    "KIADB Industrial Area Kumbalagodu",
    "manufacturing system integrator",
  ],

  alternates: {
    canonical: "https://www.micrologicglobal.com/about-us",
  },

  openGraph: {
    title:
      "About Micrologic | Industrial Automation & System Integration in Bengaluru",
    description:
      "Learn about Micrologic — a Bengaluru-based company delivering industrial automation, assembly systems, testing solutions and Industry 4.0 analytics since 2006 with 2,000+ successful installations.",
    url: "https://www.micrologicglobal.com/about-us",
    siteName: "Micrologic",
    images: [
      {
        url: "https://www.micrologicglobal.com/assets/office.png",
        width: 1200,
        height: 630,
        alt: "Micrologic headquarters at KIADB Industrial Area, Kumbalagodu, Bengaluru",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Micrologic | Industrial Automation Bengaluru",
    description:
      "Learn about Micrologic's 20+ year journey delivering automation, system integration and Industry 4.0 solutions from Bengaluru, India.",
    images: ["https://www.micrologicglobal.com/assets/office.png"],
  },

  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },

  other: {
    "geo.region": "IN-KA",
    "geo.placename": "Bengaluru",
    "geo.position": "12.8895;77.4897",
    ICBM: "12.8895, 77.4897",
  },
};

export default function About() {
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
        name: "About Micrologic",
        item: "https://www.micrologicglobal.com/about-us",
      },
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Micrologic",
    legalName: "Micrologic",
    url: "https://www.micrologicglobal.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.micrologicglobal.com/logo.png",
      width: 512,
      height: 512,
    },
    image: "https://www.micrologicglobal.com/assets/office.png",
    description:
      "Micrologic is an industrial automation and system integration company headquartered in Bengaluru, India. We provide assembly automation, testing & validation systems, robotics integration, software development and Industry 4.0 smart manufacturing solutions.",
    foundingDate: "2006",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 50,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress:
        '#22-D1, "Micrologic Drive", KIADB Industrial Area, NH 275, 1st Phase, Kumbalagodu',
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560074",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "12.8895",
      longitude: "77.4897",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      availableLanguage: ["English", "Hindi", "Kannada"],
    },
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Germany" },
    ],
    knowsAbout: [
      "Industrial Automation",
      "Assembly Automation",
      "System Integration",
      "Test and Validation",
      "Robotics Integration",
      "Industry 4.0",
      "Smart Manufacturing",
      "PLC Programming",
      "SCADA Systems",
      "CNC Machining",
    ],
    sameAs: ["https://www.linkedin.com/company/micrologic"],
  };

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Micrologic — Industrial Automation & System Integration",
    url: "https://www.micrologicglobal.com/about",
    description:
      "Learn about Micrologic's 20+ year journey delivering industrial automation, assembly systems, test & validation and Industry 4.0 solutions from Bengaluru, India. Over 2,000 installations for 50+ global clients.",
    mainEntity: {
      "@type": "Organization",
      name: "Micrologic",
      url: "https://www.micrologicglobal.com",
    },
    breadcrumb: {
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
          name: "About",
          item: "https://www.micrologicglobal.com/about-us",
        },
      ],
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Micrologic",
    image: "https://www.micrologicglobal.com/assets/office.png",
    url: "https://www.micrologicglobal.com",
    description:
      "Industrial automation and system integration company providing assembly automation, testing systems, robotics and Industry 4.0 solutions.",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        '#22-D1, "Micrologic Drive", KIADB Industrial Area, NH 275, 1st Phase, Kumbalagodu',
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560074",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "12.8895",
      longitude: "77.4897",
    },
    foundingDate: "2006",
    priceRange: "$$$$",
  };

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
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutPageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <AboutPage />
    </>
  );
}
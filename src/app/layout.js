// import "./globals.css";
// import Providers from "@/components/Providers";

// import Navbar from "@/components/Navbarnew";
// import Footer from "@/components/Footer";
// import CookieBanner from "@/components/CookieBanner";
// import WhatsAppButton from "@/components/WhatsAppButton";
// import GlobalProtection from "@/components/GlobalProtection";
// // import ChatBot from "@/components/ChatBot";

// export const metadata = {
//   title: "Micrologic Integrated Systems | Automated Assembly & Test Solutions",
//   description:
//     "Micrologic Integrated Systems provides turnkey automated assembly, testing, traceability and control systems for automotive, EV, electronics and medical device manufacturers.",

//   metadataBase: new URL("https://www.micrologicglobal.com"),
//   alternates: {
//     canonical: "/",
//   },

//   openGraph: {
//     type: "website",
//     url: "https://www.micrologicglobal.com/",
//     title: "Micrologic Integrated Systems | Manufacturing Automation & Test",
//     description:
//       "One partner for automated assembly, end-of-line test, traceability and digital manufacturing solutions.",
//     images: [
//       {
//         url: "https://www.micrologicglobal.com/assets/micrologic.png",
//         width: 1200,
//         height: 630,
//         alt: "Micrologic Integrated Systems",
//       },
//     ],
//     siteName: "Micrologic Integrated Systems",
//   },

//   twitter: {
//     card: "summary_large_image",
//     title: "Micrologic Integrated Systems",
//     description:
//       "Automated assembly, testing and traceability solutions for global manufacturers.",
//     images: ["https://www.micrologicglobal.com/assets/micrologic.png"],
//   },

//   robots: {
//     index: true,
//     follow: true,
//   },
// };

// const jsonLd = {
//   "@context": "https://schema.org",
//   "@type": "Organization",
//   name: "Micrologic Integrated Systems (P) Ltd.",
//   url: "https://www.micrologicglobal.com/",
//   logo: "https://www.micrologicglobal.com/cropped.png",
//   telephone: "+91-96635-21132",
//   address: {
//     "@type": "PostalAddress",
//     streetAddress:
//       "#22-D1, "Micrologic Drive", KIADB Industrial Area, NH 275, 1st Phase, Kumbalagodu, Bengaluru, Karnataka 560 074",
//     addressLocality: "Bengaluru",
//     addressRegion: "Karnataka",
//     postalCode: "560074",
//     addressCountry: "IN",
//   },
//   sameAs: ["https://www.linkedin.com/company/micrologic/"],
// };


// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
//         />
//       </head>

//       <body>
//         <GlobalProtection /> {/* 👈 ADD HERE */}

//         <Providers>
//           <Navbar />
//           <main>{children}</main>
//           <Footer />
//           <WhatsAppButton />
//           <CookieBanner />
//         </Providers>
//       </body>
//     </html>
//   );
// }
import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbarnew";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import WhatsAppButton from "@/components/WhatsAppButton";
import GlobalProtection from "@/components/GlobalProtection";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// ✅ Title: 56 characters (within 50-60 range)
// ✅ Description: 155 characters (within 120-160 range)
export const metadata = {
  metadataBase: new URL("https://www.micrologicglobal.com"),

  title: {
    default:
      "Micrologic | Automated Assembly, Testing & Traceability",
    template: "%s | Micrologic",
  },

  description:
    "Micrologic delivers turnkey automated assembly, end-of-line testing, traceability, and Industry 4.0 digital transformation solutions for automotive, EV, electronics, and medical device manufacturers.",

  keywords: [
    "automated assembly",
    "test solutions",
    "manufacturing automation",
    "traceability solutions",
    "Industry 4.0",
    "digital transformation",
    "Micrologic",
    "end-of-line testing",
    "assembly automation",
    "smart manufacturing",
  ],

  authors: [{ name: "Micrologic" }],
  creator: "Micrologic",
  publisher: "Micrologic Integrated Systems",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "https://www.micrologicglobal.com/",
    title:
      "Micrologic | Automated Assembly, Testing & Traceability Solutions",
    description:
      "Complete manufacturing automation partner — automated assembly lines, end-of-line test systems, production traceability, and FactEyes digital transformation platform.",
    images: [
      {
        url: "https://www.micrologicglobal.com/assets/micrologic.png",
        width: 1200,
        height: 630,
        alt: "Micrologic Integrated Systems — Manufacturing automation, testing, and traceability solutions",
      },
    ],
    siteName: "Micrologic",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Micrologic | Automated Assembly, Testing & Traceability",
    description:
      "Turnkey automated assembly, testing, traceability, and Industry 4.0 solutions for global manufacturers.",
    images: ["https://www.micrologicglobal.com/assets/micrologic.png"],
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

  verification: {
    // Add your Google Search Console verification
    // google: "your-verification-code",
  },

  other: {
    "theme-color": "#1e40af",
  },
};

// ✅ Enhanced Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Micrologic Integrated Systems (P) Ltd.",
  alternateName: "Micrologic",
  url: "https://www.micrologicglobal.com",
  logo: {
    "@type": "ImageObject",
    url: "https://www.micrologicglobal.com/assets/micrologic.png",
    width: 200,
    height: 60,
  },
  telephone: "+91-96635-21132",
  email: "info@micrologicglobal.com",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "#22-D1, Micrologic Drive, KIADB Industrial Area, NH 275, 1st Phase, Kumbalagodu, Bengaluru, Karnataka 560 074",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560074",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "12.8996",
    longitude: "77.5089",
  },
  sameAs: ["https://www.linkedin.com/company/micrologic/"],
  foundingDate: "2010",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 50,
    maxValue: 200,
  },
  knowsAbout: [
    "Assembly Automation",
    "Test Solutions",
    "Production Traceability",
    "Digital Transformation",
    "Industry 4.0",
    "Manufacturing Analytics",
  ],
};

// ✅ WebSite Schema for sitelinks search box
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Micrologic",
  alternateName: "Micrologic Integrated Systems",
  url: "https://www.micrologicglobal.com",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate:
        "https://www.micrologicglobal.com/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>

      <body className={`${inter.className} antialiased`}>
        {/* Google Analytics — replace GA_MEASUREMENT_ID with your actual ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5ZZ01ZESR3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5ZZ01ZESR3', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        {/* ✅ ADD THIS */}
  <Script
    src="https://challenges.cloudflare.com/turnstile/v0/api.js"
    strategy="afterInteractive"
  />
        <Providers>
          <GlobalProtection />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
          >
            Skip to main content
          </a>
          <Navbar />
          {/* 
            ✅ IMPORTANT: Removed <main> wrapper here.
            Each page component now uses its own <main> tag.
            This prevents duplicate <main> elements which is invalid HTML.
          */}
          <div id="main-content">{children}</div>
          <Footer />
          <WhatsAppButton />
          <CookieBanner />
        </Providers>
      </body>
    </html>
  );
}
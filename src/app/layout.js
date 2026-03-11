// // import "./globals.css";
// // import Navbar from "@/components/Navbarnew";
// // import Footer from "@/components/Footer";

// // export const metadata = {
// //   title: "Micrologic Integrated Systems",
// //   description:
// //     "Micrologic Integrated Systems delivers automated assembly, testing, traceability and digital manufacturing solutions.",
// // };

// // export default function RootLayout({ children }) {
// //   return (
// //     <html lang="en">
// //       <body>

// //         {/* Navbar */}
// //         <Navbar />

// //         {/* Page Content */}
// //         <main>{children}</main>

// //         {/* Footer */}
// //         <Footer />

// //       </body>
// //     </html>
// //   );
// // }
// import "./globals.css";
// import Navbar from "@/components/Navbarnew";
// import Footer from "@/components/Footer";
// import CookieBanner from "@/components/CookieBanner";
// import WhatsAppButton from "@/components/WhatsAppButton";
// import ChatBot from "@/components/ChatBot";

// export const metadata = {
//   title: "Micrologic Integrated Systems",
//   description:
//     "Micrologic Integrated Systems delivers automated assembly, testing, traceability and digital manufacturing solutions.",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>

//         {/* Navbar */}
//         <Navbar />

//         {/* Page Content */}
//         <main>{children}</main>

//         {/* Footer */}
//         <Footer />

//         {/* Floating components */}
//         <WhatsAppButton />
//         <ChatBot />

//         {/* Cookie Consent */}
//         <CookieBanner />

//       </body>
//     </html>
//   );
// }
import "./globals.css";
import Navbar from "@/components/Navbarnew";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import WhatsAppButton from "@/components/WhatsAppButton";
import ChatBot from "@/components/ChatBot";

export const metadata = {
  title: "Micrologic Integrated Systems | Automated Assembly & Test Solutions",
  description:
    "Micrologic Integrated Systems provides turnkey automated assembly, testing, traceability and control systems for automotive, EV, electronics and medical device manufacturers.",
  
  
  // Canonical URL
  metadataBase: new URL("https://www.micrologicglobal.com"),
  alternates: {
    canonical: "/",
  },

  // Open Graph
  openGraph: {
    type: "website",
    url: "https://www.micrologicglobal.com/",
    title: "Micrologic Integrated Systems | Manufacturing Automation & Test",
    description:
      "One partner for automated assembly, end-of-line test, traceability and digital manufacturing solutions.",
    images: [
      {
        url: "https://www.micrologicglobal.com/assets/micrologic.png",
        width: 1200,
        height: 630,
        alt: "Micrologic Integrated Systems",
      },
    ],
    siteName: "Micrologic Integrated Systems",
  },

  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "Micrologic Integrated Systems",
    description:
      "Automated assembly, testing and traceability solutions for global manufacturers.",
    images: ["https://www.micrologicglobal.com/assets/micrologic.png"],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Micrologic Integrated Systems (P) Ltd.",
  url: "https://www.micrologicglobal.com/",
  logo: "https://www.micrologicglobal.com/cropped.png",
  telephone: "+91-96635-21132",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "#22-D1, Micrologic Drive, KIADB, Kumbalgodu Industrial Area, NH 275, 1st Phase",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560074",
    addressCountry: "IN",
  },
  sameAs: ["https://www.linkedin.com/company/micrologic/"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main>{children}</main>

        {/* Footer */}
        <Footer />

        {/* Floating components */}
        <WhatsAppButton />
        <ChatBot />

        {/* Cookie Consent */}
        <CookieBanner />
      </body>
    </html>
  );
}
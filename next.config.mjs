// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   async redirects() {
//     return [


//       {
//         source: "/contact-us",
//         destination: "/#contact",
//         permanent: true,
//       },

//       // INDUSTRIES
//       {
//         source: "/industries",
//         destination: "/industries/automotive-automation",
//         permanent: true,
//       },

//       // SOLUTIONS
//       {
//         source: "/solutions",
//         destination: "/solutions/test-solutions",
//         permanent: true,
//       },

//       // OLD SERVICES → NEW SOLUTIONS
//       {
//         source: "/services/automated-assembly-leanmate",
//         destination: "/solutions/assembly-automation",
//         permanent: true,
//       },
//       {
//         source: "/services/test-automation-fastest",
//         destination: "/solutions/test-solutions",
//         permanent: true,
//       },
//       {
//         source: "/services/automated-inspection-insight",
//         destination: "/solutions/digital-transformation",
//         permanent: true,
//       },

//       // INDUSTRY SERVICE PAGES
//       {
//         source: "/services/electric-vehicles-industry",
//         destination: "/industries",
//         permanent: true,
//       },
//       {
//         source: "/services/automotive-industry",
//         destination: "/industries/automotive-automation",
//         permanent: true,
//       },
//       {
//         source: "/services/medical-devices",
//         destination: "/industries",
//         permanent: true,
//       },

//       // SOFTWARE PAGE
//       {
//         source: "/services/software-development-solutions",
//         destination: "/solutions/digital-transformation",
//         permanent: true,
//       },

//       // ELECTRONICS PAGE
//       {
//         source: "/services/electrical-electronics",
//         destination: "/industries",
//         permanent: true,
//       },

//       // OLD SERVICE GROUP PAGES
//       {
//         source: "/services_group/main",
//         destination: "/",
//         permanent: true,
//       },
//       {
//         source: "/services_group/:path*",
//         destination: "/",
//         permanent: true,
//       },

//       // OLD WORDPRESS CONTACT PAGE
//       {
//         source: "/contact",
//         destination: "/#contact",
//         permanent: true,
//       },

//       // FORCE WWW OLD DOMAIN
//       {
//         source: "/",
//         has: [
//           {
//             type: "host",
//             value: "www.micrologicglobal.com",
//           },
//         ],
//         destination: "https://micrologicglobal.com/",
//         permanent: true,
//       },

//     ];
//   },
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  // 🔒 HIDE NEXT.JS HEADER
  poweredByHeader: false,

  // 🔒 DISABLE SOURCE MAPS (VERY IMPORTANT)
  productionBrowserSourceMaps: false,

  async redirects() {
    return [
      {
        source: "/contact-us",
        destination: "/#contact",
        permanent: true,
      },
      {
        source: "/industries",
        destination: "/industries/automotive-automation",
        permanent: true,
      },
      {
        source: "/solutions",
        destination: "/solutions/test-solutions",
        permanent: true,
      },
      {
        source: "/services/automated-assembly-leanmate",
        destination: "/solutions/assembly-automation",
        permanent: true,
      },
      {
        source: "/services/test-automation-fastest",
        destination: "/solutions/test-solutions",
        permanent: true,
      },
      {
        source: "/services/automated-inspection-insight",
        destination: "/solutions/digital-transformation",
        permanent: true,
      },
      {
        source: "/services/electric-vehicles-industry",
        destination: "/industries",
        permanent: true,
      },
      {
        source: "/services/automotive-industry",
        destination: "/industries/automotive-automation",
        permanent: true,
      },
      {
        source: "/services/medical-devices",
        destination: "/industries",
        permanent: true,
      },
      {
        source: "/services/software-development-solutions",
        destination: "/solutions/digital-transformation",
        permanent: true,
      },
      {
        source: "/services/electrical-electronics",
        destination: "/industries",
        permanent: true,
      },
      {
        source: "/services_group/main",
        destination: "/",
        permanent: true,
      },
      {
        source: "/services_group/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/#contact",
        permanent: true,
      },
      {
        source: "/",
        has: [
          {
            type: "host",
            value: "www.micrologicglobal.com",
          },
        ],
        destination: "https://micrologicglobal.com/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
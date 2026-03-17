// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   /* config options here */
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/about-us",
        destination: "/about",
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
        source: "/contact-us",
        destination: "/#contact",
        permanent: true,
      },
      {
        source: "/services_group/main",
        destination: "/",
        permanent: true,
      },

      // Catch all old service URLs
      {
        source: "/services_group/:path*",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
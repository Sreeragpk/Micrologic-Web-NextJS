/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.micrologicglobal.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,

  exclude: ["/icon.png", "/404", "/500"],

  robotsTxtOptions: {
    additionalSitemaps: [
      "https://www.micrologicglobal.com/sitemap.xml",
    ],
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
    ],
  },

  transform: async (config, path) => {
    let priority = 0.7;
    let changefreq = "monthly";

    // Homepage
    if (path === "/") {
      priority = 1.0;
      changefreq = "weekly";
    }

    // Solutions pages
    else if (path.startsWith("/solutions")) {
      priority = 0.9;
    }

    // Industries pages
    else if (path.startsWith("/industries")) {
      priority = 0.8;
    }

    // About page fix (your route is /about-us, not /about)
    else if (path === "/about-us") {
      priority = 0.75;
    }

    return {
      loc: path,
      changefreq,
      priority,

      // ✅ IMPORTANT: remove fake lastmod
      lastmod: undefined,
    };
  },
};
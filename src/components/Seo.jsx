// // src/components/Seo.jsx
// import { useEffect } from "react";

// const ensureTag = (selector, createEl) => {
//   let el = document.querySelector(selector);
//   if (!el) {
//     el = createEl();
//     document.head.appendChild(el);
//   }
//   return el;
// };

// const Seo = ({ title, description, canonical }) => {
//   useEffect(() => {
//     // Title
//     if (title) {
//       document.title = title;
//     }

//     // Meta description
//     if (description) {
//       const meta = ensureTag(
//         'meta[name="description"]',
//         () => {
//           const m = document.createElement("meta");
//           m.setAttribute("name", "description");
//           return m;
//         }
//       );
//       meta.setAttribute("content", description);
//     }

//     // Canonical
//     if (canonical) {
//       const link = ensureTag(
//         'link[rel="canonical"]',
//         () => {
//           const l = document.createElement("link");
//           l.setAttribute("rel", "canonical");
//           return l;
//         }
//       );
//       link.setAttribute("href", canonical);
//     }
//   }, [title, description, canonical]);

//   return null;
// };

// export default Seo;
// src/components/Seo.jsx
import { useEffect } from "react";

const ensureTag = (selector, createEl) => {
  let el = document.querySelector(selector);
  if (!el) {
    el = createEl();
    document.head.appendChild(el);
  }
  return el;
};

const Seo = ({
  title,
  description,
  canonical,
  image,
  robots = "index, follow",
}) => {
  useEffect(() => {

    // Title
    if (title) {
      document.title = title;
    }

    // Meta description
    if (description) {
      const meta = ensureTag(
        'meta[name="description"]',
        () => {
          const m = document.createElement("meta");
          m.setAttribute("name", "description");
          return m;
        }
      );
      meta.setAttribute("content", description);
    }

    // Robots
    const robotsTag = ensureTag(
      'meta[name="robots"]',
      () => {
        const m = document.createElement("meta");
        m.setAttribute("name", "robots");
        return m;
      }
    );
    robotsTag.setAttribute("content", robots);

    // Canonical
    if (canonical) {
      const link = ensureTag(
        'link[rel="canonical"]',
        () => {
          const l = document.createElement("link");
          l.setAttribute("rel", "canonical");
          return l;
        }
      );
      link.setAttribute("href", canonical);
    }

    // Open Graph Title
    if (title) {
      const ogTitle = ensureTag(
        'meta[property="og:title"]',
        () => {
          const m = document.createElement("meta");
          m.setAttribute("property", "og:title");
          return m;
        }
      );
      ogTitle.setAttribute("content", title);
    }

    // Open Graph Description
    if (description) {
      const ogDesc = ensureTag(
        'meta[property="og:description"]',
        () => {
          const m = document.createElement("meta");
          m.setAttribute("property", "og:description");
          return m;
        }
      );
      ogDesc.setAttribute("content", description);
    }

    // Open Graph URL
    if (canonical) {
      const ogUrl = ensureTag(
        'meta[property="og:url"]',
        () => {
          const m = document.createElement("meta");
          m.setAttribute("property", "og:url");
          return m;
        }
      );
      ogUrl.setAttribute("content", canonical);
    }

    // Open Graph Image
    if (image) {
      const ogImage = ensureTag(
        'meta[property="og:image"]',
        () => {
          const m = document.createElement("meta");
          m.setAttribute("property", "og:image");
          return m;
        }
      );
      ogImage.setAttribute("content", image);
    }

    // Twitter Card
    const twitterCard = ensureTag(
      'meta[name="twitter:card"]',
      () => {
        const m = document.createElement("meta");
        m.setAttribute("name", "twitter:card");
        return m;
      }
    );
    twitterCard.setAttribute("content", "summary_large_image");

  }, [title, description, canonical, image, robots]);

  return null;
};

export default Seo;
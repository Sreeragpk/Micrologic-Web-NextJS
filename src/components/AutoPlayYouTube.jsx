
// "use client";

// import { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";

// function CompanyVideo() {
//   const containerRef = useRef(null);
//   const iframeRef = useRef(null);

//   const [isVisible, setIsVisible] = useState(false);
//   const [hasLoaded, setHasLoaded] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         const visible = entry.isIntersecting;
//         setIsVisible(visible);

//         // Load video only once
//         if (visible && !hasLoaded) {
//           setHasLoaded(true);
//         }

//         // Control play/pause
//         if (iframeRef.current) {
//           iframeRef.current.contentWindow.postMessage(
//             JSON.stringify({
//               event: "command",
//               func: visible ? "playVideo" : "pauseVideo",
//             }),
//             "*"
//           );
//         }
//       },
//    {
//   threshold: 0.3,
//   rootMargin: "0px 0px -100px 0px"
// }
//     );

//     if (containerRef.current) {
//       observer.observe(containerRef.current);
//     }

//     return () => {
//       if (containerRef.current) {
//         observer.unobserve(containerRef.current);
//       }
//     };
//   }, [hasLoaded]);

//   return (
//     <section ref={containerRef} className="bg-white py-12 px-4 sm:px-6">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={isVisible ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.6 }}
//         className="max-w-6xl mx-auto"
//       >
//         <div className="relative w-full overflow-hidden rounded-xl shadow-lg">
//           <div className="relative pb-[56.25%]">
//             {hasLoaded ? (
//               <iframe
//                 ref={iframeRef}
//                 src="https://www.youtube.com/embed/PNj_ujIpY-k?enablejsapi=1&mute=1"
//                 title="Micrologic Company Video"
//                 frameBorder="0"
//                 allow="autoplay; encrypted-media"
//                 allowFullScreen
//                 className="absolute top-0 left-0 w-full h-full"
//               />
//             ) : (
//               <div className="absolute inset-0 bg-gray-200 animate-pulse" />
//             )}
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   );
// }

// export default CompanyVideo;
"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function CompanyVideo() {
  const containerRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  // 🔥 NEW: control autoplay
  const [shouldAutoPlay, setShouldAutoPlay] = useState(false);

  // Listen for floating click
  useEffect(() => {
    const handlePlay = () => {
      setShouldAutoPlay(true);
      setHasLoaded(true);
    };

    window.addEventListener("play-company-video", handlePlay);
    return () => window.removeEventListener("play-company-video", handlePlay);
  }, []);

  // Intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;
        setIsVisible(visible);

        if (visible && !hasLoaded) {
          setHasLoaded(true);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [hasLoaded]);

  return (
    <section
      id="company-video"
      ref={containerRef}
      className="bg-white py-12 px-4 sm:px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="relative w-full overflow-hidden rounded-xl shadow-lg">
          <div className="relative pb-[56.25%]">
            {hasLoaded ? (
              <iframe
                key={shouldAutoPlay} // 🔥 forces reload
                src={`https://www.youtube.com/embed/PNj_ujIpY-k?autoplay=${
                  shouldAutoPlay ? 1 : 0
                }&mute=1&playsinline=1`}
                title="Micrologic Company Video"
                className="absolute top-0 left-0 w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            ) : (
              <div className="absolute inset-0 bg-gray-200 animate-pulse" />
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default CompanyVideo;
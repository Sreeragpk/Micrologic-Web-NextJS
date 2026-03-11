// import React, { useState, useEffect, useRef } from "react";
// import main1 from "../assets/main1.webp";
// import main2 from "../assets/Assy line with Conveyor.webp";
// import main3 from "../assets/main3.webp";

// const slides = [main2, main1, main3];
// const heading = "Empowering Manufacturing Excellence";
// const SLIDE_DURATION = 6000;

// const HeroSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const timeoutRef = useRef(null);

//   const nextSlide = () =>
//     setCurrentIndex((prev) => (prev + 1) % slides.length);

//   useEffect(() => {
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     timeoutRef.current = setTimeout(nextSlide, SLIDE_DURATION);
//     return () => clearTimeout(timeoutRef.current);
//   }, [currentIndex]);

//   return (
//     <div className="relative h-screen w-full overflow-hidden font-sans text-white">
//       {/* Background Slides */}
//       {slides.map((image, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
//             index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
//           }`}
//         >
//           <img
//             src={image}
//             alt={`Slide ${index + 1}`}
//             className={`w-full h-full object-cover ${
//               index === currentIndex ? "animate-kenburns" : ""
//             }`}
//             loading="lazy" // lazy-load hidden slides
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
//         </div>
//       ))}

//       {/* Foreground Content */}
//       <div className="relative z-20 flex flex-col justify-center h-full px-8 md:px-16 lg:px-24 max-w-4xl">
//         <h1
//           key={currentIndex}
//           className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold 
//                      text-white leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] 
//                      animate-fade-in-up"
//         >
//           {heading}
//         </h1>
//       </div>

//       {/* Indicators */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full">
//         {slides.map((_, i) => (
//           <div
//             key={i}
//             onClick={() => setCurrentIndex(i)}
//             className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
//               i === currentIndex
//                 ? "bg-blue-400 scale-125 shadow-[0_0_12px_rgba(59,130,246,0.7)]"
//                 : "bg-gray-400 hover:bg-gray-300"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
// import React, { useState, useEffect, useRef } from "react";

// /* ---------------------------
//    IMPORT RESPONSIVE IMAGES
// --------------------------- */

// // Assy line with Conveyor
// import main2_800 from "../assets/Assy line with Conveyor-800.webp";
// import main2_1200 from "../assets/Assy line with Conveyor-1200.webp";
// import main2_1920 from "../assets/Assy line with Conveyor-1920.webp";
// import main2 from "../assets/Assy line with Conveyor.webp";

// // main1
// import main1_800 from "../assets/main1-800.webp";
// import main1_1200 from "../assets/main1-1200.webp";
// import main1_1920 from "../assets/main1-1920.webp";
// import main1 from "../assets/main1.webp";

// // main3
// import main3_800 from "../assets/main3-800.webp";
// import main3_1200 from "../assets/main3-1200.webp";
// import main3_1920 from "../assets/main3-1920.webp";
// import main3 from "../assets/main3.webp";

// /* --------------------------- */

// const slides = [
//   {
//     src: main2,
//     srcSet: `${main2_800} 800w, ${main2_1200} 1200w, ${main2_1920} 1920w`,
//     sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1920px",
//     width: 1920,
//     height: 1080,
//   },
//   {
//     src: main1,
//     srcSet: `${main1_800} 800w, ${main1_1200} 1200w, ${main1_1920} 1920w`,
//     sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1920px",
//     width: 1920,
//     height: 1080,
//   },
//   {
//     src: main3,
//     srcSet: `${main3_800} 800w, ${main3_1200} 1200w, ${main3_1920} 1920w`,
//     sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1920px",
//     width: 1920,
//     height: 1080,
//   },
// ];

// const heading = "Empowering Manufacturing Excellence";
// const SLIDE_DURATION = 6000;

// const HeroSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [loaded, setLoaded] = useState(() => new Array(slides.length).fill(false));
//   const timeoutRef = useRef(null);

//   const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);

//   // preload first two images
//   useEffect(() => {
//     const preload = (url) => {
//       const link = document.createElement("link");
//       link.rel = "preload";
//       link.as = "image";
//       link.href = url;
//       link.type = "image/webp";
//       document.head.appendChild(link);
//       setTimeout(() => {
//         try { document.head.removeChild(link); } catch {}
//       }, 60000);
//     };

//     preload(slides[0].src);
//     preload(slides[1].src);
//   }, []);

//   // slide autoplay
//   useEffect(() => {
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     timeoutRef.current = setTimeout(nextSlide, SLIDE_DURATION);
//     return () => clearTimeout(timeoutRef.current);
//   }, [currentIndex]);

//   const handleImgLoad = async (index, img) => {
//     if (img?.decode) {
//       try { await img.decode(); } catch {}
//     }
//     setLoaded((prev) => {
//       const next = [...prev];
//       next[index] = true;
//       return next;
//     });
//   };

//   return (
//     <div className="relative h-screen w-full overflow-hidden font-sans text-white">

//       {/* Background Slides */}
//       {slides.map((image, index) => {
//         const active = index === currentIndex;
//         return (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-opacity duration-1000 ${
//               active ? "opacity-100 z-10" : "opacity-0 z-0"
//             }`}
//           >
//             <picture>
//               <source srcSet={image.srcSet} sizes={image.sizes} type="image/webp" />
//               <img
//                 src={image.src}
//                 srcSet={image.srcSet}
//                 sizes={image.sizes}
//                 width={image.width}
//                 height={image.height}
//                 alt={`Slide ${index + 1}`}
//                 className={`w-full h-full object-cover transition-transform duration-[7000ms] ${
//                   active && loaded[index] ? "animate-kenburns" : "scale-100"
//                 } ${loaded[index] ? "opacity-100" : "opacity-0"}`}
//                 loading={active ? "eager" : "lazy"}
//                 fetchpriority={active ? "high" : "low"}
//                 onLoad={(e) => handleImgLoad(index, e.target)}
//                 decoding="async"
//               />
//             </picture>

//             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
//           </div>
//         );
//       })}

//       {/* Text */}
//       <div className="relative z-20 flex flex-col justify-center h-full px-10 max-w-4xl">
//         <h1
//           key={currentIndex}
//           className="text-4xl md:text-5xl lg:text-6xl font-extrabold animate-fade-in-up drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]"
//         >
//           {heading}
//         </h1>
//       </div>

//       {/* Indicators */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full">
//         {slides.map((_, i) => (
//           <div
//             key={i}
//             onClick={() => setCurrentIndex(i)}
//             className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
//               i === currentIndex
//                 ? "bg-blue-400 scale-125 shadow-[0_0_12px_rgba(59,130,246,0.7)]"
//                 : "bg-gray-400 hover:bg-gray-300"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HeroSection;


"use client";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[69vh] overflow-hidden">

      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/assets/hero-poster.webp"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      >
        <source src="/assets/hero-video.webm" type="video/webm" />
        <source src="/assets/hero-video.mp4" type="video/mp4" />
      </video>

      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* text */}
      <div className="relative z-10 flex items-center justify-center h-full px-6 text-center">
        <div className="max-w-4xl">
          <h1 className="text-white font-extrabold text-4xl md:text-5xl lg:text-6xl">
            Empowering Manufacturing Excellence
          </h1>

          <p className="mt-4 text-white text-xl md:text-2xl">
            Fuelling Innovation, Driving Automation
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

// import React, { useState, useEffect, useRef } from "react";

// /* ---------------------------
//    IMPORT RESPONSIVE IMAGES
// --------------------------- */
// import main2_800 from "../assets/Assy line with Conveyor-800.webp";
// import main2_1200 from "../assets/Assy line with Conveyor-1200.webp";
// import main2_1920 from "../assets/Assy line with Conveyor-1920.webp";
// import main2 from "../assets/Assy line with Conveyor.webp";

// import main1_800 from "../assets/main1-800.webp";
// import main1_1200 from "../assets/main1-1200.webp";
// import main1_1920 from "../assets/main1-1920.webp";
// import main1 from "../assets/main1.webp";

// import main3_800 from "../assets/main2-800.webp";
// import main3_1200 from "../assets/main2-1200.webp";
// import main3_1920 from "../assets/main2-1920.webp";
// import main3 from "../assets/main2.webp";
// // import main3_800 from "../assets/main2.webp";
// // import main3_1200 from "../assets/main2.webp";
// // import main3_1920 from "../assets/main2.webp";
// // import main3 from "../assets/main2.webp";

// /* --------------------------- */

// const slides = [
//     {
//     src: main3,
//     srcSet: `${main3_800} 800w, ${main3_1200} 1200w, ${main3_1920} 1920w`,
//     sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1920px",
//     width: 1920,
//     height: 1080,
//     title: "Empowering Manufacturing Excellence",
    
//   },
//   {
//     src: main2,
//     srcSet: `${main2_800} 800w, ${main2_1200} 1200w, ${main2_1920} 1920w`,
//     sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1920px",
//     width: 1920,
//     height: 1080,
//     title: "Fuelling Innovation, Driving Automation",
//   },
//   {
//     src: main1,
//     srcSet: `${main1_800} 800w, ${main1_1200} 1200w, ${main1_1920} 1920w`,
//     sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1920px",
//     width: 1920,
//     height: 1080,
//     title: "Empowering Manufacturing Excellence",
//   },

// ];

// const SLIDE_DURATION = 3000;

// const HeroSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [prevIndex, setPrevIndex] = useState(null);
//   const [textKey, setTextKey] = useState(0);
//   const [loaded, setLoaded] = useState(() => new Array(slides.length).fill(false));
//   const timeoutRef = useRef(null);

//   // Handle slide change
//   const goToSlide = (index) => {
//     if (index === currentIndex) return;
//     setPrevIndex(currentIndex);
//     setCurrentIndex(index);
//     setTextKey((prev) => prev + 1); // Force text re-animation
//   };

//   // Auto-advance slides
//   useEffect(() => {
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);

//     timeoutRef.current = setTimeout(() => {
//       const nextIndex = (currentIndex + 1) % slides.length;
//       goToSlide(nextIndex);
//     }, SLIDE_DURATION);

//     return () => clearTimeout(timeoutRef.current);
//   }, [currentIndex]);

//   // Clear previous index after transition
//   useEffect(() => {
//     if (prevIndex !== null) {
//       const timer = setTimeout(() => {
//         setPrevIndex(null);
//       }, 1500);
//       return () => clearTimeout(timer);
//     }
//   }, [prevIndex]);

//   const handleImgLoad = async (index, img) => {
//     if (img?.decode) {
//       try {
//         await img.decode();
//       } catch {
//         // Ignore decoding errors 
//       }
//     }
//     setLoaded((prev) => {
//       const next = [...prev];
//       next[index] = true;
//       return next;
//     });
//   };

//   const currentSlide = slides[currentIndex];

//   return (
//     <div className="relative h-screen w-full overflow-hidden font-sans">
      
//       {/* ===== IMAGE SLIDES ===== */}
//       {slides.map((image, index) => {
//         const isActive = index === currentIndex;
//         const isPrev = index === prevIndex;
//         const isVisible = isActive || isPrev;

//         return (
//           <div
//             key={index}
//             className="absolute inset-0"
//             style={{
//               zIndex: isActive ? 10 : isPrev ? 5 : 0,
//               opacity: isActive ? 1 : 0,
//               transition: "opacity 1.5s ease-in-out",
//               visibility: isVisible ? "visible" : "hidden",
//             }}
//           >
//             {/* Image Container with Ken Burns Effect */}
//             <div
//               className="absolute inset-0"
//               style={{
//                 transform: isActive && loaded[index] 
//                   ? "scale(1.1)" 
//                   : "scale(1)",
//                 transition: isActive 
//                   ? `transform ${SLIDE_DURATION + 1500}ms ease-out` 
//                   : "none",
//               }}
//             >
//               <picture>
//                 <source srcSet={image.srcSet} sizes={image.sizes} type="image/webp" />
//                 <img
//                   src={image.src}
//                   srcSet={image.srcSet}
//                   sizes={image.sizes}
//                   width={image.width}
//                   height={image.height}
//                   alt={`Slide ${index + 1}`}
//                   className="w-full h-full object-cover"
//                   style={{
//                     opacity: loaded[index] ? 1 : 0,
//                     transition: "opacity 0.5s ease",
//                   }}
//                   loading={index === 0 ? "eager" : "lazy"}
//                   fetchPriority={index === 0 ? "high" : "low"}
//                   onLoad={(e) => handleImgLoad(index, e.target)}
//                   decoding="async"
//                 />
//               </picture>
//             </div>

//             {/* Dark Overlay */}
//             <div 
//               className="absolute inset-0"
//               style={{
//                 background: "linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.3) 100%)",
//               }}
//             />
//           </div>
//         );
//       })}

//       {/* ===== TEXT CONTENT ===== */}
//       <div className="relative z-20 flex flex-col justify-center h-full px-8 md:px-16 lg:px-24 max-w-6xl">
        
//         {/* Animated Content - Key forces re-render for animation */}
//         <div key={textKey} className="animate-fadeInUp">
//                   {/* Main Title */}
//           <h1 
//             className="opacity-0"
//             style={{
//               animation: "fadeSlideUp 0.8s ease forwards",
//               animationDelay: "0.4s",
//             }}
//           >
//             <span 
//               className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white"
//               style={{
//                 textShadow: "0 4px 30px rgba(0,0,0,0.5)",
//               }}
//             >
//               {currentSlide.title}
//             </span>
//           </h1>
//         </div>
//       </div>

//       {/* ===== SLIDE INDICATORS ===== */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
//         <div className="flex items-center gap-4 px-6 py-3 bg-black/30 backdrop-blur-md rounded-full border border-white/10">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className="relative group focus:outline-none"
//               aria-label={`Go to slide ${index + 1}`}
//             >
//               {/* Progress Bar */}
//               <div className="w-12 h-1 bg-white/30 rounded-full overflow-hidden">
//                 <div 
//                   className="h-full bg-white rounded-full"
//                   style={{
//                     width: index === currentIndex ? "100%" : "0%",
//                     transition: index === currentIndex 
//                       ? `width ${SLIDE_DURATION}ms linear` 
//                       : "width 0.3s ease",
//                   }}
//                 />
//               </div>
//             </button>
//           ))}
//         </div>
//       </div>
//      {/* ===== SCROLL INDICATOR ===== */}
//       {/* <div className="absolute bottom-8 left-8 z-30 hidden lg:block">
//         <div className="flex flex-col items-center">
//           <div 
//             className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2"
//           >
//             <div 
//               className="w-1 h-2 bg-white rounded-full"
//               style={{
//                 animation: "scrollBounce 1.5s ease-in-out infinite",
//               }}
//             />
//           </div>
//           <span className="mt-2 text-xs text-white/50 tracking-widest uppercase">
//             Scroll
//           </span>
//         </div>
//       </div> */}

//       {/* ===== CSS ANIMATIONS ===== */}
//       <style>{`
//         @keyframes fadeSlideUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         @keyframes scrollBounce {
//           0%, 100% {
//             transform: translateY(0);
//             opacity: 1;
//           }
//           50% {
//             transform: translateY(10px);
//             opacity: 0.5;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default HeroSection;
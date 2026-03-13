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
// "use client";

// import { useEffect, useState } from "react";
// import confetti from "canvas-confetti";

// const HeroSection = () => {
//   const [showLaunch, setShowLaunch] = useState(true);

//   useEffect(() => {
//     const duration = 15 * 1000;
//     const end = Date.now() + duration;

//     const colors = [
//       "#FF0000",
//       "#FFD700",
//       "#00BFFF",
//       "#32CD32",
//       "#FF1493",
//       "#FFFFFF",
//     ];

//     const firework = (x) => {
//       confetti({
//         particleCount: 50,
//         spread: 360,
//         startVelocity: 30,
//         origin: { x, y: 0.25 + Math.random() * 0.25 },
//         colors,
//         ticks: 220,
//         scalar: 1.1,
//       });
//     };

//     const sparkleRain = () => {
//       confetti({
//         particleCount: 14,
//         angle: 270,
//         spread: 35,
//         origin: { x: Math.random(), y: 0 },
//         colors: ["#FFD700", "#FFFFFF"],
//         startVelocity: 10,
//         gravity: 1.5,
//         ticks: 220,
//         scalar: 0.7,
//       });
//     };

//     const frame = () => {
//       confetti({
//         particleCount: 3,
//         angle: 60,
//         spread: 45,
//         origin: { x: 0, y: 0.75 },
//         startVelocity: 28,
//         colors,
//       });

//       confetti({
//         particleCount: 3,
//         angle: 120,
//         spread: 45,
//         origin: { x: 1, y: 0.75 },
//         startVelocity: 28,
//         colors,
//       });

//       if (Math.random() < 0.03) firework(0.2);
//       if (Math.random() < 0.03) firework(0.8);
//       if (Math.random() < 0.04) sparkleRain();

//       if (Date.now() < end) requestAnimationFrame(frame);
//     };

//     requestAnimationFrame(frame);

//     setTimeout(() => {
//       confetti({
//         particleCount: 120,
//         spread: 100,
//         origin: { y: 0.7 },
//         colors,
//       });
//     }, 13000);

//     setTimeout(() => setShowLaunch(false), 15000);
//   }, []);

//   return (
//     <section className="relative w-full h-[60vh] md:h-[75vh] lg:h-[85vh] overflow-hidden">

//       {/* Background Video */}
//       <video
//         autoPlay
//         muted
//         loop
//         playsInline
//         preload="metadata"
//         poster="/assets/hero-poster.webp"
//         className="absolute inset-0 w-full h-full object-cover scale-105"
//       >
//         <source src="/assets/hero-video.webm" type="video/webm" />
//         <source src="/assets/hero-video.mp4" type="video/mp4" />
//       </video>

//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/80" />

//       {/* Launch Announcement */}
//       {showLaunch && (
//         <div className="absolute top-20 left-1/2 -translate-x-1/2 z-20 animate-bounce">
//           <div className="bg-yellow-400 text-black px-6 py-2 rounded-full text-sm md:text-base font-semibold shadow-xl">
//             🌐 Newly Redesigned Website Launched
//           </div>
//         </div>
//       )}

//       {/* Content */}
//       <div className="relative z-10 flex items-center justify-center h-full px-6">
//         <div className="max-w-5xl text-center">

//           <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
//             Empowering Manufacturing Excellence
//           </h1>

//           <p className="mt-4 text-gray-200 text-lg sm:text-xl md:text-2xl">
//             Fuelling Innovation. Driving Automation.
//           </p>

//         </div>
//       </div>

//       {/* Bottom Fade */}
//       <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black/80 to-transparent" />

//     </section>
//   );
// };

// export default HeroSection;
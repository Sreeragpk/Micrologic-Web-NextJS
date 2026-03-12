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
//     const duration = 10 * 1000;
//     const end = Date.now() + duration;

//     const colors = [
//       "#FF0000",
//       "#FFD700",
//       "#00BFFF",
//       "#32CD32",
//       "#FF1493",
//       "#FFFFFF"
//     ];

//     // Side cannons
//     const launchBurst = () => {
//       confetti({
//         particleCount: 70,
//         angle: 65,
//         spread: 80,
//         origin: { x: 0, y: 0.65 },
//         colors,
//         startVelocity: 45
//       });

//       confetti({
//         particleCount: 70,
//         angle: 115,
//         spread: 80,
//         origin: { x: 1, y: 0.65 },
//         colors,
//         startVelocity: 45
//       });
//     };

//     // Top corner confetti
//     const topConfetti = () => {
//       confetti({
//         particleCount: 40,
//         angle: 300,
//         spread: 70,
//         origin: { x: 0, y: 0 },
//         colors
//       });

//       confetti({
//         particleCount: 40,
//         angle: 240,
//         spread: 70,
//         origin: { x: 1, y: 0 },
//         colors
//       });
//     };

//     // Sky fireworks
//     const firework = (x) => {
//       confetti({
//         particleCount: 40,
//         spread: 360,
//         origin: { x, y: 0.2 + Math.random() * 0.3 },
//         colors,
//         startVelocity: 30,
//         ticks: 220,
//         scalar: 1.1
//       });
//     };

//     // Sparkle rain (lightweight)
//     const sparkleRain = () => {
//       confetti({
//         particleCount: 12,
//         angle: 270,
//         spread: 40,
//         origin: { x: Math.random(), y: 0 },
//         colors: ["#FFD700", "#FFFFFF"],
//         startVelocity: 10,
//         gravity: 1.4,
//         ticks: 200,
//         scalar: 0.6
//       });
//     };

//     launchBurst();
//     setTimeout(topConfetti, 500);

//     const frame = () => {

//       // side fountain crackers
//       confetti({
//         particleCount: 3,
//         angle: 60,
//         spread: 45,
//         origin: { x: 0, y: 0.75 },
//         colors,
//         startVelocity: 30,
//         ticks: 200
//       });

//       confetti({
//         particleCount: 3,
//         angle: 120,
//         spread: 45,
//         origin: { x: 1, y: 0.75 },
//         colors,
//         startVelocity: 30,
//         ticks: 200
//       });

//       // random fireworks
//       if (Math.random() < 0.02) firework(0.2);
//       if (Math.random() < 0.02) firework(0.8);

//       // sparkle rain
//       if (Math.random() < 0.03) sparkleRain();

//       if (Date.now() < end) {
//         requestAnimationFrame(frame);
//       }
//     };

//     setTimeout(frame, 600);

//     // final celebration burst
//     setTimeout(() => {
//       confetti({
//         particleCount: 90,
//         spread: 100,
//         angle: 65,
//         origin: { x: 0, y: 0.7 },
//         colors
//       });

//       confetti({
//         particleCount: 90,
//         spread: 100,
//         angle: 115,
//         origin: { x: 1, y: 0.7 },
//         colors
//       });
//     }, 8800);

//     setTimeout(() => setShowLaunch(false), 10000);

//   }, []);

//   return (
//     <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[69vh] overflow-hidden">

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

//       <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

//       {showLaunch && (
//         <div className="absolute top-24 left-1/2 -translate-x-1/2 z-20 animate-bounce bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold shadow-lg">
//           🌐 Announcing Our Newly Redesigned Website
//         </div>
//       )}

//       <div className="relative z-10 flex items-center justify-center h-full px-6 text-center">
//         <div className="max-w-4xl">
//           <h1 className="text-white font-extrabold text-4xl md:text-5xl lg:text-6xl">
//             Empowering Manufacturing Excellence
//           </h1>

//           <p className="mt-4 text-white text-xl md:text-2xl">
//             Fuelling Innovation, Driving Automation
//           </p>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default HeroSection;
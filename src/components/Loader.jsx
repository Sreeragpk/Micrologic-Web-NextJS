// // Loader.jsx
// "use client";
// import React from "react";

// const Loader = () => {
//   return (
//     <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white z-[9999] overflow-hidden">
//       {/* Background Circuit Pattern */}
//       <div className="absolute inset-0 opacity-10">
//         <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
//           <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
//             <path d="M10 0v10m0 0h10M0 10h10" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-cyan-400" />
//             <circle cx="10" cy="10" r="1" fill="currentColor" className="text-cyan-400" />
//           </pattern>
//           <rect width="100" height="100" fill="url(#circuit)" />
//         </svg>
//       </div>

//       {/* Title with Glitch Effect */}
//       <div className="relative mb-2">
//         <h1 className="text-3xl md:text-4xl font-bold tracking-wider relative z-10">
//           <span className="inline-block animate-glitch-1">Micro</span>
//           <span className="inline-block text-cyan-400 animate-glitch-2">logic</span>
//         </h1>
//         <h1 className="absolute inset-0 text-3xl md:text-4xl font-bold tracking-wider opacity-50 animate-glitch-shadow-1">
//           <span className="text-red-500">Micro</span>
//           <span className="text-blue-500">logic</span>
//         </h1>
//         <h1 className="absolute inset-0 text-3xl md:text-4xl font-bold tracking-wider opacity-50 animate-glitch-shadow-2">
//           <span className="text-green-500">Micro</span>
//           <span className="text-purple-500">logic</span>
//         </h1>
//       </div>

//      <p className="text-sm md:text-base text-blue-300 mb-8">
//   Empowering Manufacturing Excellence
// </p>

//       {/* Main Loader - Hexagonal Tech Core */}
//       <div className="relative w-40 h-40">
//         {/* Hexagonal Frame */}
//         <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 100 100">
//           <polygon
//             points="50,10 85,30 85,70 50,90 15,70 15,30"
//             fill="none"
//             stroke="url(#gradient1)"
//             strokeWidth="2"
//             className="animate-stroke-dash"
//           />
//           <defs>
//             <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
//               <stop offset="0%" stopColor="#06b6d4" />
//               <stop offset="50%" stopColor="#8b5cf6" />
//               <stop offset="100%" stopColor="#3b82f6" />
//             </linearGradient>
//           </defs>
//         </svg>

//         {/* Inner Gear System */}
//         <div className="absolute inset-4 animate-spin-reverse">
//           <svg className="w-full h-full" viewBox="0 0 100 100">
//             <g transform="translate(50,50)">
//               {[...Array(8)].map((_, i) => (
//                 <rect
//                   key={i}
//                   x="-2"
//                   y="-30"
//                   width="4"
//                   height="60"
//                   fill="url(#gradient2)"
//                   transform={`rotate(${i * 45})`}
//                   opacity="0.6"
//                 />
//               ))}
//               <circle r="20" fill="none" stroke="url(#gradient2)" strokeWidth="2" />
//               <circle r="10" fill="url(#gradient2)" opacity="0.8" />
//             </g>
//             <defs>
//               <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
//                 <stop offset="0%" stopColor="#10b981" />
//                 <stop offset="100%" stopColor="#06b6d4" />
//               </linearGradient>
//             </defs>
//           </svg>
//         </div>

//         {/* Data Flow Particles */}
//         {[...Array(12)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-2 h-2 rounded-full"
//             style={{
//               background: `hsl(${i * 30}, 100%, 60%)`,
//               top: '50%',
//               left: '50%',
//               transform: `rotate(${i * 30}deg) translateY(-60px)`,
//               animation: `dataFlow ${3 + i * 0.1}s linear infinite`,
//               boxShadow: `0 0 10px hsl(${i * 30}, 100%, 60%)`,
//             }}
//           />
//         ))}

//         {/* Central Processing Core */}
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="w-16 h-16 relative">
//             <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-purple-600 to-blue-600 rounded-lg animate-morph shadow-lg shadow-cyan-500/50"></div>
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded animate-pulse-scale"></div>
//             </div>
//           </div>
//         </div>

//         {/* Energy Rings */}
//         <div className="absolute inset-0 animate-ping-slow">
//           <div className="w-full h-full rounded-full border-2 border-cyan-400/30"></div>
//         </div>
//         <div className="absolute inset-0 animate-ping-slow animation-delay-1000">
//           <div className="w-full h-full rounded-full border-2 border-purple-400/20"></div>
//         </div>
//       </div>

//       {/* Loading Status */}
//       <div className="mt-8 flex items-center space-x-2">
//         <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce animation-delay-0"></div>
//         <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce animation-delay-200"></div>
//         <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce animation-delay-400"></div>
//       </div>

//       <style jsx>{`
//         @keyframes glitch-1 {
//           0%, 100% { transform: translate(0); }
//           20% { transform: translate(-1px, 1px); }
//           40% { transform: translate(1px, -1px); }
//           60% { transform: translate(-1px, 0); }
//         }

//         @keyframes glitch-2 {
//           0%, 100% { transform: translate(0); }
//           20% { transform: translate(1px, -1px); }
//           40% { transform: translate(-1px, 1px); }
//           60% { transform: translate(1px, 0); }
//         }

//         @keyframes glitch-shadow-1 {
//           0%, 100% { transform: translate(0); opacity: 0; }
//           10% { transform: translate(2px, -2px); opacity: 0.5; }
//           20% { transform: translate(-2px, 2px); opacity: 0; }
//         }

//         @keyframes glitch-shadow-2 {
//           0%, 100% { transform: translate(0); opacity: 0; }
//           15% { transform: translate(-2px, 2px); opacity: 0.5; }
//           25% { transform: translate(2px, -2px); opacity: 0; }
//         }

//         @keyframes typewriter {
//           from { width: 0; }
//           to { width: 100%; }
//         }

//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }

//         @keyframes spin-reverse {
//           from { transform: rotate(360deg); }
//           to { transform: rotate(0deg); }
//         }

//         @keyframes dataFlow {
//           0% {
//             transform: rotate(var(--rotation, 0deg)) translateY(-60px) scale(0);
//             opacity: 0;
//           }
//           10% {
//             transform: rotate(var(--rotation, 0deg)) translateY(-60px) scale(1);
//             opacity: 1;
//           }
//           90% {
//             transform: rotate(var(--rotation, 0deg)) translateY(0) scale(1);
//             opacity: 1;
//           }
//           100% {
//             transform: rotate(var(--rotation, 0deg)) translateY(0) scale(0);
//             opacity: 0;
//           }
//         }

//         @keyframes morph {
//           0%, 100% { border-radius: 0.5rem; transform: rotate(0deg); }
//           25% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
//           50% { border-radius: 0.5rem; transform: rotate(90deg); }
//           75% { border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; }
//         }

//         @keyframes pulse-scale {
//           0%, 100% { transform: scale(1); opacity: 0.8; }
//           50% { transform: scale(1.2); opacity: 1; }
//         }

//         @keyframes ping-slow {
//           0% { transform: scale(0.8); opacity: 1; }
//           100% { transform: scale(1.5); opacity: 0; }
//         }

//         @keyframes stroke-dash {
//           0% { stroke-dasharray: 0 300; }
//           100% { stroke-dasharray: 300 0; }
//         }

//         .animate-glitch-1 {
//           animation: glitch-1 2s infinite;
//         }

//         .animate-glitch-2 {
//           animation: glitch-2 2s infinite reverse;
//         }

//         .animate-glitch-shadow-1 {
//           animation: glitch-shadow-1 3s infinite;
//         }

//         .animate-glitch-shadow-2 {
//           animation: glitch-shadow-2 3s infinite 0.5s;
//         }

//         .animate-typewriter {
//           animation: typewriter 3s steps(30) 1s forwards;
//         }

//         .animate-spin-slow {
//           animation: spin-slow 8s linear infinite;
//         }

//         .animate-spin-reverse {
//           animation: spin-reverse 10s linear infinite;
//         }

//         .animate-morph {
//           animation: morph 4s ease-in-out infinite;
//         }

//         .animate-pulse-scale {
//           animation: pulse-scale 2s ease-in-out infinite;
//         }

//         .animate-ping-slow {
//           animation: ping-slow 3s ease-out infinite;
//         }

//         .animate-stroke-dash {
//           animation: stroke-dash 3s linear infinite;
//           stroke-dasharray: 300;
//           stroke-dashoffset: 0;
//         }

//         .animation-delay-0 {
//           animation-delay: 0ms;
//         }

//         .animation-delay-200 {
//           animation-delay: 200ms;
//         }

//         .animation-delay-400 {
//           animation-delay: 400ms;
//         }

//         .animation-delay-1000 {
//           animation-delay: 1s;
//         }

//         [style*="--rotation"] {
//           --rotation: 0deg;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Loader;
"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Initializing...");
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);

  /* Lightweight progress simulation */
  useEffect(() => {
    let value = 0;
    let lastTime = performance.now();

    const tick = (now) => {
      const delta = now - lastTime;

      if (delta >= 30) {
        lastTime = now;

        if (value < 40) value += 1.2;
        else if (value < 70) value += 0.8;
        else if (value < 90) value += 0.5;
        else value += 0.3;

        value = Math.min(value, 100);
        const rounded = Math.floor(value);

        setProgress(rounded);

        if (rounded < 30) setStatusText("Initializing...");
        else if (rounded < 55) setStatusText("Loading modules...");
        else if (rounded < 80) setStatusText("Configuring environment...");
        else if (rounded < 100) setStatusText("Almost ready...");
        else setStatusText("Ready");
      }

      if (value < 100) {
        animationRef.current = requestAnimationFrame(tick);
      }
    };

    animationRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  /* Optimized particle background - minimal particles, no connections */
  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    let frameId;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 1.5);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });

    // Only 30 particles for performance
    const w = window.innerWidth;
    const h = window.innerHeight;

    particlesRef.current = Array.from({ length: 30 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.12,
      vy: (Math.random() - 0.5) * 0.12,
      size: Math.random() * 1.2 + 0.3,
      opacity: Math.random() * 0.25 + 0.05,
    }));

    let lastFrame = 0;
    const FPS_INTERVAL = 1000 / 30; // Cap at 30fps

    const animate = (timestamp) => {
      const elapsed = timestamp - lastFrame;

      if (elapsed > FPS_INTERVAL) {
        lastFrame = timestamp - (elapsed % FPS_INTERVAL);

       ctx.clearRect(0, 0, canvas.width, canvas.height);

        particlesRef.current.forEach((p) => {
          p.x += p.vx;
          p.y += p.vy;

       if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
         ctx.fillStyle = `rgba(59, 130, 246, ${p.opacity * 0.6})`;
          ctx.fill();
        });
      }

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    const cleanup = initCanvas();
    return cleanup;
  }, [initCanvas]);

  return (
   <div className="fixed inset-0 flex flex-col items-center justify-center z-[9999] overflow-hidden bg-gradient-to-b from-[#EAF3FF] via-[#F4F8FF] to-[#FFFFFF]">

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#EAF3FF] via-[#F4F8FF] to-[#FFFFFF]" />

      {/* Single subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/[0.03] rounded-full blur-[100px]" />

      {/* Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-60" />

      <div className="relative z-10 flex flex-col items-center w-full max-w-xs px-6">

        {/* Logo */}
<motion.div
  layoutId="site-logo"
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ type: "spring", stiffness: 180, damping: 22 }}
  className="mb-2"
>
        <Image
  src="/assets/micrologic.png"
  alt="Micrologic"
  width={240}
  height={70}
  className="w-auto h-12 object-contain"
  priority
/>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="text-[9px] tracking-[0.3em] uppercase text-slate-500 mb-16 font-medium"
        >
          Manufacturing Excellence Platform
        </motion.p>

        {/* Spinner — simple dual ring */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="relative w-16 h-16 mb-10"
        >
          <svg className="w-full h-full animate-spin" viewBox="0 0 100 100" style={{ animationDuration: "2.5s" }}>
            <circle
              cx="50" cy="50" r="40"
              stroke="rgba(148,163,184,0.06)"
              strokeWidth="2"
              fill="none"
            />
            <circle
              cx="50" cy="50" r="40"
              stroke="#3B82F6"
              strokeWidth="2"
              fill="none"
              strokeDasharray="50 202"
              strokeLinecap="round"
              className="drop-shadow-[0_0_6px_rgba(59,130,246,0.4)]"
            />
          </svg>

          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            style={{ animation: "spin-reverse 1.8s linear infinite" }}
          >
            <circle
              cx="50" cy="50" r="30"
              stroke="rgba(148,163,184,0.04)"
              strokeWidth="1.5"
              fill="none"
            />
            <circle
              cx="50" cy="50" r="30"
              stroke="#0EA5E9"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="25 164"
              strokeLinecap="round"
              opacity="0.6"
            />
          </svg>

          {/* Center dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400/80 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
          </div>
        </motion.div>

        {/* Progress section */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="w-full"
        >
          {/* Progress bar */}
          <div className="h-[2px] bg-slate-200 rounded-full overflow-hidden mb-4">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-sky-400 rounded-full transition-[width] duration-150 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Status row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                {progress < 100 && (
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-40" />
                )}
                <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${
                  progress >= 100 ? "bg-emerald-400" : "bg-blue-400"
                }`} />
              </span>
              <span className="text-[11px] text-slate-400 font-mono">
                {statusText}
              </span>
            </div>
            <span className="text-[11px] text-slate-500 font-mono tabular-nums">
              {progress}%
            </span>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
      `}</style>
    </div>
  );
}
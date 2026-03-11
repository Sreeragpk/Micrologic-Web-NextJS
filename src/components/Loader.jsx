// Loader.jsx
"use client";
import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white z-[9999] overflow-hidden">
      {/* Background Circuit Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M10 0v10m0 0h10M0 10h10" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-cyan-400" />
            <circle cx="10" cy="10" r="1" fill="currentColor" className="text-cyan-400" />
          </pattern>
          <rect width="100" height="100" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Title with Glitch Effect */}
      <div className="relative mb-2">
        <h1 className="text-3xl md:text-4xl font-bold tracking-wider relative z-10">
          <span className="inline-block animate-glitch-1">Micro</span>
          <span className="inline-block text-cyan-400 animate-glitch-2">logic</span>
        </h1>
        <h1 className="absolute inset-0 text-3xl md:text-4xl font-bold tracking-wider opacity-50 animate-glitch-shadow-1">
          <span className="text-red-500">Micro</span>
          <span className="text-blue-500">logic</span>
        </h1>
        <h1 className="absolute inset-0 text-3xl md:text-4xl font-bold tracking-wider opacity-50 animate-glitch-shadow-2">
          <span className="text-green-500">Micro</span>
          <span className="text-purple-500">logic</span>
        </h1>
      </div>
      
     <p className="text-sm md:text-base text-blue-300 mb-8">
  Empowering Manufacturing Excellence
</p>

      {/* Main Loader - Hexagonal Tech Core */}
      <div className="relative w-40 h-40">
        {/* Hexagonal Frame */}
        <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 100 100">
          <polygon 
            points="50,10 85,30 85,70 50,90 15,70 15,30" 
            fill="none" 
            stroke="url(#gradient1)" 
            strokeWidth="2"
            className="animate-stroke-dash"
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>

        {/* Inner Gear System */}
        <div className="absolute inset-4 animate-spin-reverse">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <g transform="translate(50,50)">
              {[...Array(8)].map((_, i) => (
                <rect
                  key={i}
                  x="-2"
                  y="-30"
                  width="4"
                  height="60"
                  fill="url(#gradient2)"
                  transform={`rotate(${i * 45})`}
                  opacity="0.6"
                />
              ))}
              <circle r="20" fill="none" stroke="url(#gradient2)" strokeWidth="2" />
              <circle r="10" fill="url(#gradient2)" opacity="0.8" />
            </g>
            <defs>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Data Flow Particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: `hsl(${i * 30}, 100%, 60%)`,
              top: '50%',
              left: '50%',
              transform: `rotate(${i * 30}deg) translateY(-60px)`,
              animation: `dataFlow ${3 + i * 0.1}s linear infinite`,
              boxShadow: `0 0 10px hsl(${i * 30}, 100%, 60%)`,
            }}
          />
        ))}

        {/* Central Processing Core */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-purple-600 to-blue-600 rounded-lg animate-morph shadow-lg shadow-cyan-500/50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded animate-pulse-scale"></div>
            </div>
          </div>
        </div>

        {/* Energy Rings */}
        <div className="absolute inset-0 animate-ping-slow">
          <div className="w-full h-full rounded-full border-2 border-cyan-400/30"></div>
        </div>
        <div className="absolute inset-0 animate-ping-slow animation-delay-1000">
          <div className="w-full h-full rounded-full border-2 border-purple-400/20"></div>
        </div>
      </div>

      {/* Loading Status */}
      <div className="mt-8 flex items-center space-x-2">
        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce animation-delay-0"></div>
        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce animation-delay-200"></div>
        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce animation-delay-400"></div>
      </div>

      <style jsx>{`
        @keyframes glitch-1 {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-1px, 1px); }
          40% { transform: translate(1px, -1px); }
          60% { transform: translate(-1px, 0); }
        }

        @keyframes glitch-2 {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(1px, -1px); }
          40% { transform: translate(-1px, 1px); }
          60% { transform: translate(1px, 0); }
        }

        @keyframes glitch-shadow-1 {
          0%, 100% { transform: translate(0); opacity: 0; }
          10% { transform: translate(2px, -2px); opacity: 0.5; }
          20% { transform: translate(-2px, 2px); opacity: 0; }
        }

        @keyframes glitch-shadow-2 {
          0%, 100% { transform: translate(0); opacity: 0; }
          15% { transform: translate(-2px, 2px); opacity: 0.5; }
          25% { transform: translate(2px, -2px); opacity: 0; }
        }

        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes dataFlow {
          0% { 
            transform: rotate(var(--rotation, 0deg)) translateY(-60px) scale(0);
            opacity: 0;
          }
          10% {
            transform: rotate(var(--rotation, 0deg)) translateY(-60px) scale(1);
            opacity: 1;
          }
          90% {
            transform: rotate(var(--rotation, 0deg)) translateY(0) scale(1);
            opacity: 1;
          }
          100% { 
            transform: rotate(var(--rotation, 0deg)) translateY(0) scale(0);
            opacity: 0;
          }
        }

        @keyframes morph {
          0%, 100% { border-radius: 0.5rem; transform: rotate(0deg); }
          25% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          50% { border-radius: 0.5rem; transform: rotate(90deg); }
          75% { border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; }
        }

        @keyframes pulse-scale {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.2); opacity: 1; }
        }

        @keyframes ping-slow {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }

        @keyframes stroke-dash {
          0% { stroke-dasharray: 0 300; }
          100% { stroke-dasharray: 300 0; }
        }

        .animate-glitch-1 {
          animation: glitch-1 2s infinite;
        }

        .animate-glitch-2 {
          animation: glitch-2 2s infinite reverse;
        }

        .animate-glitch-shadow-1 {
          animation: glitch-shadow-1 3s infinite;
        }

        .animate-glitch-shadow-2 {
          animation: glitch-shadow-2 3s infinite 0.5s;
        }

        .animate-typewriter {
          animation: typewriter 3s steps(30) 1s forwards;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 10s linear infinite;
        }

        .animate-morph {
          animation: morph 4s ease-in-out infinite;
        }

        .animate-pulse-scale {
          animation: pulse-scale 2s ease-in-out infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 3s ease-out infinite;
        }

        .animate-stroke-dash {
          animation: stroke-dash 3s linear infinite;
          stroke-dasharray: 300;
          stroke-dashoffset: 0;
        }

        .animation-delay-0 {
          animation-delay: 0ms;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        [style*="--rotation"] {
          --rotation: 0deg;
        }
      `}</style>
    </div>
  );
};

export default Loader;
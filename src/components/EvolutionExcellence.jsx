
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
// import evolution from "../assets/evo.webp";

export default function EvolutionExcellence() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* Full-screen Evolution Image */}
      <Image
        src="/assets/evo.webp"
        alt="Evolution Background"
        className="absolute inset-0 w-full h-full object-cover"
        fill
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Centered Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          {/* Subheading */}
          <h2 className="text-cyan-300 font-semibold text-sm sm:text-base md:text-lg uppercase tracking-widest">
            From Evolution
          </h2>

          {/* Main Heading */}
          <h2 className="text-white font-extrabold text-4xl md:text-6xl uppercase leading-snug">
            To Excellence
          </h2>

          {/* Intro */}
          <p className="text-gray-200 leading-relaxed max-w-3xl mx-auto">
            Since 2006, Micrologic has been consistently innovating and constantly
            evolving towards a single purpose — to keep our clients ahead.
          </p>

          {/* Bullet Points */}
          <ul className="list-disc list-inside inline-block text-left text-gray-200 space-y-1">
            <li>Ahead of rising costs.</li>
            <li>Ahead of compliance demands.</li>
            <li>Ahead of shifting technologies.</li>
            <li>Ahead of the competition.</li>
          </ul>

          {/* Body */}
          <p className="text-gray-200 leading-relaxed max-w-3xl mx-auto">
            Every upgrade, every solution, and every system we deliver is designed
            to do more with less — faster, smarter, and right the first time.
          </p>

          <p className="text-gray-200 leading-relaxed max-w-3xl mx-auto">
            With 2000+ installations powering industries across India and beyond,
            our evolution isn’t about chasing trends.
          </p>

          {/* Highlight */}
          <p className="text-cyan-300 font-semibold 
  text-base sm:text-lg md:text-xl
  drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]
  text-shadow">
  It’s about creating excellence that puts you ahead — and keeps you there.
</p>

        </motion.div>

      </div>
      
    </section>
  );
}

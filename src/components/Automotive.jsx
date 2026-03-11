"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Seo from "./Seo";
import {
  CpuChipIcon,
  AdjustmentsHorizontalIcon,
  LightBulbIcon,
  Squares2X2Icon,
  CubeTransparentIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

import motorController from "../assets/motor-controller.jpg";
import motorController1 from "../assets/motor-controller1.jpg";
import remotekey from "../assets/remotekey.jpg";   
import onboardcharger from "../assets/onboardcharger.png";
import vcu from "../assets/vcu.jpg";                 


// Enhanced categories with better organization
const categories = [
  {
    title: "Power Electronics",
    icon: CpuChipIcon,
    color: "blue",
    description: "Power systems and charging solutions",
    items: [
      "Motor Controllers",
      "On Board Chargers",
      "DC to DC Contoller",
      "Wireless Chargers",
      "Battery Management",
      "EV Supply Equipment",
      "Battery Interconnect",
      "USB Charger",

    ],
  },
  {
    title: "Controllers",
    icon: AdjustmentsHorizontalIcon,
    color: "purple",
    description: "Vehicle and body control modules",
    items: [
      "Vehicle Control Unit",
      "Body Control Module",
      "Brake Controllers",
      "Fan Controls",
      "EGR Controller",
      "ECU",
    ],
  },
  {
    title: "Switches / RF",
    icon: Squares2X2Icon,
    color: "emerald",
    description: "Switches and wireless systems",
    items: [
      "Window Switches",
      "Steering Switches",
      "Gear Shifter",
      "Start Button",
      "Remote Keys",
      "Ultra Wide Band",
    ],
  },
  {
    title: "Lighting",
    icon: LightBulbIcon,
    color: "amber",
    description: "Automotive lighting solutions",
    items: [
      "Head Lights",
      "Tail Lamps",
      "Indicator Lights",
      "Projector Lamps",
      "Tail Strip",
      "Light Controllers",
    ],
  },
  {
    title: "Display Devices",
    icon: CubeTransparentIcon,
    color: "indigo",
    description: "In-vehicle display systems",
    items: [
      "Instrument Clusters",
      "Infotainment Systems",
      "Audio Systems",
      "HVAC",
    ],
  },
  {
    title: "Sensors",
    icon: SparklesIcon,
    color: "rose",
    description: "Automotive sensor technologies",
    items: [
      "Reverse Parking",
      "TPMS",
      "Touch Sensors",
    ],
  },
];

// Organized image layout with grid positions
const imageLayout = [
  { 
    src: motorController,
    title: "Instrument Cluster",
    category: "Display Devices",
    position: "showcase", // Main showcase item
  },
  { 
    src: vcu,
    title: "Vehicle Control Unit",
    category: "Control Systems",
    position: "grid-1",
  },
  { 
    src: remotekey,
    title: "Remote Key System",
    category: "Interface & RF",
    position: "grid-2",
  },
  { 
    src: onboardcharger,
    title: "On-Board Charger",
    category: "Power Electronics",
    position: "grid-3",
  },
  { 
    src: motorController1,
    title: "Advanced Motor Control",
    category: "Power Electronics",
    position: "grid-4",
  },
];

export default function AutomotiveExperienceexamples() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [hoveredImage, setHoveredImage] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
<Seo
  title="Automotive Electronics Experience | Micrologic Integrated Systems"
  description="Over 18 years of expertise in Power Electronics, Motor Controllers, Vehicle Control Units (VCU), On-Board Chargers, Automotive Displays, Remote Key Systems (RKE), Sensors and RF technologies for next-generation vehicles."
  canonical="https://www.micrologicglobal.com/industries/automotive"
  keywords="automotive electronics, ECU development, motor controllers, on-board charger, vehicle control unit VCU, automotive infotainment clusters, remote key entry RKE, ultra wide band automotive, charger BMS systems, automotive lighting headlamps, tail lamps, EV power electronics"
  ogImage={motorController}
/>
    
    <section className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 py-24 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, gray 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Floating orbs for depth */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-delayed"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Enhanced Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-6">
            <SparklesIcon className="w-4 h-4" />
            <span>20+ Years of Excellence</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="text-gray-900">Automotive</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600">
              Electronics Experience
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pioneering innovation in automotive technology with comprehensive electronic solutions 
            for the vehicles of tomorrow
          </p>
        </motion.div>

        {/* Main Content Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left: Smart Image Gallery */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Showcase Image */}
            <div className="relative group">
              <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
                <motion.img
                  src={imageLayout[0].src}
                  alt={imageLayout[0].title}
                  className="w-full h-80 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-1">{imageLayout[0].title}</h3>
                  <p className="text-sm opacity-90">{imageLayout[0].category}</p>
                </div>
              </div>
            </div>

            {/* Grid Images */}
            <div className="grid grid-cols-2 gap-4">
              {imageLayout.slice(1).map((img, index) => (
                <motion.div
                  key={index}
                  className="relative group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  onMouseEnter={() => setHoveredImage(index)}
                  onMouseLeave={() => setHoveredImage(null)}
                  whileHover={{ y: -8 }}
                >
                  <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
                    <img
                      src={img.src}
                      alt={img.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className={`
                      absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    `}></div>
                    
                    {/* Hover Info */}
                    <AnimatePresence>
                      {hoveredImage === index && (
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <div className="text-center text-white p-4">
                            <h4 className="font-bold text-lg mb-1">{img.title}</h4>
                            <p className="text-sm opacity-90">{img.category}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats Bar */}
            <motion.div 
              className="grid grid-cols-3 gap-4 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
             
            </motion.div>
          </motion.div>

          {/* Right: Category Cards with Tabs */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2 mb-6">
              {["All", "Power", "Control", "Interface"].map((tab, i) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(i)}
                  className={`
                    px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                    ${activeTab === i 
                      ? 'bg-gray-900 text-white shadow-lg' 
                      : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md'
                    }
                  `}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Category Cards */}
            <div className="grid gap-4">
              {categories
                .filter((cat, i) => activeTab === 0 || (activeTab === 1 && i < 2) || (activeTab === 2 && i >= 2 && i < 4) || (activeTab === 3 && i >= 4))
                .map((cat, index) => (
                <motion.div
                  key={cat.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onClick={() => setSelectedCategory(selectedCategory === index ? null : index)}
                  className="cursor-pointer"
                >
                  <div className={`
                    relative bg-white rounded-2xl shadow-md hover:shadow-xl
                    border-2 transition-all duration-300
                    ${selectedCategory === index 
                      ? `border-${cat.color}-500 shadow-${cat.color}-500/20` 
                      : 'border-transparent'
                    }
                  `}>
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className={`
                            w-12 h-12 rounded-xl bg-${cat.color}-50 
                            flex items-center justify-center
                          `}>
                            <cat.icon className={`w-6 h-6 text-${cat.color}-600`} />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-gray-900">{cat.title}</h3>
                            <p className="text-xs text-gray-500">{cat.description}</p>
                          </div>
                        </div>
                        <motion.div
                          animate={{ rotate: selectedCategory === index ? 180 : 0 }}
                          className="text-gray-400"
                        >
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </motion.div>
                      </div>
                      <AnimatePresence>
                        {selectedCategory === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 border-t border-gray-100">
                              <div className="grid grid-cols-2 gap-2">
                                {cat.items.map((item, i) => (
                                  <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                    <div className={`w-1.5 h-1.5 rounded-full bg-${cat.color}-400`}></div>
                                    {item}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

     
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 15s linear infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
    </>
  );
}
// src/components/ArchitectureSection.js
"use client";
import React, { useState } from 'react';
import { Layers, CheckCircle, X } from 'lucide-react';
import architectureImage from '../assets/your-architecture-image.png'; // <-- UPDATE THIS PATH

const highlights = [
  {
    title: "End-to-End Integration",
    description: "Seamlessly connects cloud analytics, software, instrumentation, and physical test fixtures.",
    color: "from-blue-500 to-purple-500"
  },
  {
    title: "Data-Driven Insights",
    description: "Leverages Micrologic FactEyes and Traceware for powerful analytics and complete traceability.",
    color: "from-green-500 to-teal-500"
  },
  {
    title: "Modular & Scalable",
    description: "A flexible combination of hardware and software that adapts to your specific testing needs.",
    color: "from-pink-500 to-red-500"
  }
];

const ArchitectureSection = () => {
  const [isLightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <section id="architecture" className="relative py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 overflow-hidden">
        
        {/* Background Decorative Blobs */}
        <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-10 right-10 w-[28rem] h-[28rem] bg-purple-300/20 rounded-full blur-3xl -z-10"></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-16 text-center">
              The Anatomy of an MTS Tester
            </h2>
            <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Explore the interconnected components of our <span className="font-semibold text-blue-700">Micrologic Test Suite platform</span>, 
              from cloud analytics to the physical tester cell — designed for <span className="font-semibold text-purple-700">unparalleled efficiency and control</span>.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-16 items-center">
            {/* Architecture Image Card */}
            <div className="lg:col-span-3 relative group">
              <div 
                onClick={() => setLightboxOpen(true)}
                className="rounded-2xl shadow-2xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(59,130,246,0.35)]"
              >
                <img 
                  src={architectureImage} 
                  alt="MTS Tester Functional Block Diagram" 
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-lg font-semibold bg-black/50 px-5 py-2 rounded-full shadow-md">🔍 View Larger</span>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 flex items-center mb-6">
                <Layers className="h-7 w-7 mr-3 text-blue-600" />
                Key Components & Benefits
              </h3>

              <div className="space-y-6">
                {highlights.map((item, i) => (
                  <div key={i} className="relative p-6 rounded-xl shadow-md bg-white overflow-hidden group transition-all hover:shadow-xl hover:-translate-y-1">
                    <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${item.color}`}></div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2" /> {item.title}
                    </h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>

              <button className="mt-10 w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-blue-500/40 transition-all duration-300">
                🚀 Speak to an Engineer
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div 
          onClick={() => setLightboxOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in"
        >
          <button 
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
          >
            <X size={36} />
          </button>
          <img 
            src={architectureImage} 
            alt="MTS Tester Functional Block Diagram - Full view"
            className="max-w-full max-h-full rounded-lg shadow-2xl transform animate-[zoomIn_0.4s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default ArchitectureSection;
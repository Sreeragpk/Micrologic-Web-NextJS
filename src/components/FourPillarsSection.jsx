"use client";
import React, { useEffect, useRef, useState } from "react";
import bgImage from "../assets/top.png";
import testImage from "../assets/testimg.png";
import assemblyImage from "../assets/assem.png";
import middleImage from "../assets/full.png"; // big conveyor machine

const FourPillarsSection = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 px-6 md:px-12 lg:px-20 bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col space-y-20">
        {/* --- Pillar 1: Test to Trust --- */}
        <div
          className={`flex flex-col lg:flex-row items-center gap-12 transform transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Left Image */}
          <div className="flex-1 flex justify-center">
            <img
              src={testImage}
              alt="TO TRUST"
              className="max-h-[260px] object-contain drop-shadow-lg"
            />
          </div>
          {/* Right Text */}
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-extrabold uppercase text-gray-800">
              FROM TEST <span className="block text-blue-700">TO TRUST</span>
            </h3>
            <p className="mt-3 text-gray-700 text-sm md:text-base leading-relaxed">
              Our full-stack MTS Software Platform combined with our hardware solutions 
              offers you end-to-end testing from PCB Assemblies to final Products.
            </p>
            <ul className="mt-4 space-y-2 text-gray-700 text-sm md:text-base list-disc ml-5">
              <li>In-circuit Testing (ICT)</li>
              <li>Functional Testing (FCT)</li>
              <li>In-system Programming (ISP)</li>
              <li>End of Line Testing (EOL)</li>
              <li>RF Testing</li>
            </ul>
          </div>
        </div>

        {/* --- Pillar 2: Assembly to Automation --- */}
        <div
          className={`flex flex-col lg:flex-row-reverse items-center gap-12 transform transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } delay-[150ms]`}
        >
          {/* Right Image */}
          <div className="flex-1 flex justify-center">
            <img
              src={assemblyImage}
              alt="TO AUTOMATION"
              className="max-h-[260px] object-contain drop-shadow-lg"
            />
          </div>
          {/* Left Text */}
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-extrabold uppercase text-gray-800">
              FROM ASSEMBLY{" "}
              <span className="block text-blue-700">TO AUTOMATION</span>
            </h3>
            <p className="mt-3 text-gray-700 text-sm md:text-base leading-relaxed">
              Smarter, faster, and more reliable automation with Micrologic’s Assembly Solutions.
            </p>
            <ul className="mt-4 space-y-2 text-gray-700 text-sm md:text-base list-disc ml-5">
              <li>Effortless Part Handling – Conveyors, modular workstations, rotary indexers.</li>
              <li>Reliable Assembly Processes – Automated screw driving, riveting, dispensing, potting, and leak testing.</li>
              <li>Scalable & Future-Ready – Modular solutions that adapt to Industry 4.0 standards.</li>
            </ul>
          </div>
        </div>

        {/* --- Pillar 3: Track to Transparency --- */}
        <div
          className={`flex flex-col lg:flex-row items-center gap-12 transform transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } delay-[300ms]`}
        >
          {/* Left Image */}
          <div className="flex-1 flex justify-center">
            <img
              src={middleImage}
              alt="TO TRANSPARENCY"
              className="max-h-[400px] object-contain drop-shadow-lg"
            />
          </div>
          {/* Right Text */}
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-extrabold uppercase text-gray-800">
              FROM TRACK <span className="block text-blue-700">TO TRANSPARENCY</span>
            </h3>
            <p className="mt-3 text-gray-700 text-sm md:text-base leading-relaxed">
              With Micrologic Traceware you can:
            </p>
            <ul className="mt-4 space-y-2 text-gray-700 text-sm md:text-base list-disc ml-5">
              <li>Trace every step – From raw materials to finished products.</li>
              <li>Act in real time – Barcodes, RFID, and live capture.</li>
              <li>Pinpoint problems faster – Isolate defects, inefficiencies, and root causes.</li>
              <li>Ensure compliance & safety – Meet industry standards with confidence.</li>
              <li>Intelligent Data Management – Traceability, analytics, and dashboards.</li>
            </ul>
          </div>
        </div>

        {/* --- Pillar 4: Data to Decisions --- */}
        <div
          className={`flex flex-col lg:flex-row-reverse items-center gap-12 transform transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } delay-[450ms]`}
        >
          {/* Right Image */}
          <div className="flex-1 flex justify-center relative">
            <img
              src="https://zeroeyes.com/wp-content/uploads/2021/09/ZE-Machine-Learning-Deep-Learning-Neural-Networks-e1631566829553.png"
              alt="AI Illustration"
              className="max-h-[220px] object-contain drop-shadow-lg rounded-full"
            />
          </div>
          {/* Left Text */}
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-extrabold uppercase text-gray-800">
              FROM DATA <span className="block text-blue-700">TO DECISIONS</span>
            </h3>
            <p className="mt-3 text-gray-700 text-sm md:text-base leading-relaxed">
              Turn data into intelligence with Micrologic Facteyes. Our industry-specific Digital Transformation Solutions integrate AI, IoT, and Industry 4.0 technologies.
            </p>
            <ul className="mt-4 space-y-2 text-gray-700 text-sm md:text-base list-disc ml-5">
              <li>Evolve from data to intelligence: Convert raw information into actionable insights.</li>
              <li>Comprehensive Data Platform – ingestion, processing & analytics.</li>
              <li>Interactive Dashboards: Real-time efficiency and predictive analytics.</li>
              <li>Proven impact: Enhance efficiency, detect defects, reduce downtime.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourPillarsSection;
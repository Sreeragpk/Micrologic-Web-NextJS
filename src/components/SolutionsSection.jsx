// src/components/SolutionsSection.js
import React, { useState } from "react";
import { CheckCircle, Cpu, Settings, BarChart3 } from "lucide-react";

const solutionsData = {
  "Test Solutions": {
    description:
      "Comprehensive testing capabilities to ensure product quality and reliability from component to final assembly.",
    icon: <Cpu className="h-8 w-8 text-blue-600" />,
    accent: "from-blue-500 to-indigo-500",
    details: [
      "In-circuit Testing (ICT)",
      "Functional Testing (FCT)",
      "In-System Programming (ISP)",
      "End of Line Testing (EOL)",
      "Software: Micrologic Test Suite (MTS)",
      "Test Cases: Current, Voltage, Efficiency, CAN, IR, Hi-Pot, Sensors",
    ],
  },
  "Assembly Automation": {
    description:
      "Robust automation solutions designed to streamline manufacturing processes, increase throughput, and reduce manual error.",
    icon: <Settings className="h-8 w-8 text-purple-600" />,
    accent: "from-purple-500 to-pink-500",
    details: [
      "Part Handling: Conveyors, Rotary Indexers",
      "Processes: Screw Driving, Press Fitting, Riveting, Dispensing",
      "Advanced Processes: Potting, Leak Testing, Soldering, Packing",
      "Modular & Flexible Workstations",
    ],
  },
  "Traceability & Data Analytics": {
    description:
      "Intelligent software platforms that provide real-time tracking and powerful data insights for process optimization.",
    icon: <BarChart3 className="h-8 w-8 text-green-600" />,
    accent: "from-green-500 to-emerald-500",
    details: [
      "Traceware: Real-time product tracking (Barcodes, RFID)",
      "FactEyes: Big data analytics platform (OEE, Cp-Cpk, Gage R&R)",
      "Benefits: Supply chain visibility, compliance, faster recalls",
      "Predictive Maintenance Alerts & Rejection Analysis",
    ],
  },
};

const SolutionsSection = () => {
  const [activeTab, setActiveTab] = useState("Test Solutions");
  const tabs = Object.keys(solutionsData);

  return (
    <section
      id="solutions"
      className="relative py-20 bg-gradient-to-br from-white via-blue-50 to-gray-50 overflow-hidden"
    >
      {/* Floating Blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl -z-10 animate-pulse"></div>
      
      {/* Title */}
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Our <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Core Solutions</span>
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          Integrated systems to solve your most complex manufacturing challenges.
        </p>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Tabs */}
        <div className="flex justify-center flex-wrap gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-6 py-2 rounded-full font-medium transition duration-300 shadow-sm
                ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105"
                    : "bg-white text-gray-600 border hover:shadow-md"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center mb-4">
            {solutionsData[activeTab].icon}
          </div>
          <p className="text-lg text-gray-800">
            {solutionsData[activeTab].description}
          </p>
        </div>

        {/* Detail Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {solutionsData[activeTab].details.map((item, i) => (
            <div
              key={item}
              className={`group p-6 rounded-xl shadow-md border border-gray-100 bg-white hover:shadow-2xl hover:-translate-y-1 transform transition duration-300 relative overflow-hidden`}
            >
              {/* Gradient Accent Strip */}
              <div
                className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${solutionsData[activeTab].accent}`}
              ></div>

              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-gradient-to-br from-gray-100 to-gray-50 group-hover:scale-110 transition-transform shadow-inner">
                <CheckCircle className="h-6 w-6 text-blue-600" />
              </div>
              <p className="text-gray-800 font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
"use client";
import React, { useState } from "react";
import { 
  Cpu,
  Zap,
  Shield,
  Settings,
  Activity,
  Radio,
  Plug,
  Terminal,
  Factory,
  Wind,
  Gauge,
  Layers,
  Network,
  Power,
  CheckCircle2,
  Eye,
  Wrench,
  Clock,
  Target,
  Box,
  Thermometer,
  Database,
  CircuitBoard,
  ArrowRight,
  X,
  ZoomIn
} from "lucide-react";
import controlPanelImg from "../assets/River rider Control panel .jpg"; // Update with your actual image names
import controlSystemImg from "../assets/Control Panel .JPG";

const Badge = ({ children, variant = "primary", icon: Icon }) => {
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white",
    secondary: "bg-gradient-to-r from-green-600 to-emerald-600 text-white",
    accent: "bg-gradient-to-r from-orange-600 to-red-600 text-white",
  };

  return (
    <span className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full ${variants[variant]} text-xs sm:text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}>
      {Icon && <Icon className="w-3 h-3 sm:w-4 sm:h-4" />}
      {children}
    </span>
  );
};

const FeatureCard = ({ icon: Icon, title, description, gradient }) => (
  <div className="group relative p-4 sm:p-5 md:p-6 bg-white rounded-xl sm:rounded-2xl border-2 border-slate-100 hover:border-blue-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 overflow-hidden">
    <div className={`absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 ${gradient} opacity-5 rounded-full -mr-12 -mt-12 sm:-mr-16 sm:-mt-16 group-hover:scale-150 transition-transform duration-500`}></div>
    
    <div className="relative z-10">
      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
        <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
      </div>
      <h3 className="font-bold text-base sm:text-lg md:text-xl text-slate-900 mb-2 sm:mb-3">{title}</h3>
      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

const ComponentCard = ({ number, title, description, icon: Icon, gradient }) => (
  <div className="flex items-start bg-blue-50 rounded-lg p-4 hover:bg-blue-100 transition-all duration-200">
    <div className={`bg-gradient-to-br ${gradient} text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0 shadow-lg`}>
      {number}
    </div>
    <div>
      <div className="flex items-center gap-2 mb-2">
        <Icon className="w-5 h-5 text-blue-600" />
        <h4 className="font-bold text-gray-800">{title}</h4>
      </div>
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  </div>
);

const IndustryCard = ({ icon: Icon, title, description, gradient }) => (
  <div className="bg-gray-700 bg-opacity-50 rounded-lg p-6 hover:bg-opacity-70 transition-all duration-300 hover:-translate-y-1">
    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white mx-auto mb-4 shadow-lg`}>
      <Icon className="w-7 h-7" />
    </div>
    <h4 className="font-bold text-xl mb-2 text-center">{title}</h4>
    <p className="text-gray-300 text-sm text-center">{description}</p>
  </div>
);

const SpecificationItem = ({ label, value, icon: Icon }) => (
  <div className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-gradient-to-br from-slate-50 to-white rounded-lg sm:rounded-xl border border-slate-200 hover:border-blue-300 transition-all duration-200">
    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
    </div>
    <div className="flex-1 min-w-0">
      <div className="text-xs sm:text-sm font-semibold text-slate-900 mb-0.5 sm:mb-1">{label}</div>
      <div className="text-xs sm:text-sm text-slate-600">{value}</div>
    </div>
  </div>
);

const ImageModal = ({ src, alt, onClose }) => {
  if (!src) return null;
  
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-2 sm:p-4 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div className="max-w-7xl w-full rounded-xl sm:rounded-2xl overflow-hidden bg-white shadow-2xl animate-scaleIn" onClick={(e) => e.stopPropagation()}>
        <div className="relative">
          <img src={src} alt={alt} className="w-full h-auto object-contain bg-slate-900 max-h-[70vh] sm:max-h-[85vh]" />
          <button
            onClick={onClose}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 hover:bg-white shadow-2xl flex items-center justify-center text-slate-700 hover:text-slate-900 transition-all duration-200 hover:scale-110"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
        <div className="p-4 sm:p-6 bg-gradient-to-r from-slate-50 to-white border-t-2 border-slate-200">
          <p className="text-sm sm:text-base font-semibold text-slate-800">{alt}</p>
        </div>
      </div>
    </div>
  );
};

const ControlSystems = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const openModal = (image, alt) => {
    setModalImage({ src: image, alt });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalImage(null);
  };

  const coreComponents = [
    {
      icon: Activity,
      title: "Inputs / Sensors",
      description: "Advanced sensing technologies to accurately measure and capture real-time process data for informed decision-making.",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: Cpu,
      title: "Smart Controllers",
      description: "Industry-leading PLCs, microcontrollers, and PID controllers from premium brands like Siemens and Allen-Bradley.",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Settings,
      title: "Actuators & Outputs",
      description: "High-performance motors, valves, and relays that execute control commands with precision and reliability.",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Plug,
      title: "Power & Protection",
      description: "Industrial-grade power supplies with comprehensive protection circuits ensuring continuous, safe operation.",
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      icon: Radio,
      title: "Communication Networks",
      description: "Seamless integration with SCADA, HMI, and enterprise systems using modern industrial protocols.",
      gradient: "from-red-500 to-pink-600"
    },
    {
      icon: Terminal,
      title: "Professional Wiring",
      description: "Meticulously organized I/O terminals and cable management for easy maintenance and troubleshooting.",
      gradient: "from-cyan-500 to-blue-600"
    }
  ];

  const panelComponents = [
    {
      number: "1",
      title: "PLC (Programmable Logic Controller)",
      description: "The intelligent core of the system. Premium Siemens PLC modules process thousands of inputs and execute complex control algorithms with microsecond precision.",
      icon: Cpu,
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      number: "2",
      title: "I/O Terminal Blocks",
      description: "Organized terminal strips (X1-X9 series) providing systematic connections for sensors, switches, and actuators. Color-coded and labeled for quick identification.",
      icon: Terminal,
      gradient: "from-green-600 to-emerald-600"
    },
    {
      number: "3",
      title: "Industrial Power Supplies",
      description: "Meanwell EDR-120-24 units delivering stable, regulated 24V DC power with built-in protections against overvoltage, overcurrent, and short circuits.",
      icon: Power,
      gradient: "from-yellow-600 to-orange-600"
    },
    {
      number: "4",
      title: "Communication Modules",
      description: "ICP CON industrial converters enabling RS485, Modbus, and analog signal communication between field devices and control systems.",
      icon: Network,
      gradient: "from-purple-600 to-pink-600"
    },
    {
      number: "5",
      title: "Circuit Protection",
      description: "Industrial-grade circuit breakers (Q2, Q3) and fuses providing multi-level protection against electrical faults, ensuring system safety.",
      icon: Shield,
      gradient: "from-red-600 to-pink-600"
    },
    {
      number: "6",
      title: "Motor Drivers & Relays",
      description: "High-capacity motor controllers with integrated heat sinks, capable of driving large motors and managing heavy industrial loads.",
      icon: Zap,
      gradient: "from-indigo-600 to-blue-600"
    },
    {
      number: "7",
      title: "Professional Cable Management",
      description: "Every wire is labeled, routed, and secured according to industry best practices, making troubleshooting simple and maintenance efficient.",
      icon: Wrench,
      gradient: "from-teal-600 to-cyan-600"
    }
  ];

  const industries = [
    {
      icon: Factory,
      title: "Manufacturing & Assembly",
      description: "Automated production lines, quality control systems, and process optimization solutions",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: Settings,
      title: "Robotics & Automation",
      description: "Industrial robots, AGVs, collaborative robots, and smart material handling systems",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Zap,
      title: "Power Generation",
      description: "Energy plants, distribution networks, and renewable energy integration systems",
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      icon: Wind,
      title: "Building Automation",
      description: "HVAC control, energy management, and intelligent building systems",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      icon: CircuitBoard,
      title: "CNC & Machining",
      description: "Precision machining centers, milling, turning, and custom fabrication equipment",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Box,
      title: "Material Handling",
      description: "Conveyor systems, sorting equipment, warehouse automation, and logistics solutions",
      gradient: "from-red-500 to-pink-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100">
      {/* HERO SECTION */}
      <header className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        {/* Decorative Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-tr from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6 mt-4">
                <Badge variant="primary" icon={Cpu}>
                  Industrial Control Excellence
                </Badge>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Control Systems
                  </span>
                  <br />
                  <span className="text-slate-900">Engineering</span>
                </h1>

                <p className="text-lg sm:text-xl md:text-2xl font-medium text-slate-700 leading-relaxed">
                  Precision automation solutions for industrial processes
                </p>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                  We design, build, and commission sophisticated control systems that power modern 
                  industrial operations with reliability, precision, and seamless integration.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-2 sm:gap-3 pt-2 sm:pt-4">
                <div className="px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl bg-white border-2 border-blue-200 shadow-sm">
                  <div className="text-xl sm:text-2xl font-bold text-blue-600">99.9%</div>
                  <div className="text-xs text-slate-600">Uptime</div>
                </div>
                <div className="px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl bg-white border-2 border-indigo-200 shadow-sm">
                  <div className="text-xl sm:text-2xl font-bold text-indigo-600">24/7</div>
                  <div className="text-xs text-slate-600">Monitoring</div>
                </div>
                <div className="px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl bg-white border-2 border-cyan-200 shadow-sm">
                  <div className="text-xl sm:text-2xl font-bold text-cyan-600">UL/CE</div>
                  <div className="text-xs text-slate-600">Certified</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative mt-8 lg:mt-0">
              <div 
                className="group relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer transform hover:-translate-y-1 sm:hover:-translate-y-2"
                onClick={() => openModal(controlPanelImg, "Professional Control Panel Installation")}
              >
                <img
                  src={controlPanelImg}
                  alt="Control System Panel"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="eager"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
                    <p className="font-bold text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2">Industrial Control Panel</p>
                    <p className="text-xs sm:text-sm text-white/90">Click to view full size</p>
                  </div>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl">
                  <ZoomIn className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
              </div>

              {/* Floating Info Cards */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl border-2 border-blue-200 hidden md:block">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white">
                    <Cpu className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">PLC Type</div>
                    <div className="font-bold text-sm sm:text-base text-slate-900">Siemens S7</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl border-2 border-cyan-200 hidden md:block">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white">
                    <Power className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Power Supply</div>
                    <div className="font-bold text-sm sm:text-base text-slate-900">24V DC</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* What is a Control System */}
        <section className="mb-16 sm:mb-20">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <Badge variant="primary" icon={Target}>
              Core Technology
            </Badge>
            <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
              What is a Control System?
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto px-4">
              A sophisticated integration of hardware and software designed to monitor, regulate, 
              and optimize industrial machines and processes with precision and reliability.
            </p>
            <div className="mt-4 sm:mt-6 w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {coreComponents.map((component, idx) => (
              <FeatureCard key={idx} {...component} />
            ))}
          </div>
        </section>

        {/* Control Panel Showcase */}
        <section className="mb-16 sm:mb-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Badge variant="secondary" icon={Eye}>
                Professional Engineering
              </Badge>
              <h3 className="mt-4 text-3xl font-bold text-gray-800 mb-6">
                Precision Engineering, Every Time
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our control panels are built to the highest industry standards, featuring premium 
                components and meticulous attention to detail. Every installation undergoes rigorous 
                testing to ensure optimal performance and longevity.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="text-green-600 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">UL/CE certified components and assemblies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-green-600 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Comprehensive documentation and as-built drawings</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-green-600 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Factory acceptance testing (FAT) before deployment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-green-600 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">On-site commissioning and staff training</span>
                </li>
              </ul>
            </div>
            <div 
              className="bg-white rounded-lg shadow-xl p-4 cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              onClick={() => openModal(controlSystemImg, "Detailed Control System Components")}
            >
              <img
                src={controlSystemImg}
                alt="Control System Components"
                className="w-full h-auto object-cover rounded-lg"
              />
              <p className="text-sm text-gray-600 mt-3 text-center italic">
                State-of-the-art control panel with organized wiring and industrial-grade components
              </p>
            </div>
          </div>
        </section>

        {/* Component Breakdown */}
        <section className="mb-16 sm:mb-20">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white p-8">
              <h3 className="text-3xl font-bold text-center">
                Inside Our Control Panels
              </h3>
              <p className="text-center text-blue-100 mt-2 max-w-2xl mx-auto">
                Every component is carefully selected and professionally installed for maximum reliability
              </p>
            </div>

            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-6">
                {panelComponents.map((component, idx) => (
                  <ComponentCard key={idx} {...component} />
                ))}
              </div>

              <div className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-800 text-white rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-lg mb-1">Quality Guarantee</p>
                    <p className="text-sm text-blue-100">
                      All our control panels are built to IEC and NEMA standards, with full documentation, 
                      CAD drawings, and comprehensive warranty coverage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="mb-16 sm:mb-20">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold mb-4">
                Industries We Serve
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our control systems power operations across diverse sectors, delivering reliability 
                and efficiency where it matters most.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, idx) => (
                <IndustryCard key={idx} {...industry} />
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="mb-16 sm:mb-20">
          <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 sm:p-8 lg:p-12 text-white shadow-2xl">
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Technical Specifications</h2>
              <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto px-4">
                Engineered for precision, reliability, and performance in industrial environments
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              <SpecificationItem
                icon={Cpu}
                label="PLC Controllers"
                value="Siemens S7-1200/1500 series with TIA Portal"
              />
              <SpecificationItem
                icon={Power}
                label="Power Supply"
                value="Meanwell 24V DC, 120W with redundancy option"
              />
              <SpecificationItem
                icon={Network}
                label="Communication"
                value="Profinet, Modbus TCP/RTU, Ethernet/IP"
              />
              <SpecificationItem
                icon={Terminal}
                label="I/O Capacity"
                value="Expandable up to 512 digital, 128 analog points"
              />
              <SpecificationItem
                icon={Shield}
                label="Safety Standards"
                value="IEC 61508 SIL2, UL508A, CE certified"
              />
              <SpecificationItem
                icon={Thermometer}
                label="Operating Range"
                value="0-50°C ambient, optional climate control"
              />
              <SpecificationItem
                icon={Gauge}
                label="Response Time"
                value="< 10ms for critical control loops"
              />
              <SpecificationItem
                icon={Database}
                label="Data Logging"
                value="Built-in historian with 1-year storage"
              />
              <SpecificationItem
                icon={Eye}
                label="HMI Integration"
                value="Touchscreen panels with SCADA connectivity"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Image Modal */}
      {showModal && modalImage && (
        <ImageModal
          src={modalImage.src}
          alt={modalImage.alt}
          onClose={closeModal}
        />
      )}

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ControlSystems;

// src/pages/Computers.jsx
"use client";
import React, { useState } from "react";
import {
  Monitor,
  Cpu,
  HardDrive,
  Zap,
  Shield,
  Settings,
  CheckCircle2,
  Wifi,
  Thermometer,
  Cloud,
  Eye,
  Award,
  TrendingUp,
  Target,
  BarChart3,
  Database,
  RefreshCw,
  ArrowRight,
  X,
  ZoomIn,
  Mail,
  Phone,
  FileText,
  Check,
  Package,
  Truck,
  Headphones,
  Layers,
  Maximize2
} from "lucide-react";

// Import your actual image
import computerImage from "../assets/computer.jpg"

const Badge = ({ children, variant = "primary", icon: Icon }) => {
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-cyan-600 text-white",
    secondary: "bg-gradient-to-r from-purple-600 to-indigo-600 text-white",
    accent: "bg-gradient-to-r from-emerald-600 to-teal-600 text-white",
    warning: "bg-gradient-to-r from-orange-600 to-amber-600 text-white",
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

const SpecCard = ({ icon: Icon, label, value, color }) => (
  <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-slate-100 hover:border-blue-300 shadow-md hover:shadow-xl transition-all duration-300">
    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white mx-auto mb-3 sm:mb-4 shadow-lg`}>
      <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
    </div>
    <div className="text-sm sm:text-base font-semibold text-slate-500 mb-1 sm:mb-2 text-center">{label}</div>
    <div className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 text-center">{value}</div>
  </div>
);

const ImageModal = ({ src, alt, onClose }) => {
  if (!src) return null;
  
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-2 sm:p-4 backdrop-blur-sm animate-fadeIn"
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

const Computers = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const features = [
    {
      icon: Monitor,
      title: "Industrial Touch Screen",
      description: "High-resolution capacitive touch displays with multi-touch support, designed for 24/7 industrial operations.",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: Cpu,
      title: "Powerful Performance",
      description: "Latest generation Intel processors with customizable RAM and storage configurations for your specific needs.",
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      icon: Shield,
      title: "Rugged Design",
      description: "IP65-rated enclosures protect against dust and water, perfect for harsh manufacturing environments.",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: Cloud,
      title: "Pre-Configured OS",
      description: "Windows or Linux OS pre-installed with industrial software stack and security configurations.",
      gradient: "from-orange-500 to-amber-600"
    },
    {
      icon: Thermometer,
      title: "Extended Temperature",
      description: "Operates reliably in temperatures from -10°C to 60°C with advanced thermal management.",
      gradient: "from-red-500 to-pink-600"
    },
    {
      icon: Wifi,
      title: "Connectivity Options",
      description: "Multiple I/O ports, WiFi 6, Bluetooth 5.0, and industrial protocol support (Modbus, OPC-UA).",
      gradient: "from-cyan-500 to-blue-600"
    }
  ];

  const specifications = [
    {
      icon: Monitor,
      label: "Display Sizes",
      value: "10\" - 24\"",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Cpu,
      label: "Processor",
      value: "Intel i5/i7",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: HardDrive,
      label: "Storage",
      value: "Up to 1TB SSD",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: Database,
      label: "RAM",
      value: "8GB - 32GB",
      color: "from-orange-500 to-amber-600"
    },
    {
      icon: Shield,
      label: "Protection",
      value: "IP65 Rated",
      color: "from-red-500 to-pink-600"
    },
    {
      icon: Zap,
      label: "Power",
      value: "24V DC/AC",
      color: "from-cyan-500 to-blue-600"
    }
  ];

  const applications = [
    {
      icon: Settings,
      title: "Machine Control",
      description: "HMI interfaces for industrial machinery and equipment control"
    },
    {
      icon: BarChart3,
      title: "Production Monitoring",
      description: "Real-time data visualization and manufacturing analytics"
    },
    {
      icon: Package,
      title: "Quality Inspection",
      description: "Vision system displays and quality control stations"
    },
    {
      icon: Truck,
      title: "Warehouse Management",
      description: "Inventory tracking and logistics management systems"
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: "Custom Built",
      description: "Tailored to your exact specifications and requirements"
    },
    {
      icon: Headphones,
      title: "Full Support",
      description: "Comprehensive technical support and maintenance services"
    },
    {
      icon: CheckCircle2,
      title: "Quality Assured",
      description: "Rigorous testing and quality control procedures"
    },
    {
      icon: TrendingUp,
      title: "Scalable",
      description: "Easy to upgrade and expand as your needs grow"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100">
      {/* HERO SECTION */}
      <header className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        {/* Decorative Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-tr from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="text-center space-y-6 sm:space-y-8">
            <Badge variant="primary" icon={Monitor}>
              Industrial Computing Solutions
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent">
                Custom Built
              </span>
              <br />
              <span className="text-slate-900">Touch Screen Computers</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl font-medium text-slate-700 leading-relaxed max-w-3xl mx-auto">
              Industrial-grade computing for demanding environments
            </p>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto px-4">
              Engineered and assembled in-house, our touch screen computers combine rugged reliability 
              with cutting-edge performance. Pre-configured with your choice of OS and industrial software, 
              ready to deploy in your production environment.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center pt-4">
              <a
                href="#product-view"
                className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-0.5 text-sm sm:text-base"
              >
                <span>View Product</span>
                <Eye className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              </a>

              <a
                href="#specifications"
                className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl border-2 border-slate-300 bg-white text-slate-900 font-semibold shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-300 hover:-translate-y-0.5 text-sm sm:text-base"
              >
                <Settings className="w-4 h-4 sm:w-5 sm:h-5" />
                Specifications
              </a>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-2 sm:gap-3 pt-2 sm:pt-4 justify-center">
              <div className="px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl bg-white border-2 border-blue-200 shadow-sm">
                <div className="text-xl sm:text-2xl font-bold text-blue-600">100%</div>
                <div className="text-xs text-slate-600">Custom Built</div>
              </div>
              <div className="px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl bg-white border-2 border-purple-200 shadow-sm">
                <div className="text-xl sm:text-2xl font-bold text-purple-600">IP65</div>
                <div className="text-xs text-slate-600">Protection</div>
              </div>
              <div className="px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl bg-white border-2 border-emerald-200 shadow-sm">
                <div className="text-xl sm:text-2xl font-bold text-emerald-600">24/7</div>
                <div className="text-xs text-slate-600">Operation</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Product Image Section - Professional Compact Design */}
        <section id="product-view" className="mb-16 sm:mb-20 lg:mb-24">
          <div className="text-center mb-8 sm:mb-10">
            <Badge variant="secondary" icon={Layers}>
              Product Showcase
            </Badge>
            <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
              Professional Industrial Computer
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-4">
              Precision engineered components for maximum reliability
            </p>
            <div className="mt-4 sm:mt-6 w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 mx-auto rounded-full"></div>
          </div>

          {/* Compact Professional Layout */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start">
            {/* Left: Product Image - Reasonable Size */}
            <div className="relative">
              <div
                className="group relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer bg-gradient-to-br from-slate-100 to-slate-50"
                onClick={openModal}
              >
                <img
                  src={computerImage}
                  alt="Industrial touch screen computer - complete system view"
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105 p-4"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <Maximize2 className="w-12 h-12 sm:w-14 sm:h-14 mb-3" />
                    <p className="text-lg sm:text-xl font-bold">Click to Enlarge</p>
                    <p className="text-sm text-white/90 mt-1">View full details</p>
                  </div>
                </div>

                {/* Corner Badge */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <Badge variant="primary" icon={Eye}>
                    Inside & Outside View
                  </Badge>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 rounded-full bg-white/95 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
                  <ZoomIn className="w-5 h-5 text-blue-600" />
                </div>
              </div>

              {/* Quality Badge Below Image */}
              <div className="mt-4 bg-white rounded-xl p-4 shadow-md border-2 border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Quality Assurance</div>
                    <div className="font-bold text-slate-900">100% Factory Tested</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Key Highlights */}
            <div className="space-y-4">
              {/* Technical Highlights */}
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-blue-600" />
                  Technical Highlights
                </h3>
                <div className="space-y-3">
                  {[
                    { label: "Display", value: "10.1\" - 24\" Full HD Multi-Touch" },
                    { label: "Processor", value: "Intel Core i5/i7 (Latest Gen)" },
                    { label: "Memory", value: "8GB - 32GB DDR4 RAM" },
                    { label: "Storage", value: "128GB - 1TB SSD" },
                    { label: "Protection", value: "IP65 Rated Enclosure" },
                    { label: "Operating System", value: "Windows 10/11 IoT or Linux" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-slate-100 last:border-0">
                      <span className="text-sm font-medium text-slate-600">{item.label}</span>
                      <span className="text-sm font-bold text-slate-900">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Feature Grid */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Shield, label: "Rugged Build", color: "from-blue-500 to-cyan-600" },
                  { icon: Wifi, label: "WiFi 6 Ready", color: "from-purple-500 to-indigo-600" },
                  { icon: Thermometer, label: "Wide Temp Range", color: "from-emerald-500 to-teal-600" },
                  { icon: Cloud, label: "Pre-Configured", color: "from-orange-500 to-amber-600" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-4 border-2 border-slate-100 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-2`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div className="text-sm font-semibold text-slate-900">{item.label}</div>
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              {/* <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-6 text-white shadow-xl">
                <h4 className="text-lg font-bold mb-2">Custom Configuration Available</h4>
                <p className="text-sm text-white/90 mb-4">
                  Need specific hardware or software? We build to your exact requirements.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 text-sm"
                >
                  <Mail className="w-4 h-4" />
                  Request Quote
                </a>
              </div> */}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="mb-16 sm:mb-20">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <Badge variant="accent" icon={Zap}>
              Key Features
            </Badge>
            <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
              Built for Industrial Excellence
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto px-4">
              Every component carefully selected and tested for reliability in demanding manufacturing environments
            </p>
            <div className="mt-4 sm:mt-6 w-20 sm:w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {features.map((feature, idx) => (
              <FeatureCard key={idx} {...feature} />
            ))}
          </div>
        </section>

        {/* Specifications Section */}
        <section id="specifications" className="mb-16 sm:mb-20">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <Badge variant="warning" icon={Settings}>
              Technical Specifications
            </Badge>
            <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
              Powerful & Flexible Configurations
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto px-4">
              Customizable hardware options to match your application requirements
            </p>
            <div className="mt-4 sm:mt-6 w-20 sm:w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 md:gap-6">
            {specifications.map((spec, idx) => (
              <SpecCard key={idx} {...spec} />
            ))}
          </div>

          {/* Detailed Specs Table */}
          <div className="mt-8 sm:mt-10 md:mt-12 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 sm:p-8 lg:p-10 text-white shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Complete Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {[
                { category: "Display Options", items: ["10.1\" - 24\" Touch Screens", "1920x1080 Full HD", "Capacitive Multi-Touch", "Anti-Glare Coating"] },
                { category: "Processing Power", items: ["Intel Core i3/i5/i7", "8GB - 32GB DDR4 RAM", "128GB - 1TB SSD", "Passive Cooling Available"] },
                { category: "Connectivity", items: ["WiFi 6 & Bluetooth 5.0", "4x USB 3.0 Ports", "2x Ethernet (Gigabit)", "RS232/RS485 Serial"] },
                { category: "Operating Systems", items: ["Windows 10/11 IoT", "Ubuntu Linux", "Pre-configured Software", "Remote Management"] },
                { category: "Physical Specs", items: ["IP65 Front Panel", "Aluminum Chassis", "VESA Mount Compatible", "Fanless Design Option"] },
                { category: "Reliability", items: ["24/7 Operation Rated", "Wide Temperature Range", "Surge Protection", "3-Year Warranty"] }
              ].map((spec, idx) => (
                <div key={idx} className="bg-white/10 rounded-xl p-4 sm:p-6 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <h4 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 flex items-center gap-2">
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
                    {spec.category}
                  </h4>
                  <ul className="space-y-2">
                    {spec.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm sm:text-base text-white/90">
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="mb-16 sm:mb-20">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
              Industrial Applications
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto px-4">
              Versatile computing solutions for diverse manufacturing and automation needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {applications.map((app, idx) => (
              <div key={idx} className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-slate-100 hover:border-blue-300 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-white mb-3 sm:mb-4 shadow-lg`}>
                  <app.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <h3 className="font-bold text-base sm:text-lg text-slate-900 mb-2">{app.title}</h3>
                <p className="text-sm sm:text-base text-slate-600">{app.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16 sm:mb-20">
          <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 p-6 sm:p-8 lg:p-12 border-2 border-blue-100">
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
                Why Choose Our Computers
              </h2>
              <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto px-4">
                Experience the difference of truly customized industrial computing solutions
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-white mb-3 sm:mb-4 shadow-lg">
                    <benefit.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm sm:text-base text-slate-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Image Modal */}
      {showModal && (
        <ImageModal
          src={computerImage}
          alt="Industrial Touch Screen Computer - Complete System View (Inside & Outside)"
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

export default Computers;
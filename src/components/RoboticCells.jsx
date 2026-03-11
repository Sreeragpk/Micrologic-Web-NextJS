"use client";

import React, { useState, useRef, useMemo } from "react";
import Image from "next/image";
import { 
  Bot, 
  Wrench, 
  BarChart3, 
  Zap, 
  RefreshCw, 
  Shield, 
  Smartphone, 
  Car, 
  Heart, 
  Home,
  Target,
  Cog,
  Clock,
  Box,
  Ruler,
  Database,
  Thermometer,
  ArrowRight,
  X,
  ZoomIn,
  Mail,
  FileText,
  CheckCircle2,
  Gauge,
  Activity,
  Settings,
  Eye,
  Package,
  Play,
  Pause,
  Droplet,
  Search
} from "lucide-react";

const Badge = ({ children, variant = "primary", icon: Icon }) => {
  const variants = {
    primary: "bg-gradient-to-r from-purple-600 to-indigo-600 text-white",
    secondary: "bg-gradient-to-r from-cyan-600 to-blue-600 text-white",
    accent: "bg-gradient-to-r from-pink-600 to-rose-600 text-white",
  };

  return (
    <span className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full ${variants[variant]} text-xs sm:text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}>
      {Icon && <Icon className="w-3 h-3 sm:w-4 sm:h-4" />}
      {children}
    </span>
  );
};

const VideoPlayer = ({ src, title, description, icon: Icon, gradient }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMouseEnter = () => {
    setShowControls(true);
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
    setShowControls(false);
  };

  const handleTouchStart = () => {
    setShowControls(true);
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div 
      className="group relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl hover:shadow-3xl transition-all duration-500 bg-slate-900"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
    >
      <video
        ref={videoRef}
        src={src}
        loop
        muted={true}
        playsInline
        className="w-full h-full object-cover min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px]"
        onClick={togglePlay}
      />

      <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent ${showControls || !isPlaying ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 pointer-events-none`}></div>

      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={togglePlay}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 hover:bg-white shadow-2xl flex items-center justify-center text-purple-600 hover:scale-110 transition-all duration-300"
          >
            <Play className="w-8 h-8 sm:w-10 sm:h-10 ml-1" />
          </button>
        </div>
      )}

      <div className={`absolute top-0 left-0 right-0 p-3 sm:p-4 md:p-6 ${showControls || !isPlaying ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-300`}>
        <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
          <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white shadow-xl flex-shrink-0`}>
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </div>
          <div className="flex-1 text-white">
            <h3 className="font-bold text-sm sm:text-base md:text-lg lg:text-xl mb-0.5 sm:mb-1">{title}</h3>
            <p className="text-xs sm:text-sm text-white/90 line-clamp-2">{description}</p>
          </div>
        </div>
      </div>

      <div className={`absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 ${showControls || !isPlaying ? 'translate-y-0' : 'translate-y-full'} transition-transform duration-300`}>
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={togglePlay}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white/95 hover:bg-white shadow-lg flex items-center justify-center text-slate-900 hover:scale-105 transition-all duration-200"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 sm:w-5 sm:h-5" />
            ) : (
              <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description, gradient }) => (
  <div className="group relative p-4 sm:p-5 md:p-6 bg-white rounded-xl sm:rounded-2xl border-2 border-slate-100 hover:border-purple-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 overflow-hidden">
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

const ApplicationCard = ({ title, description, icon: Icon, stats }) => (
  <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-slate-100 hover:border-indigo-300 shadow-md hover:shadow-xl transition-all duration-300">
    <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white flex-shrink-0 shadow-lg">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
      </div>
      <div>
        <h4 className="font-bold text-base sm:text-lg text-slate-900 mb-1 sm:mb-2">{title}</h4>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{description}</p>
      </div>
    </div>
    {stats && (
      <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-slate-100 grid grid-cols-2 gap-2 sm:gap-3">
        {stats.map((stat, idx) => (
          <div key={idx} className="text-center">
            <div className="text-lg sm:text-xl font-bold text-indigo-600">{stat.value}</div>
            <div className="text-xs text-slate-500 mt-0.5 sm:mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    )}
  </div>
);

const SpecificationItem = ({ label, value, icon: Icon }) => (
  <div className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-gradient-to-br from-slate-50 to-white rounded-lg sm:rounded-xl border border-slate-200 hover:border-purple-300 transition-all duration-200">
    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
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
          <Image 
            src={src} 
            alt={alt} 
            width={1200} 
            height={800} 
            className="w-full h-auto object-contain bg-slate-900 max-h-[70vh] sm:max-h-[85vh]" 
          />
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

const RoboticCells = () => {
  const [showModal, setShowModal] = useState(false);

  const features = useMemo(() => [
    {
      icon: Bot,
      title: "Automated Assembly",
      description: "High-precision robotic arms perform complex assembly tasks with consistent accuracy, reducing human error and increasing throughput.",
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      icon: Wrench,
      title: "Precision Screwing",
      description: "Torque-controlled screwing with real-time monitoring ensures every fastener meets exact specifications for quality assurance.",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      icon: BarChart3,
      title: "Quality Inspection",
      description: "Integrated vision systems and sensors perform 100% inspection, detecting defects and ensuring compliance with standards.",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      icon: Zap,
      title: "Fast Deployment",
      description: "Modular design allows rapid installation and reconfiguration to adapt to changing production requirements.",
      gradient: "from-amber-500 to-orange-600"
    },
    {
      icon: RefreshCw,
      title: "Flexible Integration",
      description: "Seamlessly integrates with existing production lines, PLCs, and MES systems for unified manufacturing control.",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Shield,
      title: "Safety Systems",
      description: "Advanced safety features including light curtains, emergency stops, and collaborative robot technology for operator protection.",
      gradient: "from-red-500 to-pink-600"
    }
  ], []);

  const applications = useMemo(() => [
    {
      title: "Electronics Assembly",
      description: "Precise component placement, screwing, and testing for PCBs, consumer electronics, and telecommunications equipment.",
      icon: Smartphone,
      stats: [
        { value: "±0.05mm", label: "Positioning" },
        { value: "99.9%", label: "Accuracy" }
      ]
    },
    {
      title: "Automotive Components",
      description: "Automated assembly of sensors, control units, and mechanical assemblies with full traceability.",
      icon: Car,
      stats: [
        { value: "0.1-5 Nm", label: "Torque Range" },
        { value: "100%", label: "Inspection" }
      ]
    },
    {
      title: "Medical Devices",
      description: "Clean-room compatible cells for assembling medical instruments and diagnostic equipment with validation.",
      icon: Heart,
      stats: [
        { value: "ISO 7", label: "Clean Room" },
        { value: "FDA", label: "Compliant" }
      ]
    },
    {
      title: "Consumer Products",
      description: "High-speed assembly lines for appliances, tools, and household products with flexible changeover.",
      icon: Home,
      stats: [
        { value: "< 5 min", label: "Changeover" },
        { value: "24/7", label: "Operation" }
      ]
    }
  ], []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100">
      {/* HERO SECTION */}
      <header className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-indigo-50">
        {/* Decorative Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-tr from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <Badge variant="primary" icon={Bot}>
                  Industrial Automation Excellence
                </Badge>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                  <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
                    Robotic Assembly
                  </span>
                  <br />
                  <span className="text-slate-900">Cells</span>
                </h1>

                <p className="text-lg sm:text-xl md:text-2xl font-medium text-slate-700 leading-relaxed">
                  Precision automation for modern manufacturing
                </p>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                  Our robotic cells deliver consistent quality, increased throughput, and flexible automation 
                  for assembly, screwing, inspection, and material handling applications across industries.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <a
                  href="#showcase"
                  className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 hover:-translate-y-0.5 text-sm sm:text-base"
                >
                  <span>Watch Demos</span>
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                </a>

                <a
                  href="#features"
                  className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl border-2 border-slate-300 bg-white text-slate-900 font-semibold shadow-sm hover:shadow-md hover:border-purple-400 transition-all duration-300 hover:-translate-y-0.5 text-sm sm:text-base"
                >
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                  Key Features
                </a>
              </div>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-2 sm:gap-3 pt-2 sm:pt-4">
                <div className="px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl bg-white border-2 border-purple-200 shadow-sm">
                  <div className="text-xl sm:text-2xl font-bold text-purple-600">40%</div>
                  <div className="text-xs text-slate-600">Faster Production</div>
                </div>
                <div className="px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl bg-white border-2 border-indigo-200 shadow-sm">
                  <div className="text-xl sm:text-2xl font-bold text-indigo-600">99.9%</div>
                  <div className="text-xs text-slate-600">Quality Rate</div>
                </div>
                <div className="px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl bg-white border-2 border-cyan-200 shadow-sm">
                  <div className="text-xl sm:text-2xl font-bold text-cyan-600">24/7</div>
                  <div className="text-xs text-slate-600">Operation</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative mt-8 lg:mt-0">
              <div 
                className="group relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer transform hover:-translate-y-1 sm:hover:-translate-y-2"
                onClick={() => setShowModal(true)}
              >
                <Image
                  src="/assets/Robotic Screwing.JPG"
                  alt="Robotic screwing system in operation"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  priority
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
                    <p className="font-bold text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2">Precision Robotic Screwing</p>
                    <p className="text-xs sm:text-sm text-white/90">Click to view full size</p>
                  </div>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl">
                  <ZoomIn className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                </div>
              </div>

              {/* Floating Info Cards - Hidden on mobile */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl border-2 border-purple-200 hidden md:block">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white">
                    <Cog className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Torque Accuracy</div>
                    <div className="font-bold text-sm sm:text-base text-slate-900">±2% Precision</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl border-2 border-cyan-200 hidden md:block">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Cycle Time</div>
                    <div className="font-bold text-sm sm:text-base text-slate-900">3-8 Seconds</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Video Showcase Section */}
        <section id="showcase" className="mb-16 sm:mb-20 lg:mb-24">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <Badge variant="primary" icon={Play}>
              See It In Action
            </Badge>
            <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
              Our Technology at Work
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto px-4">
              Experience the precision and efficiency of our robotic cells through real-world applications
            </p>
            <div className="mt-4 sm:mt-6 w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Sealant Dispensing Video */}
            <VideoPlayer
              src="/assets/Sealant_Dispensing.mp4"
              title="Automated Sealant Dispensing"
              description="Precision robotic dispensing with consistent bead quality and path accuracy"
              icon={Droplet}
              gradient="from-cyan-500 to-blue-600"
            />

            {/* Vehicle Inspection Video */}
            <VideoPlayer
              src="/assets/Vehicle_Inspection.mp4"
              title="Intelligent Vehicle Inspection"
              description="AI-powered vision systems for comprehensive quality control and defect detection"
              icon={Search}
              gradient="from-purple-500 to-indigo-600"
            />
          </div>

          {/* Video Stats */}
          <div className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {[
              { icon: Droplet, label: "Dispensing Accuracy", value: "±0.1mm", color: "from-cyan-500 to-blue-600" },
              { icon: Clock, label: "Cycle Time", value: "< 30s", color: "from-purple-500 to-indigo-600" },
              { icon: Eye, label: "Defect Detection", value: "99.8%", color: "from-pink-500 to-rose-600" },
              { icon: CheckCircle2, label: "Quality Pass Rate", value: "99.5%", color: "from-green-500 to-emerald-600" }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-slate-100 shadow-lg text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white mx-auto mb-2 sm:mb-3 shadow-lg`}>
                  <stat.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="mb-16 sm:mb-20">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <Badge variant="secondary" icon={Zap}>
              Core Capabilities
            </Badge>
            <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
              Why Choose Our Robotic Cells
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto px-4">
              Advanced automation technology designed to transform your production line with precision, 
              flexibility, and reliability.
            </p>
            <div className="mt-4 sm:mt-6 w-20 sm:w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {features.map((feature, idx) => (
              <FeatureCard key={idx} {...feature} />
            ))}
          </div>
        </section>

        {/* Applications Section */}
        <section id="applications" className="mb-16 sm:mb-20">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <Badge variant="accent" icon={Target}>
              Industry Applications
            </Badge>
            <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
              Proven Across Industries
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto px-4">
              From electronics to automotive, our robotic cells deliver consistent results 
              in demanding production environments.
            </p>
            <div className="mt-4 sm:mt-6 w-20 sm:w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            {applications.map((app, idx) => (
              <ApplicationCard key={idx} {...app} />
            ))}
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
                icon={Target}
                label="Positioning Accuracy"
                value="±0.05 mm repeatability across all axes"
              />
              <SpecificationItem
                icon={Cog}
                label="Torque Control"
                value="0.1 - 5.0 Nm with ±2% accuracy"
              />
              <SpecificationItem
                icon={Clock}
                label="Cycle Time"
                value="3-8 seconds per assembly operation"
              />
              <SpecificationItem
                icon={Box}
                label="Payload Capacity"
                value="Up to 10 kg with precision handling"
              />
              <SpecificationItem
                icon={Ruler}
                label="Working Envelope"
                value="800mm reach, customizable workspace"
              />
              <SpecificationItem
                icon={RefreshCw}
                label="Integration"
                value="Supports major PLCs and MES systems"
              />
              <SpecificationItem
                icon={Shield}
                label="Safety Standards"
                value="ISO 10218, CE certified with safety PLC"
              />
              <SpecificationItem
                icon={Thermometer}
                label="Operating Environment"
                value="5-40°C, optional clean room configuration"
              />
              <SpecificationItem
                icon={Database}
                label="Data Logging"
                value="Real-time monitoring with full traceability"
              />
            </div>
          </div>
        </section>

        {/* Process Flow */}
        <section className="mb-16 sm:mb-20">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
              How It Works
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto px-4">
              A streamlined workflow from part loading to quality verification
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {[
              {
                step: "01",
                title: "Part Loading",
                description: "Automated or manual loading of components into fixtures",
                color: "from-purple-500 to-indigo-600",
                icon: Package
              },
              {
                step: "02",
                title: "Vision Inspection",
                description: "Camera systems verify part presence and orientation",
                color: "from-cyan-500 to-blue-600",
                icon: Eye
              },
              {
                step: "03",
                title: "Assembly & Screwing",
                description: "Robotic arms perform precise assembly operations",
                color: "from-pink-500 to-rose-600",
                icon: Settings
              },
              {
                step: "04",
                title: "Quality Check",
                description: "Final inspection and data logging before unload",
                color: "from-green-500 to-emerald-600",
                icon: CheckCircle2
              }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-slate-100 hover:border-purple-300 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${item.color} text-white font-bold text-xl sm:text-2xl mb-3 sm:mb-4 shadow-lg`}>
                    <item.icon className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 text-5xl sm:text-6xl font-black text-slate-100">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-slate-900 mb-1 sm:mb-2 relative z-10">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 relative z-10">{item.description}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 stroke-[3]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="mb-16 sm:mb-20">
          <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6 sm:p-8 lg:p-12 border-2 border-indigo-100">
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
                Measurable Benefits
              </h2>
              <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto px-4">
                Real-world improvements delivered by our robotic assembly cells
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
              {[
                {
                  icon: Gauge,
                  value: "40%",
                  label: "Productivity Increase",
                  color: "from-purple-500 to-indigo-600"
                },
                {
                  icon: CheckCircle2,
                  value: "99.9%",
                  label: "Quality Consistency",
                  color: "from-cyan-500 to-blue-600"
                },
                {
                  icon: Clock,
                  value: "< 8s",
                  label: "Average Cycle Time",
                  color: "from-pink-500 to-rose-600"
                },
                {
                  icon: Activity,
                  value: "24/7",
                  label: "Continuous Operation",
                  color: "from-green-500 to-emerald-600"
                }
              ].map((benefit, idx) => (
                <div key={idx} className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center text-white mx-auto mb-3 sm:mb-4 shadow-lg`}>
                    <benefit.icon className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-slate-900 mb-1 sm:mb-2">{benefit.value}</div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-600">{benefit.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 p-6 sm:p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-white/10 rounded-full -mr-24 -mt-24 sm:-mr-32 sm:-mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-white/10 rounded-full -ml-24 -mb-24 sm:-ml-32 sm:-mb-32 blur-3xl"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Ready to Automate Your Production?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6 sm:mb-8 px-4">
              Our engineering team will work with you to design a custom robotic cell 
              that meets your specific requirements and integrates seamlessly with your existing processes.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center px-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-white text-purple-600 font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-sm sm:text-base"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                Request Consultation
              </a>
              <a
                href="#applications"
                className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl border-2 border-white/50 bg-white/10 backdrop-blur-sm text-white font-semibold hover:bg-white/20 transition-all duration-300 text-sm sm:text-base"
              >
                <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                Download Brochure
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Image Modal */}
      {showModal && (
        <ImageModal
          src="/assets/Robotic Screwing.JPG"
          alt="Robotic screwing system - High precision automated assembly cell"
          onClose={() => setShowModal(false)}
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

export default RoboticCells;
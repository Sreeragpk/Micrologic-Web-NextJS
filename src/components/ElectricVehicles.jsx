"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Battery,
  Cpu,
  Shield,
  ChevronRight,
  CheckCircle2,
  Gauge,
  Settings,
  TrendingUp,
  BatteryCharging,
  Activity,
  SparklesIcon,
  Factory,
  ShieldCheck,
  X,
} from "lucide-react";
import {
  AdjustmentsHorizontalIcon,
  CpuChipIcon,
  CubeTransparentIcon,
  LightBulbIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

const ElectricVehicles = () => {
  const [lightbox, setLightbox] = useState(null);

  const galleryImages = [
    {
      src: "/assets/ev1.jpg",
      alt: "EV Battery Assembly",
      caption: "Battery Pack Assembly Line",
    },
    {
      src: "/assets/ev2.jpg",
      alt: "Motor Controller Testing",
      caption: "Motor Controller Test Station",
    },
    {
      src: "/assets/ev3.jpg",
      alt: "EV Component Automation",
      caption: "EV Component Integration",
    },
  ];

  const capabilities = [
    {
      icon: <Factory className="w-7 h-7" />,
      title: "Automated Component Integration Line",
      desc: "High-precision assembly lines for EV subsystems featuring robotic automation, precision dispensing, and torque-controlled fastening.",
    },
    {
      icon: <Cpu className="w-7 h-7" />,
      title: "Integrated System Behaviour Testing",
      desc: "Verify every function, firmware logic, and communication interface, which guarantees accurate system performance at the development stage.",
    },
    {
      icon: <Settings className="w-7 h-7" />,
      title: "Custom Engineering & Turnkey Integration",
      desc: "Design, development, and deployment of fully customized assembly & test platforms with PLC, HMI, SCADA, and MES/ERP integration.",
    },
    {
      icon: <ShieldCheck className="w-7 h-7" />,
      title: "Final Product Verification",
      desc: "Performs a last check of system-level functionality, including communication, control logic, and power electronics performance.",
    },
  ];

  const evDomains = [
    {
      title: "Power Electronics",
      icon: <CpuChipIcon className="w-6 h-6" />,
      gradient: "from-blue-600 to-cyan-500",
      border: "border-blue-500/30",
      bg: "bg-blue-500/5",
      items: [
        "Motor Controllers",
        "On Board Chargers",
        "DC to DC Controller",
        "Wireless Chargers",
        "Battery Management",
        "EV Supply Equipment",
        "Battery Interconnect",
        "USB Charger",
      ],
    },
    {
      title: "Controllers",
      icon: <AdjustmentsHorizontalIcon className="w-6 h-6" />,
      gradient: "from-purple-600 to-purple-800",
      border: "border-purple-500/30",
      bg: "bg-purple-500/5",
      items: [
        "Vehicle Control Unit",
        "Body Control Module",
        "Brake Controllers",
        "Fan Controls",
        "EGR Controller",
        "Engine Control Unit",
      ],
    },
    {
      title: "Switches / RF",
      icon: <Squares2X2Icon className="w-6 h-6" />,
      gradient: "from-emerald-500 to-emerald-700",
      border: "border-emerald-500/30",
      bg: "bg-emerald-500/5",
      items: [
        "Window Switches",
        "Steering Switches",
        "Auto Gear Shifter",
        "Start Stop Button",
        "Remote Keyless Entry",
        "Ultra Wide Band",
      ],
    },
    {
      title: "Lighting",
      icon: <LightBulbIcon className="w-6 h-6" />,
      gradient: "from-amber-500 to-amber-700",
      border: "border-amber-500/30",
      bg: "bg-amber-500/5",
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
      icon: <CubeTransparentIcon className="w-6 h-6" />,
      gradient: "from-indigo-600 to-indigo-800",
      border: "border-indigo-500/30",
      bg: "bg-indigo-500/5",
      items: [
        "Instrument Clusters",
        "Infotainment Systems",
        "Audio Systems",
        "HVAC Controllers",
        "Silver Boxe",
      ],
    },
    {
      title: "Sensors",
      icon: <SparklesIcon className="w-6 h-6" />,
      gradient: "from-rose-500 to-rose-700",
      border: "border-rose-500/30",
      bg: "bg-rose-500/5",
      items: ["Reverse Parking", "TPMS", "Touch Sensors"],
    },
  ];

  return (
    <>
      {/* ================= HERO ================= */}
      <div className="relative w-full h-[60vh] min-h-[400px] max-h-[600px] overflow-hidden">
        <Image
          src="/assets/evfinalimg.webp"
          alt="Electric Vehicles Automation"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Electric Vehicles
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Precision Assembly. Advanced Testing. Electrified Future.
            </p>
          </div>
        </div>
      </div>

      {/* ============ OVERVIEW ============ */}
      <section className="relative bg-white py-24 px-6 lg:px-16 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                  <BatteryCharging className="w-5 h-5 text-white" />
                </div>
                <span className="text-slate-400 font-semibold text-sm tracking-[0.15em] uppercase">
                  Overview
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 leading-tight">
                Accelerating the <span className="text-blue-600">EV Revolution</span>
              </h2>

              <div className="space-y-5 text-slate-600 leading-relaxed text-[15px]">
                <p>
                  The global automotive landscape is rapidly transitioning toward electrification, redefining the
                  future of clean and intelligent mobility.
                </p>
                <p>
                  <span className="font-semibold text-slate-900">At Micrologic,</span> we enable this transformation
                  through advanced assembly and test automation solutions purpose for electronic devices in Electric
                  Vehicles. Our integrated platforms ensure robust assembly, functional verification, end-of-line
                  testing, and data-driven quality assurance within scalable, high-throughput production environments.
                </p>
                <p>
                  All solutions are <span className="font-semibold text-blue-700">enabled with Industry 4.0-ready</span>
                  , enhanced by our proprietary <span className="font-semibold text-blue-700">FactEyes</span> platform
                  for a fully data-driven manufacturing ecosystem.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                {[
                  "Industry 4.0 connectivity with FactEyes platform",
                  "Real-time SPC, OEE & quality analytics dashboards",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                    <span className="text-slate-700 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Traceware Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl border border-slate-200 p-8 md:p-10">
                <div className="flex items-center gap-3 mb-8">
                  <Activity className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg font-bold text-blue-900">Traceware® Ecosystem</h3>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      label: "Functionality Tracking",
                      detail: "Real-time monitoring of EV electrical parameters such as voltage, current and power",
                      color: "bg-blue-500",
                      icon: <Battery className="w-4 h-4" />,
                    },
                    {
                      label: "Assembly Interlocks",
                      detail:
                        "Monitor assembly stages, component installation, torque values, and station performance",
                      color: "bg-teal-500",
                      icon: <Settings className="w-4 h-4" />,
                    },
                    {
                      label: "Test Data Archive",
                      detail: "HiPot, insulation, functional test results per unit",
                      color: "bg-indigo-500",
                      icon: <Gauge className="w-4 h-4" />,
                    },
                    {
                      label: "Production Analytics",
                      detail: "Real-time OEE, yield, SPC, and trend analysis",
                      color: "bg-sky-500",
                      icon: <TrendingUp className="w-4 h-4" />,
                    },
                  ].map((tier, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-4 bg-white rounded-xl p-4 border border-slate-100 
                                 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div
                        className={`w-10 h-10 rounded-lg ${tier.color} flex items-center justify-center text-white shrink-0`}
                      >
                        {tier.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-slate-900 text-sm">{tier.label}</div>
                        <div className="text-slate-500 text-xs">{tier.detail}</div>
                      </div>
                      <Shield className="w-4 h-4 text-slate-300 shrink-0" />
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ CAPABILITIES ============ */}
      <section className="relative bg-slate-950 py-24 px-6 lg:px-16 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">What We Offer</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl p-8
                           hover:border-blue-500/40 transition-all duration-500"
              >
                <div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-b from-blue-500/5 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                <div
                  className="relative z-10 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-600/20 
                                border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6
                                group-hover:from-blue-600/30 group-hover:to-cyan-600/30 transition-all"
                >
                  {cap.icon}
                </div>

                <h3 className="relative z-10 text-xl font-bold text-white mb-3">{cap.title}</h3>
                <p className="relative z-10 text-slate-400 text-sm leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ EV DOMAINS ============ */}
      <section className="relative bg-white py-24 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-blue-600 font-semibold text-sm tracking-[0.2em] uppercase mb-3 block">
              Domain Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">EV Segments We Serve</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {evDomains.map((domain, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative rounded-2xl border ${domain.border} ${domain.bg}
                  p-7 flex flex-col h-full
                  hover:shadow-xl hover:-translate-y-1
                  transition-all duration-500 group overflow-hidden`}
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${domain.gradient}
                    opacity-60 group-hover:opacity-100 transition-opacity`}
                />

                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${domain.gradient}
                    flex items-center justify-center text-white mb-5
                    shadow-lg group-hover:scale-105 transition-transform`}
                >
                  {domain.icon}
                </div>

                <h3 className="text-lg font-semibold text-blue-900 mb-4">{domain.title}</h3>

                <ul className="space-y-2 text-sm text-slate-600">
                  {domain.items.map((item, j) => (
                    <li key={j} className="flex gap-2 items-start leading-snug">
                      <div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-blue-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ LIGHTBOX ============ */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[lightbox].src}
                alt={galleryImages[lightbox].alt}
                width={800}
                height={600}
                className="w-full h-full object-contain rounded-xl"
              />
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-4 -right-4 w-10 h-10 bg-white/10 backdrop-blur rounded-full 
                           flex items-center justify-center text-white hover:bg-white/20 transition"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur px-4 py-2 rounded-lg">
                <p className="text-white text-sm font-medium">{galleryImages[lightbox].caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ElectricVehicles;
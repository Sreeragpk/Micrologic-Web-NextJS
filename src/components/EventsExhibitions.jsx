"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  Users,
  TrendingUp,
  Award,
  Zap,
  CheckCircle,
  Play,
  Clock,
  Building,
  Sparkles,
  Target,
  Cpu,
  Settings,
  Bot,
  TestTube,
  Factory,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

const EventsExhibitions = () => {
  const eventDetails = {
    booth: "Hall 4, Booth G85",
    duration: "3 Days",
  };

  const highlights = [
    {
      icon: Cpu,
      title: "Live Automation Demos",
      description:
        "Showcased cutting-edge automation applications in real-time action",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Industry Engagement",
      description:
        "Connected with leaders, innovators, and industry professionals",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Sparkles,
      title: "Technology Exchange",
      description:
        "Vibrant discussions shaping the future of smart manufacturing",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Award,
      title: "Pioneer Recognition",
      description: "Acknowledged for intelligent, reliable automation systems",
      color: "from-orange-500 to-amber-500",
    },
  ];

  const focusAreas = [
    {
      icon: Factory,
      title: "Electronics Manufacturing Automation",
      subtitle: "Complete automation solutions",
    },
    {
      icon: TestTube,
      title: "Test Automation",
      subtitle: "ICT, FCT, RF Testing & End of Line",
    },
    {
      icon: Bot,
      title: "Precision Handling",
      subtitle: "Cobot Bosch Rexroth Integration",
    },
    {
      icon: Settings,
      title: "Scalable Solutions",
      subtitle: "Palletized conveyor, SCARA & Auto Feeders",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden mt-5">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-300 to-indigo-300 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 lg:mb-16"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-slate-200/50 mb-6"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-bold text-slate-700">
              EVENT COMPLETED
            </span>
          </motion.div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-4 lg:mb-6 tracking-tight">
            <span className="block text-slate-900 mb-2">
              🌟 Productronica 2025
            </span>
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              That's a Wrap!
            </span>
          </h1>

          {/* Event Details */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-600 mb-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-slate-200/50">
              <Building className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold">
                {eventDetails.booth}
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-slate-200/50">
              <MapPin className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-semibold">
                Bangalore International Exhibition Centre
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-slate-200/50">
              <Clock className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-semibold">
                {eventDetails.duration}
              </span>
            </div>
          </div>

          <p className="text-lg lg:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium">
            We're thrilled to have wrapped up an incredible three days at
            Productronica 2025! From showcasing cutting-edge automation
            solutions to engaging with industry leaders and innovators—this
            event was a true celebration of technology and collaboration.
          </p>
        </motion.div>

        {/* Featured Video Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12 lg:mb-16"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-slate-200/50 overflow-hidden">
            <div className="grid lg:grid-cols-5 gap-0">
              {/* Video Info */}
              <div className="lg:col-span-2 p-8 lg:p-10 bg-gradient-to-br from-slate-50 to-blue-50/50 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full mb-6 self-start shadow-lg">
                  <Sparkles className="w-4 h-4" />
                  <span className="font-bold text-sm">EVENT HIGHLIGHTS</span>
                </div>

                <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4 leading-tight">
                  Experience the Innovation
                </h2>

                <p className="text-slate-600 leading-relaxed mb-6 text-base lg:text-lg">
                  Watch our exclusive event coverage featuring live automation
                  demos, product showcases, and engaging interactions with
                  industry professionals at Productronica 2025.
                </p>

                <div className="space-y-3 mb-6">
                  {[
                    "Live automation demonstrations",
                    "Product showcases & innovations",
                    "Industry expert interactions",
                    "Behind-the-scenes moments",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-slate-700 text-sm lg:text-base">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Video Preview */}
              <div className="lg:col-span-3 relative group cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
                  {/* Video with native HTML5 */}
                  <video
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    autoPlay
                  >
                    <source src="/assets/exhibition.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Duration Badge */}
                  <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-sm font-bold">
                    <Clock className="w-4 h-4 inline mr-1" />
                    Event Highlights
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Highlights Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12 lg:mb-16"
        >
          <div className="text-center mb-10 lg:mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-indigo-50 text-purple-700 px-4 py-2 rounded-full mb-4 border border-purple-100">
              <Zap className="w-5 h-5" />
              <span className="font-bold text-sm">EVENT HIGHLIGHTS</span>
            </div>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-slate-900 mb-4">
              Memorable Moments
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-base lg:text-lg">
              Key achievements and standout experiences from Productronica 2025
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-lg border border-slate-200/50 hover:shadow-2xl hover:border-blue-300/50 transition-all duration-300"
              >
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br ${highlight.color} text-white mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                >
                  <highlight.icon className="w-7 h-7 lg:w-8 lg:h-8" />
                </div>
                <h3 className="text-lg lg:text-xl font-black text-slate-900 mb-3">
                  {highlight.title}
                </h3>
                <p className="text-sm lg:text-base text-slate-600 leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Focus Areas */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-12 lg:mb-16"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-slate-200/50 p-8 lg:p-12">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 px-4 py-2 rounded-full mb-4 border border-emerald-100">
                <Target className="w-5 h-5" />
                <span className="font-bold text-sm">OUR FOCUS</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">
                Solutions Showcased
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Cutting-edge automation technologies demonstrated at the event
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {focusAreas.map((area, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + i * 0.1 }}
                  className="group flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/30 border-2 border-slate-200/50 hover:border-blue-300/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    <area.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-sm text-slate-600">{area.subtitle}</p>
                  </div>
                  <CheckCircle className="w-5 h-5 text-emerald-500 ml-auto flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Thank You Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl shadow-2xl p-8 lg:p-12 text-white text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.1, type: "spring" }}
            className="inline-block text-6xl lg:text-7xl mb-6"
          >
            🙏
          </motion.div>

          <h2 className="text-3xl lg:text-5xl font-black mb-6">
            Thank You for Making It Unforgettable!
          </h2>

          <p className="text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            A big thank you to everyone who visited us at{" "}
            <strong>Booth G85</strong> and made this experience unforgettable.
            Your enthusiasm and feedback inspire us to keep pushing boundaries
            and innovating for the future of smart manufacturing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-blue-600 rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <span>Get In Touch</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.section>

        {/* Recognition Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-200/50">
            <Award className="w-8 h-8 text-amber-500" />
            <div className="text-left">
              <div className="text-sm font-semibold text-slate-500">
                Recognized As
              </div>
              <div className="text-lg font-black text-slate-900">
                Pioneer in Intelligent Automation Systems
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EventsExhibitions;

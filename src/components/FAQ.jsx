"use client";
import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Search, 
  Package, 
  Eye, 
  Cog, 
  TestTube, 
  Database, 
  Headphones, 
  TrendingUp,
  Filter,
  X,
  MessageCircle,
  Mail,
  Phone,
  ArrowRight,
  Wrench
} from 'lucide-react';

const ProfessionalFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const faqData = [
    {
      category: 'General & Services',
      icon: Package,
      gradient: 'from-blue-500 to-cyan-500',
      items: [
        {
          question: "What does your company specialize in?",
          answer: "We provide end-to-end automation solutions including robotic systems, automated assembly lines, vision inspection systems, and functional testing solutions tailored to manufacturing environments."
        },
        {
          question: "Which industries do you serve?",
          answer: "We serve automotive, EV, electronics, medical devices, and industrial manufacturing sectors."
        },
        {
          question: "Do you provide turnkey automation solutions?",
          answer: "Yes. We handle the complete lifecycle from concept design and simulation to manufacturing, installation, commissioning, and after-sales support."
        },
        {
          question: "Can you customize solutions based on our production needs?",
          answer: "Absolutely. All our solutions are custom-designed to match your product, process, cycle time, quality, and factory layout requirements."
        }
      ]
    },
    {
      category: 'Automation Solutions',
      icon: Cog,
      gradient: 'from-blue-600 to-indigo-600',
      items: [
        {
          question: "What types of automation solutions do you offer?",
          answer: "We offer robotic assembly, Robotic screw fixing, dispensing, Vision Inspection, palletizing, material handling, and special-purpose machines (SPMs)."
        },
        {
          question: "Do you work with collaborative robots (cobots)?",
          answer: "Yes. We integrate both industrial robots and collaborative robots depending on safety, space, and application requirements."
        },
        {
          question: "Can your systems integrate with existing machines?",
          answer: "Yes. Our solutions are designed to seamlessly integrate with legacy machines, PLCs, MES, and ERP systems."
        },
        {
          question: "How do you ensure operator safety in robotic cells?",
          answer: "We implement safety fencing, light curtains, scanners, interlocks, and safety PLCs compliant with safety standards."
        }
      ]
    },
    {
      category: 'Vision & Inspection',
      icon: Eye,
      gradient: 'from-cyan-500 to-blue-500',
      items: [
        {
          question: "What inspection solutions do you provide?",
          answer: "We offer camera-based vision inspection systems for presence checks, dimensional measurement, OCR/OCV, 3D Optical Inspection and defect detection."
        },
        {
          question: "Can your inspection systems detect assembly errors?",
          answer: "Yes. Our systems verify correct part assembly, orientation, colour, connectors, labels, and fasteners in real time."
        },
        {
          question: "Do you use AI-based inspection?",
          answer: "Yes. We use AI and deep-learning-based vision systems for complex defect detection and pattern recognition where traditional vision is limited."
        },
        {
          question: "How accurate are your vision inspection systems?",
          answer: "Our systems are designed for high accuracy and repeatability, often achieving inspection reliability above 99% depending on application conditions."
        }
      ]
    },
    {
      category: 'Assembly Solutions',
      icon: Wrench,
      gradient: 'from-indigo-500 to-blue-600',
      items: [
        {
          question: "Do you provide manual, semi-automatic, and fully automatic assembly lines?",
          answer: "Yes. We design manual workstations, semi-automatic lines, and fully automated assembly systems based on volume and flexibility needs."
        },
        {
          question: "Can you automate screw driving and fastening operations?",
          answer: "Yes. We provide robotic screw driving systems with automatic screw feeders and torque monitoring."
        },
        {
          question: "How do you ensure assembly quality?",
          answer: "We implement poka-yoke mechanisms, vision verification, torque/force monitoring, and traceability at every critical station."
        }
      ]
    },
    {
      category: 'Testing Solutions',
      icon: TestTube,
      gradient: 'from-blue-500 to-indigo-500',
      items: [
        {
          question: "What types of testing systems do you offer?",
          answer: "We offer functional testing, electrical testing, leak testing, Vibration Testing, end-of-line (EOL) testing, and durability testing systems."
        },
        {
          question: "Can your test systems store and analyse test data?",
          answer: "Yes. All test data can be logged, analysed, and linked to serial numbers for complete product traceability."
        },
        {
          question: "Do you support industry standards and compliance testing?",
          answer: "Yes. Our systems are designed to comply with relevant industry standards and customer-specific quality requirements."
        }
      ]
    },
    {
      category: 'Industry 4.0 & Data',
      icon: Database,
      gradient: 'from-cyan-600 to-blue-700',
      items: [
        {
          question: "Do you offer traceability solutions?",
          answer: "Yes. We provide end-to-end traceability using barcodes, RFID, and vision-based identification across assembly and test lines."
        },
        {
          question: "Can your systems provide real-time production data?",
          answer: "Yes. Our solutions support real-time dashboards, OEE monitoring, alarms, and production analytics."
        },
        {
          question: "Do you support Industry 4.0 and smart factory concepts?",
          answer: "Yes. Our systems are Industry 4.0 ready with connectivity for MES, cloud platforms, AI analytics, and digital twins."
        }
      ]
    },
    {
      category: 'Support & Services',
      icon: Headphones,
      gradient: 'from-blue-600 to-cyan-600',
      items: [
        {
          question: "Do you provide installation and commissioning support?",
          answer: "Yes. Our engineers handle on-site installation, commissioning, and operator training."
        },
        {
          question: "What kind of after-sales support do you offer?",
          answer: "We offer AMC, remote support, on-site service, and spare parts support to ensure maximum uptime."
        },
        {
          question: "Do you provide training for operators and maintenance teams?",
          answer: "Yes. We provide comprehensive training for operators, maintenance staff, and quality teams."
        }
      ]
    },
    {
      category: 'Project & Timeline',
      icon: TrendingUp,
      gradient: 'from-indigo-600 to-blue-500',
      items: [
        {
          question: "How long does it take to deliver an automation project?",
          answer: "Project timelines vary based on complexity, but we typically deliver within 8–16 weeks."
        }
      ]
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFAQs = faqData.map(category => ({
    ...category,
    items: category.items.filter(item =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => 
    (activeCategory === 'all' || category.category === activeCategory) && 
    category.items.length > 0
  );

  // Calculate total questions
  const totalQuestions = faqData.reduce((sum, category) => sum + category.items.length, 0);

  let globalIndex = -1;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <div className={`inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-sm rounded-2xl mb-6 transform transition-all duration-700 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 transform transition-all duration-700 delay-100 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              Frequently Asked Questions
            </h1>
            <p className={`text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed transform transition-all duration-700 delay-200 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              Everything you need to know about our automation solutions, services, and expertise in manufacturing technology
            </p>

            {/* Stats */}
            <div className={`mt-12 grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto transform transition-all duration-700 delay-300 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{totalQuestions}+</div>
                <div className="text-sm md:text-base text-blue-200">Questions</div>
              </div>
              <div className="text-center border-x border-blue-400/30">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{faqData.length}</div>
                <div className="text-sm md:text-base text-blue-200">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-sm md:text-base text-blue-200">Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-16">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-current text-slate-50"></path>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 md:-mt-12 pb-16 relative z-10">
        
        {/* Search and Filter Section */}
        <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-4 md:p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search your question..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all text-gray-700 placeholder-gray-400"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="lg:hidden flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-all"
            >
              <Filter className="w-5 h-5" />
              Filters
              {activeCategory !== 'all' && (
                <span className="bg-white text-blue-600 px-2 py-0.5 rounded-full text-xs font-bold">1</span>
              )}
            </button>
          </div>

          {/* Desktop Category Filter */}
          <div className="hidden lg:block mt-6">
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-5 py-2.5 rounded-xl font-medium transition-all transform hover:scale-105 ${
                  activeCategory === 'all'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-200'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Categories
              </button>
              {faqData.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.category}
                    onClick={() => setActiveCategory(category.category)}
                    className={`px-5 py-2.5 rounded-xl font-medium transition-all flex items-center gap-2 transform hover:scale-105 ${
                      activeCategory === category.category
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-200'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden xl:inline">{category.category}</span>
                    <span className="xl:hidden">{category.category.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile Category Filter */}
          {showMobileFilters && (
            <div className="lg:hidden mt-4 p-4 bg-gray-50 rounded-xl animate-slideDown">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Filter by Category</h3>
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-2">
                <button
                  onClick={() => {
                    setActiveCategory('all');
                    setShowMobileFilters(false);
                  }}
                  className={`w-full px-4 py-3 rounded-lg font-medium text-left transition-all ${
                    activeCategory === 'all'
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  All Categories
                </button>
                {faqData.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.category}
                      onClick={() => {
                        setActiveCategory(category.category);
                        setShowMobileFilters(false);
                      }}
                      className={`w-full px-4 py-3 rounded-lg font-medium text-left transition-all flex items-center gap-3 ${
                        activeCategory === category.category
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      {category.category}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 gap-6">
          {filteredFAQs.map((category, catIndex) => {
            const Icon = category.icon;
            return (
              <div 
                key={catIndex} 
                className="group"
                style={{
                  animation: `fadeInUp 0.5s ease-out ${catIndex * 0.1}s both`
                }}
              >
                {/* Category Card */}
                <div className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                  {/* Category Header */}
                  <div className={`relative bg-gradient-to-r ${category.gradient} p-6 overflow-hidden`}>
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                      }}></div>
                    </div>
                    <div className="relative flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h2 className="text-xl md:text-2xl font-bold text-white">
                            {category.category}
                          </h2>
                          <p className="text-blue-100 text-sm mt-1">
                            {category.items.length} {category.items.length === 1 ? 'Question' : 'Questions'}
                          </p>
                        </div>
                      </div>
                      <div className="hidden md:flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        <span className="text-white text-sm font-medium">Active</span>
                      </div>
                    </div>
                  </div>

                  {/* Questions List */}
                  <div className="divide-y divide-gray-100">
                    {category.items.map((item, itemIndex) => {
                      globalIndex++;
                      const currentIndex = globalIndex;
                      const isOpen = openIndex === currentIndex;

                      return (
                        <div 
                          key={currentIndex} 
                          className="transition-all duration-300 hover:bg-blue-50/50"
                        >
                          <button
                            onClick={() => toggleAccordion(currentIndex)}
                            className="w-full px-6 py-5 md:py-6 text-left focus:outline-none group/item"
                          >
                            <div className="flex items-start gap-4">
                              {/* Question Number */}
                              <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                                isOpen 
                                  ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg' 
                                  : 'bg-blue-100 text-blue-600 group-hover/item:bg-blue-200'
                              }`}>
                                {itemIndex + 1}
                              </div>

                              {/* Question Text */}
                              <div className="flex-1 min-w-0">
                                <h3 className={`text-base md:text-lg font-semibold transition-colors duration-300 ${
                                  isOpen ? 'text-blue-700' : 'text-gray-900 group-hover/item:text-blue-600'
                                }`}>
                                  {item.question}
                                </h3>
                              </div>

                              {/* Chevron Icon */}
                              <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                                isOpen 
                                  ? 'bg-blue-100 rotate-180' 
                                  : 'bg-gray-100 group-hover/item:bg-blue-100'
                              }`}>
                                <ChevronDown className={`w-5 h-5 transition-colors duration-300 ${
                                  isOpen ? 'text-blue-600' : 'text-gray-600'
                                }`} />
                              </div>
                            </div>
                          </button>
                          
                          {/* Answer */}
                          <div
                            className={`overflow-hidden transition-all duration-500 ease-in-out ${
                              isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                            }`}
                          >
                            <div className="px-6 pb-6 md:pl-[4.5rem]">
                              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 md:p-6 border-l-4 border-blue-600">
                                <p className="text-gray-700 leading-relaxed text-base">
                                  {item.answer}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* No Results State */}
        {filteredFAQs.length === 0 && (
          <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-12 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
              <Search className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">No results found</h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              We couldn't find any questions matching "{searchTerm}". Try adjusting your search or browse all categories.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setActiveCategory('all');
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium hover:shadow-lg transition-all transform hover:scale-105"
            >
              Clear Filters
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Contact CTA Section */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {/* Main CTA */}
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-2xl shadow-2xl p-8 md:p-10">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>
            <div className="relative">
              <div className="inline-flex p-3 bg-white/10 backdrop-blur-sm rounded-xl mb-4">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Still have questions?
              </h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Our automation experts are ready to discuss your specific manufacturing needs and provide tailored solutions.
              </p>
              <button className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 group">
                Contact Our Team
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-6 hover:shadow-xl transition-all group cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-xl group-hover:bg-blue-600 transition-colors">
                  <Mail className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1">Email Support</h4>
                  <p className="text-gray-600 text-sm mb-2">Get detailed answers via email</p>
                  <p className="text-blue-600 font-medium">info@micrologicglobal.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-6 hover:shadow-xl transition-all group cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-xl group-hover:bg-blue-600 transition-colors">
                  <Phone className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1">Phone Support</h4>
                  <p className="text-gray-600 text-sm mb-2">Speak with our experts directly</p>
                  <p className="text-blue-600 font-medium">+91 9663 521132</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 500px;
          }
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ProfessionalFAQ;
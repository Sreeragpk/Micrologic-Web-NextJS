"use client";
import React, { useState, useEffect, useRef } from 'react';
import { 
  FaShieldAlt, 
  FaHandshake, 
  FaUserCheck, 
  FaExternalLinkAlt, 
  FaBan, 
  FaExclamationTriangle,
  FaGavel,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFileContract,
  FaCheckCircle,
  FaTimesCircle,
  FaGlobeAmericas
} from 'react-icons/fa';
import { 
  MdSecurity, 
  MdWarning, 
  MdGavel,
  MdLanguage,
  MdUpdate
} from 'react-icons/md';
import { 
  BiSupport, 
  BiBook,
  BiError
} from 'react-icons/bi';
import { 
  AiOutlineRead,
  AiOutlineInfoCircle,
  AiOutlineFileProtect
} from 'react-icons/ai';
import { 
  HiChevronDown, 
  HiChevronUp,
  HiOutlineDocumentText 
} from 'react-icons/hi';
import { IoMdDocument } from 'react-icons/io';

const TermsAndConditions = () => {
  const [activeSection, setActiveSection] = useState('');
  const [expandedSections, setExpandedSections] = useState({});
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      // Progress bar
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${(totalScroll / windowHeight) * 100}`;
      setScrollProgress(scroll);

      // Header shadow on scroll
      setIsScrolled(window.scrollY > 20);

      // Update active section
      const sections = Object.keys(sectionRefs.current);
      for (let section of sections) {
        const element = sectionRefs.current[section];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const scrollToSection = (sectionId) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  const navigationSections = [
    { id: 'overview', title: 'Overview', icon: AiOutlineRead },
    { id: 'definitions', title: 'Definitions', icon: BiBook },
    { id: 'acknowledgment', title: 'Acknowledgment', icon: FaUserCheck },
    { id: 'links', title: 'External Links', icon: FaExternalLinkAlt },
    { id: 'termination', title: 'Termination', icon: FaBan },
    { id: 'liability', title: 'Liability', icon: FaExclamationTriangle },
    { id: 'disclaimer', title: 'Disclaimer', icon: MdWarning },
    { id: 'governing-law', title: 'Governing Law', icon: FaGavel },
    { id: 'disputes', title: 'Disputes', icon: MdGavel },
    { id: 'severability', title: 'Severability', icon: FaFileContract },
    { id: 'changes', title: 'Changes', icon: MdUpdate },
    { id: 'contact', title: 'Contact', icon: FaEnvelope },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 mt-14">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 transition-all duration-300 shadow-lg shadow-indigo-500/50"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Header */}
      <header className={`bg-white sticky top-0 z-40 border-b transition-all duration-300 ${
        isScrolled ? 'shadow-lg border-gray-200' : 'border-gray-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl shadow-lg">
                <FaFileContract className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Terms & Conditions
                </h1>
                <p className="text-sm text-gray-600 mt-1">Micrologic Integrated Systems (P) Ltd</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600 bg-gray-50 px-4 py-2 rounded-lg">
              <FaClock className="w-4 h-4 text-indigo-600" />
              <span>Last updated: <strong>January 01, 2026</strong></span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-1">
            <div className="sticky top-28 space-y-2">
              <div className="flex items-center space-x-2 mb-4 px-4">
                <IoMdDocument className="w-5 h-5 text-indigo-600" />
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
                  Contents
                </h3>
              </div>
              <nav className="space-y-1">
                {navigationSections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 text-left ${
                        activeSection === section.id
                          ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30 transform scale-105'
                          : 'text-gray-700 hover:bg-white hover:shadow-md hover:transform hover:scale-102'
                      }`}
                    >
                      <Icon className={`w-4 h-4 flex-shrink-0 ${
                        activeSection === section.id ? 'text-white' : 'text-indigo-600'
                      }`} />
                      <span className="text-sm font-medium">{section.title}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3 space-y-6">
            
            {/* Alert Banner */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 rounded-lg p-6 shadow-sm">
              <div className="flex items-start space-x-3">
                <AiOutlineInfoCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-semibold text-amber-900 mb-2">
                    Important Notice
                  </h3>
                  <p className="text-sm text-amber-800">
                    Please read these terms and conditions carefully before using Our Service. 
                    By accessing or using the Service, you agree to be bound by these Terms and Conditions.
                  </p>
                </div>
              </div>
            </div>

            {/* Overview Section */}
            <section 
              ref={el => sectionRefs.current['overview'] = el}
              id="overview" 
              className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl">
                  <AiOutlineRead className="w-7 h-7 text-indigo-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      These Terms and Conditions govern the use of this Service and constitute the agreement 
                      between You and the Company. These Terms set out the rights and obligations of all users 
                      regarding the use of the Service.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 mt-6">
                      <InfoCard
                        icon={<FaCheckCircle className="w-5 h-5 text-green-600" />}
                        title="Agreement"
                        description="By using our Service, you agree to these terms"
                        color="green"
                      />
                      <InfoCard
                        icon={<FaTimesCircle className="w-5 h-5 text-red-600" />}
                        title="Disagreement"
                        description="If you disagree, please do not use the Service"
                        color="red"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Definitions Section */}
            <section 
              ref={el => sectionRefs.current['definitions'] = el}
              id="definitions" 
              className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl">
                  <BiBook className="w-7 h-7 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900">Definitions</h2>
                  <p className="text-gray-600 mt-2">Key terms used throughout this agreement</p>
                </div>
              </div>

              <div className="grid gap-4">
                {[
                  { 
                    term: 'Company', 
                    definition: 'Refers to Micrologic Integrated Systems (P) Limited, #22-D1, "Micrologic Drive", KIADB, Kumbalgodu Industrial Area, NH 275, 1st Phase, Bengaluru, Karnataka 560074, India',
                    icon: '🏢'
                  },
                  { 
                    term: 'Service', 
                    definition: 'Refers to the Website - Micrologic Global, accessible from https://micrologicglobal.com/',
                    icon: '🌐'
                  },
                  { 
                    term: 'Terms and Conditions', 
                    definition: 'These Terms and Conditions that form the entire agreement between You and the Company',
                    icon: '📄'
                  },
                  { 
                    term: 'Device', 
                    definition: 'Any device that can access the Service such as a computer, cellphone or digital tablet',
                    icon: '💻'
                  },
                  { 
                    term: 'Affiliate', 
                    definition: 'An entity that controls, is controlled by or is under common control with a party (50% or more ownership)',
                    icon: '🤝'
                  },
                  { 
                    term: 'You', 
                    definition: 'The individual or legal entity accessing or using the Service',
                    icon: '👤'
                  },
                ].map((item, index) => (
                  <DefinitionCard key={index} {...item} />
                ))}
              </div>
            </section>

            {/* Acknowledgment Section */}
            <section 
              ref={el => sectionRefs.current['acknowledgment'] = el}
              id="acknowledgment" 
              className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl">
                  <FaUserCheck className="w-7 h-7 text-green-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900">Acknowledgment</h2>
                  <p className="text-gray-600 mt-2">Your agreement to these terms</p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700">
                  Your access to and use of the Service is conditioned on Your acceptance of and compliance 
                  with these Terms and Conditions. These Terms apply to all visitors, users and others who 
                  access or use the Service.
                </p>

                <CollapsiblePanel
                  title="Age Requirement"
                  icon={<FaUserCheck className="w-5 h-5" />}
                  expanded={expandedSections['age']}
                  onToggle={() => toggleSection('age')}
                  color="blue"
                >
                  <p className="text-gray-700">
                    You represent that you are over the age of 18. The Company does not permit those under 
                    18 to use the Service. If you are under 18, you must not access or use this Service.
                  </p>
                </CollapsiblePanel>

                <CollapsiblePanel
                  title="Privacy Policy"
                  icon={<AiOutlineFileProtect className="w-5 h-5" />}
                  expanded={expandedSections['privacy']}
                  onToggle={() => toggleSection('privacy')}
                  color="purple"
                >
                  <p className="text-gray-700">
                    Your access to and use of the Service is also conditioned on Your acceptance of and 
                    compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our 
                    policies and procedures on the collection, use and disclosure of Your personal information.
                  </p>
                </CollapsiblePanel>
              </div>
            </section>

            {/* Links to Other Websites */}
            <section 
              ref={el => sectionRefs.current['links'] = el}
              id="links" 
              className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl">
                  <FaExternalLinkAlt className="w-7 h-7 text-cyan-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900">Links to Other Websites</h2>
                  <p className="text-gray-600 mt-2">Third-party websites and services</p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700">
                  Our Service may contain links to third-party websites or services that are not owned or 
                  controlled by the Company.
                </p>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-r-lg">
                  <div className="flex items-start space-x-3">
                    <MdWarning className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-yellow-900 mb-2">Disclaimer of Responsibility</h4>
                      <p className="text-sm text-yellow-800">
                        The Company has no control over, and assumes no responsibility for, the content, 
                        privacy policies, or practices of any third-party websites or services. We strongly 
                        advise You to read the terms and conditions and privacy policies of any third-party 
                        websites that You visit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Termination Section */}
            <section 
              ref={el => sectionRefs.current['termination'] = el}
              id="termination" 
              className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-red-100 to-rose-100 rounded-xl">
                  <FaBan className="w-7 h-7 text-red-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900">Termination</h2>
                  <p className="text-gray-600 mt-2">When and how we may terminate access</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <h4 className="font-semibold text-red-900 mb-3 flex items-center space-x-2">
                    <FaBan className="w-5 h-5" />
                    <span>Immediate Termination Rights</span>
                  </h4>
                  <p className="text-gray-700 mb-4">
                    We may terminate or suspend Your access immediately, without prior notice or liability, 
                    for any reason whatsoever, including without limitation if You breach these Terms and Conditions.
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-sm text-gray-700">
                      <strong>Upon termination:</strong> Your right to use the Service will cease immediately.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section 
              ref={el => sectionRefs.current['liability'] = el}
              id="liability" 
              className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-orange-100 to-amber-100 rounded-xl">
                  <FaExclamationTriangle className="w-7 h-7 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900">Limitation of Liability</h2>
                  <p className="text-gray-600 mt-2">Limitations on our legal responsibility</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 p-6 rounded-r-xl">
                  <h4 className="font-bold text-orange-900 mb-3">Maximum Liability Cap</h4>
                  <p className="text-gray-700">
                    The entire liability of the Company and any of its suppliers shall be limited to the 
                    amount actually paid by You through the Service or <strong>100 USD</strong> if You 
                    haven't purchased anything through the Service.
                  </p>
                </div>

                <div className="border-2 border-gray-200 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                    <BiError className="w-5 h-5 text-red-600" />
                    <span>Exclusion of Damages</span>
                  </h4>
                  <p className="text-gray-700 mb-4">
                    To the maximum extent permitted by applicable law, the Company shall not be liable for any:
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Special, incidental, indirect, or consequential damages',
                      'Damages for loss of profits or data',
                      'Business interruption damages',
                      'Personal injury or loss of privacy',
                      'Third-party software or hardware issues'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <FaTimesCircle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-900">
                    <strong>Note:</strong> Some jurisdictions do not allow the exclusion or limitation of 
                    liability for consequential or incidental damages. In such cases, liability will be 
                    limited to the greatest extent permitted by law.
                  </p>
                </div>
              </div>
            </section>

            {/* Disclaimer Section */}
            <section 
              ref={el => sectionRefs.current['disclaimer'] = el}
              id="disclaimer" 
              className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl">
                  <MdWarning className="w-7 h-7 text-yellow-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900">"AS IS" and "AS AVAILABLE" Disclaimer</h2>
                  <p className="text-gray-600 mt-2">Service provided without warranties</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-xl p-6">
                  <p className="text-gray-800 font-medium mb-4">
                    The Service is provided to You <strong>"AS IS"</strong> and <strong>"AS AVAILABLE"</strong> with 
                    all faults and defects without warranty of any kind.
                  </p>
                  
                  <div className="bg-white rounded-lg p-5 space-y-3">
                    <h5 className="font-semibold text-gray-900 mb-3">We Disclaim All Warranties Including:</h5>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {[
                        'Merchantability',
                        'Fitness for a particular purpose',
                        'Title and non-infringement',
                        'Warranties from course of dealing',
                        'Course of performance',
                        'Usage or trade practice'
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <DisclaimerCard
                    icon={<BiError className="w-6 h-6" />}
                    title="No Guarantee of Performance"
                    description="We don't guarantee the Service will meet your requirements or operate without interruption"
                  />
                  <DisclaimerCard
                    icon={<MdSecurity className="w-6 h-6" />}
                    title="No Security Warranty"
                    description="We cannot warrant that the Service is free from viruses, malware, or other harmful components"
                  />
                </div>
              </div>
            </section>

            {/* Governing Law Section */}
            <section 
              ref={el => sectionRefs.current['governing-law'] = el}
              id="governing-law" 
              className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-xl">
                  <FaGavel className="w-7 h-7 text-indigo-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900">Governing Law</h2>
                  <p className="text-gray-600 mt-2">Legal jurisdiction and applicable laws</p>
                </div>
              </div>

              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
                <div className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="w-5 h-5 text-indigo-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-indigo-900 mb-2">Applicable Jurisdiction</h4>
                    <p className="text-gray-700 mb-3">
                      The laws of <strong>Karnataka, India</strong>, excluding its conflicts of law rules, 
                      shall govern this Terms and Your use of the Service.
                    </p>
                    <p className="text-sm text-gray-600">
                      Your use of the Service may also be subject to other local, state, national, or 
                      international laws.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Disputes Resolution */}
            <section 
              ref={el => sectionRefs.current['disputes'] = el}
              id="disputes" 
              className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-xl">
                  <MdGavel className="w-7 h-7 text-teal-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900">Disputes Resolution</h2>
                  <p className="text-gray-600 mt-2">How we handle disputes</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-xl">
                  <h4 className="font-semibold text-teal-900 mb-3 flex items-center space-x-2">
                    <FaHandshake className="w-5 h-5" />
                    <span>Informal Resolution First</span>
                  </h4>
                  <p className="text-gray-700">
                    If You have any concern or dispute about the Service, You agree to first try to resolve 
                    the dispute informally by contacting the Company.
                  </p>
                </div>

                <CollapsiblePanel
                  title="For European Union (EU) Users"
                  icon={<FaGlobeAmericas className="w-5 h-5" />}
                  expanded={expandedSections['eu']}
                  onToggle={() => toggleSection('eu')}
                  color="blue"
                >
                  <p className="text-gray-700">
                    If You are a European Union consumer, you will benefit from any mandatory provisions 
                    of the law of the country in which you are resident.
                  </p>
                </CollapsiblePanel>

                <CollapsiblePanel
                  title="United States Legal Compliance"
                  icon={<MdLanguage className="w-5 h-5" />}
                  expanded={expandedSections['us']}
                  onToggle={() => toggleSection('us')}
                  color="red"
                >
                  <div className="space-y-3">
                    <p className="text-gray-700">You represent and warrant that:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <FaCheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">
                          You are not located in a country that is subject to the United States government 
                          embargo, or designated as a "terrorist supporting" country
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <FaCheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">
                          You are not listed on any United States government list of prohibited or restricted parties
                        </span>
                      </li>
                    </ul>
                  </div>
                </CollapsiblePanel>
              </div>
            </section>

            {/* Severability and Waiver */}
            <section 
              ref={el => sectionRefs.current['severability'] = el}
              id="severability" 
              className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl">
                  <FaFileContract className="w-7 h-7 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900">Severability and Waiver</h2>
                  <p className="text-gray-600 mt-2">Enforceability of provisions</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
                  <h4 className="font-semibold text-purple-900 mb-3">Severability</h4>
                  <p className="text-sm text-gray-700">
                    If any provision is held to be unenforceable or invalid, it will be changed and 
                    interpreted to accomplish its objectives to the greatest extent possible, and the 
                    remaining provisions will continue in full force.
                  </p>
                </div>

                <div className="bg-pink-50 border border-pink-200 rounded-xl p-5">
                  <h4 className="font-semibold text-pink-900 mb-3">Waiver</h4>
                  <p className="text-sm text-gray-700">
                    The failure to exercise a right or require performance under these Terms shall not 
                    affect a party's ability to exercise such right or require such performance at any 
                    time thereafter.
                  </p>
                </div>
              </div>

              <div className="mt-4 bg-gray-50 border border-gray-200 rounded-xl p-5">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center space-x-2">
                  <MdLanguage className="w-5 h-5 text-gray-600" />
                  <span>Translation Interpretation</span>
                </h4>
                <p className="text-sm text-gray-700">
                  These Terms may have been translated. You agree that the original English text shall 
                  prevail in the case of a dispute.
                </p>
              </div>
            </section>

            {/* Changes to Terms */}
            <section 
              ref={el => sectionRefs.current['changes'] = el}
              id="changes" 
              className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl">
                  <MdUpdate className="w-7 h-7 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900">Changes to These Terms</h2>
                  <p className="text-gray-600 mt-2">How we update these terms</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
                  <h4 className="font-semibold text-blue-900 mb-3">Our Right to Modify</h4>
                  <p className="text-gray-700 mb-4">
                    We reserve the right, at Our sole discretion, to modify or replace these Terms at any time.
                  </p>
                  
                  <div className="bg-white rounded-lg p-4 space-y-3">
                    <div className="flex items-start space-x-3">
                      <FaCheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Material Changes</p>
                        <p className="text-sm text-gray-600">
                          We will provide at least 30 days' notice prior to new terms taking effect
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <FaCheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Continued Use</p>
                        <p className="text-sm text-gray-600">
                          By continuing to use the Service after revisions become effective, you agree to the new terms
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <p className="text-sm text-amber-900">
                    <strong>Important:</strong> If you do not agree to the new terms, in whole or in part, 
                    please stop using the website and the Service.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section 
              ref={el => sectionRefs.current['contact'] = el}
              id="contact" 
              className="bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 rounded-2xl shadow-xl p-6 sm:p-8 text-white"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                  <FaEnvelope className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
                  <p className="text-indigo-100">
                    Have questions about these Terms and Conditions?
                  </p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 space-y-5">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <FaEnvelope className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Email Address</p>
                    <a 
                      href="mailto:info@micrologicglobal.com" 
                      className="text-indigo-100 hover:text-white transition-colors flex items-center space-x-2 group"
                    >
                      <span>info@micrologicglobal.com</span>
                      <FaExternalLinkAlt className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>

                <div className="h-px bg-white/20"></div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <FaMapMarkerAlt className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Office Address</p>
                    <address className="text-sm text-indigo-100 not-italic leading-relaxed">
                      Micrologic Integrated Systems (P) Limited<br />
                      #22-D1, "Micrologic Drive", KIADB<br />
                      Kumbalgodu Industrial Area, NH 275, 1st Phase<br />
                      Bengaluru, Karnataka 560074, India
                    </address>
                  </div>
                </div>

                <div className="h-px bg-white/20"></div>

                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <BiSupport className="w-5 h-5" />
                    <span>
                      We typically respond to all inquiries within 24-48 business hours
                    </span>
                  </div>
                </div>
              </div>
            </section>

          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <div className="text-sm text-gray-600 text-center sm:text-left">
              <p>© 2026 Micrologic Integrated Systems (P) Ltd. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <HiOutlineDocumentText className="w-4 h-4" />
              <span>Last updated: <strong>January 01, 2026</strong></span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Reusable Components

const InfoCard = ({ icon, title, description, color }) => (
  <div className={`bg-${color}-50 border border-${color}-200 rounded-xl p-4 hover:shadow-md transition-shadow`}>
    <div className="flex items-start space-x-3">
      {icon}
      <div>
        <h4 className={`font-semibold text-${color}-900 mb-1`}>{title}</h4>
        <p className={`text-sm text-${color}-800`}>{description}</p>
      </div>
    </div>
  </div>
);

const DefinitionCard = ({ term, definition, icon }) => (
  <div className="group border-2 border-gray-200 rounded-xl p-5 hover:border-indigo-300 hover:shadow-lg transition-all duration-300 bg-white">
    <div className="flex items-start space-x-3">
      <span className="text-3xl">{icon}</span>
      <div className="flex-1">
        <h3 className="font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
          {term}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">{definition}</p>
      </div>
    </div>
  </div>
);

const CollapsiblePanel = ({ title, icon, children, expanded, onToggle, color }) => (
  <div className={`border-2 border-${color}-200 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300`}>
    <button
      onClick={onToggle}
      className={`w-full flex items-center justify-between p-5 bg-${color}-50 hover:bg-${color}-100 transition-colors`}
    >
      <div className="flex items-center space-x-3">
        <div className={`text-${color}-600`}>{icon}</div>
        <h4 className={`font-semibold text-${color}-900`}>{title}</h4>
      </div>
      {expanded ? (
        <HiChevronUp className={`w-5 h-5 text-${color}-600`} />
      ) : (
        <HiChevronDown className={`w-5 h-5 text-${color}-600`} />
      )}
    </button>
    {expanded && (
      <div className="p-5 bg-white border-t-2 border-gray-100 animate-fadeIn">
        {children}
      </div>
    )}
  </div>
);

const DisclaimerCard = ({ icon, title, description }) => (
  <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-5 hover:shadow-lg transition-all duration-300">
    <div className="text-yellow-600 mb-3">{icon}</div>
    <h5 className="font-semibold text-gray-900 mb-2">{title}</h5>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

export default TermsAndConditions;
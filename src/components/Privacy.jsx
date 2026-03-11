"use client";
import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  Users, 
  FileText, 
  Mail,
  ExternalLink,
  Clock,
  CheckCircle
} from 'lucide-react';

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState('');
  const [expandedSections, setExpandedSections] = useState({});
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${(totalScroll / windowHeight) * 100}`;
      setScrollProgress(scroll);
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

  const sections = [
    { id: 'overview', title: 'Overview', icon: Eye },
    { id: 'definitions', title: 'Definitions', icon: FileText },
    { id: 'data-collection', title: 'Data Collection', icon: Database },
    { id: 'data-usage', title: 'How We Use Data', icon: Users },
    { id: 'cookies', title: 'Cookies & Tracking', icon: Shield },
    { id: 'your-rights', title: 'Your Rights', icon: CheckCircle },
    { id: 'security', title: 'Security', icon: Lock },
    { id: 'contact', title: 'Contact Us', icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 mt-14">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Privacy Policy</h1>
                <p className="text-sm text-gray-600 mt-1">Micrologic Integrated Systems (P) Ltd</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-600">
              <Clock className="w-4 h-4" />
              <span>Last updated: January 01, 2026</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-2">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Contents
              </h3>
              <nav className="space-y-1">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className={`flex items-center space-x-3 px-4 py-2.5 rounded-lg transition-all duration-200 ${
                        activeSection === section.id
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'text-gray-700 hover:bg-white hover:shadow-sm'
                      }`}
                      onClick={() => setActiveSection(section.id)}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{section.title}</span>
                    </a>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3 space-y-6">
            
            {/* Overview Section */}
            <section id="overview" className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border border-gray-200">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Eye className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    This Privacy Policy describes Our policies and procedures on the collection, use and 
                    disclosure of Your information when You use the Service and tells You about Your privacy 
                    rights and how the law protects You.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                    <p className="text-sm text-blue-900">
                      <strong>Important:</strong> We use Your Personal data to provide and improve the Service. 
                      By using the Service, You agree to the collection and use of information in accordance 
                      with this Privacy Policy.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Definitions Section */}
            <section id="definitions" className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border border-gray-200">
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 bg-indigo-100 rounded-lg">
                  <FileText className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900">Definitions</h2>
                  <p className="text-gray-600 mt-2">Key terms used throughout this policy</p>
                </div>
              </div>

              <div className="grid gap-4">
                {[
                  { term: 'Personal Data', definition: 'Any information that relates to an identified or identifiable individual.' },
                  { term: 'Service', definition: 'Refers to the Website - Micrologic Global, accessible from https://micrologicglobal.com/' },
                  { term: 'Usage Data', definition: 'Data collected automatically, either generated by the use of the Service or from the Service infrastructure itself.' },
                  { term: 'Cookies', definition: 'Small files placed on Your device containing details of Your browsing history.' },
                  { term: 'Device', definition: 'Any device that can access the Service such as a computer, cellphone or digital tablet.' },
                ].map((item, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                    <h3 className="font-semibold text-gray-900 mb-2">{item.term}</h3>
                    <p className="text-sm text-gray-600">{item.definition}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Data Collection Section */}
            <section id="data-collection" className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border border-gray-200">
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Database className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900">Data We Collect</h2>
                  <p className="text-gray-600 mt-2">Types of information we gather</p>
                </div>
              </div>

              <div className="space-y-6">
                <CollapsibleCard
                  title="Personal Data"
                  expanded={expandedSections['personal']}
                  onToggle={() => toggleSection('personal')}
                  icon="👤"
                >
                  <p className="text-gray-700 mb-4">
                    While using Our Service, We may ask You to provide Us with certain personally 
                    identifiable information that can be used to contact or identify You.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Email address</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Phone number</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Company information</span>
                    </li>
                  </ul>
                </CollapsibleCard>

                <CollapsibleCard
                  title="Usage Data"
                  expanded={expandedSections['usage']}
                  onToggle={() => toggleSection('usage')}
                  icon="📊"
                >
                  <p className="text-gray-700 mb-4">
                    Usage Data is collected automatically when using the Service and may include:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      'IP Address',
                      'Browser Type & Version',
                      'Pages Visited',
                      'Time & Date of Visit',
                      'Time Spent on Pages',
                      'Device Identifiers',
                      'Mobile Device Information',
                      'Diagnostic Data'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </CollapsibleCard>
              </div>
            </section>

            {/* Data Usage Section */}
            <section id="data-usage" className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border border-gray-200">
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900">How We Use Your Data</h2>
                  <p className="text-gray-600 mt-2">The purposes for which we process your information</p>
                </div>
              </div>

              <div className="grid gap-4">
                {[
                  { title: 'Service Provision', description: 'To provide and maintain our Service, including monitoring usage', color: 'blue' },
                  { title: 'Account Management', description: 'To manage Your registration and provide access to functionalities', color: 'indigo' },
                  { title: 'Communication', description: 'To contact You with updates, security notices, and support messages', color: 'purple' },
                  { title: 'Marketing', description: 'To provide news, special offers, and information about similar services', color: 'pink' },
                  { title: 'Business Transfers', description: 'To evaluate or conduct mergers, acquisitions, or asset sales', color: 'orange' },
                  { title: 'Analysis & Improvement', description: 'To analyze data, identify trends, and improve our Service', color: 'green' },
                ].map((item, index) => (
                  <div key={index} className={`border-l-4 border-${item.color}-500 bg-${item.color}-50 p-4 rounded-r-lg`}>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Cookies Section */}
            <section id="cookies" className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border border-gray-200">
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 bg-amber-100 rounded-lg">
                  <Shield className="w-6 h-6 text-amber-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900">Cookies & Tracking Technologies</h2>
                  <p className="text-gray-600 mt-2">How we use cookies to enhance your experience</p>
                </div>
              </div>

              <div className="space-y-4">
                <CookieCard
                  type="Necessary / Essential Cookies"
                  cookieType="Session Cookies"
                  description="Essential to provide services and enable you to use website features. Help authenticate users and prevent fraudulent use."
                  color="red"
                />
                <CookieCard
                  type="Acceptance Cookies"
                  cookieType="Persistent Cookies"
                  description="Identify if users have accepted the use of cookies on the Website."
                  color="blue"
                />
                <CookieCard
                  type="Functionality Cookies"
                  cookieType="Persistent Cookies"
                  description="Remember your choices and preferences to provide a more personalized experience."
                  color="green"
                />
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> You can instruct your browser to refuse all Cookies. However, 
                  if you do not accept Cookies, you may not be able to use some parts of our Service.
                </p>
              </div>
            </section>

            {/* Your Rights Section */}
            <section id="your-rights" className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border border-gray-200">
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 bg-teal-100 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-teal-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900">Your Privacy Rights</h2>
                  <p className="text-gray-600 mt-2">What you can do with your personal data</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { right: 'Access', description: 'Request access to your personal data', icon: '👁️' },
                  { right: 'Correction', description: 'Update or amend your information', icon: '✏️' },
                  { right: 'Deletion', description: 'Request deletion of your data', icon: '🗑️' },
                  { right: 'Portability', description: 'Receive your data in a usable format', icon: '📦' },
                  { right: 'Objection', description: 'Object to processing of your data', icon: '⛔' },
                  { right: 'Restriction', description: 'Request restriction of processing', icon: '🔒' },
                ].map((item, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-5 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.right}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">How to Exercise Your Rights</h4>
                <p className="text-sm text-blue-800">
                  You may update, amend, or delete your information at any time by signing in to your 
                  account and visiting the account settings section. You may also contact us directly 
                  to request access to, correct, or delete any personal information.
                </p>
              </div>
            </section>

            {/* Security Section */}
            <section id="security" className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border border-gray-200">
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 bg-red-100 rounded-lg">
                  <Lock className="w-6 h-6 text-red-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900">Data Security</h2>
                  <p className="text-gray-600 mt-2">How we protect your information</p>
                </div>
              </div>

              <div className="prose max-w-none">
                <p className="text-gray-700 mb-4">
                  The security of Your Personal Data is important to Us. We strive to use commercially 
                  acceptable means to protect Your Personal Data.
                </p>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg mb-6">
                  <p className="text-sm text-yellow-900">
                    <strong>Important Notice:</strong> No method of transmission over the Internet or 
                    method of electronic storage is 100% secure. While we implement security measures, 
                    we cannot guarantee absolute security.
                  </p>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { title: 'Encryption', icon: '🔐', desc: 'Data encrypted in transit and at rest' },
                    { title: 'Access Control', icon: '👮', desc: 'Strict access management policies' },
                    { title: 'Monitoring', icon: '📡', desc: '24/7 security monitoring' },
                  ].map((item, index) => (
                    <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-4xl mb-2">{item.icon}</div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-xs text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Additional Sections */}
            <section className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Information</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                    <span>👶</span>
                    <span>Children's Privacy</span>
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Our Service does not address anyone under the age of 13. We do not knowingly collect 
                    personally identifiable information from anyone under the age of 13. If you are a parent 
                    or guardian and believe your child has provided us with Personal Data, please contact us.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                    <span>🔗</span>
                    <span>Links to Other Websites</span>
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Our Service may contain links to other websites. We have no control over and assume 
                    no responsibility for the content, privacy policies, or practices of any third-party sites.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                    <span>🔄</span>
                    <span>Policy Updates</span>
                  </h3>
                  <p className="text-gray-700 text-sm">
                    We may update Our Privacy Policy from time to time. We will notify you of any changes 
                    by posting the new Privacy Policy on this page and updating the "Last updated" date.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg p-6 sm:p-8 text-white">
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 bg-white/20 rounded-lg backdrop-blur">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
                  <p className="text-blue-100">Have questions about this Privacy Policy?</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-lg p-6 space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <a href="mailto:info@micrologicglobal.com" className="text-blue-100 hover:text-white transition-colors">
                      info@micrologicglobal.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <ExternalLink className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">Address</p>
                    <p className="text-sm text-blue-100">
                      Micrologic Integrated Systems (P) Limited<br />
                      #22-D1, "Micrologic Drive", KIADB<br />
                      Kumbalgodu Industrial Area NH 275, 1st Phase<br />
                      Bengaluru, Karnataka 560074, India
                    </p>
                  </div>
                </div>
              </div>
            </section>

          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-sm text-gray-600">
            <p>© 2026 Micrologic Integrated Systems (P) Ltd. All rights reserved.</p>
            <p className="mt-2">
              This privacy policy was last updated on <strong>January 01, 2026</strong>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Collapsible Card Component
const CollapsibleCard = ({ title, children, expanded, onToggle, icon }) => (
  <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
    >
      <div className="flex items-center space-x-3">
        <span className="text-2xl">{icon}</span>
        <h3 className="font-semibold text-gray-900">{title}</h3>
      </div>
      {expanded ? (
        <ChevronUp className="w-5 h-5 text-gray-600" />
      ) : (
        <ChevronDown className="w-5 h-5 text-gray-600" />
      )}
    </button>
    {expanded && (
      <div className="p-4 bg-white animate-fadeIn">
        {children}
      </div>
    )}
  </div>
);

// Cookie Card Component
const CookieCard = ({ type, cookieType, description, color }) => (
  <div className={`border-l-4 border-${color}-500 bg-${color}-50 p-4 rounded-r-lg`}>
    <div className="flex items-start justify-between mb-2">
      <h3 className="font-semibold text-gray-900">{type}</h3>
      <span className={`px-2 py-1 text-xs font-medium bg-${color}-200 text-${color}-800 rounded`}>
        {cookieType}
      </span>
    </div>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

export default PrivacyPolicy;
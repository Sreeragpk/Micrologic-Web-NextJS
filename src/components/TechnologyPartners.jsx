// src/components/TechnologyPartners.js
import React from "react";

const partners = [
  {
    title: "Machine Vision Software",
    logo: "https://micrologicglobal.com/wp-content/uploads/2021/10/nwuro.jpg",
    link: "https://www.neurocheck.com/",
    desc: "NeuroCheck from Germany is an innovative Machine Vision Platform provider with over 25+ years of industry experience.",
  },
  {
    title: "Industrial Robotics",
    logo: "https://micrologicglobal.com/wp-content/uploads/2023/02/Epson-Emblem-2048x1152.png",
    link: "https://epson.com/industrial-robots-factory-automation",
    desc: "Epson, a world-class Japanese company, manufactures industrial robots trusted by the world’s top manufacturers.",
  },
  {
    title: "Automated Test Platform",
    logo: "https://micrologicglobal.com/wp-content/uploads/2024/05/logo-6tl.png",
    link: "https://6tlengineering.com/",
    desc: "6TL from Spain provides advanced and modular test solutions for electronics manufacturers worldwide.",
  },
  {
    title: "Design & Test Solutions",
    logo: "https://www.qualitestgroup.com/wp-content/uploads/2023/04/Keysight_Pref_Logo_Color.png.webp",
    link: "https://www.keysight.com/in/en/solutions/design-automation.html",
    desc: "Keysight Technologies is a global leader in electronic design automation and test solutions for innovators.",
  },
];


const TechnologyPartners = () => {
  return (
    <section id="partners" className="py-20 bg-gradient-to-br from-gray-50 to-slate-100">
      <div className="container mx-auto px-6 lg:px-8">
   {/* Heading */}
<div className="text-center mb-16 max-w-3xl mx-auto">
  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold
  tracking-tight leading-[1.2] 
  text-transparent bg-clip-text 
bg-blue-600
  drop-shadow-sm pb-4">
  Our Technology Partners
</h2>

  {/* Decorative underline accent */}
  <div className="mt-4 w-24 h-1 mx-auto rounded-full 
    bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600">
  </div>

  <p className="mt-6 text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
    We collaborate with global industry leaders to deliver 
    <span className="text-slate-900 font-semibold"> cutting-edge solutions </span>, 
    combining their wealth of experience with our integration expertise.
  </p>
</div>

        {/* Partner Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner) => (
            <a
              key={partner.title}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block [perspective:1000px]"
            >
              <div
                className="
                  relative w-full h-full p-6 bg-white border border-slate-200 rounded-2xl 
                  shadow-md transition-all duration-500
                  group-hover:shadow-2xl group-hover:shadow-blue-200/50
                  group-hover:[transform:rotateX(10deg)_rotateY(-8deg)]
                "
              >
                {/* Logo Container */}
                <div 
                  className="
                    relative flex justify-center items-center h-28 mb-6 rounded-lg 
                    bg-slate-50 border border-slate-200/80
                  "
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.title} logo`}
                    className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    {partner.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {partner.desc}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyPartners;
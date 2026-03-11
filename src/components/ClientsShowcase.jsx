import { Globe2 } from "lucide-react";
import clientimage from "../assets/clientimg.png";

export default function ClientsShowcase() {
  return (
    <section className="relative py-10 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Decorative faint globe background */}
      <div className="absolute inset-0 opacity-5 flex items-center justify-center pointer-events-none">
        <Globe2 className="w-[70%] h-[70%] text-gray-400" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 text-center">
        {/* Heading (smaller now) */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
          Trusted <span className="text-blue-600">Worldwide</span>
        </h2>
        
        {/* Logos Image - compact style */}
        <div className="relative mx-auto max-w-5xl  overflow-hidden">
          <img
            src={clientimage}
            alt="Our Clients"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Caption */}
        <p className="mt-4 text-sm text-gray-500">
          A few of our valued clients who trust us globally.
        </p>
      </div>
    </section>
  );
}
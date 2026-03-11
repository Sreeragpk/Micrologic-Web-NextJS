"use client";
import { useState } from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader,
} from "@react-google-maps/api";
import { 
  MapPin, 
  Navigation, 
  Phone, 
  Mail, 
  Building2,
  ExternalLink,
  Map,
  Satellite,
  Layers,
  Mountain
} from "lucide-react";

// ============================================
// COMPANY CONFIGURATION
// ============================================
const COMPANY_CONFIG = {
  name: "Micrologic Integrated Systems (P) Ltd",
  shortName: "Micrologic Systems",
  tagline: "Precision Engineering Solutions",
  location: "Bengaluru, India",
  address: {
    line1: "#22-D1, KIADB, Kumbalgodu Industrial Area",
    line2: "Bengaluru, Karnataka 560074",
    country: "India"
  },
  contact: {
    phone: "+91 96635 21132",
    email: "info@micrologicglobal.com",
    website: "www.micrologicglobal.com"
  },
  coordinates: { 
    lat: 12.873259, 
    lng: 77.442332 
  },
  colors: {
    primary: "#4f46e5",      // Indigo-600
    primaryDark: "#4338ca",  // Indigo-700
    secondary: "#0f172a",
    accent: "#6366f1"        // Indigo-500
  }
};

// Map Type Options
const MAP_TYPES = [
  { id: "roadmap", label: "Map", icon: Map },
  { id: "satellite", label: "Satellite", icon: Satellite },
  { id: "hybrid", label: "Hybrid", icon: Layers },
  { id: "terrain", label: "Terrain", icon: Mountain },
];

export default function LocationMap({
  size = "large",
  customWidth = null,
  customHeight = null,
  showHeader = true,
  showMapTypeControls = true,
  defaultMapType = "hybrid",
  showDirectionsButton = true,
  className = "",
}) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const [infoOpen, setInfoOpen] = useState(false);
  const [mapType, setMapType] = useState(defaultMapType);

  // Loading State - No white background
  if (!isLoaded) {
    return (
      <div className={`flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 ${className}`}>
        <div className="text-center">
          <div className="relative w-14 h-14 mx-auto mb-4">
            <div className="absolute inset-0 border-4 border-slate-300 rounded-full"></div>
            <div 
              className="absolute inset-0 border-4 border-t-transparent rounded-full animate-spin"
              style={{ borderTopColor: COMPANY_CONFIG.colors.primary }}
            ></div>
          </div>
          <p className="text-slate-700 font-semibold text-sm">Loading Map...</p>
          <p className="text-slate-500 text-xs mt-1">{COMPANY_CONFIG.shortName}</p>
        </div>
      </div>
    );
  }

  const position = COMPANY_CONFIG.coordinates;

  // Custom marker icon
  const customIcon = {
    url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="56" height="68" viewBox="0 0 56 68">
        <defs>
          <filter id="shadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" flood-opacity="0.4"/>
          </filter>
          <linearGradient id="pinGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:${COMPANY_CONFIG.colors.accent};stop-opacity:1" />
            <stop offset="100%" style="stop-color:${COMPANY_CONFIG.colors.primary};stop-opacity:1" />
          </linearGradient>
        </defs>
        <g filter="url(#shadow)">
          <path d="M28 4C16.5 4 7 13.5 7 25c0 16 21 37 21 37s21-21 21-37c0-11.5-9.5-21-21-21z" 
                fill="url(#pinGradient)"/>
          <circle cx="28" cy="25" r="10" fill="white"/>
          <circle cx="28" cy="25" r="5" fill="${COMPANY_CONFIG.colors.primary}"/>
        </g>
      </svg>
    `)}`,
    scaledSize: new window.google.maps.Size(56, 68),
    anchor: new window.google.maps.Point(28, 68),
  };

  // Map styles
  const getMapStyles = () => {
    if (mapType === "satellite" || mapType === "hybrid") {
      return [];
    }
    return [
      { featureType: "poi", elementType: "labels", stylers: [{ visibility: "off" }] },
      { featureType: "transit", elementType: "labels", stylers: [{ visibility: "off" }] },
    ];
  };

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Company Header Badge */}
      {showHeader && (
        <div className="absolute top-4 left-4 z-10">
          <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-lg px-4 py-3 flex items-center gap-3 border border-white/50">
            <div 
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: COMPANY_CONFIG.colors.primary }}
            >
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm">{COMPANY_CONFIG.shortName}</h3>
              <p className="text-xs text-slate-500">{COMPANY_CONFIG.location}</p>
            </div>
          </div>
        </div>
      )}

      {/* Map Type Controls - Centered */}
      {showMapTypeControls && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
          <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-lg p-1 flex gap-0.5 border border-white/50">
            {MAP_TYPES.map((type) => {
              const Icon = type.icon;
              const isActive = mapType === type.id;
              return (
                <button
                  key={type.id}
                  onClick={() => setMapType(type.id)}
                  className={`
                    px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all duration-200
                    ${isActive 
                      ? 'text-white shadow-md' 
                      : 'text-slate-600 hover:bg-slate-100'
                    }
                  `}
                  style={isActive ? { backgroundColor: COMPANY_CONFIG.colors.primary } : {}}
                  title={type.label}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden md:inline">{type.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Get Directions Button */}
      {showDirectionsButton && (
        <div className="absolute top-4 right-4 z-10">
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${position.lat},${position.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white px-4 py-2.5 rounded-xl shadow-lg font-semibold text-sm flex items-center gap-2 transition-all duration-200 hover:scale-105 hover:shadow-xl"
            style={{ backgroundColor: COMPANY_CONFIG.colors.primary }}
          >
            <Navigation className="w-4 h-4" />
            <span className="hidden sm:inline">Directions</span>
          </a>
        </div>
      )}

      {/* Current View Badge */}
      <div className="absolute bottom-4 left-4 z-10">
        <div className="bg-black/60 backdrop-blur-sm rounded-lg px-3 py-1.5 text-xs text-white font-medium capitalize">
          {mapType} View
        </div>
      </div>

      {/* Google Map */}
      <GoogleMap
        center={position}
        zoom={17}
        mapContainerStyle={{ width: "100%", height: "100%" }}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          zoomControlOptions: {
            position: window.google.maps.ControlPosition.RIGHT_CENTER,
          },
          scaleControl: true,
          mapTypeId: mapType,
          styles: getMapStyles(),
          gestureHandling: 'cooperative',
          minZoom: 10,
          maxZoom: 20,
        }}
      >
        <Marker
          position={position}
          icon={customIcon}
          onClick={() => setInfoOpen(true)}
          animation={window.google.maps.Animation.DROP}
        />

        {infoOpen && (
          <InfoWindow 
            position={position} 
            onCloseClick={() => setInfoOpen(false)}
            options={{
              pixelOffset: new window.google.maps.Size(0, -62)
            }}
          >
            <div className="p-4 min-w-[260px] max-w-[300px]">
              {/* Header */}
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: COMPANY_CONFIG.colors.primary }}
                >
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm leading-tight">
                    {COMPANY_CONFIG.name}
                  </h3>
                  <p className="text-xs text-slate-500">{COMPANY_CONFIG.tagline}</p>
                </div>
              </div>
              
              {/* Address */}
              <div className="flex items-start gap-3 mb-3">
                <MapPin className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-slate-600 leading-relaxed">
                  {COMPANY_CONFIG.address.line1}<br />
                  {COMPANY_CONFIG.address.line2}
                </p>
              </div>

              {/* Contact */}
              <div className="space-y-2 mb-4">
                <a 
                  href={`tel:${COMPANY_CONFIG.contact.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-sm text-slate-600 hover:text-indigo-600 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {COMPANY_CONFIG.contact.phone}
                </a>
                <a 
                  href={`mailto:${COMPANY_CONFIG.contact.email}`}
                  className="flex items-center gap-3 text-sm text-slate-600 hover:text-indigo-600 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {COMPANY_CONFIG.contact.email}
                </a>
              </div>

              {/* Directions Button */}
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${position.lat},${position.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-white text-sm font-semibold rounded-lg transition-all hover:opacity-90"
                style={{ backgroundColor: COMPANY_CONFIG.colors.primary }}
              >
                <Navigation className="w-4 h-4" />
                Get Directions
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
}
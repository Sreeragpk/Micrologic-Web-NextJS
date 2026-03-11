"use client";
// src/components/ComingSoon.js
import React from "react";
import { Clock, Sparkles } from "lucide-react";

const ComingSoon = ({ title = "This Section", message = "Content is being crafted just for you 🚀" }) => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-br from-slate-50 to-slate-100">
      
      {/* Badge with little sparkle */}
      <div className="flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-full shadow-md mb-6 animate-pulse">
        <Sparkles className="w-4 h-4" />
        Coming Soon
      </div>

      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-800 mb-4">
        {title}
      </h2>

      {/* Small accent bar */}
      <div className="h-1 w-28 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 rounded-full mb-6"></div>

      {/* Message */}
      <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-8">
        {message}
      </p>

      {/* Icon box */}
      <div className="relative">
        <div className="w-32 h-32 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-50 to-purple-50 border border-dashed border-indigo-300 animate-bounce-slow">
          <Clock className="w-12 h-12 text-indigo-500" />
        </div>
        {/* Glow */}
        <div className="absolute inset-0 rounded-full bg-indigo-400 blur-3xl opacity-20"></div>
      </div>
    </section>
  );
};

export default ComingSoon;
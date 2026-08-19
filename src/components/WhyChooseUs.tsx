"use client";

import React from "react";
import { whyChooseUsData } from "@/data/hospital-data";
import { HeartHandshake, UserCheck, Microscope, Award, Check } from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "HeartHandshake":
        return <HeartHandshake className="w-7 h-7 text-hospital-blue-700" />;
      case "UserCheck":
        return <UserCheck className="w-7 h-7 text-hospital-blue-700" />;
      case "Microscope":
        return <Microscope className="w-7 h-7 text-hospital-red-600" />;
      case "Award":
        return <Award className="w-7 h-7 text-hospital-blue-700" />;
      default:
        return <HeartHandshake className="w-7 h-7 text-hospital-blue-700" />;
    }
  };

  return (
    <section
      id="why-choose-us"
      className="py-20 md:py-28 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-hospital-blue-50 text-hospital-blue-800 text-xs font-bold uppercase tracking-wider">
            <Check className="w-3.5 h-3.5 text-hospital-blue-600" />
            <span>Dedicated Healthcare</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Choose EL-JOEDAM?
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            We are dedicated to maintaining trustworthy healthcare standards,
            dependable diagnostic evaluations, and dignified clinical care.
          </p>
        </div>

        {/* 4 Foundation Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUsData.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50/80 rounded-2xl p-7 border border-slate-200/80 hover:border-hospital-blue-300 hover:bg-white transition-all duration-300 shadow-xs hover:shadow-lg flex flex-col justify-start group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white group-hover:bg-hospital-blue-50 border border-slate-200/80 group-hover:border-hospital-blue-200 flex items-center justify-center flex-shrink-0 mb-6 shadow-xs transition-colors">
                {getIcon(item.iconName)}
              </div>

              <h3 className="text-lg font-bold text-slate-900 group-hover:text-hospital-blue-900 transition-colors mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

"use client";

import React from "react";
import { quickInfoItems } from "@/data/hospital-data";
import { Stethoscope, Activity, HeartPulse, MapPin } from "lucide-react";

export const QuickInfo: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Stethoscope":
        return <Stethoscope className="w-6 h-6 text-hospital-blue-700" />;
      case "Activity":
        return <Activity className="w-6 h-6 text-hospital-red-600" />;
      case "HeartPulse":
        return <HeartPulse className="w-6 h-6 text-hospital-blue-700" />;
      case "MapPin":
        return <MapPin className="w-6 h-6 text-hospital-red-600" />;
      default:
        return <Stethoscope className="w-6 h-6 text-hospital-blue-700" />;
    }
  };

  return (
    <section className="relative z-20 -mt-8 md:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {quickInfoItems.map((item, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl p-5 md:p-6 shadow-lg shadow-slate-900/5 hover:shadow-xl hover:shadow-hospital-blue-900/10 border border-slate-200/80 hover:border-hospital-blue-300 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-hospital-blue-50 group-hover:bg-hospital-blue-100 flex items-center justify-center flex-shrink-0 transition-colors">
                {getIcon(item.iconName)}
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-hospital-blue-800 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuickInfo;

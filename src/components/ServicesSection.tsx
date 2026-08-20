"use client";

import React, { useState } from "react";
import Link from "next/link";
import { servicesData, ServiceItem } from "@/data/hospital-data";
import { siteConfig } from "@/config/site";
import {
  Stethoscope,
  FlaskConical,
  Activity,
  Baby,
  HeartPulse,
  ShieldAlert,
  Scissors,
  Pill,
  Brain,
  ArrowRight,
  Phone,
  Sparkles,
  Info,
} from "lucide-react";

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    const iconClass = "w-6 h-6";
    switch (iconName) {
      case "Stethoscope":
        return <Stethoscope className={`${iconClass} text-hospital-blue-700`} />;
      case "FlaskConical":
        return <FlaskConical className={`${iconClass} text-hospital-blue-700`} />;
      case "Activity":
        return <Activity className={`${iconClass} text-hospital-red-600`} />;
      case "Baby":
        return <Baby className={`${iconClass} text-hospital-blue-700`} />;
      case "HeartPulse":
        return <HeartPulse className={`${iconClass} text-hospital-blue-700`} />;
      case "ShieldAlert":
        return <ShieldAlert className={`${iconClass} text-hospital-red-600`} />;
      case "Scissors":
        return <Scissors className={`${iconClass} text-hospital-blue-700`} />;
      case "Pill":
        return <Pill className={`${iconClass} text-hospital-blue-700`} />;
      case "Brain":
        return <Brain className={`${iconClass} text-hospital-blue-700`} />;
      default:
        return <Stethoscope className={`${iconClass} text-hospital-blue-700`} />;
    }
  };

  return (
    <section
      id="services"
      className="py-20 md:py-28 bg-slate-50 relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-hospital-blue-100 text-hospital-blue-900 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-hospital-blue-700" />
            <span>Our Medical Services</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Clinical & Diagnostic Healthcare
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            EL-JOEDAM Specialist Hospital offers structured clinical services and
            diagnostic investigations tailored to meet patient healthcare needs.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => {
            const isEmergency = service.id === "emergency-care";
            return (
              <div
                key={service.id}
                className={`group bg-white rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 shadow-sm hover:shadow-xl ${
                  isEmergency
                    ? "border-hospital-red-200/80 hover:border-hospital-red-500 hover:shadow-red-950/5"
                    : "border-slate-200/80 hover:border-hospital-blue-300 hover:shadow-hospital-blue-950/5"
                }`}
              >
                <div>
                  {/* Icon & Badge Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                        isEmergency
                          ? "bg-red-50 group-hover:bg-red-100"
                          : "bg-hospital-blue-50 group-hover:bg-hospital-blue-100"
                      }`}
                    >
                      {getServiceIcon(service.iconName)}
                    </div>

                    {isEmergency && (
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-red-100 text-red-700 px-2 py-0.5 rounded-full">
                        Urgent Care
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-hospital-blue-800 transition-colors mb-2">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                {/* Card Footer Link */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-semibold text-hospital-blue-700 hover:text-hospital-blue-900 flex items-center gap-1 group-hover:underline focus:outline-none"
                  >
                    <span>Learn details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <a
                    href={siteConfig.contact.phoneTel}
                    className="text-slate-400 hover:text-hospital-blue-700 transition-colors"
                    title="Inquire about this service"
                    aria-label={`Inquire about ${service.title}`}
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Editability & Verification Notice */}
        {/* <div className="mt-12 p-4 rounded-xl bg-blue-50/70 border border-blue-200/60 max-w-2xl mx-auto flex items-start gap-3 text-xs text-slate-600">
          <Info className="w-4 h-4 text-hospital-blue-700 flex-shrink-0 mt-0.5" />
          <p>
            <strong className="text-slate-800">Hospital Staff Note:</strong> All
            services listed above are verified clinical services configured in the
            data file (<code className="text-hospital-blue-800">src/data/hospital-data.ts</code>)
            for effortless updates as the hospital introduces new departments.
          </p>
        </div> */}
      </div>

      {/* Modal / Dialog for Detailed Service Inspection */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-150">
            <div className="flex items-start justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-hospital-blue-50 flex items-center justify-center">
                  {getServiceIcon(selectedService.iconName)}
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {selectedService.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
                aria-label="Close dialog"
              >
                ✕
              </button>
            </div>

            <div className="py-4 flex flex-col gap-5 max-h-[60vh] overflow-y-auto pr-1">
              <div className="flex flex-col gap-3">
                <h4 className="text-sm font-bold uppercase tracking-wide text-hospital-blue-800">
                  Service Overview
                </h4>
                <p className="text-slate-700 text-sm leading-6">
                  {selectedService.details || selectedService.description}
                </p>
              </div>


              <div className="p-3 bg-slate-50 rounded-lg text-xs leading-5 text-slate-600 border border-slate-100">
                <span className="font-semibold text-slate-800 block mb-1">
                  How to Access:
                </span>
                Walk in to our hospital at Shell Location Road, Mgbuoba, Port
                Harcourt or call ahead for consultation inquiries.
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2.5">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              >
                Close
              </button>
              <a
                href={siteConfig.contact.phoneTel}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-hospital-blue-800 hover:bg-hospital-blue-900 rounded-lg shadow-sm"
              >
                <Phone className="w-4 h-4 text-hospital-red-500" />
                <span>Call to Inquire</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;

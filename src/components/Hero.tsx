"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import {
  Phone,
  Navigation,
  ShieldCheck,
  Activity,
  HeartPulse,
  Award,
  CheckCircle2,
  Clock,
} from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-50 via-sky-50/40 to-white"
    >
      {/* Background Decorative Healthcare Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Radial Gradients */}
        <div className="absolute -top-24 right-0 w-[500px] h-[500px] bg-sky-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-24 w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-3xl" />

        {/* Subtle Medical Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(#0369a1 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Content Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Official Hospital Name Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-hospital-blue-50 border border-hospital-blue-200/80 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-hospital-red-600 animate-ping" />
              <span className="w-2 h-2 rounded-full bg-hospital-red-600 -ml-4" />
              <span className="text-xs md:text-sm font-bold tracking-wide text-hospital-blue-900 uppercase">
                {siteConfig.name}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Quality Healthcare. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-hospital-blue-800 via-hospital-blue-600 to-sky-600">
                Compassionate Service.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
              Providing professional clinical and diagnostic healthcare services
              with a commitment to quality, compassion and excellence.
            </p>

            {/* Hospital Slogan Banner */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-hospital-blue-900 to-hospital-blue-950 text-white shadow-lg shadow-hospital-blue-950/10 border-l-4 border-hospital-red-600">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-hospital-blue-300 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-hospital-blue-300 block mb-0.5">
                    Our Hospital Slogan
                  </span>
                  <p className="font-semibold text-sm sm:text-base italic text-slate-100">
                    &ldquo;{siteConfig.slogan}&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Key Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={siteConfig.contact.phoneTel}
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl font-bold text-white bg-hospital-blue-800 hover:bg-hospital-blue-900 active:scale-[0.98] transition-all shadow-md shadow-hospital-blue-900/20 text-base group"
              >
                <div className="w-8 h-8 rounded-lg bg-hospital-red-600 flex items-center justify-center text-white shadow-xs group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <span>Call Us: {siteConfig.contact.phoneDisplay}</span>
              </a>

              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-slate-800 bg-white hover:bg-slate-50 active:scale-[0.98] border-2 border-slate-200 hover:border-hospital-blue-400 transition-all shadow-xs text-base"
              >
                <Navigation className="w-5 h-5 text-hospital-blue-700" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Trust Highlights List */}
            <div className="pt-3 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-slate-200/80 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-hospital-blue-700 flex-shrink-0" />
                <span>Clinical Consultations</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-hospital-blue-700 flex-shrink-0" />
                <span>Diagnostic Services</span>
              </div>
              <div className="flex items-center gap-1.5 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-hospital-blue-700 flex-shrink-0" />
                <span>Mgbuoba, Port Harcourt</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Card / Presentation Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Frame */}
              <div className="relative rounded-2xl bg-gradient-to-br from-hospital-blue-900 via-hospital-blue-800 to-hospital-blue-950 p-6 sm:p-8 text-white shadow-2xl shadow-hospital-blue-950/25 border border-hospital-blue-700/40">
                {/* Decorative glow inside */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-400/10 rounded-full blur-2xl pointer-events-none" />

                {/* Badge Header */}
                <div className="flex items-center justify-between pb-6 border-b border-hospital-blue-700/60">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                      <HeartPulse className="w-6 h-6 text-hospital-red-500" />
                    </div>
                    <div>
                      <h2 className="font-bold text-lg leading-tight">
                        {siteConfig.shortName}
                      </h2>
                      <p className="text-xs text-hospital-blue-200">
                        Specialist Healthcare
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-hospital-red-600/90 text-white font-bold text-xs uppercase tracking-wider shadow-xs">
                    Port Harcourt
                  </span>
                </div>

                {/* Feature Highlights Grid */}
                <div className="py-6 space-y-4">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-hospital-blue-700/60 flex items-center justify-center text-hospital-blue-200 flex-shrink-0 mt-0.5">
                      <Activity className="w-5 h-5 text-hospital-blue-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-white">
                        Clinical & Diagnostic Focus
                      </h4>
                      <p className="text-xs text-slate-300 mt-0.5">
                        Modern laboratory and diagnostic investigations for prompt, accurate assessments.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-hospital-blue-700/60 flex items-center justify-center text-hospital-blue-200 flex-shrink-0 mt-0.5">
                      <Award className="w-5 h-5 text-hospital-blue-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-white">
                        Standard Healthcare Practices
                      </h4>
                      <p className="text-xs text-slate-300 mt-0.5">
                        Delivering patient-centered care anchored on safety, ethics, and professional dignity.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-hospital-blue-700/60 flex items-center justify-center text-hospital-blue-200 flex-shrink-0 mt-0.5">
                      <Clock className="w-5 h-5 text-hospital-blue-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-white">
                        Dedicated Attention
                      </h4>
                      <p className="text-xs text-slate-300 mt-0.5">
                        Accessible outpatient consultation and prompt medical care in Mgbuoba.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Location Quick Glance */}
                <div className="pt-4 border-t border-hospital-blue-700/60 flex items-center justify-between text-xs text-hospital-blue-200">
                  <span className="truncate pr-2">
                    Shell Location Rd, Road Toy Major No. 54
                  </span>
                  <a
                    href={siteConfig.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-hospital-blue-200 font-semibold underline flex-shrink-0"
                  >
                    View Map
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

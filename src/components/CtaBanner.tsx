"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { Phone, Mail, HeartPulse } from "lucide-react";

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-hospital-blue-900 via-hospital-blue-800 to-hospital-blue-950 text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-hospital-blue-200 text-xs font-semibold uppercase tracking-wider backdrop-blur-xs border border-white/15">
            <HeartPulse className="w-3.5 h-3.5 text-hospital-red-500" />
            <span>We Are Here For You</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Your Health Matters
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Speak with our team or visit EL-JOEDAM Specialist Hospital for
            professional healthcare services.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteConfig.contact.phoneTel}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-slate-900 bg-white hover:bg-slate-100 active:scale-[0.98] transition-all shadow-lg hover:shadow-xl text-base group"
            >
              <div className="w-7 h-7 rounded-lg bg-hospital-red-600 text-white flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </div>
              <span>Call {siteConfig.contact.phoneDisplay}</span>
            </a>

            <a
              href={siteConfig.contact.emailMailto}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-white bg-white/10 hover:bg-white/20 active:scale-[0.98] border border-white/30 transition-all text-base backdrop-blur-xs"
            >
              <Mail className="w-5 h-5 text-hospital-blue-300" />
              <span>Send an Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;

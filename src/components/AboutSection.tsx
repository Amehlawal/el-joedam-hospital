"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import {
  CheckCircle,
  Building2,
  Stethoscope,
  Microscope,
  HeartHandshake,
  ShieldAlert,
} from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual / Hospital Identity Presentation Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Outer decorative ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-hospital-blue-100 to-sky-100 rounded-3xl -rotate-1 transform -z-10 opacity-70" />

              <div className="bg-gradient-to-br from-hospital-blue-900 to-hospital-blue-950 rounded-2xl p-8 text-white shadow-xl shadow-hospital-blue-950/15 border border-hospital-blue-800">
                {/* Emblem Box */}
                <div className="flex items-center gap-4 pb-6 border-b border-hospital-blue-800">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center p-3 border border-white/20">
                    <svg
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full"
                    >
                      <path
                        d="M24 4L9 9.5V22C9 32.5 15.5 41.5 24 44C32.5 41.5 39 32.5 39 22V9.5L24 4Z"
                        fill="#0F2C59"
                        stroke="#FFFFFF"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21 15H27V21H33V27H27V33H21V27H15V21H21V15Z"
                        fill="#DC2626"
                      />
                      <path
                        d="M17 24H21L23 20L25 28L27 24H31"
                        stroke="#FFFFFF"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-extrabold text-xl tracking-tight text-white">
                      {siteConfig.shortName}
                    </h3>
                    <p className="text-xs text-hospital-blue-300 font-medium">
                      Specialist Hospital & Diagnostics
                    </p>
                  </div>
                </div>

                {/* Slogan Feature Card */}
                <div className="my-6 p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-hospital-blue-300">
                    Our Guiding Principle
                  </span>
                  <p className="text-sm font-semibold italic text-slate-100 mt-1">
                    &ldquo;{siteConfig.slogan}&rdquo;
                  </p>
                </div>

                {/* Values Checklist */}
                <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-200">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-hospital-blue-400 flex-shrink-0" />
                    <span>Patient safety and clinical dignity</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-hospital-blue-400 flex-shrink-0" />
                    <span>Reliable laboratory & diagnostic assessment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-hospital-blue-400 flex-shrink-0" />
                    <span>Accessible location in Mgbuoba, Port Harcourt</span>
                  </div>
                </div>

                {/* Direct Contact Pin */}
                <div className="mt-6 pt-4 border-t border-hospital-blue-800 text-xs text-hospital-blue-300">
                  <span>Location: Shell Location Rd, Mgbuoba, Port Harcourt</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-hospital-blue-50 text-hospital-blue-800 text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" />
              <span>About Us</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              About EL-JOEDAM Specialist Hospital
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              <strong className="text-slate-900 font-semibold">
                EL-JOEDAM SPECIALIST HOSPITAL (EJSH)
              </strong>{" "}
              is a dedicated healthcare facility in Mgbuoba, Port Harcourt,
              committed to providing accessible, professional clinical and diagnostic
              medical services for individuals, families, and our wider community.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Rooted in our commitment to clinical best practices, we combine
              thorough medical consultations with modern diagnostic testing to ensure
              accurate assessment and personalized care pathways. Every patient who
              walks through our doors is treated with empathy, respect, and meticulous
              attention to detail.
            </p>

            {/* 3 Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-hospital-blue-200 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-hospital-blue-100 flex items-center justify-center text-hospital-blue-800 mb-3">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-slate-900">
                  Clinical Care
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  General consultations, evaluations, and patient follow-ups.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-hospital-blue-200 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-hospital-red-50 flex items-center justify-center text-hospital-red-600 mb-3">
                  <Microscope className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-slate-900">
                  Diagnostic Rigor
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Accurate laboratory tests to guide clinical decisions.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-hospital-blue-200 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-hospital-blue-100 flex items-center justify-center text-hospital-blue-800 mb-3">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-slate-900">
                  Compassionate Focus
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Respectful, attentive care centered around patient comfort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

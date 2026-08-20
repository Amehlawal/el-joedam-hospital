"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { ContactForm } from "@/components/ContactForm";
import { MapSection } from "@/components/MapSection";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  Sparkles,
  PhoneCall,
} from "lucide-react";

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-hospital-blue-100 text-hospital-blue-900 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-hospital-blue-700" />
            <span>Get in Touch</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contact & Location Information
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            Reach out to our clinical staff or visit our hospital facility in
            Mgbuoba, Port Harcourt for inquiries and medical consultations.
          </p>
        </div>

        {/* 3 Quick Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Visit Us */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-hospital-blue-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-hospital-blue-50 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-hospital-red-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Visit Us</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {siteConfig.address.full}
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100">
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-hospital-blue-800 hover:text-hospital-blue-950 inline-flex items-center gap-1.5"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>

          {/* Call Us */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-hospital-blue-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-hospital-blue-50 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-hospital-blue-700" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Call Us</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-1">
                Direct phone inquiries and patient assistance:
              </p>
              <a
                href={siteConfig.contact.phoneTel}
                className="text-lg font-extrabold text-hospital-blue-900 hover:text-hospital-blue-700 block transition-colors"
              >
                {siteConfig.contact.phoneDisplay}
              </a>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100">
              <a
                href={siteConfig.contact.phoneTel}
                className="text-xs font-bold text-hospital-blue-800 hover:text-hospital-blue-950 inline-flex items-center gap-1.5"
              >
                <PhoneCall className="w-3.5 h-3.5 text-hospital-red-600" />
                <span>Click to Call Directly</span>
              </a>
            </div>
          </div>

          {/* Email Us */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-hospital-blue-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-hospital-blue-50 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-hospital-blue-700" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Email Us</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-1">
                Send official correspondence & inquiries:
              </p>
              <a
                href={siteConfig.contact.emailMailto}
                className="text-sm sm:text-base font-bold text-hospital-blue-900 hover:text-hospital-blue-700 block break-all transition-colors"
              >
                {siteConfig.contact.email}
              </a>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100">
              <a
                href={siteConfig.contact.emailMailto}
                className="text-xs font-bold text-hospital-blue-800 hover:text-hospital-blue-950 inline-flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-hospital-blue-600" />
                <span>Send an Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form & Interactive Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6">
            <ContactForm />
          </div>
          <div className="lg:col-span-6">
            <MapSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

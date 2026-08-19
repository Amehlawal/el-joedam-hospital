"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Phone, Navigation, MessageSquare } from "lucide-react";

export const MobileQuickBar: React.FC = () => {
  return (
    <aside
      aria-label="Quick contact bar"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-lg border-t border-slate-200 shadow-2xl p-2.5 px-3"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Us */}
        <a
          href={siteConfig.contact.phoneTel}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-hospital-blue-800 text-white font-bold text-[11px] shadow-sm active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4 text-hospital-red-400 mb-0.5" />
          <span>Call Us</span>
        </a>

        {/* Get Directions */}
        <a
          href={siteConfig.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200 font-bold text-[11px] border border-slate-200 active:scale-95 transition-all"
        >
          <Navigation className="w-4 h-4 text-hospital-blue-700 mb-0.5" />
          <span>Directions</span>
        </a>

        {/* Contact Form Link */}
        <Link
          href="#contact"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-hospital-blue-50 text-hospital-blue-900 hover:bg-hospital-blue-100 font-bold text-[11px] border border-hospital-blue-200 active:scale-95 transition-all"
        >
          <MessageSquare className="w-4 h-4 text-hospital-blue-700 mb-0.5" />
          <span>Inquire</span>
        </Link>
      </div>
    </aside>
  );
};

export default MobileQuickBar;

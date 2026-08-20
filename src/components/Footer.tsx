"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { navItems } from "@/data/hospital-data";
import { Logo } from "@/components/Logo";
import { MapPin, Phone, Mail, ArrowUp, ShieldCheck } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-hospital-blue-950 text-slate-300 pt-16 pb-24 md:pb-12 border-t border-hospital-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-hospital-blue-900/80">
          {/* Brand & Slogan Column */}
          <div className="lg:col-span-5 space-y-4">
            <Logo isLight={true} />

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Providing professional clinical and diagnostic healthcare services
              with a commitment to quality, compassion and excellence.
            </p>

            <div className="p-3.5 rounded-xl bg-hospital-blue-900/70 border border-hospital-blue-800 text-xs space-y-1">
              <div className="flex items-center gap-1.5 text-hospital-blue-300 font-bold uppercase tracking-wider text-[10px]">
                <ShieldCheck className="w-3.5 h-3.5 text-hospital-red-500" />
                <span>Hospital Motto</span>
              </div>
              <p className="italic text-slate-200">
                &ldquo;{siteConfig.slogan}&rdquo;
              </p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider border-l-2 border-hospital-red-600 pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-hospital-blue-400">›</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider border-l-2 border-hospital-red-600 pl-2.5">
              Hospital Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-hospital-red-500 flex-shrink-0 mt-1" />
                <span className="leading-snug">{siteConfig.address.full}</span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-hospital-blue-400 flex-shrink-0" />
                <a
                  href={siteConfig.contact.phoneTel}
                  className="hover:text-white font-semibold transition-colors"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-hospital-blue-400 flex-shrink-0" />
                <a
                  href={siteConfig.contact.emailMailto}
                  className="hover:text-white break-all transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center sm:text-left">
            &copy; {siteConfig.year} {siteConfig.name}. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-hospital-blue-900 hover:bg-hospital-blue-800 text-slate-200 transition-colors"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

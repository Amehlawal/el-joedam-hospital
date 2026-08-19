"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { navItems } from "@/data/hospital-data";
import { Logo } from "@/components/Logo";
import { Phone, MapPin, Menu, X, Clock, ChevronRight } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section for nav highlight
      const sections = ["home", "about", "services", "why-choose-us", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Utility Bar */}
      <div className="bg-hospital-blue-950 text-slate-200 text-xs py-1.5 px-4 hidden md:block border-b border-hospital-blue-800/40">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-hospital-blue-400" />
              <span>Shell Location Rd, Mgbuoba, Port Harcourt</span>
            </div>
            <div className="flex items-center space-x-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-hospital-blue-400" />
              <span>Clinical & Diagnostic Services</span>
            </div>
          </div>
          <div className="flex items-center space-x-5">
            <span className="italic text-hospital-blue-300 text-[11px] font-medium">
              &ldquo;{siteConfig.slogan}&rdquo;
            </span>
            <a
              href={siteConfig.contact.phoneTel}
              className="flex items-center space-x-1.5 text-white font-semibold hover:text-hospital-blue-300 transition-colors bg-hospital-blue-850 px-2.5 py-0.5 rounded-full border border-hospital-blue-700/50"
            >
              <Phone className="w-3 h-3 text-hospital-red-500 animate-pulse" />
              <span>{siteConfig.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`bg-white/95 backdrop-blur-md transition-all duration-200 ${
          scrolled
            ? "shadow-md shadow-slate-900/5 py-2.5 border-b border-slate-100"
            : "py-3.5 border-b border-slate-100/80"
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-150 ${
                    isActive
                      ? "text-hospital-blue-800 bg-hospital-blue-50 font-bold"
                      : "text-slate-700 hover:text-hospital-blue-700 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href={siteConfig.contact.phoneTel}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-semibold text-hospital-blue-900 bg-hospital-blue-50 hover:bg-hospital-blue-100 transition-colors border border-hospital-blue-200/70"
            >
              <Phone className="w-4 h-4 text-hospital-red-600" />
              <span>{siteConfig.contact.phoneDisplay}</span>
            </a>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-hospital-blue-700 hover:bg-hospital-blue-800 transition-all shadow-sm hover:shadow active:scale-[0.98]"
            >
              <span>Contact Us</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={siteConfig.contact.phoneTel}
              className="p-2 text-hospital-blue-700 bg-hospital-blue-50 hover:bg-hospital-blue-100 rounded-lg transition-colors"
              aria-label="Call Hospital Directly"
            >
              <Phone className="w-5 h-5 text-hospital-red-600" />
            </a>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-700 hover:text-hospital-blue-800 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl transition-all animate-in slide-in-from-top-2 duration-200">
            <div className="px-4 pt-2 pb-6 space-y-1.5">
              {navItems.map((item) => {
                const sectionId = item.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? "bg-hospital-blue-50 text-hospital-blue-900 font-bold"
                        : "text-slate-700 hover:bg-slate-50 hover:text-hospital-blue-800"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-slate-100 space-y-2.5">
                <a
                  href={siteConfig.contact.phoneTel}
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg text-sm font-semibold text-white bg-hospital-blue-800 hover:bg-hospital-blue-900 shadow-sm"
                >
                  <Phone className="w-4 h-4 text-hospital-red-500" />
                  <span>Call Us: {siteConfig.contact.phoneDisplay}</span>
                </a>

                <Link
                  href="#contact"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg text-sm font-semibold text-hospital-blue-900 bg-hospital-blue-50 hover:bg-hospital-blue-100 border border-hospital-blue-200"
                >
                  <span>Contact Information & Location</span>
                </Link>
              </div>

              <div className="pt-2 text-center text-xs text-slate-500">
                <p className="font-medium text-slate-700">{siteConfig.name}</p>
                <p className="mt-0.5 text-slate-500">{siteConfig.address.full}</p>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

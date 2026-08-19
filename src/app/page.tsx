import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuickInfo from "@/components/QuickInfo";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CtaBanner from "@/components/CtaBanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MobileQuickBar from "@/components/MobileQuickBar";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main One-Page Content */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Quick Information Highlights */}
        <QuickInfo />

        {/* 3. About Us Section */}
        <AboutSection />

        {/* 4. Verified Clinical & Diagnostic Services */}
        <ServicesSection />

        {/* 5. Why Choose EL-JOEDAM */}
        <WhyChooseUs />

        {/* 6. Action Callout Banner */}
        <CtaBanner />

        {/* 7. Contact & Location Information */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Floating Quick Contact Action Bar */}
      <MobileQuickBar />
    </div>
  );
}

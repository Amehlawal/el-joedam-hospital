"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { MapPin, Navigation, ExternalLink } from "lucide-react";

export const MapSection: React.FC = () => {
  // Encoded query for accurate Port Harcourt Mgbuoba navigation
  const encodedQuery = encodeURIComponent(
    `${siteConfig.name}, Shell Location Road, By Foursquare Gospel Church, Road Toy Major No. 54, Mgbuoba, Port Harcourt, Nigeria`
  );
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodedQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-lg shadow-slate-900/5 overflow-hidden flex flex-col h-full">
      {/* Map Header */}
      <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50/50">
        <div>
          <div className="flex items-center gap-2 text-hospital-blue-800 font-bold text-xs uppercase tracking-wider mb-1">
            <MapPin className="w-4 h-4 text-hospital-red-600" />
            <span>Hospital Location</span>
          </div>
          <h3 className="text-lg font-bold text-slate-900">
            Find Us in Mgbuoba, Port Harcourt
          </h3>
        </div>

        <a
          href={siteConfig.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-hospital-blue-800 hover:bg-hospital-blue-900 transition-all shadow-sm flex-shrink-0"
        >
          <Navigation className="w-4 h-4" />
          <span>Get Directions</span>
          <ExternalLink className="w-3.5 h-3.5 opacity-80" />
        </a>
      </div>

      {/* Embedded Map Frame */}
      <div className="relative w-full h-72 sm:h-96 md:h-[400px] bg-slate-100">
        <iframe
          title="EL-JOEDAM Specialist Hospital Location Map"
          src={mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />

        {/* Floating Location Badge on Map */}
        <div className="absolute bottom-4 left-4 right-4 sm:right-auto max-w-sm bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-slate-200/90 shadow-lg text-xs space-y-1">
          <div className="font-bold text-slate-900 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-hospital-red-600"></span>
            <span>{siteConfig.name}</span>
          </div>
          <p className="text-slate-600 text-[11px] leading-snug">
            {siteConfig.address.full}
          </p>
        </div>
      </div>

      {/* Map Footer Landmark Assistance */}
      <div className="p-4 bg-slate-50 border-t border-slate-100 text-xs text-slate-600">
        <p>
          <strong className="text-slate-800">Landmark Guide:</strong> Located on
          Shell Location Road, adjacent to Foursquare Gospel Church at Road Toy Major No. 54,
          Mgbuoba, Port Harcourt.
        </p>
      </div>
    </div>
  );
};

export default MapSection;

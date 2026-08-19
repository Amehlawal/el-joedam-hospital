import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

interface LogoProps {
  variant?: "full" | "compact" | "icon";
  className?: string;
  isLight?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = "full",
  className = "",
  isLight = false,
}) => {
  return (
    <Link
      href="#home"
      className={`inline-flex items-center gap-3 group transition-opacity hover:opacity-95 ${className}`}
      aria-label="EL-JOEDAM Specialist Hospital Home"
    >
      {/* Visual Emblem / Shield with Medical Cross & Caduceus / Diagnostic wave */}
      <div className="relative flex-shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-hospital-blue-800 to-hospital-blue-950 p-[2px] shadow-md shadow-hospital-blue-950/20 group-hover:scale-105 transition-transform duration-300">
        <div className="w-full h-full bg-hospital-blue-900 rounded-[10px] flex items-center justify-center relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-radial from-blue-400/20 to-transparent"></div>

          {/* Medical Cross Emblem */}
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 relative z-10"
          >
            {/* White rounded shield contour */}
            <path
              d="M24 4L9 9.5V22C9 32.5 15.5 41.5 24 44C32.5 41.5 39 32.5 39 22V9.5L24 4Z"
              fill="#0F2C59"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            {/* Red Medical Cross */}
            <path
              d="M21 15H27V21H33V27H27V33H21V27H15V21H21V15Z"
              fill="#DC2626"
            />
            {/* Inner White Diagnostic Pulse Line */}
            <path
              d="M17 24H21L23 20L25 28L27 24H31"
              stroke="#FFFFFF"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Typography */}
      {variant !== "icon" && (
        <div className="flex flex-col leading-tight">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-black tracking-tight text-lg md:text-xl font-sans ${
                isLight ? "text-white" : "text-hospital-blue-950"
              }`}
            >
              EL-JOEDAM
            </span>
            <span className="bg-hospital-red-600 text-white font-bold text-[10px] px-1.5 py-0.5 rounded tracking-wider uppercase shadow-xs">
              {siteConfig.shortName}
            </span>
          </div>
          <span
            className={`text-[11px] md:text-xs font-semibold tracking-wider uppercase ${
              isLight ? "text-blue-200" : "text-hospital-blue-700"
            }`}
          >
            Specialist Hospital
          </span>
        </div>
      )}
    </Link>
  );
};

export default Logo;

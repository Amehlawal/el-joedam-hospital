import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  title: "EL-JOEDAM Specialist Hospital | Mgbuoba, Port Harcourt",
  description:
    "EL-JOEDAM Specialist Hospital provides clinical and diagnostic healthcare services in Mgbuoba, Port Harcourt. Contact us for professional and compassionate healthcare services.",
  keywords: [
    "EL-JOEDAM Specialist Hospital",
    "EJSH",
    "Hospital in Port Harcourt",
    "Hospital in Mgbuoba",
    "Diagnostic services Port Harcourt",
    "Clinical care Rivers State",
    "Laboratory services Mgbuoba",
    "Maternal care Port Harcourt",
    "Specialist Hospital Nigeria",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  metadataBase: new URL("https://el-joedam-hospital.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "EL-JOEDAM Specialist Hospital | Mgbuoba, Port Harcourt",
    description:
      "Providing professional clinical and diagnostic healthcare services with a commitment to quality, compassion and excellence.",
    url: "https://el-joedam-hospital.com",
    siteName: siteConfig.name,
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/hospital-logo.svg",
        width: 512,
        height: 512,
        alt: "EL-JOEDAM Specialist Hospital Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "EL-JOEDAM Specialist Hospital | Port Harcourt",
    description:
      "Professional clinical and diagnostic healthcare services in Mgbuoba, Port Harcourt.",
    images: ["/hospital-logo.svg"],
  },
  icons: {
    icon: "/hospital-logo.svg",
    apple: "/hospital-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    slogan: siteConfig.slogan,
    description: siteConfig.description,
    url: "https://el-joedam-hospital.com",
    logo: "https://el-joedam-hospital.com/hospital-logo.svg",
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.area,
      addressRegion: siteConfig.address.state,
      addressCountry: "NG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    medicalSpecialty: [
      "https://schema.org/PrimaryCare",
      "https://schema.org/Obstetric",
      "https://schema.org/Pediatric",
      "https://schema.org/Emergency",
    ],
    currenciesAccepted: "NGN",
    paymentAccepted: "Cash, Bank Transfer, Card",
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased selection:bg-hospital-blue-100 selection:text-hospital-blue-900 bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}

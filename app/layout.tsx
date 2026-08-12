import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://www.nursemitchfearlessbeautylounge.com"
  ),

  alternates: {
    canonical: "https://www.nursemitchfearlessbeautylounge.com/",
  },

  title: {
    default: "Nurse Mitch Fearless Beauty Lounge",
    template: "%s | Nurse Mitch Fearless Beauty Lounge",
  },

  description:
    "Fearless Beauty Lounge offers Botox, Fillers, Hiko Nose Lift, Skin Rejuvenation, Body Contouring, Waxing, Nail Services, IV Therapy, and other premium aesthetic treatments in Cebu City.",

  keywords: [
    "Fearless Beauty Lounge",
    "Nurse Mitch",
    "Medical Spa Cebu",
    "Aesthetic Clinic Cebu",
    "Botox Cebu",
    "Lip Fillers Cebu",
    "HydraFacial Cebu",
    "Skin Rejuvenation Cebu",
    "Body Contouring Cebu",
    "Waxing Cebu",
    "Nail Services Cebu",
    "IV Therapy Cebu",
  ],

  authors: [
    {
      name: "Nurse Mitch Fearless Beauty Lounge",
    },
  ],

  verification: {
    google: "e-GsZauRU6LSVQBRjmxqO-qXNcwi3NYDIQ0vl127SCo",
  },

  openGraph: {
    title: "Nurse Mitch Fearless Beauty Lounge",
    description:
      "Premium Medical Spa and Aesthetic Clinic in Cebu City.",
    url: "https://www.nursemitchfearlessbeautylounge.com/",
    siteName: "Nurse Mitch Fearless Beauty Lounge",
    locale: "en_PH",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Nurse Mitch Fearless Beauty Lounge",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Nurse Mitch Fearless Beauty Lounge",
    description:
      "Professional Medical Spa and Aesthetic Clinic in Cebu City.",
    images: ["/images/hero.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="h-full">
        <Script
          id="local-business-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",

              name: "Nurse Mitch Fearless Beauty Lounge",

              url: "https://www.nursemitchfearlessbeautylounge.com/",

              image:
                "https://www.nursemitchfearlessbeautylounge.com/logo.png",

              telephone: "+63 976 295 4314",

              email: "mitchampz095@gmail.com",

              priceRange: "₱₱",

              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "34 T. Padilla Street corner M.J. Cuenco",
                addressLocality: "Cebu City",
                addressRegion: "Cebu",
                postalCode: "6000",
                addressCountry: "PH",
              },

              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "09:30",
                  closes: "21:30",
                },
              ],

              sameAs: [
                "https://www.facebook.com/profile.php?id=100088070547410",
              ],
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}
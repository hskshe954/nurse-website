import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Fearless Beauty Lounge | Aesthetic & Wellness Clinic",
  description:
    "Fearless Beauty Lounge offers Botox, Fillers, Hiko Nose Lift, Skin Rejuvenation, Body Contouring, Waxing, Nail Services, IV Therapy, and other premium aesthetic treatments in Cebu City.",

  keywords: [
    "Fearless Beauty Lounge",
    "Aesthetic Clinic Cebu",
    "Botox Cebu",
    "Lip Fillers Cebu",
    "Hiko Nose Lift",
    "Skin Rejuvenation",
    "Body Contouring",
    "Waxing",
    "Nail Services",
    "IV Therapy",
  ],

  authors: [
    {
      name: "Fearless Beauty Lounge",
    },
  ],

  verification: {
  google: "e-GsZauRU6LSVQBRjmxqO-qXNcwi3NYDIQ0vl127SCo",
},

  openGraph: {
    title: "Fearless Beauty Lounge",
    description:
      "Premium Aesthetic & Wellness Clinic in Cebu City.",
    url: "https://fearlessbeautylounge.vercel.app",
    siteName: "Fearless Beauty Lounge",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_PH",
    type: "website",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

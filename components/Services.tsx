"use client";

import { Syringe, Sparkles, Droplets } from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: Syringe,
    badge: "FDA Approved",
    title: "Botox / Dysport",
    description:
      "Relax dynamic wrinkles including forehead lines, crow's feet, and frown lines with safe neurotoxin injections.",
  },
  {
    icon: Syringe,
    badge: "Popular",
    title: "Lip Fillers",
    description:
      "Natural-looking volume, definition, and symmetry using premium hyaluronic acid fillers.",
  },
  {
    icon: Syringe,
    badge: "Contouring",
    title: "Cheek & Midface Fillers",
    description:
      "Restore youthful facial volume and enhance cheekbone definition without surgery.",
  },
  {
    icon: Syringe,
    badge: "Specialist",
    title: "Under-Eye Fillers",
    description:
      "Reduce hollowness and tired-looking eyes with precise tear trough filler treatment.",
  },
  {
    icon: Syringe,
    badge: "Premium",
    title: "Jawline & Chin Sculpting",
    description:
      "Create a sharper, more defined facial profile with non-surgical contouring.",
  },
  {
    icon: Sparkles,
    badge: "Signature",
    title: "Skin Brightening Program",
    description:
      "Customized treatments to improve uneven skin tone, pigmentation, and dullness.",
  },
  {
    icon: Sparkles,
    badge: "Advanced",
    title: "Chemical Peels",
    description:
      "Improve acne scars, texture, melasma, and fine lines with customized peels.",
  },
  {
    icon: Sparkles,
    badge: "No Downtime",
    title: "HydraFacial",
    description:
      "Deep cleansing, exfoliation, hydration, and glowing skin in one relaxing treatment.",
  },
  {
    icon: Sparkles,
    badge: "Laser",
    title: "Skin Rejuvenation",
    description:
      "Stimulate collagen production while improving pores and pigmentation.",
  },
  {
    icon: Droplets,
    badge: "Most Popular",
    title: "Glutathione IV Drip",
    description:
      "Powerful antioxidant therapy that supports brighter skin and overall wellness.",
  },
  {
    icon: Droplets,
    badge: "Wellness",
    title: "Vitamin C IV Therapy",
    description:
      "Boost immunity, energy, and skin radiance with high-dose Vitamin C infusion.",
  },
  {
    icon: Droplets,
    badge: "Non-Surgical",
    title: "PDO Thread Lift",
    description:
      "Lift sagging skin naturally while stimulating collagen for long-lasting results.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-slate-950 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="font-semibold uppercase tracking-widest text-cyan-400">
            Our Premium Treatments
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Professional Aesthetic Services
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
            Discover our comprehensive range of aesthetic and wellness
            treatments performed with precision, safety, and personalized care.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              badge={service.badge}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
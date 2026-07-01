"use client";

import { Syringe, Sparkles, Droplets } from "lucide-react";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";

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

  // NEW SERVICES

  {
    icon: Sparkles,
    badge: "Body Care",
    title: "Body Contouring & Slimming",
    description:
      "Achieve a slimmer, more sculpted physique with non-surgical body contouring and slimming treatments tailored to your body goals.",
  },
  {
    icon: Syringe,
    badge: "Trending",
    title: "Hiko Nose Lift",
    description:
      "Enhance your nose bridge and shape with a non-surgical Hiko Nose Lift for a natural-looking, refined profile.",
  },
  {
    icon: Sparkles,
    badge: "Beauty",
    title: "Waxing",
    description:
      "Enjoy silky smooth skin with professional waxing services for the face and body using safe and gentle techniques.",
  },
  {
    icon: Sparkles,
    badge: "Beauty Lounge",
    title: "Nail Services",
    description:
      "Complete your beauty routine with manicure, pedicure, gel polish, nail extensions, and creative nail art services.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-gradient-to-b from-white via-pink-50 to-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-semibold uppercase tracking-[0.3em] text-pink-500">
            Our Premium Treatments
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-800 md:text-5xl">
            Professional
            <span className="block text-pink-500">
              Aesthetic Services
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Experience personalized aesthetic treatments designed to enhance
            your natural beauty with safety, precision, and exceptional care.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
  key={index}
  icon={service.icon}
  badge={service.badge}
  title={service.title}
  description={service.description}
  details={{
    benefits: [
      "Professional treatment",
      "Safe and hygienic procedure",
      "Performed by experienced professionals",
      "Natural-looking results",
    ],
    duration: "30–60 minutes",
    downtime: "Minimal to none",
    results: "Results vary depending on the treatment",
  }}
/>
          ))}
        </div>

      </div>
    </section>
  );
}
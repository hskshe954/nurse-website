"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type ServiceCardProps = {
  icon: React.ElementType;
  title: string;
  badge: string;
  description: string;
};

export default function ServiceCard({
  icon: Icon,
  title,
  badge,
  description,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{ duration: 0.4 }}
      className="group overflow-hidden rounded-3xl border border-pink-100 bg-white p-8 shadow-lg transition-all duration-300 hover:border-pink-300 hover:shadow-[0_20px_50px_rgba(236,72,153,0.20)]"
    >
      {/* Icon */}
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-100 transition-all duration-300 group-hover:bg-pink-500">
        <Icon className="h-8 w-8 text-pink-500 transition-all duration-300 group-hover:text-white" />
      </div>

      {/* Badge */}
      <span className="inline-block rounded-full bg-pink-100 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-pink-600">
        {badge}
      </span>

      {/* Title */}
      <h3 className="mt-5 text-2xl font-bold text-slate-800">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>

      {/* Divider */}
      <div className="my-6 h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent" />

      {/* Button */}
      <button className="flex items-center gap-2 rounded-full bg-pink-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:gap-3 hover:bg-pink-400">
        Learn More
        <ArrowRight size={18} />
      </button>
    </motion.div>
  );
}
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
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.4 }}
      className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg transition hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/20"
    >
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/20">
        <Icon className="h-8 w-8 text-cyan-400" />
      </div>

      <span className="inline-block rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">
        {badge}
      </span>

      <h3 className="mt-5 text-2xl font-bold">{title}</h3>

      <p className="mt-4 leading-7 text-slate-300">
        {description}
      </p>

      <button className="mt-8 flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-3 font-semibold text-white transition hover:bg-cyan-400">
        Learn More
        <ArrowRight size={18} />
      </button>
    </motion.div>
  );
}
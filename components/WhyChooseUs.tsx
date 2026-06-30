"use client";

import { motion } from "framer-motion";
import {
  Award,
  Clock3,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Licensed Professionals",
    description:
      "Our experienced healthcare team provides safe, professional, and personalized treatments.",
  },
  {
    icon: Clock3,
    title: "Flexible Scheduling",
    description:
      "Book appointments that fit your schedule with convenient and reliable service.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Care",
    description:
      "Every treatment plan is tailored to your goals, comfort, and overall well-being.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Trusted",
    description:
      "We use high-quality products and follow strict safety protocols for every procedure.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="bg-slate-900 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-semibold uppercase tracking-widest text-cyan-400">
            Why Choose Nurse Mitch
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Quality Care You Can Trust
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
            We combine medical expertise with compassionate care to deliver
            exceptional healthcare and aesthetic services that prioritize your
            health, confidence, and satisfaction.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg transition hover:border-cyan-400"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/20">
                  <Icon className="h-8 w-8 text-cyan-400" />
                </div>

                <h3 className="text-2xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-300">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
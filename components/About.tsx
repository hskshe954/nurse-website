"use client";

import { motion } from "framer-motion";
import {
  HeartHandshake,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";

const features = [
  {
    icon: HeartHandshake,
    title: "Compassion",
    description:
      "Every client receives personalized care with kindness, understanding, and genuine attention to their beauty and wellness goals.",
  },
  {
    icon: ShieldCheck,
    title: "Safety First",
    description:
      "We use FDA-approved products and follow professional healthcare standards to ensure every treatment is safe and effective.",
  },
  {
    icon: UserRoundCheck,
    title: "Professional Care",
    description:
      "Received treatments from a licensed aesthetic Doctor & licensed aesthetic Nurse.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-pink-50 to-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-semibold uppercase tracking-[0.3em] text-pink-500">
            About Nurse Mitch
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-800 md:text-5xl">
            Beauty Begins With
            <span className="block text-pink-500">
              Professional Care
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            At Nurse Mitch Fearless Beauty Lounge, we believe beauty should enhance
            your confidence—not change who you are. Every treatment is
            personalized, safe, and designed to help you achieve natural,
            beautiful results in a comfortable and professional environment.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                viewport={{ once: true }}
                className="group rounded-3xl border border-pink-100 bg-white p-8 shadow-lg transition duration-300 hover:shadow-2xl"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-pink-100 transition group-hover:bg-pink-500">
                  <Icon className="h-8 w-8 text-pink-500 transition group-hover:text-white" />
                </div>

                <h3 className="text-center text-2xl font-bold text-slate-800">
                  {feature.title}
                </h3>

                <p className="mt-4 text-center leading-7 text-slate-600">
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
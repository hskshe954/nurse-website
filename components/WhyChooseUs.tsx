"use client";

import { motion } from "framer-motion";
import {
  Award,
  Clock3,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Licensed Aesthetic Nurse",
    description:
      "Receive treatments performed by a licensed professional with a commitment to safety, precision, and beautiful natural-looking results.",
  },
  {
    icon: ShieldCheck,
    title: "FDA-Approved Products",
    description:
      "Only trusted, high-quality products are used to ensure safe, effective, and long-lasting aesthetic treatments.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Beauty Plans",
    description:
      "Every client receives a customized treatment plan designed around their unique facial features and beauty goals.",
  },
  {
    icon: Clock3,
    title: "Flexible Appointments",
    description:
      "Convenient scheduling allows you to book treatments at a time that works best for your busy lifestyle.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="bg-gradient-to-b from-white via-pink-50 to-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-semibold uppercase tracking-[0.3em] text-pink-500">
            Why Choose Nurse Mitch
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-800 md:text-5xl">
            Professional Care.
            <span className="block text-pink-500">
              Beautiful Results.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            We combine medical expertise with advanced aesthetic techniques to
            deliver safe, personalized treatments that help you look refreshed,
            confident, and naturally beautiful.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="group rounded-3xl border border-pink-100 bg-white p-8 shadow-lg transition-all duration-300 hover:border-pink-300 hover:shadow-[0_20px_60px_rgba(236,72,153,0.15)]"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-100 transition duration-300 group-hover:bg-pink-500">
                  <Icon className="h-8 w-8 text-pink-500 transition duration-300 group-hover:text-white" />
                </div>

                <h3 className="text-2xl font-bold text-slate-800">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 rounded-[36px] bg-gradient-to-r from-pink-500 to-rose-400 p-10 text-center text-white shadow-2xl"
        >
          <Sparkles className="mx-auto mb-4 h-10 w-10" />

          <h3 className="text-3xl font-bold">
            Ready to Enhance Your Natural Beauty?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-pink-100">
            Book your consultation today and let Nurse Mitch create a treatment
            plan tailored specifically for you.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-pink-500 transition hover:scale-105"
          >
            Book Your Consultation
            <ArrowRight size={20} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
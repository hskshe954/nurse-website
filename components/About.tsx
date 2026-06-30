"use client";

import { motion } from "framer-motion";
import { HeartHandshake, ShieldCheck, UserRoundCheck } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-semibold uppercase tracking-widest text-cyan-400">
            About Nurse Mitch
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Compassionate Care You Can Trust
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
            At Nurse Mitch, we are committed to delivering high-quality,
            patient-centered healthcare services with professionalism,
            compassion, and integrity. Our mission is to help every patient feel
            safe, comfortable, and cared for.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-lg"
          >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/20">
              <HeartHandshake className="h-8 w-8 text-cyan-400" />
            </div>

            <h3 className="text-2xl font-semibold">
              Compassion
            </h3>

            <p className="mt-4 text-slate-300">
              Every patient receives personalized care with kindness,
              understanding, and respect.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-lg"
          >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/20">
              <ShieldCheck className="h-8 w-8 text-cyan-400" />
            </div>

            <h3 className="text-2xl font-semibold">
              Safety
            </h3>

            <p className="mt-4 text-slate-300">
              We follow professional healthcare standards to ensure safe and
              reliable medical services.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-lg"
          >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/20">
              <UserRoundCheck className="h-8 w-8 text-cyan-400" />
            </div>

            <h3 className="text-2xl font-semibold">
              Professional Care
            </h3>

            <p className="mt-4 text-slate-300">
              Our experienced healthcare team is dedicated to providing
              exceptional nursing services for every patient.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
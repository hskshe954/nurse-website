"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-950 text-white"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-slate-950 to-blue-900/20" />
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center gap-16 px-6 pt-32 pb-20 md:flex-row">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            Premium Aesthetic & Wellness Clinic
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl">
            Reveal Your Natural Beauty
            <br />
            <span className="text-cyan-400">
              With Safe & Professional Aesthetic Treatments
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg text-slate-300">
            Experience safe, personalized aesthetic treatments including
            Botox, Dermal Fillers, Skin Rejuvenation, IV Therapy, and more—
            performed with precision and professional care.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-full bg-cyan-500 px-8 py-4 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              <Calendar size={20} />
              Book Appointment
            </a>

            <a
              href="#services"
              className="flex items-center gap-2 rounded-full border border-white/10 px-8 py-4 transition hover:bg-white/5"
            >
              Our Services
              <ArrowRight size={20} />
            </a>
          </div>

          {/* Trust Section */}
          <div className="mt-12 grid grid-cols-3 gap-8">

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">
                Licensed
              </h3>
              <p className="text-slate-400">
                Professional
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">
                FDA
              </h3>
              <p className="text-slate-400">
                Approved Products
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">
                100%
              </h3>
              <p className="text-slate-400">
                Personalized Care
              </p>
            </div>

          </div>

        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <div className="relative">
<div className="absolute inset-0 -z-10 flex items-center justify-center">
  <div className="h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />
</div>
  {/* Floating Glass Card */}
  <motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{
    opacity: 1,
    y: [0, -10, 0],
  }}
  transition={{
    opacity: { duration: 0.6 },
    y: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }}
    className="absolute -top-6 -left-6 z-20 max-w-xs rounded-3xl border border-cyan-400/20 bg-white/10 p-5 backdrop-blur-xl shadow-[0_20px_60px_rgba(6,182,212,0.25)]"
  >
    <p className="text-lg font-bold text-white">
      👩‍⚕️ Nurse Mitch
    </p>

    <p className="mt-1 text-sm text-cyan-300">
      Licensed Aesthetic Nurse
    </p>

    <div className="mt-4 space-y-2 text-sm text-slate-200">
      <p>💉 Botox & Fillers</p>
      <p>✨ Skin Rejuvenation</p>
      <p>💧 IV Therapy</p>
    </div>
  </motion.div>

  {/* Hero Image */}
  <div className="overflow-hidden rounded-[40px] border border-cyan-400/20 bg-white/5 shadow-[0_25px_80px_rgba(6,182,212,0.25)]">
    <Image
      src="/images/hero.jpg"
      alt="Nurse Mitch"
      width={700}
      height={800}
      className="h-auto w-full object-cover"
      priority
    />
  </div>

</div>
        </motion.div>

      </div>
    </section>
  );
}
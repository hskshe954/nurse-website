"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 text-slate-800"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-white to-rose-100" />
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-pink-300/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-rose-300/30 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center gap-16 px-6 pt-32 pb-20 md:flex-row">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          {/* Badge */}
          <span className="inline-flex items-center rounded-full border border-pink-200 bg-white px-5 py-2 text-sm font-semibold text-pink-600 shadow-sm">
            ✨ Premium Aesthetic & Wellness Clinic
          </span>

          {/* Heading */}
          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-slate-800 md:text-7xl">
            Reveal Your
            <br />

            <span className="text-pink-500">
              Natural Beauty
            </span>

            <br />

            With Confidence
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
            Experience safe, personalized aesthetic treatments including Botox,
            Dermal Fillers, Skin Rejuvenation, IV Therapy, and more — performed
            with precision, care, and a commitment to enhancing your natural
            beauty.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-full bg-pink-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-pink-400"
            >
              <Calendar size={20} />
              Book Appointment
            </a>

            <a
              href="#services"
              className="flex items-center gap-2 rounded-full border border-pink-300 bg-white px-8 py-4 font-semibold text-pink-500 transition-all duration-300 hover:scale-105 hover:bg-pink-100"
            >
              Our Services
              <ArrowRight size={20} />
            </a>
          </div>

          {/* Treatment Tags */}
          <div className="mt-10 flex flex-wrap justify-center gap-2 md:justify-start">

  {[
    "💉 Botox",
    "✨ Fillers",
    "💧 IV Therapy",
    "🌸 Skin Care",
    "💅 Nails",
  ].map((item) => (
    <span
      key={item}
      className="rounded-full bg-pink-100 px-3 py-2 text-xs font-medium text-pink-600 md:px-4 md:text-sm"
    >
      {item}
    </span>
  ))}

</div>

          {/* Statistics */}
          <div className="mt-12 grid grid-cols-3 gap-8">

            <div>
              <h3 className="text-3xl font-bold text-pink-500">
                500+
              </h3>

              <p className="text-slate-600">
                Happy Clients
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-pink-500">
                100%
              </h3>

              <p className="text-slate-600">
                Safe Procedures
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-pink-500">
                ★★★★★
              </h3>

              <p className="text-slate-600">
                Client Satisfaction
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

            {/* Glow */}
            <div className="absolute inset-0 -z-10 flex items-center justify-center">
              <div className="h-96 w-96 rounded-full bg-pink-400/30 blur-[120px]" />
            </div>

            {/* Floating Nurse Card */}
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
              className="absolute -top-6 -left-6 z-20 max-w-xs rounded-3xl border border-pink-200 bg-white/90 p-5 backdrop-blur-xl shadow-2xl"
            >
              <p className="text-lg font-bold text-slate-800">
                👩‍⚕️ Nurse Mitch
              </p>

              <p className="mt-1 text-sm text-pink-500">
                Licensed Aesthetic Nurse
              </p>

              <div className="mt-4 space-y-2 text-sm text-slate-600">
                <p>💉 Botox & Fillers</p>
                <p>✨ Skin Rejuvenation</p>
                <p>💧 IV Therapy</p>
              </div>
            </motion.div>

            {/* Floating Review Card */}
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-6 right-0 z-20 rounded-3xl bg-white p-5 shadow-2xl"
            >
              <p className="text-3xl font-bold text-pink-500">
                ★★★★★
              </p>

              <p className="text-sm text-slate-600">
                Trusted by Happy Clients
              </p>
            </motion.div>

            {/* Hero Image */}
            <div className="overflow-hidden rounded-[40px] border border-pink-200 bg-white shadow-2xl">
              <Image
                src="/images/hero.jpg"
                alt="Nurse Mitch"
                width={700}
                height={800}
                className="h-auto w-full object-cover transition duration-700 hover:scale-105"
                priority
              />
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
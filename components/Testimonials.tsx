"use client";

import { motion } from "framer-motion";
import { Star, Quote, User, Heart } from "lucide-react";

const testimonials = [
  {
    name: "Maria Santos",
    role: "Botox Client",
    review:
      "The results were incredibly natural. Nurse Mitch explained every step of the procedure, making me feel safe and comfortable. I couldn't be happier with the outcome!",
  },
  {
    name: "John Cruz",
    role: "IV Therapy Client",
    review:
      "Very professional and welcoming. The clinic is clean, relaxing, and the treatment exceeded my expectations. I will definitely come back.",
  },
  {
    name: "Angela Reyes",
    role: "Lip Filler Client",
    review:
      "Absolutely amazing experience! My lips look fuller while still looking natural. Nurse Mitch truly has an eye for beauty.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-gradient-to-b from-pink-50 via-white to-pink-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-semibold uppercase tracking-[0.3em] text-pink-500">
            Testimonials
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-800 md:text-5xl">
            Loved by
            <span className="block text-pink-500">
              Our Clients
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Every smile, every compliment, and every transformation inspires us
            to continue providing safe, personalized, and exceptional aesthetic
            care.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * .15 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="group rounded-[32px] border border-pink-100 bg-white p-8 shadow-lg transition-all duration-300 hover:border-pink-300 hover:shadow-[0_20px_60px_rgba(236,72,153,0.15)]"
            >
              {/* Quote */}
              <Quote className="mb-6 h-10 w-10 text-pink-300" />

              {/* Stars */}
              <div className="mb-5 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="leading-8 text-slate-600 italic">
                "{item.review}"
              </p>

              {/* Footer */}
              <div className="mt-8 flex items-center justify-between border-t border-pink-100 pt-6">

                <div className="flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-pink-100 transition group-hover:bg-pink-500">
                    <User className="h-7 w-7 text-pink-500 transition group-hover:text-white" />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-800">
                      {item.name}
                    </h3>

                    <p className="text-sm text-pink-500">
                      {item.role}
                    </p>
                  </div>

                </div>

                <Heart className="h-6 w-6 text-pink-300 transition group-hover:fill-pink-400 group-hover:text-pink-400" />

              </div>

            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: .3 }}
          viewport={{ once: true }}
          className="mt-20 rounded-[36px] bg-gradient-to-r from-pink-500 to-rose-400 p-10 text-center text-white shadow-2xl"
        >
          <h3 className="text-3xl font-bold">
            Your Beauty Journey Starts Here 💖
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-pink-100">
            Join hundreds of satisfied clients who trust Nurse Mitch for safe,
            professional, and natural-looking aesthetic treatments.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-semibold text-pink-500 transition hover:scale-105"
          >
            Book Your Appointment
          </a>
        </motion.div>

      </div>
    </section>
  );
}
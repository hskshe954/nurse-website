"use client";

import { motion } from "framer-motion";
import { Star, Quote, User } from "lucide-react";

const testimonials = [
  {
    name: "Maria Santos",
    role: "Botox Client",
    review:
      "The results were incredibly natural. Nurse Mitch explained everything clearly and made me feel comfortable throughout the entire procedure.",
  },
  {
    name: "John Cruz",
    role: "IV Therapy Client",
    review:
      "Professional, friendly, and very knowledgeable. My IV therapy session was relaxing and I felt refreshed afterwards.",
  },
  {
    name: "Angela Reyes",
    role: "Lip Filler Client",
    review:
      "I absolutely love my results! The enhancement looks natural and boosted my confidence. Highly recommended!",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-slate-950 py-24 text-white"
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
            Testimonials
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            What Our Clients Say
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
            We are grateful for the trust our clients place in us. Here are
            some of their experiences with Nurse Mitch.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg transition hover:border-cyan-400"
            >
              <Quote className="mb-6 h-10 w-10 text-cyan-400" />

              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="leading-7 text-slate-300">
                "{item.review}"
              </p>

              <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">

  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500/20">
    <User className="h-7 w-7 text-cyan-400" />
  </div>

  <div>
    <h3 className="text-lg font-bold">
      {item.name}
    </h3>

    <p className="text-cyan-400">
      {item.role}
    </p>
  </div>

</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
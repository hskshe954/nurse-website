"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const transformations = [
  {
    title: "Botox Treatment",
    before: "/images/before1.jpg",
    after: "/images/after1.jpg",
  },
  {
    title: "Lip Fillers",
    before: "/images/before2.jpg",
    after: "/images/after2.jpg",
  },
  {
    title: "Skin Rejuvenation",
    before: "/images/before3.jpg",
    after: "/images/after3.jpg",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
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
            Before & After
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Real Client Transformations
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
            See the natural-looking results achieved through personalized
            aesthetic treatments performed by Nurse Mitch.
          </p>
        </motion.div>

        <div className="mt-16 space-y-14">
          {transformations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-cyan-400/20 bg-white/5 p-6 backdrop-blur-lg"
            >
              <h3 className="mb-8 text-center text-2xl font-bold text-cyan-400">
                {item.title}
              </h3>

              <div className="grid gap-6 md:grid-cols-2">

                <div>
                  <p className="mb-4 text-center font-semibold text-red-400">
                    BEFORE
                  </p>

                  <div className="overflow-hidden rounded-3xl">
                    <Image
                      src={item.before}
                      alt="Before"
                      width={700}
                      height={700}
                      className="h-96 w-full object-cover transition duration-500 hover:scale-105"
                    />
                  </div>
                </div>

                <div>
                  <p className="mb-4 text-center font-semibold text-green-400">
                    AFTER
                  </p>

                  <div className="overflow-hidden rounded-3xl">
                    <Image
                      src={item.after}
                      alt="After"
                      width={700}
                      height={700}
                      className="h-96 w-full object-cover transition duration-500 hover:scale-105"
                    />
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
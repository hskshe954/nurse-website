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
      className="bg-gradient-to-b from-pink-50 via-white to-pink-50 py-24"
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
            Before & After
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-800 md:text-5xl">
            Real Client
            <span className="block text-pink-500">
              Transformations
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Every treatment is carefully personalized to enhance your natural
            beauty while maintaining safe, professional, and elegant results.
          </p>
        </motion.div>

        {/* Gallery */}
        <div className="mt-20 space-y-14">
          {transformations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="overflow-hidden rounded-[32px] border border-pink-100 bg-white p-8 shadow-lg transition-all hover:shadow-[0_20px_60px_rgba(236,72,153,0.15)]"
            >
              <h3 className="mb-8 text-center text-3xl font-bold text-pink-500">
                {item.title}
              </h3>

              <div className="grid gap-8 md:grid-cols-2">

                {/* BEFORE */}
                <div>
                  <div className="mb-4 flex items-center justify-center">
                    <span className="rounded-full bg-red-100 px-5 py-2 text-sm font-bold text-red-500">
                      BEFORE
                    </span>
                  </div>

                  <div className="overflow-hidden rounded-3xl shadow-lg">
                    <Image
                      src={item.before}
                      alt="Before"
                      width={700}
                      height={700}
                      className="h-96 w-full object-cover transition duration-500 hover:scale-110"
                    />
                  </div>
                </div>

                {/* AFTER */}
                <div>
                  <div className="mb-4 flex items-center justify-center">
                    <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-bold text-green-600">
                      AFTER
                    </span>
                  </div>

                  <div className="overflow-hidden rounded-3xl shadow-lg">
                    <Image
                      src={item.after}
                      alt="After"
                      width={700}
                      height={700}
                      className="h-96 w-full object-cover transition duration-500 hover:scale-110"
                    />
                  </div>
                </div>

              </div>

              <div className="mt-8 text-center">
                <span className="rounded-full bg-pink-100 px-6 py-3 text-sm font-semibold text-pink-600">
                  ✨ Real Results • Personalized Treatment • Professional Care
                </span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
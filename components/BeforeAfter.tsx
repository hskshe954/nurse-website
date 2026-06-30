"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BeforeAfter() {
  const [position, setPosition] = useState(50);

  return (
    <section
      id="results"
      className="bg-slate-900 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-semibold uppercase tracking-widest text-cyan-400">
            Results
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Before & After
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            See the natural-looking transformations achieved through
            professional aesthetic treatments.
          </p>
        </motion.div>

        <div className="relative mx-auto mt-16 aspect-[4/5] max-w-3xl overflow-hidden rounded-3xl border border-cyan-400/20 shadow-2xl">

          {/* BEFORE */}
          <Image
            src="/images/before.jpg"
            alt="Before"
            fill
            className="object-cover"
          />

          {/* AFTER */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{
              width: `${position}%`,
            }}
          >
            <Image
              src="/images/after.jpg"
              alt="After"
              fill
              className="object-cover"
            />
          </div>

          {/* Divider */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white"
            style={{
              left: `${position}%`,
            }}
          >
            <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cyan-500 shadow-xl">
              ↔
            </div>
          </div>

          {/* Slider */}
          <input
            type="range"
            min={0}
            max={100}
            value={position}
            onChange={(e) => setPosition(Number(e.target.value))}
            className="absolute bottom-6 left-1/2 z-20 w-3/4 -translate-x-1/2 accent-cyan-500"
          />

          {/* Labels */}
          <div className="absolute left-6 top-6 rounded-full bg-black/60 px-4 py-2 backdrop-blur">
            Before
          </div>

          <div className="absolute right-6 top-6 rounded-full bg-cyan-500 px-4 py-2 text-slate-950 font-semibold">
            After
          </div>

        </div>

      </div>
    </section>
  );
}
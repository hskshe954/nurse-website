"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  X,
  CheckCircle,
  Clock3,
  Sparkles,
} from "lucide-react";

type ServiceCardProps = {
  icon: React.ElementType;
  title: string;
  badge: string;
  description: string;
  details: {
    benefits: string[];
    duration: string;
    downtime: string;
    results: string;
  };
};

export default function ServiceCard({
  icon: Icon,
  title,
  badge,
  description,
  details,
}: ServiceCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{
          y: -10,
          scale: 1.03,
        }}
        transition={{ duration: 0.4 }}
        className="group overflow-hidden rounded-3xl border border-pink-100 bg-white p-8 shadow-lg transition-all duration-300 hover:border-pink-300 hover:shadow-[0_20px_50px_rgba(236,72,153,0.20)]"
      >
        {/* Icon */}
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-100 transition-all duration-300 group-hover:bg-pink-500">
          <Icon className="h-8 w-8 text-pink-500 transition-all duration-300 group-hover:text-white" />
        </div>

        {/* Badge */}
        <span className="inline-block rounded-full bg-pink-100 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-pink-600">
          {badge}
        </span>

        {/* Title */}
        <h3 className="mt-5 text-2xl font-bold text-slate-800">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-4 leading-7 text-slate-600">
          {description}
        </p>

        <div className="my-6 h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent" />

        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 rounded-full bg-pink-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:gap-3 hover:bg-pink-400"
        >
          Learn More
          <ArrowRight size={18} />
        </button>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-6 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-xl rounded-[32px] bg-white p-8 shadow-2xl"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute right-5 top-5 rounded-full bg-pink-100 p-2 text-pink-500 transition hover:bg-pink-500 hover:text-white"
              >
                <X size={22} />
              </button>

              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-100">
                <Icon className="h-8 w-8 text-pink-500" />
              </div>

              <span className="rounded-full bg-pink-100 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-pink-600">
                {badge}
              </span>

              <h2 className="mt-5 text-3xl font-bold text-slate-800">
                {title}
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                {description}
              </p>

              <div className="mt-8">
                <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-pink-500">
                  <Sparkles size={20} />
                  Benefits
                </h3>

                <div className="space-y-3">
                  {details.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle
                        size={18}
                        className="text-pink-500"
                      />

                      <span className="text-slate-700">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>              <div className="mt-8 grid gap-4 rounded-2xl bg-pink-50 p-6">

                <div className="flex items-center gap-3">
                  <Clock3 className="text-pink-500" size={20} />
                  <div>
                    <p className="text-sm text-slate-500">
                      Treatment Duration
                    </p>
                    <p className="font-semibold text-slate-800">
                      {details.duration}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Sparkles className="text-pink-500" size={20} />
                  <div>
                    <p className="text-sm text-slate-500">
                      Downtime
                    </p>
                    <p className="font-semibold text-slate-800">
                      {details.downtime}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle className="text-pink-500" size={20} />
                  <div>
                    <p className="text-sm text-slate-500">
                      Expected Results
                    </p>
                    <p className="font-semibold text-slate-800">
                      {details.results}
                    </p>
                  </div>
                </div>

              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">

                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex-1 rounded-full bg-pink-500 px-6 py-4 text-center font-semibold text-white transition hover:bg-pink-400"
                >
                  Book Appointment
                </a>

                <button
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-pink-300 px-6 py-4 font-semibold text-pink-500 transition hover:bg-pink-50"
                >
                  Close
                </button>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
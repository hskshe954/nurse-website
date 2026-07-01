"use client";

import Image from "next/image";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const images = [
  "/images/results/result1.jpg",
  "/images/results/result2.jpg",
  "/images/results/result3.jpg",
  "/images/results/result4.jpg",
  "/images/results/result5.jpg",
];

export default function ResultsGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section
      id="results"
      className="bg-gradient-to-b from-pink-50 via-white to-pink-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-pink-500">
            Real Client Results
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-800 md:text-5xl">
            Before & After Gallery
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Browse real treatment results from our clients. Every
            transformation reflects personalized care, professional
            techniques, and natural-looking enhancements.
          </p>
        </div>

        {/* Gallery */}
        <div className="mt-16 flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {images.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, scale: 1.02 }}
              className="min-w-[320px] overflow-hidden rounded-3xl border border-pink-200 bg-white shadow-xl"
            >
              <Image
                src={image}
                alt={`Result ${index + 1}`}
                width={400}
                height={600}
                onClick={() => setSelectedImage(index)}
                className="h-[520px] w-full cursor-pointer object-cover transition duration-300 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4">

          {/* Close */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-6 top-6 rounded-full bg-white p-2 shadow-lg transition hover:scale-110"
          >
            <X size={28} />
          </button>

          {/* Previous */}
          <button
            onClick={() =>
              setSelectedImage(
                selectedImage === 0
                  ? images.length - 1
                  : selectedImage - 1
              )
            }
            className="absolute left-4 rounded-full bg-white p-3 shadow-lg transition hover:scale-110"
          >
            <ChevronLeft size={30} />
          </button>

          {/* Enlarged Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={images[selectedImage]}
              alt={`Result ${selectedImage + 1}`}
              width={900}
              height={1400}
              className="max-h-[90vh] w-auto rounded-3xl object-contain"
            />
          </motion.div>

          {/* Next */}
          <button
            onClick={() =>
              setSelectedImage(
                selectedImage === images.length - 1
                  ? 0
                  : selectedImage + 1
              )
            }
            className="absolute right-4 rounded-full bg-white p-3 shadow-lg transition hover:scale-110"
          >
            <ChevronRight size={30} />
          </button>

          {/* Click outside to close */}
          <div
            className="absolute inset-0 -z-10"
            onClick={() => setSelectedImage(null)}
          />
        </div>
      )}
    </section>
  );
}
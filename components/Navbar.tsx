"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-pink-200/60 bg-white/80 backdrop-blur-2xl shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Nurse Mitch Logo"
            width={48}
            height={48}
            className="rounded-full border-2 border-pink-300 shadow-md"
            priority
          />

          <div>
            <h2 className="text-xl font-bold text-pink-600">
              Nurse Mitch
            </h2>

            <p className="text-xs tracking-widest text-slate-500 uppercase">
              Aesthetic Clinic
            </p>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-semibold text-slate-700 transition duration-300 hover:text-pink-500 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-pink-500 after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Book Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-pink-300"
          >
            <Calendar size={18} />
            Book Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-xl p-2 text-pink-600 transition hover:bg-pink-100 md:hidden"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="border-t border-pink-200 bg-white/95 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col px-6 py-6">

              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-3 py-4 font-medium text-slate-700 transition hover:bg-pink-100 hover:text-pink-500"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 py-3 font-semibold text-white shadow-lg transition hover:scale-[1.02]"
              >
                <Calendar size={18} />
                Book Appointment
              </a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
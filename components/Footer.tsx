"use client";

import {
  Heart,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Home,
  Info,
  ImageIcon,
  Sparkles,
  MessageSquare,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-pink-200 bg-gradient-to-br from-pink-50 via-white to-rose-100">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-pink-100/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}
          <div>

            <div className="flex items-center gap-3">

              <div className="rounded-2xl bg-pink-100 p-3 shadow-md">
                <Heart className="h-7 w-7 fill-pink-500 text-pink-500" />
              </div>

              <h2 className="text-2xl font-bold text-slate-800">
                Nurse Mitch
              </h2>

            </div>

            <p className="mt-5 leading-7 text-slate-600">
              Helping you enhance your natural beauty through safe,
              personalized aesthetic treatments with professional care
              and genuine compassion.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-5 text-xl font-bold text-slate-800">
              Quick Links
            </h3>

            <ul className="space-y-4">

              <li>
                <a
                  href="#home"
                  className="flex items-center gap-2 text-slate-600 transition hover:text-pink-500"
                >
                  <Home size={18} />
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="flex items-center gap-2 text-slate-600 transition hover:text-pink-500"
                >
                  <Info size={18} />
                  About
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="flex items-center gap-2 text-slate-600 transition hover:text-pink-500"
                >
                  <Sparkles size={18} />
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#gallery"
                  className="flex items-center gap-2 text-slate-600 transition hover:text-pink-500"
                >
                  <ImageIcon size={18} />
                  Gallery
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="flex items-center gap-2 text-slate-600 transition hover:text-pink-500"
                >
                  <MessageSquare size={18} />
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-5 text-xl font-bold text-slate-800">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3 text-slate-600">
                <Phone className="text-pink-500" size={18} />
                +63 976 295 4314
              </div>

              <div className="flex items-center gap-3 text-slate-600">
                <Mail className="text-pink-500" size={18} />
                mitchampz095@gmail.com
              </div>

              <div className="flex items-start gap-3 text-slate-600">
                <MapPin className="mt-1 text-pink-500" size={18} />

                <span>
                  34 T. Padilla Street Corner
                  <br />
                  M.J Cuenco,
                  Cebu City
                </span>

              </div>

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="mb-5 text-xl font-bold text-slate-800">
              Follow Us
            </h3>

            <motion.a
              whileHover={{
                scale: 1.08,
              }}
              href="https://www.facebook.com/profile.php?id=100088070547410"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl bg-blue-600 px-6 py-4 font-semibold text-white shadow-lg transition hover:bg-blue-500"
            >
              📘 Facebook Page
            </motion.a>

            <p className="mt-5 leading-7 text-slate-600">
              Stay updated with our latest promotions,
              beauty tips, and client transformations.
            </p>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-pink-200 pt-8 md:flex-row">

          <p className="text-slate-500">
            © {new Date().getFullYear()} Nurse Mitch.
            Made with ❤️ for beautiful transformations.
          </p>

          <motion.a
            whileHover={{
              y: -4,
              scale: 1.1,
            }}
            href="#home"
            className="rounded-full bg-pink-500 p-4 text-white shadow-xl transition hover:bg-pink-400"
          >
            <ArrowUp size={22} />
          </motion.a>

        </div>

      </div>

    </footer>
  );
}
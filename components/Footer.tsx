"use client";

import {
  HeartPulse,
  Mail,
  Globe,
  MessageCircle,
  ArrowUp,
  MapPin,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-cyan-400/20 bg-slate-950 text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950 to-cyan-950/20" />

      <div className="relative mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-cyan-500/20 p-3">
                <HeartPulse className="h-7 w-7 text-cyan-400" />
              </div>

              <h2 className="text-2xl font-bold">
                Nurse Mitch
              </h2>
            </div>

            <p className="mt-5 leading-7 text-slate-400">
              Professional aesthetic and wellness services dedicated to
              enhancing your confidence through safe, personalized,
              and modern treatments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-xl font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-300">
              {[
                "Home",
                "About",
                "Gallery",
                "Services",
                "Testimonials",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="transition hover:text-cyan-400"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-xl font-semibold">
              Contact
            </h3>

            <div className="space-y-4 text-slate-300">

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-cyan-400" />
                <span>+63 912 345 6789</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-cyan-400" />
                <span>info@nursemitch.com</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-cyan-400" />
                <span>
                  Maragusan,
                  <br />
                  Davao de Oro
                </span>
              </div>

            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-5 text-xl font-semibold">
              Connect With Us
            </h3>

            <div className="flex gap-4">

              <motion.a
                whileHover={{ y: -5 }}
                href="#"
                className="rounded-full bg-white/10 p-4 transition hover:bg-cyan-500"
              >
                <Globe />
              </motion.a>

              <motion.a
                whileHover={{ y: -5 }}
                href="#"
                className="rounded-full bg-white/10 p-4 transition hover:bg-cyan-500"
              >
                <MessageCircle />
              </motion.a>

              <motion.a
                whileHover={{ y: -5 }}
                href="mailto:info@nursemitch.com"
                className="rounded-full bg-white/10 p-4 transition hover:bg-cyan-500"
              >
                <Mail />
              </motion.a>

            </div>

            <p className="mt-6 text-slate-400">
              Follow us for updates,
              promotions, and beauty tips.
            </p>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">

          <p className="text-slate-400">
            © {new Date().getFullYear()} Nurse Mitch.
            All Rights Reserved.
          </p>

          <motion.a
            whileHover={{ y: -4 }}
            href="#home"
            className="rounded-full bg-cyan-500 p-3 text-slate-950 shadow-lg"
          >
            <ArrowUp />
          </motion.a>

        </div>

      </div>
    </footer>
  );
}
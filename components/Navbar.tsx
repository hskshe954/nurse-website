"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

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
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-3"
        >
          <Image
            src="/images/logo.png"
            alt="Nurse Mitch Logo"
            width={45}
            height={45}
            className="rounded-full"
            priority
          />

          <span className="text-xl font-bold tracking-wide text-white">
            Nurse Mitch
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="transition hover:text-cyan-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-full border border-white/10 px-4 py-2 text-sm transition hover:bg-white/5">
            Login
          </button>

          <a
            href="#contact"
            className="rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-black transition hover:bg-cyan-400"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white md:hidden"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col px-6 py-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/5 py-4 text-slate-300 transition hover:text-cyan-400"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-6 rounded-full bg-cyan-500 py-3 text-center font-semibold text-black transition hover:bg-cyan-400"
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
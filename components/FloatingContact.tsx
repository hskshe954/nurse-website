"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  Phone,
  MapPin,
  X,
} from "lucide-react";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  const contacts = [
    {
      icon: <MessageCircle size={22} />,
      label: "Messenger",
      href: "https://m.me/100088070547410",
      color: "bg-blue-500 hover:bg-blue-400",
    },
    {
      icon: <Phone size={22} />,
      label: "Call Us",
      href: "tel:+639762954314",
      color: "bg-green-500 hover:bg-green-400",
    },
    {
      icon: <MapPin size={22} />,
      label: "Find Us",
      href: "https://www.google.com/maps/place/8W24%2BPHJ,+34+Tiburcio+Padilla+St,+Cebu+City,+6000+Cebu/",
      color: "bg-rose-500 hover:bg-rose-400",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      <AnimatePresence>
        {open &&
          contacts.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 30, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 30, scale: 0.8 }}
              transition={{
                delay: index * 0.08,
              }}
              className="group flex items-center gap-3"
            >
              {/* Label */}
              <div className="rounded-full border border-pink-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-xl backdrop-blur-lg transition group-hover:bg-pink-50">
                {item.label}
              </div>

              {/* Icon */}
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-full text-white shadow-xl transition-all duration-300 group-hover:scale-110 ${item.color}`}
              >
                {item.icon}
              </div>
            </motion.a>
          ))}
      </AnimatePresence>

      {/* Main Floating Button */}
      <motion.button
        whileHover={{
          scale: 1.08,
          rotate: 8,
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={() => setOpen(!open)}
        className="relative flex h-16 w-16 items-center justify-center rounded-full bg-pink-500 text-white shadow-[0_0_35px_rgba(236,72,153,0.45)]"
      >
        {/* Pulse */}
        {!open && (
          <>
            <span className="absolute h-full w-full animate-ping rounded-full bg-pink-300 opacity-30"></span>
            <span className="absolute h-full w-full rounded-full bg-pink-400 opacity-20"></span>
          </>
        )}

        {open ? (
          <X size={30} className="relative z-10" />
        ) : (
          <MessageCircle size={30} className="relative z-10" />
        )}
      </motion.button>

    </div>
  );
}
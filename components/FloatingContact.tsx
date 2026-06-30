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
      href: "https://m.me/YOUR_FACEBOOK_USERNAME",
      color: "bg-cyan-500",
    },
    {
      icon: <Phone size={22} />,
      label: "Call Us",
      href: "tel:+639762954314,",
      color: "bg-green-500",
    },
    {
      icon: <MapPin size={22} />,
      label: "Find Us",
      href: "https://www.google.com/maps/place/Genesis+Maternity+Clinic+T.+Padilla/@10.3017702,123.9063521,19z/data=!4m15!1m8!3m7!1s0x33a999ca7a93efd5:0xfa431f165d4c7296!2sJerome's+gadgets+-+T.+Padilla!8m2!3d10.3018446!4d123.9064056!10e5!16s%2Fg%2F11rv09y2jw!3m5!1s0x33a9995dc8c0ff2f:0xf9d39ff10e034ec7!8m2!3d10.3019659!4d123.9060709!16s%2Fg%2F11bw77tgzy?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D",
      color: "bg-red-500",
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
              <div className="rounded-full bg-slate-900/95 px-4 py-2 text-sm font-medium text-white shadow-xl backdrop-blur-lg transition group-hover:bg-slate-800">
                {item.label}
              </div>

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-full text-white shadow-xl transition group-hover:scale-110 ${item.color}`}
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
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={() => setOpen(!open)}
        className="relative flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500 text-slate-950 shadow-[0_0_40px_rgba(6,182,212,0.45)]"
      >
        {/* Pulse */}
        {!open && (
          <>
            <span className="absolute h-full w-full animate-ping rounded-full bg-cyan-400 opacity-25"></span>
            <span className="absolute h-full w-full rounded-full bg-cyan-500 opacity-20"></span>
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
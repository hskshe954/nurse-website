"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
} from "lucide-react";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setLoading(true);
    setSuccess(false);
    setError(false);

    emailjs
      .sendForm(
        "service_p0zb2lo",
        "template_cmv8bim",
        form.current,
        "1ZNuSMjme1WP3GudZ"
      )
      .then(() => {
        console.log("SUCCESS");

        setLoading(false);
        setSuccess(true);

        form.current?.reset();

        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      })
      .catch((err) => {
        console.error(err);

        setLoading(false);
        setError(true);

        setTimeout(() => {
          setError(false);
        }, 5000);
      });
  };

  return (
    <section
      id="contact"
      className="bg-slate-900 py-24 text-white"
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
          <p className="font-semibold uppercase tracking-widest text-cyan-400">
            Book an Appointment
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Let's Start Your Aesthetic Journey
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
            Schedule your consultation with Nurse Mitch and receive
            personalized treatments tailored to your beauty and wellness goals.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              {
                icon: Phone,
                title: "Phone",
                text: "+63 976 295 4314",
              },
              {
                icon: Mail,
                title: "Email",
                text: "mitchampz095@gmail.com",
              },
              {
                icon: MapPin,
                title: "Location",
                text: "34 T.Padilla street corner, M.j Cuenco, Cebu City.",
              },
              {
                icon: Clock,
                title: "Clinic Hours",
                text: "Monday - Sunday\n9:30 AM - 9:30 PM",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-5 rounded-3xl border border-cyan-400/20 bg-white/5 p-6 backdrop-blur-lg"
                >
                  <div className="rounded-2xl bg-cyan-500/20 p-4">
                    <Icon className="h-7 w-7 text-cyan-400" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="whitespace-pre-line text-slate-300">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Appointment Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-cyan-400/20 bg-white/5 p-8 backdrop-blur-xl"
          >
            <h3 className="mb-6 text-2xl font-bold">
              Book Appointment
            </h3>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-5"
            >
              <input
                name="user_name"
                type="text"
                placeholder="Full Name"
                required
                className="w-full rounded-xl bg-slate-800 p-4 outline-none focus:ring-2 focus:ring-cyan-400"
              />

              <input
                name="user_email"
                type="email"
                placeholder="Email Address"
                required
                className="w-full rounded-xl bg-slate-800 p-4 outline-none focus:ring-2 focus:ring-cyan-400"
              />

              <input
                name="user_phone"
                type="tel"
                placeholder="Phone Number"
                required
                className="w-full rounded-xl bg-slate-800 p-4 outline-none focus:ring-2 focus:ring-cyan-400"
              />

              <select
                name="treatment"
                required
                className="w-full rounded-xl bg-slate-800 p-4 outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <option value="">Select a Treatment</option>
                <option>Botox</option>
                <option>Dermal Fillers</option>
                <option>Skin Rejuvenation</option>
                <option>HydraFacial</option>
                <option>Chemical Peel</option>
                <option>IV Therapy</option>
                <option>PDO Thread Lift</option>
              </select>

              <input
  name="appointment_date"
  type="date"
  min={new Date().toISOString().split("T")[0]}
  required
  className="w-full rounded-xl bg-slate-800 p-4 outline-none focus:ring-2 focus:ring-cyan-400"
/>
<select
  name="appointment_time"
  required
  className="w-full rounded-xl bg-slate-800 p-4 outline-none focus:ring-2 focus:ring-cyan-400"
>
  <option value="">Preferred Time</option>
  <option>9:00 AM</option>
  <option>10:00 AM</option>
  <option>11:00 AM</option>
  <option>1:00 PM</option>
  <option>2:00 PM</option>
  <option>3:00 PM</option>
  <option>4:00 PM</option>
  <option>5:00 PM</option>
</select>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us about your concerns or preferred treatment..."
                required
                className="w-full rounded-xl bg-slate-800 p-4 outline-none focus:ring-2 focus:ring-cyan-400"
              />

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 py-4 font-semibold text-slate-950 transition hover:scale-[1.02] hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Send size={20} />
                {loading ? "Sending Appointment..." : "Book Appointment"}
              </button>

              {success && (
                <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-center text-green-400">
                  ✅ Appointment request sent successfully!
                </div>
              )}

              {error && (
                <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-center text-red-400">
                  ❌ Failed to send appointment request. Please try again.
                </div>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
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
import { FaFacebookF } from "react-icons/fa";

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
        setLoading(false);
        setSuccess(true);

        form.current?.reset();

        setTimeout(() => {
          setSuccess(false);
        }, 4000);
      })
      .catch(() => {
        setLoading(false);
        setError(true);

        setTimeout(() => {
          setError(false);
        }, 4000);
      });
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="rounded-full bg-pink-100 px-5 py-2 text-sm font-semibold text-pink-500">
            Book Appointment
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-800">
            Start Your Beauty Journey
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Schedule your consultation with Nurse Mitch and receive
            personalized aesthetic treatments designed to enhance your natural beauty.
          </p>

        </motion.div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            {[
              {
                icon: Phone,
                title: "Phone Number",
                text: "+63 976 295 4314",
              },
              {
                icon: Mail,
                title: "Email Address",
                text: "mitchampz095@gmail.com",
              },
              {
                icon: MapPin,
                title: "Clinic Location",
                text: "34 T. Padilla Street Corner M.J Cuenco, Cebu City",
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
                  whileHover={{
                    scale: 1.03,
                  }}
                  className="flex items-center gap-5 rounded-[30px] border border-pink-200 bg-white p-6 shadow-lg transition"
                >

                  <div className="rounded-2xl bg-pink-100 p-4">
                    <Icon className="h-7 w-7 text-pink-500" />
                  </div>

                  <div>

                    <h3 className="text-xl font-bold text-slate-800">
                      {item.title}
                    </h3>

                    <p className="whitespace-pre-line text-slate-600">
                      {item.text}
                    </p>

                  </div>

                </motion.div>

              );

            })}

            

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[35px] border border-pink-200 bg-white p-8 shadow-xl"
          >

            <h3 className="mb-8 text-3xl font-bold text-slate-800">
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
                className="w-full rounded-xl border border-pink-200 p-4 outline-none transition focus:border-pink-500"
              />

              <input
                name="user_email"
                type="email"
                placeholder="Email Address"
                required
                className="w-full rounded-xl border border-pink-200 p-4 outline-none transition focus:border-pink-500"
              />

              <input
                name="user_phone"
                type="tel"
                placeholder="Phone Number"
                required
                className="w-full rounded-xl border border-pink-200 p-4 outline-none transition focus:border-pink-500"
              />

              <select
  name="treatment"
  required
  className="w-full rounded-xl border border-pink-200 p-4 outline-none transition focus:border-pink-500"
>
  <option value="">Select Treatment</option>

  <option>Botox / Dysport</option>
  <option>Lip Fillers</option>
  <option>Cheek & Midface Fillers</option>
  <option>Under-Eye Fillers</option>
  <option>Jawline & Chin Sculpting</option>
  <option>Skin Brightening Program</option>
  <option>Chemical Peels</option>
  <option>HydraFacial</option>
  <option>Skin Rejuvenation</option>
  <option>Glutathione IV Drip</option>
  <option>Vitamin C IV Therapy</option>
  <option>PDO Thread Lift</option>
  <option>Body Contouring & Slimming</option>
  <option>Hiko Nose Lift</option>
  <option>Waxing</option>
  <option>Nail Services</option>
</select>

              <input
                name="appointment_date"
                type="date"
                min={new Date().toISOString().split("T")[0]}
                required
                className="w-full rounded-xl border border-pink-200 p-4 outline-none transition focus:border-pink-500"
              />

              <select
  name="appointment_time"
  required
  className="w-full rounded-xl border border-pink-200 p-4 outline-none transition focus:border-pink-500"
>
  <option value="">Preferred Time</option>

  <option>9:30 AM</option>
  <option>10:00 AM</option>
  <option>10:30 AM</option>
  <option>11:00 AM</option>
  <option>11:30 AM</option>

  <option>12:00 PM</option>
  <option>12:30 PM</option>

  <option>1:00 PM</option>
  <option>1:30 PM</option>

  <option>2:00 PM</option>
  <option>2:30 PM</option>

  <option>3:00 PM</option>
  <option>3:30 PM</option>

  <option>4:00 PM</option>
  <option>4:30 PM</option>

  <option>5:00 PM</option>
  <option>5:30 PM</option>

  <option>6:00 PM</option>
  <option>6:30 PM</option>

  <option>7:00 PM</option>
  <option>7:30 PM</option>

  <option>8:00 PM</option>
  <option>8:30 PM</option>

  <option>9:00 PM</option>
  <option>9:30 PM</option>
</select>
            <textarea
                name="message"
                rows={5}
                placeholder="Tell us about your concerns or preferred treatment..."
                required
                className="w-full rounded-xl border border-pink-200 p-4 outline-none transition focus:border-pink-500"
              />

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-pink-500 py-4 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-pink-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Send size={20} />

                {loading
                  ? "Sending Appointment..."
                  : "Book Appointment"}
              </button>

              {success && (
                <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-center font-medium text-green-600">
                  🌸 Your appointment request has been sent successfully!
                </div>
              )}

              {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-center font-medium text-red-600">
                  ❌ Something went wrong. Please try again.
                </div>
              )}

            </form>

            {/* Divider */}

            <div className="my-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-pink-200"></div>

              <span className="text-sm font-medium text-slate-400">
                OR
              </span>

              <div className="h-px flex-1 bg-pink-200"></div>
            </div>

            {/* Facebook */}

            <div className="mt-2 flex justify-center">
  <a
    href="https://www.facebook.com/profile.php?id=100088070547410"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 rounded-full bg-pink-500 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-pink-400"
  >
    <FaFacebookF />
    Visit our Facebook Page
  </a>
</div>

            {/* Small Note */}

            <p className="mt-6 text-center text-sm leading-6 text-slate-500">
              We usually respond within
              <span className="font-semibold text-pink-500">
                {" "}a few minutes{" "}
              </span>
              during clinic hours.
            </p>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
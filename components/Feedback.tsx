"use client";

import { useState, useEffect } from "react";
import { Send } from "lucide-react";
import { db } from "@/lib/firebase";
import { collection, addDoc, onSnapshot, query, orderBy } from "firebase/firestore";

type FeedbackItem = {
  id: string;
  name: string;
  message: string;
};

export default function Feedback() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [feedbacks, setFeedbacks] = useState<FeedbackItem[]>([]);

  // 🔥 Load feedback from Firebase in real-time
  useEffect(() => {
    const q = query(collection(db, "feedback"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setFeedbacks(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<FeedbackItem, "id">),
        }))
      );
    });

    return () => unsubscribe();
  }, []);

  // 🔥 Send feedback to Firebase
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !message) return;

    try {
      console.log("Sending to Firebase...");

      await addDoc(collection(db, "feedback"), {
        name,
        message,
        createdAt: new Date(),
      });

      console.log("Saved to Firebase!");

      setName("");
      setMessage("");
    } catch (error) {
      console.error("Firebase error:", error);
    }
  };

  return (
    <section id="feedback" className="bg-slate-900 py-24 text-white">
      <div className="mx-auto max-w-4xl px-6">

        {/* Title */}
        <h2 className="text-4xl font-bold text-center">
          Client Feedback
        </h2>

        <p className="text-center text-slate-300 mt-4">
          Share your experience with Nurse Mitch
        </p>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl bg-slate-800 p-4 outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <textarea
            placeholder="Your Feedback"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="w-full rounded-xl bg-slate-800 p-4 outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 py-4 font-semibold text-black hover:bg-cyan-400 transition"
          >
            <Send size={18} />
            Submit Feedback
          </button>
        </form>

        {/* DISPLAY FEEDBACK */}
        <div className="mt-10 space-y-4">
          {feedbacks.map((fb) => (
            <div
              key={fb.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <p className="font-semibold text-cyan-400">{fb.name}</p>
              <p className="text-slate-300 mt-1">{fb.message}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
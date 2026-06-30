"use client";

import { useState, useEffect } from "react";
import { Send, Star, BadgeCheck } from "lucide-react";
import { db } from "@/lib/firebase";
import { collection, addDoc, onSnapshot, query, orderBy } from "firebase/firestore";

type FeedbackItem = {
  id: string;
  name: string;
  message: string;
  rating: number;
};

export default function Feedback() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);
  const [feedbacks, setFeedbacks] = useState<FeedbackItem[]>([]);

  // Load Firebase
  useEffect(() => {
    const q = query(collection(db, "feedback"), orderBy("createdAt", "desc"));

    const unsub = onSnapshot(q, (snapshot) => {
      setFeedbacks(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<FeedbackItem, "id">),
        }))
      );
    });

    return () => unsub();
  }, []);

  // Submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !message) return;

    await addDoc(collection(db, "feedback"), {
      name,
      message,
      rating,
      createdAt: new Date(),
    });

    setName("");
    setMessage("");
    setRating(0);
  };

  // ⭐ Average rating
  const avgRating =
    feedbacks.length > 0
      ? (
          feedbacks.reduce((acc, f) => acc + (f.rating || 0), 0) /
          feedbacks.length
        ).toFixed(1)
      : "0.0";

  return (
    <section id="feedback" className="bg-slate-900 py-24 text-white">
      <div className="mx-auto max-w-5xl px-6">

        {/* HEADER */}
        <div className="text-center">
          <h2 className="text-4xl font-bold">Client Testimonials</h2>

          <div className="mt-3 flex items-center justify-center gap-2 text-slate-300">
            <Star className="text-yellow-400 fill-yellow-400" size={18} />
            <span className="text-lg font-semibold">
              {avgRating} / 5
            </span>
            <span>• {feedbacks.length} reviews</span>
          </div>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl bg-slate-800 p-4"
          />

          <textarea
            placeholder="Your Feedback"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="w-full rounded-xl bg-slate-800 p-4"
          />

          {/* Stars */}
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={22}
                onClick={() => setRating(star)}
                className={`cursor-pointer transition ${
                  star <= rating
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-500"
                }`}
              />
            ))}
            <span className="text-sm text-slate-400">
              {rating}/5
            </span>
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 py-4 font-semibold text-black hover:bg-cyan-400"
          >
            <Send size={18} />
            Submit Review
          </button>
        </form>

        {/* TESTIMONIALS GRID */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {feedbacks.map((fb) => {
            const initials = fb.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .toUpperCase();

            return (
              <div
                key={fb.id}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:scale-[1.02] transition"
              >
                {/* HEADER */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 text-black font-bold">
                    {initials}
                  </div>

                  <div>
                    <p className="flex items-center gap-1 font-semibold text-cyan-400">
                      {fb.name}
                      <BadgeCheck size={16} className="text-green-400" />
                    </p>

                    {/* Stars */}
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={14}
                          className={
                            star <= fb.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-500"
                          }
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* MESSAGE */}
                <p className="mt-3 text-slate-300">
                  {fb.message}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
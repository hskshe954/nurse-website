"use client";

import { useState, useEffect } from "react";
import { Send, Star } from "lucide-react";
import { db } from "@/lib/firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";

type FeedbackItem = {
  id: string;
  name: string;
  message: string;
  rating: number;
  createdAt?: {
    seconds: number;
  };
};

export default function Feedback() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);
  const [feedbacks, setFeedbacks] = useState<FeedbackItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const q = query(
      collection(db, "feedback"),
      orderBy("createdAt", "desc")
    );

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !message || rating === 0) {
      alert("Please complete all fields and select a rating.");
      return;
    }

    try {
      setLoading(true);

      await addDoc(collection(db, "feedback"), {
        name,
        message,
        rating,
        createdAt: new Date(),
      });

      setName("");
      setMessage("");
      setRating(0);

      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (err) {
      console.log(err);
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  const avgRating =
    feedbacks.length > 0
      ? (
          feedbacks.reduce((acc, item) => acc + item.rating, 0) /
          feedbacks.length
        ).toFixed(1)
      : "0.0";

  return (
    <section
      id="feedback"
      className="bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="rounded-full bg-pink-100 px-5 py-2 text-sm font-semibold text-pink-500">
            Client Reviews
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-800">
            What Our Clients Say
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Every review helps us continue providing safe, professional,
            and personalized aesthetic treatments.
          </p>

          <div className="mt-6 flex items-center justify-center gap-2">

            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="fill-yellow-400 text-yellow-400"
              />
            ))}

            <span className="ml-2 text-xl font-bold text-slate-700">
              {avgRating}
            </span>

            <span className="text-slate-500">
              ({feedbacks.length} Reviews)
            </span>

          </div>

        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-14 max-w-3xl rounded-[35px] border border-pink-200 bg-white p-8 shadow-xl"
        >

          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-5 w-full rounded-xl border border-pink-200 p-4 outline-none transition focus:border-pink-400"
          />

          <textarea
            rows={5}
            placeholder="Share your experience..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-xl border border-pink-200 p-4 outline-none transition focus:border-pink-400"
          />

          <div className="mt-6 flex items-center gap-2">

            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={30}
                onClick={() => setRating(star)}
                className={`cursor-pointer transition hover:scale-110 ${
                  star <= rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}

            <span className="ml-3 text-slate-600">
              {rating}/5
            </span>

          </div>

          <button
            disabled={loading}
            className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-pink-500 py-4 font-semibold text-white transition hover:bg-pink-400 disabled:opacity-60"
          >
            <Send size={20} />

            {loading ? "Submitting..." : "Submit Review"}
          </button>

          {success && (
            <div className="mt-5 rounded-xl bg-green-100 p-4 text-center font-semibold text-green-600">
              ✅ Thank you! Your review has been submitted.
            </div>
          )}

        </form>

        {/* Reviews */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {feedbacks.length === 0 && (
            <div className="col-span-full rounded-3xl bg-white p-10 text-center shadow-lg">
              <h3 className="text-2xl font-bold text-slate-700">
                No Reviews Yet
              </h3>

              <p className="mt-3 text-slate-500">
                Be the first client to share your experience.
              </p>
            </div>
          )}

          {feedbacks.map((fb) => {

            const initials = fb.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .toUpperCase();

            const date = fb.createdAt
              ? new Date(
                  fb.createdAt.seconds * 1000
                ).toLocaleDateString()
              : "";

            return (
              <div
                key={fb.id}
                className="rounded-[30px] border border-pink-200 bg-white p-7 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-pink-500 text-lg font-bold text-white">
                    {initials}
                  </div>

                  <div>

                    <h3 className="font-bold text-slate-800">
                      {fb.name}
                    </h3>

                    <p className="text-sm text-slate-400">
                      {date}
                    </p>

                  </div>

                </div>

                <div className="mt-5 flex">

                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={18}
                      className={
                        star <= fb.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}

                </div>

                <p className="mt-5 leading-7 text-slate-600">
                  "{fb.message}"
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
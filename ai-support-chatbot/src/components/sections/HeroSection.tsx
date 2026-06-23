"use client";

import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="text-center py-24 px-6 bg-gradient-to-b from-purple-50 to-white">
      <h1 className="text-5xl font-bold">
        AI Business Assistant
      </h1>

      <p className="mt-4 text-gray-600 text-lg">
        Generate business ideas, marketing plans, emails, and reports instantly using AI.
      </p>

      <div className="mt-8 flex gap-4 justify-center">
        <button
          onClick={() => router.push("/demo")}
          className="px-6 py-3 bg-black text-white rounded-xl hover:scale-105 transition"
        >
          Try Demo
        </button>

        <button
          onClick={() => document.getElementById("features")?.scrollIntoView()}
          className="px-6 py-3 border rounded-xl hover:scale-105 transition"
        >
          View Features
        </button>
      </div>
    </section>
  );
}

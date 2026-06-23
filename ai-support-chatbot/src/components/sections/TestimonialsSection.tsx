"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { testimonials } from "@/data/siteData";

const logos = ["TechFlow", "Velocity Labs", "Nexus Co.", "StartupBase", "CloudSoft", "DataBridge"];

// Unique gradient per avatar
const avatarGrads = [
  "from-blue-500 to-indigo-600",
  "from-violet-500 to-purple-600",
  "from-emerald-500 to-teal-600",
  "from-orange-500 to-red-500",
  "from-pink-500 to-rose-600",
  "from-cyan-500 to-blue-600",
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const go = (n: number) =>
    setActive((c) => (c + n + testimonials.length) % testimonials.length);

  const t = testimonials[active];

  return (
    <section
      id="testimonials"
      className="py-28 bg-slate-50 dark:bg-slate-900"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        <SectionHeader
          badge="Customer Stories"
          title="Loved by modern businesses"
          subtitle="Over 2,500 teams trust AI Business Assistant to generate smart marketing, email, and strategy content every day."
        />

        {/* ── Logo strip ─────────────────────── */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {logos.map((logo) => (
            <div
              key={logo}
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-5 py-2.5 text-[12px] font-bold text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600 transition-all shadow-sm"
            >
              {logo}
            </div>
          ))}
        </div>

        {/* ── Featured card ──────────────────── */}
        <div className="mt-14 max-w-3xl mx-auto">
          <div className="relative bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 p-8 sm:p-12 shadow-xl shadow-slate-900/5 dark:shadow-black/30">

            {/* Decorative quote icon */}
            <div className="absolute top-8 right-8 w-12 h-12 text-blue-500/10 dark:text-blue-400/10">
              <Quote className="w-full h-full" aria-hidden="true" />
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1 mb-6" aria-label={`${t.rating} out of 5 stars`}>
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" aria-hidden="true" />
              ))}
            </div>

            {/* Quote text */}
            <blockquote className="text-[17px] sm:text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-medium mb-8">
              &ldquo;{t.content}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4 pt-6 border-t border-slate-100 dark:border-slate-700">
              <div
                className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${avatarGrads[active % avatarGrads.length]} flex items-center justify-center text-white font-bold text-sm shadow-md`}
              >
                {t.avatar}
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-white text-[15px]">{t.name}</p>
                <p className="text-[13px] text-slate-500 dark:text-slate-400">
                  {t.role} ·{" "}
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">{t.company}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => go(-1)}
              className="w-10 h-10 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-300 transition-all shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-1.5" role="tablist">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`Testimonial ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === active
                      ? "w-7 h-2.5 bg-blue-600"
                      : "w-2.5 h-2.5 bg-slate-300 dark:bg-slate-600 hover:bg-blue-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => go(1)}
              className="w-10 h-10 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-300 transition-all shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ── Mini card grid ─────────────────── */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.slice(0, 3).map((item, i) => (
            <div
              key={item.id}
              className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 p-6 shadow-sm card-hover cursor-default"
            >
              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: item.rating }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed mb-5 line-clamp-3">
                &ldquo;{item.content}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-50 dark:border-slate-700">
                <div
                  className={`w-9 h-9 rounded-xl bg-gradient-to-br ${avatarGrads[i % avatarGrads.length]} flex items-center justify-center text-white text-xs font-bold shadow-sm`}
                >
                  {item.avatar}
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-slate-900 dark:text-white">{item.name}</p>
                  <p className="text-[11px] text-slate-400">{item.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

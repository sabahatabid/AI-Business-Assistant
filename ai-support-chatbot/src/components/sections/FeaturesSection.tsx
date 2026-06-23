"use client";

import { Zap, BookOpen, Globe, TrendingUp, BarChart2, Clock, LucideIcon, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { features } from "@/data/siteData";

const iconMap: Record<string, LucideIcon> = { Zap, BookOpen, Globe, TrendingUp, BarChart2, Clock };

// Lighter gradient pairs that look great on white
const iconBgs: Record<string, string> = {
  Zap:       "from-amber-400 to-orange-500",
  BookOpen:  "from-blue-500 to-cyan-500",
  Globe:     "from-emerald-400 to-teal-500",
  TrendingUp:"from-violet-500 to-purple-600",
  BarChart2: "from-rose-400 to-pink-600",
  Clock:     "from-indigo-500 to-blue-600",
};

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="py-28 bg-slate-50 dark:bg-slate-900"
      aria-labelledby="features-heading"
    >
      {/* top divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <SectionHeader
          badge="Powerful Features"
          title="Everything you need to automate support"
          subtitle="From instant responses to deep analytics — every tool your team needs to deliver world-class support at any scale."
        />

        {/* Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            const bg   = iconBgs[feature.icon] ?? feature.color;
            return (
              <div
                key={index}
                className="group relative bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 p-7 card-hover cursor-default"
              >
                {/* Top accent line on hover */}
                <div className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${bg} rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Icon */}
                <div
                  className={`inline-flex w-12 h-12 bg-gradient-to-br ${bg} rounded-2xl items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {Icon && <Icon className="w-6 h-6 text-white" aria-hidden="true" strokeWidth={2} />}
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2.5 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-[14px] text-slate-500 dark:text-slate-400 leading-relaxed mb-5">
                  {feature.description}
                </p>

                <div className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 text-[13px] font-semibold opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-250">
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-14 relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 sm:p-10">
          {/* inner glow */}
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-white/5 rounded-full blur-2xl" />

          <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-1.5">
                Ready to see all features in action?
              </h3>
              <p className="text-blue-200 text-[14px]">
                Start your free 14-day trial — no credit card required.
              </p>
            </div>
            <button
              onClick={() => document.querySelector("#demo")?.scrollIntoView({ behavior: "smooth" })}
              className="shrink-0 inline-flex items-center gap-2 bg-white text-blue-700 font-bold text-sm px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors shadow-lg shadow-blue-900/20"
            >
              Try Live Demo
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

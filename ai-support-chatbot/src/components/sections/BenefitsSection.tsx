"use client";

import { DollarSign, Heart, Rocket, Users, LucideIcon, ArrowRight } from "lucide-react";
import { benefits } from "@/data/siteData";

const iconMap: Record<string, LucideIcon> = { DollarSign, Heart, Rocket, Users };

const statCards = [
  { value: "98.2%", label: "Auto-resolved tickets",  sub: "Industry avg is 40%",      color: "bg-blue-500" },
  { value: "< 1s",  label: "Avg handle time",        sub: "vs 4 hrs industry avg",    color: "bg-indigo-500" },
  { value: "$0.08", label: "Cost per resolution",    sub: "vs $15 human agent avg",   color: "bg-emerald-500" },
  { value: "4.9★",  label: "Customer satisfaction",  sub: "Based on 50,000 reviews",  color: "bg-amber-500" },
];

export default function BenefitsSection() {
  return (
    <section className="py-28 bg-white dark:bg-slate-950" aria-labelledby="benefits-heading">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* ── Left ─────────────────────────── */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800/50 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
              Business Impact
            </div>

            <h2
              id="benefits-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.1]"
            >
              Measurable results from day one
            </h2>
            <p className="text-[16px] text-slate-500 dark:text-slate-400 leading-relaxed mb-10 max-w-md">
              Real numbers from real customers. AI Business Assistant delivers measurable results and polished business content from day one.
            </p>

            <div className="space-y-3">
              {benefits.map((benefit, i) => {
                const Icon = iconMap[benefit.icon];
                return (
                  <div
                    key={i}
                    className="group flex items-start gap-4 p-4 rounded-2xl border border-transparent hover:border-slate-100 dark:hover:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-200"
                  >
                    <div className="w-11 h-11 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                      {Icon && <Icon className="w-5 h-5 text-white" strokeWidth={2.5} aria-hidden="true" />}
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2.5 mb-1">
                        <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                          {benefit.metric}
                        </span>
                        <span className="text-[15px] font-bold text-slate-800 dark:text-slate-200">
                          {benefit.title}
                        </span>
                      </div>
                      <p className="text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => document.querySelector("#pricing")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-10 inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-[14px] hover:gap-3 transition-all"
            >
              View all plans
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* ── Right: Stat cards ─────────────── */}
          <div className="relative">
            {/* Ambient glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-3xl blur-3xl -z-10 scale-90" />

            <div className="grid grid-cols-2 gap-4">
              {statCards.map((s, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 p-6 shadow-sm card-hover"
                >
                  {/* Colored accent */}
                  <div className={`w-9 h-1.5 ${s.color} rounded-full mb-5`} />
                  <div className="text-[28px] font-extrabold text-slate-900 dark:text-white tracking-tight mb-1">
                    {s.value}
                  </div>
                  <div className="text-[13px] font-semibold text-slate-700 dark:text-slate-300 mb-0.5">
                    {s.label}
                  </div>
                  <div className="text-[11px] text-slate-400 dark:text-slate-500">
                    {s.sub}
                  </div>
                </div>
              ))}
            </div>

            {/* Floating customer count badge */}
            <div className="absolute -bottom-5 -left-4 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl px-5 py-3.5 shadow-xl shadow-blue-500/30">
              <div className="text-2xl font-extrabold">500+</div>
              <div className="text-[11px] text-blue-200 font-medium">Happy customers</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

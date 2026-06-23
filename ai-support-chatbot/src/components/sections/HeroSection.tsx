"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle2, Bot, Sparkles, Star, Shield, Zap } from "lucide-react";
import Button from "@/components/ui/Button";
import ChatbotMockup from "@/components/sections/ChatbotMockup";

const trustItems = [
  "No credit card required",
  "14-day free trial",
  "Cancel anytime",
];

const heroStats = [
  { value: "10M+", label: "Messages / mo" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "< 1s",  label: "Response time" },
];

export default function HeroSection() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-950"
      aria-label="Hero"
    >
      {/* ── Background mesh ──────────────────── */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        {/* Soft radials */}
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] bg-blue-400/[0.06] rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-indigo-400/[0.06] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-violet-400/[0.05] rounded-full blur-3xl" />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, #64748b 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Top border line */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full section-card">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 items-center">

          {/* ── Left: Text ────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl lg:max-w-none section-card"
          >

            {/* Social proof pill */}
            <div className="inline-flex items-center gap-3 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-full pl-1.5 pr-4 py-1.5 mb-8 shadow-sm">
              <div className="flex -space-x-1.5">
                {["S", "M", "E", "D"].map((l, i) => (
                  <div
                    key={i}
                    className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 border-2 border-white dark:border-slate-800 flex items-center justify-center text-white text-[9px] font-bold"
                  >
                    {l}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                Trusted by 2,500+ companies
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-6xl font-bold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 mb-6">
              AI Business Assistant
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed mb-9 max-w-xl">
              Generate business ideas, marketing plans, emails, and reports instantly using AI. Build proposals, launch strategies, and customer messaging in a polished SaaS-style workflow.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-9">
              <Button
                size="xl"
                onClick={() => scrollTo("#demo")}
                className="group !rounded-2xl shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/30"
              >
                Try Demo
                <ArrowRight className="w-[18px] h-[18px] group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="secondary"
                size="xl"
                onClick={() => scrollTo("#features")}
                className="group !rounded-2xl"
              >
                View Features
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-3">
              {trustItems.map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-full bg-slate-950 border border-slate-800 px-4 py-2 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-10 pt-8 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {heroStats.map(({ value, label }) => (
                <div key={label}>
                  <div className="text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {value}
                  </div>
                  <div className="text-[12px] text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Mockup ──────────────────── */}
          <div className="relative w-full max-w-[520px] mx-auto lg:mx-0 lg:justify-self-end">

            {/* Glow backdrop */}
            <div className="absolute inset-8 bg-blue-600/15 dark:bg-blue-500/20 blur-3xl rounded-full" />

            {/* Floating badge — top left */}
            <div className="absolute -top-5 -left-3 sm:left-2 z-20 animate-float">
              <div className="glass dark:bg-slate-800/90 rounded-2xl px-3.5 py-2.5 shadow-xl flex items-center gap-2.5">
                <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/40 rounded-xl flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-800 dark:text-slate-100">Ticket Resolved</p>
                  <p className="text-[10px] text-slate-500">Response in 0.4s</p>
                </div>
              </div>
            </div>

            {/* Floating badge — bottom right */}
            <div className="absolute -bottom-5 -right-3 sm:right-2 z-20 animate-float-delayed">
              <div className="glass dark:bg-slate-800/90 rounded-2xl px-3.5 py-2.5 shadow-xl flex items-center gap-2.5">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/40 rounded-xl flex items-center justify-center">
                  <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-800 dark:text-slate-100">AI Active</p>
                  <p className="text-[10px] text-slate-500">3,847 handled today</p>
                </div>
              </div>
            </div>

            {/* Security badge — bottom left */}
            <div className="absolute -bottom-5 left-6 z-20 hidden sm:block">
              <div className="glass dark:bg-slate-800/90 rounded-xl px-3 py-2 shadow-lg flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-blue-600" />
                <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-200">SOC 2 · GDPR</span>
              </div>
            </div>

            <ChatbotMockup />
          </div>

        </div>
      </div>
    </section>
  );
}

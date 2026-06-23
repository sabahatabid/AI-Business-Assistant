"use client";

import { useState } from "react";
import { Check, Zap, ArrowRight, Sparkles } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { pricingPlans } from "@/data/siteData";
import { cn } from "@/lib/utils";

export default function PricingSection() {
  const [annual, setAnnual] = useState(true);

  const scrollToContact = () =>
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="pricing"
      className="py-20 bg-slate-950"
      aria-labelledby="pricing-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="section-card">
          <SectionHeader
            badge="Pricing"
            title="Simple, transparent pricing"
            subtitle="Start free, scale as you grow. No hidden fees, no long-term commitments — just pricing that makes sense for your stage."
          />

          {/* ── Billing toggle ─────────────────── */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <span className={cn("text-[13px] font-semibold transition-colors", !annual ? "text-slate-900 dark:text-white" : "text-slate-400")}>
            Monthly
          </span>
          <button
            onClick={() => setAnnual(!annual)}
            className={cn(
              "relative w-11 h-6 rounded-full transition-colors duration-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
              annual ? "bg-blue-600" : "bg-slate-200 dark:bg-slate-700"
            )}
            role="switch"
            aria-checked={annual}
            aria-label="Toggle annual billing"
          >
            <span className={cn(
              "absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200",
              annual ? "translate-x-5" : "translate-x-0"
            )} />
          </button>
          <span className={cn("flex items-center gap-2 text-[13px] font-semibold transition-colors", annual ? "text-slate-900 dark:text-white" : "text-slate-400")}>
            Annual
            <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-[11px] font-bold px-2 py-0.5 rounded-full">
              Save 20%
            </span>
          </span>
        </div>

        {/* ── Plan cards ─────────────────────── */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, i) => {
            const isHighlighted = plan.highlighted;
            const displayPrice  =
              plan.price === "Custom"
                ? "Custom"
                : annual
                ? `$${Math.round(parseInt(plan.price.slice(1)) * 0.8)}`
                : plan.price;

            return (
              <div
                key={i}
                className={cn(
                  "relative flex flex-col rounded-2xl p-8 transition-all duration-300",
                  isHighlighted
                    ? [
                        "bg-slate-900 border border-purple-500",
                        "shadow-2xl shadow-purple-500/20",
                        "md:-mt-4 md:mb-0",
                      ]
                    : [
                        "bg-white dark:bg-slate-800",
                        "border border-slate-200 dark:border-slate-700",
                        "shadow-sm hover:shadow-lg hover:-translate-y-1",
                      ]
                )}
              >
                {/* Popular badge */}
                {isHighlighted && (
                  <div className="absolute -top-3 inset-x-0 flex justify-center">
                    <span className="inline-flex items-center gap-1.5 bg-purple-500 text-white text-[11px] font-extrabold px-4 py-1.5 rounded-full shadow-lg shadow-purple-500/20">
                      <Zap className="w-3 h-3" />
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Plan name + desc */}
                <div className="mb-7">
                  <h3 className={cn("text-[17px] font-extrabold mb-1.5", isHighlighted ? "text-white" : "text-slate-900 dark:text-white")}>
                    {plan.name}
                  </h3>
                  <p className={cn("text-[13px] leading-relaxed", isHighlighted ? "text-blue-200" : "text-slate-500 dark:text-slate-400")}>
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-end gap-1.5">
                    <span className={cn("text-[52px] font-extrabold tracking-tight leading-none", isHighlighted ? "text-white" : "text-slate-900 dark:text-white")}>
                      {displayPrice}
                    </span>
                    {plan.period && (
                      <span className={cn("text-[13px] mb-2 font-medium", isHighlighted ? "text-blue-200" : "text-slate-400")}>
                        {plan.period}
                        {annual && plan.price !== "Custom" && (
                          <span className="block text-[11px] opacity-75">billed annually</span>
                        )}
                      </span>
                    )}
                  </div>
                </div>

                {/* CTA */}
                <button
                  onClick={scrollToContact}
                  className={cn(
                    "w-full flex items-center justify-center gap-2 font-bold text-[14px] px-5 py-3 rounded-xl transition-all duration-200 mb-8 group",
                    isHighlighted
                      ? "bg-white text-blue-700 hover:bg-blue-50 shadow-lg shadow-blue-900/20 hover:shadow-xl"
                      : "bg-blue-600 text-white hover:bg-blue-500 shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30"
                  )}
                >
                  {plan.name === "Enterprise" && <Sparkles className="w-4 h-4" />}
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>

                {/* Divider */}
                <div className={cn("h-px mb-7", isHighlighted ? "bg-white/15" : "bg-slate-100 dark:bg-slate-700")} />

                {/* Features */}
                <ul className="space-y-3 flex-1">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className={cn(
                        "w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-px",
                        isHighlighted ? "bg-white/20" : "bg-blue-100 dark:bg-blue-900/30"
                      )}>
                        <Check className={cn("w-3 h-3", isHighlighted ? "text-white" : "text-blue-600 dark:text-blue-400")} />
                      </div>
                      <span className={cn("text-[13px] leading-relaxed", isHighlighted ? "text-blue-100" : "text-slate-600 dark:text-slate-400")}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="mt-10 text-center text-[13px] text-slate-400 dark:text-slate-500">
          All plans include a{" "}
          <strong className="text-slate-700 dark:text-slate-300">14-day free trial</strong>.
          No credit card required.{" "}
          <button
            onClick={scrollToContact}
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            Questions? Talk to us →
          </button>
        </p>
      </div>
    </div>
    </section>
  );
}

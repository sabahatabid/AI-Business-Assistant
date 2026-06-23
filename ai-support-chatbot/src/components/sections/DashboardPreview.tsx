"use client";

import { motion } from "framer-motion";
import {
  TrendingUp, TrendingDown, MessageSquare,
  CheckCircle, Star, Clock, ArrowUpRight,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { dashboardStats } from "@/data/siteData";

const weeklyData = [58, 73, 68, 85, 96, 84, 91];
const days       = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const maxVal     = Math.max(...weeklyData);
const statIcons  = [MessageSquare, CheckCircle, Star, Clock];

const recentRows = [
  { name: "Alice Johnson",  query: "Password reset request",      status: "Resolved",    time: "2m",  rating: 5 },
  { name: "Bob Martinez",   query: "Billing inquiry — overcharge", status: "In Progress", time: "5m",  rating: null },
  { name: "Carol Lee",      query: "Track shipment #SH-4521",     status: "Resolved",    time: "8m",  rating: 5 },
  { name: "David Park",     query: "Cancel subscription request", status: "Escalated",   time: "12m", rating: null },
  { name: "Emma Wilson",    query: "API integration help",        status: "Resolved",    time: "18m", rating: 4 },
];

const statusStyle: Record<string, string> = {
  "Resolved":    "bg-emerald-500/15 text-emerald-400",
  "In Progress": "bg-blue-500/15 text-blue-400",
  "Escalated":   "bg-amber-500/15 text-amber-400",
};

export default function DashboardPreview() {
  return (
    <section
      id="dashboard"
      className="py-20 relative overflow-hidden bg-slate-950"
      aria-labelledby="dashboard-heading"
    >
      {/* background decorations */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-card">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
          badge="Analytics Dashboard"
          title="Real-time insights at your fingertips"
          subtitle="Track every conversation, measure satisfaction, and spot trends — all from one powerful dashboard."
          light
        />

        {/* ── KPI Cards ──────────────────────── */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {dashboardStats.map((stat, i) => {
            const Icon = statIcons[i];
            return (
              <div
                key={stat.label}
                className="group relative bg-white/[0.04] hover:bg-white/[0.07] border border-white/[0.08] hover:border-white/[0.14] rounded-2xl p-5 transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-10 h-10 bg-blue-500/15 rounded-xl flex items-center justify-center">
                    <Icon className="w-5 h-5 text-blue-400" aria-hidden="true" />
                  </div>
                  <span
                    className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-1 rounded-lg ${
                      stat.positive ? "bg-emerald-500/15 text-emerald-400" : "bg-red-500/15 text-red-400"
                    }`}
                  >
                    {stat.positive
                      ? <TrendingUp className="w-3 h-3" />
                      : <TrendingDown className="w-3 h-3" />}
                    {stat.change}
                  </span>
                </div>
                <div className="text-[26px] font-extrabold text-white tracking-tight leading-none mb-1.5">
                  {stat.value}
                </div>
                <div className="text-[12px] text-slate-400 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* ── Charts row ─────────────────────── */}
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4">

          {/* Bar chart */}
          <div className="lg:col-span-2 bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6">
            <div className="flex items-center justify-between mb-7">
              <div>
                <h3 className="text-[15px] font-bold text-white">Weekly Conversations</h3>
                <p className="text-[12px] text-slate-400 mt-0.5">Compared to last week</p>
              </div>
              <button className="flex items-center gap-1 text-blue-400 text-[12px] font-semibold hover:text-blue-300 transition-colors">
                Full report <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Bars */}
            <div className="flex items-end gap-2 sm:gap-3 h-40">
              {weeklyData.map((val, i) => (
                <div key={i} className="group flex-1 flex flex-col items-center gap-2">
                  <span className="text-[10px] text-slate-500 group-hover:text-white transition-colors font-medium opacity-0 group-hover:opacity-100">
                    {val}%
                  </span>
                  <div className="w-full relative rounded-t-lg overflow-hidden" style={{ height: `${(val / maxVal) * 100}%` }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600 to-blue-400 group-hover:from-blue-500 group-hover:to-indigo-400 transition-all duration-200 cursor-pointer" />
                  </div>
                  <span className="text-[10px] text-slate-500 group-hover:text-slate-300 transition-colors">{days[i]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Donut chart */}
          <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6">
            <h3 className="text-[15px] font-bold text-white mb-0.5">CSAT Score</h3>
            <p className="text-[12px] text-slate-400 mb-6">Based on user ratings</p>

            <div className="relative flex items-center justify-center mb-7">
              <svg viewBox="0 0 120 120" className="w-36 h-36 -rotate-90" aria-label="94.2% CSAT donut">
                <circle cx="60" cy="60" r="48" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="12" />
                <circle
                  cx="60" cy="60" r="48" fill="none"
                  stroke="url(#donutGrad)"
                  strokeWidth="12"
                  strokeDasharray={`${2 * Math.PI * 48 * 0.942} ${2 * Math.PI * 48 * 0.058}`}
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="donutGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#6366f1" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute text-center">
                <div className="text-[26px] font-extrabold text-white leading-none">94.2%</div>
                <div className="text-[10px] text-slate-400 font-medium mt-1">Satisfaction</div>
              </div>
            </div>

            <div className="space-y-2.5">
              {[
                { label: "Very satisfied", pct: 72, color: "bg-blue-500" },
                { label: "Satisfied",      pct: 22, color: "bg-indigo-400" },
                { label: "Neutral",        pct: 4,  color: "bg-slate-500" },
                { label: "Unsatisfied",    pct: 2,  color: "bg-red-400" },
              ].map(({ label, pct, color }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <div className={`w-2 h-2 rounded-full ${color} shrink-0`} />
                  <div className="flex-1 bg-white/8 rounded-full h-1">
                    <div className={`h-full ${color} rounded-full`} style={{ width: `${pct}%` }} />
                  </div>
                  <span className="text-[11px] text-slate-400 w-7 text-right font-medium">{pct}%</span>
                  <span className="text-[11px] text-slate-500 hidden sm:block w-20 truncate">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Recent conversations table ──────── */}
        <div className="mt-4 bg-white/[0.04] border border-white/[0.08] rounded-2xl overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06]">
            <h3 className="text-[15px] font-bold text-white">Recent Conversations</h3>
            <button className="flex items-center gap-1 text-blue-400 text-[12px] font-semibold hover:text-blue-300 transition-colors">
              View all <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full" aria-label="Recent conversations">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  {["Customer", "Query", "Status", "Time", "Rating"].map((h) => (
                    <th key={h} className="px-6 py-3 text-left text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {recentRows.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-white/[0.04] hover:bg-white/[0.03] transition-colors last:border-0"
                  >
                    <td className="px-6 py-4 text-[13px] font-semibold text-white whitespace-nowrap">
                      {row.name}
                    </td>
                    <td className="px-6 py-4 text-[13px] text-slate-300 max-w-[200px] truncate">
                      {row.query}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`text-[11px] px-2.5 py-1 rounded-full font-semibold ${statusStyle[row.status]}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-[12px] text-slate-400 whitespace-nowrap">
                      {row.time} ago
                    </td>
                    <td className="px-6 py-4">
                      {row.rating ? (
                        <div className="flex items-center gap-0.5">
                          {Array.from({ length: 5 }).map((_, j) => (
                            <Star
                              key={j}
                              className={`w-3 h-3 ${j < row.rating! ? "fill-amber-400 text-amber-400" : "text-slate-700"}`}
                            />
                          ))}
                        </div>
                      ) : (
                        <span className="text-[11px] text-slate-600">Pending</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
          </motion.div>
      </div>
    </section>
  );
}

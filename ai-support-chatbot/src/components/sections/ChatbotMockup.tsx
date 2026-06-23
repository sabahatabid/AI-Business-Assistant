"use client";

import { Bot, User, Send, Phone, Video, Minimize2, MoreHorizontal } from "lucide-react";

const mockMessages = [
  {
    role: "assistant",
    content: "Hi! I'm here to help 24/7. What can I assist you with today? 👋",
    time: "2:30 PM",
  },
  {
    role: "user",
    content: "I need help tracking my recent order",
    time: "2:31 PM",
  },
  {
    role: "assistant",
    content: "Of course! Share your order ID and I'll pull up the details instantly.",
    time: "2:31 PM",
  },
  {
    role: "user",
    content: "It's #ORD-29451",
    time: "2:32 PM",
  },
  {
    role: "assistant",
    content: "Found it! 🚚 Your order is in transit — arriving tomorrow by 6 PM. Tracking details sent to your email.",
    time: "2:32 PM",
  },
];

export default function ChatbotMockup() {
  return (
    <div className="relative w-full">
      {/* Outer shadow ring */}
      <div className="absolute -inset-1 bg-gradient-to-br from-blue-600/20 via-indigo-500/10 to-purple-600/20 rounded-3xl blur-xl" />

      <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl shadow-slate-900/10 dark:shadow-black/40 border border-slate-200/60 dark:border-slate-700/60 overflow-hidden">

        {/* ── Header ─────────────────────────── */}
        <div className="relative bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-600 px-5 py-3.5">
          {/* subtle inner highlight */}
          <div className="absolute inset-x-0 top-0 h-px bg-white/20" />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-9 h-9 bg-white/15 rounded-xl flex items-center justify-center ring-2 ring-white/20">
                  <Bot className="w-5 h-5 text-white" strokeWidth={2} />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-blue-600" />
              </div>
              <div>
                <p className="text-white font-semibold text-[13px] leading-tight">AI Business Assistant</p>
                <p className="text-blue-200 text-[11px]">Always online · AI-powered</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {[
                { icon: Phone,        label: "Call" },
                { icon: Video,        label: "Video" },
                { icon: MoreHorizontal, label: "More" },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  className="w-7 h-7 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-3.5 h-3.5 text-white" strokeWidth={2} />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Messages ───────────────────────── */}
        <div className="px-4 py-5 space-y-4 bg-slate-50 dark:bg-slate-900/60 min-h-[300px] max-h-[360px] overflow-y-auto">
          {mockMessages.map((msg, i) => (
            <div
              key={i}
              className={`flex items-end gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
            >
              {/* Avatar */}
              <div
                className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 ${
                  msg.role === "assistant"
                    ? "bg-gradient-to-br from-blue-500 to-indigo-600 shadow-md shadow-blue-500/20"
                    : "bg-gradient-to-br from-slate-400 to-slate-600"
                }`}
              >
                {msg.role === "assistant"
                  ? <Bot className="w-4 h-4 text-white" strokeWidth={2} />
                  : <User className="w-4 h-4 text-white" strokeWidth={2} />}
              </div>

              {/* Bubble */}
              <div className="max-w-[78%]">
                <div
                  className={`rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed ${
                    msg.role === "user"
                      ? "bg-blue-600 text-white rounded-br-sm shadow-sm shadow-blue-600/20"
                      : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-bl-sm shadow-sm border border-slate-100 dark:border-slate-700"
                  }`}
                >
                  {msg.content}
                </div>
                <p className={`text-[10px] mt-1 ${msg.role === "user" ? "text-right text-slate-400" : "text-slate-400"}`}>
                  {msg.time}
                </p>
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          <div className="flex items-end gap-2.5">
            <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-md shadow-blue-500/20">
              <Bot className="w-4 h-4 text-white" strokeWidth={2} />
            </div>
            <div className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
              <div className="flex items-center gap-1.5">
                <span className="typing-dot w-1.5 h-1.5 bg-blue-500 rounded-full" />
                <span className="typing-dot w-1.5 h-1.5 bg-blue-500 rounded-full" />
                <span className="typing-dot w-1.5 h-1.5 bg-blue-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* ── Input ──────────────────────────── */}
        <div className="px-4 py-3.5 border-t border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800">
          <div className="flex items-center gap-2.5 bg-slate-100 dark:bg-slate-700 rounded-xl px-3.5 py-2.5 ring-1 ring-transparent focus-within:ring-blue-400 focus-within:bg-white dark:focus-within:bg-slate-600 transition-all">
            <input
              type="text"
              placeholder="Ask a question…"
              className="flex-1 bg-transparent text-[13px] text-slate-700 dark:text-slate-200 placeholder-slate-400 outline-none"
              aria-label="Type a message"
              readOnly
            />
            <button
              className="w-8 h-8 bg-blue-600 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors shadow-sm shadow-blue-600/20"
              aria-label="Send message"
            >
              <Send className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
            </button>
          </div>
          <p className="text-center text-[10px] text-slate-400 mt-2">
            Powered by <span className="font-semibold text-blue-500">AI Business Assistant</span> · End-to-end encrypted
          </p>
        </div>
      </div>
    </div>
  );
}

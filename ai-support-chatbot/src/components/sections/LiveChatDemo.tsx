"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect, useCallback } from "react";
import { Send, Bot, User, RefreshCw, Sparkles, Zap } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { faqQuestions, aiResponses, defaultResponse, welcomeMessage } from "@/data/chatData";
import type { Message } from "@/types";

const capabilities = [
  "Generates business strategy content",
  "Creates polished marketing plans",
  "Writes professional customer emails",
  "Delivers structured AI outputs",
  "Supports responsive mobile workflows",
  "Includes polished SaaS visuals",
];

function formatAssistantContent(content: string) {
  const blocks: Array<{ type: "heading" | "list" | "paragraph"; text?: string; items?: string[] }> = [];
  const lines = content.split("\n");
  let currentList: string[] = [];

  const flushList = () => {
    if (currentList.length) {
      blocks.push({ type: "list", items: currentList });
      currentList = [];
    }
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      flushList();
      continue;
    }
    if (line.startsWith("### ")) {
      flushList();
      blocks.push({ type: "heading", text: line.replace("### ", "") });
      continue;
    }
    if (line.startsWith("- ")) {
      currentList.push(line.replace("- ", ""));
      continue;
    }
    flushList();
    blocks.push({ type: "paragraph", text: line });
  }

  flushList();
  return blocks.map((block, index) => {
    if (block.type === "heading") {
      return (
        <h4 key={index} className="text-sm font-semibold text-slate-900 dark:text-slate-100 mt-3 mb-2">
          {block.text}
        </h4>
      );
    }
    if (block.type === "list") {
      return (
        <ul key={index} className="list-disc ml-5 space-y-1 text-[14px] text-slate-700 dark:text-slate-300">
          {block.items?.map((item, itemIndex) => (
            <li key={itemIndex}>{item}</li>
          ))}
        </ul>
      );
    }
    return (
      <p key={index} className="text-[14px] text-slate-700 dark:text-slate-300 leading-relaxed mt-2">
        {block.text}
      </p>
    );
  });
}

export default function LiveChatDemo() {
  const [messages, setMessages] = useState<Message[]>([
    { id: "welcome", content: welcomeMessage, role: "assistant", timestamp: new Date() },
  ]);
  const [input, setInput]       = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const endRef  = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollDown = useCallback(() =>
    endRef.current?.scrollIntoView({ behavior: "smooth" }), []);

  useEffect(() => {
    if (messages.length > 1) {
      scrollDown();
    }
  }, [messages, scrollDown]);

  const send = useCallback(async (text: string) => {
    if (!text.trim() || isTyping) return;

    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      content: text.trim(),
      role: "user",
      timestamp: new Date(),
    }]);
    setInput("");
    setIsTyping(true);

    await new Promise(r => setTimeout(r, 900 + Math.random() * 700));

    const reply =
      aiResponses[text.trim()] ??
      defaultResponse;

    setMessages(prev => [...prev, {
      id: (Date.now() + 1).toString(),
      content: reply,
      role: "assistant",
      timestamp: new Date(),
    }]);
    setIsTyping(false);
  }, [isTyping]);

  const reset = () => {
    setMessages([{ id: "welcome", content: welcomeMessage, role: "assistant", timestamp: new Date() }]);
    setIsTyping(false);
    setInput("");
    inputRef.current?.focus();
  };

  const fmt = (d: Date) => d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <section
      id="demo"
      className="py-20 bg-slate-950"
      aria-labelledby="demo-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-card">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
          badge="Live Demo"
          title="Try the AI business assistant"
          subtitle="Use example prompts to generate marketing plans, business ideas, emails, and reports in real time."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* ── Chat window ────────────────────── */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl shadow-slate-900/5 overflow-hidden">

              {/* Header */}
              <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-4 flex items-center justify-between">
                <div className="absolute inset-x-0 top-0 h-px bg-white/20" />
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center ring-2 ring-white/20">
                      <Bot className="w-5 h-5 text-white" strokeWidth={2} />
                    </div>
                    <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-blue-600" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-[14px]">AI Business Assistant</p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                      <span className="text-blue-200 text-[11px]">Online · AI-powered</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={reset}
                  className="flex items-center gap-1.5 text-white/80 hover:text-white text-[12px] font-medium bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg transition-all"
                  aria-label="Reset chat"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  Reset
                </button>
              </div>

              {/* Messages */}
              <div
                className="h-[420px] overflow-y-auto px-5 py-5 space-y-4 bg-slate-50/50 dark:bg-slate-900/40"
                role="log"
                aria-live="polite"
                aria-label="Chat messages"
              >
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex items-end gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                  >
                    <div className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 ${
                      msg.role === "assistant"
                        ? "bg-gradient-to-br from-blue-500 to-indigo-600 shadow-md shadow-blue-500/25"
                        : "bg-gradient-to-br from-slate-400 to-slate-600"
                    }`}>
                      {msg.role === "assistant"
                        ? <Bot className="w-3.5 h-3.5 text-white" strokeWidth={2} />
                        : <User className="w-3.5 h-3.5 text-white" strokeWidth={2} />}
                    </div>
                    <div className="max-w-[80%]">
                      <div className={`rounded-2xl px-4 py-3 text-[13px] leading-relaxed ${
                        msg.role === "user"
                          ? "bg-blue-600 text-white rounded-br-sm shadow-sm shadow-blue-600/20"
                          : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-bl-sm shadow-sm border border-slate-100 dark:border-slate-700"
                      }`}>
                        {msg.role === "assistant" ? formatAssistantContent(msg.content) : msg.content}
                      </div>
                      <p className={`text-[10px] mt-1 text-slate-400 ${msg.role === "user" ? "text-right" : ""}`}>
                        {fmt(msg.timestamp)}
                      </p>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-end gap-2.5" role="status" aria-label="AI is generating a response">
                    <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-md shadow-blue-500/25">
                      <Bot className="w-3.5 h-3.5 text-white" strokeWidth={2} />
                    </div>
                    <div className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                      <div className="flex items-center gap-3">
                        <span className="text-[12px] uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400 font-bold">
                          Thinking...
                        </span>
                        <div className="flex items-center gap-1">
                          <span className="typing-dot w-2 h-2 bg-blue-500 rounded-full" />
                          <span className="typing-dot w-2 h-2 bg-blue-500 rounded-full" />
                          <span className="typing-dot w-2 h-2 bg-blue-500 rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={endRef} />
              </div>

              {/* Quick actions */}
              <div className="px-4 py-3 border-t border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800">
                <div className="flex items-center gap-2 mb-2.5">
                  <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                  <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                    Quick questions
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {faqQuestions.slice(0, 4).map((q) => (
                    <button
                      key={q}
                      onClick={() => send(q)}
                      disabled={isTyping}
                      className="text-[11px] bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-3 py-1.5 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 border border-transparent hover:border-blue-200 dark:hover:border-blue-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input */}
              <form
                onSubmit={(e) => { e.preventDefault(); send(input); }}
                className="px-4 py-3.5 border-t border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50"
              >
                <div className="flex items-center gap-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-400/20 transition-all shadow-sm">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask anything about your account, billing, or orders…"
                    disabled={isTyping}
                    className="flex-1 bg-transparent text-[13px] text-slate-700 dark:text-slate-200 placeholder-slate-400 outline-none disabled:opacity-50"
                    aria-label="Chat input"
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || isTyping}
                    className="w-8 h-8 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-200 dark:disabled:bg-slate-700 rounded-lg flex items-center justify-center transition-colors shadow-sm"
                    aria-label="Send"
                  >
                    <Send className="w-3.5 h-3.5 text-white disabled:text-slate-400" strokeWidth={2.5} />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* ── Side panel ─────────────────────── */}
          <div className="lg:col-span-2 space-y-4">

            {/* Try asking */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 p-6 shadow-sm">
              <h3 className="text-[14px] font-bold text-slate-900 dark:text-white mb-4">
                Try asking about:
              </h3>
              <div className="space-y-1.5">
                {faqQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => send(q)}
                    disabled={isTyping}
                    className="w-full text-left text-[13px] text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-700/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-400 px-4 py-2.5 rounded-xl border border-transparent hover:border-blue-200 dark:hover:border-blue-800 transition-all disabled:opacity-50"
                  >
                    <span className="text-blue-400 mr-2">→</span>{q}
                  </button>
                ))}
              </div>
            </div>

            {/* Capabilities */}
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white">
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-4 h-4 text-amber-300" />
                <span className="text-[14px] font-bold">AI Capabilities</span>
              </div>
              <ul className="space-y-2.5">
                {capabilities.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-[13px] text-blue-100">
                    <span className="w-1.5 h-1.5 bg-blue-300 rounded-full shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

          </motion.div>
      </div>
    </section>
  );
}

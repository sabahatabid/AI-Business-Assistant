"use client";

import { useState, useEffect } from "react";
import { Menu, X, Bot, Sun, Moon, ChevronDown } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { navItems } from "@/data/siteData";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl border-b border-slate-200/60 dark:border-slate-700/60 shadow-sm"
          : "bg-transparent"
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">

          {/* ── Logo ───────────────────────────────── */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-2.5 group shrink-0"
            aria-label="SupportAI Home"
          >
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-blue-600 rounded-xl rotate-3 group-hover:rotate-6 transition-transform" />
              <div className="relative w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-md shadow-blue-500/30">
                <Bot className="w-4.5 h-4.5 text-white" strokeWidth={2.5} />
              </div>
            </div>
            <span className="text-[17px] font-bold tracking-tight text-slate-900 dark:text-white">
              Support<span className="text-blue-600">AI</span>
            </span>
          </a>

          {/* ── Desktop Nav ──────────────────────────── */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="px-4 py-2 text-[13.5px] font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 rounded-lg transition-all duration-150"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* ── Right Actions ───────────────────────── */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="w-8 h-8 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark"
                ? <Sun className="w-4 h-4" />
                : <Moon className="w-4 h-4" />}
            </button>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-2 ml-1">
              <button
                onClick={() => scrollTo("#demo")}
                className="px-4 py-2 text-[13.5px] font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-600 transition-colors"
              >
                Sign in
              </button>
              <Button
                size="sm"
                onClick={() => scrollTo("#pricing")}
                className="!rounded-xl text-[13px] font-semibold shadow-blue-500/20 shadow-lg"
              >
                Start free trial
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-9 h-9 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu ────────────────────────────── */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300",
          "bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl",
          "border-t border-slate-100 dark:border-slate-800",
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="max-w-7xl mx-auto px-5 py-4 space-y-0.5">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="w-full text-left px-4 py-3 text-[14px] font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 rounded-xl transition-all"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 mt-2 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
            <Button variant="secondary" size="sm" className="w-full justify-center">
              Sign in
            </Button>
            <Button size="sm" className="w-full justify-center">
              Start free trial
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

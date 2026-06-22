"use client";

import { useState } from "react";
import {
  Mail, Phone, MapPin, Send,
  CheckCircle2, Building2, MessageSquare,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

interface FormData {
  name: string; email: string; company: string;
  phone: string; subject: string; message: string;
}
const empty: FormData = { name:"", email:"", company:"", phone:"", subject:"", message:"" };

const contactInfo = [
  { icon: Mail,   title: "Email",  sub: "Response within 2 hours",  value: "hello@supportai.io",     grad: "from-blue-500 to-blue-600" },
  { icon: Phone,  title: "Phone",  sub: "Mon–Fri · 9am–6pm PST",    value: "+1 (555) 123-4567",      grad: "from-indigo-500 to-purple-600" },
  { icon: MapPin, title: "Office", sub: "Headquarters",              value: "San Francisco, CA 94105",grad: "from-emerald-500 to-teal-600" },
];

const guarantees = [
  "Live in 48 hours guaranteed",
  "Dedicated onboarding support",
  "No long-term contracts",
  "99.9% uptime SLA",
  "GDPR & SOC 2 compliant",
];

const inputClass =
  "w-full bg-slate-50 dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600 rounded-xl px-4 py-2.5 text-[14px] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all";

export default function ContactSection() {
  const [form, setForm]           = useState<FormData>(empty);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1400));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-28 bg-slate-50 dark:bg-slate-900"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        <SectionHeader
          badge="Get in Touch"
          title="Ready to transform your support?"
          subtitle="Talk to our team — we'll help you pick the right plan and get you live in 24 hours."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

          {/* ── Left ─────────────────────────── */}
          <div className="lg:col-span-2 space-y-4">

            {contactInfo.map(({ icon: Icon, title, sub, value, grad }) => (
              <div
                key={title}
                className="flex items-start gap-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`w-11 h-11 bg-gradient-to-br ${grad} rounded-xl flex items-center justify-center shrink-0 shadow-md`}>
                  <Icon className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-[13px] font-bold text-slate-900 dark:text-white mb-0.5">{title}</p>
                  <p className="text-[11px] text-slate-400 mb-1">{sub}</p>
                  <p className="text-[13px] text-blue-600 dark:text-blue-400 font-semibold">{value}</p>
                </div>
              </div>
            ))}

            {/* Guarantee card */}
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white">
              <div className="absolute -top-8 -right-8 w-36 h-36 bg-white/5 rounded-full blur-2xl" />
              <h3 className="text-[15px] font-bold mb-4">Why businesses choose us</h3>
              <ul className="space-y-2.5">
                {guarantees.map((g) => (
                  <li key={g} className="flex items-center gap-2.5 text-[13px] text-blue-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                    {g}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Form ─────────────────────────── */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-lg p-8">

              {submitted ? (
                <div className="text-center py-14">
                  <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-[20px] font-bold text-slate-900 dark:text-white mb-2">
                    Message received!
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-[14px] mb-7 max-w-xs mx-auto">
                    Thanks for reaching out. We&apos;ll get back to you within 2 business hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm(empty); }}
                    className="text-blue-600 dark:text-blue-400 font-semibold text-[13px] hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} noValidate aria-label="Contact form">
                  {/* Form header */}
                  <div className="flex items-center gap-3 mb-7 pb-5 border-b border-slate-100 dark:border-slate-700">
                    <div className="w-9 h-9 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                      <MessageSquare className="w-4.5 h-4.5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-[15px] font-bold text-slate-900 dark:text-white">Send us a message</p>
                      <p className="text-[12px] text-slate-400">We respond within 2 business hours</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-[12px] font-semibold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wide">
                        Full Name <span className="text-red-500 normal-case">*</span>
                      </label>
                      <input type="text" id="name" name="name" value={form.name} onChange={handle} required placeholder="Jane Smith" className={inputClass} />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-[12px] font-semibold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wide">
                        Work Email <span className="text-red-500 normal-case">*</span>
                      </label>
                      <input type="email" id="email" name="email" value={form.email} onChange={handle} required placeholder="jane@company.com" className={inputClass} />
                    </div>

                    {/* Company */}
                    <div>
                      <label htmlFor="company" className="block text-[12px] font-semibold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wide">
                        Company
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" aria-hidden="true" />
                        <input type="text" id="company" name="company" value={form.company} onChange={handle} placeholder="Acme Inc." className={inputClass + " pl-10"} />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-[12px] font-semibold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wide">
                        Phone
                      </label>
                      <input type="tel" id="phone" name="phone" value={form.phone} onChange={handle} placeholder="+1 (555) 000-0000" className={inputClass} />
                    </div>

                    {/* Inquiry type */}
                    <div className="sm:col-span-2">
                      <label htmlFor="subject" className="block text-[12px] font-semibold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wide">
                        Inquiry Type <span className="text-red-500 normal-case">*</span>
                      </label>
                      <select id="subject" name="subject" value={form.subject} onChange={handle} required className={inputClass}>
                        <option value="">Select inquiry type</option>
                        <option value="demo">Request a Demo</option>
                        <option value="pricing">Pricing Questions</option>
                        <option value="enterprise">Enterprise Inquiry</option>
                        <option value="technical">Technical Support</option>
                        <option value="partnership">Partnership</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="block text-[12px] font-semibold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wide">
                        Message <span className="text-red-500 normal-case">*</span>
                      </label>
                      <textarea
                        id="message" name="message" value={form.message} onChange={handle} required rows={4}
                        placeholder="Tell us about your business and support goals…"
                        className={inputClass + " resize-none"}
                      />
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={loading}
                      className="w-full sm:w-auto group shadow-lg shadow-blue-500/20"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </>
                      )}
                    </Button>
                    <p className="text-[12px] text-slate-400 text-center sm:text-left">
                      By submitting you agree to our{" "}
                      <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Privacy Policy</a>
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

import { Bot, Link2, GitBranch, Mail, Phone, MapPin, Share2 } from "lucide-react";

const footerLinks = {
  Product:   ["Features", "Pricing", "Demo", "Changelog", "Roadmap"],
  Company:   ["About", "Blog", "Careers", "Press", "Partners"],
  Resources: ["Documentation", "API Reference", "Help Center", "Community", "Status"],
  Legal:     ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR", "Security"],
};

const socials = [
  { icon: Share2,    label: "X / Twitter" },
  { icon: Link2,     label: "LinkedIn" },
  { icon: GitBranch, label: "GitHub" },
];

const contacts = [
  { icon: Mail,   value: "hello@supportai.io" },
  { icon: Phone,  value: "+1 (555) 123-4567" },
  { icon: MapPin, value: "San Francisco, CA 94105" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400" role="contentinfo">

      {/* top gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* ── Main grid ──────────────────────── */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">

          {/* Brand column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-[17px] font-bold tracking-tight text-white">
                Support<span className="text-blue-400">AI</span>
              </span>
            </div>

            <p className="text-[13px] leading-relaxed text-slate-400 max-w-xs">
              The most advanced AI customer support platform. Automate support, delight customers, and grow faster.
            </p>

            <ul className="space-y-2.5">
              {contacts.map(({ icon: Icon, value }) => (
                <li key={value} className="flex items-center gap-2.5 text-[13px]">
                  <Icon className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>{value}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2.5">
              {socials.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-8 h-8 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-150"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([cat, links]) => (
            <div key={cat}>
              <h3 className="text-[12px] font-semibold text-white uppercase tracking-widest mb-5">
                {cat}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[13px] text-slate-400 hover:text-white transition-colors duration-150"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom bar ─────────────────────── */}
        <div className="py-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-slate-500">
            © {new Date().getFullYear()} SupportAI, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-[12px] text-slate-500">All systems operational</span>
          </div>
        </div>

      </div>
    </footer>
  );
}


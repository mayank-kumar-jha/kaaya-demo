"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { motion, AnimatePresence } from "motion/react";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Architecture", href: "#architecture" },
      { label: "Tech Stack", href: "#tech-stack" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "GitHub", href: "https://github.com/mayank-kumar-jha/sora.ai", external: true },
      { label: "Documentation", href: "https://github.com/mayank-kumar-jha/sora.ai#readme", external: true },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "GitHub Profile", href: "https://github.com/mayank-kumar-jha", external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04]">
      {/* CTA Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-violet-600/8 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 py-20 text-center">
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-violet-400 mb-4">
              Open Source
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Experience the Future of{" "}
              <span className="gradient-text">AI Assistants</span>
            </h2>
            <p className="text-base text-[#9ca3af] max-w-xl mx-auto mb-8">
              Kaaya is open source and ready for you. Clone the repo, spin up the backend,
              and start orchestrating your digital world.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://github.com/mayank-kumar-jha/sora.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-violet-700 to-violet-600 text-white font-semibold text-sm shadow-xl shadow-violet-500/25 hover:shadow-violet-500/40 transition-all duration-500 hover:from-violet-600 hover:to-fuchsia-600"
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  View on GitHub
                </span>
              </a>
              <LetsTalkButton />
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Footer links */}
      <div className="border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                  <span className="text-white font-bold text-xs">K</span>
                </div>
                <span className="gradient-text font-bold text-lg">Kaaya AI</span>
              </div>
              <p className="text-xs text-[#9ca3af] leading-relaxed">
                The intelligent hyper-assistant.
                <br />
                Built by Mayank Kumar Jha.
              </p>
            </div>

            {/* Link columns */}
            {footerLinks.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-semibold text-white/60 tracking-wider uppercase mb-4">
                  {col.title}
                </h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        {...("external" in link && link.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="text-sm text-[#9ca3af] hover:text-violet-300 transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#9ca3af]">
              © {new Date().getFullYear()} Kaaya AI. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-xs text-[#9ca3af]">
              <span>Internal Codename:</span>
              <span className="font-mono text-violet-400">Sora</span>
              <span>·</span>
              <span className="font-mono">v2.0.0</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function LetsTalkButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white/80 border border-white/10 hover:border-violet-500/40 hover:bg-violet-500/8 transition-all duration-300"
      >
        Let&apos;s Talk
        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />

            {/* Card */}
            <motion.div
              initial={{ opacity: 0, y: -6, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.97 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 z-50 w-64 rounded-2xl border border-white/10 bg-[#0d0d14]/95 backdrop-blur-xl shadow-2xl shadow-black/60 p-5"
            >
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-violet-400 mb-4">
                Contact
              </p>

              {/* Phone */}
              <a
                href="tel:9899177436"
                className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-violet-500/30 hover:bg-violet-500/5 transition-all duration-200 mb-2 group"
              >
                <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-[#9ca3af] uppercase tracking-wide">Phone</p>
                  <p className="text-sm font-semibold text-white group-hover:text-violet-300 transition-colors">+91 98991 77436</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:yash91597p@gmail.com"
                className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-violet-500/30 hover:bg-violet-500/5 transition-all duration-200 group"
              >
                <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-[#9ca3af] uppercase tracking-wide">Email</p>
                  <p className="text-sm font-semibold text-white group-hover:text-violet-300 transition-colors truncate">yash91597p@gmail.com</p>
                </div>
              </a>

              {/* Arrow */}
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-[#0d0d14] border-r border-b border-white/10" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

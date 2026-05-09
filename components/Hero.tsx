"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { personal } from "@/lib/data";

const quickLook = [
  { key: "N", label: "NYXUS", href: "#nyxus" },
  { key: "H", label: "HORUS", href: "#horus" },
  { key: "S", label: "SYCL", href: "#projects" },
];

export function Hero() {
  useEffect(() => {
    const map: Record<string, string> = { n: "#nyxus", h: "#horus", s: "#projects" };
    const handler = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const href = map[e.key.toLowerCase()];
      if (href) document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center px-6 pt-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium"
            style={{
              borderColor: "rgba(16, 185, 129, 0.4)",
              background: "rgba(16, 185, 129, 0.08)",
              color: "rgb(5, 150, 105)",
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Open to internships and junior roles
          </div>

          <h1
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
            style={{ color: "var(--text)" }}
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">{personal.name}</span>.
          </h1>

          <p
            className="mt-6 max-w-2xl text-xl leading-relaxed sm:text-2xl"
            style={{ color: "var(--text-soft)" }}
          >
            {personal.role} at {personal.university}. {personal.tagline}
          </p>

          <p className="mt-4 text-base" style={{ color: "var(--text-muted)" }}>
            AI engineering · Cybersecurity 
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#nyxus"
              className="accent-bg rounded-full px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition-transform hover:scale-[1.03]"
            >
              See my work
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="glass rounded-full px-6 py-2.5 text-sm font-medium transition-transform hover:scale-[1.03]"
              style={{ color: "var(--text)" }}
            >
              GitHub →
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-2 py-2.5 text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: "var(--text-muted)" }}
            >
              Resume ↗
            </a>
            <a
              href="#contact"
              className="px-2 py-2.5 text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: "var(--text-muted)" }}
            >
              Contact
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
            className="mt-5 flex flex-wrap items-center gap-2"
          >
            <span
              className="mr-1 font-mono text-[11px] uppercase tracking-widest"
              style={{ color: "var(--text-faint)" }}
            >
              ⌘ quick look
            </span>
            {quickLook.map(({ key, label, href }) => (
              <a
                key={key}
                href={href}
                className="group flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-all hover:-translate-y-0.5 hover:border-fuchsia-500/40"
                style={{
                  borderColor: "var(--border-soft)",
                  background: "rgba(255,255,255,0.03)",
                  color: "var(--text-soft)",
                  boxShadow: "0 2px 0 var(--border-soft)",
                }}
              >
                <kbd
                  className="rounded px-1 font-mono text-[10px] leading-5 transition-colors group-hover:bg-fuchsia-500/10 group-hover:text-fuchsia-400"
                  style={{
                    background: "var(--border-soft)",
                    color: "var(--text-faint)",
                  }}
                >
                  {key}
                </kbd>
                {label}
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] md:block"
          style={{ color: "var(--text-faint)" }}
        >
          Scroll
          <span className="mx-auto mt-3 block h-8 w-px bg-linear-to-b from-fuchsia-500/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}

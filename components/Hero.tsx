"use client";

import { motion } from "framer-motion";
import { personal } from "@/lib/data";

export function Hero() {
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
            className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
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
            AI engineering · Cybersecurity · Full-stack development
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
              href="#contact"
              className="px-2 py-2.5 text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: "var(--text-muted)" }}
            >
              Contact
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] md:block"
          style={{ color: "var(--text-faint)" }}
        >
          Scroll
          <span className="mx-auto mt-3 block h-8 w-px bg-gradient-to-b from-fuchsia-500/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}

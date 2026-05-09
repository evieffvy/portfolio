"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { SectionTitle } from "./SectionTitle";

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="04 — Projects"
          title="Other things I've built"
          description="GPU parallel computing, classical ML from scratch, and frontend builds. Detailed write-ups and code on GitHub."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.slug}
              href={p.demo ?? p.repo}
              target="_blank"
              rel="noreferrer"
              className="glass glass-hover group flex flex-col gap-4 rounded-2xl p-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.05 }}
            >
              <div className="flex items-start justify-between gap-3">
                <h3
                  className="font-semibold transition-colors group-hover:text-(--accent-strong)"
                  style={{ color: "var(--text)" }}
                >
                  {p.title}
                </h3>
                <span
                  aria-hidden
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  style={{ color: "var(--text-faint)" }}
                >
                  ↗
                </span>
              </div>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                {p.blurb}
              </p>
              <p className="text-xs leading-relaxed" style={{ color: "var(--text-faint)" }}>
                {p.description}
              </p>
              <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="glass-soft rounded-full px-2 py-0.5 text-[10px]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

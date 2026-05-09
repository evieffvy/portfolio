"use client";

import { motion } from "framer-motion";
import { personal } from "@/lib/data";
import { SectionTitle } from "./SectionTitle";

export function About() {
  return (
    <section id="about" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="01 — About" title="Builder of intelligent + secure systems" />
        <div className="grid gap-12 lg:grid-cols-3">
          <motion.div
            className="space-y-5 text-base leading-relaxed lg:col-span-2"
            style={{ color: "var(--text-soft)" }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            {personal.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </motion.div>

          <motion.aside
            className="space-y-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-6">
              <p
                className="mb-4 text-xs font-medium uppercase tracking-[0.2em]"
                style={{ color: "var(--text-faint)" }}
              >
                Languages
              </p>
              <ul className="space-y-3">
                {personal.languages.map((l) => (
                  <li key={l.name} className="flex items-center justify-between text-sm">
                    <span className="font-medium" style={{ color: "var(--text)" }}>
                      {l.name}
                    </span>
                    <span style={{ color: "var(--text-muted)" }}>{l.level}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass rounded-2xl p-6">
              <p
                className="mb-4 text-xs font-medium uppercase tracking-[0.2em]"
                style={{ color: "var(--text-faint)" }}
              >
                Currently
              </p>
              <ul className="space-y-2.5 text-sm" style={{ color: "var(--text-soft)" }}>
                {[
                  "Final year Computer Engineering @ ABAC",
                  "Building NYXUS — security-first RAG chatbot",
                  "Based in Bangkok, Thailand",
                  "Open to AI / Security roles",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-linear-to-r from-fuchsia-400 to-purple-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { SectionTitle } from "./SectionTitle";

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="05 — Skills"
          title="Languages, tools, and topics"
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              className="glass rounded-2xl p-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.05 }}
            >
              <div className="mb-4 flex items-center gap-2">
                <span className="h-3 w-0.5 rounded-full bg-linear-to-b from-fuchsia-400 to-purple-500" />
                <h3
                  className="text-xs font-semibold uppercase tracking-[0.2em]"
                  style={{ color: "var(--accent-strong)" }}
                >
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="glass-soft rounded-full px-3 py-1 text-xs transition-colors hover:border-fuchsia-500/30 cursor-default"
                    style={{ color: "var(--text-soft)" }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

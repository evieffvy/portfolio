"use client";

import { motion } from "framer-motion";
import { personal, education } from "@/lib/data";

const links = [
  { label: "Email", value: personal.email, href: `mailto:${personal.email}` },
  { label: "GitHub", value: "@evieffvy", href: personal.github },
  { label: "LinkedIn", value: "Kansinee Khuttiya", href: personal.linkedin },
  { label: "Linktree", value: "linktr.ee/evieffvy", href: personal.linktree },
];

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <motion.div
          className="glass rounded-3xl p-10 text-center sm:p-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p
            className="mb-4 text-xs font-medium uppercase tracking-[0.25em]"
            style={{ color: "var(--accent-strong)" }}
          >
            06 — Contact
          </p>
          <h2
            className="text-3xl font-bold tracking-tight sm:text-5xl"
            style={{ color: "var(--text)" }}
          >
            Let&apos;s build something.
          </h2>
          <p
            className="mx-auto mt-4 max-w-xl text-base leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            I&apos;m looking for internships and junior roles in AI, security,
            and full-stack engineering. If you have a role that fits — or just
            want to chat about RAG, prompt injection, or parallel computing —
            reach out.
          </p>

          <a
            href={`mailto:${personal.email}`}
            className="accent-bg mt-10 inline-block rounded-full px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition-transform hover:scale-[1.03]"
          >
            {personal.email}
          </a>

          <div
            className="mt-12 grid gap-6 border-t pt-10 text-left sm:grid-cols-2"
            style={{ borderColor: "var(--border-soft)" }}
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                className="glass-soft glass-hover group flex items-center justify-between rounded-xl px-5 py-4"
              >
                <div>
                  <p
                    className="text-[10px] font-medium uppercase tracking-[0.2em]"
                    style={{ color: "var(--text-faint)" }}
                  >
                    {l.label}
                  </p>
                  <p className="mt-1 text-sm" style={{ color: "var(--text)" }}>
                    {l.value}
                  </p>
                </div>
                <span
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  style={{ color: "var(--text-faint)" }}
                >
                  →
                </span>
              </a>
            ))}
          </div>
        </motion.div>

        <p className="mt-10 text-center text-xs" style={{ color: "var(--text-faint)" }}>
          {education.degree} · {education.school} · {education.location} · {education.graduation}
        </p>
      </div>
    </section>
  );
}

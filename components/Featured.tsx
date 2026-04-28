"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { featured } from "@/lib/data";
import { SectionTitle } from "./SectionTitle";

export function Featured() {
  return (
    <section id="nyxus" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="02 — Featured"
          title={`${featured.title} — ${featured.blurb}`}
          description={featured.description}
        />

        <motion.div
          className="glass overflow-hidden rounded-3xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {featured.cover ? (
            <div className="relative aspect-[16/9] w-full overflow-hidden border-b" style={{ borderColor: "var(--border-soft)" }}>
              <Image
                src={featured.cover}
                alt={`${featured.title} screenshot — chat UI with RAG citations and PII redaction`}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1152px"
                className="object-cover object-top"
              />
            </div>
          ) : null}

          <div className="grid gap-10 p-8 lg:grid-cols-3 lg:p-12">
            <div className="lg:col-span-2">
              <h3
                className="mb-5 text-sm font-medium uppercase tracking-[0.2em]"
                style={{ color: "var(--accent-strong)" }}
              >
                What it does
              </h3>
              <ul className="space-y-3 text-sm leading-relaxed" style={{ color: "var(--text-soft)" }}>
                {featured.highlights?.map((h, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-fuchsia-400 to-purple-400" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <div>
                <h3
                  className="mb-4 text-sm font-medium uppercase tracking-[0.2em]"
                  style={{ color: "var(--accent-strong)" }}
                >
                  Tech
                </h3>
                <div className="flex flex-wrap gap-2">
                  {featured.tech.map((t) => (
                    <span
                      key={t}
                      className="glass-soft rounded-full px-3 py-1 text-xs"
                      style={{ color: "var(--text-soft)" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-2">
                {featured.demo ? (
                  <a
                    href={featured.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="accent-bg rounded-full px-5 py-2.5 text-center text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition-transform hover:scale-[1.03]"
                  >
                    Live demo →
                  </a>
                ) : null}
                <a
                  href={featured.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-soft rounded-full px-5 py-2.5 text-center text-sm font-medium transition-transform hover:scale-[1.03]"
                  style={{ color: "var(--text)" }}
                >
                  Source code →
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-6 grid gap-4 sm:grid-cols-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
        >
          {[
            { src: "/projects/security-scan.png", alt: "OWASP code scanner" },
            { src: "/projects/audit.png", alt: "Audit log table" },
            { src: "/projects/login.png", alt: "Login screen" },
          ].map((s) => (
            <div
              key={s.src}
              className="glass relative aspect-video overflow-hidden rounded-xl"
            >
              <Image
                src={s.src}
                alt={s.alt}
                fill
                sizes="(max-width: 768px) 100vw, 384px"
                className="object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/lib/data";
import { SectionTitle } from "./SectionTitle";

type GalleryItem = { src: string; alt: string };

export function Featured({
  project,
  eyebrow,
  sectionId,
  coverAlt,
  gallery,
}: {
  project: Project;
  eyebrow: string;
  sectionId: string;
  coverAlt?: string;
  gallery?: GalleryItem[];
}) {
  return (
    <section id={sectionId} className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow={eyebrow}
          title={project.title}
          subtitle={project.blurb}
          description={project.description}
        />

        <motion.div
          className="glass overflow-hidden rounded-3xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {project.cover ? (
            <div className="relative aspect-video w-full overflow-hidden border-b" style={{ borderColor: "var(--border-soft)" }}>
              <Image
                src={project.cover}
                alt={coverAlt ?? `${project.title} screenshot`}
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
                {project.highlights?.map((h, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-linear-to-r from-fuchsia-400 to-purple-400" />
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
                  {project.tech.map((t) => (
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
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="accent-bg rounded-full px-5 py-2.5 text-center text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition-transform hover:scale-[1.03]"
                  >
                    Live demo →
                  </a>
                ) : null}
                <a
                  href={project.repo}
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

        {gallery && gallery.length > 0 ? (
          <motion.div
            className="mt-6 grid gap-4 sm:grid-cols-3"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          >
            {gallery.map((s) => (
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
        ) : null}
      </div>
    </section>
  );
}

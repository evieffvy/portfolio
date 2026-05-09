"use client";

import { motion } from "framer-motion";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  description?: string;
};

export function SectionTitle({ eyebrow, title, subtitle, description }: Props) {
  return (
    <motion.div
      className="mb-12 max-w-2xl"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {eyebrow ? (
        <p
          className="mb-3 text-xs font-medium uppercase tracking-[0.25em]"
          style={{ color: "var(--accent-strong)" }}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className="text-3xl font-bold tracking-tight sm:text-4xl"
        style={{ color: "var(--text)" }}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className="mt-2 text-lg font-medium"
          style={{ color: "var(--text-muted)" }}
        >
          {subtitle}
        </p>
      ) : null}
      {description ? (
        <p
          className="mt-4 text-base leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}

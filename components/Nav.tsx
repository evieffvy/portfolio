"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#nyxus", label: "NYXUS" },
  { href: "#horus", label: "HORUS" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-35% 0px -60% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-soft" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-sm font-semibold tracking-wider">
          <span className="gradient-text">EVIE</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 text-sm md:flex" style={{ color: "var(--text-muted)" }}>
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative py-1 transition-colors hover:text-foreground"
                style={{ color: active === l.href ? "var(--text)" : undefined }}
              >
                {l.label}
                {active === l.href && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-px rounded-full bg-linear-to-r from-fuchsia-400 to-purple-400" />
                )}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="relative py-1 transition-colors hover:text-foreground"
            >
              Resume ↗
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full px-4 py-1.5 text-xs font-medium transition-transform hover:scale-105 sm:inline-block accent-bg text-white"
          >
            Get in touch
          </a>
          <ThemeToggle />

          {/* Hamburger button */}
          <button
            className="flex h-9 w-9 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-lg md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span
              className={`block h-0.5 w-5 rounded-full transition-all duration-200 ${
                mobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
              style={{ background: "var(--text)" }}
            />
            <span
              className={`block h-0.5 w-5 rounded-full transition-all duration-200 ${
                mobileOpen ? "opacity-0" : ""
              }`}
              style={{ background: "var(--text)" }}
            />
            <span
              className={`block h-0.5 w-5 rounded-full transition-all duration-200 ${
                mobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
              style={{ background: "var(--text)" }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t transition-all duration-300 md:hidden ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ borderColor: "var(--border-soft)", background: "var(--glass)" }}
      >
        <ul className="flex flex-col px-6 py-3 text-sm backdrop-blur-xl" style={{ color: "var(--text-muted)" }}>
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="flex items-center justify-between py-3 transition-colors hover:text-foreground"
                style={{ color: active === l.href ? "var(--text)" : undefined }}
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
                {active === l.href && (
                  <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                )}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between py-3 transition-colors hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Resume ↗
            </a>
          </li>
          <li className="border-t pt-3 pb-1" style={{ borderColor: "var(--border-soft)" }}>
            <a
              href="#contact"
              className="accent-bg block rounded-full px-4 py-2.5 text-center text-sm font-medium text-white"
              onClick={() => setMobileOpen(false)}
            >
              Get in touch
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

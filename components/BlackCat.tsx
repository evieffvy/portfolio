"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* Paw-print trigger — bottom-left, low opacity as easter egg hint */
function PawTrigger({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label="Secret cat"
      title="..."
      className="fixed bottom-6 left-6 z-50 h-12 w-12 opacity-30 transition-all duration-300 hover:opacity-70 hover:scale-110 active:scale-95"
    >
      <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
        {/* Main pad */}
        <ellipse cx="30" cy="43" rx="15" ry="11" fill="var(--text-faint)" />
        {/* Toe pads */}
        <circle cx="13" cy="27" r="6.5" fill="var(--text-faint)" />
        <circle cx="47" cy="27" r="6.5" fill="var(--text-faint)" />
        <circle cx="21" cy="16" r="5.5" fill="var(--text-faint)" />
        <circle cx="39" cy="16" r="5.5" fill="var(--text-faint)" />
      </svg>
    </button>
  );
}

export function BlackCat() {
  const [open, setOpen] = useState(false);
  const [petted, setPetted] = useState(false);

  function handleOpen() {
    setOpen(true);
    setPetted(false);
  }

  return (
    <>
      <PawTrigger onClick={handleOpen} />

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-100 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

            {/* Cat card */}
            <motion.div
              className="glass relative flex flex-col items-center gap-5 rounded-3xl px-10 py-8 text-center"
              style={{ maxWidth: 320, boxShadow: "var(--shadow-glow)" }}
              initial={{ scale: 0.6, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.75, opacity: 0 }}
              transition={{ type: "spring", stiffness: 320, damping: 22 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Cat illustration */}
              <motion.div
                className="relative w-44 h-44"
                animate={petted ? { rotate: [-4, 4, -3, 3, 0], y: [0, -10, 0] } : {}}
                transition={{ duration: 0.55 }}
              >
                <Image
                  src="/cat.jpg"
                  alt="secret black cat"
                  fill
                  className="object-contain mix-blend-multiply"
                />
              </motion.div>

              {/* Label */}
              <AnimatePresence mode="wait">
                {petted ? (
                  <motion.p
                    key="meow"
                    className="text-2xl font-bold gradient-text"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 14 }}
                  >
                    meow~ 🖤
                  </motion.p>
                ) : (
                  <motion.p
                    key="idle"
                    className="text-sm"
                    style={{ color: "var(--text-muted)" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    you found the secret cat ✨
                  </motion.p>
                )}
              </AnimatePresence>

              <div className="flex flex-col items-center gap-2.5 w-full">
                <button
                  onClick={() => setPetted(true)}
                  className="accent-bg w-full rounded-full py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03] active:scale-95"
                >
                  pet the cat
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="text-xs transition-opacity hover:opacity-80"
                  style={{ color: "var(--text-faint)" }}
                >
                  let it go
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

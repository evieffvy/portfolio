"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* Blob cat matching the reference — round loaf body, huge yellow eyes, curled tail */
function BlobCat() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl">
      {/* Tail */}
      <path d="M155 108 Q182 82 172 108 Q164 126 152 118" fill="#111118" />
      {/* Body — large horizontal loaf */}
      <ellipse cx="92" cy="100" rx="72" ry="48" fill="#111118" />
      {/* Head — round, blends into body */}
      <circle cx="78" cy="66" r="48" fill="#111118" />
      {/* Left ear */}
      <polygon points="44,34 33,6 62,30" fill="#111118" />
      {/* Right ear */}
      <polygon points="96,28 112,4 118,26" fill="#111118" />
      {/* Raised left paw */}
      <ellipse cx="34" cy="108" rx="20" ry="13" fill="#111118" transform="rotate(-25 34 108)" />
      {/* Left eye — big yellow ring */}
      <circle cx="62" cy="65" r="17" fill="#F5C100" />
      <circle cx="62" cy="67" r="10" fill="#111118" />
      <circle cx="57" cy="61" r="3" fill="white" opacity="0.9" />
      {/* Right eye — slightly bigger (matches reference asymmetry) */}
      <circle cx="96" cy="61" r="21" fill="#F5C100" />
      <circle cx="96" cy="63" r="13" fill="#111118" />
      <circle cx="90" cy="56" r="4" fill="white" opacity="0.9" />
      {/* Whiskers left */}
      <line x1="4"  y1="84" x2="38" y2="84" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
      <line x1="4"  y1="91" x2="38" y2="89" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
      {/* Whiskers right */}
      <line x1="118" y1="84" x2="158" y2="80" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
      <line x1="118" y1="91" x2="158" y2="93" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
    </svg>
  );
}

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
                className="w-44 h-36"
                animate={petted ? { rotate: [-4, 4, -3, 3, 0], y: [0, -10, 0] } : {}}
                transition={{ duration: 0.55 }}
              >
                <BlobCat />
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

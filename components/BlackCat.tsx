"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function CatSVG() {
  return (
    <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Tail */}
      <path d="M95 115 Q115 90 105 68 Q95 48 100 38" stroke="#1a1229" strokeWidth="10" fill="none" strokeLinecap="round"/>
      {/* Body */}
      <ellipse cx="62" cy="100" rx="34" ry="36" fill="#1a1229"/>
      {/* Head */}
      <circle cx="62" cy="54" r="28" fill="#1a1229"/>
      {/* Left ear */}
      <polygon points="40,36 30,10 54,30" fill="#1a1229"/>
      {/* Right ear */}
      <polygon points="84,36 94,10 70,30" fill="#1a1229"/>
      {/* Inner left ear */}
      <polygon points="41,34 34,16 52,30" fill="#a855f7" opacity="0.6"/>
      {/* Inner right ear */}
      <polygon points="83,34 90,16 72,30" fill="#a855f7" opacity="0.6"/>
      {/* Left eye white */}
      <ellipse cx="52" cy="52" rx="6" ry="7" fill="white"/>
      {/* Right eye white */}
      <ellipse cx="72" cy="52" rx="6" ry="7" fill="white"/>
      {/* Left pupil */}
      <ellipse cx="52" cy="53" rx="3" ry="5" fill="#1a1229"/>
      {/* Right pupil */}
      <ellipse cx="72" cy="53" rx="3" ry="5" fill="#1a1229"/>
      {/* Eye shine left */}
      <circle cx="54" cy="50" r="1.5" fill="white"/>
      {/* Eye shine right */}
      <circle cx="74" cy="50" r="1.5" fill="white"/>
      {/* Nose */}
      <polygon points="62,60 58,64 66,64" fill="#ec4899" opacity="0.9"/>
      {/* Mouth */}
      <path d="M58,64 Q62,68 66,64" stroke="#ec4899" strokeWidth="1.5" fill="none" opacity="0.9"/>
      {/* Whiskers left */}
      <line x1="28" y1="59" x2="50" y2="61" stroke="white" strokeWidth="1.2" opacity="0.6"/>
      <line x1="28" y1="64" x2="50" y2="63" stroke="white" strokeWidth="1.2" opacity="0.6"/>
      {/* Whiskers right */}
      <line x1="96" y1="59" x2="74" y2="61" stroke="white" strokeWidth="1.2" opacity="0.6"/>
      <line x1="96" y1="64" x2="74" y2="63" stroke="white" strokeWidth="1.2" opacity="0.6"/>
    </svg>
  );
}

function PawTrigger({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label="Secret cat"
      className="group fixed bottom-6 left-6 z-40 h-10 w-10 opacity-20 transition-opacity duration-300 hover:opacity-60"
      title="..."
    >
      <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="30" cy="42" rx="14" ry="11" fill="currentColor" style={{ color: "var(--text-faint)" }}/>
        <ellipse cx="30" cy="42" rx="10" ry="8" fill="currentColor" style={{ color: "var(--text-muted)" }} opacity="0.5"/>
        <circle cx="14" cy="26" r="6" fill="currentColor" style={{ color: "var(--text-faint)" }}/>
        <circle cx="46" cy="26" r="6" fill="currentColor" style={{ color: "var(--text-faint)" }}/>
        <circle cx="22" cy="16" r="5" fill="currentColor" style={{ color: "var(--text-faint)" }}/>
        <circle cx="38" cy="16" r="5" fill="currentColor" style={{ color: "var(--text-faint)" }}/>
      </svg>
    </button>
  );
}

export function BlackCat() {
  const [open, setOpen] = useState(false);
  const [meowed, setMeowed] = useState(false);

  function handleOpen() {
    setOpen(true);
    setMeowed(false);
  }

  return (
    <>
      <PawTrigger onClick={handleOpen} />

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-60 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

            {/* Cat card */}
            <motion.div
              className="glass relative flex flex-col items-center gap-5 rounded-3xl p-10"
              style={{ maxWidth: 320 }}
              initial={{ scale: 0.7, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Cat */}
              <motion.div
                className="w-36 h-36"
                animate={meowed ? { rotate: [-5, 5, -5, 0], y: [0, -8, 0] } : {}}
                transition={{ duration: 0.5 }}
              >
                <CatSVG />
              </motion.div>

              {/* Text */}
              <AnimatePresence mode="wait">
                {meowed ? (
                  <motion.p
                    key="meow"
                    className="text-2xl font-bold gradient-text"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    meow~ 🖤
                  </motion.p>
                ) : (
                  <motion.p
                    key="idle"
                    className="text-sm text-center"
                    style={{ color: "var(--text-muted)" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    you found the secret cat
                  </motion.p>
                )}
              </AnimatePresence>

              {/* Meow button */}
              <button
                onClick={() => setMeowed(true)}
                className="accent-bg rounded-full px-5 py-2 text-sm font-semibold text-white transition-transform hover:scale-105"
              >
                pet the cat
              </button>

              {/* Close */}
              <button
                onClick={() => setOpen(false)}
                className="text-xs transition-opacity hover:opacity-80"
                style={{ color: "var(--text-faint)" }}
              >
                let it go
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

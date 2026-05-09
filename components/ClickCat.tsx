"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Cat = { id: number; x: number; y: number };

let nextId = 0;

export function ClickCat() {
  const [cats, setCats] = useState<Cat[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const id = nextId++;
      setCats((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => setCats((prev) => prev.filter((c) => c.id !== id)), 900);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-999">
      <AnimatePresence>
        {cats.map((cat) => (
          <motion.div
            key={cat.id}
            className="absolute"
            style={{ left: cat.x - 75, top: cat.y - 75 }}
            initial={{ opacity: 1, scale: 0.8, y: 0 }}
            animate={{ opacity: [1, 1, 0], scale: [0.8, 1.4, 1.5], y: [0, -50, -90] }}
            transition={{ duration: 1.1, ease: "easeOut", times: [0, 0.55, 1] }}
          >
            <Image
              src="/click-cat.png"
              alt=""
              width={150}
              height={150}
              className="object-contain"
              style={{
                filter:
                  "brightness(0) invert(1) drop-shadow(0 0 6px #fff) drop-shadow(0 0 12px rgba(216,180,254,1)) drop-shadow(0 0 30px rgba(168,85,247,0.9)) drop-shadow(0 0 50px rgba(168,85,247,0.5))",
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

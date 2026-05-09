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
    <div className="pointer-events-none fixed inset-0 z-[999]">
      <AnimatePresence>
        {cats.map((cat) => (
          <motion.div
            key={cat.id}
            className="absolute"
            style={{ left: cat.x - 56, top: cat.y - 56 }}
            initial={{ opacity: 1, scale: 0.7, y: 0 }}
            animate={{ opacity: [1, 1, 0], scale: [0.7, 1.3, 1.4], y: [0, -40, -70] }}
            transition={{ duration: 1, ease: "easeOut", times: [0, 0.55, 1] }}
          >
            <Image
              src="/click-cat.png"
              alt=""
              width={112}
              height={112}
              className="object-contain"
              style={{
                filter:
                  "brightness(0) drop-shadow(0 0 8px rgba(168,85,247,1)) drop-shadow(0 0 20px rgba(168,85,247,0.7))",
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

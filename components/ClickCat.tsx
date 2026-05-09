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
            style={{ left: cat.x - 40, top: cat.y - 40 }}
            initial={{ opacity: 1, scale: 0.6, y: 0 }}
            animate={{ opacity: 0, scale: 1, y: -50 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <Image
              src="/click-cat.png"
              alt=""
              width={80}
              height={80}
              className="object-contain"
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

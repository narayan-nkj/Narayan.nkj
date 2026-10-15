"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ onComplete }: { onComplete?: () => void }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
      if (onComplete) onComplete();
    }, 750);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#08080a]"
        >
          <div className="relative flex flex-col items-center">
            {/* Minimal nocturnal monogram mark */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-[#121216] shadow-2xl"
            >
              <div className="h-4 w-4 rotate-45 border-2 border-[var(--accent-primary)] transition-colors duration-500" />
              <div className="absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_center,var(--accent-glow)_0%,transparent_70%)]" />
            </motion.div>

            {/* Typographic logotype */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex items-center space-x-3"
            >
              <span className="font-meta text-xs font-semibold tracking-[0.25em] text-[#F2F1EE] uppercase">
                STUDIO / 0105
              </span>
              <span className="h-1 w-1 rounded-full bg-[var(--accent-primary)] animate-pulse" />
            </motion.div>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 h-[1px] bg-gradient-to-r from-transparent via-[var(--accent-primary)] to-transparent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

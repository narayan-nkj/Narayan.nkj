"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CinematicPreloader({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [status, setStatus] = useState("INITIALIZING CORE SYSTEMS");

  useEffect(() => {
    // Force top position and disable background scroll during loading
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);
      document.body.style.overflow = "hidden";
    }

    let frameId: number;
    const duration = 1800; // 1.8s elegant pacing
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);
      
      // Easing curve: Quartic ease-out for fluid acceleration into precision deceleration
      const ease = 1 - Math.pow(1 - t, 4);
      const current = Math.floor(ease * 100);
      
      setProgress(current);

      if (current < 30) {
        setStatus("SYSTEM ARCHITECTURE & VECTOR SPACES");
      } else if (current < 70) {
        setStatus("IIT MADRAS DATA SCIENCE PIPELINES");
      } else if (current < 95) {
        setStatus("GRAPHICS & AUDIO INTERFACES");
      } else {
        setStatus("EXHIBITION ONLINE");
      }

      if (t < 1) {
        frameId = requestAnimationFrame(tick);
      } else {
        setProgress(100);
        setTimeout(() => {
          setIsFinished(true);
          // Unlock body scroll and ensure view is at the top
          document.body.style.overflow = "";
          window.scrollTo(0, 0);
          const lenis = (window as unknown as { __lenis?: { scrollTo: (pos: number, opts: { immediate: boolean }) => void } }).__lenis;
          if (lenis) {
            lenis.scrollTo(0, { immediate: true });
          }
          if (onComplete) onComplete();
        }, 300);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frameId);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.8, ease: [0.77, 0, 0.175, 1] }
          }}
          className="fixed inset-0 z-50 flex flex-col justify-between p-6 sm:p-12 bg-[#09090b] text-[#f4f4f5] border-b border-white/10"
        >
          {/* Top Spec Header */}
          <div className="flex items-center justify-between font-mono text-xs text-[#71717a]">
            <div className="flex items-center space-x-3">
              <span className="h-2 w-2 rounded-full bg-[#ff4520] animate-pulse" />
              <span className="text-[#f4f4f5] font-semibold tracking-wider">
                NARAYAN KUMAR JHA
              </span>
            </div>
            <span className="hidden sm:inline">KOLKATA, IN (IST)</span>
          </div>

          {/* Center Typographic Shutter Block */}
          <div className="my-auto py-12 max-w-5xl">
            <div className="font-mono text-xs text-[#ff4520] tracking-widest uppercase mb-4">
              [ {status} ]
            </div>
            
            <div className="flex items-baseline font-mono select-none">
              <span className="text-[18vw] sm:text-[12vw] font-bold text-[#f4f4f5] leading-none tabular-nums tracking-tighter">
                {progress.toString().padStart(2, "0")}
              </span>
              <span className="text-3xl sm:text-6xl text-[#ff4520] font-bold ml-2">
                %
              </span>
            </div>

            <div className="w-full h-[2px] bg-white/10 mt-8 relative overflow-hidden">
              <motion.div
                className="h-full bg-[#ff4520]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Bottom Spec Footer */}
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#71717a] border-t border-white/10 pt-6">
            <div className="flex items-center space-x-6">
              <span>IIT MADRAS — DATA SCIENCE</span>
              <span className="text-white/20">•</span>
              <span>BPPIMT — CSE</span>
            </div>
            <div className="text-white/40">
              PORTFOLIO EDITION 2026.04
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

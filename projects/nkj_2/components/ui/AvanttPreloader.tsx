"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { playHapticClick } from "@/lib/sound";

export default function AvanttPreloader({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [statusText, setStatusText] = useState("INITIALIZING ARCHITECTURE");

  useEffect(() => {
    let animationFrameId: number;
    const duration = 2400; // 2.4s graceful cinematic progression
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const t = Math.min(elapsed / duration, 1);

      // Custom smooth ease-out power 3 curve
      const easedProgress = 1 - Math.pow(1 - t, 3);
      const currentVal = Math.floor(easedProgress * 100);

      setProgress(currentVal);

      if (currentVal < 30) {
        setStatusText("INITIALIZING ARCHITECTURE & SYSTEMS");
      } else if (currentVal < 65) {
        setStatusText("LOADING VECTOR SUBSPACES & IITM DATA MATRIX");
      } else if (currentVal < 90) {
        setStatusText("COMPOSITING GLASSMORPHISM & SHADERS");
      } else {
        setStatusText("SPECIMEN READY • OPENING EXHIBITION");
      }

      if (t < 1) {
        animationFrameId = requestAnimationFrame(updateCounter);
      } else {
        setProgress(100);
        setTimeout(() => {
          setIsFinished(true);
          if (onComplete) onComplete();
        }, 500);
      }
    };

    animationFrameId = requestAnimationFrame(updateCounter);

    return () => cancelAnimationFrame(animationFrameId);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="avantt-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-50 flex overflow-hidden pointer-events-auto bg-[#0a0a0c]"
        >
          {/* Left Slicing Shocking Pink Curtain Block (Classic Avantt Signature) */}
          <motion.div
            initial={{ width: "100%", x: "0%" }}
            animate={{ width: "540px", x: "0%" }}
            exit={{
              x: "-100%",
              transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1] }
            }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden md:flex flex-col justify-between p-10 sm:p-12 bg-[#c3004f] text-white z-20 shrink-0 shadow-2xl"
          >
            {/* Top Bar */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-between font-mono text-xs tracking-widest uppercase"
            >
              <span>NKJ / 0105</span>
              <span>EST. 2026</span>
            </motion.div>

            {/* Middle Identity */}
            <div className="space-y-4">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-mono text-xs tracking-widest uppercase block"
              >
                [ SPECIMEN EDITION ]
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-5xl sm:text-6xl font-black tracking-tighter leading-none"
              >
                NARAYAN
                <br />
                KUMAR
                <br />
                JHA
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="font-mono text-xs pt-3 leading-relaxed border-t border-white/20"
              >
                IIT Madras (Data Science) &amp; BPPIMT (CSE)
              </motion.p>
            </div>

            {/* Bottom Tag */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.75 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-mono text-xs tracking-wider"
            >
              CREATIVE DEVELOPER &amp; DATA SCIENTIST
            </motion.div>
          </motion.div>

          {/* Right Dark Exhibition Canvas with Kinetic Matrix Counter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              x: "100%",
              transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1] }
            }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex flex-col justify-between p-6 sm:p-14 bg-[#0d0d11] text-[#f2f1ee] border-l border-white/10"
          >
            {/* Top Specimen Header */}
            <div className="flex items-center justify-between font-mono text-xs text-[#88888e]">
              <div className="flex items-center space-x-2.5">
                <span className="h-2 w-2 rounded-full bg-[#c3004f] animate-pulse" />
                <span className="text-[#f2f1ee] uppercase tracking-wider">{statusText}</span>
              </div>
              <span className="hidden sm:inline">KOLKATA, INDIA (IST)</span>
            </div>

            {/* Massive Kinetic Percentage Counter */}
            <div className="my-auto py-8">
              <div className="font-mono text-xs text-[#c3004f] mb-3 tracking-widest uppercase font-semibold">
                SYSTEM SYNTHESIS IN PROGRESS
              </div>
              
              <div className="font-display text-[20vw] sm:text-[13vw] font-black tracking-tighter text-[#f2f1ee] leading-none flex items-baseline select-none">
                <span className="tabular-nums transition-all duration-75">
                  {progress.toString().padStart(2, "0")}
                </span>
                <span className="text-[#c3004f] text-4xl sm:text-7xl md:text-8xl ml-2 sm:ml-4 font-black">
                  %
                </span>
              </div>

              {/* Ultra-smooth progress track with glowing head */}
              <div className="w-full h-1.5 bg-white/10 mt-8 relative overflow-hidden rounded-full">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#c3004f] via-[#e81768] to-[#c3004f]"
                  style={{
                    width: `${progress}%`,
                    boxShadow: "0 0 20px rgba(195, 0, 79, 0.6)"
                  }}
                  transition={{ ease: "linear" }}
                />
              </div>
            </div>

            {/* Bottom Meta Specimen Info */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-[11px] text-[#77777d] border-t border-white/10 pt-6">
              <div>
                <span className="text-white/40 block">TYPE SYSTEM</span>
                <span className="text-white">Displaay Modernist</span>
              </div>
              <div>
                <span className="text-white/40 block">DATA LOGIC</span>
                <span className="text-white">Vector Subspaces</span>
              </div>
              <div>
                <span className="text-white/40 block">AUDIO WORKLET</span>
                <span className="text-white">Web Audio API</span>
              </div>
              <div>
                <span className="text-white/40 block">CONTAINER</span>
                <span className="text-[#c3004f] font-semibold">Docker Active</span>
              </div>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

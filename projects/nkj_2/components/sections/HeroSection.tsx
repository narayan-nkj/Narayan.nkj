"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, Terminal, Layers, ArrowDown, Sparkles } from "lucide-react";
import { useAccent } from "@/components/ui/AccentContext";
import { playHapticClick } from "@/lib/sound";

export default function HeroSection() {
  const { setCursorVariant } = useAccent();

  const scrollToWork = () => {
    playHapticClick("mid");
    const lenis = (window as unknown as { __lenis?: { scrollTo: (target: string) => void } }).__lenis;
    if (lenis) {
      lenis.scrollTo("#work");
    } else {
      const el = document.getElementById("work");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        delay: 0.15 + i * 0.1,
        ease: [0.16, 1, 0.3, 1] as const
      }
    })
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 px-4 sm:px-8 lg:px-12 xl:px-16 w-full max-w-[1800px] 2xl:max-w-[1920px] mx-auto z-10">
      
      {/* Top Metadata Ribbon */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 font-meta text-xs text-[#7A7A7E]"
      >
        <div className="flex items-center space-x-3">
          <span className="inline-flex items-center space-x-1.5 text-[#F2F1EE]">
            <Terminal className="h-3.5 w-3.5 text-[var(--accent-primary)]" />
            <span>NARAYAN KUMAR JHA</span>
          </span>
          <span className="text-white/20">/</span>
          <span>CREATIVE DEVELOPER &amp; DATA SCIENTIST</span>
        </div>

        <div className="flex items-center space-x-6">
          <span className="hidden sm:inline">KOLKATA, INDIA</span>
          <span className="text-white/20 hidden sm:inline">•</span>
          <span className="text-[var(--accent-primary)] font-semibold">IIT MADRAS &amp; BPPIMT</span>
        </div>
      </motion.div>

      {/* Center Cinematic Headline */}
      <div className="my-auto py-12 md:py-16">
        <div className="space-y-1">
          {[
            "COMPUTATIONAL RIGOR,",
            "DATA SCIENCE LOGIC,",
            "& TACTILE INTERFACES."
          ].map((line, idx) => (
            <div key={idx} className="overflow-hidden">
              <motion.h1
                custom={idx}
                variants={lineVariants}
                initial="hidden"
                animate="visible"
                className={`font-editorial text-hero-headline font-bold text-[#F2F1EE] tracking-tighter ${
                  idx === 2 ? "text-[var(--accent-primary)]" : ""
                }`}
              >
                {line}
              </motion.h1>
            </div>
          ))}
        </div>

        {/* Subtitle statement from resume */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-10 max-w-4xl"
        >
          <p className="text-base sm:text-lg md:text-xl text-[#9A9AA0] font-light leading-relaxed">
            Analytical undergraduate combining core systems engineering (B.Tech) with specialized
            predictive modeling and vector space analytics from <span className="text-[#F2F1EE] font-medium">IIT Madras</span>.
            Passionate about intersecting computational logic with high-fidelity, aesthetic digital products.
          </p>
        </motion.div>

        {/* Primary Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 sm:mt-12 flex flex-wrap items-center gap-4"
        >
          <button
            onClick={scrollToWork}
            onMouseEnter={() => {
              setCursorVariant("link");
              playHapticClick("low");
            }}
            onMouseLeave={() => setCursorVariant("default")}
            className="group relative inline-flex items-center space-x-3 rounded-full bg-[var(--accent-primary)] px-7 py-3.5 text-sm font-semibold text-[#08080A] shadow-xl shadow-[var(--accent-glow)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            <span>Explore Key Projects</span>
            <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </button>

          <a
            href="#capabilities"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("capabilities");
              if (el) el.scrollIntoView({ behavior: "smooth" });
              playHapticClick("low");
            }}
            onMouseEnter={() => setCursorVariant("link")}
            onMouseLeave={() => setCursorVariant("default")}
            className="inline-flex items-center space-x-2.5 rounded-full border border-white/10 bg-[#121216]/60 px-6 py-3.5 font-meta text-xs text-[#F2F1EE] backdrop-blur-md transition-colors hover:border-white/25 hover:bg-white/5"
          >
            <Layers className="h-3.5 w-3.5 text-[var(--accent-primary)]" />
            <span>Technical Matrix</span>
          </a>
        </motion.div>
      </div>

      {/* Bottom Scroll Cue and Focus Matrix */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="flex items-end justify-between border-t border-white/10 pt-6"
      >
        <button
          onClick={scrollToWork}
          onMouseEnter={() => setCursorVariant("link")}
          onMouseLeave={() => setCursorVariant("default")}
          className="group flex items-center space-x-3 text-left focus:outline-none"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-[#121216] transition-colors group-hover:border-[var(--accent-primary)]">
            <ArrowDown className="h-4 w-4 text-[#8E8E93] group-hover:text-[var(--accent-primary)] transition-transform group-hover:translate-y-0.5" />
          </div>
          <div className="flex flex-col">
            <span className="font-meta text-[11px] uppercase tracking-wider text-[#8E8E93] group-hover:text-[#F2F1EE] transition-colors">
              Scroll to explore
            </span>
            <span className="font-meta text-[10px] text-white/30">
              5 Featured Systems &amp; Case Studies Below
            </span>
          </div>
        </button>

        <div className="hidden sm:flex items-center space-x-8 font-meta text-xs text-[#7A7A7E]">
          <div>
            <span className="text-white/40 block text-[10px]">DATA SCIENCE TRACK</span>
            <span className="text-[#F2F1EE]">IIT Madras (2026 — Present)</span>
          </div>
          <div>
            <span className="text-white/40 block text-[10px]">ENGINEERING TRACK</span>
            <span className="text-[#F2F1EE]">B.Tech CSE (2025 — Present)</span>
          </div>
        </div>
      </motion.div>

    </section>
  );
}

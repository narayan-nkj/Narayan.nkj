"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, Terminal, Sparkles, Database, Layers } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { playHapticClick } from "@/lib/sound";

export default function Hero() {
  const scrollToWork = () => {
    playHapticClick("mid");
    const el = document.getElementById("work");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-36 pb-16 px-4 sm:px-8 lg:px-12 xl:px-16 w-full max-w-[1800px] 2xl:max-w-[1920px] mx-auto z-10">
      
      {/* Top Metadata Ribbon */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 font-mono text-xs text-[#71717a]"
      >
        <div className="flex items-center space-x-3 text-[#f4f4f5]">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold uppercase tracking-wider">
            AVAILABLE FOR HIGH-IMPACT ROLES &amp; RESEARCH
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <span>KOLKATA, INDIA</span>
          <span className="text-white/20">•</span>
          <span className="text-[#ff4520] font-semibold">IIT MADRAS &amp; BPPIMT</span>
        </div>
      </motion.div>

      {/* Main Typographic Display */}
      <div className="my-auto py-12 sm:py-16">
        
        {/* Discipline Tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-mono text-xs tracking-widest text-[#ff4520] uppercase mb-4"
        >
          [ CREATIVE DEVELOPER &amp; DATA SCIENTIST ]
        </motion.div>

        {/* Large Headline */}
        <div className="space-y-1">
          {[
            "INTERSECTING COMPUTATIONAL RIGOR,",
            "DATA SCIENCE LOGIC,",
            "& TACTILE DIGITAL INTERFACES."
          ].map((line, idx) => (
            <motion.h1
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`hero-display-title text-[#f4f4f5] ${
                idx === 2 ? "text-[#ff4520]" : ""
              }`}
            >
              {line}
            </motion.h1>
          ))}
        </div>

        {/* Narrative */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-8 sm:mt-10 max-w-5xl text-base sm:text-lg md:text-xl text-[#a1a1aa] font-light leading-relaxed"
        >
          Undergraduate combining foundational Computer Science Engineering (B.Tech) with specialized
          mathematical vector spaces and predictive modeling from <strong className="text-[#f4f4f5] font-semibold">IIT Madras</strong>.
          Passionate about building fast, nocturnal web software that combines algorithmic precision with tactile aesthetic craft.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <button
            onClick={scrollToWork}
            className="group inline-flex items-center space-x-3 rounded-full bg-[#ff4520] px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-[#ff4520]/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Explore Key Projects</span>
            <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </button>

          <a
            href="https://github.com/narayan-nkj"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playHapticClick("low")}
            className="inline-flex items-center space-x-2.5 rounded-full border border-white/10 bg-[#121215]/80 px-6 py-3.5 font-mono text-xs text-[#f4f4f5] backdrop-blur-xl hover:border-white/25 transition-colors"
          >
            <GithubIcon className="h-4 w-4" />
            <span>GitHub Profile</span>
          </a>
        </motion.div>

      </div>

      {/* Bottom Focus Spec */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/10 pt-6 font-mono text-xs text-[#71717a]"
      >
        <div>
          <span className="text-white/40 block text-[10px] uppercase mb-1">Data Science</span>
          <span className="text-[#f4f4f5]">IIT Madras (2026 — Present)</span>
        </div>
        <div>
          <span className="text-white/40 block text-[10px] uppercase mb-1">Systems CSE</span>
          <span className="text-[#f4f4f5]">BPPIMT (2025 — Present)</span>
        </div>
        <div>
          <span className="text-white/40 block text-[10px] uppercase mb-1">Specialization</span>
          <span className="text-[#f4f4f5]">Linear Algebra • UI/UX Architecture</span>
        </div>
      </motion.div>

    </section>
  );
}

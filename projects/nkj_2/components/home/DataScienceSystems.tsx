"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Terminal, Sparkles, Activity, Layers, CheckCircle2 } from "lucide-react";
import { playHapticClick } from "@/lib/sound";

export default function DataScienceSystems() {
  const [vectorDim, setVectorDim] = useState(1024);
  const [activeModel, setActiveModel] = useState<"projection" | "eigen" | "gradient">("projection");

  return (
    <section id="data-systems" className="py-28 px-4 sm:px-8 max-w-7xl mx-auto z-10 relative">
      
      <div className="border-b border-white/10 pb-8 mb-12">
        <span className="font-mono text-xs text-[#ff4520] tracking-widest uppercase block mb-2">
          02 / COMPUTATIONAL RIGOR
        </span>
        <h2 className="section-title text-[#f4f4f5]">
          Data Science &amp; Systems Engineering
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#a1a1aa] font-light max-w-3xl leading-relaxed">
          Grounding digital interfaces in mathematical rigor. Developing predictive pipelines,
          multivariate calculus optimizations, and high-dimensional vector spaces at <strong className="text-[#f4f4f5] font-semibold">IIT Madras</strong>.
        </p>
      </div>

      {/* Interactive System Lab Card */}
      <div className="studio-card rounded-2xl p-6 sm:p-10">
        
        {/* Lab Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
          <div>
            <span className="font-mono text-xs text-[#ff4520] uppercase tracking-wider block mb-1">
              Live Mathematical Pipeline
            </span>
            <h3 className="font-sans text-2xl font-bold text-[#f4f4f5]">
              Vector Subspaces &amp; Eigenvalue Spectrum
            </h3>
          </div>

          <div className="flex items-center space-x-2 font-mono text-xs">
            {(["projection", "eigen", "gradient"] as const).map((m) => (
              <button
                key={m}
                onClick={() => {
                  setActiveModel(m);
                  playHapticClick("high");
                }}
                className={`px-3.5 py-1.5 rounded-full uppercase tracking-wider transition-colors ${
                  activeModel === m
                    ? "bg-[#ff4520] text-white font-semibold"
                    : "bg-white/5 text-[#a1a1aa] hover:text-white"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Diagnostics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls & Math Specs */}
          <div className="lg:col-span-5 space-y-6 font-mono text-xs">
            
            <div className="space-y-2">
              <div className="flex justify-between text-[#a1a1aa]">
                <span>Vector Dimension Space</span>
                <span className="text-[#ff4520] font-bold">{vectorDim} Dimensions</span>
              </div>
              <input
                type="range"
                min="256"
                max="4096"
                step="256"
                value={vectorDim}
                onChange={(e) => {
                  setVectorDim(Number(e.target.value));
                  playHapticClick("low");
                }}
                className="w-full accent-[#ff4520] cursor-pointer"
              />
            </div>

            <div className="p-4 rounded-xl bg-[#09090b] border border-white/10 space-y-2 text-[#a1a1aa]">
              <div className="text-white font-semibold flex items-center gap-2">
                <Terminal className="h-3.5 w-3.5 text-[#ff4520]" />
                <span>IIT Madras Research Model</span>
              </div>
              <div className="text-emerald-400">&gt; Orthonormal basis: Gram-Schmidt OK</div>
              <div className="text-white/60">&gt; Subspace rank: Full Rank Matrix</div>
              <div className="text-[#ff4520]">&gt; Model Convergence: 3.2x Accelerated</div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2 text-[#a1a1aa]">
              <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                <span className="text-[10px] text-white/40 block">ACCURACY</span>
                <span className="text-sm font-bold text-white">94.6%</span>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                <span className="text-[10px] text-white/40 block">LATENCY</span>
                <span className="text-sm font-bold text-[#ff4520]">&lt; 14ms</span>
              </div>
            </div>

          </div>

          {/* Visual Matrix Display */}
          <div className="lg:col-span-7 p-8 rounded-xl bg-[#09090b] border border-white/10 flex flex-col items-center justify-center relative overflow-hidden min-h-[260px]">
            
            {/* Dynamic Kinetic Geometry */}
            <motion.div
              animate={{
                rotate: activeModel === "eigen" ? [0, 360] : 0,
                scale: activeModel === "gradient" ? [1, 1.15, 1] : 1
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="relative flex items-center justify-center"
            >
              <div className="h-40 w-40 rounded-full border border-dashed border-[#ff4520]/40 flex items-center justify-center">
                <div className="h-28 w-28 rounded-full border border-[#ff4520]/60 flex items-center justify-center">
                  <div className="h-16 w-16 rounded-full bg-[#ff4520]/10 border-2 border-[#ff4520] flex items-center justify-center font-mono text-[11px] font-bold text-white">
                    {activeModel.toUpperCase()}
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="absolute bottom-3 right-4 font-mono text-[10px] text-white/30">
              LINEAR_ALGEBRA // IITM_DS_2026
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CAPABILITIES } from "@/data/projects";
import { Code, Layers, Sparkles, Compass, CheckCircle2, Cpu } from "lucide-react";
import { useAccent } from "@/components/ui/AccentContext";
import { playHapticClick } from "@/lib/sound";

const ICON_MAP: Record<string, React.ElementType> = {
  Layers,
  Sparkles,
  Code,
  Compass
};

export default function CapabilitiesSection() {
  const { setCursorVariant } = useAccent();
  const [activeTab, setActiveTab] = useState(0);

  // Interactive micro-playground states
  const [springStiffness, setSpringStiffness] = useState(380);
  const [springDamping, setSpringDamping] = useState(24);
  const [activeShaderPass, setActiveShaderPass] = useState<"volumetric" | "crdt" | "bloom">("volumetric");

  return (
    <section id="capabilities" className="relative py-28 sm:py-36 px-4 sm:px-8 max-w-7xl mx-auto z-10">
      
      {/* Section Identifier */}
      <div className="flex items-center space-x-3 font-meta text-xs text-[var(--accent-primary)] uppercase tracking-widest mb-3">
        <span className="h-[1px] w-6 bg-[var(--accent-primary)]" />
        <span>03 / Capabilities &amp; Stack</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 gap-6">
        <div>
          <h2 className="font-editorial text-4xl sm:text-5xl font-bold text-[#F2F1EE] tracking-tight">
            Technical Matrix &amp; Systems
          </h2>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-[#9A9AA0] font-light">
            Disciplines refined over years of building high-concurrency client engines,
            custom graphics shaders, and meticulous component architectures.
          </p>
        </div>
      </div>

      {/* Capabilities 4-Col Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {CAPABILITIES.map((cap, idx) => {
          const IconComp = ICON_MAP[cap.icon] || Cpu;
          const isSelected = activeTab === idx;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => {
                setActiveTab(idx);
                playHapticClick("mid");
              }}
              onMouseEnter={() => setCursorVariant("link")}
              onMouseLeave={() => setCursorVariant("default")}
              className={`cinematic-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between cursor-pointer transition-all ${
                isSelected ? "border-[var(--accent-primary)]/50 shadow-xl shadow-[var(--accent-glow)]" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-[var(--accent-primary)]">
                    <IconComp className="h-5 w-5" />
                  </div>
                  <span className="font-meta text-[11px] text-white/30 font-semibold">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-editorial text-lg font-bold text-[#F2F1EE] tracking-tight mb-2">
                  {cap.category}
                </h3>
                <p className="text-xs text-[#84848A] leading-relaxed mb-6 font-light">
                  {cap.description}
                </p>
              </div>

              <div className="space-y-2 border-t border-white/5 pt-4">
                {cap.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex items-center space-x-2 font-meta text-[11px] text-[#A6A6AC]">
                    <CheckCircle2 className="h-3 w-3 text-[var(--accent-primary)] shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Interactive Micro-Physics & Systems Lab */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-16 rounded-2xl border border-white/10 bg-[#0d0d11]/80 backdrop-blur-xl p-6 sm:p-8 shadow-2xl"
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-white/10 pb-6">
          <div>
            <span className="font-meta text-xs text-[var(--accent-primary)] uppercase tracking-wider block mb-1">
              Live Parameter Playground
            </span>
            <h4 className="font-editorial text-xl sm:text-2xl font-bold text-[#F2F1EE]">
              Interactive Spring &amp; Shader Diagnostics
            </h4>
          </div>

          <div className="flex items-center space-x-2 font-meta text-xs">
            {(["volumetric", "crdt", "bloom"] as const).map((pass) => (
              <button
                key={pass}
                onClick={() => {
                  setActiveShaderPass(pass);
                  playHapticClick("high");
                }}
                className={`px-3 py-1.5 rounded-lg uppercase tracking-wider transition-colors ${
                  activeShaderPass === pass
                    ? "bg-[var(--accent-primary)] text-[#08080A] font-semibold"
                    : "bg-white/5 text-[#84848A] hover:text-white"
                }`}
              >
                {pass}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Controls */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          
          <div className="space-y-4 font-meta">
            <div>
              <div className="flex justify-between text-xs mb-1.5 text-[#8E8E93]">
                <span>Spring Stiffness</span>
                <span className="text-[var(--accent-primary)]">{springStiffness} N/m</span>
              </div>
              <input
                type="range"
                min="100"
                max="800"
                value={springStiffness}
                onChange={(e) => {
                  setSpringStiffness(Number(e.target.value));
                  playHapticClick("low");
                }}
                className="w-full accent-[var(--accent-primary)] cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1.5 text-[#8E8E93]">
                <span>Physical Damping</span>
                <span className="text-[var(--accent-primary)]">{springDamping} N·s/m</span>
              </div>
              <input
                type="range"
                min="5"
                max="60"
                value={springDamping}
                onChange={(e) => {
                  setSpringDamping(Number(e.target.value));
                  playHapticClick("low");
                }}
                className="w-full accent-[var(--accent-primary)] cursor-pointer"
              />
            </div>
          </div>

          {/* Interactive animated preview box */}
          <div className="md:col-span-2 flex items-center justify-center p-8 bg-[#09090c] rounded-xl border border-white/5 relative overflow-hidden min-h-[140px]">
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                rotate: activeShaderPass === "volumetric" ? [0, 90, 0] : [0, 0, 0],
                borderRadius: activeShaderPass === "crdt" ? ["12px", "50%", "12px"] : "16px"
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                boxShadow: `0 0 40px var(--accent-glow)`
              }}
              className="h-16 w-16 border-2 border-[var(--accent-primary)] bg-[var(--accent-primary)]/10 flex items-center justify-center font-meta text-[10px] text-[#F2F1EE] font-bold"
            >
              {activeShaderPass.toUpperCase()}
            </motion.div>

            <div className="absolute bottom-2 right-3 font-meta text-[10px] text-white/30">
              FRAME_BUDGET: 8.33ms (120Hz)
            </div>
          </div>

        </div>
      </motion.div>

    </section>
  );
}

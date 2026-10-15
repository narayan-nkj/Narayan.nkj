"use client";

import React from "react";
import { motion } from "framer-motion";
import { CAPABILITIES } from "@/data/projects";
import { Code, Cpu, Sparkles, Layers, CheckCircle2 } from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  Code,
  Cpu,
  Sparkles,
  Layers
};

export default function EngineeringStack() {
  return (
    <section id="capabilities" className="py-28 px-4 sm:px-8 lg:px-12 xl:px-16 w-full max-w-[1800px] 2xl:max-w-[1920px] mx-auto z-10 relative">
      
      <div className="border-b border-white/10 pb-8 mb-12">
        <span className="font-mono text-xs text-[#ff4520] tracking-widest uppercase block mb-2">
          03 / CAPABILITIES &amp; TOOLCHAIN
        </span>
        <h2 className="section-title text-[#f4f4f5]">
          Engineering Discipline &amp; Technical Skills
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {CAPABILITIES.map((cap, idx) => {
          const IconComp = ICON_MAP[cap.icon] || Cpu;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="studio-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-[#ff4520]">
                    <IconComp className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-xs text-white/30 font-semibold">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-sans text-xl font-bold text-[#f4f4f5] mb-2">
                  {cap.category}
                </h3>
                <p className="text-xs text-[#a1a1aa] font-light leading-relaxed mb-6">
                  {cap.description}
                </p>
              </div>

              <div className="space-y-2.5 border-t border-white/10 pt-4 font-mono text-xs">
                {cap.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex items-center space-x-2 text-[#d4d4d8]">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#ff4520] shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}

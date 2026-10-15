"use client";

import React from "react";
import { motion } from "framer-motion";
import { TIMELINE_ENTRIES, HONORS } from "@/data/projects";
import { GraduationCap, Trophy, Sparkles, BookOpen } from "lucide-react";

export default function AcademicPath() {
  const academicFocus = [
    "Vector Spaces & Matrix Subspaces",
    "Linear Transformations & Mapping",
    "Calculus & Dynamic Optimizations",
    "Data Structures & Algorithmic Logic",
    "Database Management Essentials"
  ];

  const creativeInterests = [
    "High-concept Surrealist Filmmaking",
    "Mechanical Keyboard Customization (Linear Switches)",
    "Architectural & Brand Identity",
    "AI Generative Art & Cinematic Composition"
  ];

  return (
    <section id="path" className="py-28 px-4 sm:px-8 lg:px-12 xl:px-16 w-full max-w-[1800px] 2xl:max-w-[1920px] mx-auto z-10 relative">
      
      <div className="border-b border-white/10 pb-8 mb-12">
        <span className="font-mono text-xs text-[#ff4520] tracking-widest uppercase block mb-2">
          04 / CHRONOLOGY &amp; LEADERSHIP
        </span>
        <h2 className="section-title text-[#f4f4f5]">
          Academic Track &amp; Engagements
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left: Degrees & Roles */}
        <div className="lg:col-span-7 space-y-6">
          <h3 className="font-mono text-xs uppercase tracking-widest text-[#71717a] flex items-center space-x-2 mb-4">
            <GraduationCap className="h-4 w-4 text-[#ff4520]" />
            <span>Degrees &amp; Milestones</span>
          </h3>

          {TIMELINE_ENTRIES.map((entry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="studio-card rounded-2xl p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2 font-mono text-xs">
                <span className="rounded-full bg-[#ff4520]/15 border border-[#ff4520]/30 px-3 py-0.5 text-[#ff4520] font-semibold">
                  {entry.badge}
                </span>
                <span className="text-[#a1a1aa]">{entry.year}</span>
              </div>

              <h4 className="font-sans text-xl sm:text-2xl font-bold text-[#f4f4f5] mt-2 mb-1">
                {entry.role}
              </h4>
              <div className="font-mono text-xs text-[#ff4520] mb-3">
                {entry.organization}
              </div>

              <p className="text-sm text-[#a1a1aa] font-light leading-relaxed">
                {entry.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Right: Academic Focus, Honors & Interests */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Core Academic Focus */}
          <div className="studio-card rounded-2xl p-6 sm:p-7 space-y-4">
            <div className="flex items-center space-x-2 text-[#ff4520]">
              <BookOpen className="h-4 w-4" />
              <h4 className="font-mono text-xs uppercase tracking-widest text-[#f4f4f5] font-semibold">
                Core Academic Focus
              </h4>
            </div>

            <ul className="space-y-2.5 font-mono text-xs text-[#a1a1aa]">
              {academicFocus.map((item, i) => (
                <li key={i} className="flex items-center space-x-2 border-b border-white/5 pb-2.5 last:border-0 last:pb-0">
                  <span className="text-[#ff4520] font-bold">›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Honors & Roles */}
          <div className="studio-card rounded-2xl p-6 sm:p-7 space-y-4">
            <div className="flex items-center space-x-2 text-[#ff4520]">
              <Trophy className="h-4 w-4" />
              <h4 className="font-mono text-xs uppercase tracking-widest text-[#f4f4f5] font-semibold">
                Honors &amp; Badges
              </h4>
            </div>

            <div className="space-y-3 font-mono text-xs">
              {HONORS.map((h, i) => (
                <div key={i} className="flex justify-between border-b border-white/5 pb-2.5 last:border-0">
                  <div>
                    <span className="text-white block font-medium">{h.title}</span>
                    <span className="text-[#71717a] text-[11px]">{h.issuer}</span>
                  </div>
                  <span className="text-[#ff4520]">{h.year}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Creative Pursuits */}
          <div className="studio-card rounded-2xl p-6 sm:p-7 space-y-4">
            <div className="flex items-center space-x-2 text-[#ff4520]">
              <Sparkles className="h-4 w-4" />
              <h4 className="font-mono text-xs uppercase tracking-widest text-[#f4f4f5] font-semibold">
                Creative Interests
              </h4>
            </div>

            <div className="flex flex-wrap gap-2">
              {creativeInterests.map((interest, i) => (
                <span
                  key={i}
                  className="rounded-full bg-white/5 border border-white/10 px-3 py-1 font-mono text-[11px] text-[#a1a1aa]"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import { TIMELINE_ENTRIES, HONORS } from "@/data/projects";
import { Trophy, GraduationCap, Compass, Sparkles, BookOpen } from "lucide-react";
import { useAccent } from "@/components/ui/AccentContext";

export default function TimelineSection() {
  const { setCursorVariant } = useAccent();

  const academicFocus = [
    "Vector Spaces & Matrix Subspaces",
    "Linear Transformations & Mapping",
    "Calculus & Dynamic Optimizations",
    "Data Structures & Algorithmic Logic",
    "Database Management Essentials"
  ];

  const interests = [
    "High-concept Surrealist Filmmaking",
    "Mechanical Keyboard Customization (Linear Switches)",
    "Architectural & Brand Identity",
    "AI Generative Art & Cinematic Composition"
  ];

  return (
    <section id="experience" className="relative py-28 sm:py-36 px-4 sm:px-8 max-w-7xl mx-auto z-10">
      
      {/* Section Identifier */}
      <div className="flex items-center space-x-3 font-meta text-xs text-[var(--accent-primary)] uppercase tracking-widest mb-3">
        <span className="h-[1px] w-6 bg-[var(--accent-primary)]" />
        <span>04 / Education &amp; Leadership</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 gap-6">
        <div>
          <h2 className="font-editorial text-4xl sm:text-5xl font-bold text-[#F2F1EE] tracking-tight">
            Academic Track &amp; Leadership
          </h2>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left: Academic Path & Engagements */}
        <div className="lg:col-span-7 space-y-8">
          <h3 className="font-meta text-xs uppercase tracking-widest text-[#7A7A7E] flex items-center space-x-2">
            <GraduationCap className="h-4 w-4 text-[var(--accent-primary)]" />
            <span>Degrees &amp; Leadership Roles</span>
          </h3>

          <div className="space-y-6">
            {TIMELINE_ENTRIES.map((entry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onMouseEnter={() => setCursorVariant("link")}
                onMouseLeave={() => setCursorVariant("default")}
                className="cinematic-card rounded-2xl p-6 sm:p-7 border border-white/5 hover:border-white/20 transition-all"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2 font-meta">
                  <span className="text-xs text-[var(--accent-primary)] font-semibold">
                    {entry.year}
                  </span>
                  <span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5 text-[10px] text-[#A6A6AC]">
                    {entry.badge}
                  </span>
                </div>

                <h4 className="font-editorial text-xl font-bold text-[#F2F1EE] tracking-tight">
                  {entry.role}
                </h4>
                <div className="font-meta text-xs text-[#8E8E93] mb-3">
                  {entry.organization}
                </div>

                <p className="text-xs sm:text-sm text-[#84848A] leading-relaxed font-light">
                  {entry.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Academic Focus, Honors & Interests */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Academic Focus */}
          <div className="cinematic-card rounded-2xl p-6 sm:p-7 space-y-4">
            <div className="flex items-center space-x-2 text-[var(--accent-primary)]">
              <BookOpen className="h-4 w-4" />
              <h3 className="font-meta text-xs uppercase tracking-widest text-[#F2F1EE] font-semibold">
                Core Academic Focus
              </h3>
            </div>

            <ul className="space-y-2 font-meta text-xs text-[#A6A6AC]">
              {academicFocus.map((focus, fIdx) => (
                <li key={fIdx} className="flex items-center space-x-2 border-b border-white/5 pb-2 last:border-0 last:pb-0">
                  <span className="text-[var(--accent-primary)]">›</span>
                  <span>{focus}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Milestones */}
          <div className="cinematic-card rounded-2xl p-6 sm:p-7 space-y-4">
            <div className="flex items-center space-x-2 text-[var(--accent-primary)]">
              <Trophy className="h-4 w-4" />
              <h3 className="font-meta text-xs uppercase tracking-widest text-[#F2F1EE] font-semibold">
                Key Honors &amp; Badges
              </h3>
            </div>

            <div className="space-y-3">
              {HONORS.map((h, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between border-b border-white/5 pb-3 last:border-0 last:pb-0"
                >
                  <div className="space-y-0.5">
                    <span className="font-editorial text-sm font-semibold text-[#F2F1EE] block">
                      {h.title}
                    </span>
                    <span className="font-meta text-[11px] text-[#7A7A7E]">
                      {h.issuer}
                    </span>
                  </div>
                  <span className="font-meta text-xs text-[#8E8E93]">{h.year}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Creative Interests */}
          <div className="cinematic-card rounded-2xl p-6 sm:p-7 space-y-4">
            <div className="flex items-center space-x-2 text-[var(--accent-primary)]">
              <Sparkles className="h-4 w-4" />
              <h3 className="font-meta text-xs uppercase tracking-widest text-[#F2F1EE] font-semibold">
                Creative Pursuits &amp; Interests
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {interests.map((interest, iIdx) => (
                <span
                  key={iIdx}
                  className="rounded-full border border-white/10 bg-[#121216]/80 px-3 py-1 font-meta text-[11px] text-[#8E8E93]"
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

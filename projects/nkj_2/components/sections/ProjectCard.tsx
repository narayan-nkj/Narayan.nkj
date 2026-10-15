"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Layers, Activity, Sliders, Terminal, Cpu, Database, Film } from "lucide-react";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { useAccent } from "@/components/ui/AccentContext";
import { playHapticClick } from "@/lib/sound";

export default function ProjectCard({
  project,
  index
}: {
  project: Project;
  index: number;
}) {
  const { setCursorText, setCursorVariant } = useAccent();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setCursorText("VIEW");
    setCursorVariant("project");
    playHapticClick("low");
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCursorText("");
    setCursorVariant("default");
  };

  // Render a bespoke interactive graphic preview for each project
  const renderVisualPreview = () => {
    switch (project.slug) {
      case "project-singularity":
        return (
          <div className="relative w-full h-full min-h-[300px] sm:min-h-[360px] bg-[#0c0c10] overflow-hidden rounded-xl flex items-center justify-center p-6 border border-white/5 group-hover:border-white/15 transition-all">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]" />
            
            <div className="relative z-10 w-full max-w-sm flex flex-col gap-4">
              <div className="flex items-center justify-between p-3.5 rounded-lg bg-[#14141a] border border-white/10 shadow-lg transition-transform duration-500 group-hover:translate-x-1">
                <div className="flex items-center space-x-3">
                  <div className="h-3 w-3 rounded-full bg-[var(--accent-primary)] animate-pulse" />
                  <span className="font-meta text-xs text-[#F2F1EE]">SVG.KineticVectorEngine</span>
                </div>
                <span className="font-meta text-[10px] text-emerald-400">120 FPS</span>
              </div>

              <div className="ml-8 flex items-center justify-between p-3.5 rounded-lg bg-[#181822] border border-[var(--accent-primary)]/40 shadow-xl transition-transform duration-500 group-hover:-translate-x-1">
                <div className="flex items-center space-x-3">
                  <Layers className="h-4 w-4 text-[var(--accent-primary)]" />
                  <span className="font-meta text-xs text-[#F2F1EE]">Glassmorphism.Backdrop</span>
                </div>
                <span className="font-meta text-[10px] text-[var(--accent-primary)]">&lt; 10ms</span>
              </div>

              <div className="flex items-center justify-between p-3.5 rounded-lg bg-[#14141a] border border-white/10 shadow-lg transition-transform duration-500 group-hover:translate-x-2">
                <div className="flex items-center space-x-3">
                  <div className="h-3 w-3 rounded-full bg-cyan-400" />
                  <span className="font-meta text-xs text-[#F2F1EE]">InfiniteScroll.Virtualizer</span>
                </div>
                <span className="font-meta text-[10px] text-[#7A7A7E]">Sub-pixel</span>
              </div>
            </div>

            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--accent-rgb),0.12)_0%,transparent_70%)]" />
          </div>
        );

      case "codebee-techstrom-platforms":
        return (
          <div className="relative w-full h-full min-h-[300px] sm:min-h-[360px] bg-[#09090c] overflow-hidden rounded-xl flex flex-col justify-between p-6 border border-white/5 group-hover:border-white/15 transition-all">
            <div className="flex items-center justify-between font-meta text-[11px] text-[#7A7A7E] border-b border-white/10 pb-3">
              <span className="flex items-center gap-1.5 text-[#F2F1EE]"><Database className="h-3.5 w-3.5 text-cyan-400" /> SYMPOSIUM_DB.LATEST</span>
              <span className="text-cyan-400">2,500+ STUDENTS</span>
            </div>
            
            <div className="space-y-2 py-4">
              <div className="flex items-center justify-between font-meta text-xs">
                <span className="text-emerald-400">REGISTERED CODEBEE</span>
                <div className="h-2 w-32 bg-emerald-500/20 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-400 w-4/5 animate-pulse" />
                </div>
                <span className="text-[#84848A]">1,840 verified</span>
              </div>
              <div className="flex items-center justify-between font-meta text-xs">
                <span className="text-[var(--accent-primary)]">TECHSTROM ENROLL</span>
                <div className="h-2 w-32 bg-[var(--accent-primary)]/20 rounded-full overflow-hidden">
                  <div className="h-full bg-[var(--accent-primary)] w-3/4" />
                </div>
                <span className="text-[#84848A]">660 verified</span>
              </div>
            </div>

            <div className="font-meta text-[10px] text-[#7A7A7E] flex justify-between pt-2 border-t border-white/5">
              <span>ADMIN DASHBOARD SPEED: &lt; 15ms</span>
              <span className="text-white/40">BPPIMT CENTRAL</span>
            </div>
          </div>
        );

      case "cinematic-narrative-audio-pipeline":
        return (
          <div className="relative w-full h-full min-h-[300px] sm:min-h-[360px] bg-[#0c0c10] overflow-hidden rounded-xl flex items-center justify-center p-6 border border-white/5 group-hover:border-white/15 transition-all">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(198,255,110,0.12)_0%,transparent_70%)]" />
            <div className="relative z-10 flex flex-col items-center gap-6 w-full max-w-sm">
              <div className="flex items-center justify-center space-x-1.5 h-20">
                {[40, 75, 30, 95, 60, 85, 45, 100, 50, 70, 90, 35, 65, 80].map((h, i) => (
                  <motion.div
                    key={i}
                    animate={isHovered ? { height: [`${h}%`, `${(h * 1.4) % 100}%`, `${h}%`] } : { height: `${h}%` }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.08 }}
                    className="w-1.5 rounded-full bg-gradient-to-t from-[#16161b] to-[var(--accent-primary)]"
                  />
                ))}
              </div>
              <div className="flex items-center justify-between w-full font-meta text-[11px] text-[#8E8E93] border-t border-white/10 pt-3">
                <span className="flex items-center gap-1.5"><Film className="h-3.5 w-3.5 text-[var(--accent-primary)]" /> Isolation DSP</span>
                <span className="text-[var(--accent-primary)]">+18 dB SNR Boost</span>
              </div>
            </div>
          </div>
        );

      case "predictive-data-science-engine":
        return (
          <div className="relative w-full h-full min-h-[300px] sm:min-h-[360px] bg-[#08080a] overflow-hidden rounded-xl flex flex-col justify-between p-6 border border-white/5 group-hover:border-white/15 transition-all font-meta text-xs">
            <div className="flex items-center space-x-2 text-[#7A7A7E] border-b border-white/10 pb-3">
              <Cpu className="h-3.5 w-3.5 text-[var(--accent-primary)]" />
              <span className="text-[#F2F1EE]">IIT Madras / Vector Subspaces</span>
            </div>

            <div className="space-y-1.5 text-xs text-[#8E8E93] py-4">
              <div className="text-white/40">&gt; linear_algebra.project(subspace_V, dim=1024)</div>
              <div className="text-emerald-400">+ Eigenvalue spectrum: λ1=4.82, λ2=2.91, λ3=1.14</div>
              <div className="text-emerald-400/80 ml-4">+ Orthonormal basis matrix Q: orthogonalized</div>
              <div className="text-emerald-400">+ Optimization gradient: converged in 3.2x speed</div>
              <div className="text-[var(--accent-primary)] animate-pulse">&gt; accuracy 94.6% (cross-validated)...</div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-white/40 pt-2 border-t border-white/5">
              <span>PYTHON NUMERICAL CORE</span>
              <span>IIT MADRAS DS</span>
            </div>
          </div>
        );

      case "brutalist-typography-design-system":
        return (
          <div className="relative w-full h-full min-h-[300px] sm:min-h-[360px] bg-[#0c0c10] overflow-hidden rounded-xl flex flex-col justify-center items-center p-6 border border-white/5 group-hover:border-white/15 transition-all">
            <div className="w-full max-w-sm space-y-4">
              <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center space-x-2">
                  <Sliders className="h-4 w-4 text-[var(--accent-primary)]" />
                  <span className="font-meta text-xs text-[#F2F1EE]">Fluid Clamp Typography</span>
                </div>
                <div className="flex space-x-1.5">
                  <span className="h-4 w-4 rounded-full bg-[#121216] border border-white/20" />
                  <span className="h-4 w-4 rounded-full bg-[var(--accent-primary)]" />
                  <span className="h-4 w-4 rounded-full bg-white" />
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#14141a] border border-white/10 flex items-center justify-between">
                <span className="font-meta text-xs text-[#8E8E93]">Streetwear Brutalism</span>
                <span className="font-meta text-[11px] text-[var(--accent-primary)] font-semibold">APCA AAA</span>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.85, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative border-b border-white/10 py-16 sm:py-24 transition-colors"
    >
      <Link
        href={`/project/${project.slug}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="block focus:outline-none"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Project Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Index & Year */}
            <div className="flex items-center space-x-4 font-meta text-xs text-[#7A7A7E]">
              <span className="text-[var(--accent-primary)] font-semibold">
                0{index + 1}
              </span>
              <span className="text-white/20">/</span>
              <span>{project.category}</span>
              <span className="text-white/20">•</span>
              <span>{project.year}</span>
            </div>

            {/* Title with hover accent underline */}
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F2F1EE] tracking-tight group-hover:text-[var(--accent-primary)] transition-colors">
              {project.title}
            </h2>

            {/* Tagline */}
            <p className="text-sm sm:text-base text-[#9A9AA0] font-light leading-relaxed">
              {project.tagline}
            </p>

            {/* Tags Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.slice(0, 4).map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="rounded-full border border-white/10 bg-[#121216]/60 px-3 py-1 font-meta text-[11px] text-[#7A7A7E]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Metrics highlight */}
            <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-5 font-meta">
              {project.stats.slice(0, 2).map((st, sIdx) => (
                <div key={sIdx}>
                  <span className="text-[10px] text-white/40 uppercase block">{st.label}</span>
                  <span className="text-sm font-semibold text-[#F2F1EE]">{st.value}</span>
                </div>
              ))}
            </div>

            {/* CTA text */}
            <div className="pt-2 flex items-center space-x-2 text-xs font-semibold text-[var(--accent-primary)]">
              <span className="tracking-wide uppercase font-meta text-[11px]">View Case Study</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>

          </div>

          {/* Right Visual Presentation */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-2xl p-1 bg-gradient-to-b from-white/10 to-transparent shadow-2xl transition-transform duration-500 group-hover:scale-[1.015]">
              {renderVisualPreview()}
            </div>
          </div>

        </div>
      </Link>
    </motion.article>
  );
}

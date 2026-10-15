"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PROJECTS, Project } from "@/data/projects";
import { ArrowUpRight, LayoutGrid, List, Database, Film, Cpu, Sliders, Layers } from "lucide-react";
import { playHapticClick } from "@/lib/sound";

export default function SelectedWorks() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <section id="work" className="py-28 px-4 sm:px-8 lg:px-12 xl:px-16 w-full max-w-[1800px] 2xl:max-w-[1920px] mx-auto z-10 relative">
      
      {/* Section Header with View Toggle */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 gap-6 mb-12">
        <div>
          <span className="font-mono text-xs text-[#ff4520] tracking-widest uppercase block mb-2">
            01 / SELECTED WORK
          </span>
          <h2 className="section-title text-[#f4f4f5]">
            Featured Systems &amp; Case Studies
          </h2>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center space-x-2 rounded-full border border-white/10 bg-[#121215]/80 p-1 backdrop-blur-xl">
          <button
            onClick={() => {
              setViewMode("grid");
              playHapticClick("low");
            }}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full font-mono text-xs transition-colors ${
              viewMode === "grid" ? "bg-[#ff4520] text-white font-semibold" : "text-[#a1a1aa] hover:text-white"
            }`}
          >
            <LayoutGrid className="h-3.5 w-3.5" />
            <span>Grid</span>
          </button>

          <button
            onClick={() => {
              setViewMode("list");
              playHapticClick("low");
            }}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full font-mono text-xs transition-colors ${
              viewMode === "list" ? "bg-[#ff4520] text-white font-semibold" : "text-[#a1a1aa] hover:text-white"
            }`}
          >
            <List className="h-3.5 w-3.5" />
            <span>List</span>
          </button>
        </div>
      </div>

      {/* Grid View */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <ProjectCardGrid key={project.slug} project={project} index={idx} />
          ))}
        </div>
      ) : (
        <div className="divide-y divide-white/10 border-y border-white/10">
          {PROJECTS.map((project, idx) => (
            <ProjectListItem key={project.slug} project={project} index={idx} />
          ))}
        </div>
      )}

    </section>
  );
}

function ProjectCardGrid({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="studio-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between group cursor-pointer"
    >
      <div>
        {/* Header Metadata */}
        <div className="flex items-center justify-between font-mono text-xs text-[#71717a] mb-6">
          <div className="flex items-center space-x-2">
            <span className="text-[#ff4520] font-bold">0{index + 1}</span>
            <span>/</span>
            <span>{project.category}</span>
          </div>
          <span>{project.year}</span>
        </div>

        {/* Visual Graphic Preview */}
        <div className="mb-6 p-6 rounded-xl bg-[#09090b] border border-white/5 overflow-hidden relative min-h-[200px] flex items-center justify-center">
          {project.slug === "project-singularity" && (
            <div className="w-full space-y-3 font-mono text-xs">
              <div className="p-3 bg-[#121216] rounded-lg border border-white/10 flex justify-between items-center">
                <span className="text-[#f4f4f5]">SVG.KineticVector</span>
                <span className="text-emerald-400">120 FPS</span>
              </div>
              <div className="p-3 bg-[#181820] rounded-lg border border-[#ff4520]/40 flex justify-between items-center">
                <span className="text-[#ff4520]">Glassmorphism Engine</span>
                <span className="text-white/50">&lt; 10ms</span>
              </div>
            </div>
          )}

          {project.slug === "codebee-techstrom-platforms" && (
            <div className="w-full space-y-3 font-mono text-xs">
              <div className="flex justify-between text-xs text-[#a1a1aa]">
                <span className="flex items-center gap-1.5"><Database className="h-3.5 w-3.5 text-[#ff4520]" /> Registrations</span>
                <span className="text-[#f4f4f5] font-bold">2,500+ Attendees</span>
              </div>
              <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                <div className="bg-[#ff4520] h-full w-4/5" />
              </div>
              <div className="text-[10px] text-white/40">Query Response: &lt; 15ms</div>
            </div>
          )}

          {project.slug === "cinematic-narrative-audio-pipeline" && (
            <div className="w-full space-y-3 font-mono text-xs text-center">
              <div className="flex items-center justify-center space-x-1.5 h-16">
                {[30, 75, 45, 90, 60, 100, 40, 80, 50, 95, 35, 70].map((h, i) => (
                  <div key={i} style={{ height: `${h}%` }} className="w-1.5 bg-[#ff4520] rounded-full" />
                ))}
              </div>
              <div className="text-[11px] text-[#a1a1aa]">DSP Noise Isolation (+18 dB SNR)</div>
            </div>
          )}

          {project.slug === "predictive-data-science-engine" && (
            <div className="w-full font-mono text-xs space-y-2 text-[#a1a1aa]">
              <div className="text-[#ff4520]">&gt; IIT Madras Vector Subspaces</div>
              <div className="text-white/70">&gt; Orthogonal Projection dim=1024</div>
              <div className="text-emerald-400">&gt; Accuracy: 94.6% (Cross-Validated)</div>
            </div>
          )}

          {project.slug === "brutalist-typography-design-system" && (
            <div className="w-full p-4 bg-[#121216] rounded-lg border border-white/10 font-mono text-xs space-y-2">
              <div className="text-[#ff4520] font-bold">FLUID CLAMP TYPOGRAPHY</div>
              <div className="text-[#f4f4f5]">clamp(3rem, 8vw, 7rem)</div>
              <div className="text-white/40">APCA AAA Monochromatic Contrast</div>
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="font-sans text-2xl sm:text-3xl font-bold text-[#f4f4f5] group-hover:text-[#ff4520] transition-colors mb-3">
          {project.title}
        </h3>

        {/* Tagline */}
        <p className="text-sm text-[#a1a1aa] font-light leading-relaxed mb-6">
          {project.tagline}
        </p>
      </div>

      <div>
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.slice(0, 4).map((tag, tIdx) => (
            <span
              key={tIdx}
              className="rounded-full bg-white/5 border border-white/10 px-3 py-1 font-mono text-[11px] text-[#a1a1aa]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Link */}
        <Link
          href={`/project/${project.slug}`}
          onClick={() => playHapticClick("mid")}
          className="inline-flex items-center space-x-2 font-mono text-xs uppercase tracking-wider font-semibold text-[#ff4520] group-hover:underline underline-offset-4"
        >
          <span>View Detailed Case Study</span>
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </motion.div>
  );
}

function ProjectListItem({ project, index }: { project: Project; index: number }) {
  return (
    <div className="py-6 sm:py-8 group">
      <Link
        href={`/project/${project.slug}`}
        onClick={() => playHapticClick("mid")}
        className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
      >
        <div className="md:col-span-1 font-mono text-xs text-[#ff4520] font-bold">
          0{index + 1}
        </div>
        <div className="md:col-span-4">
          <h3 className="font-sans text-xl sm:text-2xl font-bold text-[#f4f4f5] group-hover:text-[#ff4520] transition-colors">
            {project.title}
          </h3>
          <span className="font-mono text-xs text-[#71717a]">{project.category}</span>
        </div>
        <div className="md:col-span-5 text-xs sm:text-sm text-[#a1a1aa] font-light">
          {project.tagline}
        </div>
        <div className="md:col-span-2 flex items-center justify-end font-mono text-xs text-[#ff4520]">
          <span className="hidden sm:inline mr-2">Case Study</span>
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </Link>
    </div>
  );
}

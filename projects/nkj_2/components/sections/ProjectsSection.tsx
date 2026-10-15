"use client";

import React, { useState } from "react";
import { PROJECTS } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { useAccent } from "@/components/ui/AccentContext";
import { playHapticClick } from "@/lib/sound";

const CATEGORIES = ["All", "Platforms", "Creative Tech", "Data Science", "Design Engineering"] as const;

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const { setCursorVariant } = useAccent();

  const filteredProjects = selectedCategory === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    playHapticClick("high");
  };

  return (
    <section id="work" className="relative py-28 sm:py-36 px-4 sm:px-8 max-w-7xl mx-auto z-10">
      
      {/* Section Header with Category Filters */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 gap-6">
        
        <div>
          <div className="flex items-center space-x-3 font-meta text-xs text-[var(--accent-primary)] uppercase tracking-widest mb-3">
            <span className="h-[1px] w-6 bg-[var(--accent-primary)]" />
            <span>02 / Key Projects</span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl font-bold text-[#F2F1EE] tracking-tight">
            Featured Systems &amp; Case Studies
          </h2>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              onMouseEnter={() => setCursorVariant("link")}
              onMouseLeave={() => setCursorVariant("default")}
              className={`rounded-full px-3.5 py-1.5 font-meta text-xs transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-[var(--accent-primary)] text-[#08080A] font-semibold shadow-md shadow-[var(--accent-glow)]"
                  : "bg-[#121216]/80 text-[#8E8E93] hover:text-[#F2F1EE] hover:bg-white/5 border border-white/5"
              }`}
            >
              {cat}
              {cat === "All" ? ` (${PROJECTS.length})` : ""}
            </button>
          ))}
        </div>

      </div>

      {/* Vertical Stack of Project Entries */}
      <div className="divide-y divide-white/10">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>

    </section>
  );
}

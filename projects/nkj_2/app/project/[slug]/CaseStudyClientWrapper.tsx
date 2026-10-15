"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { useAccent } from "@/components/ui/AccentContext";

export default function CaseStudyClientWrapper({
  children,
  project
}: {
  children: React.ReactNode;
  project: Project;
  nextProject: Project;
}) {
  const { setTheme } = useAccent();

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, [project.slug]);

  return (
    <motion.main
      key={project.slug}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative min-h-screen bg-[#08080a]"
    >
      {/* Subtle top radial flare in project accent */}
      <div
        className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] opacity-15 blur-[120px] rounded-full"
        style={{ backgroundColor: project.accentColor }}
      />
      {children}
    </motion.main>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, Cpu, Fingerprint, Eye, Database, Code } from "lucide-react";
import { useAccent } from "@/components/ui/AccentContext";

export default function IntroSection() {
  const { setCursorVariant } = useAccent();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  const pillars = [
    {
      icon: Cpu,
      title: "Data Science & Algebra",
      desc: "Vector subspaces, linear transformations, discrete programming, and statistical predictive modeling from IIT Madras."
    },
    {
      icon: Code,
      title: "Core Systems CSE",
      desc: "Foundational object-oriented structures, algorithmic logic, and full-stack software development from B.Tech track."
    },
    {
      icon: Fingerprint,
      title: "Tactile Glassmorphism",
      desc: "Kinetic SVG animations, inertial scroll physics, and synthesized Web Audio micro-haptics."
    },
    {
      icon: Eye,
      title: "Brutalist Typography",
      desc: "Streetwear aesthetic patterns, APCA high-contrast tokens, and mathematical clamp typography."
    }
  ];

  return (
    <section id="approach" className="relative py-28 sm:py-36 px-4 sm:px-8 max-w-7xl mx-auto z-10">
      
      {/* Section Identifier */}
      <div className="flex items-center space-x-3 font-meta text-xs text-[var(--accent-primary)] uppercase tracking-widest mb-10">
        <span className="h-[1px] w-6 bg-[var(--accent-primary)]" />
        <span>01 / Philosophy &amp; Discipline</span>
      </div>

      {/* Large Statement */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-4xl"
      >
        <motion.p
          variants={itemVariants}
          className="font-editorial text-sub-headline font-semibold text-[#F2F1EE] leading-[1.25] tracking-tight"
        >
          Engineering is the synthesis of computational rigor and aesthetic clarity:{" "}
          <span className="text-[#84848A]">
            grounded in linear algebra, driven by discrete data structures, and expressed through tactile interfaces.
          </span>
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="mt-8 text-base sm:text-lg text-[#9A9AA0] font-light leading-relaxed max-w-3xl"
        >
          Balancing dual academic pursuits in Computer Science Engineering (B.Tech) and Data Science &amp; Applications (<span className="text-[#F2F1EE]">IIT Madras</span>).
          I focus on transforming complex mathematical algorithms into seamless, nocturnal software systems that captivate and perform.
        </motion.p>
      </motion.div>

      {/* 4 Pillars Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={containerVariants}
        className="mt-16 sm:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {pillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <motion.div
              key={idx}
              variants={itemVariants}
              onMouseEnter={() => setCursorVariant("link")}
              onMouseLeave={() => setCursorVariant("default")}
              className="cinematic-card group rounded-2xl p-6 sm:p-7 transition-all duration-300"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-[var(--accent-primary)] group-hover:scale-105 transition-transform">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 font-editorial text-lg font-bold text-[#F2F1EE] tracking-tight group-hover:text-[var(--accent-primary)] transition-colors">
                {pillar.title}
              </h3>
              <p className="mt-2.5 font-sans text-xs sm:text-sm text-[#84848A] leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          );
        })}
      </motion.div>

    </section>
  );
}

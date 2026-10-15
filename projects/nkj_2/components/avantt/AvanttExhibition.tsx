"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PROJECTS, CAPABILITIES, TIMELINE_ENTRIES, HONORS } from "@/data/projects";
import { ArrowDownRight, ArrowUpRight, Copy, Check, Terminal, Cpu, Layers, Sparkles, Sliders, Database, Film, Mail, Globe, ArrowUp } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { SpecimenSettings } from "./AvanttHeader";
import { playHapticClick, playSuccessTone } from "@/lib/sound";

export default function AvanttExhibition({
  settings,
  onUpdateSettings
}: {
  settings: SpecimenSettings;
  onUpdateSettings: (newSettings: Partial<SpecimenSettings>) => void;
}) {
  const [customText, setCustomText] = useState("NARAYAN KUMAR JHA");
  const [copied, setCopied] = useState(false);
  const email = "narayan.nkj@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    playSuccessTone();
    setTimeout(() => setCopied(false), 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    playHapticClick("mid");
  };

  return (
    <div className="w-full bg-[#0a0a0c] text-[#f2f1ee] font-sans selection:bg-[#c3004f] selection:text-white">
      
      {/* ---------------- SECTION 01: HERO SPECIMEN PLATE ---------------- */}
      <section id="specimen" className="border-b border-[#24242c]">
        
        {/* Split Grid: Left Accent Identity / Right Specimen Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[85vh]">
          
          {/* Left Block: Bold Avantt Shocking Pink Studio Sidebar */}
          <div className="lg:col-span-4 bg-[#c3004f] text-white p-8 sm:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#24242c]">
            <div className="space-y-6">
              <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest opacity-80">
                <span>PLATE / 0105</span>
                <span>EDITION 2026</span>
              </div>

              <div>
                <span className="font-mono text-xs uppercase tracking-widest block opacity-75 mb-2">
                  [ CREATIVE DEVELOPER &amp; DATA SCIENTIST ]
                </span>
                <h1 className="font-display text-4xl sm:text-5xl font-black tracking-tighter leading-none">
                  NARAYAN
                  <br />
                  KUMAR
                  <br />
                  JHA
                </h1>
              </div>

              <p className="font-mono text-xs leading-relaxed opacity-90 pt-4 border-t border-white/20">
                Intersecting foundational computer science engineering (B.Tech) with advanced data science logic, linear algebra, and vector spaces from <strong className="font-bold">IIT Madras</strong>.
              </p>
            </div>

            {/* Quick Specs List */}
            <div className="space-y-3 pt-8 font-mono text-xs border-t border-white/20 mt-8">
              <div className="flex justify-between">
                <span className="opacity-75">LOCATION</span>
                <span className="font-bold">Kolkata, India</span>
              </div>
              <div className="flex justify-between">
                <span className="opacity-75">TRACK 01</span>
                <span className="font-bold">IIT Madras (BS Data Science)</span>
              </div>
              <div className="flex justify-between">
                <span className="opacity-75">TRACK 02</span>
                <span className="font-bold">BPPIMT (B.Tech CSE)</span>
              </div>
              <div className="flex justify-between">
                <span className="opacity-75">STATUS</span>
                <span className="font-bold">Open for Research &amp; Projects</span>
              </div>
            </div>
          </div>

          {/* Right Area: Interactive Massive Specimen Previewer */}
          <div className="lg:col-span-8 p-6 sm:p-12 flex flex-col justify-between bg-[#0d0d11]">
            
            {/* Top Specimen Ribbon */}
            <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#88888e] border-b border-[#24242c] pb-4">
              <div className="flex items-center space-x-3">
                <span className="text-[#c3004f] font-bold">TYPE SPECIMEN TESTER</span>
                <span>/</span>
                <span>LIVE VARIABLE RENDERING</span>
              </div>
              <div className="flex items-center space-x-4">
                <span>WEIGHT: {settings.weight}</span>
                <span>STYLE: {settings.isItalic ? "ITALIC" : "ROMAN"}</span>
              </div>
            </div>

            {/* Live Editable Massive Typographic Showcase */}
            <div className="py-12 my-auto">
              <input
                type="text"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                placeholder="Type something to test specimen..."
                className="w-full bg-transparent font-display tracking-tight text-[#f2f1ee] border-b border-transparent focus:border-[#c3004f] focus:outline-none transition-all leading-none"
                style={{
                  fontWeight: settings.weight,
                  fontStyle: settings.isItalic ? "italic" : "normal",
                  fontSize: `clamp(2.5rem, ${settings.fontSize / 10}vw, 7.5rem)`,
                  letterSpacing: "-0.04em"
                }}
              />
              <span className="font-mono text-[11px] text-[#77777d] mt-3 block">
                ↑ Click anywhere to live-edit specimen text above
              </span>
            </div>

            {/* Bottom Specimen Quick Weight Matrix */}
            <div className="border-t border-[#24242c] pt-6 font-mono text-xs">
              <div className="text-[#88888e] uppercase tracking-widest mb-3">
                Quick Weight Hierarchy
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {[
                  { name: "Thin", w: 300 },
                  { name: "Regular", w: 400 },
                  { name: "Medium", w: 500 },
                  { name: "Bold", w: 700 },
                  { name: "Black", w: 900 }
                ].map((item) => (
                  <button
                    key={item.w}
                    onClick={() => {
                      onUpdateSettings({ weight: item.w });
                      playHapticClick("low");
                    }}
                    className={`p-3 text-left border transition-all ${
                      settings.weight === item.w
                        ? "border-[#c3004f] bg-[#c3004f]/10 text-white"
                        : "border-[#24242c] bg-[#141418] text-[#88888e] hover:border-white/20"
                    }`}
                  >
                    <span className="block text-[10px] text-white/40">{item.w}</span>
                    <span className="font-display text-sm font-semibold">{item.name}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* ---------------- SECTION 02: KEY PROJECTS (AVANTT PLATES) ---------------- */}
      <section id="projects" className="border-b border-[#24242c]">
        
        {/* Section Header */}
        <div className="max-w-[1700px] mx-auto px-4 sm:px-8 py-10 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#24242c]">
          <div>
            <span className="font-mono text-xs text-[#c3004f] uppercase tracking-widest block mb-1">
              02 / EXHIBITION PLATES
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight">
              Selected Systems &amp; Case Studies
            </h2>
          </div>
          <div className="font-mono text-xs text-[#88888e]">
            5 DOCUMENTED ENGINEERING SPECIMENS
          </div>
        </div>

        {/* Project Plates List */}
        <div className="max-w-[1700px] mx-auto divide-y divide-[#24242c]">
          {PROJECTS.map((project, idx) => (
            <article
              key={project.slug}
              className="p-6 sm:p-12 hover:bg-[#101014] transition-colors group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Metadata & Narrative */}
                <div className="lg:col-span-6 space-y-6">
                  
                  {/* Plate Index */}
                  <div className="flex items-center space-x-3 font-mono text-xs text-[#88888e]">
                    <span className="px-2 py-0.5 bg-[#c3004f] text-white font-bold">
                      PLATE 0{idx + 1}.0
                    </span>
                    <span>/</span>
                    <span className="text-[#f2f1ee]">{project.category}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-[#f2f1ee] group-hover:text-[#c3004f] transition-colors leading-none">
                    {project.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-sm sm:text-base text-[#9999a0] font-light leading-relaxed">
                    {project.tagline}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 font-mono text-[11px] bg-[#17171d] border border-[#24242c] text-[#88888e]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Quantitative Stats Row */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-[#24242c] pt-5 font-mono text-xs">
                    {project.stats.slice(0, 3).map((st, sIdx) => (
                      <div key={sIdx}>
                        <span className="text-[10px] text-white/40 uppercase block mb-0.5">{st.label}</span>
                        <span className="font-bold text-[#f2f1ee] text-sm">{st.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="pt-2">
                    <Link
                      href={`/project/${project.slug}`}
                      onClick={() => playHapticClick("high")}
                      className="inline-flex items-center space-x-2 font-mono text-xs uppercase tracking-wider font-bold text-[#c3004f] hover:underline underline-offset-4"
                    >
                      <span>Explore Case Study</span>
                      <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                  </div>

                </div>

                {/* Right Interactive Graphic Plate */}
                <div className="lg:col-span-6">
                  <div className="p-6 sm:p-8 bg-[#14141a] border border-[#24242c] group-hover:border-[#c3004f]/50 transition-all">
                    
                    {/* Plate Header Bar */}
                    <div className="flex items-center justify-between font-mono text-[10px] text-[#77777d] border-b border-[#24242c] pb-3 mb-6">
                      <span className="text-[#f2f1ee] uppercase font-bold">SYSTEM TELEMETRY PASS</span>
                      <span>RUNTIME: 120 FPS</span>
                    </div>

                    {/* Visual Mockup content based on slug */}
                    {project.slug === "project-singularity" && (
                      <div className="space-y-4 font-mono text-xs">
                        <div className="p-3 bg-[#0a0a0c] border border-white/10 text-emerald-400">
                          &gt; SVG.KineticMatrix: 120 FPS Sub-pixel rendering
                        </div>
                        <div className="p-3 bg-[#0a0a0c] border border-[#c3004f]/40 text-[#c3004f]">
                          &gt; Glassmorphism backdrop filter composited
                        </div>
                      </div>
                    )}

                    {project.slug === "codebee-techstrom-platforms" && (
                      <div className="space-y-3 font-mono text-xs">
                        <div className="flex justify-between text-xs text-[#88888e]">
                          <span>STUDENT ENROLLMENTS</span>
                          <span className="text-[#c3004f] font-bold">2,500+ Verified</span>
                        </div>
                        <div className="w-full bg-white/10 h-2">
                          <div className="bg-[#c3004f] h-full w-4/5" />
                        </div>
                        <div className="text-[11px] text-white/50">&gt; Live symposium database synchronized</div>
                      </div>
                    )}

                    {project.slug === "cinematic-narrative-audio-pipeline" && (
                      <div className="space-y-3 font-mono text-xs">
                        <div className="flex items-center justify-center space-x-1.5 h-16">
                          {[30, 70, 45, 90, 60, 100, 40, 85, 55, 95, 35].map((h, i) => (
                            <div
                              key={i}
                              style={{ height: `${h}%` }}
                              className="w-2 bg-[#c3004f]"
                            />
                          ))}
                        </div>
                        <div className="flex justify-between text-[11px] text-[#88888e] pt-2 border-t border-[#24242c]">
                          <span>DSP NOISE SUPPRESSION</span>
                          <span className="text-white">+18 dB SNR</span>
                        </div>
                      </div>
                    )}

                    {project.slug === "predictive-data-science-engine" && (
                      <div className="space-y-2 font-mono text-xs text-[#88888e]">
                        <div className="text-[#c3004f]">&gt; IIT Madras Vector Subspaces</div>
                        <div>&gt; Linear Transformations: dim=1024</div>
                        <div>&gt; Model Convergence: 3.2x Accelerated</div>
                        <div className="text-emerald-400">&gt; Prediction Accuracy: 94.6%</div>
                      </div>
                    )}

                    {project.slug === "brutalist-typography-design-system" && (
                      <div className="p-4 bg-[#0a0a0c] border border-white/10 space-y-2 font-mono text-xs">
                        <div className="text-[#c3004f] font-bold">STREETWEAR BRUTALISM TOKENS</div>
                        <div className="text-white">Fluid Clamp: clamp(3rem, 10vw, 9rem)</div>
                        <div className="text-white/40">APCA AAA Monochromatic Contrast</div>
                      </div>
                    )}

                    {/* Plate Footer */}
                    <div className="mt-6 pt-3 border-t border-[#24242c] flex items-center justify-between font-mono text-[10px] text-[#77777d]">
                      <span>SPECIMEN ID: {project.slug}</span>
                      <span className="text-white/40">DISPLAAY ARCHITECTURE</span>
                    </div>

                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>

      </section>

      {/* ---------------- SECTION 03: CAPABILITIES & DATA MATRIX ---------------- */}
      <section id="matrix" className="border-b border-[#24242c] bg-[#0c0c10]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-8 py-16">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#24242c] pb-8 mb-12">
            <div>
              <span className="font-mono text-xs text-[#c3004f] uppercase tracking-widest block mb-1">
                03 / TECHNICAL SPECIFICATION MATRIX
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight">
                Engineering &amp; Data Science Capabilities
              </h2>
            </div>
            <div className="font-mono text-xs text-[#88888e]">
              DISCRETE MATHEMATICS, CODING &amp; DESIGN TOKENS
            </div>
          </div>

          {/* 4-Quadrant Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CAPABILITIES.map((cap, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#121216] border border-[#24242c] flex flex-col justify-between hover:border-[#c3004f] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs text-[#88888e] mb-4 pb-3 border-b border-[#24242c]">
                    <span className="text-[#c3004f] font-bold">GRID 0{idx + 1}</span>
                    <span>SPEC</span>
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3">{cap.category}</h3>
                  <p className="font-sans text-xs text-[#88888e] leading-relaxed mb-6">
                    {cap.description}
                  </p>
                </div>

                <div className="space-y-2 border-t border-[#24242c] pt-4 font-mono text-xs">
                  {cap.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-center space-x-2 text-[#b0b0b8]">
                      <span className="text-[#c3004f] font-bold">›</span>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ---------------- SECTION 04: ACADEMIC PATH & LEADERSHIP ---------------- */}
      <section id="education" className="border-b border-[#24242c]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-8 py-16">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#24242c] pb-8 mb-12">
            <div>
              <span className="font-mono text-xs text-[#c3004f] uppercase tracking-widest block mb-1">
                04 / ACADEMIC TRACK &amp; CHRONOLOGY
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight">
                Education &amp; Leadership Engagements
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Timeline Cards */}
            <div className="lg:col-span-8 space-y-6">
              {TIMELINE_ENTRIES.map((entry, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 bg-[#121216] border border-[#24242c] hover:border-white/30 transition-colors"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs mb-3">
                    <span className="px-2 py-0.5 bg-[#c3004f] text-white font-bold">
                      {entry.badge}
                    </span>
                    <span className="text-[#88888e]">{entry.year}</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#f2f1ee]">
                    {entry.role}
                  </h3>
                  <div className="font-mono text-xs text-[#c3004f] mb-3">
                    {entry.organization}
                  </div>
                  <p className="text-xs sm:text-sm text-[#88888e] leading-relaxed">
                    {entry.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Academic Focus & Honors Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              
              <div className="p-6 bg-[#121216] border border-[#24242c] space-y-4 font-mono text-xs">
                <span className="text-[#c3004f] uppercase font-bold tracking-widest block border-b border-[#24242c] pb-2">
                  Academic Focus (IIT Madras &amp; CSE)
                </span>
                <ul className="space-y-2 text-[#b0b0b8]">
                  <li>› Vector Spaces &amp; Matrix Subspaces</li>
                  <li>› Linear Transformations &amp; Mapping</li>
                  <li>› Calculus &amp; Dynamic Optimizations</li>
                  <li>› Data Structures &amp; Algorithmic Logic</li>
                  <li>› Database Management Essentials</li>
                </ul>
              </div>

              <div className="p-6 bg-[#121216] border border-[#24242c] space-y-4 font-mono text-xs">
                <span className="text-[#c3004f] uppercase font-bold tracking-widest block border-b border-[#24242c] pb-2">
                  Distinctions &amp; Milestones
                </span>
                <div className="space-y-3">
                  {HONORS.map((h, idx) => (
                    <div key={idx} className="flex justify-between border-b border-white/5 pb-2 last:border-0">
                      <div>
                        <span className="text-white block font-semibold">{h.title}</span>
                        <span className="text-[#77777d]">{h.issuer}</span>
                      </div>
                      <span className="text-[#c3004f]">{h.year}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ---------------- SECTION 05: CONTACT & FOOTER ---------------- */}
      <footer id="contact" className="bg-[#0e0e12] border-t border-[#24242c]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-8 py-20">
          
          <div className="space-y-6 max-w-4xl">
            <span className="font-mono text-xs text-[#c3004f] uppercase tracking-widest block">
              05 / INITIATE CONVERSATION &amp; TRANSMISSION
            </span>
            
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-[#f2f1ee] leading-none">
              LET&apos;S BUILD
              <br />
              TOGETHER.
            </h2>

            <p className="font-mono text-sm text-[#88888e] pt-4 max-w-2xl">
              Available for technical partnerships, data science computational research, and creative development projects.
            </p>

            <div className="pt-6 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${email}`}
                onClick={() => playHapticClick("high")}
                className="px-8 py-4 bg-[#c3004f] text-white font-mono text-sm font-bold uppercase tracking-wider hover:bg-[#a50042] transition-colors"
              >
                Send Email ({email})
              </a>

              <button
                onClick={handleCopy}
                className="px-6 py-4 border border-[#24242c] bg-[#141418] font-mono text-xs text-[#f2f1ee] hover:border-white/30 transition-colors flex items-center space-x-2"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">Email Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 text-[#88888e]" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Footer Grid */}
          <div className="mt-24 pt-12 border-t border-[#24242c] grid grid-cols-1 md:grid-cols-4 gap-8 font-mono text-xs text-[#88888e]">
            
            <div>
              <span className="text-white font-bold uppercase block mb-2">
                NARAYAN KUMAR JHA
              </span>
              <p className="text-[11px] leading-relaxed">
                Creative Developer &amp; Data Scientist.
                <br />
                IIT Madras &amp; BPPIMT.
              </p>
            </div>

            <div>
              <span className="text-white font-bold uppercase block mb-2">
                PROFILES &amp; REPOSITORIES
              </span>
              <div className="space-y-1.5">
                <a
                  href="https://github.com/narayan-nkj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c3004f] block transition-colors"
                >
                  › GitHub / narayan-nkj
                </a>
                <a
                  href={`mailto:${email}`}
                  className="hover:text-[#c3004f] block transition-colors"
                >
                  › Direct Email Transmission
                </a>
              </div>
            </div>

            <div>
              <span className="text-white font-bold uppercase block mb-2">
                SPECIMEN SPECS
              </span>
              <div>Displaay / Avantt Modernist Engine</div>
              <div>Next.js 16 + React 19 + Docker</div>
              <div>Kolkata, India (IST)</div>
            </div>

            <div className="flex md:justify-end items-start">
              <button
                onClick={scrollToTop}
                className="px-4 py-2 border border-[#24242c] bg-[#141418] text-[#f2f1ee] hover:border-white/30 transition-colors flex items-center space-x-2"
              >
                <span>Back to Top</span>
                <ArrowUp className="h-3.5 w-3.5" />
              </button>
            </div>

          </div>

        </div>
      </footer>

    </div>
  );
}

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

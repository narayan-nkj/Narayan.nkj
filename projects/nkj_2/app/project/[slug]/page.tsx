import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PROJECTS } from "@/data/projects";
import { ArrowLeft, ArrowRight, ExternalLink, CheckCircle, Cpu, Terminal } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import CaseStudyClientWrapper from "./CaseStudyClientWrapper";

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({
    slug: p.slug
  }));
}

export default async function ProjectPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const nextProject = PROJECTS.find((p) => p.slug === project.nextSlug) || PROJECTS[0];

  return (
    <CaseStudyClientWrapper project={project} nextProject={nextProject}>
      <div className="min-h-screen pt-32 pb-24 px-4 sm:px-8 max-w-5xl mx-auto z-10 relative">
        
        {/* Back Link */}
        <div className="mb-12">
          <Link
            href="/#work"
            className="inline-flex items-center space-x-2 font-mono text-xs text-[#a1a1aa] hover:text-[#f4f4f5] transition-colors rounded-full border border-white/10 bg-[#121215]/80 px-4 py-2 backdrop-blur-xl"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Return to Portfolio</span>
          </Link>
        </div>

        {/* Hero Header */}
        <header className="space-y-6 border-b border-white/10 pb-12">
          <div className="flex flex-wrap items-center space-x-3 font-mono text-xs text-[#ff4520] uppercase tracking-wider">
            <span>{project.category}</span>
            <span className="text-white/20">•</span>
            <span>{project.year}</span>
            <span className="text-white/20">•</span>
            <span>{project.client}</span>
          </div>

          <h1 className="font-sans text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#f4f4f5] leading-tight">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-[#a1a1aa] font-light leading-relaxed max-w-3xl">
            {project.tagline}
          </p>

          {/* External Links */}
          <div className="flex flex-wrap gap-4 pt-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 rounded-full bg-[#ff4520] px-6 py-3 font-mono text-xs font-semibold text-white shadow-xl hover:scale-105 transition-transform"
              >
                <span>Live Repository / Demo</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 rounded-full border border-white/10 bg-[#121215] px-6 py-3 font-mono text-xs text-[#f4f4f5] hover:border-white/30 transition-colors"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                <span>Source Code</span>
              </a>
            )}
          </div>
        </header>

        {/* Monospace Metadata Spec Matrix */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-b border-white/10 font-mono text-xs">
          <div>
            <span className="text-white/40 block text-[10px] uppercase mb-1">Role / Responsibility</span>
            <span className="text-[#f4f4f5] font-medium">{project.role}</span>
          </div>
          <div>
            <span className="text-white/40 block text-[10px] uppercase mb-1">Timeline &amp; Span</span>
            <span className="text-[#f4f4f5] font-medium">{project.timeline}</span>
          </div>
          <div>
            <span className="text-white/40 block text-[10px] uppercase mb-1">Affiliation</span>
            <span className="text-[#f4f4f5] font-medium">{project.client}</span>
          </div>
          <div>
            <span className="text-white/40 block text-[10px] uppercase mb-1">Deliverable</span>
            <span className="text-[#f4f4f5] font-medium">Production Architecture</span>
          </div>
        </section>

        {/* Performance Metrics Banner */}
        <section className="py-12 border-b border-white/10">
          <h2 className="font-mono text-xs uppercase tracking-widest text-[#ff4520] mb-6">
            Quantitative System Telemetry
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {project.stats.map((stat, idx) => (
              <div key={idx} className="studio-card rounded-xl p-5">
                <span className="font-mono text-[10px] text-white/40 uppercase block mb-1">
                  {stat.label}
                </span>
                <span className="font-sans text-2xl sm:text-3xl font-bold text-[#f4f4f5] block">
                  {stat.value}
                </span>
                {stat.change && (
                  <span className="font-mono text-[11px] text-[#ff4520] mt-1 block">
                    {stat.change}
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Case Narrative */}
        <section className="py-16 space-y-16 border-b border-white/10">
          
          {/* Executive Overview */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#ff4520]">
                01 / Background &amp; Vision
              </span>
              <h3 className="font-sans text-2xl font-bold text-[#f4f4f5] mt-2">
                The Objective
              </h3>
            </div>
            <div className="md:col-span-8 space-y-4 text-base sm:text-lg text-[#a1a1aa] font-light leading-relaxed">
              {project.overview.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Technical Challenge */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <span className="font-mono text-xs uppercase tracking-widest text-rose-400">
                02 / Complexity &amp; Bottlenecks
              </span>
              <h3 className="font-sans text-2xl font-bold text-[#f4f4f5] mt-2">
                The Core Challenge
              </h3>
            </div>
            <div className="md:col-span-8 space-y-4 text-base sm:text-lg text-[#a1a1aa] font-light leading-relaxed">
              {project.challenge.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Engineering Solution */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-400">
                03 / Execution &amp; Strategy
              </span>
              <h3 className="font-sans text-2xl font-bold text-[#f4f4f5] mt-2">
                Architectural Approach
              </h3>
            </div>
            <div className="md:col-span-8 space-y-4 text-base sm:text-lg text-[#a1a1aa] font-light leading-relaxed">
              {project.solution.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

        </section>

        {/* Deep Systems Architecture Grid */}
        <section className="py-16 border-b border-white/10">
          <span className="font-mono text-xs uppercase tracking-widest text-[#ff4520] block mb-2">
            04 / Pipeline Breakdown
          </span>
          <h3 className="font-sans text-3xl font-bold text-[#f4f4f5] mb-8">
            Technical Architecture Specifications
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.architecture.map((arch, idx) => (
              <div key={idx} className="studio-card rounded-2xl p-6 sm:p-7 space-y-4">
                <div className="flex items-center space-x-2 text-[#ff4520]">
                  <Cpu className="h-4 w-4" />
                  <h4 className="font-sans text-lg font-bold text-[#f4f4f5]">
                    {arch.title}
                  </h4>
                </div>
                <ul className="space-y-2.5">
                  {arch.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start space-x-2 font-mono text-xs text-[#a1a1aa] leading-relaxed">
                      <span className="text-[#ff4520] font-bold">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack Matrix */}
        <section className="py-12 border-b border-white/10">
          <span className="font-mono text-xs uppercase tracking-widest text-[#ff4520] block mb-4">
            Stack &amp; Frameworks
          </span>
          <div className="flex flex-wrap gap-2.5">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="rounded-full border border-white/10 bg-[#121216] px-4 py-2 font-mono text-xs text-[#f4f4f5]"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* Project Impact */}
        <section className="py-16 border-b border-white/10">
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 block mb-2">
            05 / Results &amp; Impact
          </span>
          <h3 className="font-sans text-3xl font-bold text-[#f4f4f5] mb-6">
            Key Outcomes &amp; Validation
          </h3>
          <div className="space-y-4">
            {project.impact.map((imp, idx) => (
              <div key={idx} className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-base sm:text-lg text-[#f4f4f5] font-light">{imp}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Next Project Footer Link */}
        <section className="pt-20">
          <Link
            href={`/project/${nextProject.slug}`}
            className="group block studio-card rounded-2xl p-8 sm:p-12 border border-white/10 hover:border-[#ff4520]/40 transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="font-mono text-xs uppercase tracking-widest text-[#71717a]">
                  Up Next — Case Study
                </span>
                <h4 className="font-sans text-3xl sm:text-4xl font-bold text-[#f4f4f5] group-hover:text-[#ff4520] transition-colors">
                  {nextProject.title}
                </h4>
                <p className="text-sm text-[#a1a1aa] max-w-xl font-light">
                  {nextProject.tagline}
                </p>
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ff4520] text-white shrink-0 group-hover:scale-110 transition-transform shadow-xl">
                <ArrowRight className="h-6 w-6" />
              </div>
            </div>
          </Link>
        </section>

      </div>
    </CaseStudyClientWrapper>
  );
}

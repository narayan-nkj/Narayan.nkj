"use client";

import React, { useState } from "react";
import { Copy, Check, ArrowUp, Globe, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/Icons";
import { useAccent } from "@/components/ui/AccentContext";
import { playHapticClick, playSuccessTone } from "@/lib/sound";

export default function ContactSection() {
  const { setCursorVariant } = useAccent();
  const [copied, setCopied] = useState(false);
  const email = "narayan.nkj@gmail.com";

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    playSuccessTone();
    setTimeout(() => setCopied(false), 3000);
  };

  const scrollToTop = () => {
    playHapticClick("mid");
    const lenis = (window as unknown as { __lenis?: { scrollTo: (target: number) => void } }).__lenis;
    if (lenis) {
      lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="relative pt-28 pb-16 px-4 sm:px-8 lg:px-12 xl:px-16 w-full max-w-[1800px] 2xl:max-w-[1920px] mx-auto z-10 border-t border-white/10">
      
      {/* Availability Status Ribbon */}
      <div className="flex flex-wrap items-center justify-between gap-4 font-meta text-xs mb-16">
        <div className="flex items-center space-x-2.5 rounded-full border border-white/10 bg-[#121216]/80 px-3.5 py-1.5 backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-[#F2F1EE]">
            OPEN FOR TECHNICAL COLLABORATION &amp; RESEARCH
          </span>
          <span className="text-white/20">•</span>
          <span className="text-[#84848A]">CREATIVE ENGINEERING &amp; DATA SCIENCE</span>
        </div>

        <div className="text-[#7A7A7E]">
          LOCATION: KOLKATA, INDIA (IST)
        </div>
      </div>

      {/* Massive Typographic Email CTA */}
      <div className="space-y-6">
        <span className="font-meta text-xs uppercase tracking-widest text-[var(--accent-primary)]">
          05 / Initiate Transmission
        </span>
        
        <div>
          <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-[#F2F1EE]">
            LET&apos;S BUILD
            <br />
            SOMETHING SINGULAR.
          </h2>
        </div>

        <div className="pt-6 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${email}`}
            onMouseEnter={() => setCursorVariant("link")}
            onMouseLeave={() => setCursorVariant("default")}
            className="group relative inline-flex items-center space-x-3 rounded-full bg-[var(--accent-primary)] px-8 py-4 text-base sm:text-lg font-semibold text-[#08080A] shadow-2xl shadow-[var(--accent-glow)] transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Mail className="h-5 w-5" />
            <span>Send Email ({email})</span>
          </a>

          <button
            onClick={handleCopyEmail}
            onMouseEnter={() => setCursorVariant("link")}
            onMouseLeave={() => setCursorVariant("default")}
            className="inline-flex items-center space-x-2 rounded-full border border-white/10 bg-[#121216]/80 px-6 py-4 font-meta text-xs text-[#F2F1EE] backdrop-blur-md hover:border-white/30 transition-colors"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 text-emerald-400" />
                <span className="text-emerald-400 font-semibold">Email Copied ({email})</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 text-[#8E8E93]" />
                <span>Copy Email Address</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Footer Navigation Columns */}
      <div className="mt-24 pt-12 border-t border-white/10 grid grid-cols-1 md:grid-cols-4 gap-8 font-meta text-xs">
        
        {/* Col 1: Bio */}
        <div className="space-y-3">
          <span className="text-[#F2F1EE] font-bold tracking-wider uppercase block">
            NARAYAN KUMAR JHA
          </span>
          <p className="text-[#7A7A7E] text-[11px] leading-relaxed">
            Creative Developer &amp; Data Scientist. B.Tech CSE &amp; BS in Data Science at IIT Madras.
          </p>
          <div className="text-white/30 text-[10px]">
            © {new Date().getFullYear()} NARAYAN KUMAR JHA. ALL RIGHTS RESERVED.
          </div>
        </div>

        {/* Col 2: Socials */}
        <div className="space-y-2.5">
          <span className="text-white/40 uppercase tracking-widest block mb-1">
            Network &amp; Profiles
          </span>
          {[
            { label: "GitHub (narayan-nkj)", href: "https://github.com/narayan-nkj", icon: GithubIcon },
            { label: "Email Transmission", href: `mailto:${email}`, icon: Mail },
            { label: "Kolkata, India", href: "#contact", icon: Globe }
          ].map((soc, idx) => {
            const Icon = soc.icon;
            return (
              <a
                key={idx}
                href={soc.href}
                target={soc.href.startsWith("http") ? "_blank" : undefined}
                rel={soc.href.startsWith("http") ? "noopener noreferrer" : undefined}
                onMouseEnter={() => setCursorVariant("link")}
                onMouseLeave={() => setCursorVariant("default")}
                className="flex items-center space-x-2 text-[#8E8E93] hover:text-[var(--accent-primary)] transition-colors"
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{soc.label}</span>
              </a>
            );
          })}
        </div>

        {/* Col 3: Education & Track */}
        <div className="space-y-2 text-[#7A7A7E]">
          <span className="text-white/40 uppercase tracking-widest block mb-1">
            Academic Track
          </span>
          <div className="text-[#F2F1EE]">IIT Madras — Data Science</div>
          <div>BPPIMT — Computer Science Eng.</div>
          <div>Computational Rigor &amp; Analytics</div>
          <div>High-Contrast UI Systems</div>
        </div>

        {/* Col 4: Back to Top */}
        <div className="flex md:justify-end items-start">
          <button
            onClick={scrollToTop}
            onMouseEnter={() => setCursorVariant("link")}
            onMouseLeave={() => setCursorVariant("default")}
            className="group flex items-center space-x-2 rounded-full border border-white/10 bg-[#121216] px-4 py-2.5 text-[#8E8E93] hover:text-[#F2F1EE] hover:border-white/30 transition-all"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>

    </footer>
  );
}

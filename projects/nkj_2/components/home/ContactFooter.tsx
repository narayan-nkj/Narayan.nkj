"use client";

import React, { useState } from "react";
import { Copy, Check, ArrowUp, Mail, Globe } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { playHapticClick, playSuccessTone } from "@/lib/sound";

export default function ContactFooter() {
  const [copied, setCopied] = useState(false);
  const email = "narayan.nkj@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    playSuccessTone();
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    playHapticClick("mid");
  };

  return (
    <footer id="contact" className="border-t border-white/10 pt-28 pb-16 px-4 sm:px-8 max-w-7xl mx-auto z-10 relative">
      
      {/* Availability Ribbon */}
      <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#71717a] mb-12">
        <div className="flex items-center space-x-2.5 rounded-full border border-white/10 bg-[#121215]/80 px-4 py-1.5 backdrop-blur-xl">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[#f4f4f5] font-semibold">
            OPEN FOR TECHNICAL ROLES, RESEARCH &amp; COLLABORATION
          </span>
        </div>
        <div>
          LOCATION: KOLKATA, INDIA (IST)
        </div>
      </div>

      {/* Massive CTA */}
      <div className="space-y-6 max-w-4xl">
        <span className="font-mono text-xs text-[#ff4520] uppercase tracking-widest block">
          05 / INITIATE CONVERSATION
        </span>
        
        <h2 className="font-sans text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#f4f4f5] leading-tight">
          LET&apos;S BUILD
          <br />
          SOMETHING SINGULAR.
        </h2>

        <p className="text-base sm:text-lg text-[#a1a1aa] font-light max-w-2xl leading-relaxed pt-2">
          Whether you have an ambitious software system, a data science research initiative, or a high-performance creative engineering challenge, I&apos;d love to connect.
        </p>

        <div className="pt-6 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${email}`}
            onClick={() => playHapticClick("high")}
            className="group inline-flex items-center space-x-3 rounded-full bg-[#ff4520] px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-[#ff4520]/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Mail className="h-5 w-5" />
            <span>Send Email ({email})</span>
          </a>

          <button
            onClick={handleCopy}
            className="inline-flex items-center space-x-2.5 rounded-full border border-white/10 bg-[#121215]/80 px-6 py-4 font-mono text-xs text-[#f4f4f5] backdrop-blur-xl hover:border-white/25 transition-colors"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 text-emerald-400" />
                <span className="text-emerald-400 font-semibold">Email Copied to Clipboard</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 text-[#71717a]" />
                <span>Copy Email Address</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Footer Navigation Columns */}
      <div className="mt-28 pt-12 border-t border-white/10 grid grid-cols-1 md:grid-cols-4 gap-8 font-mono text-xs text-[#71717a]">
        
        {/* Col 1: Bio */}
        <div className="space-y-2">
          <span className="text-[#f4f4f5] font-semibold uppercase block">
            NARAYAN KUMAR JHA
          </span>
          <p className="text-[11px] leading-relaxed text-[#a1a1aa]">
            Creative Developer &amp; Data Scientist.
            <br />
            IIT Madras (Data Science) &amp; BPPIMT (CSE).
          </p>
          <div className="text-white/30 text-[10px] pt-1">
            © {new Date().getFullYear()} ALL RIGHTS RESERVED.
          </div>
        </div>

        {/* Col 2: Network */}
        <div className="space-y-2">
          <span className="text-white/40 uppercase tracking-widest block mb-1">
            Network &amp; Code
          </span>
          <div className="space-y-1.5">
            <a
              href="https://github.com/narayan-nkj"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-[#a1a1aa] hover:text-[#ff4520] transition-colors"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              <span>GitHub / narayan-nkj</span>
            </a>
            <a
              href={`mailto:${email}`}
              className="flex items-center space-x-2 text-[#a1a1aa] hover:text-[#ff4520] transition-colors"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>Email Transmission</span>
            </a>
          </div>
        </div>

        {/* Col 3: Academic Track */}
        <div className="space-y-2">
          <span className="text-white/40 uppercase tracking-widest block mb-1">
            Academic Track
          </span>
          <div className="text-[#f4f4f5]">IIT Madras — BS Data Science</div>
          <div>BPPIMT — B.Tech CSE</div>
          <div>Kolkata, India (IST)</div>
        </div>

        {/* Col 4: Back to Top */}
        <div className="flex md:justify-end items-start">
          <button
            onClick={scrollToTop}
            className="group flex items-center space-x-2 rounded-full border border-white/10 bg-[#121215] px-4 py-2.5 text-[#a1a1aa] hover:text-[#f4f4f5] hover:border-white/25 transition-all"
          >
            <span>Back to Top</span>
            <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>

    </footer>
  );
}

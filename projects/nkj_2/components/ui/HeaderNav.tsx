"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Volume2, VolumeX, ArrowUpRight, Copy, Check } from "lucide-react";
import { toggleAudioMute, isMuted, playHapticClick, playSuccessTone } from "@/lib/sound";

export default function HeaderNav() {
  const [muted, setMuted] = useState(true);
  const [timeString, setTimeString] = useState("");
  const [copied, setCopied] = useState(false);
  const email = "narayan.nkj@gmail.com";

  useEffect(() => {
    setMuted(isMuted());

    const updateClock = () => {
      try {
        const now = new Date();
        const kolkataTime = new Intl.DateTimeFormat("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false
        }).format(now);
        setTimeString(`${kolkataTime} IST`);
      } catch {
        setTimeString("19:00:00 IST");
      }
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSoundToggle = () => {
    const isNowMuted = toggleAudioMute();
    setMuted(isNowMuted);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    playSuccessTone();
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 lg:px-12 xl:px-16 py-5 pointer-events-none">
      <div className="w-full max-w-[1800px] 2xl:max-w-[1920px] mx-auto flex items-center justify-between">
        
        {/* Monogram / Brand */}
        <div className="flex items-center space-x-3 pointer-events-auto">
          <Link
            href="/"
            onClick={() => playHapticClick("mid")}
            className="group flex items-center space-x-3 rounded-full border border-white/10 bg-[#121215]/80 px-4 py-2 backdrop-blur-xl transition-colors hover:border-white/25 shadow-lg"
          >
            <span className="h-2 w-2 rounded-full bg-[#ff4520]" />
            <span className="font-sans text-sm font-semibold tracking-tight text-[#f4f4f5]">
              NARAYAN KUMAR JHA
            </span>
          </Link>

          {/* Timezone badge */}
          <div className="hidden md:flex items-center space-x-2 rounded-full border border-white/5 bg-[#121215]/60 px-3.5 py-2 font-mono text-xs text-[#71717a] backdrop-blur-xl">
            <span className="text-white/40">KOLKATA</span>
            <span className="text-[#f4f4f5]">{timeString || "19:00:00 IST"}</span>
          </div>
        </div>

        {/* Center Pill Nav Links */}
        <nav
          aria-label="Navigation"
          className="hidden lg:flex items-center space-x-1 rounded-full border border-white/10 bg-[#121215]/80 px-4 py-1.5 backdrop-blur-xl pointer-events-auto shadow-lg"
        >
          {[
            { label: "Work", href: "#work" },
            { label: "Data & Systems", href: "#data-systems" },
            { label: "Capabilities", href: "#capabilities" },
            { label: "Path", href: "#path" },
            { label: "Contact", href: "#contact" }
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => playHapticClick("low")}
              className="px-3.5 py-1.5 font-mono text-xs text-[#a1a1aa] hover:text-[#f4f4f5] transition-colors rounded-full hover:bg-white/5"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Tools: Email Copy & Audio Toggle */}
        <div className="flex items-center space-x-2 pointer-events-auto">
          
          <button
            onClick={handleCopyEmail}
            title="Click to copy email"
            className="flex items-center space-x-2 rounded-full border border-white/10 bg-[#121215]/80 px-3.5 py-2 font-mono text-xs text-[#f4f4f5] backdrop-blur-xl hover:border-white/25 transition-colors"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-semibold">Copied</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5 text-[#71717a]" />
                <span className="hidden sm:inline">narayan.nkj@gmail.com</span>
                <span className="sm:hidden">Email</span>
              </>
            )}
          </button>

          <button
            onClick={handleSoundToggle}
            aria-label={muted ? "Unmute Audio" : "Mute Audio"}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-[#121215]/80 backdrop-blur-xl text-[#a1a1aa] hover:text-[#f4f4f5] hover:border-white/25 transition-colors"
          >
            {muted ? (
              <VolumeX className="h-3.5 w-3.5" />
            ) : (
              <Volume2 className="h-3.5 w-3.5 text-[#ff4520] animate-pulse" />
            )}
          </button>

        </div>

      </div>
    </header>
  );
}

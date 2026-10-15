"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Volume2, VolumeX, Sparkles } from "lucide-react";
import { useAccent, ACCENT_THEMES } from "./AccentContext";
import { toggleAudioMute, isMuted, playHapticClick } from "@/lib/sound";

export default function Navbar() {
  const { currentTheme, setTheme, setCursorVariant } = useAccent();
  const [muted, setMuted] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    setMuted(isMuted());

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

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
        setTimeString("18:30:00 IST");
      }
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSoundToggle = () => {
    const isNowMuted = toggleAudioMute();
    setMuted(isNowMuted);
  };

  const scrollToSection = (id: string) => {
    playHapticClick("mid");
    const lenis = (window as unknown as { __lenis?: { scrollTo: (target: string) => void } }).__lenis;
    if (lenis) {
      lenis.scrollTo(`#${id}`);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 lg:px-12 xl:px-16 py-5 transition-all duration-300 pointer-events-none">
      <div className="w-full max-w-[1800px] 2xl:max-w-[1920px] mx-auto flex items-center justify-between">
        
        {/* Name & Kolkata IST Clock */}
        <div className="flex items-center space-x-4 pointer-events-auto">
          <Link
            href="/"
            onClick={() => playHapticClick("mid")}
            onMouseEnter={() => setCursorVariant("link")}
            onMouseLeave={() => setCursorVariant("default")}
            className="group flex items-center space-x-2.5 rounded-full border border-white/10 bg-[#0f0f13]/80 px-3.5 py-1.5 backdrop-blur-md transition-colors hover:border-white/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-primary)] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-primary)]" />
            </span>
            <span className="font-editorial text-sm font-semibold tracking-tight text-[#F2F1EE]">
              NARAYAN KUMAR JHA
            </span>
          </Link>

          {/* Real-time Clock in Kolkata IST */}
          <div className="hidden md:flex items-center space-x-2 font-meta text-[11px] text-[#7A7A7E] border-l border-white/10 pl-4">
            <span className="text-white/40">KOLKATA</span>
            <span className="text-[#F2F1EE]/90">{timeString || "18:30:00 IST"}</span>
          </div>
        </div>

        {/* Center Nav Links (Desktop) */}
        <nav
          aria-label="Main Navigation"
          className={`hidden md:flex items-center space-x-1 rounded-full border border-white/10 bg-[#0f0f13]/80 px-4 py-1.5 backdrop-blur-md pointer-events-auto transition-all duration-300 ${
            scrolled ? "shadow-2xl shadow-black/60 border-white/15" : ""
          }`}
        >
          {[
            { label: "Projects", target: "work" },
            { label: "Approach", target: "approach" },
            { label: "Skills & Matrix", target: "capabilities" },
            { label: "Education & Path", target: "experience" },
            { label: "Contact", target: "contact" }
          ].map((item) => (
            <button
              key={item.target}
              onClick={() => scrollToSection(item.target)}
              onMouseEnter={() => {
                setCursorVariant("link");
                playHapticClick("low");
              }}
              onMouseLeave={() => setCursorVariant("default")}
              className="px-3 py-1 font-meta text-xs text-[#8E8E93] hover:text-[#F2F1EE] transition-colors rounded-full hover:bg-white/5"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right Tools: Status, Accent Palette & Sound */}
        <div className="flex items-center space-x-2.5 pointer-events-auto">
          
          {/* Availability Status Tag */}
          <div className="hidden lg:flex items-center space-x-2 rounded-full border border-white/5 bg-[#121216]/90 px-3 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
            <span className="font-meta text-[11px] text-[#8E8E93]">
              IIT Madras &amp; BPPIMT
            </span>
          </div>

          {/* Accent Color Palette Switcher */}
          <div className="relative">
            <button
              onClick={() => {
                setPaletteOpen(!paletteOpen);
                playHapticClick("mid");
              }}
              onMouseEnter={() => setCursorVariant("link")}
              onMouseLeave={() => setCursorVariant("default")}
              aria-label="Change Accent Color"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-[#0f0f13]/80 backdrop-blur-md text-[#F2F1EE] hover:border-white/30 transition-colors"
            >
              <Sparkles className="h-4 w-4 text-[var(--accent-primary)] transition-colors duration-300" />
            </button>

            {paletteOpen && (
              <div className="absolute right-0 mt-2 p-2 rounded-2xl border border-white/15 bg-[#121216]/95 backdrop-blur-xl shadow-2xl flex flex-col gap-1.5 min-w-[140px] z-50 animate-in fade-in zoom-in-95 duration-150">
                <span className="font-meta text-[10px] text-[#7A7A7E] uppercase px-2 py-1 tracking-wider">
                  Accents
                </span>
                {ACCENT_THEMES.map((theme) => (
                  <button
                    key={theme.id}
                    onClick={() => {
                      setTheme(theme.id);
                      setPaletteOpen(false);
                    }}
                    className={`flex items-center space-x-2.5 px-2.5 py-1.5 rounded-xl text-left transition-colors ${
                      currentTheme.id === theme.id ? "bg-white/10 text-white" : "hover:bg-white/5 text-[#8E8E93]"
                    }`}
                  >
                    <span
                      className="h-3 w-3 rounded-full border border-white/20"
                      style={{ backgroundColor: theme.hex }}
                    />
                    <span className="font-meta text-xs">{theme.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Tactile Audio Switch */}
          <button
            onClick={handleSoundToggle}
            onMouseEnter={() => setCursorVariant("link")}
            onMouseLeave={() => setCursorVariant("default")}
            aria-label={muted ? "Unmute UI Haptics" : "Mute UI Haptics"}
            title={muted ? "Unmute subtle audio feedback" : "Audio active"}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-[#0f0f13]/80 backdrop-blur-md text-[#8E8E93] hover:text-[#F2F1EE] hover:border-white/30 transition-colors"
          >
            {muted ? (
              <VolumeX className="h-4 w-4" />
            ) : (
              <Volume2 className="h-4 w-4 text-[var(--accent-primary)] animate-pulse" />
            )}
          </button>
        </div>

      </div>
    </header>
  );
}

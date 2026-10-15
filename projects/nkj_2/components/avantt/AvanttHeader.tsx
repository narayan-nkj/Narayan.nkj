"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Volume2, VolumeX, Sliders, ArrowUpRight } from "lucide-react";
import { toggleAudioMute, isMuted, playHapticClick } from "@/lib/sound";

export interface SpecimenSettings {
  weight: number;
  isItalic: boolean;
  fontSize: number;
  letterSpacing: number;
  accentColor: string;
}

export default function AvanttHeader({
  settings,
  onUpdateSettings
}: {
  settings: SpecimenSettings;
  onUpdateSettings: (newSettings: Partial<SpecimenSettings>) => void;
}) {
  const [muted, setMuted] = useState(true);
  const [timeString, setTimeString] = useState("");
  const [showToolbar, setShowToolbar] = useState(false);

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

  const weights = [
    { label: "Thin", val: 300 },
    { label: "Regular", val: 400 },
    { label: "Medium", val: 500 },
    { label: "Bold", val: 700 },
    { label: "Black", val: 900 }
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-40 bg-[#0a0a0c]/90 backdrop-blur-md border-b border-[#24242c]">
      
      {/* Top Primary Bar */}
      <div className="max-w-[1700px] mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4 font-mono text-xs">
        
        {/* Left Wordmark & Identity */}
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            onClick={() => playHapticClick("mid")}
            className="flex items-center space-x-2.5 font-display text-sm font-bold tracking-tight text-[#f2f1ee] hover:text-[#c3004f] transition-colors"
          >
            <span className="h-2.5 w-2.5 bg-[#c3004f] rounded-none" />
            <span>NARAYAN KUMAR JHA</span>
          </Link>
          <span className="hidden sm:inline text-white/20">/</span>
          <span className="hidden sm:inline text-[#88888e]">
            IIT MADRAS &amp; BPPIMT
          </span>
        </div>

        {/* Center Navigation Specimen Tabs */}
        <nav className="hidden lg:flex items-center space-x-6 text-[#88888e]">
          {[
            { label: "01 / SPECIMEN", href: "#specimen" },
            { label: "02 / KEY PROJECTS", href: "#projects" },
            { label: "03 / DATA MATRIX", href: "#matrix" },
            { label: "04 / ACADEMIC PATH", href: "#education" },
            { label: "05 / CONTACT", href: "#contact" }
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => playHapticClick("low")}
              className="hover:text-[#f2f1ee] hover:underline decoration-[#c3004f] underline-offset-4 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Tools: Timezone Clock, Controls & Audio */}
        <div className="flex items-center space-x-3">
          
          {/* Kolkata Clock */}
          <div className="hidden sm:flex items-center space-x-1.5 text-[#77777d]">
            <span>KOLKATA</span>
            <span className="text-[#f2f1ee] font-semibold">{timeString || "19:00:00 IST"}</span>
          </div>

          {/* Quick Variable Specimen Controls Toggle */}
          <button
            onClick={() => {
              setShowToolbar(!showToolbar);
              playHapticClick("mid");
            }}
            className={`flex items-center space-x-1.5 px-3 py-1.5 border transition-colors ${
              showToolbar ? "bg-[#c3004f] text-white border-[#c3004f]" : "bg-[#141418] text-[#88888e] border-[#24242c] hover:border-white/20 hover:text-white"
            }`}
          >
            <Sliders className="h-3.5 w-3.5" />
            <span className="hidden md:inline">SPECIMEN CONTROLS</span>
          </button>

          {/* Audio Haptics */}
          <button
            onClick={handleSoundToggle}
            aria-label="Toggle Audio"
            className="flex h-8 w-8 items-center justify-center border border-[#24242c] bg-[#141418] text-[#88888e] hover:text-white hover:border-white/20 transition-colors"
          >
            {muted ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5 text-[#c3004f]" />}
          </button>

        </div>

      </div>

      {/* Avantt Interactive Specimen Variable Toolbar (Expandable) */}
      {showToolbar && (
        <div className="border-t border-[#24242c] bg-[#0e0e12] px-4 sm:px-8 py-3 font-mono text-xs">
          <div className="max-w-[1700px] mx-auto flex flex-wrap items-center justify-between gap-6">
            
            {/* Weight Switchers */}
            <div className="flex items-center space-x-2">
              <span className="text-[#77777d] mr-2">WEIGHT:</span>
              <div className="flex border border-[#24242c] divide-x divide-[#24242c]">
                {weights.map((w) => (
                  <button
                    key={w.val}
                    onClick={() => {
                      onUpdateSettings({ weight: w.val });
                      playHapticClick("low");
                    }}
                    className={`px-3 py-1 transition-colors ${
                      settings.weight === w.val ? "bg-[#c3004f] text-white font-bold" : "bg-[#141418] text-[#88888e] hover:text-white"
                    }`}
                  >
                    {w.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Slant / Italic Toggle */}
            <div className="flex items-center space-x-2">
              <span className="text-[#77777d] mr-2">SLANT:</span>
              <div className="flex border border-[#24242c] divide-x divide-[#24242c]">
                <button
                  onClick={() => {
                    onUpdateSettings({ isItalic: false });
                    playHapticClick("low");
                  }}
                  className={`px-3 py-1 transition-colors ${
                    !settings.isItalic ? "bg-[#c3004f] text-white font-bold" : "bg-[#141418] text-[#88888e] hover:text-white"
                  }`}
                >
                  ROMAN
                </button>
                <button
                  onClick={() => {
                    onUpdateSettings({ isItalic: true });
                    playHapticClick("low");
                  }}
                  className={`px-3 py-1 italic transition-colors ${
                    settings.isItalic ? "bg-[#c3004f] text-white font-bold" : "bg-[#141418] text-[#88888e] hover:text-white"
                  }`}
                >
                  ITALIC
                </button>
              </div>
            </div>

            {/* Size Slider */}
            <div className="flex items-center space-x-3">
              <span className="text-[#77777d]">SIZE:</span>
              <input
                type="range"
                min="24"
                max="120"
                value={settings.fontSize}
                onChange={(e) => onUpdateSettings({ fontSize: Number(e.target.value) })}
                className="w-28 accent-[#c3004f] cursor-pointer"
              />
              <span className="text-[#f2f1ee] w-12">{settings.fontSize}px</span>
            </div>

          </div>
        </div>
      )}

    </header>
  );
}

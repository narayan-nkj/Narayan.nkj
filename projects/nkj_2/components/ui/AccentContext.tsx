"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { playHapticClick } from "@/lib/sound";

export interface AccentTheme {
  id: string;
  name: string;
  hex: string;
  rgb: string;
  glow: string;
}

export const ACCENT_THEMES: AccentTheme[] = [
  {
    id: "amber",
    name: "Deep Amber",
    hex: "#D98E3C",
    rgb: "217, 142, 60",
    glow: "rgba(217, 142, 60, 0.18)"
  },
  {
    id: "acid",
    name: "Acid Volt",
    hex: "#C6FF6E",
    rgb: "198, 255, 110",
    glow: "rgba(198, 255, 110, 0.16)"
  },
  {
    id: "cyan",
    name: "Cyan Plasma",
    hex: "#38BDF8",
    rgb: "56, 189, 248",
    glow: "rgba(56, 189, 248, 0.18)"
  },
  {
    id: "silver",
    name: "Monolith Silver",
    hex: "#E4E4E7",
    rgb: "228, 228, 231",
    glow: "rgba(228, 228, 231, 0.15)"
  }
];

interface AccentContextType {
  currentTheme: AccentTheme;
  setTheme: (themeId: string) => void;
  cursorText: string;
  setCursorText: (text: string) => void;
  cursorVariant: "default" | "project" | "link" | "text" | "hidden";
  setCursorVariant: (variant: "default" | "project" | "link" | "text" | "hidden") => void;
}

const AccentContext = createContext<AccentContextType>({
  currentTheme: ACCENT_THEMES[0],
  setTheme: () => {},
  cursorText: "",
  setCursorText: () => {},
  cursorVariant: "default",
  setCursorVariant: () => {}
});

export function AccentProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentThemeState] = useState<AccentTheme>(ACCENT_THEMES[0]);
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState<"default" | "project" | "link" | "text" | "hidden">("default");

  useEffect(() => {
    const saved = localStorage.getItem("portfolio_accent");
    if (saved) {
      const match = ACCENT_THEMES.find((t) => t.id === saved);
      if (match) setCurrentThemeState(match);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--accent-primary", currentTheme.hex);
    root.style.setProperty("--accent-rgb", currentTheme.rgb);
    root.style.setProperty("--accent-glow", currentTheme.glow);
  }, [currentTheme]);

  const setTheme = (themeId: string) => {
    const match = ACCENT_THEMES.find((t) => t.id === themeId);
    if (match) {
      setCurrentThemeState(match);
      localStorage.setItem("portfolio_accent", match.id);
      playHapticClick("high");
    }
  };

  return (
    <AccentContext.Provider
      value={{
        currentTheme,
        setTheme,
        cursorText,
        setCursorText,
        cursorVariant,
        setCursorVariant
      }}
    >
      {children}
    </AccentContext.Provider>
  );
}

export function useAccent() {
  return useContext(AccentContext);
}

"use client";

import React, { useState, useEffect } from "react";
import CinematicPreloader from "@/components/ui/CinematicPreloader";
import Hero from "@/components/home/Hero";
import SelectedWorks from "@/components/home/SelectedWorks";
import DataScienceSystems from "@/components/home/DataScienceSystems";
import EngineeringStack from "@/components/home/EngineeringStack";
import AcademicPath from "@/components/home/AcademicPath";
import ContactFooter from "@/components/home/ContactFooter";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Ensure window always starts at top on initial mount/reload
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <main className="relative min-h-screen bg-[#09090b] text-[#f4f4f5] overflow-x-hidden selection:bg-[#ff4520] selection:text-white">
      {/* Luxury Cinematic Preloader */}
      <CinematicPreloader onComplete={() => setLoaded(true)} />

      {/* Main Exhibition Flow */}
      <div className={`transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-90"}`}>
        <Hero />
        <SelectedWorks />
        <DataScienceSystems />
        <EngineeringStack />
        <AcademicPath />
        <ContactFooter />
      </div>
    </main>
  );
}

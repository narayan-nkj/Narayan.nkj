"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useAccent } from "./AccentContext";

export default function CustomCursor() {
  const { cursorText, cursorVariant } = useAccent();
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 450, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  const ringSpringConfig = { damping: 20, stiffness: 220, mass: 0.8 };
  const ringX = useSpring(cursorX, ringSpringConfig);
  const ringY = useSpring(cursorY, ringSpringConfig);

  useEffect(() => {
    // Check if device has touch primary
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    const moveHandler = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const leaveHandler = () => setIsVisible(false);
    const enterHandler = () => setIsVisible(true);

    window.addEventListener("mousemove", moveHandler);
    document.addEventListener("mouseleave", leaveHandler);
    document.addEventListener("mouseenter", enterHandler);

    return () => {
      window.removeEventListener("mousemove", moveHandler);
      document.removeEventListener("mouseleave", leaveHandler);
      document.removeEventListener("mouseenter", enterHandler);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouch) return null;

  const isProject = cursorVariant === "project" || Boolean(cursorText);
  const isLink = cursorVariant === "link";
  const isHidden = cursorVariant === "hidden" || !isVisible;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {/* Primary pinpoint dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          width: isProject ? 0 : isLink ? 8 : 5,
          height: isProject ? 0 : isLink ? 8 : 5,
          backgroundColor: "var(--accent-primary)",
          opacity: isHidden ? 0 : 1,
          transition: "opacity 0.2s, width 0.2s, height 0.2s"
        }}
      />

      {/* Lagging fluid perimeter ring / badge */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center rounded-full text-center"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          width: isProject ? 84 : isLink ? 48 : 28,
          height: isProject ? 84 : isLink ? 48 : 28,
          backgroundColor: isProject ? "var(--accent-primary)" : "rgba(var(--accent-rgb), 0.08)",
          borderColor: isProject ? "transparent" : "rgba(var(--accent-rgb), 0.35)",
          borderWidth: isProject ? 0 : 1,
          opacity: isHidden ? 0 : 1,
          boxShadow: isProject
            ? "0 0 35px var(--accent-glow)"
            : "none",
          transition: "width 0.3s cubic-bezier(0.16, 1, 0.3, 1), height 0.3s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s, border-color 0.2s, opacity 0.2s"
        }}
      >
        {isProject && cursorText && (
          <span className="font-meta text-[11px] font-bold tracking-widest text-[#08080A] uppercase select-none">
            {cursorText}
          </span>
        )}
      </motion.div>
    </div>
  );
}

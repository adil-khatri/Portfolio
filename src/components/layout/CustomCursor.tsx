"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState("");
  const [cursorIcon, setCursorIcon] = useState<"external" | "download" | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    // Only run on desktop devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const cursor = cursorRef.current;
    if (!cursor) return;

    // Use GSAP quickTo for highly performant tracking
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.2, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.2, ease: "power3" });

    const onMouseMove = (e: MouseEvent) => {
      setIsHidden(false);
      xTo(e.clientX);
      yTo(e.clientY);

      // Check hovered elements for data-cursor attributes
      const target = e.target as HTMLElement;
      const cursorTarget = target.closest("[data-cursor]");
      
      if (cursorTarget) {
        setIsHovering(true);
        const text = cursorTarget.getAttribute("data-cursor-text") || "";
        const icon = cursorTarget.getAttribute("data-cursor-icon") as "external" | "download" | null;
        
        setCursorText(text);
        setCursorIcon(icon);
      } else {
        setIsHovering(false);
        setCursorText("");
        setCursorIcon(null);
      }
    };

    const onMouseLeave = () => setIsHidden(true);
    const onMouseEnter = () => setIsHidden(false);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={cn(
        "pointer-events-none fixed top-0 left-0 z-50 flex items-center justify-center rounded-full mix-blend-difference transition-all duration-300 ease-out",
        "transform -translate-x-1/2 -translate-y-1/2",
        isHidden ? "opacity-0" : "opacity-100",
        isHovering ? "h-24 w-24 bg-accent" : "h-4 w-4 bg-primary"
      )}
    >
      <div
        className={cn(
          "flex items-center justify-center gap-1 font-mono text-sm font-medium text-background transition-opacity duration-300",
          isHovering ? "opacity-100" : "opacity-0"
        )}
      >
        {cursorText && <span>{cursorText}</span>}
        {cursorIcon === "external" && <ArrowUpRight className="h-4 w-4" />}
        {cursorIcon === "download" && <ArrowDown className="h-4 w-4" />}
      </div>
    </div>
  );
}

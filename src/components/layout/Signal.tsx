"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Ensure GSAP plugins are registered
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Signal() {
  const signalRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!signalRef.current || !progressRef.current) return;

    // The main line that grows as you scroll
    ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        gsap.to(progressRef.current, {
          scaleY: self.progress,
          duration: 0.1,
          ease: "none"
        });
      }
    });
    
    // We can add logic to pulse when reaching sections by targeting elements with data-section
    const sections = document.querySelectorAll("[data-section]");
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        onEnter: () => {
          // Subtly pulse the signal line
          gsap.fromTo(progressRef.current, 
            { backgroundColor: "#FF5A36", boxShadow: "0 0 10px #FF5A36" },
            { backgroundColor: "#FF5A36", boxShadow: "0 0 0px #FF5A36", duration: 1 }
          );
        },
        onEnterBack: () => {
          gsap.fromTo(progressRef.current, 
            { backgroundColor: "#FF5A36", boxShadow: "0 0 10px #FF5A36" },
            { backgroundColor: "#FF5A36", boxShadow: "0 0 0px #FF5A36", duration: 1 }
          );
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div 
      ref={signalRef} 
      className="fixed left-4 md:left-12 top-0 bottom-0 w-px bg-border-subtle z-40 hidden md:block"
    >
      <div 
        ref={progressRef}
        className="w-full bg-accent origin-top"
        style={{ height: "100%", transform: "scaleY(0)" }}
      />
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skills } from "@/data/skills";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const rowsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const rows = rowsRef.current.filter(Boolean);

    // Entrance animation for rows on scroll
    gsap.fromTo(rows,
      { opacity: 0, y: 50 },
      {
        opacity: 1, 
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-32 px-4 md:px-12 lg:px-24 border-t border-border-subtle"
      data-section="skills"
    >
      <div className="mb-24">
        <h2 className="font-mono text-sm tracking-widest uppercase text-muted mb-4">
          03 // Capabilities
        </h2>
        <h3 className="text-5xl md:text-7xl font-bold tracking-tighter">
          Technical Arsenal
        </h3>
      </div>
      
      <div className="flex flex-col border-t border-[#222]">
        {skills.map((skillGroup, index) => (
          <div 
            key={skillGroup.category} 
            ref={el => { rowsRef.current[index] = el }}
            className="group flex flex-col md:flex-row border-b border-[#222] transition-colors duration-500 hover:bg-[#111] hover:px-6 -mx-6 px-6"
          >
            {/* Left side: Number & Category */}
            <div className="md:w-1/3 py-8 md:py-12 flex flex-col justify-between">
              <span className="font-mono text-muted text-sm tracking-widest mb-4">
                0{index + 1}
              </span>
              <h4 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary group-hover:text-accent transition-colors duration-300">
                {skillGroup.category}
              </h4>
            </div>

            {/* Right side: Skills Pill Wrap */}
            <div className="md:w-2/3 py-8 md:py-12 flex flex-wrap gap-4 content-start">
              {skillGroup.items.map((item) => (
                <span 
                  key={item} 
                  className="px-6 py-3 rounded-full border border-[#333] text-lg font-medium text-muted group-hover:border-accent/30 group-hover:text-primary transition-all duration-300 bg-background group-hover:bg-[#1A1A1A]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

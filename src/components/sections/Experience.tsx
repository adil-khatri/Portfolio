"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experiences } from "@/data/experience";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const rows = containerRef.current.querySelectorAll(".experience-row");
    
    rows.forEach((row, i) => {
      gsap.fromTo(row,
        { opacity: 0, y: 50 },
        {
          opacity: 1, 
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 85%",
          }
        }
      );
    });
  }, []);

  return (
    <section 
      ref={containerRef}
      className="py-32 px-4 md:px-24 border-t border-border-subtle"
      data-section="experience"
    >
      <div className="mb-20">
        <h2 className="font-mono text-sm tracking-widest uppercase text-muted mb-4">
          01 // Experience
        </h2>
        <h3 className="text-4xl md:text-6xl font-bold tracking-tight">
          Professional Background
        </h3>
      </div>
      
      <div className="flex flex-col">
        {experiences.map((exp, index) => (
          <div 
            key={exp.id}
            className="experience-row group flex flex-col md:flex-row gap-8 py-12 border-t border-border-subtle hover:bg-surface/50 transition-colors duration-500 -mx-4 md:-mx-12 px-4 md:px-12"
          >
            <div className="md:w-1/4 shrink-0 font-mono text-sm text-muted pt-1">
              {exp.year}
            </div>
            <div className="md:w-3/4 flex flex-col gap-4">
              <div>
                <h4 className="text-2xl font-bold text-primary mb-1 group-hover:text-accent transition-colors">
                  {exp.company}
                </h4>
                <div className="font-mono text-sm text-muted">
                  {exp.role}
                </div>
              </div>
              <p className="text-lg text-muted max-w-3xl leading-relaxed">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {exp.technologies.map(tech => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 rounded-full border border-border-subtle font-mono text-xs text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { projects } from "@/data/projects";

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRevealRef = useRef<HTMLDivElement>(null);
  const imageInnerRef = useRef<HTMLImageElement>(null);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    if (!containerRef.current || !imageRevealRef.current) return;
    
    const xTo = gsap.quickTo(imageRevealRef.current, "x", { duration: 0.4, ease: "power3" });
    const yTo = gsap.quickTo(imageRevealRef.current, "y", { duration: 0.4, ease: "power3" });
    
    const onMouseMove = (e: MouseEvent) => {
      // Offset by half the width/height to center on cursor
      xTo(e.clientX - 200);
      yTo(e.clientY - 250);
    };
    
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  const handleMouseEnter = (index: number) => {
    setActiveProject(index);
    gsap.to(imageRevealRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.4,
      ease: "power2.out"
    });
    if (imageInnerRef.current) {
      gsap.fromTo(imageInnerRef.current, 
        { scale: 1.2 }, 
        { scale: 1, duration: 0.4, ease: "power2.out" }
      );
    }
  };

  const handleMouseLeave = () => {
    gsap.to(imageRevealRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.4,
      ease: "power2.in"
    });
  };

  return (
    <section 
      ref={containerRef}
      className="py-32 px-4 md:px-24 bg-inverted-bg text-inverted-text"
      data-section="projects"
    >
      <div className="mb-20">
        <h2 className="font-mono text-sm tracking-widest uppercase text-muted mb-4 opacity-70">
          02 // My Work
        </h2>
        <h3 className="text-4xl md:text-6xl font-bold tracking-tight">
          Engineering Showcase
        </h3>
      </div>
      
      {/* Floating Image Reveal (Desktop Only) */}
      <div 
        ref={imageRevealRef}
        className={`fixed top-0 left-0 w-[450px] pointer-events-none z-40 md:block opacity-0 scale-80 overflow-hidden transition-opacity duration-300 ${!projects[activeProject]?.image ? 'hidden' : 'hidden md:block'}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {projects[activeProject]?.image && (
          <img 
            ref={imageInnerRef}
            src={projects[activeProject]?.image} 
            alt={projects[activeProject]?.title}
            className="w-full h-auto rounded-xl shadow-2xl"
          />
        )}
      </div>

      <div className="flex flex-col border-t border-[#111111]/20">
        {projects.map((project, index) => (
          <div
            key={project.id}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className="group py-12 md:py-20 border-b border-[#111111]/20 hover:bg-[#111111]/5 transition-colors duration-500 -mx-4 md:-mx-24 px-4 md:px-24"
          >
            <div className="flex flex-col md:flex-row gap-8 justify-between">
              {/* Title */}
              <div className="md:w-1/2">
                <h4 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h4>
              </div>
              
              {/* Description Block */}
              <div className="md:w-1/2 flex flex-col gap-8 md:pl-12">
                <div>
                  <h5 className="font-mono text-sm uppercase opacity-50 mb-2">The Problem</h5>
                  <p className="text-lg leading-relaxed font-medium">{project.problem}</p>
                </div>
                <div>
                  <h5 className="font-mono text-sm uppercase opacity-50 mb-2">What I Built</h5>
                  <p className="text-lg leading-relaxed font-medium">{project.built}</p>
                </div>
                <div>
                  <h5 className="font-mono text-sm uppercase opacity-50 mb-2">Engineering Challenge</h5>
                  <p className="text-lg leading-relaxed font-medium">{project.challenge}</p>
                </div>
                <div>
                  <h5 className="font-mono text-sm uppercase opacity-50 mb-2">Result</h5>
                  <p className="text-lg leading-relaxed font-medium text-accent">{project.result}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.stack.map(tech => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 rounded-full border border-[#111111]/20 font-mono text-xs uppercase"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

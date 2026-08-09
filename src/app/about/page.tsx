"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Contact from "@/components/sections/Contact";

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    const img = imageRef.current;
    if (!container || !text || !img) return;
    
    // Initial reveal animations
    gsap.fromTo(text, 
      { opacity: 0, y: 100 }, 
      { opacity: 1, y: 0, duration: 1.2, ease: "power4.out", delay: 0.2 }
    );
    
    gsap.fromTo(img, 
      { opacity: 0, scale: 0.95 }, 
      { opacity: 1, scale: 1, duration: 1.5, ease: "power3.out", delay: 0.4 }
    );

    if (contentRef.current) {
      gsap.fromTo(contentRef.current.children,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.8 }
      );
    }
    
    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 40; 
      const y = (clientY / window.innerHeight - 0.5) * 40;
      
      gsap.to(text, {
        x: x,
        y: y,
        duration: 1,
        ease: "power2.out"
      });
      
      gsap.to(img, {
        x: -x * 0.5,
        y: -y * 0.5,
        duration: 1,
        ease: "power2.out"
      });
    };
    
    container.addEventListener("mousemove", onMouseMove);
    
    return () => {
      container.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <main className="min-h-screen bg-background text-primary selection:bg-accent selection:text-white" ref={containerRef}>
      
      <div className="pt-32 md:pt-48 pb-24 px-4 md:px-12 lg:px-24">
        
        {/* Massive Intro */}
        <h1 
          ref={textRef}
          className="text-[10vw] md:text-[8vw] leading-[1] font-bold tracking-tighter text-primary mix-blend-difference relative z-10 max-w-7xl"
        >
          BUILDING<br />
          SYSTEMS THAT<br />
          <span className="text-muted">SCALE.</span>
        </h1>

        {/* Image Placeholder & Narrative */}
        <div className="mt-24 md:mt-32 flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-0">
          
          {/* Image Placeholder */}
          <div className="lg:w-1/2">
            <div 
              ref={imageRef}
              className="w-full aspect-[3/4] md:aspect-square lg:aspect-[3/4] bg-[#111111] rounded-2xl overflow-hidden relative shadow-2xl flex items-center justify-center border border-[#222]"
            >
              <img 
                src="/images/Adil-about.jpeg" 
                alt="Adil Khatri"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Narrative Content */}
          <div ref={contentRef} className="lg:w-1/2 flex flex-col gap-12 pt-8 lg:pt-24">
            
            <div>
              <p className="font-mono text-accent text-sm tracking-widest uppercase mb-6">Who I Am</p>
              <p className="text-2xl md:text-3xl leading-relaxed text-primary font-medium">
                I am a Software Engineer bridging the gap between highly scalable backend architectures and extremely polished, premium frontend experiences.
              </p>
            </div>
            
            <div>
              <p className="font-mono text-muted text-sm tracking-widest uppercase mb-6">My Background</p>
              <div className="text-lg text-muted space-y-6 max-w-xl">
                <p>
                  Currently pursuing my Master's in Computer Science in Germany, my focus lies in Software Engineering and Intelligent Systems. 
                  My background spans full-stack SaaS product development, intricate AI implementations, and robust e-commerce platforms.
                </p>
                <p>
                  I believe that great software isn't just about writing code—it's about understanding the core business problem, crafting reliable 
                  data flows, and ensuring the final user interface is fast, accessible, and an absolute joy to use.
                </p>
              </div>
            </div>

            <div>
              <p className="font-mono text-muted text-sm tracking-widest uppercase mb-6">What I Do Best</p>
              <ul className="text-lg text-primary space-y-4 max-w-xl border-l border-[#2A2927] pl-6">
                <li>Architecting secure, role-based backend systems</li>
                <li>Developing high-performance React and Next.js applications</li>
                <li>Integrating AI APIs and multi-agent workflows</li>
                <li>Polishing UI with smooth, hardware-accelerated animations</li>
              </ul>
            </div>

            <div className="pt-8 border-t border-[#222]">
              <p className="font-mono text-muted text-sm tracking-widest uppercase mb-6">Location & Contact</p>
              <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
                <p className="text-lg text-primary">Kaiserslautern, Germany</p>
                <a 
                  href="mailto:adilaqzma@gmail.com"
                  data-cursor-text="EMAIL"
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-background transition-colors duration-300 font-mono text-sm uppercase tracking-wider rounded-full"
                >
                  Contact via Email
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      {/* Contact Section at the bottom */}
      <div className="mt-24">
        <Contact />
      </div>

    </main>
  );
}

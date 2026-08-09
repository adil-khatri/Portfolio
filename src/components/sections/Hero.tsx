"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    const img = imageRef.current;
    if (!container || !text || !img) return;
    
    // Initial fade in for the image
    gsap.fromTo(img, 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.5 }
    );
    
    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 30; // 30px max movement
      const y = (clientY / window.innerHeight - 0.5) * 30;
      
      gsap.to(text, {
        x: x,
        y: y,
        duration: 1,
        ease: "power2.out"
      });
      
      // Opposite parallax for the image
      gsap.to(img, {
        x: -x * 1.5,
        y: -y * 1.5,
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
    <section 
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center px-4 md:px-24 pt-20 overflow-hidden"
      data-section="hero"
    >
      <div className="z-10 mt-auto pointer-events-none w-full">
        <p className="font-mono text-muted text-sm md:text-base mb-4 tracking-widest uppercase">
          Software Engineer &middot; AI &middot; Full-Stack 
        </p>
        
        <h1 
          ref={textRef}
          className="text-[12vw] leading-[0.9] font-bold tracking-tighter text-primary mix-blend-difference relative z-10"
        >
          ADIL<br />KHATRI
        </h1>

        {/* Profile Image - Desktop only, right-aligned center */}
        <div 
          ref={imageRef}
          className="hidden lg:block absolute top-1/2 right-15 -translate-y-1/2 w-[650px] z-0 pointer-events-none opacity-0"
        >
          <img 
            src="/images/Adil-profile-ohnebg.png" 
            alt="Adil Khatri"
            className="w-full h-auto object-contain shadow-md"
          />
        </div>
      </div>
      
      <div className="mt-auto pb-12 flex flex-col md:flex-row md:items-end justify-between gap-8 z-10 w-full pt-20">
        <p className="max-w-md text-lg text-muted mix-blend-difference">
          Building reliable software architectures, intelligent systems, and seamless digital experiences that scale.
        </p>
        
        <div className="flex gap-6 font-mono text-sm uppercase tracking-wider">
          <Link 
            href="/about" 
            data-cursor-text="VIEW"
            className="hover:text-accent transition-colors"
          >
            About
          </Link>
          {/* <Link 
            href="/resume.pdf" 
            target="_blank"
            data-cursor-text="PDF"
            data-cursor-icon="download"
            className="hover:text-accent transition-colors"
          >
            Resume
          </Link> */}
          <Link 
            href="https://github.com/adil-khatri/" 
            target="_blank"
            data-cursor-text="GITHUB"
            data-cursor-icon="external"
            className="hover:text-accent transition-colors flex items-center gap-1"
          >
            GitHub <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link 
            href="https://www.linkedin.com/in/adil-khatri/" 
            target="_blank"
            data-cursor-text="LINKEDIN"
            data-cursor-icon="external"
            className="hover:text-accent transition-colors flex items-center gap-1"
          >
            LinkedIn <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

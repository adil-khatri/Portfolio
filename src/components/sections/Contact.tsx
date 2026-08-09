"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return;
    
    // Magnetic button effect for the big text
    const onMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !textRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      gsap.to(textRef.current, {
        x: x * 0.1,
        y: y * 0.1,
        duration: 1,
        ease: "power2.out"
      });
    };
    
    const onMouseLeave = () => {
      gsap.to(textRef.current, {
        x: 0,
        y: 0,
        duration: 1,
        ease: "power2.out"
      });
    };
    
    containerRef.current.addEventListener("mousemove", onMouseMove);
    containerRef.current.addEventListener("mouseleave", onMouseLeave);
    
    return () => {
      if (containerRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        containerRef.current.removeEventListener("mousemove", onMouseMove);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        containerRef.current.removeEventListener("mouseleave", onMouseLeave);
      }
    };
  }, []);

  return (
    <footer 
      ref={containerRef}
      className="relative py-32 px-4 md:px-24 bg-background border-t border-border-subtle overflow-hidden flex flex-col justify-center items-center text-center min-h-[70vh]"
      data-section="contact"
    >
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_var(--color-accent)_0,_transparent_100%)] mix-blend-screen" />
      
      <p className="font-mono text-sm tracking-widest uppercase text-muted mb-8 z-10">
        04 // Next Steps
      </p>
      
      <Link 
        href="/contact"
        data-cursor-text="CONTACT"
        className="group z-10 block"
      >
        <h2 
          ref={textRef}
          className="text-5xl md:text-[8vw] font-bold tracking-tighter leading-none group-hover:text-accent transition-colors duration-500 flex items-center justify-center gap-4"
        >
          LET&apos;S TALK
          <ArrowUpRight className="w-12 h-12 md:w-24 md:h-24 opacity-0 -translate-x-8 translate-y-8 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 ease-out" />
        </h2>
      </Link>
      
      <div className="mt-24 w-full flex flex-col md:flex-row justify-between items-center gap-8 border-t border-border-subtle pt-12 z-10">
        <p className="font-mono text-xs text-muted">
          &copy; {new Date().getFullYear()} ADIL KHATRI. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-6 font-mono text-xs uppercase tracking-widest">
          <Link href="https://github.com/adilkhatri" target="_blank" className="hover:text-accent transition-colors">GitHub</Link>
          <Link href="https://linkedin.com/in/adilkhatri" target="_blank" className="hover:text-accent transition-colors">LinkedIn</Link>
          {/* <Link href="/resume.pdf" target="_blank" className="hover:text-accent transition-colors">Resume</Link> */}
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    const form = formRef.current;
    if (!container || !text || !form) return;
    
    // Initial reveal animations
    gsap.fromTo(text, 
      { opacity: 0, y: 100 }, 
      { opacity: 1, y: 0, duration: 1.2, ease: "power4.out", delay: 0.2 }
    );
    
    gsap.fromTo(form.children,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.6 }
    );

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
          className="text-[10vw] md:text-[8vw] leading-[1] font-bold tracking-tighter text-primary relative z-10 max-w-7xl mb-24"
        >
          LET'S START A<br />
          PROJECT <span className="text-muted">TOGETHER.</span>
        </h1>

        <div className="flex flex-col-reverse lg:flex-row gap-16 lg:gap-32 relative z-10">
          
          {/* Netlify Form */}
          <div className="lg:w-2/3">
            <form 
              ref={formRef}
              name="contact"
              method="POST" 
              data-netlify="true"
              data-netlify-recaptcha="true"
              action="/success"
              className="flex flex-col gap-12"
            >
              {/* Hidden input for Netlify routing in Next.js */}
              <input type="hidden" name="form-name" value="contact" />

              <div className="flex flex-col md:flex-row gap-12">
                <div className="flex flex-col gap-4 flex-1">
                  <label htmlFor="name" className="font-mono text-muted text-sm tracking-widest uppercase">01 // What's your name?</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name" 
                    required
                    placeholder="John Doe"
                    className="w-full bg-transparent border-b border-[#333] pb-4 text-xl md:text-2xl text-primary placeholder:text-[#333] focus:outline-none focus:border-accent transition-colors rounded-none"
                  />
                </div>
                
                <div className="flex flex-col gap-4 flex-1">
                  <label htmlFor="email" className="font-mono text-muted text-sm tracking-widest uppercase">02 // What's your email?</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email" 
                    required
                    placeholder="john@doe.com"
                    className="w-full bg-transparent border-b border-[#333] pb-4 text-xl md:text-2xl text-primary placeholder:text-[#333] focus:outline-none focus:border-accent transition-colors rounded-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <label htmlFor="subject" className="font-mono text-muted text-sm tracking-widest uppercase">03 // Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject" 
                  required
                  placeholder="Web Development Project"
                  className="w-full bg-transparent border-b border-[#333] pb-4 text-xl md:text-2xl text-primary placeholder:text-[#333] focus:outline-none focus:border-accent transition-colors rounded-none"
                />
              </div>

              <div className="flex flex-col gap-4">
                <label htmlFor="message" className="font-mono text-muted text-sm tracking-widest uppercase">04 // Your message</label>
                <textarea 
                  id="message"
                  name="message" 
                  required
                  rows={4}
                  placeholder="Hello Adil, can you help me with..."
                  className="w-full bg-transparent border-b border-[#333] pb-4 text-xl md:text-2xl text-primary placeholder:text-[#333] focus:outline-none focus:border-accent transition-colors resize-none rounded-none"
                ></textarea>
              </div>

              <div data-netlify-recaptcha="true"></div>

              <div>
                <button 
                  type="submit"
                  data-cursor-text="SEND"
                  className="mt-8 inline-flex items-center justify-center px-12 py-5 bg-primary text-background hover:bg-accent transition-colors duration-300 font-mono text-sm uppercase tracking-wider rounded-full"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Details */}
          <div className="lg:w-1/3 flex flex-col gap-12">
            <div>
              <p className="font-mono text-muted text-sm tracking-widest uppercase mb-4">Contact Details</p>
              <div className="flex flex-col gap-2 text-lg md:text-xl">
                <a href="mailto:adilaqzma@gmail.com" className="hover:text-accent transition-colors inline-block w-fit">
                  adilaqzma@gmail.com
                </a>
                <p className="text-muted">Kaiserslautern, Germany</p>
              </div>
            </div>

            <div>
              <p className="font-mono text-muted text-sm tracking-widest uppercase mb-4">Socials</p>
              <div className="flex flex-col gap-3 text-lg md:text-xl">
                <a href="https://linkedin.com/in/adil-khatri" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors group w-fit">
                  LinkedIn <ArrowUpRight className="w-5 h-5 opacity-0 -translate-y-2 -translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </a>
                <a href="https://github.com/adil-khatri" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors group w-fit">
                  GitHub <ArrowUpRight className="w-5 h-5 opacity-0 -translate-y-2 -translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </a>
                <a href="https://www.instagram.com/adil_khatri_2346/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors group w-fit">
                  Instagram <ArrowUpRight className="w-5 h-5 opacity-0 -translate-y-2 -translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </a> 
                <a href="https://x.com/khatriadil046" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors group w-fit">
                  X (twitter) <ArrowUpRight className="w-5 h-5 opacity-0 -translate-y-2 -translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </a>
                <a 
                  href="mailto:adilaqzma@gmail.com"
                  data-cursor-text="EMAIL"
                  className="mt-6 inline-flex items-center justify-center px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-background transition-colors duration-300 font-mono text-sm uppercase tracking-wider rounded-full w-fit"
                >
                  Contact via Email
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

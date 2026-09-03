"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { achievements } from "@/data/achievements";
import { X } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Achievements() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Drag-to-scroll logic
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDown = true;
      el.classList.add("cursor-grabbing");
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    };

    const onMouseLeave = () => {
      isDown = false;
      el.classList.remove("cursor-grabbing");
    };

    const onMouseUp = () => {
      isDown = false;
      el.classList.remove("cursor-grabbing");
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 2;
      el.scrollLeft = scrollLeft - walk;
    };

    el.addEventListener("mousedown", onMouseDown);
    el.addEventListener("mouseleave", onMouseLeave);
    el.addEventListener("mouseup", onMouseUp);
    el.addEventListener("mousemove", onMouseMove);

    return () => {
      el.removeEventListener("mousedown", onMouseDown);
      el.removeEventListener("mouseleave", onMouseLeave);
      el.removeEventListener("mouseup", onMouseUp);
      el.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  // Scroll-reveal for heading
  useEffect(() => {
    if (!sectionRef.current) return;

    const heading = sectionRef.current.querySelector(".achievements-heading");
    if (heading) {
      gsap.fromTo(heading,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        }
      );
    }
  }, []);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (lightboxIndex === null) return;
      if (e.key === "ArrowRight") setLightboxIndex((prev) => prev !== null && prev < achievements.length - 1 ? prev + 1 : 0);
      if (e.key === "ArrowLeft") setLightboxIndex((prev) => prev !== null && prev > 0 ? prev - 1 : achievements.length - 1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  return (
    <>
      <section
        id="achievements"
        ref={sectionRef}
        className="scroll-mt-24 py-32 border-t border-border-subtle overflow-hidden"
        data-section="achievements"
      >
        {/* Section Header */}
        <div className="achievements-heading px-4 md:px-12 lg:px-24 mb-16">
          <h2 className="font-mono text-sm tracking-widest uppercase text-muted mb-4">
            04 // Recognition
          </h2>
          <h3 className="text-5xl md:text-7xl font-bold tracking-tighter">
            Achievements
          </h3>
        </div>

        {/* Horizontal Scroll Track */}
        <div className="px-4 md:px-12 lg:px-24">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 md:gap-8 overflow-x-auto pb-8 cursor-grab select-none"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              onClick={() => setLightboxIndex(index)}
              data-cursor-text="VIEW"
              className="group relative shrink-0 w-[80vw] sm:w-[60vw] md:w-[45vw] lg:w-[32vw] cursor-pointer"
            >
              {/* Card */}
              <div className="relative overflow-hidden rounded-2xl bg-[#111] border border-[#222] transition-all duration-500 group-hover:border-accent/40 group-hover:shadow-[0_0_60px_rgba(255,90,54,0.08)]">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    draggable={false}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-60" />
                </div>

                {/* Info bar */}
                <div className="p-6 flex items-center justify-between">
                  <div>
                    <h4 className="text-xl md:text-2xl font-semibold tracking-tight text-primary group-hover:text-accent transition-colors duration-300">
                      {achievement.title}
                    </h4>
                    <p className="font-mono text-xs text-muted tracking-widest uppercase mt-1">
                      {achievement.event}
                    </p>
                  </div>
                  <span className="font-mono text-3xl md:text-4xl font-bold text-[#1A1A1A] group-hover:text-accent/20 transition-colors duration-300">
                    {achievement.id}
                  </span>
                </div>
              </div>
            </div>
          ))}
            {/* End spacer keeps the final card clear of the right edge. */}
            <div className="shrink-0 w-px" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/90 backdrop-blur-sm cursor-pointer"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-8 right-8 text-white hover:text-accent transition-colors z-[91]"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) =>
                prev !== null && prev > 0 ? prev - 1 : achievements.length - 1
              );
            }}
            className="absolute left-4 md:left-12 text-white/50 hover:text-white text-5xl font-light transition-colors z-[91]"
          >
            &#8249;
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) =>
                prev !== null && prev < achievements.length - 1 ? prev + 1 : 0
              );
            }}
            className="absolute right-4 md:right-12 text-white/50 hover:text-white text-5xl font-light transition-colors z-[91]"
          >
            &#8250;
          </button>

          {/* Image */}
          <div
            className="max-w-[90vw] max-h-[85vh] cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={achievements[lightboxIndex].image}
              alt={achievements[lightboxIndex].title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-4 text-center">
              <h4 className="text-2xl font-semibold text-white">
                {achievements[lightboxIndex].title}
              </h4>
              <p className="font-mono text-sm text-muted tracking-widest uppercase mt-1">
                {achievements[lightboxIndex].event}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

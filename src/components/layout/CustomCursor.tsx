"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    // Only run on desktop devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const cursor = cursorRef.current;
    if (!cursor) return;

    let hidden = true;

    const onPointerMove = (e: PointerEvent) => {
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;

      if (hidden) {
        hidden = false;
        setIsHidden(false);
      }

    };

    const onMouseLeave = () => {
      hidden = true;
      setIsHidden(true);
    };
    const onMouseEnter = () => {
      hidden = false;
      setIsHidden(false);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`pointer-events-none fixed top-0 left-0 z-[200] h-4 w-4 rounded-full bg-primary mix-blend-difference will-change-transform transition-opacity duration-150 ${isHidden ? "opacity-0" : "opacity-100"}`}
    />
  );
}

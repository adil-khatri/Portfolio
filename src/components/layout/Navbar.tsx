"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Achievements", href: "/#achievements" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 z-[100] flex w-full items-center justify-between border-b border-white/5 bg-[#0F0F0F]/70 px-6 py-4 backdrop-blur-md transition-all duration-300 md:px-12 md:py-6">
        <Link
          href="/"
          data-cursor-text="HOME"
          onClick={() => setIsMenuOpen(false)}
          className="relative z-10 text-lg font-bold uppercase tracking-tighter text-primary transition-colors duration-300 hover:text-accent md:text-xl"
        >
          &copy; Adil Khatri
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              data-cursor-text="VIEW"
              className={cn(
                "font-mono text-sm uppercase tracking-widest transition-colors duration-300",
                pathname === link.href
                  ? "text-accent"
                  : "text-primary hover:text-accent",
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button
          type="button"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 md:hidden"
        >
          <span className="sr-only">
            {isMenuOpen ? "Close menu" : "Open menu"}
          </span>
          <span
            className={cn(
              "absolute h-px w-4 bg-primary transition-transform duration-300",
              isMenuOpen ? "rotate-45" : "-translate-y-1",
            )}
          />
          <span
            className={cn(
              "absolute h-px w-4 bg-primary transition-transform duration-300",
              isMenuOpen ? "-rotate-45" : "translate-y-1",
            )}
          />
        </button>
      </nav>

      <div
        id="mobile-navigation"
        aria-hidden={!isMenuOpen}
        className={cn(
          "fixed inset-0 z-[90] overflow-y-auto bg-background px-6 pb-8 pt-28 transition-[opacity,visibility] duration-500 md:hidden",
          isMenuOpen
            ? "visible opacity-100"
            : "invisible opacity-0 pointer-events-none",
        )}
      >
        <div className="pointer-events-none absolute bottom-0 left-5 top-0 w-px bg-accent/70" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:100%_72px]" />

        <div className="relative flex min-h-full flex-col">
          <p className="mb-5 pl-4 font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
            Navigation // 01—04
          </p>

          <div className="border-t border-white/10">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                tabIndex={isMenuOpen ? 0 : -1}
                onClick={() => setIsMenuOpen(false)}
                className="group flex items-center gap-4 border-b border-white/10 py-5 pl-4"
              >
                <span className="font-mono text-[10px] tracking-widest text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-[11vw] font-bold uppercase leading-none tracking-[-0.06em] text-primary transition-transform duration-300 group-active:translate-x-2">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-auto flex items-end justify-between gap-6 pl-12 pt-10 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
            <div className="flex items-center justify-center gap-4">
              <span className="block h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_rgba(255,90,54,0.8)]" />
              <span>Available for opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

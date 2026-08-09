"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full px-6 py-4 md:px-12 md:py-6 z-50 bg-[#0F0F0F]/70 backdrop-blur-md border-b border-white/5 flex justify-between items-center transition-all duration-300">
      
      {/* Brand / Logo */}
      <div>
        <Link 
          href="/" 
          data-cursor-text="HOME"
          className="text-primary font-bold tracking-tighter text-lg md:text-xl uppercase hover:text-accent transition-colors duration-300"
        >
          &copy; Adil Khatri
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-6 md:gap-8 items-center">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            data-cursor-text="VIEW"
            className={cn(
              "font-mono text-xs md:text-sm tracking-widest uppercase transition-colors duration-300",
              pathname === link.href ? "text-accent" : "text-primary hover:text-accent"
            )}
          >
            {link.name}
          </Link>
        ))}
      </div>
      
    </nav>
  );
}

import type { Metadata } from "next";
import { Instrument_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/layout/CustomCursor";
import Signal from "@/components/layout/Signal";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Adil Khatri | Software Engineer",
  description: "Portfolio of Adil Khatri, Software Engineer specializing in AI, Full-Stack and Distributed Systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${ibmPlexMono.variable} antialiased`}
    >
      <body className="bg-background text-primary selection:bg-accent selection:text-primary">
        <SmoothScroll>
          <CustomCursor />
          <Navbar />
          <Signal />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

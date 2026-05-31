"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-[100] flex items-center justify-between px-8 py-5 transition-colors duration-300"
      style={{
        backgroundColor: scrolled ? "var(--near-black)" : "transparent",
      }}
    >
      <span
        className="font-[family-name:var(--font-inter-display)] text-base font-semibold"
        style={{ color: "var(--accent-color)" }}
      >
        Bohdan Skrypka
      </span>

      <a
        href="mailto:hello@bohdan.design"
        className="font-[family-name:var(--font-geist-mono)] text-xs font-medium text-white"
        style={{
          backgroundColor: "var(--accent-color)",
          padding: "20px 28px",
          display: "inline-block",
        }}
      >
        + LET&apos;S TALK
      </a>
    </nav>
  );
}

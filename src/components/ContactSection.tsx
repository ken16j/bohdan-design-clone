"use client";

import React from "react";

export default function ContactSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  const rust = "rgb(227, 76, 34)";

  const fieldStyle: React.CSSProperties = {
    border: "none",
    borderBottom: `1.5px solid ${rust}`,
    backgroundColor: "transparent",
    color: rust,
    fontFamily: "var(--font-geist-mono)",
    fontSize: "12px",
    fontWeight: 500,
    letterSpacing: "-0.48px",
    padding: "20px 24px",
    width: "100%",
    outline: "none",
  };

  return (
    <section
      style={{
        backgroundColor: "rgb(120, 31, 6)",
        width: "100%",
        minHeight: "100vh",
        padding: "80px 40px 48px 40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxSizing: "border-box",
      }}
    >
      <div>
        {/* Heading */}
        <h2
          style={{
            fontFamily: "var(--font-inter-display)",
            fontWeight: 600,
            fontSize: "clamp(36px, 5vw, 72px)",
            color: rust,
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            maxWidth: "800px",
            marginBottom: "24px",
            margin: "0 0 24px 0",
          }}
        >
          Good design starts with a conversation
        </h2>

        {/* Subtext */}
        <p
          style={{
            fontFamily: "var(--font-inter-display)",
            fontWeight: 400,
            fontSize: "clamp(14px, 1.2vw, 18px)",
            color: rust,
            lineHeight: 1.5,
            maxWidth: "680px",
            marginBottom: "48px",
            margin: "0 0 48px 0",
          }}
        >
          When products feel right, people stay. Let&apos;s build an experience
          that lifts your metrics and earns your users&apos; trust. Tell me what
          you&apos;re building — I&apos;ll help you make it shine.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          style={{
            border: `1.5px solid ${rust}`,
            maxWidth: "680px",
          }}
        >
          <input
            type="text"
            placeholder="01  YOUR NAME"
            style={fieldStyle}
          />
          <input
            type="email"
            placeholder="02  YOUR EMAIL"
            style={fieldStyle}
          />
          <textarea
            placeholder="03  YOUR MESSAGE"
            style={{
              ...fieldStyle,
              height: "160px",
              resize: "none",
              display: "block",
            }}
          />
          <button
            type="submit"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              padding: "20px 24px",
              width: "100%",
              cursor: "pointer",
              backgroundColor: "transparent",
              border: "none",
              color: rust,
              fontFamily: "var(--font-geist-mono)",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "-0.48px",
              textTransform: "uppercase",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                "rgba(227, 76, 34, 0.1)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                "transparent";
            }}
          >
            ↗&nbsp; SEND MESSAGE
          </button>
        </form>
      </div>

      {/* Footer row */}
      <div
        style={{
          marginTop: "48px",
          display: "flex",
          gap: "40px",
          fontFamily: "var(--font-geist-mono)",
          fontSize: "12px",
          fontWeight: 500,
          color: rust,
          letterSpacing: "-0.48px",
        }}
      >
        <a
          href="mailto:hello@bohdan.design"
          style={{ color: rust, textDecoration: "none", textTransform: "uppercase" }}
        >
          HELLO@BOHDAN.DESIGN
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: rust, textDecoration: "none", textTransform: "uppercase" }}
        >
          LINKEDIN
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: rust, textDecoration: "none", textTransform: "uppercase" }}
        >
          CV
        </a>
      </div>
    </section>
  );
}

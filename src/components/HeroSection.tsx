"use client";

import { useEffect, useRef } from "react";

const TOTAL_FRAMES = 190;
const PRELOAD_COUNT = 10;

function getFrameSrc(index: number): string {
  const padded = String(index + 1).padStart(3, "0");
  return `/images/hero-sequence/${padded}.webp`;
}

function CornerBrackets() {
  const size = 10;
  const thickness = 2;
  const color = "rgb(227, 76, 34)";
  const offset = -6;

  const style = (
    top?: number | string,
    bottom?: number | string,
    left?: number | string,
    right?: number | string,
    borderTop?: string,
    borderBottom?: string,
    borderLeft?: string,
    borderRight?: string
  ): React.CSSProperties => ({
    position: "absolute",
    width: size,
    height: size,
    top: top !== undefined ? top : undefined,
    bottom: bottom !== undefined ? bottom : undefined,
    left: left !== undefined ? left : undefined,
    right: right !== undefined ? right : undefined,
    borderTop,
    borderBottom,
    borderRight,
    borderLeft,
  });

  return (
    <>
      {/* Top-left */}
      <div
        style={style(
          offset,
          undefined,
          offset,
          undefined,
          `${thickness}px solid ${color}`,
          undefined,
          `${thickness}px solid ${color}`,
          undefined
        )}
      />
      {/* Top-right */}
      <div
        style={style(
          offset,
          undefined,
          undefined,
          offset,
          `${thickness}px solid ${color}`,
          undefined,
          undefined,
          `${thickness}px solid ${color}`
        )}
      />
      {/* Bottom-left */}
      <div
        style={style(
          undefined,
          offset,
          offset,
          undefined,
          undefined,
          `${thickness}px solid ${color}`,
          `${thickness}px solid ${color}`,
          undefined
        )}
      />
      {/* Bottom-right */}
      <div
        style={style(
          undefined,
          offset,
          undefined,
          offset,
          undefined,
          `${thickness}px solid ${color}`,
          undefined,
          `${thickness}px solid ${color}`
        )}
      />
    </>
  );
}

export default function HeroSection() {
  const imgRef = useRef<HTMLImageElement>(null);
  const frameRef = useRef(0);

  useEffect(() => {
    // Preload first frames
    for (let i = 0; i < PRELOAD_COUNT; i++) {
      const img = new Image();
      img.src = getFrameSrc(i);
    }

    const handleScroll = () => {
      const newFrame = Math.min(
        TOTAL_FRAMES - 1,
        Math.floor((window.scrollY / window.innerHeight) * TOTAL_FRAMES)
      );
      if (newFrame !== frameRef.current) {
        frameRef.current = newFrame;
        if (imgRef.current) {
          imgRef.current.src = getFrameSrc(newFrame);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundColor: "rgb(211, 217, 217)",
        overflow: "hidden",
      }}
    >
      {/* Scroll-driven image sequence */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        src={getFrameSrc(0)}
        alt="Hero sequence"
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          height: "100%",
          width: "auto",
          objectFit: "contain",
          zIndex: 1,
        }}
      />

      {/* Overlay text */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          textAlign: "center",
          pointerEvents: "none",
        }}
      >
        <p
          className="font-[family-name:var(--font-inter-display)]"
          style={{
            fontWeight: 600,
            fontSize: "clamp(80px, 13vw, 180px)",
            lineHeight: 0.88,
            letterSpacing: "-0.06em",
            color: "white",
            margin: 0,
            whiteSpace: "nowrap",
          }}
        >
          I make
          <br />
          tech more
          <br />
          human
        </p>
      </div>

      {/* Bottom-left info box */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: 40,
          zIndex: 3,
        }}
      >
        <div
          style={{
            position: "relative",
            backgroundColor: "rgba(227, 76, 34, 0.08)",
            padding: 16,
            maxWidth: 280,
          }}
        >
          <CornerBrackets />
          <p
            className="font-[family-name:var(--font-geist-mono)]"
            style={{
              fontSize: 12,
              fontWeight: 500,
              color: "rgb(227, 76, 34)",
              textTransform: "uppercase",
              letterSpacing: "-0.48px",
              margin: 0,
              marginBottom: 8,
            }}
          >
            BUILT TO PERFORM
          </p>
          <p
            className="font-[family-name:var(--font-geist-mono)]"
            style={{
              fontSize: 12,
              fontWeight: 500,
              color: "white",
              lineHeight: "18px",
              margin: 0,
            }}
          >
            A product designer shaping experiences users choose and competitors
            chase.
          </p>
        </div>
      </div>
    </section>
  );
}

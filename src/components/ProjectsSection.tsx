import type { CSSProperties, ReactNode } from "react";

interface Metric {
  value: string;
  label: string;
}

interface Project {
  title: string;
  description: string;
  link: string;
  metrics: Metric[];
  images: string[];
  status?: string;
}

const projects: Project[] = [
  {
    title: "SECURE DASHBOARD FOR TRAFFIC MANAGEMENT",
    description:
      "A showcase of my Figma skills and product-driven design approach for a traffic management platform",
    link: "↳ Case study",
    metrics: [],
    images: [
      "/images/p1.jpg",
      "/images/p2.jpg",
      "/images/p3.jpg",
      "/images/p4.jpg",
      "/images/p5.jpg",
    ],
  },
  {
    title: "GROWING REVENUE IN AN INSURANCE MARKETPLACE",
    description:
      "How my design increased upsell revenue by 60% and checkout conversion by 40% with the simplest and most straightforward insurance-buying process available.",
    link: "↳ Case study",
    metrics: [
      { value: "+60%", label: "UPSELL REVENUE" },
      { value: "+40%", label: "CHECKOUT CONVERSION" },
      { value: "-30%", label: "ORDER FILLING TIME" },
    ],
    images: [
      "/images/p6.jpg",
      "/images/p7.jpg",
      "/images/p8.jpg",
      "/images/p9.jpg",
      "/images/p10.jpg",
    ],
  },
  {
    title: "CONVERTING FREE USERS TO PAID",
    description:
      "Currency exchange service redesign that led to a 70% increase in paid plan sales, even with a 50% price increase.",
    link: "↳ Case study",
    status: "Coming soon",
    metrics: [
      { value: "+70%", label: "MONTHLY REVENUE" },
      { value: "+30%", label: "CTA ENGAGEMENT" },
    ],
    images: [
      "/images/p11.jpg",
      "/images/p12.jpg",
      "/images/p13.jpg",
      "/images/p14.jpg",
      "/images/p15.jpg",
    ],
  },
  {
    title: "LOWERING THE BARRIER TO INVEST",
    description:
      "Designed an in-app tutorial and simplified the buy/sell flow to help novice investors understand basic trading concepts and feel confident placing their first trades.",
    link: "↳ Case study",
    metrics: [
      { value: "+24%", label: "TRADE COMPLETION RATE" },
      { value: "−31%", label: "DROP-OFF IN BUY/SELL FLOW" },
      { value: "+18%", label: "AVERAGE TRANSACTIONS PER USER" },
    ],
    images: [
      "/images/p16.jpg",
      "/images/p17.jpg",
      "/images/p18.jpg",
      "/images/p19.jpg",
      "/images/p20.png",
    ],
  },
];

const quotes = [
  "Where clarity, empathy, and business sense come together.",
  "Because when experiences feel right, results follow.",
  "Human-centered design for measurable growth.",
];

function CornerBrackets({ children }: { children: ReactNode }) {
  const bracketSize = 16;
  const bracketThickness = 2;
  const bracketColor = "rgb(227, 76, 34)";

  const cornerStyle: CSSProperties = {
    position: "absolute",
    width: bracketSize,
    height: bracketSize,
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {/* Top-left */}
      <span
        style={{
          ...cornerStyle,
          top: -6,
          left: -10,
          borderTop: `${bracketThickness}px solid ${bracketColor}`,
          borderLeft: `${bracketThickness}px solid ${bracketColor}`,
        }}
      />
      {/* Top-right */}
      <span
        style={{
          ...cornerStyle,
          top: -6,
          right: -10,
          borderTop: `${bracketThickness}px solid ${bracketColor}`,
          borderRight: `${bracketThickness}px solid ${bracketColor}`,
        }}
      />
      {/* Bottom-left */}
      <span
        style={{
          ...cornerStyle,
          bottom: -6,
          left: -10,
          borderBottom: `${bracketThickness}px solid ${bracketColor}`,
          borderLeft: `${bracketThickness}px solid ${bracketColor}`,
        }}
      />
      {/* Bottom-right */}
      <span
        style={{
          ...cornerStyle,
          bottom: -6,
          right: -10,
          borderBottom: `${bracketThickness}px solid ${bracketColor}`,
          borderRight: `${bracketThickness}px solid ${bracketColor}`,
        }}
      />
      {children}
    </div>
  );
}

function QuoteInterstitial({ quote }: { quote: string }) {
  return (
    <div
      style={{
        width: "100%",
        padding: "60px 40px",
        position: "relative",
        backgroundColor: "transparent",
        boxSizing: "border-box",
      }}
    >
      <CornerBrackets>
        <p
          className="font-[family-name:var(--font-inter-display)]"
          style={{
            fontWeight: 500,
            fontSize: "clamp(20px, 2.5vw, 32px)",
            color: "rgb(227, 76, 34)",
            lineHeight: 1.4,
            maxWidth: 700,
            margin: 0,
            padding: "8px 4px",
          }}
        >
          {quote}
        </p>
      </CornerBrackets>
    </div>
  );
}

function ThumbnailWithBrackets({ src, alt }: { src: string; alt: string }) {
  const corners: CSSProperties[] = [
    { top: 0, left: 0, borderTop: "2px solid rgb(227,76,34)", borderLeft: "2px solid rgb(227,76,34)" },
    { top: 0, right: 0, borderTop: "2px solid rgb(227,76,34)", borderRight: "2px solid rgb(227,76,34)" },
    { bottom: 0, left: 0, borderBottom: "2px solid rgb(227,76,34)", borderLeft: "2px solid rgb(227,76,34)" },
    { bottom: 0, right: 0, borderBottom: "2px solid rgb(227,76,34)", borderRight: "2px solid rgb(227,76,34)" },
  ];
  return (
    <div style={{ position: "relative", width: "100%" }}>
      {/* Corner brackets */}
      {corners.map((cornerStyle, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            width: 14,
            height: 14,
            zIndex: 1,
            ...cornerStyle,
          }}
        />
      ))}
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          aspectRatio: "16/9",
          objectFit: "cover",
          display: "block",
          backgroundColor: "rgb(40, 45, 45)",
        }}
      />
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [mainImage, ...thumbnails] = project.images;

  return (
    <div
      style={{
        padding: "40px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          alignItems: "start",
        }}
      >
        {/* Left column */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Category label */}
          <span
            className="font-[family-name:var(--font-geist-mono)]"
            style={{
              fontSize: 12,
              fontWeight: 500,
              color: "rgb(227, 76, 34)",
              textTransform: "uppercase",
              letterSpacing: "-0.48px",
              marginBottom: 8,
            }}
          >
            Case Study {String(index + 1).padStart(2, "0")}
          </span>

          {/* Title */}
          <h3
            className="font-[family-name:var(--font-inter-display)]"
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: "rgb(227, 76, 34)",
              textTransform: "uppercase",
              letterSpacing: "-0.48px",
              margin: 0,
              marginBottom: 16,
            }}
          >
            {project.title}
          </h3>

          {/* Description */}
          <p
            className="font-[family-name:var(--font-inter-display)]"
            style={{
              fontSize: 16,
              fontWeight: 400,
              color: "rgb(133, 142, 142)",
              lineHeight: 1.6,
              margin: 0,
              marginBottom: 24,
            }}
          >
            {project.description}
          </p>

          {/* Metrics */}
          {project.metrics.length > 0 && (
            <div
              style={{
                display: "flex",
                gap: "32px",
                flexWrap: "wrap",
                marginBottom: 24,
              }}
            >
              {project.metrics.map((metric, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <span
                    className="font-[family-name:var(--font-inter-display)]"
                    style={{
                      fontSize: "clamp(36px, 3.5vw, 48px)",
                      fontWeight: 700,
                      color: "white",
                      letterSpacing: "-2px",
                      lineHeight: 1,
                    }}
                  >
                    {metric.value}
                  </span>
                  <span
                    className="font-[family-name:var(--font-geist-mono)]"
                    style={{
                      fontSize: 10,
                      fontWeight: 500,
                      color: "rgb(95, 107, 107)",
                      textTransform: "uppercase",
                    }}
                  >
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Case study link */}
          <div style={{ marginTop: project.metrics.length > 0 ? 0 : 24 }}>
            {project.status ? (
              <span
                className="font-[family-name:var(--font-geist-mono)]"
                style={{ fontSize: 12, color: "rgb(95, 107, 107)" }}
              >
                {project.status}
              </span>
            ) : (
              <a
                href="#"
                className="font-[family-name:var(--font-geist-mono)]"
                style={{
                  fontSize: 12,
                  color: "white",
                  textDecoration: "none",
                }}
              >
                {project.link}
              </a>
            )}
          </div>

          {/* Main mockup image */}
          {mainImage && (
            <div style={{ marginTop: 32 }}>
              <img
                src={mainImage}
                alt={`${project.title} main mockup`}
                style={{
                  width: "100%",
                  objectFit: "cover",
                  display: "block",
                  backgroundColor: "rgb(40, 45, 45)",
                  borderRadius: 4,
                }}
              />
            </div>
          )}
        </div>

        {/* Right column: thumbnail stack */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {thumbnails.map((img, i) => (
            <ThumbnailWithBrackets
              key={i}
              src={img}
              alt={`${project.title} thumbnail ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      style={{
        backgroundColor: "rgb(26, 30, 30)",
        width: "100%",
      }}
    >
      {/* Quote 1 */}
      <QuoteInterstitial quote={quotes[0]} />

      {/* Project 1 */}
      <ProjectCard project={projects[0]} index={0} />

      {/* Quote 2 */}
      <QuoteInterstitial quote={quotes[1]} />

      {/* Project 2 */}
      <ProjectCard project={projects[1]} index={1} />

      {/* Quote 3 */}
      <QuoteInterstitial quote={quotes[2]} />

      {/* Project 3 */}
      <ProjectCard project={projects[2]} index={2} />

      {/* Project 4 */}
      <ProjectCard project={projects[3]} index={3} />
    </section>
  );
}

import Image from "next/image";

const ORANGE = "rgb(227, 76, 34)";
const DARK_BG = "rgb(26, 30, 30)";

const MARQUEE_TEXT = "Selected work  •  Selected work  •  ";

const images = [
  { src: "/images/p1.jpg", alt: "Project 1" },
  { src: "/images/p2.jpg", alt: "Project 2" },
  { src: "/images/p3.jpg", alt: "Project 3" },
  { src: "/images/p4.jpg", alt: "Project 4" },
  { src: "/images/p5.jpg", alt: "Project 5" },
  { src: "/images/p6.jpg", alt: "Project 6" },
  { src: "/images/p7.jpg", alt: "Project 7" },
  { src: "/images/p8.jpg", alt: "Project 8" },
  { src: "/images/p9.jpg", alt: "Project 9" },
  { src: "/images/p10.jpg", alt: "Project 10" },
  { src: "/images/p11.jpg", alt: "Project 11" },
  { src: "/images/p12.jpg", alt: "Project 12" },
  { src: "/images/p13.jpg", alt: "Project 13" },
  { src: "/images/p14.jpg", alt: "Project 14" },
  { src: "/images/p15.jpg", alt: "Project 15" },
  { src: "/images/p16.jpg", alt: "Project 16" },
  { src: "/images/p17.jpg", alt: "Project 17" },
  { src: "/images/p18.jpg", alt: "Project 18" },
  { src: "/images/p19.jpg", alt: "Project 19" },
  { src: "/images/p20.png", alt: "Project 20" },
  { src: "/images/p21.jpg", alt: "Project 21" },
];

export function WorksSection() {
  return (
    <section>
      {/* Marquee Title */}
      <div
        style={{
          height: "100vh",
          backgroundColor: DARK_BG,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          className="marquee-track"
          style={{
            display: "flex",
            whiteSpace: "nowrap",
            willChange: "transform",
          }}
        >
          {/* Repeated 6x so -50% translate covers exactly half */}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <span
              key={i}
              style={{
                fontFamily: "var(--font-inter-display), Inter, sans-serif",
                fontWeight: 600,
                fontSize: "clamp(120px, 18vw, 260px)",
                color: ORANGE,
                letterSpacing: "-0.05em",
                lineHeight: 1,
                whiteSpace: "nowrap",
                display: "inline-block",
                paddingRight: "0.3em",
              }}
            >
              {MARQUEE_TEXT}
            </span>
          ))}
        </div>
      </div>

      {/* Portfolio Grid */}
      <div
        style={{
          backgroundColor: DARK_BG,
          padding: "2px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "2px",
          }}
          className="works-grid"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="works-cell group"
              style={{
                position: "relative",
                aspectRatio: "1",
                overflow: "hidden",
                backgroundColor: DARK_BG,
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                style={{
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.4s ease",
                }}
                className="works-image"
              />
              {/* Corner brackets */}
              {/* Top-left */}
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 6,
                  left: 6,
                  width: 14,
                  height: 14,
                  borderTop: `1.5px solid ${ORANGE}`,
                  borderLeft: `1.5px solid ${ORANGE}`,
                  pointerEvents: "none",
                  zIndex: 2,
                }}
              />
              {/* Top-right */}
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 6,
                  right: 6,
                  width: 14,
                  height: 14,
                  borderTop: `1.5px solid ${ORANGE}`,
                  borderRight: `1.5px solid ${ORANGE}`,
                  pointerEvents: "none",
                  zIndex: 2,
                }}
              />
              {/* Bottom-left */}
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  bottom: 6,
                  left: 6,
                  width: 14,
                  height: 14,
                  borderBottom: `1.5px solid ${ORANGE}`,
                  borderLeft: `1.5px solid ${ORANGE}`,
                  pointerEvents: "none",
                  zIndex: 2,
                }}
              />
              {/* Bottom-right */}
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  bottom: 6,
                  right: 6,
                  width: 14,
                  height: 14,
                  borderBottom: `1.5px solid ${ORANGE}`,
                  borderRight: `1.5px solid ${ORANGE}`,
                  pointerEvents: "none",
                  zIndex: 2,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .works-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        .works-cell:hover .works-image {
          transform: scale(1.03);
        }
      `}</style>
    </section>
  );
}

const panels = [
  {
    label: "BUILT TO PERFORM",
    body: "tying digital products, creating data-driven designs that deliver measurable results and meaningful connections.",
  },
  {
    label: "HUMAN FIRST",
    body: "design with empathy — making the user experience feel natural and frictionless. Built for people. Made foolproof.",
  },
  {
    label: "SMOOTH EXPERIENCE",
    body: "effortless to use, focused on what truly matters. Interfaces that get out of the way.",
  },
];

function CornerBrackets() {
  const corners = [
    { top: 0, left: 0, borderTop: true, borderLeft: true },
    { top: 0, right: 0, borderTop: true, borderRight: true },
    { bottom: 0, left: 0, borderBottom: true, borderLeft: true },
    { bottom: 0, right: 0, borderBottom: true, borderRight: true },
  ] as const;

  return (
    <>
      {corners.map((corner, i) => {
        const style: React.CSSProperties = {
          position: "absolute",
          width: 10,
          height: 10,
          borderColor: "rgb(227, 76, 34)",
          borderStyle: "solid",
          borderTopWidth: "borderTop" in corner && corner.borderTop ? 1.5 : 0,
          borderBottomWidth:
            "borderBottom" in corner && corner.borderBottom ? 1.5 : 0,
          borderLeftWidth:
            "borderLeft" in corner && corner.borderLeft ? 1.5 : 0,
          borderRightWidth:
            "borderRight" in corner && corner.borderRight ? 1.5 : 0,
          top: "top" in corner ? corner.top : undefined,
          bottom: "bottom" in corner ? corner.bottom : undefined,
          left: "left" in corner ? corner.left : undefined,
          right: "right" in corner ? corner.right : undefined,
        };
        return <div key={i} style={style} />;
      })}
    </>
  );
}

export default function AboutSection() {
  return (
    <section style={{ backgroundColor: "rgb(211, 217, 217)" }}>
      {panels.map((panel, i) => (
        <div key={i} style={{ height: 1072, position: "relative" }}>
          <div
            style={{
              position: "sticky",
              top: "33vh",
              height: "100vh",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: 320,
                position: "relative",
                padding: 24,
                backgroundColor: "rgba(227, 76, 34, 0.08)",
              }}
            >
              <CornerBrackets />
              <p
                className="font-[family-name:var(--font-geist-mono)]"
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  color: "rgb(227, 76, 34)",
                  letterSpacing: "-0.48px",
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                {panel.label}
              </p>
              <p
                className="font-[family-name:var(--font-geist-mono)]"
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  color: "rgb(12, 13, 13)",
                }}
              >
                {panel.body}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

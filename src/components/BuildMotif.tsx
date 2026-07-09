import styles from "./BuildMotif.module.css";

/**
 * BuildMotif — the animated header motif for the Projects page: a small stack of
 * translucent "glass" blocks that floats, with an ember block dropping into place
 * on top, and a few twinkles. Pure SVG + CSS (Server Component), line-art style
 * to match GraduationCap / EnvelopeMotif — airy outlines, not solid blocks.
 */

type CubeColors = {
  topFill: string;
  leftFill: string;
  rightFill: string;
  stroke: string;
};

// One isometric cube, anchored at the top vertex of its top face (tx, ty).
function Cube({
  tx,
  ty,
  a,
  b,
  h,
  colors,
}: {
  tx: number;
  ty: number;
  a: number;
  b: number;
  h: number;
  colors: CubeColors;
}) {
  const T = `${tx},${ty}`;
  const R = `${tx + a},${ty + b}`;
  const B = `${tx},${ty + 2 * b}`;
  const L = `${tx - a},${ty + b}`;
  const Bd = `${tx},${ty + 2 * b + h}`;
  const Ld = `${tx - a},${ty + b + h}`;
  const Rd = `${tx + a},${ty + b + h}`;
  return (
    <>
      <polygon points={`${L} ${B} ${Bd} ${Ld}`} fill={colors.leftFill} stroke={colors.stroke} strokeWidth="1.5" strokeLinejoin="round" />
      <polygon points={`${B} ${R} ${Rd} ${Bd}`} fill={colors.rightFill} stroke={colors.stroke} strokeWidth="1.5" strokeLinejoin="round" />
      <polygon points={`${T} ${R} ${B} ${L}`} fill={colors.topFill} stroke={colors.stroke} strokeWidth="1.5" strokeLinejoin="round" />
    </>
  );
}

const BLUE: CubeColors = {
  topFill: "rgba(122,162,255,0.18)",
  leftFill: "rgba(59,130,246,0.11)",
  rightFill: "rgba(37,99,235,0.07)",
  stroke: "#7aa2ff",
};
const EMBER: CubeColors = {
  topFill: "rgba(245,158,11,0.20)",
  leftFill: "rgba(249,115,22,0.12)",
  rightFill: "rgba(209,89,12,0.07)",
  stroke: "#f59e0b",
};

export default function BuildMotif() {
  return (
    <svg
      viewBox="0 0 420 300"
      fill="none"
      className={styles.svg}
      role="img"
      aria-label="Animated stack of building blocks assembling"
    >
      <g className={styles.stack}>
        <Cube tx={210} ty={128} a={36} b={18} h={44} colors={BLUE} />
        <Cube tx={210} ty={84} a={36} b={18} h={44} colors={BLUE} />
        <g className={styles.drop}>
          <Cube tx={210} ty={40} a={36} b={18} h={44} colors={EMBER} />
        </g>
      </g>

      {/* smaller blocks drifting alongside */}
      <g className={styles.bobA}>
        <Cube tx={106} ty={168} a={18} b={9} h={22} colors={BLUE} />
      </g>
      <g className={styles.bobB}>
        <Cube tx={324} ty={116} a={16} b={8} h={20} colors={BLUE} />
      </g>
      <g className={styles.bobC}>
        <Cube tx={300} ty={224} a={13} b={6.5} h={16} colors={BLUE} />
      </g>

      <circle className={styles.spark} cx="152" cy="64" r="2.6" fill="#eef1fb" />
      <circle className={styles.spark} style={{ animationDelay: "1.2s" }} cx="360" cy="186" r="2.4" fill="#7aa2ff" />
      <circle className={styles.spark} style={{ animationDelay: "0.7s" }} cx="66" cy="118" r="2.2" fill="#f59e0b" />
    </svg>
  );
}

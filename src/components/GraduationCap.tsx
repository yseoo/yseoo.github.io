import styles from "./GraduationCap.module.css";

/**
 * GraduationCap — the animated header motif for the Experience page: a floating
 * mortarboard with a swaying tassel and twinkling sparkles. Pure SVG + CSS
 * (Server Component). Ported from the old site.
 */

// 4-point star ("sparkle") path centered on (0,0) for a given size.
function starPath(s: number): string {
  const a = s * 0.22;
  return `M0,${-s}L${a},${-a}L${s},0L${a},${a}L0,${s}L${-a},${a}L${-s},0L${-a},${-a}Z`;
}

// Stars scattered around the cap: [x, y, size, color, animation-delay].
const STARS: [number, number, number, string, number][] = [
  [62, 46, 4, "#eceff4", 0],
  [104, 28, 2.8, "#7aa2d6", 1.3],
  [31, 116, 5.5, "#ebcb8b", 0.6],
  [150, 66, 2.6, "#88c0d0", 2.1],
  [44, 182, 3.4, "#eceff4", 1.0],
  [80, 236, 4.6, "#a3be8c", 1.8],
  [28, 244, 2.4, "#88c0d0", 0.4],
  [138, 262, 3.8, "#ebcb8b", 2.3],
  [206, 276, 2.8, "#eceff4", 1.5],
  [258, 252, 5, "#88c0d0", 0.9],
  [316, 266, 3, "#a3be8c", 2.0],
  [298, 44, 4.4, "#eceff4", 0.7],
  [356, 90, 2.8, "#7aa2d6", 1.6],
  [390, 156, 5, "#ebcb8b", 1.1],
  [346, 202, 3.4, "#88c0d0", 2.4],
  [374, 234, 2.8, "#eceff4", 0.5],
];

export default function GraduationCap() {
  return (
    <svg
      className={styles.svg}
      viewBox="0 0 420 300"
      fill="none"
      role="img"
      aria-label="Animated graduation cap"
    >
      <g className={styles.cap}>
        <path
          d="M150,118 C150,190 270,190 270,118"
          fill="rgba(129, 161, 193, 0.10)"
          stroke="#81a1c1"
          strokeWidth="3"
        />
        <polygon
          points="210,58 335,110 210,162 85,110"
          fill="rgba(122, 162, 214, 0.28)"
          stroke="#7aa2d6"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <circle cx="210" cy="110" r="6" fill="#88c0d0" />
        <line x1="210" y1="110" x2="318" y2="112" stroke="#ebcb8b" strokeWidth="2.5" />
        <g className={styles.tassel}>
          <line x1="318" y1="112" x2="318" y2="172" stroke="#ebcb8b" strokeWidth="2.5" />
          <line x1="314" y1="172" x2="314" y2="188" stroke="#ebcb8b" strokeWidth="2" />
          <line x1="318" y1="173" x2="318" y2="190" stroke="#ebcb8b" strokeWidth="2" />
          <line x1="322" y1="172" x2="322" y2="188" stroke="#ebcb8b" strokeWidth="2" />
          <circle cx="318" cy="170" r="4.5" fill="#ebcb8b" />
        </g>
      </g>

      {STARS.map(([x, y, s, fill, delay], i) => (
        <g key={i} transform={`translate(${x}, ${y})`}>
          <path
            className={styles.spark}
            style={{ animationDelay: `${delay}s` }}
            d={starPath(s)}
            fill={fill}
          />
        </g>
      ))}
    </svg>
  );
}

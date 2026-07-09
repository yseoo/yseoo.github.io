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
  [62, 46, 4, "#eef1fb", 0],
  [104, 28, 2.8, "#7aa2ff", 1.3],
  [31, 116, 5.5, "#f59e0b", 0.6],
  [150, 66, 2.6, "#3b82f6", 2.1],
  [44, 182, 3.4, "#eef1fb", 1.0],
  [80, 236, 4.6, "#f97316", 1.8],
  [28, 244, 2.4, "#3b82f6", 0.4],
  [138, 262, 3.8, "#f59e0b", 2.3],
  [206, 276, 2.8, "#eef1fb", 1.5],
  [258, 252, 5, "#3b82f6", 0.9],
  [316, 266, 3, "#f97316", 2.0],
  [298, 44, 4.4, "#eef1fb", 0.7],
  [356, 90, 2.8, "#7aa2ff", 1.6],
  [390, 156, 5, "#f59e0b", 1.1],
  [346, 202, 3.4, "#3b82f6", 2.4],
  [374, 234, 2.8, "#eef1fb", 0.5],
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
          fill="rgba(59, 130, 246, 0.10)"
          stroke="#7aa2ff"
          strokeWidth="3"
        />
        <polygon
          points="210,58 335,110 210,162 85,110"
          fill="rgba(59, 130, 246, 0.24)"
          stroke="#7aa2ff"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <circle cx="210" cy="110" r="6" fill="#3b82f6" />
        <line x1="210" y1="110" x2="318" y2="112" stroke="#f59e0b" strokeWidth="2.5" />
        <g className={styles.tassel}>
          <line x1="318" y1="112" x2="318" y2="172" stroke="#f59e0b" strokeWidth="2.5" />
          <line x1="314" y1="172" x2="314" y2="188" stroke="#f59e0b" strokeWidth="2" />
          <line x1="318" y1="173" x2="318" y2="190" stroke="#f59e0b" strokeWidth="2" />
          <line x1="322" y1="172" x2="322" y2="188" stroke="#f59e0b" strokeWidth="2" />
          <circle cx="318" cy="170" r="4.5" fill="#f59e0b" />
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

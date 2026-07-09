import styles from "./EnvelopeMotif.module.css";

/**
 * Animated header motif for the Contact page: a floating envelope with a paper
 * plane looping out of it and a few twinkles. Pure SVG animated with CSS.
 */
export default function EnvelopeMotif() {
  return (
    <svg
      className={styles.svg}
      viewBox="0 0 420 300"
      fill="none"
      role="img"
      aria-label="Animated envelope sending a message"
    >
      <g className={styles.env}>
        <rect
          x="112"
          y="118"
          width="196"
          height="112"
          rx="12"
          fill="rgba(59, 130, 246, 0.14)"
          stroke="#7aa2ff"
          strokeWidth="3"
        />
        <path
          d="M116,126 L210,186 L304,126"
          fill="none"
          stroke="#7aa2ff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* paper plane flying out */}
      <path className={styles.plane} d="M-9,-6 L11,0 L-9,6 L-3,0 Z" fill="#f59e0b" />

      {/* twinkles */}
      <circle className={styles.spark} cx="350" cy="70" r="3" fill="#eef1fb" />
      <circle
        className={styles.spark}
        style={{ animationDelay: "1.1s" }}
        cx="96"
        cy="96"
        r="2.6"
        fill="#7aa2ff"
      />
      <circle
        className={styles.spark}
        style={{ animationDelay: "0.6s" }}
        cx="330"
        cy="250"
        r="2.6"
        fill="#f97316"
      />
    </svg>
  );
}

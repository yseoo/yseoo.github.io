import styles from "./SkillMotif.module.css";

/**
 * SkillMotif — the animated header for a skill card. Pure SVG animated with CSS
 * (a Server Component). The motif is chosen from the card title: data science
 * -> bar chart, robotics -> robot arm, everything else (ML / CV) -> neural net.
 * Colors follow the Navy + Ember palette (electric blue with amber/orange sparks).
 */
function categoryType(title: string): "ml" | "data" | "robotics" {
  const t = title.toLowerCase();
  if (t.includes("data science")) return "data";
  if (t.includes("robotic")) return "robotics";
  return "ml";
}

// ML / Computer Vision — pulsing neural network with a warm signal travelling.
function NeuralNet() {
  const L1: [number, number][] = [
    [78, 34],
    [78, 60],
    [78, 86],
  ];
  const L2: [number, number][] = [
    [150, 30],
    [150, 60],
    [150, 90],
  ];
  const L3: [number, number][] = [
    [222, 46],
    [222, 74],
  ];
  const edges: [[number, number], [number, number]][] = [];
  L1.forEach((a) => L2.forEach((b) => edges.push([a, b])));
  L2.forEach((a) => L3.forEach((b) => edges.push([a, b])));
  const nodes = [...L1, ...L2, ...L3];
  const colors = ["#7aa2ff", "#3b82f6"];
  const signals = [
    "path('M78,60 L150,30')",
    "path('M150,90 L222,74')",
    "path('M78,34 L150,60')",
  ];

  return (
    <svg viewBox="0 0 300 120" className={styles.svg} aria-hidden="true">
      {edges.map(([a, b], i) => (
        <line
          key={`e${i}`}
          x1={a[0]}
          y1={a[1]}
          x2={b[0]}
          y2={b[1]}
          stroke="#7aa2ff"
          strokeWidth="1"
          opacity="0.22"
        />
      ))}
      {nodes.map((p, i) => (
        <circle
          key={`n${i}`}
          className={styles.nnNode}
          cx={p[0]}
          cy={p[1]}
          r="5.5"
          fill={colors[i % 2]}
          style={{ animationDelay: `${(i * 0.18).toFixed(2)}s` }}
        />
      ))}
      {signals.map((path, i) => (
        <circle
          key={`s${i}`}
          className={styles.nnSignal}
          r="3"
          fill="#f59e0b"
          style={{ offsetPath: path, animationDelay: `${(i * 0.8).toFixed(2)}s` }}
        />
      ))}
    </svg>
  );
}

// Data Science — bars breathing, blue with amber highlights.
function DataChart() {
  const bars: [number, number][] = [
    [66, 46],
    [96, 68],
    [126, 38],
    [156, 78],
    [186, 54],
    [216, 66],
  ];
  const colors = ["#7aa2ff", "#3b82f6", "#f59e0b"];

  return (
    <svg viewBox="0 0 300 120" className={styles.svg} aria-hidden="true">
      <line
        x1="52"
        y1="100"
        x2="248"
        y2="100"
        stroke="#98a2c2"
        strokeWidth="1.5"
        opacity="0.5"
      />
      {bars.map(([x, h], i) => (
        <rect
          key={i}
          className={styles.dbBar}
          x={x}
          y={100 - h}
          width="18"
          height={h}
          rx="3"
          fill={colors[i % 3]}
          style={{ animationDelay: `${(i * 0.22).toFixed(2)}s` }}
        />
      ))}
    </svg>
  );
}

// Robotics & Control — an articulated arm that reaches (blue arm, ember forearm).
function RobotArm() {
  return (
    <svg viewBox="0 0 300 120" className={styles.svg} aria-hidden="true">
      <line
        x1="120"
        y1="112"
        x2="180"
        y2="112"
        stroke="#98a2c2"
        strokeWidth="2"
        opacity="0.4"
      />
      <rect x="136" y="102" width="28" height="10" rx="2" fill="#6366f1" />
      <g className={styles.armShoulder} style={{ transformOrigin: "150px 100px" }}>
        <line
          x1="150"
          y1="100"
          x2="150"
          y2="62"
          stroke="#7aa2ff"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <circle cx="150" cy="100" r="5.5" fill="#3b82f6" />
        <g className={styles.armElbow} style={{ transformOrigin: "150px 62px" }}>
          <line
            x1="150"
            y1="62"
            x2="150"
            y2="30"
            stroke="#f59e0b"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <circle cx="150" cy="62" r="4.5" fill="#f97316" />
          <line
            x1="150"
            y1="30"
            x2="141"
            y2="21"
            stroke="#f97316"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <line
            x1="150"
            y1="30"
            x2="159"
            y2="21"
            stroke="#f97316"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>
      </g>
    </svg>
  );
}

export default function SkillMotif({ title }: { title: string }) {
  const type = categoryType(title);
  return (
    <div className={styles.motif}>
      {type === "ml" && <NeuralNet />}
      {type === "data" && <DataChart />}
      {type === "robotics" && <RobotArm />}
    </div>
  );
}

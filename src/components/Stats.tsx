import { profile } from "@/content/profile";
import styles from "./Stats.module.css";

/**
 * Stats — a row of headline-number glass cards. Server Component; the numbers
 * use the blue->ember gradient (the global .gradient-text utility).
 */
export default function Stats() {
  return (
    <div className={styles.grid}>
      {profile.stats.map((stat) => (
        <div key={stat.label} className={`glass ${styles.stat}`}>
          <div className={styles.num}>{stat.value}</div>
          <div className={styles.label}>{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

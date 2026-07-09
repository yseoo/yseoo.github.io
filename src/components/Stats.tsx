import { profile } from "@/content/profile";
import styles from "./Stats.module.css";

/**
 * Row of headline-number glass cards shown on the home page. Values and labels
 * are read from `profile.stats`.
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

import type { SkillGroup } from "@/content/profile";
import SkillMotif from "./SkillMotif";
import SkillLogos from "./SkillLogos";
import styles from "./SkillCard.module.css";

/**
 * SkillCard — one skill category: an animated motif header, the title, a row of
 * tech logos, then bullet points. A Server Component; only the logo row
 * (SkillLogos) is client-side.
 */
export default function SkillCard({ group }: { group: SkillGroup }) {
  return (
    <article className={`glass ${styles.card}`}>
      <div className={styles.media}>
        <SkillMotif title={group.title} />
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{group.title}</h3>
        <SkillLogos logos={group.logos} />
        <ul className={styles.points}>
          {group.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

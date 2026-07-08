import type { SkillGroup } from "@/content/profile";
import styles from "./SkillCard.module.css";

// The prop type: this component needs exactly one SkillGroup. TypeScript will
// flag any caller that forgets it or passes the wrong shape.
export default function SkillCard({ group }: { group: SkillGroup }) {
  return (
    <article className={`glass ${styles.card}`}>
      <h3 className={styles.title}>{group.title}</h3>
      <p className={styles.summary}>{group.summary}</p>
      <ul className={styles.tools}>
        {group.tools.map((tool) => (
          <li key={tool} className={styles.chip}>
            {tool}
          </li>
        ))}
      </ul>
    </article>
  );
}

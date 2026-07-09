import type { ResumeSection } from "@/content/resume";
import Reveal from "./Reveal";
import Ico from "./Ico";
import styles from "./Timeline.module.css";

/**
 * Renders one resume section (Education, Experience, …) as a vertical rail of
 * glass cards, each revealed on scroll. An optional `icon` (Iconify name) is
 * shown beside the section title.
 */
export default function Timeline({
  section,
  icon,
}: {
  section: ResumeSection;
  icon?: string;
}) {
  return (
    <section className={styles.block} aria-label={section.title}>
      <h2 className={styles.heading}>
        {icon && (
          <Ico
            icon={icon}
            width={24}
            height={24}
            className={styles.headingIcon}
            aria-hidden="true"
          />
        )}
        {section.title}
      </h2>

      <ol className={styles.rail}>
        {section.items.map((item, i) => (
          <li key={`${item.title}-${item.date}`} className={styles.item}>
            <span className={styles.node} aria-hidden="true" />
            <Reveal delay={i * 0.05} y={14}>
              <article className={`glass ${styles.card}`}>
                <header className={styles.head}>
                  <h3 className={styles.role}>{item.title}</h3>
                  <span className={styles.date}>{item.date}</span>
                </header>
                <p className={styles.org}>
                  <span className={styles.orgName}>{item.org}</span>
                  <span className={styles.dot}> · </span>
                  <span className={styles.loc}>{item.location}</span>
                </p>
                <ul className={styles.points}>
                  {item.points.map((point) => {
                    // GPA / grade lines are highlighted with a distinct marker.
                    const isStat = /^(GPA|Grade)\b/.test(point);
                    return (
                      <li key={point} className={isStat ? styles.stat : undefined}>
                        {point}
                      </li>
                    );
                  })}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}

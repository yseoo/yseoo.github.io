import type { ResumeSection } from "@/content/resume";
import Reveal from "./Reveal";
import styles from "./Timeline.module.css";

/**
 * Timeline — renders one resume section (Education, Experience, …) as a vertical
 * rail of glass cards. Server Component: static content, no JS. Each card is
 * wrapped in <Reveal> so it animates in as you scroll.
 */
export default function Timeline({ section }: { section: ResumeSection }) {
  return (
    <section className={styles.block} aria-label={section.title}>
      <h2 className={styles.heading}>{section.title}</h2>

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
                  {item.org} <span className={styles.dot}>·</span>{" "}
                  <span className={styles.loc}>{item.location}</span>
                </p>
                <ul className={styles.points}>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}

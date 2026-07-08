import Image from "next/image";
import type { Project } from "@/content/projects";
import Tag from "./Tag";
import Ico from "./Ico";
import styles from "./ProjectCard.module.css";

/**
 * ProjectCard — a uniform-height tile showing a teaser of one project. The whole
 * card is a button (role="button" + keyboard handler) that opens the detail
 * modal via the `onOpen` callback passed down from ProjectsGrid.
 */
export default function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  return (
    <article
      className={`glass ${styles.card}`}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${project.title}`}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen();
        }
      }}
    >
      <div className={styles.media}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 720px) 100vw, 360px"
          className={styles.image}
        />
        <span className={styles.theme}>{project.category}</span>
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{project.title}</h3>

        <ul className={styles.tags}>
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </ul>

        <p className={styles.blurb}>{project.blurb}</p>

        <div className={styles.footer}>
          <span className={styles.date}>
            <Ico
              icon="mdi:calendar-blank-outline"
              width={15}
              height={15}
              className={styles.dateIcon}
              aria-hidden="true"
            />
            {project.date}
          </span>
          <span className={styles.details}>
            Details <span aria-hidden="true">→</span>
          </span>
        </div>
      </div>
    </article>
  );
}

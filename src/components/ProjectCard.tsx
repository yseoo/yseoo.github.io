import Image from "next/image";
import type { Project } from "@/content/projects";
import styles from "./ProjectCard.module.css";

/**
 * ProjectCard — one project tile. Presentational: it just renders the `project`
 * prop it's given. Reused for every project in the grid.
 */
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`glass ${styles.card}`}>
      <div className={styles.media}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 720px) 100vw, 360px"
          className={styles.image}
        />
        <span className={styles.category}>{project.category}</span>
      </div>

      <div className={styles.body}>
        <header className={styles.head}>
          <h3 className={styles.title}>{project.title}</h3>
          <span className={styles.date}>{project.date}</span>
        </header>

        <p className={styles.blurb}>{project.blurb}</p>

        <ul className={styles.tags}>
          {project.tags.map((tag) => (
            <li key={tag} className={styles.tag}>
              {tag}
            </li>
          ))}
        </ul>

        {project.links.length > 0 && (
          <div className={styles.links}>
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                {link.label}
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

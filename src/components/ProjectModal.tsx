"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import type { Project } from "@/content/projects";
import Tag from "./Tag";
import Ico from "./Ico";
import styles from "./ProjectModal.module.css";

// Pick an icon for each link type.
function linkIcon(label: string): string {
  return label.toLowerCase() === "code" ? "mdi:github" : "mdi:open-in-new";
}

/**
 * ProjectModal — the expanded detail view for one project. A Client Component:
 * it locks body scroll, closes on Escape / backdrop click, and moves focus to
 * the close button — behaviours that only exist in the browser.
 */
export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    // Prevent the page behind from scrolling while the modal is open.
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <motion.div
      className={styles.backdrop}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      {/* stopPropagation so clicks inside the card don't close it */}
      <motion.div
        className={`glass ${styles.modal}`}
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.98 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.media}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="640px"
            className={styles.image}
          />
          <span className={styles.theme}>{project.category}</span>
          <button
            ref={closeRef}
            className={styles.close}
            onClick={onClose}
            aria-label="Close"
          >
            <Ico icon="mdi:close" width={20} height={20} />
          </button>
        </div>

        <div className={styles.body}>
          <h2 className={styles.title}>{project.title}</h2>

          <ul className={styles.tags}>
            {project.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </ul>

          <p className={styles.desc}>{project.blurb}</p>

          <div className={styles.footer}>
            <span className={styles.date}>
              <Ico
                icon="mdi:calendar-blank-outline"
                width={16}
                height={16}
                className={styles.dateIcon}
                aria-hidden="true"
              />
              {project.date}
            </span>

            {project.links.length > 0 && (
              <div className={styles.links}>
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-ghost btn-sm"
                  >
                    <Ico icon={linkIcon(link.label)} width={16} height={16} />
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

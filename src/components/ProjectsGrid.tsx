"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import {
  projects,
  CATEGORIES,
  type Category,
  type Project,
} from "@/content/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import styles from "./ProjectsGrid.module.css";

type Filter = Category | "All";
const FILTERS: Filter[] = ["All", ...CATEGORIES];

export default function ProjectsGrid() {
  // Which filter is selected (drives the visible list).
  const [active, setActive] = useState<Filter>("All");
  // Which project's modal is open (null = none).
  const [selected, setSelected] = useState<Project | null>(null);
  const reduceMotion = useReducedMotion();

  const visible =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <>
      <div className={styles.filters} role="tablist" aria-label="Filter projects">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            role="tab"
            aria-selected={active === filter}
            className={styles.filter}
            data-active={active === filter}
            onClick={() => setActive(filter)}
          >
            {filter}
            {filter !== "All" && (
              <span className={styles.count}>
                {projects.filter((p) => p.category === filter).length}
              </span>
            )}
          </button>
        ))}
      </div>

      <motion.div layout className={styles.grid}>
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard
                project={project}
                onOpen={() => setSelected(project)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Detail modal. AnimatePresence lets it animate out on close. */}
      <AnimatePresence>
        {selected && (
          <ProjectModal
            project={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

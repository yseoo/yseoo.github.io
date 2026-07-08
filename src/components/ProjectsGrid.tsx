"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { projects, CATEGORIES, type Category } from "@/content/projects";
import ProjectCard from "./ProjectCard";
import styles from "./ProjectsGrid.module.css";

type Filter = Category | "All";
const FILTERS: Filter[] = ["All", ...CATEGORIES];

export default function ProjectsGrid() {
  // The single piece of state: which filter is selected. Changing it re-renders.
  const [active, setActive] = useState<Filter>("All");
  const reduceMotion = useReducedMotion();

  // The visible list is DERIVED from state — not stored separately.
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
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}

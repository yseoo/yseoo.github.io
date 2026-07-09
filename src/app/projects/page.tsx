import type { Metadata } from "next";
import ProjectsGrid from "@/components/ProjectsGrid";
import Reveal from "@/components/Reveal";
import BuildMotif from "@/components/BuildMotif";
import styles from "./projects.module.css";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects blending robotics, computer vision, data science, and hardware — by Killian Hinard.",
};

export default function ProjectsPage() {
  return (
    <div className="section container">
      <div className={styles.header}>
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">Selected work</p>
            <h1 className="gradient-text">Projects</h1>
            <p className="section-lead">
              A collection of work spanning robotics, computer vision, data
              science, and hardware. Filter by area, and feel free to reach out
              if you&apos;d like to talk about any of them.
            </p>
          </div>
        </Reveal>
        <div className={styles.motif} aria-hidden="true">
          <BuildMotif />
        </div>
      </div>

      <ProjectsGrid />
    </div>
  );
}

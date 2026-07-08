import type { Metadata } from "next";
import ProjectsGrid from "@/components/ProjectsGrid";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects blending robotics, computer vision, data science, and hardware — by Killian Hinard.",
};

export default function ProjectsPage() {
  return (
    <div className="section container">
      <Reveal>
        <div className="section-head">
          <p className="eyebrow">Selected work</p>
          <h1>Projects</h1>
          <p className="section-lead">
            A collection of work spanning robotics, computer vision, data
            science, and hardware. Filter by area, and feel free to reach out if
            you&apos;d like to talk about any of them.
          </p>
        </div>
      </Reveal>

      <ProjectsGrid />
    </div>
  );
}

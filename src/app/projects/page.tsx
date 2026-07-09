import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ProjectsGrid from "@/components/ProjectsGrid";
import BuildMotif from "@/components/BuildMotif";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects blending robotics, computer vision, data science, and hardware — by Killian Hinard.",
};

export default function ProjectsPage() {
  return (
    <div className="section container">
      <PageHeader
        eyebrow="Selected work"
        title="Projects"
        lead="A collection of work spanning robotics, computer vision, data science, and hardware. Filter by area, and feel free to reach out about any of them."
        motif={<BuildMotif />}
      />

      <ProjectsGrid />
    </div>
  );
}

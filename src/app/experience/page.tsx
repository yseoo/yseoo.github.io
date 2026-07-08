import type { Metadata } from "next";
import Timeline from "@/components/Timeline";
import Reveal from "@/components/Reveal";
import { experience, education, extracurricular } from "@/content/resume";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience, education, and extracurricular activities of Killian Hinard.",
};

export default function ExperiencePage() {
  return (
    <div className="section container">
      <Reveal>
        <div className="section-head">
          <p className="eyebrow">Background</p>
          <h1>Experience &amp; education</h1>
          <p className="section-lead">
            A research-focused path across computer vision, robotics, and data
            science — from EPFL to industry labs.
          </p>
        </div>
      </Reveal>

      <Timeline section={experience} />
      <Timeline section={education} />
      <Timeline section={extracurricular} />
    </div>
  );
}

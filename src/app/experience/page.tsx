import type { Metadata } from "next";
import Timeline from "@/components/Timeline";
import Reveal from "@/components/Reveal";
import GraduationCap from "@/components/GraduationCap";
import { experience, education, extracurricular } from "@/content/resume";
import styles from "./experience.module.css";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience, education, and extracurricular activities of Killian Hinard.",
};

export default function ExperiencePage() {
  return (
    <div className="section container">
      <div className={styles.header}>
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">Career &amp; studies</p>
            <h1 className="gradient-text">Experience &amp; education</h1>
            <p className="section-lead">
              My academic background, professional experience, and the activities
              I&apos;ve been involved in along the way.
            </p>
          </div>
        </Reveal>
        <div className={styles.motif} aria-hidden="true">
          <GraduationCap />
        </div>
      </div>

      <div className={styles.columns}>
        <div className={styles.col}>
          <Timeline section={education} icon="mdi:school-outline" />
          <Timeline
            section={extracurricular}
            icon="mdi:account-group-outline"
          />
        </div>
        <div className={styles.col}>
          <Timeline section={experience} icon="mdi:briefcase-outline" />
        </div>
      </div>
    </div>
  );
}

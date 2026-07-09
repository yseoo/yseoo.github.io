import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Timeline from "@/components/Timeline";
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
      <PageHeader
        eyebrow="Career & studies"
        title="Experience & education"
        lead="My academic background, professional experience, and the activities I've been involved in along the way."
        motif={<GraduationCap />}
      />

      {/* Education and extracurriculars on the left, work history on the right. */}
      <div className={styles.columns}>
        <div className={styles.col}>
          <Timeline section={education} icon="mdi:school-outline" />
          <Timeline section={extracurricular} icon="mdi:account-group-outline" />
        </div>
        <div className={styles.col}>
          <Timeline section={experience} icon="mdi:briefcase-outline" />
        </div>
      </div>
    </div>
  );
}

import Hero from "@/components/Hero";
import SkillCard from "@/components/SkillCard";
import Reveal from "@/components/Reveal";
import { profile } from "@/content/profile";
import styles from "./page.module.css";

/**
 * Home ("/"). A Server Component that composes the Hero (client) and a Skills
 * section. Only the interactive leaves (Hero animation, Reveal) ship JS.
 */
export default function Home() {
  return (
    <>
      <Hero />

      <section className="section container" aria-labelledby="skills-heading">
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">What I do</p>
            <h2 id="skills-heading">Skills &amp; focus areas</h2>
            <p className="section-lead">{profile.bio}</p>
          </div>
        </Reveal>

        <div className={styles.skillsGrid}>
          {profile.skills.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.08}>
              <SkillCard group={group} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

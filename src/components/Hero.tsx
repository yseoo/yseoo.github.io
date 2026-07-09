"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import Constellation from "./Constellation";
import { profile } from "@/content/profile";
import styles from "./Hero.module.css";

// Variants: the parent staggers its children; each child rises + fades in.
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.05 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();

  // When reduced motion is preferred, disable the variants (render final state).
  const motionProps = reduceMotion
    ? {}
    : { variants: container, initial: "hidden" as const, animate: "show" as const };
  const childProps = reduceMotion ? {} : { variants: item };

  return (
    <section className={styles.hero}>
      <div className={styles.constellation} aria-hidden="true">
        <Constellation />
      </div>

      <motion.div className={`container ${styles.inner}`} {...motionProps}>
        <div className={styles.copy}>
          <motion.p className={`eyebrow ${styles.eyebrow}`} {...childProps}>
            {profile.eyebrow}
          </motion.p>

          <motion.h1 className={styles.name} {...childProps}>
            {profile.name}
          </motion.h1>

          <motion.p className={`${styles.role} gradient-text`} {...childProps}>
            {profile.role}
          </motion.p>

          <motion.p className={styles.tagline} {...childProps}>
            {profile.tagline}
          </motion.p>

          <motion.p className={styles.bio} {...childProps}>
            {profile.bio}
          </motion.p>

          <motion.div className={styles.actions} {...childProps}>
            <Link href="/contact" className="btn btn-primary">
              Get in touch
              <span className="btn-arrow" aria-hidden="true">
                →
              </span>
            </Link>
            <Link href="/experience" className="btn btn-ghost">
              View experience
              <span className="btn-arrow" aria-hidden="true">
                →
              </span>
            </Link>
            <Link href="/projects" className="btn btn-ghost">
              View projects
              <span className="btn-arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </motion.div>

          <motion.div className={styles.socials} {...childProps}>
            {profile.socials.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className={styles.socialPill}
              >
                <span className={styles.socialIcon}>
                  <Icon icon={s.icon} width={18} height={18} aria-hidden="true" />
                </span>
                {s.label}
              </a>
            ))}
            <a href={`mailto:${profile.email}`} className={styles.socialPill}>
              <span className={styles.socialIcon}>
                <Icon
                  icon="mdi:email-outline"
                  width={18}
                  height={18}
                  aria-hidden="true"
                />
              </span>
              Email
            </a>
          </motion.div>
        </div>

        {/* "At a glance" glass card */}
        <motion.aside className={`glass ${styles.card}`} {...childProps}>
          <p className={styles.cardLabel}>At a glance</p>
          <dl className={styles.glance}>
            {profile.highlights.map((h) => (
              <div key={h.label} className={styles.glanceRow}>
                <Icon
                  icon={h.icon}
                  width={22}
                  height={22}
                  className={styles.glanceIcon}
                  aria-hidden="true"
                />
                <div>
                  <dt>{h.label}</dt>
                  <dd>{h.value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </motion.aside>
      </motion.div>
    </section>
  );
}

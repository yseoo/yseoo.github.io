import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import CopyEmail from "@/components/CopyEmail";
import { profile } from "@/content/profile";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Killian Hinard.",
};

export default function ContactPage() {
  return (
    <div className="section container">
      <Reveal>
        <div className="section-head">
          <p className="eyebrow">Get in touch</p>
          <h1>Let&apos;s talk</h1>
          <p className="section-lead">
            Have a question or a potential opportunity? I&apos;m always open to
            new connections and collaborations — reach out and I&apos;ll get back
            to you.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className={styles.grid}>
          {/* Primary: email */}
          <div className={`glass ${styles.emailCard}`}>
            <p className={styles.label}>Email</p>
            <div className={styles.emailRow}>
              <a href={`mailto:${profile.email}`} className={styles.email}>
                {profile.email}
              </a>
              <CopyEmail email={profile.email} />
            </div>
            <a href={`mailto:${profile.email}`} className={styles.primaryBtn}>
              Send an email
            </a>
          </div>

          {/* Secondary: channels */}
          <div className={styles.channels}>
            {profile.socials.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className={`glass ${styles.channel}`}
              >
                <span className={styles.channelLabel}>{s.label}</span>
                <span className={styles.channelHint}>
                  {s.href.replace(/^https?:\/\/(www\.)?/, "")}
                </span>
                <span className={styles.arrow} aria-hidden="true">
                  ↗
                </span>
              </a>
            ))}
            <div className={`glass ${styles.channel} ${styles.location}`}>
              <span className={styles.channelLabel}>Based in</span>
              <span className={styles.channelHint}>{profile.location}</span>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

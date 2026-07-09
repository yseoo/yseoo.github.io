import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Ico from "@/components/Ico";
import EnvelopeMotif from "@/components/EnvelopeMotif";
import { profile } from "@/content/profile";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Killian Hinard.",
};

export default function ContactPage() {
  const github = profile.socials.find((s) => s.label === "GitHub");
  const linkedin = profile.socials.find((s) => s.label === "LinkedIn");

  // The contact channels shown as a 2x2 grid. `href` null = not a link.
  const channels: {
    icon: string;
    label: string;
    value: string;
    href: string | null;
  }[] = [
    {
      icon: "mdi:email-outline",
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: "mdi:linkedin",
      label: "LinkedIn",
      value: "in/killian-hinard",
      href: linkedin?.href ?? null,
    },
    {
      icon: "mdi:github",
      label: "GitHub",
      value: "github.com/yseoo",
      href: github?.href ?? null,
    },
    {
      icon: "mdi:map-marker-outline",
      label: "Based in",
      value: profile.location,
      href: null,
    },
  ];

  return (
    <div className="section container">
      <div className={styles.header}>
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">Get in touch</p>
            <h1 className="gradient-text">Let&apos;s Talk!</h1>
            <p className="section-lead">
              If you have any questions or would like to discuss potential
              opportunities, please don&apos;t hesitate to contact me. I&apos;m
              always open to new connections and look forward to hearing from
              you!
            </p>
            <a
              href={`mailto:${profile.email}`}
              className={`btn btn-primary ${styles.dropBtn}`}
            >
              Drop a mail
              <span className="btn-arrow" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </Reveal>
        <div className={styles.motif} aria-hidden="true">
          <EnvelopeMotif />
        </div>
      </div>

      <Reveal>
        <div className={styles.grid}>
          {channels.map((c) => {
            const inner = (
              <>
                <span className={styles.icon}>
                  <Ico icon={c.icon} width={22} height={22} aria-hidden="true" />
                </span>
                <span className={styles.text}>
                  <span className={styles.cLabel}>{c.label}</span>
                  <span className={styles.cValue}>{c.value}</span>
                </span>
              </>
            );

            return c.href ? (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className={`glass ${styles.card}`}
              >
                {inner}
              </a>
            ) : (
              <div key={c.label} className={`glass ${styles.card} ${styles.plain}`}>
                {inner}
              </div>
            );
          })}
        </div>
      </Reveal>
    </div>
  );
}

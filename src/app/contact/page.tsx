import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import Ico from "@/components/Ico";
import EnvelopeMotif from "@/components/EnvelopeMotif";
import { profile } from "@/content/profile";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Killian Hinard.",
};

type Channel = {
  icon: string;
  label: string;
  value: string;
  href: string | null; // null renders a static card instead of a link
};

export default function ContactPage() {
  const github = profile.socials.find((s) => s.label === "GitHub");
  const linkedin = profile.socials.find((s) => s.label === "LinkedIn");

  const channels: Channel[] = [
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
      <PageHeader
        eyebrow="Get in touch"
        title="Let's Talk!"
        lead="If you have any questions or would like to discuss potential opportunities, please don't hesitate to contact me. I'm always open to new connections and look forward to hearing from you!"
        motif={<EnvelopeMotif />}
      >
        <a
          href={`mailto:${profile.email}`}
          className={`btn btn-primary ${styles.dropBtn}`}
        >
          Drop a mail
          <span className="btn-arrow" aria-hidden="true">
            →
          </span>
        </a>
      </PageHeader>

      <Reveal>
        <div className={styles.grid}>
          {channels.map((channel) => {
            const inner = (
              <>
                <span className={styles.icon}>
                  <Ico
                    icon={channel.icon}
                    width={22}
                    height={22}
                    aria-hidden="true"
                  />
                </span>
                <span className={styles.text}>
                  <span className={styles.cLabel}>{channel.label}</span>
                  <span className={styles.cValue}>{channel.value}</span>
                </span>
              </>
            );

            return channel.href ? (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className={`glass ${styles.card}`}
              >
                {inner}
              </a>
            ) : (
              <div
                key={channel.label}
                className={`glass ${styles.card} ${styles.plain}`}
              >
                {inner}
              </div>
            );
          })}
        </div>
      </Reveal>
    </div>
  );
}

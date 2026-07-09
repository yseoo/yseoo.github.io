import type { ReactNode } from "react";
import Reveal from "./Reveal";
import styles from "./PageHeader.module.css";

type PageHeaderProps = {
  /** Small uppercase label displayed above the title. */
  eyebrow: string;
  /** Page title, rendered with the shared gradient/metallic treatment. */
  title: string;
  /** Introductory paragraph shown beneath the title. */
  lead: ReactNode;
  /** Optional decorative motif shown beside the text; hidden below 900px. */
  motif?: ReactNode;
  /** Optional extra content placed under the lead, such as a call to action. */
  children?: ReactNode;
};

/**
 * Two-column page header shared by the Experience, Projects, and Contact pages.
 * The text column (eyebrow, title, lead, optional children) reveals on mount;
 * the optional motif sits alongside it on wide viewports.
 */
export default function PageHeader({
  eyebrow,
  title,
  lead,
  motif,
  children,
}: PageHeaderProps) {
  return (
    <div className={styles.header}>
      <Reveal>
        <div className="section-head">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="gradient-text">{title}</h1>
          <p className="section-lead">{lead}</p>
          {children}
        </div>
      </Reveal>

      {motif && (
        <div className={styles.motif} aria-hidden="true">
          {motif}
        </div>
      )}
    </div>
  );
}

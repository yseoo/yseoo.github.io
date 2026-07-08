"use client";

import { Icon } from "@iconify/react";
import type { TechLogo } from "@/content/profile";
import styles from "./SkillLogos.module.css";

/**
 * SkillLogos — the row of tech logos on a skill card. Client Component because
 * @iconify/react's <Icon> loads each icon in the browser (from Iconify's CDN).
 */
export default function SkillLogos({ logos }: { logos: TechLogo[] }) {
  return (
    <div className={styles.logos}>
      {logos.map((logo) => (
        <span key={logo.name} className={styles.logo} title={logo.name}>
          <Icon
            icon={logo.icon}
            width={30}
            height={30}
            style={logo.color ? { color: logo.color } : undefined}
          />
        </span>
      ))}
    </div>
  );
}

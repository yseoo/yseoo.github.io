import Link from "next/link";
import { profile } from "@/content/profile";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div>
          <p className={styles.name}>{profile.name}</p>
          <p className={styles.role}>{profile.role}</p>
        </div>

        <nav className={styles.links} aria-label="Footer">
          <a href={`mailto:${profile.email}`}>Email</a>
          {profile.socials.map((s) => (
            <a key={s.href} href={s.href} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          ))}
          <Link href="/contact">Contact</Link>
        </nav>
      </div>

      <div className={`container ${styles.baseline}`}>
        <span>
          © {year} {profile.name}
        </span>
        <span>Built with Next.js · Deployed on GitHub Pages</span>
      </div>
    </footer>
  );
}

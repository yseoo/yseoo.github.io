"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./Nav.module.css";

// The navigation model — one place to add/rename/reorder links.
const LINKS = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  // `usePathname` gives the current URL path, so we can mark the active link.
  const pathname = usePathname();
  // `useState` holds the open/closed state of the mobile menu. `setOpen`
  // updates it and triggers a re-render.
  const [open, setOpen] = useState(false);

  // Treat "/experience/" and "/experience" the same (trailingSlash is on).
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} glass`} aria-label="Primary">
        <Link href="/" className={styles.brand} onClick={() => setOpen(false)}>
          <span className={styles.mark}>KH</span>
          <span className={styles.brandName}>Killian Hinard</span>
        </Link>

        <button
          className={styles.toggle}
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={styles.bar} data-open={open} />
        </button>

        <ul className={styles.links} data-open={open}>
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={styles.link}
                aria-current={isActive(link.href) ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

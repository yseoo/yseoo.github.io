"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./Nav.module.css";

// Primary navigation links, in display order.
const LINKS = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  // Open/closed state of the mobile menu.
  const [open, setOpen] = useState(false);

  // Match with or without a trailing slash (trailingSlash is enabled).
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

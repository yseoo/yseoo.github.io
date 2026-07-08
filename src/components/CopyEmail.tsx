"use client";

import { useState } from "react";
import styles from "./CopyEmail.module.css";

/**
 * CopyEmail — copies the address to the clipboard and briefly shows "Copied".
 * Client Component: uses useState (transient feedback) and the browser
 * Clipboard API, neither of which exist on the server.
 */
export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard may be blocked (e.g. insecure context); fail quietly.
    }
  }

  return (
    <button className={styles.btn} onClick={copy} data-copied={copied}>
      {copied ? "Copied ✓" : "Copy"}
    </button>
  );
}

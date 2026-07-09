"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/**
 * Reveal — fades and lifts its children into view the first time they're
 * scrolled to. A Client Component: it relies on the browser's IntersectionObserver
 * (through Framer Motion's `whileInView`), which can't run in a Server Component.
 *
 * If the visitor prefers reduced motion, we skip the animation entirely and
 * render the content as-is.
 */
type RevealProps = {
  children: ReactNode;
  /** Stagger helper: delay the entrance (seconds). */
  delay?: number;
  /** Distance (px) to travel upward on entry. */
  y?: number;
};

export default function Reveal({ children, delay = 0, y = 18 }: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return <>{children}</>;

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

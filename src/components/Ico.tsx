"use client";

import { Icon, type IconProps } from "@iconify/react";

/**
 * Ico — a thin Client Component wrapper around Iconify's <Icon>. Because it's
 * a client component, Server Components (like Timeline) can render it to show
 * an icon without themselves becoming client components.
 */
export default function Ico(props: IconProps) {
  return <Icon {...props} />;
}

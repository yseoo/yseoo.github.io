"use client";

import { Icon, type IconProps } from "@iconify/react";

/**
 * Client-side wrapper around Iconify's <Icon>. Confining the "use client"
 * boundary here lets Server Components render icons without becoming client
 * components themselves.
 */
export default function Ico(props: IconProps) {
  return <Icon {...props} />;
}

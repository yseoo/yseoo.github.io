import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a fully static site (an `out/` folder of HTML/CSS/JS) that any
  // static host — here, GitHub Pages — can serve without a Node server.
  output: "export",

  // The <Image> component normally optimizes images through a running
  // server. Static hosting has no server, so we serve images as-is.
  images: { unoptimized: true },

  // Produce /projects/index.html instead of /projects.html, so GitHub Pages
  // resolves clean folder URLs (and refreshes) correctly.
  trailingSlash: true,
};

export default nextConfig;

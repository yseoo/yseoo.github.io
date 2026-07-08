import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { profile } from "@/content/profile";
import "./globals.css";

/**
 * metadata — Next reads this object at build time and generates the <title>
 * and <meta> tags. This replaces the old SeoHeader + react-helmet setup.
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://killianhinard.com"),
  title: {
    default: `${profile.name} · ${profile.role}`,
    template: `%s · ${profile.name}`, // page titles become "Projects · Killian Hinard"
  },
  description: profile.metaDescription,
  openGraph: {
    title: `${profile.name} · ${profile.role}`,
    description: profile.metaDescription,
    url: "https://killianhinard.com",
    type: "website",
  },
};

/**
 * RootLayout — the shell wrapped around every page. It renders the <html>/<body>
 * document itself; `children` is the active page, injected between Nav and Footer.
 * A Server Component (no "use client"): pure HTML, no JS shipped.
 */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main id="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

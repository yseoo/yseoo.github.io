import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { profile } from "@/content/profile";
import "./globals.css";

/**
 * Site-wide metadata. Next.js reads this at build time to generate the document
 * <title> and social/meta tags; each page extends it through its own `metadata`.
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
 * Root layout wrapping every page: renders the document shell plus the
 * persistent navigation and footer. `children` is the active page.
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

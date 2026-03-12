import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Providers } from "@/components/providers/Providers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Atlas \u2014 Plateforme \u00e9ducative",
    template: "%s | Atlas",
  },
  description:
    "D\u00e9couvrez le monde, son histoire et ses cultures. Atlas est la plateforme \u00e9ducative destin\u00e9e aux \u00e9l\u00e8ves de la 6\u00e8me \u00e0 la Terminale couvrant la g\u00e9ographie, l\u2019histoire, la g\u00e9ologie et bien plus.",
  keywords: [
    "atlas",
    "\u00e9ducation",
    "g\u00e9ographie",
    "histoire",
    "g\u00e9ologie",
    "programme scolaire",
    "quiz",
    "coll\u00e8ge",
    "lyc\u00e9e",
  ],
  authors: [{ name: "Atlas EdTech" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Atlas",
    title: "Atlas \u2014 Plateforme \u00e9ducative",
    description:
      "D\u00e9couvrez le monde, son histoire et ses cultures avec Atlas.",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

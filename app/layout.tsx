import type { Metadata, Viewport } from "next";
import { Newsreader, Geist } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { CursorAura } from "@/components/site/cursor-aura";
import { site } from "@/lib/site";

const display = Newsreader({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  style: ["normal", "italic"],
  axes: ["opsz"],
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} - Westfälisches Landgasthaus seit sechs Generationen`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: site.url,
    siteName: site.name,
    title: `${site.name} - Westfälisches Landgasthaus`,
    description: site.description,
  },
  twitter: { card: "summary_large_image", title: site.name, description: site.description },
  applicationName: site.name,
  authors: [{ name: "Familie Hoffschulte" }],
  keywords: [
    "Restaurant Münster",
    "Hoffschulte",
    "Westfälische Küche",
    "Biergarten Münster",
    "Wolbeck",
    "Angelmodde",
    "Wild aus eigener Jagd",
    "Hochzeit Münster",
    "Außer-Haus-Verkauf",
  ],
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${display.variable} ${geistSans.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Zum Inhalt springen
        </a>
        <CursorAura />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

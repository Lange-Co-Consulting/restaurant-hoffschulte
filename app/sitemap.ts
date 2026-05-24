import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1, freq: "weekly" },
    { path: "/restaurant", priority: 0.9, freq: "monthly" },
    { path: "/biergarten", priority: 0.8, freq: "monthly" },
    { path: "/raeumlichkeiten", priority: 0.8, freq: "monthly" },
    { path: "/ausser-haus", priority: 0.85, freq: "weekly" },
    { path: "/wild", priority: 0.85, freq: "monthly" },
    { path: "/ueber-uns", priority: 0.7, freq: "yearly" },
    { path: "/kontakt", priority: 0.7, freq: "yearly" },
    { path: "/impressum", priority: 0.3, freq: "yearly" },
    { path: "/datenschutz", priority: 0.3, freq: "yearly" },
  ];
  return routes.map((r) => ({
    url: `${site.url}${r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}

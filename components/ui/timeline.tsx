"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

export type TimelineEntry = {
  generation: string;
  year?: string;
  name?: string;
  body: string;
};

export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const viewport = window.innerHeight;
      const total = rect.height + viewport * 0.5;
      const passed = Math.min(Math.max(viewport * 0.5 - rect.top, 0), total);
      setProgress(Math.min(passed / total, 1));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={ref} className="relative">
      <div aria-hidden className="absolute left-[19px] md:left-[31px] top-0 bottom-0 w-px bg-[color:var(--line)]" />
      <div
        aria-hidden
        className="absolute left-[19px] md:left-[31px] top-0 w-px bg-accent origin-top transition-transform duration-700 ease-out"
        style={{ height: `${progress * 100}%` }}
      />
      <ol className="space-y-12 md:space-y-16">
        {entries.map((e, i) => (
          <li key={i} className="relative pl-12 md:pl-20">
            <span
              aria-hidden
              className={cn(
                "absolute left-[12px] md:left-[24px] top-1 w-3.5 h-3.5 rounded-full border-2 transition-all duration-500",
                progress > i / entries.length
                  ? "bg-accent border-accent shadow-[0_0_24px_oklch(0.74_0.135_65_/_0.6)]"
                  : "bg-bg border-[color:var(--line-strong)]",
              )}
            />
            <div className="flex items-baseline justify-between gap-6 mb-3 flex-wrap">
              <span className="index text-[0.95rem]">{e.generation}</span>
              {e.year && <span className="label text-[0.62rem] text-muted">{e.year}</span>}
            </div>
            {e.name && (
              <p className="font-display text-text text-[1.6rem] md:text-[2rem] leading-[1.05] tracking-[-0.02em] mb-3">
                {e.name}
              </p>
            )}
            <p className="text-text-2 text-[15.5px] leading-[1.7] max-w-2xl">{e.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

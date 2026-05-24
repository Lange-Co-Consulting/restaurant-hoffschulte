import { Star } from "lucide-react";
import { cn } from "@/lib/cn";

export function ReviewCard({
  name,
  body,
  source = "Google",
  date,
  rating = 5,
  className,
}: {
  name: string;
  body: string;
  source?: string;
  date?: string;
  rating?: number;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "flex flex-col gap-5 p-7 md:p-9 border border-[color:var(--line)] bg-bg rounded-[2px] transition-colors duration-300 hover:border-[color:var(--accent-deep)]",
        className,
      )}
    >
      <div
        className="flex items-center gap-1.5 text-accent-deep"
        aria-label={`${rating} von 5 Sternen`}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={15}
            strokeWidth={1.5}
            className={
              i < rating
                ? "fill-[color:var(--accent-deep)] text-accent-deep"
                : "text-[color:var(--line-strong)]"
            }
          />
        ))}
      </div>
      <p className="h-card text-[1.2rem] md:text-[1.32rem] leading-[1.45]">
        „{body}"
      </p>
      <footer className="mt-auto pt-5 border-t border-[color:var(--line)] flex items-baseline justify-between gap-3 text-[13px]">
        <span className="font-medium text-text">{name}</span>
        <span className="text-muted whitespace-nowrap">
          {source}
          {date && ` · ${date}`}
        </span>
      </footer>
    </article>
  );
}

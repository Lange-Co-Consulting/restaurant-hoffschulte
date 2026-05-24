import { cn } from "@/lib/cn";

export function MenuItem({
  name,
  description,
  price,
  badges,
  className,
}: {
  name: string;
  description?: string;
  price: string;
  badges?: string[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "py-5 border-b border-[color:var(--line)] last:border-b-0 group/item",
        className,
      )}
    >
      <div className="flex items-baseline gap-4">
        <h3 className="h-card text-[1.2rem] md:text-[1.35rem] text-text flex-1">
          {name}
          {badges?.length ? (
            <span className="ml-2.5 inline-flex gap-1.5 align-middle">
              {badges.map((b) => (
                <span
                  key={b}
                  className="eyebrow text-[0.55rem] px-2 py-0.5 rounded-full border border-[color:var(--line-strong)] text-text-2"
                >
                  {b}
                </span>
              ))}
            </span>
          ) : null}
        </h3>
        <span
          aria-hidden
          className="flex-1 border-b border-dotted border-[color:var(--line-strong)] translate-y-[-5px] group-hover/item:border-[color:var(--accent-deep)] transition-colors"
        />
        <span className="font-display-italic text-accent-deep text-[1.15rem] tabular-nums">
          {price}
        </span>
      </div>
      {description && (
        <p className="mt-2 body-base text-[13.5px] max-w-2xl">{description}</p>
      )}
    </div>
  );
}

import { cn } from "@/lib/cn";

export function SectionEyebrow({
  children,
  accent,
  className,
}: {
  children: React.ReactNode;
  accent?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "eyebrow inline-flex items-center gap-3",
        accent && "eyebrow-accent",
        className,
      )}
    >
      <span aria-hidden className={cn(
        "h-px w-7",
        accent ? "bg-accent" : "bg-[color:var(--line-strong)]",
      )} />
      {children}
    </span>
  );
}

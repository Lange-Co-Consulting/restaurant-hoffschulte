import { cn } from "@/lib/cn";

export function PullQuote({
  children,
  attribution,
  size = "md",
  className,
}: {
  children: React.ReactNode;
  attribution?: string;
  size?: "md" | "lg" | "xl";
  className?: string;
}) {
  const sizeClass = {
    md: "text-[1.5rem] md:text-[1.8rem]",
    lg: "text-[1.85rem] md:text-[2.35rem]",
    xl: "text-[2.3rem] md:text-[3rem]",
  }[size];

  return (
    <blockquote className={cn("relative", className)}>
      <span
        aria-hidden
        className="absolute -top-4 -left-1 font-display-italic text-accent-deep/30 text-[4.5rem] leading-none"
      >
        “
      </span>
      <p
        className={cn(
          "font-display-italic text-text leading-[1.2] tracking-[-0.018em] max-w-[26ch] relative",
          sizeClass,
        )}
      >
        {children}
      </p>
      {attribution && (
        <footer className="mt-5 eyebrow text-[0.62rem] flex items-center gap-3">
          <span aria-hidden className="h-px w-7 bg-accent-deep" />
          {attribution}
        </footer>
      )}
    </blockquote>
  );
}

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
    lg: "text-[1.9rem] md:text-[2.4rem]",
    xl: "text-[2.4rem] md:text-[3.2rem]",
  }[size];

  return (
    <blockquote className={cn("relative", className)}>
      <span aria-hidden className="absolute -top-4 -left-1 font-display-italic text-accent/35 text-[4.5rem] leading-none">“</span>
      <p className={cn("font-display-italic text-text leading-[1.18] tracking-[-0.018em] max-w-[26ch] relative", sizeClass)}>
        {children}
      </p>
      {attribution && (
        <footer className="mt-5 label text-[0.6rem] flex items-center gap-3">
          <span aria-hidden className="h-px w-7 bg-accent" />
          {attribution}
        </footer>
      )}
    </blockquote>
  );
}

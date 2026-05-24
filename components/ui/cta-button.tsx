import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Magnetic } from "./magnetic";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "ghost";

export function CtaButton({
  href,
  children,
  variant = "primary",
  external = false,
  className,
  magnetic = true,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
  magnetic?: boolean;
}) {
  const base =
    "group/cta inline-flex items-center gap-3 text-[0.95rem] font-medium leading-none transition-all duration-300 min-h-[48px]";
  const styles: Record<Variant, string> = {
    primary:
      "bg-text text-bg pl-6 pr-2 py-2.5 rounded-full hover:bg-accent hover:text-bg",
    outline:
      "border border-text text-text pl-6 pr-2 py-2.5 rounded-full hover:bg-text hover:text-bg",
    ghost: "text-text hover:text-accent text-[0.95rem] font-medium min-h-0",
  };

  const Inner = (
    <span className={cn(base, styles[variant], className)}>
      <span>{children}</span>
      {variant !== "ghost" && (
        <span
          className={cn(
            "inline-flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300",
            variant === "primary"
              ? "bg-bg text-text group-hover/cta:bg-bg group-hover/cta:text-accent"
              : "bg-text text-bg group-hover/cta:bg-bg group-hover/cta:text-accent group-hover/cta:border group-hover/cta:border-text",
          )}
        >
          <ArrowUpRight
            size={16}
            strokeWidth={1.7}
            className="transition-transform group-hover/cta:translate-x-[1px] group-hover/cta:-translate-y-[1px]"
          />
        </span>
      )}
      {variant === "ghost" && (
        <ArrowUpRight
          size={14}
          strokeWidth={1.7}
          className="transition-transform group-hover/cta:translate-x-[1px] group-hover/cta:-translate-y-[1px]"
        />
      )}
    </span>
  );

  const link = external ? (
    <a href={href} target="_blank" rel="noopener noreferrer">{Inner}</a>
  ) : (
    <Link href={href}>{Inner}</Link>
  );

  if (!magnetic || variant === "ghost") return link;
  return <Magnetic strength={0.2}>{link}</Magnetic>;
}

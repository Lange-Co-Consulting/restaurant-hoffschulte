import { cn } from "@/lib/cn";

export function Marquee({
  children,
  className,
  pauseOnHover = false,
}: {
  children: React.ReactNode;
  className?: string;
  pauseOnHover?: boolean;
}) {
  return (
    <div className={cn("overflow-hidden", className)} aria-hidden="true">
      <div className={cn("marquee-track", pauseOnHover && "hover:[animation-play-state:paused]")}>
        {children}
      </div>
    </div>
  );
}

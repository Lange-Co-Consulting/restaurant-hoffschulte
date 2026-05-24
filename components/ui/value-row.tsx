import { cn } from "@/lib/cn";

export function ValueRow({
  number,
  label,
  title,
  body,
  className,
}: {
  number: string;
  label: string;
  title: string;
  body: string;
  className?: string;
}) {
  return (
    <div className={cn("group grid md:grid-cols-[72px_160px_1fr] gap-5 md:gap-10 items-start py-8 md:py-12 border-b border-[color:var(--line)] transition-colors duration-500 hover:bg-bg-2/60", className)}>
      <span className="index text-[1.1rem]">{number}</span>
      <span className="label text-[0.62rem] md:pt-2">{label}</span>
      <div>
        <h3 className="font-display text-text text-[clamp(1.5rem,3.2vw,2.1rem)] leading-[1.08] tracking-[-0.02em]">
          {title}
        </h3>
        <p className="mt-3.5 text-text-2 text-[15px] leading-[1.7] max-w-2xl">{body}</p>
      </div>
    </div>
  );
}

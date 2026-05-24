import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ChapterCard({
  index,
  label,
  title,
  body,
  href,
  image,
}: {
  index: string;
  label: string;
  title: string;
  body: string;
  href: string;
  image: string;
}) {
  return (
    <Link
      href={href}
      data-cursor="hover"
      className="group relative block w-[78vw] sm:w-[48vw] md:w-[38vw] lg:w-[30vw] max-w-[460px]"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-bg-3 vignette">
        <Image
          src={image}
          alt={title}
          fill
          quality={88}
          sizes="(min-width: 1024px) 30vw, (min-width: 768px) 38vw, (min-width: 640px) 48vw, 78vw"
          className="object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.045]"
        />
        <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
          <span className="eyebrow text-[0.6rem] text-bg bg-text/45 backdrop-blur-md px-3 py-1.5 rounded-full">
            {label}
          </span>
          <span className="font-display-italic text-bg text-[0.95rem] drop-shadow-sm">
            {index}
          </span>
        </div>
        <div className="absolute inset-x-5 bottom-5 z-10 flex items-end justify-between gap-4">
          <h3 className="font-display text-bg text-[2rem] md:text-[2.4rem] leading-[1.02] tracking-[-0.025em] max-w-[8ch] drop-shadow-sm">
            {title}
          </h3>
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-bg/40 bg-bg/15 backdrop-blur-sm text-bg transition-all duration-300 group-hover:bg-bg group-hover:text-text group-hover:border-bg">
            <ArrowUpRight size={17} strokeWidth={1.6} />
          </span>
        </div>
      </div>
      <p className="mt-4 body-base max-w-md">{body}</p>
    </Link>
  );
}

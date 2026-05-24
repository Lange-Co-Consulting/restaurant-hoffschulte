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
      className="group relative block w-[76vw] sm:w-[48vw] md:w-[38vw] lg:w-[30vw] max-w-[460px]"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-bg-3 vignette">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 768px) 38vw, (min-width: 640px) 48vw, 76vw"
          className="object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.045]"
        />
        <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
          <span className="label text-[0.6rem] text-bg/95 bg-text/30 backdrop-blur-md px-2.5 py-1 rounded-full">{label}</span>
          <span className="index text-[0.85rem] text-bg/95">{index}</span>
        </div>
        <div className="absolute inset-x-5 bottom-5 z-10 flex items-end justify-between gap-4">
          <h3 className="font-display text-bg text-[1.9rem] md:text-[2.3rem] leading-[1.02] tracking-[-0.025em] max-w-[8ch] drop-shadow-sm">
            {title}
          </h3>
          <span className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-bg/40 bg-bg/15 backdrop-blur-sm text-bg transition-all duration-300 group-hover:bg-bg group-hover:text-text group-hover:border-bg">
            <ArrowUpRight size={16} strokeWidth={1.6} />
          </span>
        </div>
      </div>
      <p className="mt-4 text-text-2 text-[14px] leading-[1.65] max-w-md">{body}</p>
    </Link>
  );
}

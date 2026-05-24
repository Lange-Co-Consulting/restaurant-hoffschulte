import Image from "next/image";
import { SectionEyebrow } from "./section-eyebrow";
import { HeadlineReveal, Reveal } from "./reveal";

export function PageHero({
  eyebrow,
  number,
  title,
  intro,
  image,
  imageAlt,
}: {
  eyebrow: string;
  number?: string;
  title: React.ReactNode;
  intro?: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative pt-28 md:pt-40 pb-12 md:pb-20 overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <Image
          src={image}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-[0.18]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg/85 to-bg" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-transparent to-bg" />
      </div>

      <div className="relative container-x grid md:grid-cols-[1fr_auto] gap-8 md:gap-14 items-end">
        <div>
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <SectionEyebrow accent>{eyebrow}</SectionEyebrow>
            {number && <span className="index text-[0.78rem]">- {number}</span>}
          </div>
          <h1 className="font-display text-text text-[clamp(2.6rem,7.8vw,6.4rem)] leading-[0.98] tracking-[-0.03em] max-w-[12ch]">
            <HeadlineReveal>{title}</HeadlineReveal>
          </h1>
        </div>

        {intro && (
          <Reveal delay={0.25}>
            <p className="text-text-2 text-[15px] md:text-[16px] leading-[1.7] max-w-md md:pl-6 md:border-l md:border-[color:var(--line-strong)]">
              {intro}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}

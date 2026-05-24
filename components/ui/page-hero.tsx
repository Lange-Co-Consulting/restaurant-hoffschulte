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
    <section className="relative pt-32 md:pt-44 pb-14 md:pb-24 overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <Image
          src={image}
          alt=""
          fill
          sizes="100vw"
          quality={90}
          className="object-cover object-center opacity-[0.22]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/85 via-bg/65 to-bg" />
        <div className="absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-bg to-transparent" />
      </div>

      <div className="relative container-x grid md:grid-cols-[1.4fr_1fr] gap-10 md:gap-16 items-end">
        <div>
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <SectionEyebrow accent>{eyebrow}</SectionEyebrow>
            {number && <span className="index text-[0.85rem]">{number}</span>}
          </div>
          <h1 className="h-display text-[clamp(2.8rem,7.5vw,6.2rem)] max-w-[14ch]">
            <HeadlineReveal>{title}</HeadlineReveal>
          </h1>
        </div>

        {intro && (
          <Reveal delay={0.25}>
            <p className="body-lead max-w-md md:pl-6 md:border-l md:border-[color:var(--line-strong)]">
              {intro}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}

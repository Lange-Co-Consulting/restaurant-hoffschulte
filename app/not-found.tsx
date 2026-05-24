import Link from "next/link";
import { CtaButton } from "@/components/ui/cta-button";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center pt-32 pb-20">
      <div className="container-narrow text-center">
        <SectionEyebrow accent className="justify-center inline-flex">404 · nicht gefunden</SectionEyebrow>
        <h1 className="font-display text-text text-[clamp(3rem,8vw,6rem)] mt-6 leading-[0.98] tracking-[-0.03em]">
          Diese Seite hat <em className="font-display-italic text-accent">unser Haus nie gesehen.</em>
        </h1>
        <p className="mt-8 text-text-2 text-[16.5px] leading-relaxed max-w-lg mx-auto">
          Vielleicht haben Sie die Karte einer alten Saison aufgerufen, oder ein Link ist
          umgezogen. Zurück zur Startseite - oder direkt einen Tisch reservieren.
        </p>
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          <CtaButton href="/">Zur Startseite</CtaButton>
          <CtaButton href="tel:+4925067462" variant="outline" external>02506 7462</CtaButton>
        </div>
      </div>
    </section>
  );
}

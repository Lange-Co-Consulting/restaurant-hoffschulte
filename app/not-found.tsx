import { CtaButton } from "@/components/ui/cta-button";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";

export default function NotFound() {
  return (
    <section className="min-h-[100dvh] flex items-center pt-32 pb-20">
      <div className="container-narrow text-center">
        <SectionEyebrow accent className="justify-center inline-flex">
          404 · nicht gefunden
        </SectionEyebrow>
        <h1 className="h-display mt-6 text-[clamp(2.6rem,6vw,4.5rem)]">
          Diese Seite hat{" "}
          <em className="font-display-italic text-accent-deep">unser Haus nie gesehen.</em>
        </h1>
        <p className="mt-8 body-lead max-w-lg mx-auto">
          Vielleicht haben Sie eine Karte einer alten Saison aufgerufen, oder ein Link
          ist umgezogen. Zurück zur Startseite, oder direkt einen Tisch reservieren.
        </p>
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          <CtaButton href="/">Zur Startseite</CtaButton>
          <CtaButton href="tel:+4925067462" variant="outline" external>
            02506 7462
          </CtaButton>
        </div>
      </div>
    </section>
  );
}

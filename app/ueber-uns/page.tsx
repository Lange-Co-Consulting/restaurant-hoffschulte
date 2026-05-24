import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/page-hero";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { CtaButton } from "@/components/ui/cta-button";
import { DecorativeImage } from "@/components/ui/decorative-image";

export const metadata: Metadata = {
  title: "Über uns - Sechs Generationen Familie Hoffschulte",
  description:
    "Sechs Generationen Familie Hoffschulte am Alten Postweg. Vom 1050 erwähnten Hof zur heutigen Gastwirtschaft, geführt von Carsten Hoffschulte.",
};

export default function UeberUnsPage() {
  return (
    <>
      <PageHero
        eyebrow="Über uns"
        number="Kapitel 06"
        title={<>Sechs Generationen <em className="font-display-italic text-accent-deep">unter einem Dach.</em></>}
        intro="Ein altes Bauernhaus, eine Familie, ein langer Atem. Seit 1814 bewirten wir am Alten Postweg unsere Gäste. Heute steht die sechste Generation am Herd."
        image="/photos/gebaeude-historic.jpg"
        imageAlt="Historische Aufnahme des Hoffschulte-Hauses"
      />

      {/* GESCHICHTE - Text + Chronik-Tafel komplett sichtbar */}
      <section className="relative section-y overflow-hidden">
        <DecorativeImage src="/photos/dish-vorspeise.jpg" anchor="bottom-right" size="md" drift={100} rotate={-6} />
        <div className="relative z-10 container-x grid md:grid-cols-[1fr_1.05fr] gap-12 md:gap-20 items-start">
          <Reveal>
            <SectionEyebrow accent>Unsere Geschichte</SectionEyebrow>
            <h2 className="h-section mt-4">
              Vom Hof zur <em className="font-display-italic text-accent-deep">Gastwirtschaft.</em>
            </h2>

            <div className="mt-7 space-y-5 body-lead max-w-lg">
              <p>
                Bereits im Jahr <span className="text-text">1050</span> wird der Hof
                Hoffschulte zu Angelmodde erstmals erwähnt. Über Jahrhunderte bleibt
                er Bauernhof - bis am <span className="text-text">15. Juli 1814</span> im
                Münsterischen Intelligenzblatt die offizielle Anzeige erscheint:
                Hoffschulte bei Angelmodde lädt zur Lustpartie ein. Das ist die Geburtsstunde
                unserer Gastwirtschaft.
              </p>
              <p>
                Gegründet hat sie <span className="text-text">Josef Hoffschulte</span> -
                der Ur-Urgroßvater des heutigen Wirts. Seither steht in jeder Generation
                jemand aus der Familie hinter dem Tresen, am Herd oder im Saal. Sechs
                Generationen, ein Haus, eine Tradition.
              </p>
              <p>
                Heute führt <span className="text-text">Carsten Hoffschulte</span> das
                Restaurant in sechster Generation. Was sich verändert hat, ist die Karte.
                Was geblieben ist, ist die Frische - und die Überzeugung, dass gute Küche
                aus dem entsteht, was die Region zu bieten hat.
              </p>
              <p>
                Wer einmal bei uns Platz nimmt, sitzt zwischen Wänden, die mehr erlebt
                haben als jeder einzelne von uns. Wir freuen uns, Sie bei uns zu begrüßen.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <CtaButton href="/restaurant" variant="outline">Zur Küche</CtaButton>
              <CtaButton href="/kontakt" variant="ghost">Reservieren</CtaButton>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative w-full bg-bg-2 border border-[color:var(--line-strong)] p-3 md:p-4">
              <div className="relative w-full" style={{ aspectRatio: "1280 / 1850" }}>
                <Image
                  src="/photos/chronik-tafel.jpg"
                  alt="Historische Chronik-Tafel: Chronik des Hofes und der Familie Hoffschulte - Erwähnungen ab 1050, Erbfolge der Schultenfamilie, Anekdote zu Fürstin Gallitzin und Goethe"
                  fill
                  quality={94}
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="object-contain"
                />
              </div>
            </div>
            <p className="mt-4 text-muted text-[13px] max-w-md">
              Chronik des Hofes und der Familie Hoffschulte - die historische Tafel hängt
              im Restaurant. Erzählt von den ersten Erwähnungen 1050 bis zur Gründung
              der Gastwirtschaft.
            </p>
          </Reveal>
        </div>
      </section>

      {/* HOFSTELLE - historisches Bild der Außenansicht */}
      <section className="section-y bg-bg-2/40 border-y border-[color:var(--line)]">
        <div className="container-x">
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16 mb-10 md:mb-14">
            <Reveal>
              <SectionEyebrow accent>Die Hofstelle</SectionEyebrow>
              <h2 className="h-section mt-4">
                Am Alten Postweg, <em className="font-display-italic">seit Generationen.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="body-lead max-w-xl">
                Fachwerk, Sandsteinbogen, Backstein, Pfannendach.
                Wenig hat sich am Äußeren verändert.
              </p>
            </Reveal>
          </div>

          <Reveal className="relative w-full aspect-[16/7] overflow-hidden bg-bg-3">
            <Image
              src="/photos/gebaeude-historic.jpg"
              alt="Historische Aufnahme der Hofstelle Hoffschulte"
              fill
              quality={92}
              sizes="100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* CARSTEN - VITA */}
      <section className="relative section-y overflow-hidden">
        <DecorativeImage src="/photos/dish-lammkarree.jpg" anchor="top-right" size="lg" drift={140} rotate={5} />
        <div className="relative z-10 container-x grid md:grid-cols-[1fr_1.2fr] gap-10 md:gap-16 items-center">
          <Reveal className="relative aspect-[4/5] overflow-hidden bg-bg-3 vignette">
            <Image
              src="/photos/carsten-portrait.jpg"
              alt="Carsten Hoffschulte mit Kochmütze in seiner Küche"
              fill
              quality={92}
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <SectionEyebrow accent>Der Wirt heute</SectionEyebrow>
            <h2 className="h-display mt-4">
              Carsten <em className="font-display-italic">Hoffschulte.</em>
            </h2>
            <p className="mt-3 text-text-2 text-[1rem] font-display-italic">
              Jäger · Koch · Küchenmeister · sechste Generation.
            </p>
            <p className="mt-6 body-lead max-w-md">
              Geboren in Münster. Seit 1994 Jäger im eigenen Revier, seit 1998 Koch,
              seit 2008 Küchenmeister mit eigener Handschrift in einer alten Tradition.
            </p>

            <ul className="mt-8 space-y-0 max-w-md">
              {[
                ["1978", "Geboren in Münster."],
                ["1994", "Jagdschein. Das Revier wird Bestandteil der Küche."],
                ["1998", "Abschluss als Koch."],
                ["2008", "Küchenmeister-Prüfung."],
                ["heute", "Sechste Generation am Herd."],
              ].map(([y, t]) => (
                <li key={y} className="grid grid-cols-[80px_1fr] gap-6 py-3.5 border-b border-[color:var(--line)]">
                  <span className="index text-[1.05rem]">{y}</span>
                  <span className="text-text text-[15px] leading-[1.55]">{t}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <CtaButton href="/restaurant" variant="outline">Zur Küche</CtaButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

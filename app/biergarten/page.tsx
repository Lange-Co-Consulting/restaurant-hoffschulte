import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/page-hero";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { PullQuote } from "@/components/ui/pull-quote";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { CtaButton } from "@/components/ui/cta-button";

export const metadata: Metadata = {
  title: "Biergarten - Unter neunzig Jahre alten Platanen",
  description:
    "Unser Biergarten unter ca. 90 Jahre alten Platanen. Vom Frühling bis in den Herbst hinein. Hövels, Radeberger, Schlösser Alt, Erdinger Weizen vom Fass.",
};

const beers = [
  { name: "Hövels", region: "Dortmund", note: "Ursprünglich" },
  { name: "Radeberger", region: "Sachsen", note: "Pilsner Brauart" },
  { name: "Schlösser Alt", region: "Düsseldorf", note: "Obergärig" },
  { name: "Erdinger Weizen", region: "Bayern", note: "Hefetrüb" },
];

export default function BiergartenPage() {
  return (
    <>
      <PageHero
        eyebrow="Biergarten"
        number="Kapitel 02"
        title={<>Unter neunzig Jahre alten <em className="font-display-italic text-accent">Platanen.</em></>}
        intro="Nehmen Sie Platz unter unseren ca. 90 Jahre alten Platanen. Für ein ideales Blätterdach werden diese alle drei bis vier Jahre zurückgeschnitten. Im Sommer ein grüner Saal, ohne Wände."
        image="/photos/biergarten-classic-1.jpg"
        imageAlt="Biergarten unter Platanen - Tische auf Kies, Sonnenlicht durch das Blätterdach"
      />

      {/* CINEMATIC BAND */}
      <section className="relative">
        <div className="relative h-[70vh] min-h-[480px] w-full overflow-hidden vignette">
          <Image
            src="/photos/biergarten-classic-2.jpg"
            alt="Biergarten - Außenansicht des Restaurants, Fachwerk, Sandsteinbogen"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* RESERVATION NOTE */}
      <section className="section-y">
        <div className="container-x grid md:grid-cols-[1.3fr_1fr] gap-10 md:gap-16">
          <Reveal>
            <SectionEyebrow accent>So einfach</SectionEyebrow>
            <h2 className="h-section mt-5">
              Eine Reservierung. <em className="font-display-italic text-accent">Zwei Möglichkeiten.</em>
            </h2>
            <div className="mt-8 space-y-5 body-lead max-w-2xl">
              <p>
                Ihre Reservierung wird, je nach Wetterlage, automatisch auch im
                Biergarten vorgenommen. Vor Ort entscheiden Sie, ob Sie draußen
                oder im Haus Platz nehmen möchten.
              </p>
              <p>
                Die Platanen werden alle drei bis vier Jahre fachmännisch
                zurückgeschnitten, so entsteht das dichte Blätterdach, das die
                heißesten Mittagsstunden kühlt und am Abend ein leichtes Rauschen
                im Wind macht.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <CtaButton href="tel:+4925067462" external>02506 7462 - Tisch sichern</CtaButton>
                <CtaButton href="/kontakt" variant="outline">Anfrage schreiben</CtaButton>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="md:pl-12 md:border-l md:border-[color:var(--line-strong)]">
            <PullQuote attribution="Gast · Sommer im Biergarten" size="lg">
              Der Biergarten unter den alten Platanen ist im Sommer ein echter Geheimtipp.
            </PullQuote>
          </Reveal>
        </div>
      </section>

      {/* BEERS */}
      <section className="section-y bg-bg-2/30 border-y border-[color:var(--line)]">
        <div className="container-x">
          <SectionEyebrow accent>Vom Fass</SectionEyebrow>
          <h2 className="h-section mt-5 max-w-3xl">
            Vier Biere, <em className="font-display-italic text-accent">jedes mit Heimat.</em>
          </h2>

          <StaggerGroup className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[color:var(--line)] border border-[color:var(--line)]">
            {beers.map((b, i) => (
              <StaggerItem key={b.name} className="bg-bg p-8 md:p-10 hover:bg-bg-2/60 transition-colors">
                <span className="index">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-text text-[1.8rem] mt-3 leading-[1.05] tracking-[-0.02em]">{b.name}</h3>
                <p className="text-text-2 text-[14px] mt-1">{b.region}</p>
                <p className="text-muted text-[12.5px] mt-4 label text-[0.6rem]">{b.note}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <p className="mt-10 text-text-2 text-[14px] max-w-2xl leading-relaxed">
            Dazu Weine aus unserer Karte, Aperitifs, Kaffee aus der Münsteraner Rösterei,
            sowie alkoholfreie Alternativen. Sprechen Sie uns an - wir empfehlen gern.
          </p>
        </div>
      </section>
    </>
  );
}

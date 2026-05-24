import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/page-hero";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { CtaButton } from "@/components/ui/cta-button";
import { Users } from "lucide-react";
import eventData from "@/content/cards/event-menus.json";

export const metadata: Metadata = {
  title: "Räumlichkeiten - Fachwerkstube, Kaminraum & Beste Stube",
  description:
    "Drei Räume mit Charakter - von der intimen Besten Stube bis zum Kaminraum für bis zu 80 Personen. Hochzeiten, Familienfeste, Empfänge. Mit Menüvorschlägen.",
};

const rooms = [
  {
    nr: "01",
    name: "Fachwerkstube",
    capacity: "bis 50 Personen",
    body: "Der historische Hauptraum mit freigelegtem Fachwerk, Backsteinbogen und großer Fensterfront zum Garten. Geeignet für Geburtstage, Empfänge und Firmenessen.",
    image: "/photos/raum-fachwerkstube.jpg",
    imageAlt: "Fachwerkstube mit gedeckter langer Tafel, grünen Stühlen, Backsteinbogen und großer Fensterfront",
  },
  {
    nr: "02",
    name: "Kaminraum",
    capacity: "bis 80 Personen",
    body: "Größter Raum mit offenem Kamin, alter Kupfertheke, schweren Holzbalken und historischem Inventar. Klassisch für Hochzeiten, Konfirmationen und größere Familienfeste.",
    image: "/photos/raum-kaminraum.jpg",
    imageAlt: "Kaminraum mit Holzbalken, Kupfertheke und gedeckten Tischen",
  },
  {
    nr: "03",
    name: "Beste Stube",
    capacity: "bis 24 Personen",
    body: "Intim, holzgetäfelt, mit langer Tafel, Pendelleuchten und Perserteppich. Für besondere Anlässe im kleinen Kreis - Geburtstage, Firmenrunden, private Dinner.",
    image: "/photos/raum-beste-stube.jpg",
    imageAlt: "Beste Stube mit langer gedeckter Tafel, Pendelleuchten und Holzbalken",
  },
];

const eventMenuCards = eventData.cards;

export default function RaeumePage() {
  return (
    <>
      <PageHero
        eyebrow="Räumlichkeiten"
        number="Kapitel 03"
        title={<>Drei Räume. <em className="font-display-italic text-accent">Ein Anlass nach dem anderen.</em></>}
        intro="Vom Familienessen bis zur großen Hochzeit. Unsere drei Räume tragen unterschiedliche Stimmungen - wählen Sie den, der zu Ihrem Tag passt."
        image="/photos/raum-kaminraum.jpg"
        imageAlt="Kaminraum mit langen Tafeln und Kupfertheke"
      />

      <section className="section-y">
        <div className="container-x space-y-24 md:space-y-32">
          {rooms.map((r, i) => (
            <Reveal key={r.name}>
              <div className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div className="relative aspect-[5/4] overflow-hidden bg-bg-3 vignette">
                  <Image
                    src={r.image}
                    alt={r.imageAlt}
                    fill
                    quality={92}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <span aria-hidden className="absolute top-5 left-5 eyebrow text-[0.62rem] text-bg/95 bg-text/55 backdrop-blur-md px-3 py-1.5 rounded-full">
                    {r.capacity}
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="index">- {r.nr}</span>
                    <SectionEyebrow accent>{r.capacity}</SectionEyebrow>
                  </div>
                  <h2 className="h-display">
                    {r.name}
                  </h2>
                  <p className="mt-6 body-lead max-w-xl">{r.body}</p>
                  <div className="mt-8 flex items-center gap-2 text-text-2 text-[13.5px] eyebrow text-[0.62rem]">
                    <Users size={13} strokeWidth={1.6} />
                    <span>{r.capacity}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* EVENT MENUS - als echte Menükarten-Bilder */}
      <section className="section-y bg-bg-2/40 border-y border-[color:var(--line)]">
        <div className="container-x">
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16 mb-12 md:mb-14">
            <Reveal>
              <SectionEyebrow accent>Menüvorschläge für Anlässe</SectionEyebrow>
              <h2 className="h-section mt-4">
                Unsere Karten - <em className="font-display-italic">individuell anpassbar.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="body-lead max-w-xl">
                Eine Auswahl als Orientierung - vom Drei-Gang-Menü bis zum großen Buffet.
                Jedes Menü sprechen wir mit Ihnen persönlich durch - saisonal angepasst,
                Vorspeisen, Gänge und Beilagen nach Ihren Wünschen.
              </p>
            </Reveal>
          </div>

          <StaggerGroup className="grid md:grid-cols-2 gap-6 md:gap-8">
            {eventMenuCards.map((m) => (
              <StaggerItem key={m.title}>
                <article className="group border border-[color:var(--line)] bg-bg overflow-hidden">
                  <div className="relative aspect-[3/4] overflow-hidden bg-bg-2">
                    <Image
                      src={m.image}
                      alt={m.alt}
                      fill
                      quality={92}
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="px-6 py-5 flex items-baseline justify-between gap-4 border-t border-[color:var(--line)]">
                    <h3 className="font-display text-text text-[1.4rem] tracking-[-0.015em]">{m.title}</h3>
                    <span className="text-text-2 text-[13.5px]">{m.note}</span>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <p className="mt-10 text-muted text-[13.5px] max-w-2xl">
            Alle Menüs vegetarisch oder mit weiteren Gängen erweiterbar. Getränke und
            Servicepauschale separat. Wir erstellen Ihnen gerne ein individuelles Angebot.
          </p>
        </div>
      </section>

      {/* INQUIRY CTA */}
      <section className="section-y">
        <div className="container-x text-center max-w-3xl mx-auto">
          <SectionEyebrow accent className="justify-center inline-flex">Anfrage</SectionEyebrow>
          <h2 className="h-display mt-5">
            Erzählen Sie uns <em className="font-display-italic text-accent">vom Anlass.</em>
          </h2>
          <p className="mt-6 body-lead">
            Datum, Personenzahl, Wünsche zur Karte und zum Ablauf - wir antworten
            persönlich. Telefonisch direkt, schriftlich bis zum nächsten Tag.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <CtaButton href="tel:+4925067462" external>02506 7462</CtaButton>
            <CtaButton href="/kontakt" variant="outline">Anfrageformular</CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}

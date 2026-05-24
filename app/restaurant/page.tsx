import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/page-hero";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { CtaButton } from "@/components/ui/cta-button";
import { ValueRow } from "@/components/ui/value-row";
import { BentoGallery } from "@/components/ui/bento-gallery";
import { DecorativeImage } from "@/components/ui/decorative-image";
import cardsData from "@/content/cards/speisekarte.json";

export const metadata: Metadata = {
  title: "Restaurant - Zeitgemäße Frischeküche",
  description:
    "In jahrhundertealten Räumen kochen wir saisonal mit regionalen Produkten, frischem Fisch und Wild aus eigener Jagd. Geführt von Carsten Hoffschulte, Küchenmeister in sechster Generation.",
};

const principles = [
  { n: "01", label: "Regional", title: "Was im Münsterland wächst, kommt zuerst.", body: "Wir kaufen bei Erzeugern, die wir kennen. Kurze Wege, volle Aromen, keine Geheimnisse." },
  { n: "02", label: "Saisonal", title: "Die Karte folgt dem Kalender.", body: "Spargel im Mai, Pfifferlinge im Juli, Wild im Herbst, Gänse zur Adventszeit." },
  { n: "03", label: "Selbst erlegt", title: "Wild aus eigener Jagd.", body: "Carsten Hoffschulte ist seit 1994 Jäger. Reh, Hirsch, Hase, Wildschwein - waidgerecht." },
  { n: "04", label: "Hausgemacht", title: "Wurst, Pasteten, Sülzen - Rezepte über Generationen.", body: "Westfälische Spezialitäten aus eigener Herstellung. So wie früher. So wie immer." },
];

const stations = [
  { src: "/photos/dish-lammkarree.jpg", alt: "Lammkarree mit Bohnen und Bratentomaten", caption: "Hauptgang" },
  { src: "/photos/dish-vorspeise.jpg", alt: "Salatteller auf Bratpfanne - Vorspeise im Service", caption: "Vorspeise" },
  { src: "/photos/dish-lachs.jpg", alt: "Lammrücken in Kruste mit Pfifferlingen und Gemüse", caption: "Aus der Karte" },
  { src: "/photos/dish-schokolade.jpg", alt: "Dessert - Schokoladenküchlein mit Karamell-Eis auf Schokoladen-Gitter", caption: "Dessert" },
  { src: "/photos/carsten-pfanne.jpg", alt: "Carsten Hoffschulte würzt am Herd" },
  { src: "/photos/raum-kaminraum.jpg", alt: "Blick in den Kaminraum", caption: "Im Haus" },
];

const cards = cardsData.cards;

export default function RestaurantPage() {
  return (
    <>
      <PageHero
        eyebrow="Restaurant"
        number="Kapitel 01"
        title={<>Frische in <em className="font-display-italic text-accent">alten Mauern.</em></>}
        intro="In unseren jahrhundertealten, hellen Räumlichkeiten bieten wir eine zeitgemäße, saisonale Küche mit frischen, vorwiegend regionalen Produkten. Frischer Fisch oder selbst erlegtes Wild gehören genauso dazu wie westfälische Spezialitäten aus eigener Herstellung."
        image="/photos/raum-kaminraum.jpg"
        imageAlt="Der Kaminraum mit Kupfertheke und historischem Inventar"
      />

      {/* INTERIOR IMAGE */}
      <section className="relative">
        <div className="relative w-full aspect-[16/8] md:aspect-[16/6] overflow-hidden">
          <Image
            src="/photos/raum-kaminraum.jpg"
            alt="Der Kaminraum mit Kupfertheke, Holzbalken und gedeckten Tafeln"
            fill
            quality={92}
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <p className="container-x mt-4 text-muted text-[13px]">
          Der Kaminraum mit Kupfertheke und historischem Inventar.
        </p>
      </section>

      {/* PRINCIPLES */}
      <section className="relative section-y overflow-hidden">
        <DecorativeImage src="/photos/dish-lachs.jpg" anchor="right" size="lg" drift={130} rotate={-5} />
        <div className="relative z-10 container-x">
          <div className="grid md:grid-cols-[1fr_1.6fr] gap-10 md:gap-16 mb-10 md:mb-14">
            <Reveal>
              <SectionEyebrow accent>Die Küche</SectionEyebrow>
              <h2 className="h-section mt-4">
                Vier Sätze, <em className="font-display-italic text-accent">die jeden Teller halten.</em>
              </h2>
            </Reveal>
          </div>

          <StaggerGroup className="border-t border-[color:var(--line)]">
            {principles.map((p) => (
              <StaggerItem key={p.n}>
                <ValueRow number={p.n} label={p.label} title={p.title} body={p.body} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* CARSTEN - mit echtem Portrait */}
      <section className="section-y bg-bg-2/40 border-y border-[color:var(--line)]">
        <div className="container-x grid md:grid-cols-[1fr_1.2fr] gap-10 md:gap-16 items-center">
          <Reveal className="relative aspect-[4/5] overflow-hidden bg-bg-3 vignette">
            <Image
              src="/photos/carsten-portrait.jpg"
              alt="Carsten Hoffschulte mit Kochmütze in seiner Küche, an einer Schüssel"
              fill
              quality={92}
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <SectionEyebrow accent>Der Wirt</SectionEyebrow>
            <h2 className="h-display mt-4">
              Carsten <em className="font-display-italic">Hoffschulte.</em>
            </h2>
            <p className="mt-3 text-text-2 text-[1rem] font-display-italic">
              Jäger · Koch · Küchenmeister · sechste Generation.
            </p>
            <p className="mt-6 body-lead max-w-lg">
              Geboren 1978 in Münster. Seit 1994 Jäger im eigenen Revier, seit 1998 Koch,
              seit 2008 Küchenmeister. Sein Stil: westfälisch verwurzelt, technisch sauber,
              ohne Effekthascherei.
            </p>

            <ul className="mt-8 space-y-0 max-w-md">
              {[
                ["1978", "Geboren in Münster."],
                ["1994", "Jagdschein. Das Revier wird Bestandteil der Küche."],
                ["1998", "Abschluss als Koch."],
                ["2008", "Küchenmeister-Prüfung."],
              ].map(([y, t]) => (
                <li key={y} className="grid grid-cols-[70px_1fr] gap-5 py-3.5 border-b border-[color:var(--line)]">
                  <span className="index text-[1rem]">{y}</span>
                  <span className="text-text text-[15px] leading-[1.55]">{t}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <CtaButton href="/ueber-uns" variant="ghost">Familie und Geschichte</CtaButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SPEISEKARTE - echte Karten als Bilder */}
      <section className="relative section-y overflow-hidden">
        <DecorativeImage src="/photos/dish-schokolade.jpg" anchor="left" size="md" drift={100} rotate={8} />
        <div className="relative z-10 container-x">
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16 mb-12 md:mb-14">
            <Reveal>
              <SectionEyebrow accent>Aktuelle Karte</SectionEyebrow>
              <h2 className="h-section mt-4">
                Unsere Karte - <em className="font-display-italic">saisonal angepasst.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="body-lead max-w-xl">
                Die aktuelle Karte unseres Hauses. Wir passen sie laufend an die Saison
                und an das, was unsere Erzeuger heute liefern. Mit Allergien oder
                besonderen Wünschen bitte kurz vorher anrufen - <a href="tel:+4925067462" className="text-accent hover:text-accent-deep">02506 7462</a>.
              </p>
            </Reveal>
          </div>

          <StaggerGroup className="grid md:grid-cols-3 gap-5 md:gap-7">
            {cards.map((c) => (
              <StaggerItem key={c.title}>
                <article className="border border-[color:var(--line)] bg-bg overflow-hidden">
                  <div className="relative aspect-[3/4] overflow-hidden bg-bg-2">
                    <Image
                      src={c.image}
                      alt={c.alt}
                      fill
                      quality={92}
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-contain"
                    />
                  </div>
                  <div className="px-5 py-4 border-t border-[color:var(--line)]">
                    <h3 className="font-display text-text text-[1.2rem] tracking-[-0.015em]">{c.title}</h3>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <div className="mt-10">
            <CtaButton href="/kontakt" variant="outline">Persönliche Anfrage</CtaButton>
          </div>
        </div>
      </section>

      {/* DISH GRID - Bento mit ECHTEN Bildern */}
      <section className="section-y bg-bg-2/40 border-t border-[color:var(--line)]">
        <div className="container-x">
          <SectionEyebrow accent>Aus der Küche</SectionEyebrow>
          <h2 className="h-section mt-4 mb-12 max-w-3xl">
            Was wir <em className="font-display-italic text-accent">aufgetragen</em> haben.
          </h2>
          <BentoGallery items={stations} />
        </div>
      </section>
    </>
  );
}

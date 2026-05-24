import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { MenuItem } from "@/components/ui/menu-item";
import { PullQuote } from "@/components/ui/pull-quote";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { CtaButton } from "@/components/ui/cta-button";
import data from "@/content/menus/wild.json";

export const metadata: Metadata = {
  title: "Wild - Aus eigener Jagd, mehr als bio",
  description:
    "Gesundes Wild aus der freien Wildbahn - waidgerecht erlegt, hygienisch versorgt, professionell zerlegt. Rehbraten, Wildschwein, Hirsch und mehr.",
};

const principles = [
  { n: "01", text: "Waidgerecht erlegt." },
  { n: "02", text: "Hygienisch versorgt." },
  { n: "03", text: "Professionell zerlegt." },
  { n: "04", text: "Frisch zubereitet." },
  { n: "05", text: "Portioniert und vakuumverpackt." },
];

const wildMenu = data.wild;
const sides = data.sides;

export default function WildPage() {
  return (
    <>
      <PageHero
        eyebrow="Wild · aus eigener Jagd"
        number="Kapitel 05"
        title={<>Aus dem Wald in die <em className="font-display-italic text-accent">Pfanne.</em></>}
        intro="Wildfleisch ist gesund, regional und mager. Aus der freien Wildbahn - frei von Medikamenten, garantiert ohne künstliche Konservierungsmittel. Mehr als bio."
        image="/photos/dish-6.jpg"
        imageAlt="Wildterrine mit Brioche aus der Hoffschulte-Wildküche"
      />

      {/* JÄGERSPRUCH */}
      <section className="py-20 md:py-32">
        <div className="container-x grid md:grid-cols-[1.4fr_1fr] gap-10 md:gap-16">
          <Reveal>
            <SectionEyebrow accent>Des Jägers Ehrenschild</SectionEyebrow>
            <p className="mt-7 font-display-italic text-text text-[clamp(1.9rem,4vw,2.8rem)] leading-[1.15] max-w-2xl">
              „Es ist des Jägers Ehrenschild,<br />
              das er beschützt und hegt sein Wild,<br />
              waidmännisch jagt wie sich's gehört,<br />
              den Schöpfer im Geschöpfe ehrt."
            </p>
            <footer className="mt-6 label text-[0.62rem]">- Jägerspruch · Tradition</footer>
          </Reveal>

          <Reveal delay={0.1} className="md:pl-12 md:border-l md:border-[color:var(--line-strong)]">
            <p className="text-text-2 text-[16px] md:text-[16.5px] leading-[1.7] max-w-md">
              Carsten Hoffschulte ist seit 1994 Jäger. Wildfleisch wird im Rahmen
              der Jagd aus der unberührten Natur gewonnen und in unserer Küche
              direkt verarbeitet. Leichter verdaulich, mager, cholesterinarm.
            </p>
            <p className="mt-6 text-text-2 text-[16px] leading-[1.7] max-w-md">
              Wir nennen das nicht „bio". Wir nennen es{" "}
              <em className="not-italic text-accent font-medium">mehr als bio</em>.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FIVE PRINCIPLES */}
      <section className="bg-bg-2/30 border-y border-[color:var(--line)] py-20 md:py-28">
        <div className="container-x">
          <SectionEyebrow accent>Fünf Standards</SectionEyebrow>
          <StaggerGroup className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-[color:var(--line)] border border-[color:var(--line)]">
            {principles.map((p) => (
              <StaggerItem key={p.n} className="bg-bg p-7 md:p-9 hover:bg-bg-2/60 transition-colors">
                <span className="index">{p.n}</span>
                <p className="font-display-italic text-text text-[1.45rem] leading-[1.15] mt-3">{p.text}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* MENU */}
      <section className="py-20 md:py-32">
        <div className="container-x">
          <SectionEyebrow accent>Aktuelles Wild-Angebot</SectionEyebrow>
          <h2 className="font-display text-text text-[clamp(2rem,4.6vw,3.4rem)] mt-5 leading-[1.05] tracking-[-0.03em] max-w-3xl">
            Eine Packung. Eine Beilage. <em className="font-display-italic text-accent">Ein Abend zu zweit.</em>
          </h2>
          <p className="mt-6 text-text-2 text-[16px] max-w-2xl leading-relaxed">
            Alle Wildgerichte sind gegart und schockgefrostet. Eine schonende
            Tiefkühltechnik ohne künstliche Konservierungsmittel.
          </p>

          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 md:gap-14 mt-14">
            <div>
              <h3 className="font-display-italic text-text text-[1.6rem] mb-4">Wild</h3>
              <div>{wildMenu.map((m) => <MenuItem key={m.name} {...m} />)}</div>
            </div>
            <div>
              <h3 className="font-display-italic text-text text-[1.6rem] mb-4">Beilagen</h3>
              <div>{sides.map((s) => <MenuItem key={s.name} {...s} />)}</div>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-[1fr_1fr] gap-10 items-end">
            <PullQuote size="lg">
              Wir bieten nur Gerichte an, die ohne Qualitätsverlust leicht und unkompliziert wieder zu erhitzen sind.
            </PullQuote>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <CtaButton href="https://wa.me/4915140333499" external>WhatsApp · 0151 40333499</CtaButton>
              <CtaButton href="tel:+4925067462" variant="outline" external>02506 7462</CtaButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

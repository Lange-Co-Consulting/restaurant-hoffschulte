import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { MenuItem } from "@/components/ui/menu-item";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { CtaButton } from "@/components/ui/cta-button";
import { site } from "@/lib/site";
import data from "@/content/menus/ausser-haus.json";

export const metadata: Metadata = {
  title: "Außer-Haus - Frisch zubereitet, vakuumiert, abholbereit",
  description:
    "Frisch zubereitet, in Zwei-Personen-Portionen vakuumiert, gekühlt oder gefrostet. Abholung samstags zwischen 15 und 18 Uhr.",
};

const { soups, mains, sides } = data;

const steps = [
  { nr: "01", title: "Bestellen", body: "Telefon, WhatsApp oder per E-Mail. Mit Wunsch-Abholzeit am Samstag." },
  { nr: "02", title: "Vorbereiten", body: "Wir kochen frisch, vakuumieren für zwei Personen, schocken auf Wunsch." },
  { nr: "03", title: "Abholen", body: "Samstags zwischen 15 und 18 Uhr - oder nach Absprache." },
  { nr: "04", title: "Aufwärmen", body: "Im Topf, Wasserbad oder Ofen. Anleitung liegt bei jeder Bestellung bei." },
];

export default function AusserHausPage() {
  return (
    <>
      <PageHero
        eyebrow="Außer-Haus"
        number="Kapitel 04"
        title={<>Frisch zubereitet, <em className="font-display-italic text-accent-deep">zu Hause genossen.</em></>}
        intro="Wir kochen frisch, vakuumieren in Zwei-Personen-Portionen und schocken auf Wunsch. Eine schonende Technik zur Konservierung, ohne künstliche Zusätze."
        image="/photos/dish-lachs.jpg"
        imageAlt="Hoffschulte-Gericht — Lammrücken in Kruste auf Pfifferlingen"
      />

      <section className="section-y">
        <div className="container-x">
          <SectionEyebrow accent>So funktioniert es</SectionEyebrow>
          <h2 className="h-section mt-4 max-w-3xl">
            Vier Schritte, <em className="font-display-italic text-accent-deep">vom Anruf bis zum Esstisch.</em>
          </h2>
          <StaggerGroup className="mt-12 grid md:grid-cols-4 gap-px bg-[color:var(--line)] border border-[color:var(--line)]">
            {steps.map((s) => (
              <StaggerItem key={s.nr} className="bg-bg p-7 md:p-9 hover:bg-bg-2/60 transition-colors">
                <span className="index">{s.nr}</span>
                <h3 className="h-card text-[1.5rem] mt-3 mb-3">{s.title}</h3>
                <p className="body-base">{s.body}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* MENU */}
      <section className="section-y bg-bg-2/40 border-y border-[color:var(--line)]">
        <div className="container-x">
          <SectionEyebrow accent>Karte zum Mitnehmen</SectionEyebrow>
          <h2 className="h-section mt-4 max-w-3xl">
            Klassiker aus unserer Küche, <em className="font-display-italic text-accent-deep">für zwei.</em>
          </h2>

          <div className="grid lg:grid-cols-[1fr_1.4fr_1fr] gap-10 md:gap-14 mt-12">
            <div>
              <h3 className="font-display-italic text-text text-[1.5rem] mb-2">Suppen</h3>
              <div>{soups.map((s) => <MenuItem key={s.name} {...s} />)}</div>
            </div>
            <div>
              <h3 className="font-display-italic text-text text-[1.5rem] mb-2">Hauptgerichte</h3>
              <div>{mains.map((m) => <MenuItem key={m.name} {...m} />)}</div>
            </div>
            <div>
              <h3 className="font-display-italic text-text text-[1.5rem] mb-2">Beilagen</h3>
              <div>{sides.map((s) => <MenuItem key={s.name} {...s} />)}</div>
            </div>
          </div>

          <p className="mt-12 text-muted text-[13.5px] max-w-2xl leading-relaxed">
            Saisonale Ergänzungen, Wild aus eigener Jagd und Vorbestell-Sonderwünsche
            (Gans, Ente, Festmenüs) auf Anfrage. Alle Preise pro Packung für zwei Portionen.
          </p>
        </div>
      </section>

      {/* ORDER */}
      <section className="section-y">
        <div className="container-x grid md:grid-cols-[1.2fr_1fr] gap-12 md:gap-16">
          <Reveal>
            <SectionEyebrow accent>Bestellen</SectionEyebrow>
            <h2 className="h-section mt-4">
              Drei Wege <em className="font-display-italic text-accent-deep">zu uns.</em>
            </h2>
            <ul className="mt-10 space-y-0.5 text-[15.5px]">
              <li className="py-5 border-b border-[color:var(--line)] flex items-baseline justify-between gap-6">
                <div>
                  <span className="eyebrow text-[0.62rem] block mb-1">Telefon</span>
                  <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="font-display-italic text-text text-[1.55rem]">
                    {site.phoneDisplay}
                  </a>
                </div>
                <span className="text-muted text-[12.5px]">Do – So, ganztägig</span>
              </li>
              <li className="py-5 border-b border-[color:var(--line)] flex items-baseline justify-between gap-6">
                <div>
                  <span className="eyebrow text-[0.62rem] block mb-1">WhatsApp</span>
                  <a
                    href={`https://wa.me/${site.whatsapp.replace(/[^0-9]/g, "")}`}
                    target="_blank" rel="noopener"
                    className="font-display-italic text-text text-[1.55rem]"
                  >
                    {site.whatsappDisplay}
                  </a>
                </div>
                <span className="text-muted text-[12.5px]">Nicht telefonisch</span>
              </li>
              <li className="py-5 flex items-baseline justify-between gap-6 flex-wrap">
                <div>
                  <span className="eyebrow text-[0.62rem] block mb-1">E-Mail</span>
                  <a href={`mailto:${site.email}`} className="font-display-italic text-text text-[1.3rem] md:text-[1.45rem] break-all">
                    {site.email}
                  </a>
                </div>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="md:pl-12 md:border-l md:border-[color:var(--line-strong)]">
            <SectionEyebrow>Abholung</SectionEyebrow>
            <p className="mt-4 font-display-italic text-text text-[1.9rem] md:text-[2.15rem] leading-[1.12]">
              Samstags zwischen 15 und 18 Uhr, oder nach Absprache.
            </p>
            <p className="mt-6 body-base">
              Eine Aufwärmanleitung legen wir jeder Bestellung bei. Wer länger im
              Voraus plant, kann auch Festmenüs für Weihnachten, Silvester oder
              Familienfeiern bei uns bestellen.
            </p>
            <div className="mt-8">
              <CtaButton href="tel:+4925067462" external>Jetzt bestellen</CtaButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

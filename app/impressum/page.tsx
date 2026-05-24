import type { Metadata } from "next";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Angaben gemäß § 5 TMG.",
  robots: { index: false },
};

export default function ImpressumPage() {
  return (
    <section className="pt-32 md:pt-44 pb-28 md:pb-36">
      <div className="container-narrow">
        <SectionEyebrow accent>Impressum</SectionEyebrow>
        <h1 className="font-display text-text text-[clamp(2.6rem,5.4vw,4rem)] mt-5 leading-[1.02] tracking-[-0.03em]">
          Angaben gemäß <em className="font-display-italic">§ 5 TMG.</em>
        </h1>

        <div className="mt-14 text-text-2 text-[15.5px] leading-[1.75] space-y-9">
          <Block heading="Betreiber">
            Restaurant Hoffschulte<br />
            Inhaber: Carsten Hoffschulte<br />
            {site.address.street}<br />
            {site.address.postal} {site.address.city}
          </Block>

          <Block heading="Kontakt">
            Telefon: <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="text-text hover:text-accent-deep">{site.phoneDisplay}</a><br />
            WhatsApp: {site.whatsappDisplay} (nicht telefonisch)<br />
            E-Mail: <a href={`mailto:${site.email}`} className="text-text hover:text-accent-deep break-all">{site.email}</a>
          </Block>

          <Block heading="Umsatzsteuer">
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: auf Anfrage.
          </Block>

          <Block heading="Verantwortlich nach § 55 Abs. 2 RStV">
            Carsten Hoffschulte<br />
            {site.address.street}, {site.address.postal} {site.address.city}
          </Block>

          <Block heading="Haftung für Inhalte">
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte
            auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
            Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen
            zu überwachen oder nach Umständen zu forschen, die auf eine
            rechtswidrige Tätigkeit hinweisen.
          </Block>

          <Block heading="Urheberrecht">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht.
          </Block>

          <Block heading="Bildnachweise">
            Eigene Aufnahmen, Familie Hoffschulte. Historische Bilder aus dem
            Archiv des Hauses.
          </Block>

          <Block heading="EU-Streitschlichtung">
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener" className="text-text hover:text-accent-deep">
              ec.europa.eu/consumers/odr
            </a>
            . Wir sind weder bereit noch verpflichtet, an einem
            Streitbeilegungsverfahren teilzunehmen.
          </Block>
        </div>
      </div>
    </section>
  );
}

function Block({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="label text-[0.65rem] text-text mb-3">{heading}</h2>
      <p>{children}</p>
    </div>
  );
}

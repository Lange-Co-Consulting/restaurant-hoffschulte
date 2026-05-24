import type { Metadata } from "next";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.",
  robots: { index: false },
};

export default function DatenschutzPage() {
  return (
    <section className="pt-32 md:pt-44 pb-28 md:pb-36">
      <div className="container-narrow">
        <SectionEyebrow accent>Datenschutz</SectionEyebrow>
        <h1 className="font-display text-text text-[clamp(2.6rem,5.4vw,4rem)] mt-5 leading-[1.02] tracking-[-0.03em]">
          So gehen wir mit <em className="font-display-italic">Ihren Daten</em> um.
        </h1>

        <div className="mt-14 text-text-2 text-[15.5px] leading-[1.75] space-y-9">
          <Block heading="1. Verantwortlicher">
            Verantwortlich für die Verarbeitung Ihrer personenbezogenen Daten
            ist Carsten Hoffschulte, {site.address.street}, {site.address.postal} {site.address.city}.
            Kontakt: <a href={`mailto:${site.email}`} className="text-text hover:text-accent break-all">{site.email}</a>.
          </Block>
          <Block heading="2. Erhebung und Speicherung">
            Wir erheben personenbezogene Daten ausschließlich dann, wenn Sie
            uns diese selbst mitteilen - etwa über das Kontakt- oder
            Anfrageformular. Verarbeitet werden Name, Kontaktdaten und die
            Inhalte Ihrer Anfrage.
          </Block>
          <Block heading="3. Zweck und Rechtsgrundlage">
            Die Verarbeitung dient der Beantwortung Ihrer Anfrage, der
            Vorbereitung einer Reservierung oder eines Auftrags.
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. b und f DSGVO.
          </Block>
          <Block heading="4. Server-Logfiles">
            Beim Besuch dieser Website werden technisch notwendige Daten
            (IP-Adresse, Datum, Uhrzeit, aufgerufene Seite) durch unseren
            Hoster verarbeitet. Eine Auswertung erfolgt anonymisiert.
          </Block>
          <Block heading="5. Karten">
            Auf dieser Website nutzen wir Karten von Google Maps. Beim Aufruf
            der entsprechenden Seiten werden Daten an Google übertragen.{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener" className="text-text hover:text-accent">
              policies.google.com/privacy
            </a>
          </Block>
          <Block heading="6. Ihre Rechte">
            Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung
            und Einschränkung der Verarbeitung sowie auf Datenübertragbarkeit.
            Es besteht ein Beschwerderecht bei der zuständigen Aufsichtsbehörde.
          </Block>
          <Block heading="7. Cookies">
            Diese Website verwendet keine Cookies zu Tracking- oder
            Marketingzwecken. Eingebundene Karten- oder Social-Media-Dienste
            können eigene Cookies setzen.
          </Block>
          <Block heading="8. Aktualität">
            Diese Datenschutzerklärung kann bei technischen oder gesetzlichen
            Änderungen angepasst werden. Sie finden hier jeweils die aktuelle Fassung.
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

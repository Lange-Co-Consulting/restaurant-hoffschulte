import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { ContactForm } from "@/components/site/contact-form";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt & Anfahrt",
  description:
    "Restaurant Hoffschulte · Alter Postweg 53 · 48167 Münster. Telefonisch unter 02506 7462. Anfahrt, Karte und Anfrageformular.",
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        number="Kapitel 07"
        title={<>Schreiben, anrufen, <em className="font-display-italic text-accent">vorbeikommen.</em></>}
        intro="Telefonisch erreichen Sie uns Donnerstag bis Sonntag. Schriftliche Anfragen beantworten wir spätestens am nächsten Werktag. Für Reservierungen empfehlen wir den direkten Anruf."
        image="/photos/restaurant-classic-2.jpg"
        imageAlt="Innenraum mit Kamin und gedeckten Tischen"
      />

      <section className="section-y">
        <div className="container-x grid lg:grid-cols-[1fr_1.2fr] gap-10 md:gap-16">
          <div>
            <SectionEyebrow accent>Direkt</SectionEyebrow>
            <h2 className="h-section mt-4">
              Restaurant <em className="font-display-italic">Hoffschulte.</em>
            </h2>

            <dl className="mt-12 space-y-7 text-[15.5px]">
              <div className="grid grid-cols-[24px_1fr] gap-5 items-start">
                <dt className="pt-1.5 text-text-2"><MapPin size={16} strokeWidth={1.6} /></dt>
                <dd className="text-text leading-relaxed">
                  {site.address.street}<br />
                  {site.address.postal} {site.address.city}
                </dd>
              </div>
              <div className="grid grid-cols-[24px_1fr] gap-5 items-start">
                <dt className="pt-1.5 text-text-2"><Phone size={16} strokeWidth={1.6} /></dt>
                <dd>
                  <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="font-display-italic text-text text-[1.55rem]">
                    {site.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div className="grid grid-cols-[24px_1fr] gap-5 items-start">
                <dt className="pt-1.5 text-text-2"><MessageCircle size={16} strokeWidth={1.6} /></dt>
                <dd>
                  <a
                    href={`https://wa.me/${site.whatsapp.replace(/[^0-9]/g, "")}`}
                    target="_blank" rel="noopener"
                    className="text-text hover:text-accent"
                  >
                    WhatsApp · {site.whatsappDisplay}
                  </a>
                  <p className="text-muted text-[12.5px] mt-1">Nicht telefonisch.</p>
                </dd>
              </div>
              <div className="grid grid-cols-[24px_1fr] gap-5 items-start">
                <dt className="pt-1.5 text-text-2"><Mail size={16} strokeWidth={1.6} /></dt>
                <dd>
                  <a href={`mailto:${site.email}`} className="text-text hover:text-accent break-all">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div className="grid grid-cols-[24px_1fr] gap-5 items-start">
                <dt className="pt-1.5 text-text-2"><Clock size={16} strokeWidth={1.6} /></dt>
                <dd className="text-text leading-relaxed">
                  Fr & Sa · <span className="font-display-italic text-accent">{site.hours.fridaySaturday}</span><br />
                  So & Feiertag · <span className="font-display-italic text-accent">{site.hours.sundayHoliday}</span><br />
                  <span className="text-muted text-[12.5px]">{site.hours.note}</span>
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:pl-12 lg:border-l lg:border-[color:var(--line-strong)]">
            <SectionEyebrow>Anfrage senden</SectionEyebrow>
            <h2 className="h-section mt-4 mb-8">
              Wir antworten <em className="font-display-italic text-accent">persönlich.</em>
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="border-t border-[color:var(--line)]">
        <div className="relative h-[60vh] min-h-[420px] w-full">
          <iframe
            title="Karte - Restaurant Hoffschulte"
            src={site.mapsEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full grayscale invert-[0.85] contrast-95 opacity-90"
          />
        </div>
      </section>
    </>
  );
}

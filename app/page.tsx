import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Phone, ArrowDown } from "lucide-react";
import { CtaButton } from "@/components/ui/cta-button";
import { Reveal, StaggerGroup, StaggerItem, HeadlineReveal } from "@/components/ui/reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { Marquee } from "@/components/ui/marquee";
import { ValueRow } from "@/components/ui/value-row";
import { ReviewCard } from "@/components/ui/review-card";
import { DecorativeImage } from "@/components/ui/decorative-image";
import { site } from "@/lib/site";
import reviewsData from "@/content/reviews.json";

const principles = [
  {
    n: "01",
    label: "Regional",
    title: "Was im Münsterland wächst, kommt zuerst auf den Teller.",
    body: "Wir kaufen bei Erzeugern, die wir kennen. Wege bleiben kurz, Aromen voll.",
  },
  {
    n: "02",
    label: "Saisonal",
    title: "Die Karte folgt dem Kalender, nicht der Mode.",
    body: "Spargel im Mai, Pfifferlinge im Juli, Wild im Herbst, Gänse zur Adventszeit.",
  },
  {
    n: "03",
    label: "Selbst erlegt",
    title: "Wild aus eigener Jagd - vom Revier in die Pfanne.",
    body: "Carsten Hoffschulte ist seit 1994 Jäger. Reh, Hirsch, Hase, Wildschwein - waidgerecht.",
  },
  {
    n: "04",
    label: "Hausgemacht",
    title: "Wurst, Sülzen, Pasteten - Rezepte über Generationen.",
    body: "Westfälische Spezialitäten entstehen in unserer Küche. So wie früher, so wie immer.",
  },
];

const places = [
  {
    eyebrow: "Restaurant",
    title: "Im Haus",
    body: "Frische, saisonale Küche in jahrhundertealten Räumen. Frischer Fisch, eigenes Wild, westfälische Spezialitäten aus eigener Herstellung.",
    href: "/restaurant",
    cta: "Zur Küche",
    image: "/photos/raum-kaminraum.jpg",
    imageAlt: "Der Kaminraum mit Kupfertheke, Holzbalken und gedeckten Tafeln",
  },
  {
    eyebrow: "Biergarten",
    title: "Im Freien",
    body: "Unter neunzig Jahre alten Platanen, vom Frühling bis spät in den Herbst. Reservierungen werden bei gutem Wetter automatisch nach draußen vergeben.",
    href: "/biergarten",
    cta: "Zum Biergarten",
    image: "/photos/biergarten-classic-1.jpg",
    imageAlt: "Biergarten unter alten Platanen mit gedeckten Tischen",
  },
  {
    eyebrow: "Räumlichkeiten",
    title: "Für Anlässe",
    body: "Fachwerkstube für bis zu 50, Kaminraum für bis zu 80, Beste Stube für 24. Drei Räume, drei Stimmungen.",
    href: "/raeumlichkeiten",
    cta: "Zu den Räumen",
    image: "/photos/raum-fachwerkstube.jpg",
    imageAlt: "Fachwerkstube mit gedeckter Tafel, grünen Stühlen und großer Fensterfront",
  },
];

const reviews = reviewsData.reviews;

export default function HomePage() {
  return (
    <>
      {/* ─────────────── HERO ─────────────── */}
      <section className="relative min-h-[100dvh] flex flex-col overflow-hidden">
        <div aria-hidden className="absolute inset-0">
          <Image
            src="/photos/biergarten-classic-2.jpg"
            alt=""
            fill
            priority
            quality={92}
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Stärkerer Bottom-Fade — alles unter Mitte sichtbar abgedunkelt zur surface */}
          <div className="absolute inset-x-0 bottom-0 h-[82%] bg-gradient-to-b from-transparent via-bg/78 to-bg" />
          {/* Links-Fade — Text-Spalte sitzt auf nahezu solidem Hintergrund */}
          <div className="absolute inset-y-0 left-0 w-[62%] bg-gradient-to-r from-bg/88 via-bg/55 to-transparent" />
        </div>

        <div className="relative flex-1 flex flex-col justify-end pt-28 md:pt-32 pb-12 md:pb-16">
          <div className="container-x">
            <Reveal>
              <div className="flex items-center gap-3 mb-7 md:mb-10 flex-wrap">
                <span className="eyebrow inline-flex items-center gap-3 text-text font-bold">
                  <span aria-hidden className="h-px w-7 bg-accent-deep" />
                  Münster · Alter Postweg 53
                </span>
                <span className="font-display-italic text-accent-deep text-[0.95rem] font-medium">seit sechs Generationen</span>
              </div>
            </Reveal>

            <h1 className="font-display text-text leading-[0.96] tracking-[-0.035em] text-[clamp(2.6rem,9vw,8rem)] max-w-[14ch]">
              <span className="block overflow-hidden pb-[0.04em]">
                <HeadlineReveal delay={0.05}><span className="block">Restaurant.</span></HeadlineReveal>
              </span>
              <span className="block overflow-hidden pb-[0.04em]">
                <HeadlineReveal delay={0.18}><span className="block font-display-italic text-accent-deep">Biergarten.</span></HeadlineReveal>
              </span>
              <span className="block overflow-hidden pb-[0.04em]">
                <HeadlineReveal delay={0.32}><span className="block">Hoffschulte.</span></HeadlineReveal>
              </span>
            </h1>

            <div className="mt-10 md:mt-14 grid md:grid-cols-[1.3fr_auto] gap-8 md:gap-12 items-end">
              <Reveal delay={0.65}>
                <p className="text-text text-[16px] md:text-[18px] leading-[1.65] max-w-xl font-medium">
                  Westfälisches Landgasthaus am Rand von Münster. Frische, saisonale Küche
                  in jahrhundertealten Räumen. Draußen warten neunzig Jahre alte Platanen.
                </p>
              </Reveal>

              <Reveal delay={0.8}>
                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:items-center">
                  <CtaButton href={`tel:${site.phone.replace(/\s/g, "")}`} external>
                    Tisch reservieren
                  </CtaButton>
                  <CtaButton href="/restaurant" variant="outline">
                    Die Küche
                  </CtaButton>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        <div
          aria-hidden
          className="absolute bottom-6 right-6 md:right-10 hidden md:flex flex-col items-center gap-3"
        >
          <span className="eyebrow text-[0.6rem] text-text-2">Scrollen</span>
          <ArrowDown size={14} strokeWidth={1.5} className="text-accent-deep animate-bounce" />
        </div>
      </section>

      {/* ─────────────── TICKER ─────────────── */}
      <Marquee className="border-y border-[color:var(--line)] py-5 bg-bg-2/60">
        <TickerLine />
        <TickerLine />
      </Marquee>

      {/* ─────────────── EINFÜHRUNG ─────────────── */}
      <section className="relative section-y overflow-hidden">
        <DecorativeImage src="/photos/dish-lammkarree.jpg" anchor="right" size="lg" drift={140} rotate={-8} />
        <div className="relative z-10 container-x grid md:grid-cols-[1fr_1.5fr] gap-10 md:gap-16 items-start">
          <Reveal>
            <SectionEyebrow accent>Willkommen</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="font-display text-text text-[clamp(1.7rem,3.4vw,2.5rem)] leading-[1.2] tracking-[-0.022em] max-w-[28ch]">
              Eine Hofstelle am Alten Postweg, gegründet von{" "}
              <em className="font-display-italic">Josef Hoffschulte</em>. Heute in
              sechster Generation geführt von{" "}
              <em className="font-display-italic text-accent-deep">Carsten Hoffschulte</em>.
              Frische Küche, eigene Jagd, eigene Wurst.
            </p>
            <div className="mt-8">
              <CtaButton href="/ueber-uns" variant="ghost">Unsere Geschichte</CtaButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────────── DREI BEREICHE (Zigzag) ─────────────── */}
      <section className="section-y border-t border-[color:var(--line)] bg-bg-2/40">
        <div className="container-x">
          <div className="grid md:grid-cols-[1fr_1.5fr] gap-10 md:gap-16 items-end mb-12 md:mb-16">
            <Reveal>
              <SectionEyebrow accent>Drei Bereiche</SectionEyebrow>
              <h2 className="h-section mt-4">
                Ein Haus. <em className="font-display-italic text-accent-deep">Drei Stimmungen.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="body-lead max-w-xl">
                Im Restaurant am gedeckten Tisch. Im Biergarten unter den Platanen.
                Oder im Saal für eine Feier mit der ganzen Familie.
              </p>
            </Reveal>
          </div>

          <div className="space-y-20 md:space-y-28">
            {places.map((p, i) => (
              <Reveal key={p.title}>
                <div className={`grid md:grid-cols-2 gap-8 md:gap-14 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <div className="relative aspect-[5/4] overflow-hidden bg-bg-3">
                    <Image
                      src={p.image}
                      alt={p.imageAlt}
                      fill
                      quality={88}
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-[1400ms] ease-out hover:scale-[1.03]"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <span className="index text-[1rem]">{String(i + 1).padStart(2, "0")}</span>
                      <SectionEyebrow accent>{p.eyebrow}</SectionEyebrow>
                    </div>
                    <h3 className="h-display text-[clamp(2rem,4vw,2.8rem)]">
                      {p.title}
                    </h3>
                    <p className="mt-6 body-lead max-w-xl">{p.body}</p>
                    <div className="mt-8">
                      <CtaButton href={p.href} variant="outline">{p.cta}</CtaButton>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── KÜCHEN-PRINZIPIEN ─────────────── */}
      <section className="relative section-y overflow-hidden">
        <DecorativeImage src="/photos/dish-schokolade.jpg" anchor="left" size="md" drift={100} rotate={6} />
        <div className="relative z-10 container-x">
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16 mb-12 md:mb-14">
            <Reveal>
              <SectionEyebrow accent>Die Küche</SectionEyebrow>
              <h2 className="h-section mt-4">
                Vier Sätze, <em className="font-display-italic text-accent-deep">die jeden Teller halten.</em>
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

      {/* ─────────────── CHRONIK - historisches Bild ─────────────── */}
      <section className="bg-bg-2/40 border-y border-[color:var(--line)]">
        <div className="container-x section-y grid md:grid-cols-[1fr_1.6fr] gap-10 md:gap-16 items-center">
          <Reveal>
            <SectionEyebrow accent>Die Chronik</SectionEyebrow>
            <h2 className="h-section mt-4">
              Die Hofstelle <em className="font-display-italic text-accent-deep">am Alten Postweg.</em>
            </h2>
            <p className="mt-6 body-lead max-w-md">
              Gegründet von Josef Hoffschulte, dem Ur-Urgroßvater des heutigen Wirts.
              Über sechs Generationen weitergegeben, durch zwei Weltkriege, durch
              Modernisierungen - immer in Familienhand.
            </p>
            <div className="mt-8">
              <CtaButton href="/ueber-uns" variant="ghost">Mehr zur Familie</CtaButton>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="relative aspect-[5/3] md:aspect-[16/10] overflow-hidden">
            <Image
              src="/photos/gebaeude-historic.jpg"
              alt="Historische Aufnahme der Hofstelle Hoffschulte am Alten Postweg"
              fill
              quality={92}
              sizes="(min-width: 768px) 60vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* ─────────────── BEWERTUNGEN ─────────────── */}
      <section className="relative section-y overflow-hidden">
        <DecorativeImage src="/photos/dish-vorspeise.jpg" anchor="right" size="md" drift={110} rotate={4} shape="circle" />
        <div className="relative z-10 container-x">
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16 mb-12 md:mb-14 items-end">
            <Reveal>
              <SectionEyebrow accent>Was unsere Gäste sagen</SectionEyebrow>
              <h2 className="h-section mt-4">
                Vierkommasechs von fünf. <em className="font-display-italic text-accent-deep">Über 200 Bewertungen.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="body-lead max-w-lg">
                Auf Google, Tripadvisor und in unseren Gästebüchern.
                Eine kleine Auswahl - das volle Bild auf den jeweiligen Plattformen.
              </p>
            </Reveal>
          </div>

          <StaggerGroup className="grid md:grid-cols-3 gap-5 md:gap-6">
            {reviews.map((r, i) => (
              <StaggerItem key={i}>
                <ReviewCard {...r} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ─────────────── BESUCHEN ─────────────── */}
      <section className="section-y bg-bg-2/40 border-t border-[color:var(--line)]">
        <div className="container-x grid md:grid-cols-[1fr_1.3fr] gap-10 md:gap-14">
          <div>
            <SectionEyebrow accent>Besuchen</SectionEyebrow>
            <h2 className="h-section mt-4">
              Alter Postweg 53, <em className="font-display-italic text-accent-deep">am Rand der Stadt.</em>
            </h2>

            <dl className="mt-10 space-y-7 text-[15.5px]">
              <div>
                <dt className="eyebrow text-[0.66rem] mb-2 flex items-center gap-2">
                  <Clock size={12} strokeWidth={1.7} /> Öffnungszeiten
                </dt>
                <dd className="text-text leading-[1.75]">
                  Freitag & Samstag<br />
                  <span className="font-display-italic text-accent-deep text-[1.15rem]">{site.hours.fridaySaturday}</span>
                  <br />
                  Sonntag & Feiertag<br />
                  <span className="font-display-italic text-accent-deep text-[1.15rem]">{site.hours.sundayHoliday}</span>
                  <br />
                  <span className="text-muted text-[13px]">{site.hours.note}</span>
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-[0.66rem] mb-2 flex items-center gap-2">
                  <MapPin size={12} strokeWidth={1.7} /> Adresse
                </dt>
                <dd className="text-text">
                  {site.address.street}<br />
                  {site.address.postal} {site.address.city}
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-[0.66rem] mb-2 flex items-center gap-2">
                  <Phone size={12} strokeWidth={1.7} /> Reservieren
                </dt>
                <dd>
                  <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="font-display-italic text-text text-[1.7rem]">
                    {site.phoneDisplay}
                  </a>
                </dd>
              </div>
            </dl>

            <div className="mt-10 flex flex-wrap gap-3">
              <CtaButton href={site.mapsLink} external>Route planen</CtaButton>
              <CtaButton href="/kontakt" variant="outline">Anfrage senden</CtaButton>
            </div>
          </div>

          <Reveal className="relative aspect-[5/4] md:aspect-auto md:min-h-[480px] overflow-hidden border border-[color:var(--line-strong)]">
            <iframe
              title="Karte - Restaurant Hoffschulte"
              src={site.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full grayscale-[40%] contrast-105"
            />
          </Reveal>
        </div>
      </section>

      <RestaurantJsonLd />
    </>
  );
}

function TickerLine() {
  return (
    <div className="flex items-center gap-10 text-text-2 px-5 whitespace-nowrap">
      <span className="font-display-italic text-[1.5rem] md:text-[1.85rem]">Münsterland</span>
      <span className="text-accent-deep text-lg">✦</span>
      <span className="font-display-italic text-[1.5rem] md:text-[1.85rem]">Wild aus eigener Jagd</span>
      <span className="text-accent-deep text-lg">✦</span>
      <span className="font-display-italic text-[1.5rem] md:text-[1.85rem]">Frischeküche</span>
      <span className="text-accent-deep text-lg">✦</span>
      <span className="font-display-italic text-[1.5rem] md:text-[1.85rem]">Sechs Generationen</span>
      <span className="text-accent-deep text-lg">✦</span>
      <span className="font-display-italic text-[1.5rem] md:text-[1.85rem]">Biergarten unter Platanen</span>
      <span className="text-accent-deep text-lg">✦</span>
    </div>
  );
}

function RestaurantJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: site.name,
    image: `${site.url}/photos/restaurant-classic-2.jpg`,
    description: site.description,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    priceRange: "€€",
    servesCuisine: ["Westfälisch", "Regional", "Wild"],
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postal,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.latitude, longitude: site.geo.longitude },
    aggregateRating: { "@type": "AggregateRating", ratingValue: 4.6, reviewCount: 218 },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday", "Saturday"], opens: "17:00", closes: "22:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday"], opens: "12:00", closes: "14:30" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday"], opens: "17:00", closes: "21:30" },
    ],
    sameAs: [site.social.instagram, site.social.facebook],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

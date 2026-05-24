import Link from "next/link";
import { Marquee } from "@/components/ui/marquee";
import { navLinks, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-[color:var(--line)] bg-bg-2/60 overflow-hidden">
      {/* Riesiges Wortmarken-Watermark */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 pointer-events-none select-none translate-y-[14%]"
      >
        <p className="font-display-italic text-text/[0.04] text-[clamp(5rem,22vw,18rem)] leading-none text-center whitespace-nowrap">
          Hoffschulte
        </p>
      </div>

      <Marquee className="border-y border-[color:var(--line)] py-4 bg-bg/70">
        <FooterTickerContent />
        <FooterTickerContent />
      </Marquee>

      <div className="relative container-x py-16 md:py-24 grid gap-12 md:gap-x-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <p className="font-display-italic text-[2.25rem] md:text-[2.5rem] text-text leading-none">
            Hoffschulte
          </p>
          <p className="mt-3 eyebrow text-[0.65rem] eyebrow-accent">
            Sechs Generationen · Münster
          </p>
          <p className="mt-5 max-w-sm body-base">
            Westfälisches Landgasthaus seit sechs Generationen.
            Frische Küche, Biergarten unter neunzig Jahre alten Platanen,
            Räume für jeden Anlass, Wild aus eigener Jagd.
          </p>
        </div>

        <div>
          <p className="eyebrow text-[0.65rem] mb-4">Besuchen</p>
          <p className="text-[14.5px] text-text leading-relaxed">
            {site.address.street}
            <br />
            {site.address.postal} {site.address.city}
          </p>
          <p className="mt-6 eyebrow text-[0.65rem] mb-2.5">Geöffnet</p>
          <p className="text-[13.5px] text-text-2 leading-[1.7]">
            Fr & Sa · <span className="text-text">{site.hours.fridaySaturday}</span>
            <br />
            So & Feiertag
            <br />
            <span className="text-text">{site.hours.sundayHoliday}</span>
          </p>
        </div>

        <div>
          <p className="eyebrow text-[0.65rem] mb-4">Kontakt</p>
          <ul className="space-y-2.5 text-[14px]">
            <li>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="text-text hover:text-accent-deep transition-colors"
              >
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${site.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener"
                className="text-text-2 hover:text-accent-deep transition-colors"
              >
                WhatsApp · {site.whatsappDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="text-text-2 hover:text-accent-deep break-all transition-colors"
              >
                {site.email}
              </a>
            </li>
            <li className="pt-3 flex gap-5">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener"
                className="eyebrow text-[0.6rem] text-text-2 hover:text-accent-deep transition-colors"
              >
                Instagram ↗
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener"
                className="eyebrow text-[0.6rem] text-text-2 hover:text-accent-deep transition-colors"
              >
                Facebook ↗
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-[0.65rem] mb-4">Navigation</p>
          <ul className="space-y-2 text-[14px]">
            {navLinks.map((link, i) => (
              <li key={link.href} className="flex items-baseline gap-3">
                <span className="index opacity-50 text-[0.75rem]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Link
                  href={link.href}
                  className="text-text-2 hover:text-accent-deep transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative border-t border-[color:var(--line)]">
        <div className="container-x flex flex-col md:flex-row md:items-center md:justify-between gap-3 py-5 eyebrow text-[0.6rem]">
          <p>© {new Date().getFullYear()} Familie Hoffschulte · Alle Rechte vorbehalten</p>
          <div className="flex gap-5">
            <Link href="/impressum" className="hover:text-accent-deep transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-accent-deep transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterTickerContent() {
  return (
    <div className="flex items-center gap-10 text-text-2 font-display-italic text-[1.4rem] md:text-[1.7rem] px-5 whitespace-nowrap">
      <span>Münsterland</span>
      <span className="text-accent-deep">✦</span>
      <span>Wild aus eigener Jagd</span>
      <span className="text-accent-deep">✦</span>
      <span>Frischeküche</span>
      <span className="text-accent-deep">✦</span>
      <span>Sechs Generationen</span>
      <span className="text-accent-deep">✦</span>
      <span>Biergarten unter Platanen</span>
      <span className="text-accent-deep">✦</span>
    </div>
  );
}

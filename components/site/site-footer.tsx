import Link from "next/link";
import { Marquee } from "@/components/ui/marquee";
import { navLinks, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-[color:var(--line)] bg-bg-2/60 overflow-hidden">
      <div aria-hidden className="absolute inset-x-0 bottom-0 pointer-events-none select-none translate-y-[12%]">
        <p className="font-display-italic text-text/[0.05] text-[clamp(6rem,24vw,20rem)] leading-none text-center whitespace-nowrap">
          Hoffschulte
        </p>
      </div>

      <Marquee className="border-y border-[color:var(--line)] py-3.5 bg-bg/60">
        <FooterTickerContent />
        <FooterTickerContent />
      </Marquee>

      <div className="relative container-x py-16 md:py-24 grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <p className="font-display-italic text-[2.2rem] md:text-[2.4rem] text-text leading-none">Hoffschulte</p>
          <p className="mt-3 label text-[0.62rem]">
            Sechs Generationen · Alter Postweg · Münster
          </p>
          <p className="mt-5 max-w-sm text-text-2 text-[14px] leading-[1.65]">
            Westfälisches Landgasthaus seit sechs Generationen.
            Frische Küche, Biergarten unter neunzig Jahre alten Platanen,
            Räume für jeden Anlass, Wild aus eigener Jagd.
          </p>
        </div>

        <div>
          <p className="label text-[0.62rem] mb-4">Besuchen</p>
          <p className="text-[14.5px] text-text leading-relaxed">
            {site.address.street}<br />
            {site.address.postal} {site.address.city}
          </p>
          <p className="mt-5 label text-[0.62rem] mb-2.5">Geöffnet</p>
          <p className="text-[13.5px] text-text-2 leading-[1.7]">
            Fr & Sa · <span className="text-text">{site.hours.fridaySaturday}</span><br />
            So &amp; Feiertag<br />
            <span className="text-text">{site.hours.sundayHoliday}</span>
          </p>
        </div>

        <div>
          <p className="label text-[0.62rem] mb-4">Kontakt</p>
          <ul className="space-y-2.5 text-[14px]">
            <li>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="text-text hover:text-accent">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`https://wa.me/${site.whatsapp.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener" className="text-text-2 hover:text-accent">
                WhatsApp · {site.whatsappDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="text-text-2 hover:text-accent break-all">
                {site.email}
              </a>
            </li>
            <li className="pt-3 flex gap-4">
              <a href={site.social.instagram} target="_blank" rel="noopener" className="label text-[0.58rem] text-text-2 hover:text-accent">Instagram ↗</a>
              <a href={site.social.facebook} target="_blank" rel="noopener" className="label text-[0.58rem] text-text-2 hover:text-accent">Facebook ↗</a>
            </li>
          </ul>
        </div>

        <div>
          <p className="label text-[0.62rem] mb-4">Index</p>
          <ul className="space-y-2 text-[14px]">
            {navLinks.map((link, i) => (
              <li key={link.href} className="flex items-baseline gap-3">
                <span className="index opacity-40 text-[0.72rem]">{String(i + 1).padStart(2, "0")}</span>
                <Link href={link.href} className="text-text-2 hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative border-t border-[color:var(--line)]">
        <div className="container-x flex flex-col md:flex-row md:items-center md:justify-between gap-3 py-5 label text-[0.58rem]">
          <p>© {new Date().getFullYear()} Familie Hoffschulte · Alle Rechte vorbehalten</p>
          <div className="flex gap-5">
            <Link href="/impressum" className="hover:text-accent">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-accent">Datenschutz</Link>
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
      <span className="text-accent">✦</span>
      <span>Wild aus eigener Jagd</span>
      <span className="text-accent">✦</span>
      <span>Frischeküche</span>
      <span className="text-accent">✦</span>
      <span>Sechs Generationen</span>
      <span className="text-accent">✦</span>
      <span>Biergarten unter Platanen</span>
      <span className="text-accent">✦</span>
    </div>
  );
}

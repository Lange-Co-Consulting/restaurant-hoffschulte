"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/lib/site";
import { cn } from "@/lib/cn";
import { usePathname } from "next/navigation";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        // Immer ein subtiler Background + Blur, damit Text auf Hero-Bild lesbar ist
        scrolled
          ? "bg-[color:var(--bg)]/92 backdrop-blur-xl backdrop-saturate-150 border-b border-[color:var(--line)]"
          : "bg-[color:var(--bg)]/72 backdrop-blur-md border-b border-transparent",
      )}
    >
      <div className="container-x flex items-center justify-between h-[68px] md:h-[80px]">
        <Link href="/" className="flex items-center group" aria-label="Startseite Restaurant Hoffschulte">
          <span className="font-display-italic text-[1.5rem] md:text-[1.7rem] leading-none text-text">
            Hoffschulte
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7" aria-label="Hauptnavigation">
          {navLinks.map((link, i) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "group/nav relative flex items-center gap-2 label text-[0.7rem] transition-colors py-1",
                  active ? "text-text" : "text-text hover:text-accent",
                )}
              >
                <span className="opacity-50 group-hover/nav:opacity-80 transition-opacity">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{link.label}</span>
                {active && (
                  <span aria-hidden className="absolute -bottom-1 left-0 right-0 h-px bg-accent" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-text/70 text-text hover:bg-text hover:text-bg transition-all duration-300 label text-[0.65rem]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden />
            <span>{site.phoneDisplay}</span>
          </a>
          <button
            type="button"
            aria-label="Menü öffnen"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-text/70 text-text hover:bg-text hover:text-bg transition-colors"
          >
            <Menu size={18} strokeWidth={1.6} />
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        aria-hidden={!open}
        className={cn(
          "fixed inset-0 z-[60] lg:hidden transition-opacity duration-500",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
      >
        <div className="absolute inset-0 bg-text/30 backdrop-blur-sm" onClick={() => setOpen(false)} aria-hidden />
        <aside
          className={cn(
            "absolute right-0 top-0 h-full w-[min(420px,94vw)] bg-bg border-l border-[color:var(--line)] flex flex-col transition-transform duration-[650ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]",
            open ? "translate-x-0" : "translate-x-full",
          )}
          role="dialog" aria-modal="true" aria-label="Mobile Navigation"
        >
          <div className="flex items-center justify-between h-[72px] px-6 border-b border-[color:var(--line)]">
            <span className="font-display-italic text-[1.35rem] text-text">Hoffschulte</span>
            <button
              type="button" aria-label="Menü schließen"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-text/70 text-text"
            >
              <X size={18} strokeWidth={1.6} />
            </button>
          </div>
          <nav className="flex-1 px-6 py-10 flex flex-col" aria-label="Mobile Hauptnavigation">
            {navLinks.map((link, i) => (
              <Link
                key={link.href} href={link.href}
                className={cn(
                  "font-display text-[2.2rem] leading-[1.05] py-2.5 border-b border-[color:var(--line)] flex items-baseline justify-between transition-colors",
                  pathname === link.href ? "text-accent" : "text-text hover:text-accent",
                )}
              >
                <span>{link.label}</span>
                <span className="index text-[0.75rem] opacity-50">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </Link>
            ))}
          </nav>
          <div className="px-6 py-7 border-t border-[color:var(--line)] flex flex-col gap-2">
            <p className="label text-[0.6rem]">Reservieren</p>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="font-display-italic text-text text-[1.5rem]">
              {site.phoneDisplay}
            </a>
            <a href={`mailto:${site.email}`} className="text-text-2 hover:text-accent text-[13px] break-all">
              {site.email}
            </a>
          </div>
        </aside>
      </div>
    </header>
  );
}

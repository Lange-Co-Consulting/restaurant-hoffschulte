"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError(null);

    const fd = new FormData(e.currentTarget);
    const honeypot = fd.get("website")?.toString().trim();
    if (honeypot) { setStatus("sent"); return; }

    const name = fd.get("name")?.toString().trim();
    const email = fd.get("email")?.toString().trim();
    const phone = fd.get("phone")?.toString().trim();
    const occasion = fd.get("occasion")?.toString().trim();
    const date = fd.get("date")?.toString().trim();
    const guests = fd.get("guests")?.toString().trim();
    const message = fd.get("message")?.toString().trim();

    if (!name || !email || !message) {
      setStatus("error");
      setError("Bitte füllen Sie Name, E-Mail und Nachricht aus.");
      return;
    }

    const subject = `Anfrage von ${name}${occasion ? ` · ${occasion}` : ""}`;
    const body = [
      `Name: ${name}`,
      `E-Mail: ${email}`,
      phone && `Telefon: ${phone}`,
      occasion && `Anlass: ${occasion}`,
      date && `Wunschdatum: ${date}`,
      guests && `Personen: ${guests}`,
      "",
      "Nachricht:",
      message,
    ].filter(Boolean).join("\n");

    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setTimeout(() => setStatus("sent"), 500);
  }

  if (status === "sent") {
    return (
      <div className="border border-accent/40 bg-bg-2/60 p-8 rounded-sm">
        <CheckCircle2 size={20} strokeWidth={1.5} className="text-accent" />
        <p className="mt-3 font-display-italic text-text text-[1.6rem] leading-[1.1]">Vielen Dank.</p>
        <p className="mt-3 text-text-2 text-[15px] leading-relaxed">
          Wir haben Ihre E-Mail-App geöffnet. Sobald die Nachricht versendet ist,
          melden wir uns innerhalb eines Werktages persönlich zurück.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="hidden" aria-hidden>
        <label>Website<input type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Name" name="name" required />
        <Field label="E-Mail" name="email" type="email" required />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Telefon (optional)" name="phone" type="tel" />
        <Field label="Anlass" name="occasion" placeholder="z. B. Familienfeier" />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Wunschdatum" name="date" type="date" />
        <Field label="Personen" name="guests" type="number" min={1} max={120} />
      </div>
      <Field label="Nachricht" name="message" textarea required rows={5} />

      {error && (
        <p className="text-[13.5px] text-accent border-l border-accent pl-3">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="group inline-flex items-center gap-3 bg-text text-bg pl-5 pr-2 py-2 rounded-full label text-[0.7rem] transition-all duration-300 hover:bg-accent disabled:opacity-60"
      >
        <span>{status === "sending" ? "Wird gesendet …" : "Anfrage senden"}</span>
        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-bg text-text group-hover:text-accent transition-colors">
          <ArrowUpRight size={13} strokeWidth={1.8} className="transition-transform group-hover:translate-x-[1px] group-hover:-translate-y-[1px]" />
        </span>
      </button>

      <p className="text-muted text-[12px] max-w-md leading-relaxed">
        Mit dem Absenden wird Ihre Standard-E-Mail-App geöffnet.
        Wir antworten direkt aus unserer Küche.
      </p>
    </form>
  );
}

function Field({
  label, name, type = "text", required, textarea, rows = 4, placeholder, min, max,
}: {
  label: string; name: string; type?: string; required?: boolean;
  textarea?: boolean; rows?: number; placeholder?: string; min?: number; max?: number;
}) {
  const base =
    "w-full bg-transparent border-b border-[color:var(--line-strong)] focus:border-accent transition-colors py-3 text-text text-[15px] placeholder:text-muted outline-none";

  return (
    <label className="block">
      <span className="label text-[0.6rem] mb-2 block">
        {label}
        {required && <span className="text-accent ml-1">*</span>}
      </span>
      {textarea ? (
        <textarea name={name} required={required} rows={rows} placeholder={placeholder} className={`${base} resize-none`} />
      ) : (
        <input
          name={name} type={type} required={required}
          placeholder={placeholder} min={min} max={max} className={base}
        />
      )}
    </label>
  );
}

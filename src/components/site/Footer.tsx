import { Instagram, MapPin, Youtube } from "lucide-react";

import { CHURCH, NAV, SERVICES } from "@/lib/church";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gold/15 bg-navy">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-20 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-6 font-display text-2xl leading-snug text-foreground">{CHURCH.name}</p>
            <p className="mt-4 flex gap-3 text-sm leading-relaxed text-muted-foreground">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
              <span>
                {CHURCH.address}
                <br />
                CEP: {CHURCH.cep}
              </span>
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={CHURCH.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Igreja Deus das Nações"
                className="grid size-10 place-items-center rounded-full border border-foreground/15 text-foreground/80 transition-colors hover:border-gold hover:text-gold"
              >
                <Instagram className="size-4" />
              </a>
              <a
                href={CHURCH.youtube.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube da Igreja Deus das Nações"
                className="grid size-10 place-items-center rounded-full border border-foreground/15 text-foreground/80 transition-colors hover:border-gold hover:text-gold"
              >
                <Youtube className="size-4" />
              </a>
            </div>
          </div>

          <nav aria-label="Links do rodapé" className="lg:col-span-3 lg:col-start-6">
            <p className="eyebrow">Navegação</p>
            <ul className="mt-6 space-y-3">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-gold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <p className="eyebrow">Horários</p>
            <ul className="mt-6 divide-y divide-foreground/10">
              {SERVICES.map((s) => (
                <li key={s.day} className="flex items-baseline justify-between gap-4 py-3 text-sm">
                  <span className="text-foreground">
                    {s.day}
                    <span className="block text-xs text-muted-foreground">
                      {s.name}
                      {s.online ? " · online" : ""}
                    </span>
                  </span>
                  <span className="font-display text-xl text-gold">{s.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-foreground/10 pt-10 text-center">
          <p className="font-display text-lg uppercase tracking-[0.15em] text-gold-gradient sm:text-xl">
            Igreja Deus das Nações — Vivendo a presença, compartilhando a fé.
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            © {year} {CHURCH.name} ({CHURCH.short}). Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

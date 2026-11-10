import { MapPin, Navigation } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CHURCH } from "@/lib/church";
import { Reveal } from "./Reveal";

export function Location() {
  return (
    <section id="localizacao" aria-labelledby="local-title" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-12 lg:items-center">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow">Localização</p>
          <h2
            id="local-title"
            className="mt-5 font-display text-5xl font-semibold uppercase leading-none sm:text-6xl"
          >
            Esperamos <span className="italic text-gold-gradient">por você!</span>
          </h2>

          <address className="mt-10 flex gap-4 not-italic">
            <MapPin className="mt-1 size-5 shrink-0 text-gold" aria-hidden="true" />
            <span className="text-lg leading-relaxed text-foreground">
              {CHURCH.address}
              <br />
              <span className="text-muted-foreground">CEP: {CHURCH.cep}</span>
            </span>
          </address>

          <p className="mt-8 font-display text-2xl italic text-foreground/90">
            Será uma alegria receber você e sua família!
          </p>

          <Button asChild variant="gold" size="xl" className="mt-10">
            <a href={CHURCH.mapsUrl} target="_blank" rel="noopener noreferrer">
              <Navigation aria-hidden="true" /> Como chegar
            </a>
          </Button>
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-7">
          <div className="relative">
            <div
              className="absolute -inset-3 rounded-sm border border-gold/25"
              aria-hidden="true"
            />
            <iframe
              title="Mapa da Igreja Deus das Nações em Sobradinho II, Brasília – DF"
              src={CHURCH.mapsEmbed}
              className="relative aspect-[4/3] w-full rounded-sm border-0 grayscale-[35%] sm:aspect-[16/10]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

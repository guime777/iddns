import { Instagram } from "lucide-react";

import ministracao from "@/assets/photos/ministracao.jpg.asset.json";
import pao from "@/assets/photos/pao.jpg.asset.json";
import pregacao from "@/assets/photos/pregacao.jpg.asset.json";
import calice from "@/assets/photos/santa-ceia-calice.jpg.asset.json";
import { CHURCH } from "@/lib/church";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

const PHOTOS = [
  { src: pregacao.url, alt: "Pastor pregando no púlpito com a Bíblia aberta" },
  { src: calice.url, alt: "Pastor erguendo o cálice durante a Santa Ceia" },
  { src: ministracao.url, alt: "Ministro de braços abertos em oração no altar" },
  { src: pao.url, alt: "Pão e uvas preparados para a Santa Ceia" },
];

export function Gallery() {
  return (
    <section aria-labelledby="gallery-title" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Momentos</p>
            <h2
              id="gallery-title"
              className="mt-5 font-display text-4xl font-semibold uppercase leading-none sm:text-5xl lg:text-6xl"
            >
              Vivendo a fé <span className="italic text-gold-gradient">juntos.</span>
            </h2>
          </div>
          <a
            href={CHURCH.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-gold"
          >
            <Instagram className="size-4" aria-hidden="true" />
            Mais fotos em {CHURCH.instagram.handle}
          </a>
        </Reveal>

        <ul className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {PHOTOS.map((p, i) => (
            <li key={p.src} className={cn(i % 2 === 1 && "lg:mt-12")}>
              <Reveal delay={i * 0.1}>
                <img
                  src={p.src}
                  alt={p.alt}
                  width={1080}
                  height={1350}
                  loading="lazy"
                  className="aspect-[4/5] w-full rounded-sm object-cover shadow-card"
                />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import { ArrowUpRight, Instagram, Youtube } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CHURCH } from "@/lib/church";
import { Reveal } from "./Reveal";

const CHANNELS = [
  {
    platform: "Instagram",
    Icon: Instagram,
    title: CHURCH.instagram.handle,
    meta: CHURCH.instagram.followers,
    cta: "Seguir no Instagram",
    url: CHURCH.instagram.url,
  },
  {
    platform: "YouTube",
    Icon: Youtube,
    title: CHURCH.youtube.name,
    meta: "Cultos, mensagens e IDDNSFLIX",
    cta: "Inscrever-se no canal",
    url: CHURCH.youtube.url,
  },
];

export function Social() {
  return (
    <section aria-labelledby="social-title" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">Redes sociais</p>
            <h2
              id="social-title"
              className="mt-5 font-display text-4xl font-semibold uppercase leading-none sm:text-5xl lg:text-6xl"
            >
              Fique conectado <span className="italic text-gold-gradient">com a gente.</span>
            </h2>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
            {CHANNELS.map(({ platform, Icon, title, meta, cta, url }, i) => (
              <Reveal key={platform} delay={i * 0.12}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-foreground/10 bg-card p-8 transition-colors duration-500 hover:border-gold/50">
                  <ArrowUpRight
                    className="absolute right-6 top-6 size-5 text-foreground/30 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold"
                    aria-hidden="true"
                  />
                  <span className="grid size-14 place-items-center rounded-full border border-gold/40 text-gold">
                    <Icon className="size-6" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <p className="mt-8 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                    {platform}
                  </p>
                  <h3 className="mt-3 font-display text-3xl font-semibold leading-tight">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{meta}</p>
                  <Button asChild variant="goldOutline" size="xl" className="mt-10 w-full">
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      {cta}
                    </a>
                  </Button>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

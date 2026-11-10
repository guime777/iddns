import { Play, Youtube } from "lucide-react";

import flixPhoto from "@/assets/photos/palco-transmissao.jpg.asset.json";
import { Button } from "@/components/ui/button";
import { CHURCH } from "@/lib/church";
import { Reveal } from "./Reveal";

export function Flix() {
  return (
    <section
      id="iddnsflix"
      aria-labelledby="flix-title"
      className="relative isolate flex min-h-[80vh] items-center overflow-hidden py-24"
    >
      <img
        src={flixPhoto.url}
        alt="Pregador no palco da IDDNS com a câmera de transmissão ao vivo à direita"
        width={1280}
        height={720}
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-right"
      />
      <div className="absolute inset-0 -z-10 bg-flix-overlay" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <div className="max-w-xl">
          <Reveal>
            <p className="flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-foreground/70">
              <span className="inline-flex items-center gap-1.5 rounded-sm bg-gold px-2 py-1 text-primary-foreground">
                <span className="size-1.5 rounded-full bg-primary-foreground" />
                Toda segunda · 22h
              </span>
              Programação digital
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              id="flix-title"
              className="mt-6 font-sans text-6xl font-extrabold uppercase leading-none tracking-tight text-gold-gradient sm:text-7xl lg:text-8xl"
            >
              IDDNSFLIX
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 font-display text-2xl italic text-foreground sm:text-3xl">
              Uma experiência de fé, palavra e edificação.
            </p>
            <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
              Conteúdos que fortalecem sua caminhada com Deus e levam a mensagem do Evangelho para
              além das paredes da igreja.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="mt-10 flex flex-wrap items-center gap-5">
            <Button asChild variant="gold" size="xl">
              <a href={CHURCH.youtube.url} target="_blank" rel="noopener noreferrer">
                <Play className="fill-current" aria-hidden="true" />
                Acessar nosso YouTube
              </a>
            </Button>
            <span className="flex items-center gap-2 text-xs text-foreground/60">
              <Youtube className="size-4" aria-hidden="true" />
              @IddnsOficial
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { Expand } from "lucide-react";

import consagracao from "@/assets/flyers/consagracao-sabado.jpg.asset.json";
import flix from "@/assets/flyers/iddnsflix-estudo.jpg.asset.json";
import instituto from "@/assets/flyers/instituto-das-nacoes.jpg.asset.json";
import oferte from "@/assets/flyers/oferte-ao-senhor.jpg.asset.json";
import santaCeia from "@/assets/flyers/santa-ceia.jpg.asset.json";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Reveal } from "./Reveal";

type Poster = { src: string; title: string; alt: string; w: number; h: number };

const POSTERS: Poster[] = [
  {
    src: consagracao.url,
    title: "Consagração · Sábados, 9h às 10h",
    alt: "Cartaz da Consagração: tempo de renovo e entrega, todos os sábados das 9h às 10h, para toda a igreja e convidados",
    w: 1024,
    h: 1536,
  },
  {
    src: flix.url,
    title: "IDDNSFLIX · Estudo da Palavra",
    alt: "Cartaz do IDDNSFLIX: estudo da Palavra, momentos de oração, louvor e palavra, presencial e ao vivo",
    w: 1080,
    h: 1350,
  },
  {
    src: santaCeia.url,
    title: "Domingo de Santa Ceia",
    alt: "Cartaz do culto de Santa Ceia no domingo às 19h30 com Pr Wanderson e Pr Daniel",
    w: 1600,
    h: 900,
  },
  {
    src: instituto.url,
    title: "Instituto das Nações · Projeto Cesta Verde",
    alt: "Cartaz do projeto social Cesta Verde do Instituto das Nações: toda quinta-feira, mais de 400 famílias contempladas",
    w: 899,
    h: 1600,
  },
  {
    src: oferte.url,
    title: "Oferte ao Senhor",
    alt: "Cartaz 'Nosso coração já mora aqui' com QR Code e chave PIX para ofertas; aceitamos cartão de crédito e débito",
    w: 1600,
    h: 900,
  },
];

export function Agenda() {
  const [open, setOpen] = useState<Poster | null>(null);

  return (
    <section aria-labelledby="agenda-title" className="overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Agenda</p>
            <h2
              id="agenda-title"
              className="mt-5 font-display text-4xl font-semibold uppercase leading-none sm:text-5xl lg:text-6xl"
            >
              Acontece na <span className="italic text-gold-gradient">IDDNS.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Programações especiais, projetos e convites. Toque em um cartaz para ver em tamanho
            maior.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <ul className="mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-6 sm:px-8 xl:px-[max(2rem,calc((100vw-80rem)/2+2rem))]">
          {POSTERS.map((p) => (
            <li key={p.src} className="shrink-0 snap-start">
              <button
                type="button"
                onClick={() => setOpen(p)}
                className="group relative block overflow-hidden rounded-sm border border-foreground/10 transition-colors hover:border-gold/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label={`Ampliar cartaz: ${p.title}`}
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  width={p.w}
                  height={p.h}
                  loading="lazy"
                  className="h-80 w-auto object-cover transition-transform duration-700 group-hover:scale-[1.03] sm:h-[26rem]"
                />
                <span className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-ink via-ink/80 to-transparent px-4 pb-4 pt-10 text-left">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
                    {p.title}
                  </span>
                  <Expand className="size-4 shrink-0 text-gold" aria-hidden="true" />
                </span>
              </button>
            </li>
          ))}
        </ul>
      </Reveal>

      <Dialog open={!!open} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="max-w-[min(92vw,56rem)] border-gold/20 bg-ink p-3 sm:p-4">
          {open && (
            <>
              <DialogTitle className="pr-8 text-sm font-semibold uppercase tracking-[0.18em] text-gold">
                {open.title}
              </DialogTitle>
              <img
                src={open.src}
                alt={open.alt}
                width={open.w}
                height={open.h}
                className="max-h-[80vh] w-full rounded-sm object-contain"
              />
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

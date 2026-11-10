import comunhaoImg from "@/assets/comunhao.jpg";
import cultoImg from "@/assets/culto.jpg";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section
      id="nossa-igreja"
      aria-labelledby="about-title"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 sm:px-8 lg:grid-cols-12 lg:gap-12">
        {/* Composição de imagens */}
        <div className="relative lg:col-span-6">
          <Reveal className="relative ml-auto w-[78%]">
            <div className="absolute -left-6 -top-6 h-32 w-32 border-l border-t border-gold/60" />
            <img
              src={cultoImg}
              alt="Ministração de louvor durante o culto"
              width={1024}
              height={1280}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-sm object-cover shadow-card"
            />
          </Reveal>
          <Reveal delay={0.2} className="absolute -bottom-12 left-0 w-[55%]">
            <img
              src={comunhaoImg}
              alt="Membros da igreja em momento de comunhão e abraços após o culto"
              width={1280}
              height={960}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-sm border-4 border-background object-cover shadow-card"
            />
            <div className="absolute -bottom-5 -right-5 h-20 w-20 border-b border-r border-gold/60" />
          </Reveal>
        </div>

        {/* Texto */}
        <div className="mt-12 lg:col-span-5 lg:col-start-8 lg:mt-0">
          <Reveal>
            <p className="eyebrow">Nossa Igreja</p>
            <h2
              id="about-title"
              className="mt-5 font-display text-4xl font-semibold uppercase leading-[1.02] sm:text-5xl lg:text-6xl"
            >
              Mais que uma igreja, <span className="italic text-gold-gradient">uma família.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground sm:text-lg">
              A Igreja Deus das Nações é um lugar de adoração, busca pela presença de Deus, comunhão
              e transformação de vidas. Aqui, pessoas de diferentes histórias se encontram com um
              mesmo propósito: viver a fé e conhecer cada vez mais a presença do Senhor.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <figure className="mt-10 border-l-2 border-gold pl-6">
              <blockquote className="font-display text-2xl italic leading-snug text-foreground sm:text-3xl">
                “Lugar perfeito para pessoas imperfeitas.”
              </blockquote>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

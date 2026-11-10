import { motion, useReducedMotion } from "framer-motion";

import heroImg from "@/assets/hero-worship.jpg";
import { Button } from "@/components/ui/button";

export function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[90vh] items-center justify-center overflow-hidden"
    >
      <motion.img
        src={heroImg}
        alt="Pessoas adorando com as mãos levantadas durante um culto, sob luzes azuis e douradas"
        width={1920}
        height={1088}
        fetchPriority="high"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        initial={reduce ? false : { scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: "easeOut" }}
      />
      <div className="absolute inset-0 -z-10 bg-hero-overlay" />

      <div className="mx-auto max-w-5xl px-6 pb-16 pt-32 text-center">
        <motion.p className="eyebrow" {...fade(0.2)}>
          <span className="gold-rule mr-4 hidden align-middle sm:inline-block" />
          Igreja Deus das Nações
          <span className="gold-rule ml-4 hidden align-middle sm:inline-block" />
        </motion.p>

        <motion.h1
          id="hero-title"
          className="mt-8 text-balance font-display text-5xl font-semibold uppercase leading-[0.95] text-foreground sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          {...fade(0.4)}
        >
          Um lugar para encontrar a <span className="italic text-gold-gradient">presença</span> de
          Deus.
        </motion.h1>

        <motion.p
          className="mx-auto mt-8 max-w-2xl text-pretty text-base leading-relaxed text-foreground/80 sm:text-lg"
          {...fade(0.6)}
        >
          Uma igreja de fé, adoração e comunhão. Existe um lugar preparado para você e sua família.
        </motion.p>

        <motion.div
          className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row"
          {...fade(0.8)}
        >
          <Button asChild variant="gold" size="xl" className="w-full sm:w-auto">
            <a href="#nossa-igreja">Conheça nossa igreja</a>
          </Button>
          <Button asChild variant="glass" size="xl" className="w-full sm:w-auto">
            <a href="#cultos">Veja os horários dos cultos</a>
          </Button>
        </motion.div>
      </div>

      <a
        href="#nossa-igreja"
        aria-label="Rolar para a próxima seção"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:flex flex-col items-center gap-3 text-[0.6rem] font-semibold uppercase tracking-[0.35em] text-foreground/60 transition-colors hover:text-gold"
      >
        <span className="flex h-10 w-6 justify-center rounded-full border border-foreground/30 pt-2">
          <span className="block size-1.5 rounded-full bg-gold animate-scroll-dot" />
        </span>
        Role
      </a>
    </section>
  );
}

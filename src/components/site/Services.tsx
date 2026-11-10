import { Church, Clock, MonitorPlay } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/church";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section
      id="cultos"
      aria-labelledby="cultos-title"
      className="relative bg-navy-glow py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Cultos e programação</p>
          <h2
            id="cultos-title"
            className="mt-5 font-display text-4xl font-semibold uppercase leading-none sm:text-5xl lg:text-6xl"
          >
            Existe um lugar <span className="italic text-gold-gradient">para você.</span>
          </h2>
        </Reveal>

        <ul className="mt-16 grid gap-px overflow-hidden rounded-sm border border-gold/15 bg-gold/15 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => {
            const Icon = s.online ? MonitorPlay : Church;
            return (
              <li key={s.day} className="h-full">
                <Reveal delay={i * 0.1} className="h-full">
                <div
                  className={cn(
                    "group relative flex h-full flex-col p-8 transition-colors duration-500 sm:p-10",
                    s.online ? "bg-ink" : "bg-navy hover:bg-navy-soft",
                  )}
                >
                  <div className="flex items-center justify-between">
                    <Icon className="size-6 text-gold" strokeWidth={1.4} aria-hidden="true" />
                    <span
                      className={cn(
                        "rounded-full px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.25em]",
                        s.online
                          ? "bg-gold text-primary-foreground"
                          : "border border-foreground/20 text-foreground/70",
                      )}
                    >
                      {s.online ? "Online" : "Presencial"}
                    </span>
                  </div>
                  <p className="mt-12 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                    {s.day}
                  </p>
                  <h3 className="mt-3 font-display text-3xl font-semibold leading-tight text-foreground">
                    {s.name}
                  </h3>
                  <p className="mt-auto flex items-center gap-2 pt-10 font-display text-5xl font-medium text-foreground">
                    <Clock className="size-4 text-gold" aria-hidden="true" />
                    {s.time}
                  </p>
                  <span className="absolute bottom-0 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
                </div>
                </Reveal>
              </li>
            );
          })}
        </ul>

        <Reveal className="mt-14 flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-muted-foreground">
            Cultos presenciais em Sobradinho II · IDDNSFLIX ao vivo no nosso YouTube
          </p>
          <Button asChild variant="gold" size="xl">
            <a href="#localizacao">Quero participar de um culto</a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

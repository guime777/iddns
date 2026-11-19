import { useEffect, useRef, useState } from "react";
import { Check, Copy, CreditCard, ExternalLink, HeartHandshake } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CHURCH } from "@/lib/church";
import { copyText } from "@/lib/clipboard";
import { payPalDonateUrl } from "@/lib/paypal";
import { Reveal } from "./Reveal";

export function Contribute() {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const paypalUrl = payPalDonateUrl();

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  const handleCopy = async () => {
    const ok = await copyText(CHURCH.pix);
    setStatus(ok ? "copied" : "error");
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus("idle"), 2800);
  };

  return (
    <section
      id="contribua"
      aria-labelledby="contribua-title"
      className="relative overflow-hidden bg-navy py-24 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 size-[32rem] rounded-full border border-gold/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 size-[24rem] rounded-full border border-gold/10"
      />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 sm:px-8 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <HeartHandshake className="size-9 text-gold" strokeWidth={1.3} aria-hidden="true" />
          <p className="eyebrow mt-8">Contribua</p>
          <h2
            id="contribua-title"
            className="mt-5 font-display text-4xl font-semibold uppercase leading-none sm:text-5xl lg:text-6xl"
          >
            Seja um colaborador <span className="italic text-gold-gradient">dessa obra.</span>
          </h2>
          <p className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            Sua contribuição ajuda a manter e expandir esta obra, levando a Palavra de Deus a mais
            vidas.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="space-y-6">
            <div className="rounded-sm border border-gold/30 bg-ink/60 p-8 shadow-card backdrop-blur sm:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                PIX · CNPJ
              </p>
              <p className="mt-4 select-all break-all font-display text-4xl font-semibold tracking-wide text-foreground sm:text-5xl">
                {CHURCH.pix}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">{CHURCH.name}</p>
              <div className="my-8 h-px w-full bg-gold/20" />
              <Button
                type="button"
                variant="gold"
                size="xl"
                className="w-full"
                onClick={handleCopy}
                aria-describedby="pix-status"
              >
                {status === "copied" ? (
                  <>
                    <Check aria-hidden="true" /> Chave copiada!
                  </>
                ) : (
                  <>
                    <Copy aria-hidden="true" /> Copiar chave PIX
                  </>
                )}
              </Button>
              <p
                id="pix-status"
                role="status"
                aria-live="polite"
                className="mt-4 min-h-5 text-center text-sm"
              >
                {status === "copied" && (
                  <span className="text-gold-soft">
                    Chave PIX copiada para a área de transferência.
                  </span>
                )}
                {status === "error" && (
                  <span className="text-destructive">
                    Não foi possível copiar. Selecione a chave acima e copie manualmente.
                  </span>
                )}
              </p>
            </div>

            {paypalUrl && (
              <div className="rounded-sm border border-gold/20 bg-ink/40 p-7 backdrop-blur sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                  PayPal · Cartão internacional
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Você está em outro país? Doe pelo PayPal com cartão de crédito ou débito, na
                  moeda do seu cartão. O PIX acima só funciona para contas no Brasil.
                </p>
                <Button asChild variant="goldOutline" size="xl" className="mt-7 w-full">
                  <a href={paypalUrl} target="_blank" rel="noopener noreferrer">
                    <CreditCard aria-hidden="true" />
                    Doar com PayPal
                    <ExternalLink aria-hidden="true" className="size-3.5" />
                    <span className="sr-only"> (abre em uma nova aba)</span>
                  </a>
                </Button>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { cn } from "@/lib/utils";

/**
 * Espaço reservado para a logo oficial da Igreja Deus das Nações.
 * Para usar a logo oficial, substitua o monograma abaixo por <img src={logo} alt="Igreja Deus das Nações" />.
 */
export function Logo({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <span
        aria-hidden="true"
        className="relative grid size-10 place-items-center rounded-full border border-gold/70 font-display text-sm font-semibold tracking-wider text-gold"
      >
        <span className="absolute inset-1 rounded-full border border-gold/25" />
        ID
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-lg font-semibold tracking-wide text-foreground">
            Deus das Nações
          </span>
          <span className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.35em] text-gold">
            IDDNS · Igreja
          </span>
        </span>
      )}
    </span>
  );
}

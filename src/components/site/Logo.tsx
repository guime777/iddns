import logo from "@/assets/logo-iddns.png.asset.json";
import { cn } from "@/lib/utils";

/** Logo oficial da IDDNS. O fundo preto do arquivo some sobre fundos escuros (mix-blend-screen). */
export function Logo({ className }: { className?: string }) {
  return (
    <img
      src={logo.url}
      alt="IDDNS — Igreja Deus das Nações"
      width={132}
      height={50}
      className={cn("h-11 w-auto mix-blend-screen select-none", className)}
      draggable={false}
    />
  );
}

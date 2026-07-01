import { Sigil } from "./Sigil";
import type { SigilVariant } from "@/lib/types";

export function ProductVisual({
  sigil,
  accent,
  className,
}: {
  sigil: SigilVariant;
  accent: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-md bg-surface ${className ?? ""}`}
      style={{
        background: `radial-gradient(circle at 50% 30%, ${accent}22 0%, var(--color-abyss) 65%)`,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 8px)",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <Sigil
          variant={sigil}
          color={accent}
          className="h-1/2 w-1/2 opacity-80 drop-shadow-[0_0_18px_rgba(163,21,31,0.35)] transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 border border-white/5" />
    </div>
  );
}

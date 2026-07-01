import type { SigilVariant } from "@/lib/types";

const paths: Record<SigilVariant, string> = {
  aster:
    "M50 6 L58 38 L92 30 L64 50 L92 70 L58 62 L50 94 L42 62 L8 70 L36 50 L8 30 L42 38 Z",
  coil: "M50 8a34 34 0 1 1-24 58 22 22 0 1 0 15-37 12 12 0 1 0-8 20",
  throne:
    "M20 90 L20 40 L30 40 L30 20 L70 20 L70 40 L80 40 L80 90 M35 55 H65 M35 70 H65",
  veil: "M50 10 C20 30 20 70 50 92 C80 70 80 30 50 10 Z M50 30 V80",
  ember:
    "M50 8 C58 28 74 34 74 54 C74 72 62 86 50 92 C38 86 26 72 26 54 C26 34 42 28 50 8 Z",
  hollow: "M50 8 L86 30 L86 70 L50 92 L14 70 L14 30 Z M50 30 L68 42 L61 64 L39 64 L32 42 Z",
};

export function Sigil({
  variant,
  className,
  color = "currentColor",
}: {
  variant: SigilVariant;
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke={color}
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="50" cy="50" r="46" opacity={0.25} />
      <path d={paths[variant]} />
    </svg>
  );
}

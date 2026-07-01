import { cn } from "@/lib/utils";

// Stylized stand-in for LAB's Holi-powder-burst brand motif, built from
// blurred radial gradients so the hero has color + texture with zero asset
// dependency. Swap for a real powder-burst photo/render in
// /public/assets/hero/powder-burst.jpg if the client provides one.
export function PowderBurst({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      <div className="absolute -top-1/4 left-1/2 h-[70vh] w-[70vh] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
      <div className="absolute top-1/3 -left-1/4 h-[50vh] w-[50vh] rounded-full bg-accent-soft/12 blur-[110px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/75 to-ink" />
    </div>
  );
}

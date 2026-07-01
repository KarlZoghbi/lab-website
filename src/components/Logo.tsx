import { cn } from "@/lib/utils";

// The source file has a solid black background (not transparent). Since the
// logo only ever appears on dark navbar/footer surfaces, mix-blend-screen
// makes the black drop out and only the white mark shows — cheap fake
// transparency without needing the client to re-export the asset.
export function Logo({ className }: { className?: string }) {
  return (
    <img
      src="/assets/lab-logo.webp"
      alt="Lebanese Academy of Beauty"
      className={cn("h-10 w-auto mix-blend-screen sm:h-11", className)}
    />
  );
}

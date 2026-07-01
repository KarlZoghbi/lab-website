import { cn } from "@/lib/utils";
import { gradientForSeed, hashSeed } from "@/lib/placeholder";

interface PlaceholderImageProps {
  seed: string;
  alt: string;
  src?: string;
  width?: number;
  height?: number;
  className?: string;
  label?: string;
}

// When `src` is provided (e.g. content.ts's course.img once a client photo
// lands in public/assets/), renders that real photo instead — no other code
// needs to change. Until then, falls back to a zero-network inline gradient
// so the live preview always renders instantly regardless of network
// conditions. See public/assets/README.md.
export function PlaceholderImage({
  seed,
  alt,
  src,
  width = 800,
  height = 1000,
  className,
  label = "Sample photo",
}: PlaceholderImageProps) {
  if (src) {
    return (
      <div className={cn("relative overflow-hidden", className)}>
        <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover" />
      </div>
    );
  }

  const { from, to, angle } = gradientForSeed(seed);
  const gradId = `grad-${hashSeed(seed)}`;
  const rad = (angle * Math.PI) / 180;
  const x1 = 50 + 50 * Math.cos(rad + Math.PI);
  const y1 = 50 + 50 * Math.sin(rad + Math.PI);
  const x2 = 50 + 50 * Math.cos(rad);
  const y2 = 50 + 50 * Math.sin(rad);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <svg
        role="img"
        aria-label={alt}
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
      >
        <title>{alt}</title>
        <defs>
          <linearGradient id={gradId} x1={`${x1}%`} y1={`${y1}%`} x2={`${x2}%`} y2={`${y2}%`}>
            <stop offset="0%" stopColor={from} />
            <stop offset="100%" stopColor={to} />
          </linearGradient>
        </defs>
        <rect width={width} height={height} fill={`url(#${gradId})`} />
        <circle
          cx={width * 0.5}
          cy={height * 0.42}
          r={Math.min(width, height) * 0.22}
          fill="none"
          stroke="white"
          strokeOpacity={0.16}
          strokeWidth={1.5}
        />
        <circle
          cx={width * 0.5}
          cy={height * 0.42}
          r={Math.min(width, height) * 0.14}
          fill="white"
          fillOpacity={0.06}
        />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
      {label && (
        <span className="absolute bottom-2 left-2 rounded-full bg-ink/70 px-2 py-0.5 text-[9px] uppercase tracking-wider text-paper/70 backdrop-blur-sm">
          {label}
        </span>
      )}
    </div>
  );
}

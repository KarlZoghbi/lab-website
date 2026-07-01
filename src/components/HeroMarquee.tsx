import { PlaceholderImage } from "@/components/PlaceholderImage";
import { heroMarqueeImages } from "@/content/imageSlots";
import { dur } from "@/lib/motion";

const SEEDS = [
  "hero-1", "hero-2", "hero-3", "hero-4", "hero-5", "hero-6", "hero-7", "hero-8",
];

const ROTATIONS = ["-rotate-3", "rotate-2", "-rotate-2", "rotate-3"];

export function HeroMarquee() {
  const items = SEEDS.map((seed, i) => ({ seed, src: heroMarqueeImages[i] }));
  const track = [...items, ...items];

  return (
    <div
      className="relative w-full overflow-hidden py-4"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        maskImage:
          "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
      }}
    >
      <div
        className="animate-marquee motion-reduce:animate-none flex w-max gap-6"
        style={{ animationDuration: `${dur(45)}s` }}
      >
        {track.map((item, i) => (
          <div
            key={`${item.seed}-${i}`}
            className={`h-40 w-32 shrink-0 rounded-2xl shadow-xl shadow-black/40 sm:h-52 sm:w-40 ${ROTATIONS[i % ROTATIONS.length]}`}
          >
            <PlaceholderImage
              seed={item.seed}
              src={item.src || undefined}
              alt="LAB student or graduate work sample"
              width={400}
              height={520}
              className="h-full w-full rounded-2xl"
              label=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}

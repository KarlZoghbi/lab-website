import { useEffect, useRef } from "react";
import { stats } from "@/content/content";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { dur } from "@/lib/motion";
import { formatNumber } from "@/lib/utils";

export function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const valueRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%",
      once: true,
      onEnter: () => {
        stats.forEach((stat, i) => {
          const el = valueRefs.current[i];
          if (!el) return;
          const counter = { value: 0 };
          gsap.to(counter, {
            value: stat.value,
            duration: dur(1.8),
            ease: "power2.out",
            onUpdate: () => {
              el.textContent = formatNumber(Math.round(counter.value)) + stat.suffix;
            },
          });
        });
      },
    });

    return () => trigger.kill();
  }, []);

  return (
    <section ref={sectionRef} className="border-t border-charcoal/10 bg-cream-dim py-14 sm:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 sm:gap-10 lg:grid-cols-4 lg:px-10">
        {stats.map((stat, i) => (
          <div key={stat.label} className="text-center">
            <span
              ref={(el) => {
                valueRefs.current[i] = el;
              }}
              className="font-display block text-4xl text-accent sm:text-5xl"
            >
              0
            </span>
            <span className="mt-2 block text-xs uppercase tracking-[0.25em] text-charcoal/60">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

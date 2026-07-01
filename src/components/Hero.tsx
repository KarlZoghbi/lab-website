import { motion } from "framer-motion";
import { site } from "@/content/content";
import { Button } from "@/components/ui/Button";
import { PowderBurst } from "@/components/PowderBurst";
import { HeroMarquee } from "@/components/HeroMarquee";
import { SplitReveal } from "@/components/SplitReveal";
import { dur, EASE_FM } from "@/lib/motion";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden pt-24 sm:pt-28">
      <PowderBurst />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: dur(0.6), ease: EASE_FM.out }}
          className="mb-5 text-xs uppercase tracking-[0.4em] text-accent"
        >
          {site.heroSubline}
        </motion.p>

        <SplitReveal
          as="h1"
          text={site.heroHeadline}
          className="font-display text-balance text-5xl leading-[1.05] text-paper sm:text-6xl lg:text-[5.5rem]"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: dur(0.7), delay: dur(0.5), ease: EASE_FM.out }}
          className="font-display mt-6 max-w-xl text-xl italic text-paper/90 sm:mt-8 sm:text-2xl lg:text-3xl"
        >
          &ldquo;{site.tagline}&rdquo;
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: dur(0.6), delay: dur(0.7), ease: EASE_FM.out }}
          className="mt-8 sm:mt-10"
        >
          <Button href={site.primaryCta.href} size="lg">
            {site.primaryCta.label}
          </Button>
        </motion.div>
      </div>

      <div className="relative z-10 pb-10">
        <HeroMarquee />
      </div>
    </section>
  );
}

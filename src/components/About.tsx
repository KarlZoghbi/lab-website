import { motion } from "framer-motion";
import { about } from "@/content/content";
import { founderPortrait } from "@/content/imageSlots";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Button } from "@/components/ui/Button";
import { dur, EASE_FM } from "@/lib/motion";

export function About() {
  return (
    <section id="about" className="relative bg-cream py-16 sm:py-24 lg:py-36">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: dur(0.8), ease: EASE_FM.out }}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-accent">{about.eyebrow}</p>
          <h2 className="font-display mt-4 text-3xl leading-tight text-charcoal sm:text-4xl lg:text-5xl">
            {about.title}
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-charcoal/70">{about.body}</p>

          <blockquote className="mt-8 border-l-2 border-accent pl-5">
            <p className="font-display text-xl italic text-charcoal/90">&ldquo;{about.founderNote}&rdquo;</p>
            <cite className="mt-3 block text-sm not-italic tracking-wide text-charcoal/50">
              — {about.founderName}
            </cite>
          </blockquote>

          <div className="mt-8">
            <Button href={about.readMore.href} variant="outline" size="md">
              {about.readMore.label}
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: dur(0.9), ease: EASE_FM.out }}
          className="aspect-[4/5] w-full max-w-md justify-self-center rounded-3xl lg:justify-self-end"
        >
          <PlaceholderImage
            seed="founder"
            src={founderPortrait || undefined}
            alt={`Portrait of ${about.founderName}, founder of Lebanese Academy of Beauty`}
            width={640}
            height={800}
            className="h-full w-full rounded-3xl"
            label="Founder portrait — placeholder"
          />
        </motion.div>
      </div>
    </section>
  );
}

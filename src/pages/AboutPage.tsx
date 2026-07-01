import { motion } from "framer-motion";
import { about, site } from "@/content/content";
import { founderPortrait } from "@/content/imageSlots";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { PageHeader } from "@/components/PageHeader";
import { Stats } from "@/components/Stats";
import { Button } from "@/components/ui/Button";
import { dur, EASE_FM } from "@/lib/motion";

export function AboutPage() {
  return (
    <article className="bg-cream">
      <PageHeader eyebrow={about.eyebrow} title={about.title} />

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-12 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: dur(0.9), ease: EASE_FM.out }}
          className="aspect-[4/5] w-full max-w-md justify-self-center rounded-3xl lg:order-2 lg:justify-self-end"
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

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: dur(0.8), ease: EASE_FM.out }}
          className="lg:order-1"
        >
          <p className="text-base leading-relaxed text-charcoal/70">{about.body}</p>

          <blockquote className="mt-8 border-l-2 border-accent pl-5">
            <p className="font-display text-2xl italic text-charcoal/90">&ldquo;{about.founderNote}&rdquo;</p>
            <cite className="mt-3 block text-sm not-italic tracking-wide text-charcoal/50">
              — {about.founderName}
            </cite>
          </blockquote>

          <p className="font-display mt-8 text-xl italic text-accent">&ldquo;{site.tagline}&rdquo;</p>
        </motion.div>
      </section>

      <Stats />

      <section className="mx-auto max-w-3xl px-6 py-16 text-center sm:py-20">
        <h2 className="font-display text-2xl text-charcoal sm:text-3xl">
          Ready to start your career in beauty?
        </h2>
        <div className="mt-8">
          <Button href="/register" size="lg">
            Enroll Now
          </Button>
        </div>
      </section>
    </article>
  );
}

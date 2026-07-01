import { motion } from "framer-motion";
import type { Course } from "@/content/content";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Button } from "@/components/ui/Button";
import { dur, EASE_FM } from "@/lib/motion";

export function CourseCard({ course }: { course: Course }) {
  return (
    <motion.article
      whileHover="hover"
      initial="rest"
      animate="rest"
      className="flex h-full flex-col overflow-hidden rounded-3xl border border-charcoal/10 bg-white shadow-sm shadow-charcoal/5"
    >
      <motion.div
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.05 },
        }}
        transition={{ duration: dur(0.5), ease: EASE_FM.out }}
        className="relative aspect-[4/5] w-full overflow-hidden"
      >
        <PlaceholderImage
          seed={course.slug}
          alt={course.title}
          src={course.img || undefined}
          width={640}
          height={800}
          className="h-full w-full"
        />
        <motion.div
          variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
          transition={{ duration: dur(0.4) }}
          className="absolute inset-0 shadow-[inset_0_0_60px_10px_var(--color-accent)] opacity-0"
        />
      </motion.div>

      <motion.div
        variants={{ rest: { y: 0 }, hover: { y: -4 } }}
        transition={{ duration: dur(0.4), ease: EASE_FM.out }}
        className="flex flex-1 flex-col p-6"
      >
        {course.subtitle && (
          <p className="mb-1 text-[11px] uppercase tracking-[0.2em] text-accent">
            {course.subtitle}
          </p>
        )}
        <h3 className="font-display text-xl text-charcoal">{course.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/65">{course.blurb}</p>
        <p className="mt-4 text-xs uppercase tracking-wide text-charcoal/45">{course.duration}</p>

        <div className="mt-5 flex items-center gap-3">
          <Button href="/register" size="md" className="flex-1">
            Enroll
          </Button>
          <Button href={`/courses/${course.slug}`} variant="outline" size="md" className="flex-1">
            Read more
          </Button>
        </div>
      </motion.div>
    </motion.article>
  );
}

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { courses } from "@/content/content";
import { CourseCard } from "@/components/CourseCard";
import { dur, EASE_FM, prefersReducedMotion } from "@/lib/motion";

export function CoursesCarousel() {
  const [autoplayPlugin] = useState(() =>
    Autoplay({ delay: 4200, stopOnMouseEnter: true, stopOnFocusIn: true, stopOnInteraction: false })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", skipSnaps: false },
    prefersReducedMotion() ? [] : [autoplayPlugin]
  );

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="courses" className="relative border-t border-charcoal/10 bg-cream py-16 sm:py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:mb-12 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-accent">Courses</p>
            <h2 className="font-display mt-4 text-3xl text-charcoal sm:text-4xl lg:text-5xl">
              Eleven paths into the industry
            </h2>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canPrev}
              aria-label="Previous course"
              className="grid h-11 w-11 place-items-center rounded-full border border-charcoal/20 text-charcoal transition-colors hover:border-accent hover:text-accent disabled:opacity-30"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canNext}
              aria-label="Next course"
              className="grid h-11 w-11 place-items-center rounded-full border border-charcoal/20 text-charcoal transition-colors hover:border-accent hover:text-accent disabled:opacity-30"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="-ml-6 flex">
            {courses.map((course) => (
              <div
                key={course.slug}
                className="min-w-0 shrink-0 grow-0 basis-[88%] pl-6 sm:basis-[70%] lg:basis-[44%]"
              >
                <CourseCard course={course} />
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: dur(0.6), ease: EASE_FM.out }}
          className="mt-10 text-center sm:mt-12"
        >
          <Link
            to="/courses"
            className="text-sm uppercase tracking-[0.25em] text-charcoal/70 underline decoration-accent decoration-2 underline-offset-8 transition-colors hover:text-accent"
          >
            Browse all courses
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

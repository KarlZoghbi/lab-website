import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, Clock, ArrowLeft, Award, Gift } from "lucide-react";
import { courses } from "@/content/content";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Button } from "@/components/ui/Button";
import { dur, EASE_FM } from "@/lib/motion";

export function CourseDetail() {
  const { slug } = useParams();
  const course = courses.find((c) => c.slug === slug);

  if (!course) return <Navigate to="/" replace />;

  const whyParagraphs = course.why.split("\n\n");

  return (
    <article className="bg-cream pt-24 lg:pt-28">
      <section className="relative overflow-hidden border-b border-charcoal/10">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-12 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:py-24">
          <div>
            <Link
              to="/courses"
              className="mb-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-charcoal/50 hover:text-accent"
            >
              <ArrowLeft size={14} /> All courses
            </Link>
            {course.subtitle && (
              <p className="text-xs uppercase tracking-[0.3em] text-accent">{course.subtitle}</p>
            )}
            <h1 className="font-display mt-4 text-4xl leading-tight text-charcoal sm:text-5xl lg:text-6xl">
              {course.title}
            </h1>
            <div className="mt-6 flex flex-wrap gap-6 text-sm text-charcoal/70">
              <span className="flex items-center gap-2">
                <Clock size={16} className="text-accent" /> {course.duration}
              </span>
              {course.price && (
                <span className="flex items-center gap-2 font-display text-xl text-charcoal">
                  {course.price}
                </span>
              )}
            </div>
            <div className="mt-8">
              <Button href="/register" size="lg">
                Enroll in {course.title}
              </Button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: dur(0.8), ease: EASE_FM.out }}
            className="aspect-[4/5] w-full rounded-3xl"
          >
            <PlaceholderImage
              seed={course.slug}
              alt={course.title}
              src={course.img || undefined}
              width={800}
              height={1000}
              className="h-full w-full rounded-3xl"
            />
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-12 sm:py-16 lg:px-10">
        <h2 className="font-display text-2xl text-charcoal sm:text-3xl">Why enroll in this course?</h2>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-charcoal/70">
          {whyParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      <section className="border-t border-charcoal/10 bg-cream-dim py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <h2 className="font-display text-2xl text-charcoal sm:text-3xl">The program includes</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {course.program.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-charcoal/80">
                <Check size={16} className="mt-0.5 shrink-0 text-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-12 sm:py-16 lg:px-10">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-charcoal/10 p-6">
            <Clock size={20} className="text-accent" />
            <h3 className="font-display mt-3 text-lg text-charcoal">Duration & Certification</h3>
            <p className="mt-2 text-sm text-charcoal/70">{course.duration}</p>
            {course.certification && (
              <p className="mt-2 flex items-start gap-2 text-sm text-charcoal/70">
                <Award size={16} className="mt-0.5 shrink-0 text-accent" />
                {course.certification}
              </p>
            )}
          </div>

          {course.perk && (
            <div className="rounded-2xl border border-accent/40 bg-accent/10 p-6">
              <Gift size={20} className="text-accent" />
              <h3 className="font-display mt-3 text-lg text-charcoal">A perk, just for enrolling</h3>
              <p className="mt-2 text-sm text-charcoal/80">{course.perk}</p>
            </div>
          )}
        </div>

        <div className="mt-10 text-center">
          <Button href="/register" size="lg">
            Enroll in {course.title}
          </Button>
        </div>
      </section>
    </article>
  );
}

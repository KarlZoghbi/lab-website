import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Gift } from "lucide-react";
import { site, contact, courses } from "@/content/content";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/Button";
import { dur, EASE_FM } from "@/lib/motion";

const branches = [
  { name: "Dora", phones: contact.phones.filter((p) => p.label === "Dora") },
  { name: "Jbeil", phones: contact.phones.filter((p) => p.label === "Jbeil") },
];

const perkCourses = courses.filter((c) => c.perk);

export function AcademyPage() {
  return (
    <article className="bg-cream pb-16 sm:pb-20">
      <PageHeader eyebrow="The Academy" title="Dora &amp; Jbeil" intro={site.branchesLine} />

      <section className="mx-auto grid max-w-5xl gap-6 px-6 py-12 sm:grid-cols-2 lg:py-16">
        {branches.map((branch, i) => (
          <motion.div
            key={branch.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: dur(0.7), delay: dur(0.1) * i, ease: EASE_FM.out }}
            className="rounded-3xl border border-charcoal/10 bg-white p-8 shadow-sm shadow-charcoal/5"
          >
            <MapPin className="text-accent" size={22} />
            <h2 className="font-display mt-3 text-2xl text-charcoal">{branch.name} Branch</h2>
            <ul className="mt-4 space-y-2 text-sm text-charcoal/70">
              {branch.phones.map((p) => (
                <li key={p.number}>{p.number}</li>
              ))}
            </ul>
            <p className="mt-4 text-xs uppercase tracking-wide text-charcoal/40">
              {contact.hours[0].days}: {contact.hours[0].time}
            </p>
          </motion.div>
        ))}
      </section>

      {perkCourses.length > 0 && (
        <section className="mx-auto max-w-5xl px-6 py-12 lg:py-16">
          <h2 className="font-display text-2xl text-charcoal sm:text-3xl">
            A few perks along the way
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {perkCourses.map((course) => (
              <Link
                key={course.slug}
                to={`/courses/${course.slug}`}
                className="group rounded-2xl border border-accent/30 bg-accent/10 p-6 transition-colors hover:border-accent"
              >
                <Gift className="text-accent" size={20} />
                <h3 className="font-display mt-3 text-lg text-charcoal">{course.title}</h3>
                <p className="mt-2 text-sm text-charcoal/80">{course.perk}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-3xl px-6 py-8 text-center">
        <Button href="/register" size="lg">
          {site.primaryCta.label}
        </Button>
      </section>
    </article>
  );
}

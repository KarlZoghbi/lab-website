import { courses } from "@/content/content";
import { PageHeader } from "@/components/PageHeader";
import { CourseCard } from "@/components/CourseCard";

export function CoursesPage() {
  return (
    <article className="bg-cream pb-16 sm:pb-24">
      <PageHeader
        eyebrow="Courses"
        title="Eleven paths into the industry"
        intro="Browse the full catalog below, then enroll or read the full program for any course."
      />

      <section className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </section>
    </article>
  );
}

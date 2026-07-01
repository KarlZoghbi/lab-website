import { type FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { registerForm } from "@/content/content";
import { Button } from "@/components/ui/Button";
import { dur, EASE_FM } from "@/lib/motion";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
  branch: string;
  courses: string[];
}

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
  branch: registerForm.branches[0],
  courses: [],
};

export function Register() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const toggleCourse = (course: string) => {
    setForm((prev) => ({
      ...prev,
      courses: prev.courses.includes(course)
        ? prev.courses.filter((c) => c !== course)
        : [...prev.courses, course],
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO(backend): wire this to the real registration endpoint.
    console.log("LAB registration submission:", form);
    setSubmitted(true);
  };

  return (
    <section className="mx-auto max-w-3xl bg-cream px-6 pb-16 pt-24 sm:pb-24 lg:px-10 lg:pt-32">
      <p className="text-xs uppercase tracking-[0.4em] text-accent">Enroll Now</p>
      <h1 className="font-display mt-4 text-4xl text-charcoal sm:text-5xl">Register your interest</h1>
      <p className="mt-5 max-w-xl text-base leading-relaxed text-charcoal/70">{registerForm.intro}</p>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: dur(0.6), ease: EASE_FM.out }}
          className="mt-12 flex items-start gap-4 rounded-2xl border border-accent/40 bg-accent/10 p-6"
        >
          <CheckCircle2 className="mt-0.5 shrink-0 text-accent" size={22} />
          <div>
            <p className="font-display text-lg text-charcoal">Thank you, {form.name || "friend"}.</p>
            <p className="mt-1 text-sm text-charcoal/70">
              We've received your details and will reach out about the {form.branch} branch soon.
            </p>
          </div>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-12 space-y-10">
          <fieldset>
            <legend className="text-xs uppercase tracking-[0.3em] text-charcoal/50">
              Which course(s) are you interested in?
            </legend>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {registerForm.courseOptions.map((course) => (
                <label
                  key={course}
                  className="flex cursor-pointer items-center gap-3 rounded-xl border border-charcoal/15 px-4 py-3 text-sm text-charcoal/80 transition-colors has-[:checked]:border-accent has-[:checked]:text-charcoal"
                >
                  <input
                    type="checkbox"
                    className="h-4 w-4 accent-(--color-accent)"
                    checked={form.courses.includes(course)}
                    onChange={() => toggleCourse(course)}
                  />
                  {course}
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-xs uppercase tracking-[0.3em] text-charcoal/50">Branch</legend>
            <div className="mt-4 flex gap-4">
              {registerForm.branches.map((branch) => (
                <label
                  key={branch}
                  className="flex cursor-pointer items-center gap-2 rounded-full border border-charcoal/15 px-5 py-2 text-sm text-charcoal/80 has-[:checked]:border-accent has-[:checked]:text-charcoal"
                >
                  <input
                    type="radio"
                    name="branch"
                    className="h-4 w-4 accent-(--color-accent)"
                    checked={form.branch === branch}
                    onChange={() => setForm((prev) => ({ ...prev, branch }))}
                  />
                  {branch}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="grid gap-6 sm:grid-cols-2">
            <label className="block">
              <span className="text-xs uppercase tracking-[0.3em] text-charcoal/50">Your name</span>
              <input
                required
                type="text"
                value={form.name}
                onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                className="mt-2 w-full rounded-xl border border-charcoal/15 bg-transparent px-4 py-3 text-charcoal outline-none transition-colors focus:border-accent"
              />
            </label>
            <label className="block">
              <span className="text-xs uppercase tracking-[0.3em] text-charcoal/50">Your email</span>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                className="mt-2 w-full rounded-xl border border-charcoal/15 bg-transparent px-4 py-3 text-charcoal outline-none transition-colors focus:border-accent"
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="text-xs uppercase tracking-[0.3em] text-charcoal/50">Phone</span>
              <input
                required
                type="tel"
                value={form.phone}
                onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
                className="mt-2 w-full rounded-xl border border-charcoal/15 bg-transparent px-4 py-3 text-charcoal outline-none transition-colors focus:border-accent"
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="text-xs uppercase tracking-[0.3em] text-charcoal/50">
                Your message (optional)
              </span>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                className="mt-2 w-full rounded-xl border border-charcoal/15 bg-transparent px-4 py-3 text-charcoal outline-none transition-colors focus:border-accent"
              />
            </label>
          </div>

          <Button type="submit" size="lg" className="w-full sm:w-auto">
            Submit registration
          </Button>
        </form>
      )}
    </section>
  );
}

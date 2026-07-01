import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { contact } from "@/content/content";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/Button";

export function ContactPage() {
  return (
    <article className="bg-cream pb-16 sm:pb-24">
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        intro="Ask about details and registration dates for upcoming sessions."
      />

      <section className="mx-auto grid max-w-5xl gap-6 px-6 py-12 sm:grid-cols-3 lg:py-16">
        <div className="rounded-3xl border border-charcoal/10 bg-white p-8 shadow-sm shadow-charcoal/5">
          <Phone className="text-accent" size={22} />
          <h2 className="font-display mt-3 text-xl text-charcoal">Phone</h2>
          <ul className="mt-4 space-y-3 text-sm text-charcoal/70">
            {contact.phones.map((p) => (
              <li key={p.number}>
                <span className="block text-charcoal/40">{p.label}</span>
                <a href={`tel:${p.number.replace(/\s/g, "")}`} className="hover:text-accent">
                  {p.number}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-charcoal/10 bg-white p-8 shadow-sm shadow-charcoal/5">
          <Mail className="text-accent" size={22} />
          <h2 className="font-display mt-3 text-xl text-charcoal">Email</h2>
          <p className="mt-4 text-sm text-charcoal/70">
            <a href={`mailto:${contact.email}`} className="hover:text-accent">
              {contact.email}
            </a>
          </p>
          <Clock className="mt-6 text-accent" size={22} />
          <h2 className="font-display mt-3 text-xl text-charcoal">Hours</h2>
          <ul className="mt-4 space-y-2 text-sm text-charcoal/70">
            {contact.hours.map((h) => (
              <li key={h.days}>
                <span className="block text-charcoal/40">{h.days}</span>
                {h.time}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-charcoal/40">{contact.hoursNote}</p>
        </div>

        <div className="rounded-3xl border border-charcoal/10 bg-white p-8 shadow-sm shadow-charcoal/5">
          <MapPin className="text-accent" size={22} />
          <h2 className="font-display mt-3 text-xl text-charcoal">Branches</h2>
          <ul className="mt-4 space-y-2 text-sm text-charcoal/70">
            <li>Dora, Lebanon</li>
            <li>Jbeil, Lebanon</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-8 text-center">
        <Button href="/register" size="lg">
          Enroll Now
        </Button>
      </section>
    </article>
  );
}

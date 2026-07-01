import { Mail, MapPin, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/icons/SocialIcons";
import { Logo } from "@/components/Logo";
import { contact, site } from "@/content/content";

export function Footer() {
  return (
    <footer id="contact" className="relative border-t border-line bg-ink-soft">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 sm:gap-12 sm:py-16 lg:grid-cols-4 lg:px-10">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm text-paper/60">{site.tagline}</p>
          <div className="mt-6 flex gap-4">
            <a
              href={contact.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="LAB on Facebook"
              className="grid h-9 w-9 place-items-center rounded-full border border-line text-paper/70 transition-colors hover:border-accent hover:text-accent"
            >
              <FacebookIcon size={16} />
            </a>
            <a
              href={contact.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="LAB on Instagram"
              className="grid h-9 w-9 place-items-center rounded-full border border-line text-paper/70 transition-colors hover:border-accent hover:text-accent"
            >
              <InstagramIcon size={16} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.3em] text-paper/50">Contact</h3>
          <ul className="mt-5 space-y-3 text-sm text-paper/80">
            {contact.phones.map((p) => (
              <li key={p.number} className="flex items-start gap-2">
                <Phone size={14} className="mt-1 shrink-0 text-accent" />
                <span>
                  <span className="text-paper/50">{p.label}: </span>
                  <a href={`tel:${p.number.replace(/\s/g, "")}`} className="hover:text-accent">
                    {p.number}
                  </a>
                </span>
              </li>
            ))}
            <li className="flex items-start gap-2">
              <Mail size={14} className="mt-1 shrink-0 text-accent" />
              <a href={`mailto:${contact.email}`} className="hover:text-accent">
                {contact.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.3em] text-paper/50">Hours</h3>
          <ul className="mt-5 space-y-3 text-sm text-paper/80">
            {contact.hours.map((h) => (
              <li key={h.days}>
                <span className="block text-paper/50">{h.days}</span>
                {h.time}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-paper/40">{contact.hoursNote}</p>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.3em] text-paper/50">Branches</h3>
          <ul className="mt-5 space-y-3 text-sm text-paper/80">
            <li className="flex items-start gap-2">
              <MapPin size={14} className="mt-1 shrink-0 text-accent" />
              Dora, Lebanon
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={14} className="mt-1 shrink-0 text-accent" />
              Jbeil, Lebanon
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line px-6 py-6 text-center text-xs text-paper/40 lg:px-10">
        {contact.copyright}
      </div>
    </footer>
  );
}

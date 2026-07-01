import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/content";
import { ScrollTrigger } from "@/lib/gsap";
import { dur, EASE_FM } from "@/lib/motion";
import { cn } from "@/lib/utils";

// Facebook/Instagram links live only in the footer — nav items are all real
// pages. Videos/Magazines have no source content yet (see their pages).
const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academy", href: "/academy" },
  { label: "Courses", href: "/courses" },
  { label: "Videos", href: "/videos" },
  { label: "Magazines", href: "/magazines" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);
  // Only the homepage has a dark hero for the navbar to float over
  // transparently — every other route opens straight into the light
  // cream body, where transparent + light nav text would be unreadable.
  const isHome = location.pathname === "/";

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      start: "top -80",
      onEnter: () => setScrolled(true),
      onLeaveBack: () => setScrolled(false),
    });
    return () => trigger.kill();
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        ref={navRef}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors",
          scrolled || open || !isHome
            ? "bg-ink/80 backdrop-blur-md border-b border-line"
            : "bg-transparent"
        )}
      >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link to="/" aria-label={site.name}>
          <Logo />
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className="text-sm tracking-wide text-paper/80 transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button href={site.primaryCta.href} size="md">
            {site.primaryCta.label}
          </Button>
        </div>

        <button
          className="grid h-10 w-10 place-items-center text-paper lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>
      </header>

      {/* Rendered as a sibling of <header>, not a child: the header gains
          backdrop-blur (backdrop-filter) when open, which would otherwise
          establish a new containing block and collapse this fixed panel's
          height down to the header's own height instead of the viewport. */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: dur(0.3) }}
            className="fixed inset-0 top-[72px] z-40 flex flex-col justify-between bg-ink px-8 pb-10 pt-6 lg:hidden"
          >
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: dur(0.5), delay: dur(0.05) * i, ease: EASE_FM.out }}
                  className="border-b border-line py-4"
                >
                  <Link to={link.href} className="font-display text-3xl text-paper">
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <Button href={site.primaryCta.href} size="lg" className="w-full">
              {site.primaryCta.label}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

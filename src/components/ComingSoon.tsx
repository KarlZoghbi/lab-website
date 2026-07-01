import type { LucideIcon } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

interface ComingSoonProps {
  eyebrow: string;
  title: string;
  icon: LucideIcon;
}

// TODO(copy): content.ts has no source content for this page yet — replace
// this placeholder once real copy/media is provided.
export function ComingSoon({ eyebrow, title, icon: Icon }: ComingSoonProps) {
  return (
    <article className="bg-cream pb-24">
      <PageHeader eyebrow={eyebrow} title={title} />
      <div className="mx-auto flex max-w-md flex-col items-center px-6 py-16 text-center">
        <div className="grid h-16 w-16 place-items-center rounded-full border border-charcoal/15">
          <Icon className="text-accent" size={26} />
        </div>
        <p className="mt-6 text-base leading-relaxed text-charcoal/60">
          This section is being put together — check back soon.
        </p>
      </div>
    </article>
  );
}

import { motion } from "framer-motion";
import { dur, EASE_FM } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface SplitRevealProps {
  text: string;
  className?: string;
  delayStart?: number;
  as?: "h1" | "p" | "span";
  trigger?: "load" | "scroll";
}

// Per-word staggered mask reveal: each word rises out of an overflow-hidden
// wrapper so it looks like the type is being unveiled, not just faded in.
// trigger="load" fires immediately on mount (for above-the-fold content,
// where whileInView's IntersectionObserver can lag first paint and leave
// text invisible); trigger="scroll" waits until it enters the viewport.
export function SplitReveal({
  text,
  className,
  delayStart = 0,
  as = "span",
  trigger = "load",
}: SplitRevealProps) {
  const words = text.split(" ");
  const Wrapper = as;
  const revealProps =
    trigger === "load"
      ? { animate: { y: 0 } }
      : { whileInView: { y: 0 }, viewport: { once: true } };

  return (
    <Wrapper className={cn(className)}>
      {words.flatMap((word, i) => [
        <span key={`w-${i}`} className="inline-block overflow-hidden pb-[0.1em] align-top">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            {...revealProps}
            transition={{
              duration: dur(0.9),
              delay: delayStart + dur(0.06) * i,
              ease: EASE_FM.out,
            }}
          >
            {word}
          </motion.span>
        </span>,
        i < words.length - 1 ? <span key={`s-${i}`}> </span> : null,
      ])}
    </Wrapper>
  );
}

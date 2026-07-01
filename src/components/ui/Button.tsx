import { type ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { dur, EASE_FM } from "@/lib/motion";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  external?: boolean;
  onClick?: () => void;
  variant?: "solid" | "outline" | "ghost";
  size?: "md" | "lg";
  className?: string;
  type?: "button" | "submit";
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-sans font-medium tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const variants = {
  solid: "bg-accent text-paper hover:bg-accent-soft",
  outline: "border border-charcoal/25 text-charcoal hover:border-accent hover:text-accent",
  ghost: "text-charcoal/80 hover:text-accent",
};

const sizes = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const MotionLink = motion.create(Link);

export function Button({
  children,
  href,
  external,
  onClick,
  variant = "solid",
  size = "md",
  className,
  type = "button",
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);
  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.97 },
    transition: { duration: dur(0.2), ease: EASE_FM.out },
  };

  if (href && external) {
    return (
      <motion.a href={href} target="_blank" rel="noreferrer" className={classes} {...motionProps}>
        {children}
      </motion.a>
    );
  }

  if (href) {
    return (
      <MotionLink to={href} className={classes} {...motionProps}>
        {children}
      </MotionLink>
    );
  }

  return (
    <motion.button type={type} onClick={onClick} className={classes} {...motionProps}>
      {children}
    </motion.button>
  );
}

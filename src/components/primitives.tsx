"use client";

// Generic layout & typography primitives
// One file keeps the footprint small and easy to import.

import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

/* -------------------------------------------------------------------------- */
/*                                  Section                                   */
/* -------------------------------------------------------------------------- */

/**
 * Consistent max‑width container with sane horizontal & vertical padding.
 * You can override padding/margins by passing `className`.
 */
interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
}

export function Section({ id, className, children, ...props }: SectionProps) {
  return (
    <section id={id} className={cn("mx-auto max-w-screen-xl px-6 py-16", className)} {...props}>
      {children}
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                 Typography                                 */
/* -------------------------------------------------------------------------- */

interface H2Props extends React.HTMLAttributes<HTMLHeadingElement> {}

export function H2({ className, children, ...props }: H2Props) {
  return (
    <h2 className={cn("text-2xl font-semibold", className)} {...props}>
      {children}
    </h2>
  );
}

interface PProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export function P({ className, children, ...props }: PProps) {
  return (
    <p className={cn("text-lg leading-relaxed", className)} {...props}>
      {children}
    </p>
  );
}

export const Muted = ({ className, ...p }: HTMLAttributes<HTMLSpanElement>) => (
  <span
    {...p}
    className={cn("text-sm text-neutral-500", className)}
  />
);

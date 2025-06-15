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
export function Section({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <section
      className={cn(
        "mx-auto w-full max-w-screen-xl px-6 py-16", // edit once, affect all
        className
      )}
      {...props}
    />
  );
}

/* -------------------------------------------------------------------------- */
/*                                 Typography                                 */
/* -------------------------------------------------------------------------- */

export const H2 = ({ className, ...p }: HTMLAttributes<HTMLHeadingElement>) => (
  <h2
    {...p}
    className={cn("text-2xl font-semibold tracking-tight", className)}
  />
);

export const P = ({ className, ...p }: HTMLAttributes<HTMLParagraphElement>) => (
  <p
    {...p}
    className={cn("leading-relaxed text-neutral-300", className)}
  />
);

export const Muted = ({ className, ...p }: HTMLAttributes<HTMLSpanElement>) => (
  <span
    {...p}
    className={cn("text-sm text-neutral-500", className)}
  />
);

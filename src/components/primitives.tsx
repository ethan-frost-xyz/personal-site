"use client";

// Layout, typography, and CTA primitives — all in one lightweight file.
// Any future pages can import { Section, H2, P, Button, buttonVariants } for instant consistency.

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";
import type { ElementType } from "react"

/* -------------------------------------------------------------------------- */
/*                                   Section                                  */
/* -------------------------------------------------------------------------- */

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
}

export function Section({ id, className, children, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("mx-auto w-full max-w-screen-xl px-6 py-16", className)}
      {...props}
    >
      {children}
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  Typography                                */
/* -------------------------------------------------------------------------- */

export function H2({ className, ...p }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      {...p}
      className={cn("text-2xl font-semibold tracking-tight", className)}
    />
  );
}

export function P({ className, ...p }: HTMLAttributes<HTMLParagraphElement>) {
  return <p {...p} className={cn("leading-relaxed", className)} />;
}

export function Muted({ className, ...p }: HTMLAttributes<HTMLSpanElement>) {
  return <span {...p} className={cn("text-sm text-neutral-500", className)} />;
}

/* -------------------------------------------------------------------------- */
/*                                   Button                                   */
/* -------------------------------------------------------------------------- */

// Variants driven by class‑variance‑authority so every CTA stays consistent.

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-2xl text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-500/40 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-neutral-700 text-neutral-100 hover:bg-neutral-600 active:bg-neutral-500",
        secondary:
          "bg-neutral-800 text-neutral-200 hover:bg-neutral-700 active:bg-neutral-600",
        ghost:
          "bg-transparent text-neutral-300 hover:bg-neutral-800/40 active:bg-neutral-800/60",
        icon:
          "bg-neutral-800 p-2 text-neutral-100 hover:bg-neutral-700 active:bg-neutral-600",
      },
      size: {
        sm: "px-3 py-1.5 text-xs",
        md: "px-5 py-2.5",
        lg: "px-6 py-3 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp: ElementType = asChild ? Slot : "button"
    return (
      <Comp
        ref={ref as React.Ref<HTMLButtonElement>}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

// Re‑export the variant generator so you can style <Link> like a button.
export { buttonVariants };

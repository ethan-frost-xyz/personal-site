"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import React, { forwardRef, type ForwardedRef } from "react";

export interface CardProps {
  href?: string;
  title: string;
  description: string;
  className?: string;
}

/**
 * Reusable content card. Accepts an optional `href`; when present it renders as a clickable <Link>.
 * Otherwise it's a static div—perfect for wrapping in a Modal trigger.
 */
const Card = forwardRef<HTMLAnchorElement | HTMLDivElement, CardProps>(
  ({ href, title, description, className, ...rest }, ref: ForwardedRef<HTMLAnchorElement | HTMLDivElement>) => {
    const inner = (
      <>
        <h3 className="text-xl font-medium">{title}</h3>
        <p className="mt-2 text-sm text-neutral-400">{description}</p>
        {href && (
          <span className="mt-4 inline-block text-sm underline">Read More →</span>
        )}
      </>
    );

    const shared = cn(
      "group relative rounded-2xl border border-neutral-700 p-6 transition-shadow hover:shadow-xl cursor-pointer bg-background",
      className
    );

    return href ? (
      <Link href={href} ref={ref as ForwardedRef<HTMLAnchorElement>} className={shared} {...rest}>
        {inner}
      </Link>
    ) : (
      <div ref={ref as ForwardedRef<HTMLDivElement>} className={shared} {...rest}>
        {inner}
      </div>
    );
  }
);
Card.displayName = "Card";

export default Card;

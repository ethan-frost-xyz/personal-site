"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { cn } from "../../lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Optional title text rendered in <h3>.
   */
  title?: string;
  /**
   * Optional description paragraph.
   */
  description?: string;
  /**
   * When provided, the card becomes clickable and routes via <Link>.
   */
  href?: string;
  /**
   * Optional call‑to‑action label shown in the footer when `href` exists.
   * Defaults to “Read More →”.
   */
  cta?: string;
}

/**
 * Base card component – neutral palette, rounded‑2xl, thin border.
 * Tailwind v3‑compatible and motion‑ready (wrap with motion if desired).
 */
const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    { title, description, href, cta = "Read More →", className, children, ...props },
    ref,
  ) => {
    const inner = (
      <div
        ref={ref}
        className={cn(
          "group relative flex flex-col rounded-2xl border border-neutral-700/80 bg-neutral-800/60 p-6 backdrop-blur-lg transition-shadow hover:shadow-xl",
          className,
        )}
        {...props}
      >
        {title && <h3 className="text-xl font-medium text-neutral-100">{title}</h3>}
        {description && (
          <p className="mt-2 text-sm leading-relaxed text-neutral-400">{description}</p>
        )}
        {children}
        {href && (
          <span className="mt-4 inline-flex items-center text-sm font-medium text-sky-400/90 opacity-0 transition-opacity group-hover:opacity-100">
            {cta}
          </span>
        )}
      </div>
    );

    // If href, wrap in Next/Link for client routing.
    return href ? (
      <Link href={href} className="focus-visible:outline-none">
        {inner}
      </Link>
    ) : (
      inner
    );
  },
);
Card.displayName = "Card";

export default Card;

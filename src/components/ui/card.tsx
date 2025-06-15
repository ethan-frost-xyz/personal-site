"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { cn } from "../../lib/utils";

interface CardProps {
  href: string;
  title: string;
  description: string;
  className?: string;
}

export default function Card({ href, title, description, className }: CardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative rounded-2xl border border-neutral-700 p-6 transition-shadow hover:shadow-xl",
        className
      )}
    >
      <h3 className="text-xl font-medium">{title}</h3>
      <p className="mt-2 text-sm text-neutral-400">{description}</p>
      <span className="mt-4 inline-block text-sm underline">Read More →</span>
    </Link>
  );
}

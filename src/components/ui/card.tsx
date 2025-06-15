"use client";

import React from "react";
import Link from "next/link";
import { cn } from "../../lib/utils";

export interface CardProps {
  title: string;
  description: string;
  href: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function Card({ title, description, href, imageSrc, imageAlt }: CardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group block overflow-hidden rounded-2xl border border-neutral-700 bg-neutral-800 transition-shadow hover:shadow-xl"
      )}
    >
      {imageSrc && (
        <div className="relative h-48 w-full">
          <img
            src={imageSrc}
            alt={imageAlt || title}
            className="h-full w-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-medium text-neutral-100">{title}</h3>
        <p className="mt-2 text-sm text-neutral-400">{description}</p>
        <span className="mt-4 inline-block text-sm text-neutral-200 underline">
          Read More →
        </span>
      </div>
    </Link>
  );
}

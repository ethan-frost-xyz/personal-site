"use client";

import React from "react";
import { cn } from "../../lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "inline-flex items-center justify-center rounded-2xl bg-neutral-700 px-5 py-2.5 text-sm font-medium text-neutral-100 hover:bg-neutral-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 disabled:opacity-50 disabled:pointer-events-none",
        className
      )}
    />
  );
}

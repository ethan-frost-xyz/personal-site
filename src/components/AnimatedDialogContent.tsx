'use client';

import { motion } from "framer-motion";
import { DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { P, Button } from "./primitives";
import Link from "next/link";

interface AnimatedDialogContentProps {
  title: string;
  description: string;
  content: string;
  linkHref: string;
  linkText: string;
}

export function AnimatedDialogContent({
  title,
  description,
  content,
  linkHref,
  linkText
}: AnimatedDialogContentProps) {
  return (
    <DialogContent className="max-w-xl rounded-2xl border border-neutral-700 bg-neutral-900 p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.18 }}
      >
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            {title}
          </DialogTitle>
          <DialogDescription className="text-sm text-neutral-400">
            {description}
          </DialogDescription>
        </DialogHeader>
        <P className="mt-4">
          {content}
        </P>
        <Button asChild variant="secondary" size="sm" className="mt-6">
          <Link href={linkHref}>{linkText}</Link>
        </Button>
      </motion.div>
    </DialogContent>
  );
} 
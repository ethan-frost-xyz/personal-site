"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"            // optional animation

interface ModalProps {
  title: string
  description?: string
  trigger: React.ReactNode      // what opens the modal
  children: React.ReactNode     // modal body
  className?: string
}

export function Modal({ title, description, trigger, children, className }: ModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Slot>{trigger}</Slot>
      </DialogTrigger>

      <DialogContent asChild>
        {/* Motion fade + scale */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.18 }}
          className={cn("rounded-2xl border border-neutral-700 bg-neutral-900 p-6", className)}
        >
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">{title}</DialogTitle>
            {description && (
              <DialogDescription className="text-sm text-neutral-400">
                {description}
              </DialogDescription>
            )}
          </DialogHeader>
          <div className="mt-4 space-y-4">{children}</div>
        </motion.div>
      </DialogContent>
    </Dialog>
  )
}

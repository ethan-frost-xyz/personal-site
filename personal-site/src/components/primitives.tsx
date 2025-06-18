import { ReactNode, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';

interface BaseProps {
  className?: string;
  children?: ReactNode;
}

export function Section({ className, children, ...props }: BaseProps & React.HTMLAttributes<HTMLElement>) {
  return <section className={cn("w-full", className)} {...props}>{children}</section>;
}

export function H2({ className, children, ...props }: BaseProps & React.HTMLAttributes<HTMLHeadingElement>) {
  return <h2 className={cn("font-semibold", className)} {...props}>{children}</h2>;
}

export function P({ className, children, ...props }: BaseProps & React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-neutral-400", className)} {...props}>{children}</p>;
}

interface ButtonProps extends BaseProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: 'default' | 'secondary' | 'ghost';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, variant = 'default', children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(
          "px-4 py-2 rounded-md",
          {
            'bg-neutral-800 hover:bg-neutral-700': variant === 'default',
            'bg-neutral-700 hover:bg-neutral-600': variant === 'secondary',
            'hover:bg-neutral-800': variant === 'ghost',
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export function Muted({ className, children, ...props }: BaseProps & React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn("text-sm text-neutral-500", className)} {...props}>{children}</span>;
} 
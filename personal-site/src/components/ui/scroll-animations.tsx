"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "scaleIn" | "rotateIn";
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
}

const animations = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: "opacity"
  },
  slideUp: {
    initial: { opacity: 0, transform: "translateY(50px)" },
    animate: { opacity: 1, transform: "translateY(0)" },
    transition: "opacity, transform"
  },
  slideLeft: {
    initial: { opacity: 0, transform: "translateX(50px)" },
    animate: { opacity: 1, transform: "translateX(0)" },
    transition: "opacity, transform"
  },
  slideRight: {
    initial: { opacity: 0, transform: "translateX(-50px)" },
    animate: { opacity: 1, transform: "translateX(0)" },
    transition: "opacity, transform"
  },
  scaleIn: {
    initial: { opacity: 0, transform: "scale(0.8)" },
    animate: { opacity: 1, transform: "scale(1)" },
    transition: "opacity, transform"
  },
  rotateIn: {
    initial: { opacity: 0, transform: "rotate(-10deg) scale(0.8)" },
    animate: { opacity: 1, transform: "rotate(0deg) scale(1)" },
    transition: "opacity, transform"
  }
};

export function ScrollAnimation({ 
  children, 
  className, 
  animation = "fadeIn",
  delay = 0,
  duration = 600,
  threshold = 0.1,
  once = true
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const [hasAnimated, setHasAnimated] = React.useState(false);
  const elementRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            setHasAnimated(true);
            observer.unobserve(element);
          }
        } else if (!once && !hasAnimated) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, once, hasAnimated]);

  const animationConfig = animations[animation];
  const shouldAnimate = isVisible || hasAnimated;

  return (
    <div
      ref={elementRef}
      className={cn("transition-all ease-out", className)}
      style={{
        ...(!shouldAnimate ? animationConfig.initial : animationConfig.animate),
        transitionProperty: animationConfig.transition,
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
}

// Counter animation component
interface AnimatedCounterProps {
  end: number;
  start?: number;
  duration?: number;
  delay?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  decimals?: number;
}

export function AnimatedCounter({
  end,
  start = 0,
  duration = 2000,
  delay = 0,
  suffix = "",
  prefix = "",
  className,
  decimals = 0
}: AnimatedCounterProps) {
  const [count, setCount] = React.useState(start);
  const [isVisible, setIsVisible] = React.useState(false);
  const elementRef = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  React.useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      let startTime: number | null = null;
      const animate = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        // Easing function (ease-out)
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentCount = start + (end - start) * easeOut;
        
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, start, end, duration, delay]);

  return (
    <span ref={elementRef} className={className}>
      {prefix}{count.toFixed(decimals)}{suffix}
    </span>
  );
}

// Staggered animation container
interface StaggeredAnimationProps {
  children: React.ReactNode[];
  staggerDelay?: number;
  animation?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "scaleIn";
  className?: string;
}

export function StaggeredAnimation({
  children,
  staggerDelay = 100,
  animation = "slideUp",
  className
}: StaggeredAnimationProps) {
  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => (
        <ScrollAnimation
          key={index}
          animation={animation}
          delay={index * staggerDelay}
        >
          {child}
        </ScrollAnimation>
      ))}
    </div>
  );
}

// Progress bar animation
interface AnimatedProgressBarProps {
  value: number;
  max?: number;
  duration?: number;
  delay?: number;
  className?: string;
  color?: string;
  showLabel?: boolean;
}

export function AnimatedProgressBar({
  value,
  max = 100,
  duration = 1500,
  delay = 0,
  className,
  color = "bg-blue-500",
  showLabel = true
}: AnimatedProgressBarProps) {
  const [progress, setProgress] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(false);
  const elementRef = React.useRef<HTMLDivElement>(null);

  const percentage = Math.min((value / max) * 100, 100);

  React.useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  React.useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      let startTime: number | null = null;
      const animate = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const elapsed = Math.min((currentTime - startTime) / duration, 1);
        
        // Easing function (ease-out)
        const easeOut = 1 - Math.pow(1 - elapsed, 3);
        const currentProgress = percentage * easeOut;
        
        setProgress(currentProgress);
        
        if (elapsed < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, percentage, duration, delay]);

  return (
    <div ref={elementRef} className={cn("relative", className)}>
      <div className="w-full bg-neutral-700 rounded-full h-2">
        <div 
          className={cn("h-2 rounded-full transition-all duration-300", color)}
          style={{ width: `${progress}%` }}
        />
      </div>
      {showLabel && (
        <div className="absolute right-0 top-0 -mt-6 text-sm text-neutral-400">
          {progress.toFixed(1)}%
        </div>
      )}
    </div>
  );
}

// Typing animation component
interface TypingAnimationProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  cursor?: boolean;
}

export function TypingAnimation({
  text,
  speed = 50,
  delay = 0,
  className,
  cursor = true
}: TypingAnimationProps) {
  const [displayText, setDisplayText] = React.useState("");
  const [showCursor, setShowCursor] = React.useState(true);
  const [isVisible, setIsVisible] = React.useState(false);
  const elementRef = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  React.useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      let index = 0;
      const typeInterval = setInterval(() => {
        setDisplayText(text.slice(0, index + 1));
        index++;
        
        if (index >= text.length) {
          clearInterval(typeInterval);
          if (cursor) {
            setTimeout(() => setShowCursor(false), 1000);
          }
        }
      }, speed);

      return () => clearInterval(typeInterval);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, text, speed, delay, cursor]);

  React.useEffect(() => {
    if (!cursor) return;
    
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, [cursor]);

  return (
    <span ref={elementRef} className={className}>
      {displayText}
      {cursor && showCursor && <span className="animate-pulse">|</span>}
    </span>
  );
} 
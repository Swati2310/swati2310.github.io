import { useEffect, useRef } from "react";
import { useAnimationFrame, useMotionValue, useReducedMotion } from "framer-motion";

interface UseMarqueeOptions {
  /** Auto-scroll speed in pixels per second. */
  speed?: number;
  /** Number of items in a single (non-duplicated) set — triggers a remeasure when it changes. */
  itemCount: number;
}

/**
 * Drives a seamless, infinite right-to-left marquee.
 *
 * Renders two back-to-back copies of the item list; `setRef` should be attached to a
 * wrapper around just the first copy so its width can be measured. Each frame nudges
 * a Framer Motion `x` value left by `speed * dt`, then wraps it by exactly one copy's
 * width once it scrolls (or is dragged) past a boundary — since both copies are
 * identical, the wrap is visually undetectable.
 */
export function useMarquee({ speed = 40, itemCount }: UseMarqueeOptions) {
  const setRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const setWidthRef = useRef(0);
  const isPausedRef = useRef(false);
  const isDraggingRef = useRef(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const el = setRef.current;
    if (!el) return;

    const measure = () => {
      setWidthRef.current = el.scrollWidth;
    };
    measure();

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(el);
    window.addEventListener("resize", measure);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [itemCount]);

  useAnimationFrame((_, delta) => {
    if (prefersReducedMotion) return;

    const setWidth = setWidthRef.current;
    if (!setWidth) return;

    if (!isPausedRef.current && !isDraggingRef.current) {
      x.set(x.get() - (speed * delta) / 1000);
    }

    // Seamless infinite wrap in either direction (covers auto-scroll and manual drag).
    if (x.get() <= -setWidth) {
      x.set(x.get() + setWidth);
    } else if (x.get() > 0) {
      x.set(x.get() - setWidth);
    }
  });

  return { setRef, x, isPausedRef, isDraggingRef, prefersReducedMotion };
}

import type { MutableRefObject } from "react";
import { useAnimationFrame, type MotionValue } from "framer-motion";

interface UseAutoScrollOptions {
  x: MotionValue<number>;
  /** Auto-scroll speed in pixels per second. */
  speed?: number;
  /** Width (px) of a single, non-duplicated copy of the track — the wrap distance. */
  wrapWidthRef: MutableRefObject<number>;
  /** True while the user is hovering the carousel. */
  isPausedRef: MutableRefObject<boolean>;
  /** True while a drag or a programmatic snap animation is in progress. */
  isInteractingRef: MutableRefObject<boolean>;
  /** False under prefers-reduced-motion — disables the auto-scroll nudge (wrap logic still runs). */
  enabled: boolean;
}

/**
 * Nudges a Framer Motion `x` value left every frame to drive a continuous marquee,
 * then wraps it by exactly one copy-width once it crosses a boundary in either
 * direction — since the track renders two identical copies of its content, the
 * wrap is visually seamless. Used by useInfiniteCarousel; not tied to any DOM node
 * itself so it composes cleanly with drag and programmatic (arrow-click) scrolling,
 * which both also just read/write the same `x` value.
 */
export function useAutoScroll({
  x,
  speed = 35,
  wrapWidthRef,
  isPausedRef,
  isInteractingRef,
  enabled,
}: UseAutoScrollOptions) {
  useAnimationFrame((_, delta) => {
    const wrapWidth = wrapWidthRef.current;
    if (!wrapWidth) return;

    if (enabled && !isPausedRef.current && !isInteractingRef.current) {
      x.set(x.get() - (speed * delta) / 1000);
    }

    if (x.get() <= -wrapWidth) {
      x.set(x.get() + wrapWidth);
    } else if (x.get() > 0) {
      x.set(x.get() - wrapWidth);
    }
  });
}

import { useCallback, useEffect, useRef, useState } from "react";
import { animate, useMotionValue, useReducedMotion } from "framer-motion";
import { useAutoScroll } from "./useAutoScroll";

const GAP_PX = 32; // matches the track's Tailwind `gap-8`
const ACTIVE_CHECK_INTERVAL_MS = 120;

interface UseInfiniteCarouselOptions {
  /** Number of items in a single (non-duplicated) set. */
  itemCount: number;
  /** Auto-scroll speed in pixels per second. */
  speed?: number;
}

/**
 * Backs an infinite, draggable, arrow-navigable project carousel.
 *
 * Renders as two identical copies of the item list side by side (the caller is
 * responsible for actually rendering both copies); this hook measures the first
 * copy to know the wrap distance and a single card's "step" width, drives a slow
 * continuous auto-scroll (via useAutoScroll) that pauses on hover/drag, exposes
 * `goToNext`/`goToPrev` that spring exactly one card-width at a time, and polls
 * (every ~120ms, not every frame) which rendered card sits nearest the viewport
 * center so the caller can apply "spotlight" styling to it.
 */
export function useInfiniteCarousel({ itemCount, speed = 35 }: UseInfiniteCarouselOptions) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const setRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const x = useMotionValue(0);
  const wrapWidthRef = useRef(0);
  const stepRef = useRef(0);
  const isPausedRef = useRef(false);
  const isInteractingRef = useRef(false);

  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = !!useReducedMotion();

  useEffect(() => {
    const setEl = setRef.current;
    if (!setEl) return;

    const measure = () => {
      wrapWidthRef.current = setEl.scrollWidth;
      const firstCard = setEl.firstElementChild as HTMLElement | null;
      if (firstCard) {
        stepRef.current = firstCard.getBoundingClientRect().width + GAP_PX;
      }
    };
    measure();

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(setEl);
    window.addEventListener("resize", measure);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [itemCount]);

  useAutoScroll({
    x,
    speed,
    wrapWidthRef,
    isPausedRef,
    isInteractingRef,
    enabled: !prefersReducedMotion,
  });

  useEffect(() => {
    const interval = window.setInterval(() => {
      const viewport = viewportRef.current;
      if (!viewport) return;
      const viewportRect = viewport.getBoundingClientRect();
      const viewportCenter = viewportRect.left + viewportRect.width / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;
      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const distance = Math.abs(rect.left + rect.width / 2 - viewportCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex((prev) => (prev === closestIndex ? prev : closestIndex));
    }, ACTIVE_CHECK_INTERVAL_MS);

    return () => window.clearInterval(interval);
  }, []);

  const snapBy = useCallback(
    (direction: 1 | -1) => {
      const step = stepRef.current;
      if (!step) return;
      isInteractingRef.current = true;
      const target = x.get() - direction * step;
      animate(x, target, {
        type: "spring",
        stiffness: 120,
        damping: 18,
        onComplete: () => {
          isInteractingRef.current = false;
        },
      });
    },
    [x]
  );

  const goToNext = useCallback(() => snapBy(1), [snapBy]);
  const goToPrev = useCallback(() => snapBy(-1), [snapBy]);

  const registerCardRef = useCallback(
    (index: number) => (el: HTMLDivElement | null) => {
      cardRefs.current[index] = el;
    },
    []
  );

  return {
    viewportRef,
    setRef,
    x,
    activeIndex,
    isPausedRef,
    isInteractingRef,
    prefersReducedMotion,
    goToNext,
    goToPrev,
    registerCardRef,
  };
}

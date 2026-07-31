import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselControlsProps {
  onPrev: () => void;
  onNext: () => void;
}

const buttonClass =
  "absolute top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full border border-primary/25 bg-background/40 backdrop-blur-md shadow-[0_8px_24px_-10px_hsl(var(--primary)/0.5)] flex items-center justify-center text-primary transition-shadow duration-300 hover:shadow-[0_10px_32px_-8px_hsl(var(--primary)/0.65)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60";

const CarouselControls = ({ onPrev, onNext }: CarouselControlsProps) => (
  <>
    <motion.button
      type="button"
      aria-label="Previous project"
      onClick={onPrev}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
      className={`${buttonClass} left-1 md:left-3 group`}
    >
      <ChevronLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-0.5" />
    </motion.button>
    <motion.button
      type="button"
      aria-label="Next project"
      onClick={onNext}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
      className={`${buttonClass} right-1 md:right-3 group`}
    >
      <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
    </motion.button>
  </>
);

export default CarouselControls;

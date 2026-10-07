import { Variants } from "framer-motion";

// Custom easing cubic-bezier(0.2, 0.7, 0.2, 1)
export const EASE_CURVE = [0.2, 0.7, 0.2, 1] as const;

export const DURATION_FAST = 0.12;
export const DURATION_MED = 0.24;
export const DURATION_SLOW = 0.48;
export const DURATION_DELIBERATE = 0.8;

// Shared Section Fade + Slide Up once on enter (16px translateY, 480ms)
export const fadeInUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION_SLOW,
      ease: EASE_CURVE,
    },
  },
};

// Stagger Container for Children (60ms stagger)
export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

// Hero Masked Text Reveal (translateY 100% -> 0%, 800ms)
export const maskedTextVariants: Variants = {
  hidden: {
    y: "100%",
  },
  visible: {
    y: "0%",
    transition: {
      duration: DURATION_DELIBERATE,
      ease: EASE_CURVE,
    },
  },
};

export const defaultViewport = {
  once: true,
  margin: "-10%",
};

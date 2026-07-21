'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface MotionWrapperProps extends HTMLMotionProps<'div'> {
  variant?: 'fade' | 'slide' | 'scale';
  className?: string;
  children: React.ReactNode;
}

const variants = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    // Duração entre 150ms e 300ms
    transition: { duration: 0.2, ease: 'easeOut' },
  },
  slide: {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
    // Duração entre 150ms e 300ms
    transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
  },
  scale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
    // Duração entre 150ms e 300ms
    transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
  },
};

export const MotionWrapper = React.forwardRef<HTMLDivElement, MotionWrapperProps>(
  ({ variant = 'fade', className, children, ...props }, ref) => {
    const selectedVariant = variants[variant];

    return (
      <motion.div
        ref={ref}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={{
          initial: selectedVariant.initial,
          animate: selectedVariant.animate,
          exit: selectedVariant.exit,
        }}
        transition={selectedVariant.transition}
        className={cn(className)}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

MotionWrapper.displayName = 'MotionWrapper';

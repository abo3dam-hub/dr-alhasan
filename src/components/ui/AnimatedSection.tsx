'use client';

import {motion} from 'framer-motion';
import {ReactNode} from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up'
}: AnimatedSectionProps) {
  const getInitial = () => {
    switch (direction) {
      case 'up':
        return {opacity: 0, y: 40};
      case 'down':
        return {opacity: 0, y: -40};
      case 'left':
        return {opacity: 0, x: 40};
      case 'right':
        return {opacity: 0, x: -40};
      case 'fade':
        return {opacity: 0};
      default:
        return {opacity: 0, y: 40};
    }
  };

  const getAnimate = () => {
    switch (direction) {
      case 'up':
        return {opacity: 1, y: 0};
      case 'down':
        return {opacity: 1, y: 0};
      case 'left':
        return {opacity: 1, x: 0};
      case 'right':
        return {opacity: 1, x: 0};
      case 'fade':
        return {opacity: 1};
      default:
        return {opacity: 1, y: 0};
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={getAnimate()}
      viewport={{once: true, margin: '-50px'}}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

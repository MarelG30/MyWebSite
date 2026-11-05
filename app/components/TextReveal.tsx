"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface TextRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right";
}

export default function TextReveal({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: TextRevealProps) {
  const initialPosition = {
    up: { y: 25, x: 0 },
    left: { x: -25, y: 0 },
    right: { x: 25, y: 0 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...initialPosition[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: false,
        amount: 0.3,
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
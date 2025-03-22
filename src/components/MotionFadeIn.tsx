"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MotionFadeInProps {
  children: ReactNode;
  delay?: number;
}

export const MotionFadeIn = ({ children, delay = 0 }: MotionFadeInProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

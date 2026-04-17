"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  glow?: boolean;
  hover?: boolean;
  className?: string;
}

export function Card({
  children,
  glow = false,
  hover = true,
  className,
}: CardProps) {
  return (
    <motion.div
      className={`${glow ? "glass-card-glow" : "glass-card"} p-6 ${className ?? ""}`}
      whileHover={
        hover
          ? {
              y: -4,
              borderColor: "rgba(0, 255, 135, 0.25)",
              transition: { duration: 0.2, ease: "easeOut" },
            }
          : undefined
      }
    >
      {children}
    </motion.div>
  );
}

"use client";

import { ScrollReveal } from "./ScrollReveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  gradient?: boolean;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  gradient = false,
  centered = true,
  className,
}: SectionHeadingProps) {
  return (
    <ScrollReveal className={`${centered ? "text-center" : ""} ${className ?? ""}`}>
      {eyebrow && (
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-4">
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight ${
          gradient ? "gradient-text" : "text-text-primary"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-text-secondary max-w-2xl leading-relaxed mx-auto">
          {description}
        </p>
      )}
    </ScrollReveal>
  );
}

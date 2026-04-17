"use client";

import { motion } from "framer-motion";
import { Database, Sliders, Shuffle, Target } from "lucide-react";
import Image from "next/image";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/shared/Card";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const stepIcons = [Database, Sliders, Shuffle, Target];
const stepImages = [
  "/images/howit-data.jpg",
  "/images/howit-adjustments.jpg",
  "/images/howit-simulation.jpg",
  "/images/howit-results.jpg",
];

export function HowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-bg-primary">
      <div className="section-container">
        <SectionHeading
          eyebrow="Methodology"
          title="How It Works"
          description="Four steps. 10,000 simulations. One engine powering every prediction."
        />

        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connection line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-border-glow to-transparent" />

          {HOW_IT_WORKS_STEPS.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <ScrollReveal key={step.step} delay={i * 0.1}>
                <Card className="relative text-center h-full">
                  {/* Step number */}
                  <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-accent-dim border border-border-glow flex items-center justify-center">
                    <span className="font-[family-name:var(--font-jetbrains-mono)] text-sm font-bold text-accent">
                      {step.step}
                    </span>
                  </div>

                  {/* Illustration */}
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4">
                    <Image
                      src={stepImages[i]}
                      alt={step.title}
                      fill
                      className="object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent" />
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-12 h-12 rounded-xl bg-accent-dim/80 backdrop-blur-sm flex items-center justify-center">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                    </motion.div>
                  </div>

                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

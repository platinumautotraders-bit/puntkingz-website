"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { heroTextReveal, heroLine } from "@/lib/animations";
import { Button } from "@/components/shared/Button";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { HeroBackground } from "./HeroBackground";
import { TRIAL_CHECKOUT_URL } from "@/lib/constants";

const heroStats = [
  { value: 82, suffix: "%", label: "Winner Accuracy" },
  { value: 43000, suffix: "+", label: "Data Points" },
  { value: 10000, suffix: "", label: "Sims / Match" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden -mt-16 md:-mt-18">
      <HeroBackground />

      <div className="relative z-10 section-container pt-24 pb-16 md:pt-32 md:pb-24">
        <motion.div
          variants={heroTextReveal}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Eyebrow */}
          <motion.p
            variants={heroLine}
            className="text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-accent mb-6"
          >
            NRL Match Predictions
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={heroLine}
            className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
          >
            <span className="gradient-text">10,000 Simulations.</span>
            <br />
            <span className="text-text-primary">Zero Guesswork.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={heroLine}
            className="mt-6 text-base md:text-lg lg:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
          >
            Our V6 Monte Carlo engine simulates every NRL match 10,000 times
            using real player data, weather conditions, and referee tendencies.
            Not AI. Pure mathematics.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={heroLine}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button href={TRIAL_CHECKOUT_URL} size="lg">
              Start Free Trial
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button href="/results" variant="secondary" size="lg">
              See The Results
            </Button>
          </motion.div>

          {/* Mini Stats */}
          <motion.div
            variants={heroLine}
            className="mt-14 flex flex-wrap items-center justify-center gap-8 md:gap-12"
          >
            {heroStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  className="text-2xl md:text-3xl font-bold text-accent"
                />
                <p className="mt-1 text-xs text-text-faint uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 text-text-faint" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

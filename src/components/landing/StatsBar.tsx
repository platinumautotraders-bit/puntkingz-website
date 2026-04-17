"use client";

import { STATS } from "@/lib/constants";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function StatsBar() {
  return (
    <section className="py-8 md:py-12 bg-bg-secondary border-y border-border">
      <ScrollReveal>
        <div className="section-container">
          <div className="glass-card py-6 px-4 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent"
                  />
                  <p className="mt-1.5 text-xs md:text-sm text-text-secondary">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

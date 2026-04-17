"use client";

import {
  Trophy,
  BarChart3,
  Target,
  TrendingUp,
  Activity,
  Eye,
} from "lucide-react";
import { FEATURES } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/shared/Card";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Trophy,
  BarChart3,
  Target,
  TrendingUp,
  Activity,
  Eye,
};

export function Features() {
  return (
    <section className="py-20 md:py-28 bg-bg-secondary">
      <div className="section-container">
        <SectionHeading
          eyebrow="Features"
          title="Everything You Need to Win"
          description="One subscription. Every prediction type. Full transparency."
        />

        <div className="mt-14 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => {
            const Icon = iconMap[feature.icon];
            return (
              <ScrollReveal key={feature.title} delay={i * 0.08}>
                <Card className="h-full">
                  <div className="w-11 h-11 rounded-xl bg-accent-dim border border-border-glow flex items-center justify-center mb-4">
                    {Icon && <Icon className="w-5 h-5 text-accent" />}
                  </div>
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-base font-semibold text-text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {feature.description}
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

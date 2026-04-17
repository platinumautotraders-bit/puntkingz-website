"use client";

import { Check } from "lucide-react";
import { PRICING } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-bg-primary">
      <div className="section-container">
        <SectionHeading
          eyebrow="Pricing"
          title="One Plan. Full Access."
          description="No tiers, no feature gates. Every prediction, every round."
        />

        <div className="mt-14 md:mt-20 max-w-md mx-auto">
          <ScrollReveal>
            <div className="glass-card-glow p-8 md:p-10 text-center relative overflow-hidden">
              {/* Glow effect behind card */}
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

              <div className="relative">
                {/* Trial badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-dim border border-border-glow mb-6">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                    {PRICING.trialDays}-Day Free Trial
                  </span>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="font-[family-name:var(--font-space-grotesk)] text-5xl md:text-6xl font-bold text-text-primary">
                      {PRICING.price}
                    </span>
                    <span className="text-lg text-text-secondary">
                      /{PRICING.period}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 text-left mb-8">
                  {PRICING.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-text-secondary">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button href="#" size="lg" className="w-full">
                  Start Free Trial
                </Button>

                <p className="mt-4 text-xs text-text-faint">
                  Cancel anytime. No lock-in. No hidden fees.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

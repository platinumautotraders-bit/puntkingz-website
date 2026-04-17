"use client";

import { Check, X } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const comparison = [
  {
    category: "Data Approach",
    ai: "Feeds team-level averages into a model",
    mc: "Profiles each of 34 players individually",
  },
  {
    category: "Prediction Method",
    ai: "Pattern matching on historical outcomes",
    mc: "Simulates the actual game 10,000 times",
  },
  {
    category: "Transparency",
    ai: "Black box \u2014 no explanation of why",
    mc: "Full breakdown of every adjustment",
  },
  {
    category: "Player Impact",
    ai: "Crushes individual stats into team averages",
    mc: "Preserves the gap between elite and average",
  },
  {
    category: "Accuracy Ceiling",
    ai: "60-65% \u2014 we tested this across 5 versions",
    mc: "82% winner accuracy this season",
  },
];

export function NotAI() {
  return (
    <section className="py-20 md:py-28 bg-bg-secondary">
      <div className="section-container">
        <SectionHeading
          eyebrow="The Difference"
          title="We Ditched AI. Here's Why."
          description="Versions 1 through 5 used machine learning. LightGBM classifiers. Gradient boosting. They all hit a ceiling. So we built something better."
        />

        <div className="mt-14 md:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left column - story */}
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <p className="text-text-secondary leading-relaxed">
                Machine learning models collapse player-level nuance into team
                averages. The difference between the best prop in the league and
                a mid-tier backup? Averaged out. Gone.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Our V6 Monte Carlo engine takes a fundamentally different
                approach. It profiles every player in the starting 17 using
                their actual match-by-match statistics. Then it builds
                team-level distributions that preserve individual impact.
              </p>
              <p className="text-text-secondary leading-relaxed">
                The simulation models 4 phases of a rugby league game: forward
                dominance, possession chains, zone-based try scoring using
                Poisson distributions, and defensive suppression. Each phase
                feeds into the next, exactly like a real match unfolds.
              </p>
              <p className="text-text-primary font-medium">
                AI learns patterns. Our engine simulates the actual physics of
                rugby league.
              </p>
            </div>
          </ScrollReveal>

          {/* Right column - comparison table */}
          <ScrollReveal direction="right">
            <div className="glass-card-glow overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-3 border-b border-border">
                <div className="p-4" />
                <div className="p-4 text-center border-x border-border">
                  <p className="text-xs uppercase tracking-wider text-loss font-semibold">
                    AI Prediction
                  </p>
                </div>
                <div className="p-4 text-center">
                  <p className="text-xs uppercase tracking-wider text-accent font-semibold">
                    Monte Carlo
                  </p>
                </div>
              </div>

              {/* Rows */}
              {comparison.map((row, i) => (
                <div
                  key={row.category}
                  className={`grid grid-cols-3 ${
                    i < comparison.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <div className="p-4">
                    <p className="text-xs font-semibold text-text-primary">
                      {row.category}
                    </p>
                  </div>
                  <div className="p-4 border-x border-border">
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 text-loss shrink-0 mt-0.5" />
                      <p className="text-xs text-text-secondary">{row.ai}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <p className="text-xs text-text-secondary">{row.mc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

"use client";

import { CheckCircle2, XCircle, Minus } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { Card } from "@/components/shared/Card";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Button } from "@/components/shared/Button";

const overallStats = [
  { value: 82, suffix: "%", label: "Winner Accuracy", sub: "22 games" },
  { value: 78, suffix: "%", label: "Best Bet Rate", sub: "9 picks" },
  { value: 16, suffix: ".0", label: "Margin MAE", sub: "avg pts error" },
];

// Placeholder round data — will be connected to API
const rounds = [
  { round: 1, predictions: 8, correct: 6, bestBets: 2, bestCorrect: 2, accuracy: 75 },
  { round: 2, predictions: 8, correct: 7, bestBets: 3, bestCorrect: 2, accuracy: 88 },
  { round: 3, predictions: 8, correct: 6, bestBets: 2, bestCorrect: 2, accuracy: 75 },
  { round: 4, predictions: 8, correct: 7, bestBets: 3, bestCorrect: 2, accuracy: 88 },
  { round: 5, predictions: 8, correct: 7, bestBets: 3, bestCorrect: 3, accuracy: 88 },
  { round: 6, predictions: 8, correct: 7, bestBets: 2, bestCorrect: 2, accuracy: 88 },
  { round: 7, predictions: null, correct: null, bestBets: null, bestCorrect: null, accuracy: null },
];

export function ResultsContent() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-bg-primary relative">
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(0, 255, 135, 0.04) 0%, transparent 60%)",
        }} />
        <div className="section-container relative">
          <SectionHeading
            eyebrow="Track Record"
            title="Our Results. Fully Transparent."
            description="Every prediction tracked. Every round published. No cherry-picking, no hidden losses."
            gradient
          />
        </div>
      </section>

      {/* Overall Stats */}
      <section className="py-12 md:py-16 bg-bg-secondary border-y border-border">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {overallStats.map((stat) => (
              <ScrollReveal key={stat.label}>
                <Card className="text-center" glow>
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    className="text-4xl md:text-5xl font-bold text-accent"
                  />
                  <p className="mt-2 text-sm font-medium text-text-primary">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-xs text-text-faint">{stat.sub}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Round-by-Round Results */}
      <section className="py-20 md:py-28 bg-bg-primary">
        <div className="section-container">
          <SectionHeading
            eyebrow="2026 Season"
            title="Round-by-Round Breakdown"
            description="Results update automatically after each round is completed."
          />

          <div className="mt-14 md:mt-20 max-w-3xl mx-auto">
            {/* Table Header */}
            <div className="hidden md:grid grid-cols-6 gap-4 px-6 py-3 text-xs uppercase tracking-wider text-text-faint font-semibold border-b border-border">
              <div>Round</div>
              <div className="text-center">Predictions</div>
              <div className="text-center">Correct</div>
              <div className="text-center">Accuracy</div>
              <div className="text-center">Best Bets</div>
              <div className="text-center">BB Correct</div>
            </div>

            {/* Rows */}
            {rounds.map((r, i) => (
              <ScrollReveal key={r.round} delay={i * 0.05}>
                <div
                  className={`grid grid-cols-3 md:grid-cols-6 gap-4 px-6 py-4 items-center ${
                    i < rounds.length - 1 ? "border-b border-border" : ""
                  } ${r.accuracy === null ? "opacity-50" : ""}`}
                >
                  <div className="font-[family-name:var(--font-space-grotesk)] font-semibold text-text-primary">
                    Rd {r.round}
                  </div>
                  <div className="text-center font-[family-name:var(--font-jetbrains-mono)] text-text-secondary text-sm">
                    {r.predictions ?? <Minus className="w-4 h-4 mx-auto text-text-faint" />}
                  </div>
                  <div className="text-center font-[family-name:var(--font-jetbrains-mono)] text-sm">
                    {r.correct !== null ? (
                      <span className="text-accent">{r.correct}</span>
                    ) : (
                      <Minus className="w-4 h-4 mx-auto text-text-faint" />
                    )}
                  </div>
                  <div className="hidden md:flex justify-center">
                    {r.accuracy !== null ? (
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
                          r.accuracy >= 80
                            ? "bg-accent/10 text-accent"
                            : r.accuracy >= 60
                            ? "bg-gold/10 text-gold"
                            : "bg-loss/10 text-loss"
                        }`}
                      >
                        {r.accuracy >= 80 ? (
                          <CheckCircle2 className="w-3 h-3" />
                        ) : (
                          <XCircle className="w-3 h-3" />
                        )}
                        {r.accuracy}%
                      </span>
                    ) : (
                      <span className="text-xs text-text-faint">Upcoming</span>
                    )}
                  </div>
                  <div className="hidden md:block text-center font-[family-name:var(--font-jetbrains-mono)] text-text-secondary text-sm">
                    {r.bestBets ?? <Minus className="w-4 h-4 mx-auto text-text-faint" />}
                  </div>
                  <div className="hidden md:block text-center font-[family-name:var(--font-jetbrains-mono)] text-sm">
                    {r.bestCorrect !== null ? (
                      <span className="text-accent">{r.bestCorrect}</span>
                    ) : (
                      <Minus className="w-4 h-4 mx-auto text-text-faint" />
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-text-faint">
              Season 2026 in progress. Results update after each completed round.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-bg-secondary">
        <div className="section-container text-center">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-text-primary mb-4">
              See this week&apos;s predictions
            </h2>
            <p className="text-text-secondary mb-8 max-w-lg mx-auto">
              Join Punt Kingz and get access to every prediction before kickoff.
            </p>
            <Button href="/#pricing" size="lg">
              Start Free Trial
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

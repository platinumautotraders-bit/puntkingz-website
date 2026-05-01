"use client";

import {
  Users,
  Cloud,
  Scale,
  Flame,
  MapPin,
  Shuffle,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/shared/Card";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Button } from "@/components/shared/Button";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { TRIAL_CHECKOUT_URL } from "@/lib/constants";

const adjustments = [
  {
    icon: Cloud,
    title: "Weather Impact",
    description:
      "Rain increases handling errors, wind disrupts kicking games. We pull live weather data for every venue and adjust forward/kicking phase distributions accordingly.",
  },
  {
    icon: Scale,
    title: "Referee Tendencies",
    description:
      "Some referees blow more penalties against certain play styles. We track per-referee penalty rates and adjust possession distributions based on the assigned match official.",
  },
  {
    icon: MapPin,
    title: "Home Ground Advantage",
    description:
      "Crowd influence on morale, travel fatigue for away teams, and venue familiarity. Our model applies a default 2.5-point home advantage, adjusted per venue.",
  },
  {
    icon: Flame,
    title: "Fatigue and Recovery",
    description:
      "When was their last game? How physical was it? Short turnarounds affect forwards more than backs. We model recovery windows and historical bounce-back performance.",
  },
  {
    icon: BarChart3,
    title: "Elo Ratings",
    description:
      "Historical team strength ratings updated every round. Provides the base probability before player-level adjustments are layered on. Currently 60.1% accurate standalone.",
  },
  {
    icon: Users,
    title: "Lineup Quality",
    description:
      "We compare the announced 17-man squad against the team's average lineup strength from the last 10 matches. Key ins and outs shift the probability up to 6%.",
  },
];

const phases = [
  {
    number: "01",
    title: "Forward Dominance",
    description:
      "Who wins the ruck battle? Modelled from run metres, post-contact metres, tackle breaks, and offloads. Weighted by jersey — props and second-rowers contribute more than outside backs.",
    stat: "Run metres, PCM, tackle breaks, offloads",
  },
  {
    number: "02",
    title: "Possessions",
    description:
      "How many effective possessions each team gets. Driven by errors (lost possession), penalties (lost possession), and forced dropouts (gained possession). Modified by who won the forward battle.",
    stat: "Errors, penalties, forced dropouts",
  },
  {
    number: "03",
    title: "Zone Try Scoring",
    description:
      "Tries are scored by zone — left edge, right edge, middle, and spine. Each zone uses a Poisson distribution derived from line breaks, try assists, and tackle breaks in that zone. This is where individual player talent matters most.",
    stat: "Poisson distribution per zone",
  },
  {
    number: "04",
    title: "Defensive Suppression",
    description:
      "Good defences prevent tries that would otherwise be scored. Modelled from missed tackle rates — fewer missed tackles means a higher chance of suppressing opponent tries. A strong defence can reduce opponent scoring by 15-20%.",
    stat: "Missed tackles, defensive efficiency",
  },
];

export function HowItWorksContent() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-bg-primary relative">
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(0, 255, 135, 0.04) 0%, transparent 60%)",
        }} />
        <div className="section-container relative">
          <SectionHeading
            eyebrow="V6 Engine"
            title="The Engine Behind Every Prediction"
            description="A complete breakdown of how we turn 43,000+ player data points into match predictions you can trust."
            gradient
          />
        </div>
      </section>

      {/* Section 1: Data Foundation */}
      <section className="py-20 md:py-28 bg-bg-secondary">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-4">
                  Step 1
                </p>
                <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-text-primary mb-6">
                  Player-Level Data
                </h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Every prediction starts with raw, per-match player statistics.
                  Not team averages. Not seasonal summaries. Individual
                  performance data for every player in every game since 2020.
                </p>
                <p className="text-text-secondary leading-relaxed mb-4">
                  The database contains 40 statistical columns per player per
                  match: run metres, post-contact metres, tackle breaks, line
                  breaks, try assists, missed tackles, errors, penalties, kick
                  metres, forced dropouts, and more.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  When team lists are announced, the engine profiles each of the
                  17 players using their last 5 matches. Stats are weighted with
                  exponential decay — recent form matters more than older
                  performance. Attack stats are Elo-adjusted so a good game
                  against the top team counts for more than a good game against
                  the bottom team.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-4">
                <Card className="text-center">
                  <AnimatedCounter
                    target={43000}
                    suffix="+"
                    className="text-3xl font-bold text-accent"
                  />
                  <p className="mt-2 text-xs text-text-secondary">
                    Player-match rows
                  </p>
                </Card>
                <Card className="text-center">
                  <AnimatedCounter
                    target={40}
                    className="text-3xl font-bold text-accent"
                  />
                  <p className="mt-2 text-xs text-text-secondary">
                    Stats per player
                  </p>
                </Card>
                <Card className="text-center">
                  <AnimatedCounter
                    target={17}
                    className="text-3xl font-bold text-accent"
                  />
                  <p className="mt-2 text-xs text-text-secondary">
                    Players profiled per team
                  </p>
                </Card>
                <Card className="text-center">
                  <AnimatedCounter
                    target={5}
                    className="text-3xl font-bold text-gold"
                  />
                  <p className="mt-2 text-xs text-text-secondary">
                    Recent matches weighted
                  </p>
                </Card>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 2: 4-Phase Simulation */}
      <section className="py-20 md:py-28 bg-bg-primary">
        <div className="section-container">
          <SectionHeading
            eyebrow="Step 2"
            title="4-Phase Match Simulation"
            description="Each simulation models a complete NRL game through four sequential phases. Each phase feeds into the next, exactly like a real match."
          />

          <div className="mt-14 md:mt-20 space-y-6">
            {phases.map((phase, i) => (
              <ScrollReveal key={phase.number} delay={i * 0.1}>
                <Card className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="shrink-0 w-14 h-14 rounded-xl bg-accent-dim border border-border-glow flex items-center justify-center">
                    <span className="font-[family-name:var(--font-jetbrains-mono)] text-lg font-bold text-accent">
                      {phase.number}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-text-primary mb-2">
                      {phase.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed mb-3">
                      {phase.description}
                    </p>
                    <p className="text-xs font-[family-name:var(--font-jetbrains-mono)] text-text-faint">
                      Inputs: {phase.stat}
                    </p>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-12 text-center">
            <div className="glass-card-glow inline-flex items-center gap-3 px-6 py-3">
              <Shuffle className="w-5 h-5 text-accent" />
              <span className="text-sm text-text-secondary">
                Each phase runs{" "}
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-accent font-semibold">
                  10,000
                </span>{" "}
                times using statistical distributions, not fixed values
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 3: Contextual Adjustments */}
      <section className="py-20 md:py-28 bg-bg-secondary">
        <div className="section-container">
          <SectionHeading
            eyebrow="Step 3"
            title="Contextual Intelligence"
            description="Before simulation, real-world factors modify the base probabilities. These adjustments are what separate a spreadsheet from a prediction engine."
          />

          <div className="mt-14 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {adjustments.map((adj, i) => {
              const Icon = adj.icon;
              return (
                <ScrollReveal key={adj.title} delay={i * 0.08}>
                  <Card className="h-full">
                    <div className="w-11 h-11 rounded-xl bg-accent-dim border border-border-glow flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-[family-name:var(--font-space-grotesk)] text-base font-semibold text-text-primary mb-2">
                      {adj.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {adj.description}
                    </p>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4: Why Not AI */}
      <section className="py-20 md:py-28 bg-bg-primary">
        <div className="section-container max-w-3xl">
          <SectionHeading
            eyebrow="The Decision"
            title="Why We Abandoned Machine Learning"
          />

          <div className="mt-12 space-y-6">
            <ScrollReveal>
              <p className="text-text-secondary leading-relaxed">
                Versions 1 through 5 of Punt Kingz used LightGBM classifiers —
                a gradient boosting machine learning model. We trained on
                historical match data, tuned hyperparameters with Optuna, and
                built temporal train/test splits.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-text-secondary leading-relaxed">
                The result? A ceiling of 60-65% winner accuracy. No matter how
                many features we engineered, no matter how we structured the
                training pipeline, the model couldn&apos;t break through. The
                fundamental problem: ML models collapse player-level data into
                team aggregates. The difference between having the best
                halfback in the league versus an average one gets averaged away.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-text-secondary leading-relaxed">
                The V6 Monte Carlo engine takes the opposite approach. Instead
                of learning patterns from outcomes, it simulates the process
                that generates outcomes. Player-level statistical distributions
                are preserved. Zone-by-zone matchups are modelled. The simulation
                IS the prediction — not a pattern match, but a mathematical
                reconstruction of how NRL games actually unfold.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-text-primary font-medium text-lg">
                82% winner accuracy. That is what happens when you simulate the
                game instead of guessing the outcome.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-bg-secondary">
        <div className="section-container text-center">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Ready to see the predictions?
            </h2>
            <p className="text-text-secondary mb-8 max-w-lg mx-auto">
              Start your 7-day free trial. Full access to every prediction,
              every round.
            </p>
            <Button href={TRIAL_CHECKOUT_URL} size="lg">
              Start Free Trial
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

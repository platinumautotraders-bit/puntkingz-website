"use client";

import { ArrowRight, Mail, Globe } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Card } from "@/components/shared/Card";
import { Button } from "@/components/shared/Button";

export function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-bg-primary relative">
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(0, 255, 135, 0.04) 0%, transparent 60%)",
        }} />
        <div className="section-container relative">
          <SectionHeading
            eyebrow="About"
            title="Built by a Punter, for Punters."
            description="Frustrated by AI tools that were just guessing in disguise, we built a simulation engine grounded in real mathematics."
            gradient
          />
        </div>
      </section>

      {/* The Story */}
      <section className="py-20 md:py-28 bg-bg-secondary">
        <div className="section-container max-w-3xl">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl md:text-3xl font-bold text-text-primary mb-8">
              The Story
            </h2>
          </ScrollReveal>

          <div className="space-y-6">
            <ScrollReveal>
              <p className="text-text-secondary leading-relaxed">
                Every NRL tipping tool on the market claims to use &ldquo;AI&rdquo; or
                &ldquo;machine learning.&rdquo; We used those too — five different versions
                of them. LightGBM classifiers. Gradient boosting with Optuna
                hyperparameter tuning. Temporal train/test splits on years of
                historical data.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-text-secondary leading-relaxed">
                The best any of them could do was 60-65% winner accuracy. The
                fundamental problem was clear: machine learning models treat
                teams as single entities. They average out individual player
                impact, crush zone-by-zone matchup data into aggregate
                features, and lose the granularity that separates a close game
                from a blowout.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-text-secondary leading-relaxed">
                So we scrapped it all and started from scratch. Instead of
                training a model to predict outcomes from patterns, we built an
                engine that simulates how outcomes are generated. Player-level
                statistical distributions. Four sequential game phases.
                Contextual adjustments for weather, referee, and fatigue. 10,000
                Monte Carlo iterations per match.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-text-primary font-medium text-lg">
                The V6 engine is the result. 82% winner accuracy. Not because we
                found a better algorithm — because we asked a better question.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The Philosophy */}
      <section className="py-20 md:py-28 bg-bg-primary">
        <div className="section-container max-w-3xl">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl md:text-3xl font-bold text-text-primary mb-8">
              The Philosophy
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal delay={0.05}>
              <Card className="h-full">
                <h3 className="font-[family-name:var(--font-space-grotesk)] font-semibold text-text-primary mb-2">
                  Transparency Over Hype
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Every prediction includes a full breakdown of the adjustments
                  that shaped it. You can see exactly why we picked a winner,
                  what the weather impact was, and how the referee factor
                  shifted the odds. No black boxes.
                </p>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <Card className="h-full">
                <h3 className="font-[family-name:var(--font-space-grotesk)] font-semibold text-text-primary mb-2">
                  Mathematics Over Marketing
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  We do not use the word &ldquo;AI&rdquo; because it does not describe what
                  we do. Monte Carlo simulation is a well-established
                  mathematical technique used in finance, physics, and
                  engineering. We applied it to rugby league.
                </p>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <Card className="h-full">
                <h3 className="font-[family-name:var(--font-space-grotesk)] font-semibold text-text-primary mb-2">
                  Public Track Record
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Our results page tracks every prediction, every round. Wins
                  and losses. No selective disclosure. If you are paying for
                  predictions, you deserve to see the track record before you
                  commit.
                </p>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Card className="h-full">
                <h3 className="font-[family-name:var(--font-space-grotesk)] font-semibold text-text-primary mb-2">
                  Player Data, Not Team Averages
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  The engine profiles all 17 players in a lineup individually.
                  When a key player is out or a debutant comes in, the
                  prediction changes accordingly. Team averages cannot capture
                  this.
                </p>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 md:py-28 bg-bg-secondary">
        <div className="section-container max-w-xl text-center">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl md:text-3xl font-bold text-text-primary mb-4">
              Get in Touch
            </h2>
            <p className="text-text-secondary mb-8">
              Questions, feedback, or partnership inquiries.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Card className="flex items-center gap-3 !p-4">
                <Mail className="w-5 h-5 text-accent" />
                <a
                  href="mailto:hello@puntkingz.com"
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  hello@puntkingz.com
                </a>
              </Card>
              <Card className="flex items-center gap-3 !p-4">
                <Globe className="w-5 h-5 text-accent" />
                <span className="text-sm text-text-secondary">
                  puntkingz.com
                </span>
              </Card>
            </div>

            <div className="mt-12">
              <Button href="/#pricing" size="lg">
                Start Free Trial
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

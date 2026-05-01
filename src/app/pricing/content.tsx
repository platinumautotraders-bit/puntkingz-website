"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Plus, Minus, ArrowRight, Shield, Clock, CreditCard } from "lucide-react";
import { PRICING, TRIAL_CHECKOUT_URL } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Card } from "@/components/shared/Card";

const billingFAQ = [
  {
    q: "Do I need a credit card for the free trial?",
    a: "Details will be confirmed at launch. The trial gives you full, unrestricted access for 7 days.",
  },
  {
    q: "How does billing work?",
    a: "After your trial ends, you are billed $29.90 per week. Billing cycles run weekly from your subscription start date.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Cancel before your next billing cycle and you will not be charged again. No lock-in, no cancellation fees.",
  },
  {
    q: "Is there a monthly or annual option?",
    a: "We are considering discounted monthly and annual plans. For now, weekly billing gives you maximum flexibility.",
  },
];

const guarantees = [
  {
    icon: Shield,
    title: "Transparent Results",
    description: "Every prediction tracked publicly. No cherry-picking.",
  },
  {
    icon: Clock,
    title: "Cancel Anytime",
    description: "No lock-in. No fees. Pause or stop whenever you want.",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Processed via Stripe. We never see your card details.",
  },
];

function BillingFAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left group"
      >
        <span className="text-sm font-medium text-text-primary group-hover:text-accent transition-colors pr-4">
          {q}
        </span>
        <span className="shrink-0 w-7 h-7 rounded-full bg-bg-card border border-border flex items-center justify-center">
          {open ? (
            <Minus className="w-3.5 h-3.5 text-accent" />
          ) : (
            <Plus className="w-3.5 h-3.5 text-text-secondary" />
          )}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-sm text-text-secondary leading-relaxed">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function PricingContent() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-bg-primary relative">
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(0, 255, 135, 0.04) 0%, transparent 60%)",
        }} />
        <div className="section-container relative">
          <SectionHeading
            eyebrow="Pricing"
            title="One Plan. Full Access."
            description="No tiers, no feature gates. Every prediction, every round, every match."
            gradient
          />

          {/* Pricing Card */}
          <div className="mt-14 md:mt-20 max-w-md mx-auto">
            <ScrollReveal>
              <div className="glass-card-glow p-8 md:p-10 text-center relative overflow-hidden">
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

                <div className="relative">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-dim border border-border-glow mb-6">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                      {PRICING.trialDays}-Day Free Trial
                    </span>
                  </div>

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

                  <Button href={TRIAL_CHECKOUT_URL} size="lg" className="w-full">
                    Start Free Trial
                    <ArrowRight className="ml-2 w-4 h-4" />
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

      {/* Guarantees */}
      <section className="py-16 md:py-20 bg-bg-secondary">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guarantees.map((g, i) => {
              const Icon = g.icon;
              return (
                <ScrollReveal key={g.title} delay={i * 0.1}>
                  <Card className="text-center h-full">
                    <div className="w-11 h-11 mx-auto rounded-xl bg-accent-dim border border-border-glow flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-[family-name:var(--font-space-grotesk)] text-base font-semibold text-text-primary mb-2">
                      {g.title}
                    </h3>
                    <p className="text-sm text-text-secondary">
                      {g.description}
                    </p>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Billing FAQ */}
      <section className="py-20 md:py-28 bg-bg-primary">
        <div className="section-container max-w-2xl">
          <SectionHeading
            eyebrow="Billing"
            title="Pricing FAQ"
          />

          <div className="mt-12">
            {billingFAQ.map((item) => (
              <BillingFAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Responsible Gambling */}
      <section className="py-12 bg-bg-secondary border-t border-border">
        <div className="section-container max-w-2xl text-center">
          <p className="text-xs text-text-faint leading-relaxed">
            Punt Kingz provides statistical predictions for entertainment and
            informational purposes. Gambling involves risk. If you or someone you
            know has a gambling problem, contact the National Gambling Helpline
            on 1800 858 858 or visit{" "}
            <a
              href="https://www.gambleaware.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary underline hover:text-text-primary"
            >
              gambleaware.com.au
            </a>
            . 18+ only. Please gamble responsibly.
          </p>
        </div>
      </section>
    </>
  );
}

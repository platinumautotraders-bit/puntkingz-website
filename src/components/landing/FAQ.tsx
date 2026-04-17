"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <ScrollReveal delay={index * 0.05}>
      <div className="border-b border-border">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between py-5 text-left group"
        >
          <span className="font-[family-name:var(--font-space-grotesk)] text-base font-medium text-text-primary group-hover:text-accent transition-colors pr-4">
            {question}
          </span>
          <span className="shrink-0 w-8 h-8 rounded-full bg-bg-card border border-border flex items-center justify-center">
            {open ? (
              <Minus className="w-4 h-4 text-accent" />
            ) : (
              <Plus className="w-4 h-4 text-text-secondary" />
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
              <p className="pb-5 text-sm text-text-secondary leading-relaxed pr-12">
                {answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ScrollReveal>
  );
}

export function FAQ() {
  return (
    <section className="py-20 md:py-28 bg-bg-secondary">
      <div className="section-container">
        <SectionHeading
          eyebrow="FAQ"
          title="Common Questions"
          description="Straight answers. No jargon."
        />

        <div className="mt-14 md:mt-20 max-w-2xl mx-auto">
          {FAQ_ITEMS.map((item, i) => (
            <FAQItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const screenshots = [
  {
    src: "/images/app-mockup-dashboard.jpg",
    alt: "Punt Kingz NRL Round 2 dashboard showing Knights vs Sea Eagles best bet at 64% confidence",
    caption: "Match Predictions",
  },
  {
    src: "/images/app-mockup-matchdetail.jpg",
    alt: "Punt Kingz NRL match detail showing Knights 64% win probability over Sea Eagles with point band analysis",
    caption: "Win Probability",
  },
  {
    src: "/images/app-mockup-bands.jpg",
    alt: "Punt Kingz NRL point band distribution showing 50-59 at 34% with HIGH confidence and Elo ratings",
    caption: "Point Band Analysis",
  },
  {
    src: "/images/app-mockup-result.jpg",
    alt: "Punt Kingz NRL result verification showing Knights correctly predicted by 18 pts, actual win by 20",
    caption: "Verified Result",
  },
];

function PhoneMockup({
  src,
  alt,
  caption,
  index,
}: {
  src: string;
  alt: string;
  caption: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-150, 150], [5, -5]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-150, 150], [-5, 5]), {
    stiffness: 300,
    damping: 30,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <ScrollReveal delay={index * 0.15}>
      <motion.div
        ref={ref}
        style={{ y, perspective: 800 }}
        className="flex flex-col items-center"
      >
        <motion.div
          style={{ rotateX, rotateY }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative w-[220px] md:w-[260px] rounded-[2rem] overflow-hidden border-2 border-border bg-bg-card shadow-2xl shadow-black/40"
        >
          {/* Phone notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-b-2xl z-10" />

          <Image
            src={src}
            alt={alt}
            width={390}
            height={844}
            className="w-full h-auto"
          />
        </motion.div>

        <p className="mt-4 text-sm font-medium text-text-secondary">{caption}</p>
      </motion.div>
    </ScrollReveal>
  );
}

export function AppPreview() {
  return (
    <section className="py-20 md:py-28 bg-bg-primary overflow-hidden">
      <div className="section-container">
        <SectionHeading
          eyebrow="The App"
          title="See It In Action"
          description="Real predictions. Real data. Full transparency on every pick."
        />

        <div className="mt-14 md:mt-20 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10">
          {screenshots.map((shot, i) => (
            <PhoneMockup key={shot.caption} index={i} {...shot} />
          ))}
        </div>
      </div>
    </section>
  );
}

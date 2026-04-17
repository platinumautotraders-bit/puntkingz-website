import type { Metadata } from "next";
import { HowItWorksContent } from "./content";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Inside the V6 Monte Carlo engine: player profiling, 4-phase match simulation, contextual adjustments, and 10,000 iterations per match.",
};

export default function HowItWorksPage() {
  return <HowItWorksContent />;
}

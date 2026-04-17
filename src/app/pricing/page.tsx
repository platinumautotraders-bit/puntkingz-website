import type { Metadata } from "next";
import { PricingContent } from "./content";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "$29.90/week for full access to every NRL prediction. 7-day free trial. Cancel anytime.",
};

export default function PricingPage() {
  return <PricingContent />;
}

import type { Metadata } from "next";
import { AboutContent } from "./content";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Punt Kingz: why we built a Monte Carlo simulation engine for NRL predictions and abandoned AI entirely.",
};

export default function AboutPage() {
  return <AboutContent />;
}

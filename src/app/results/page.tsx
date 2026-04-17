import type { Metadata } from "next";
import { ResultsContent } from "./content";

export const metadata: Metadata = {
  title: "Results",
  description:
    "Track our prediction accuracy in real time. Round-by-round results, winner accuracy, and best bet rate for the 2026 NRL season.",
};

export default function ResultsPage() {
  return <ResultsContent />;
}

import { Hero } from "@/components/landing/Hero";
import { StatsBar } from "@/components/landing/StatsBar";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { NotAI } from "@/components/landing/NotAI";
import { AppPreview } from "@/components/landing/AppPreview";
import { Features } from "@/components/landing/Features";
import { Pricing } from "@/components/landing/Pricing";
import { FAQ } from "@/components/landing/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <HowItWorks />
      <NotAI />
      <AppPreview />
      <Features />
      <Pricing />
      <FAQ />
    </>
  );
}

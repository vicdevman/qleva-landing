import type { Metadata } from 'next';

import { CTA } from "@/components/landing/cta";
import { FeatureGrid } from "@/components/landing/feature-grid";
import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { ProblemSolution } from "@/components/landing/problem-solution";
import { Roadmap } from "@/components/landing/roadmap";
import { SiteHeader } from "@/components/landing/site-header";

export const metadata: Metadata = {
  other: {
    'base:app_id': '69e9fc161eb4a1de6a95854f',
  },
};

export default function Home() {
  return (
    <div className="min-h-full bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <FeatureGrid />
        <ProblemSolution />
        <Roadmap />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

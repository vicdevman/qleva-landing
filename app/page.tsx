import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { FeaturesTrustedBy } from "@/components/site/features";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden">
      {/* Optional ambient background effect */}
      <div className="absolute inset-0 bg-[url('/hero.png')] bg-cover bg-center opacity-0" aria-hidden="true" />
      
      <Navbar />
      <Hero />
      <FeaturesTrustedBy />
    </main>
  );
}

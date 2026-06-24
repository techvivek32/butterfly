import { AxnixNav } from "@/components/sections/AxnixNav";
import { AxnixHero } from "@/components/sections/AxnixHero";
import { LogoCloud } from "@/components/sections/LogoCloud";
import { AxnixSolution } from "@/components/sections/AxnixSolution";
import { AxnixMission } from "@/components/sections/AxnixMission";
import { AxnixOnTheGo } from "@/components/sections/AxnixOnTheGo";
import { AxnixMovement } from "@/components/sections/AxnixMovement";
import { AxnixStats } from "@/components/sections/AxnixStats";
import { AxnixIncluded } from "@/components/sections/AxnixIncluded";
import { AxnixPricing } from "@/components/sections/AxnixPricing";
import { AxnixTestimonials } from "@/components/sections/AxnixTestimonials";
import { AxnixFaq } from "@/components/sections/AxnixFaq";
import { AxnixFooter } from "@/components/sections/AxnixFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f4f5f3]">
      <AxnixNav />
      <main className="overflow-x-hidden">
        <AxnixHero />
        <LogoCloud />
        <AxnixSolution />
        <AxnixMission />
        <AxnixOnTheGo />
        <AxnixMovement />
        <AxnixIncluded />
        <AxnixStats />
        <AxnixPricing />
        <AxnixTestimonials />
        <AxnixFaq />
      </main>
      <AxnixFooter />
    </div>
  );
}

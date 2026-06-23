import { AxnixNav } from "@/components/sections/AxnixNav";
import { AxnixHero } from "@/components/sections/AxnixHero";
import { LogoCloud } from "@/components/sections/LogoCloud";
import { AxnixSolution } from "@/components/sections/AxnixSolution";
import { AxnixMission } from "@/components/sections/AxnixMission";
import { AxnixOnTheGo } from "@/components/sections/AxnixOnTheGo";
import { AxnixMovement } from "@/components/sections/AxnixMovement";
import { AxnixStats } from "@/components/sections/AxnixStats";
import { AxnixIncluded } from "@/components/sections/AxnixIncluded";

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
      </main>
    </div>
  );
}

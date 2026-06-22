import { Announcement } from "@/components/sections/Announcement";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Awards } from "@/components/sections/Awards";
import { Solution } from "@/components/sections/Solution";
import { Pillars } from "@/components/sections/Pillars";
import { Movement } from "@/components/sections/Movement";
import { Features } from "@/components/sections/Features";
import { Included } from "@/components/sections/Included";
import { OnTheGo } from "@/components/sections/OnTheGo";
import { Pricing } from "@/components/sections/Pricing";
import { Stories } from "@/components/sections/Stories";
import { Integrations } from "@/components/sections/Integrations";
import { CtaBand } from "@/components/sections/CtaBand";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Announcement />
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <Stats />
        <Awards />
        <Solution />
        <div className="py-10 sm:py-16">
          <Pillars />
        </div>
        <Movement />
        <Features />
        <div className="py-10 sm:py-16">
          <Included />
        </div>
        <OnTheGo />
        <Pricing />
        <div className="py-10 sm:py-16">
          <Stories />
        </div>
        <Integrations />
        <div className="py-10 sm:py-16">
          <CtaBand />
        </div>
      </main>
      <Footer />
    </>
  );
}

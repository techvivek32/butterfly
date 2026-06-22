import { Reveal } from "@/components/ui/Reveal";
import { Marquee } from "@/components/ui/Marquee";
import { GlowOrbs } from "@/components/ui/Decor";
import { INTEGRATIONS } from "@/lib/data";
import { cn } from "@/lib/utils";

// Cycle of lettermark backgrounds — gradients + solid wing colors for variety.
const MARKS = [
  "bg-brand-gradient",
  "bg-wing-gradient",
  "bg-wing-violet",
  "bg-wing-sky",
  "bg-wing-teal",
  "bg-wing-fuchsia",
  "bg-wing-amber",
  "bg-brand-600",
] as const;

function IntegrationChip({ name, index }: { name: string; index: number }) {
  return (
    <div className="glass-card group/chip flex min-w-fit items-center gap-2.5 rounded-2xl px-5 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card">
      <span
        className={cn(
          "grid h-8 w-8 place-items-center rounded-lg text-sm font-bold text-white shadow-soft transition-transform duration-300 group-hover/chip:scale-110",
          MARKS[index % MARKS.length],
        )}
      >
        {name.charAt(0)}
      </span>
      <span className="whitespace-nowrap font-semibold text-ink-soft">{name}</span>
    </div>
  );
}

export function Integrations() {
  // Split the integrations roughly in half for the two opposing rows.
  const mid = Math.ceil(INTEGRATIONS.length / 2);
  const rowOne = INTEGRATIONS.slice(0, mid);
  const rowTwo = INTEGRATIONS.slice(mid);

  return (
    <section
      id="integrations"
      className="relative overflow-hidden bg-mesh-light py-20 sm:py-28"
    >
      <GlowOrbs />

      <div className="section relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="chip mx-auto mb-5 inline-flex">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            300+ native integrations
          </span>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Integrates With Your{" "}
            <span className="text-gradient">Favorite Tools</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-muted">
            Connect Butterfly with the apps you already love — no code, no
            friction, just one platform that talks to everything.
          </p>
        </Reveal>
      </div>

      <Reveal
        direction="none"
        delay={0.1}
        className="relative mt-14 sm:mt-16"
      >
        <div className="flex flex-col gap-5 sm:gap-6">
          <Marquee speed={38}>
            {rowOne.map((name, i) => (
              <IntegrationChip key={`r1-${name}`} name={name} index={i} />
            ))}
          </Marquee>

          <Marquee reverse speed={44}>
            {rowTwo.map((name, i) => (
              <IntegrationChip key={`r2-${name}`} name={name} index={i + 3} />
            ))}
          </Marquee>
        </div>
      </Reveal>

      <div className="section relative mt-14 sm:mt-16">
        <Reveal direction="up" delay={0.15} className="text-center">
          <p className="text-sm text-ink-muted">
            Don&apos;t see your tool? Build anything with our{" "}
            <span className="font-semibold text-brand-700">
              open API &amp; webhooks
            </span>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}

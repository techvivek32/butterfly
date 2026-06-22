import { Award, Medal, Trophy, Star } from "lucide-react";
import { AWARDS } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { Marquee } from "@/components/ui/Marquee";
import { cn } from "@/lib/utils";

/**
 * Decorative medal/ribbon SVG. Renders a shield + crest with two ribbon tails,
 * tinted with the award color. Pure SVG so it scales crisply and has no images.
 */
function RibbonMedal({ color, idSuffix }: { color: string; idSuffix: string }) {
  const gid = `award-grad-${idSuffix}`;
  const sid = `award-shine-${idSuffix}`;
  return (
    <svg
      viewBox="0 0 48 60"
      className="h-11 w-11 drop-shadow-sm"
      aria-hidden
      fill="none"
    >
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.95" />
          <stop offset="100%" stopColor={color} stopOpacity="0.55" />
        </linearGradient>
        <radialGradient id={sid} cx="0.35" cy="0.3" r="0.8">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="55%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ribbon tails */}
      <path d="M18 34 L11 56 L18 50 L22 57 L26 40 Z" fill={color} opacity="0.85" />
      <path d="M30 34 L37 56 L30 50 L26 57 L22 40 Z" fill={color} opacity="0.6" />

      {/* outer ring */}
      <circle cx="24" cy="22" r="18" fill={`url(#${gid})`} />
      <circle cx="24" cy="22" r="18" stroke="#ffffff" strokeWidth="1.4" opacity="0.65" />

      {/* inner disc */}
      <circle cx="24" cy="22" r="12.5" fill="#ffffff" />
      <circle cx="24" cy="22" r="12.5" stroke={color} strokeWidth="1.2" opacity="0.4" />

      {/* notched gear edge for a "medal" feel */}
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i / 12) * Math.PI * 2;
        const x = 24 + Math.cos(a) * 15.5;
        const y = 22 + Math.sin(a) * 15.5;
        return <circle key={i} cx={x} cy={y} r="1.1" fill="#ffffff" opacity="0.85" />;
      })}

      {/* center star */}
      <path
        d="M24 14.5 l1.9 3.9 4.3 0.6 -3.1 3 0.7 4.3 -3.8 -2 -3.8 2 0.7 -4.3 -3.1 -3 4.3 -0.6 Z"
        fill={color}
      />

      {/* glossy highlight */}
      <circle cx="24" cy="22" r="18" fill={`url(#${sid})`} />
    </svg>
  );
}

/** Cycle a handful of lucide icons so badges feel varied alongside the SVG medal. */
const trophyIcons = [Trophy, Medal, Award, Star] as const;

export function Awards() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      {/* soft backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-mesh-light opacity-60" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

      <div className="section">
        <Reveal direction="up" amount={0.2}>
          <div className="mx-auto max-w-3xl text-center">
            <span className="chip mx-auto inline-flex items-center gap-1.5">
              <Trophy className="h-3.5 w-3.5 text-wing-amber" />
              Recognised by the industry
            </span>

            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              We are in the business of helping you{" "}
              <span className="text-gradient">grow your business</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base text-ink-muted sm:text-lg">
              Butterfly is the AI-powered operating system powering the growth of
              businesses around the world.
            </p>

            {/* tiny star strip for extra polish */}
            <div className="mt-5 flex items-center justify-center gap-1.5 text-wing-amber">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
              <span className="ml-2 text-sm font-semibold text-ink-soft">
                Loved by 60,000+ teams
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal direction="up" delay={0.1} amount={0.1}>
          <div className="relative mt-14">
            {/* glow under the band */}
            <div className="pointer-events-none absolute inset-x-8 -bottom-6 -z-10 h-24 rounded-full bg-brand-400/15 blur-3xl" />

            <Marquee speed={28}>
              {AWARDS.map((award, i) => {
                const FallbackIcon = trophyIcons[i % trophyIcons.length];
                const useMedal = i % 2 === 0;
                return (
                  <div
                    key={`${award.top}-${award.main}-${i}`}
                    className="group relative mx-1 min-w-[150px] overflow-hidden rounded-xl glass-card px-4 py-3 transition-transform duration-300 hover:-translate-y-1"
                  >
                    {/* top accent bar in award color */}
                    <span
                      className="absolute inset-x-0 top-0 h-1 rounded-t-xl"
                      style={{
                        backgroundImage: `linear-gradient(90deg, ${award.color}, ${award.color}88)`,
                      }}
                    />

                    {/* faint color wash that lifts on hover */}
                    <span
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{
                        background: `radial-gradient(120px 80px at 50% 0%, ${award.color}22, transparent 70%)`,
                      }}
                    />

                    <div className="relative flex flex-col items-center gap-1 text-center">
                      <div className="flex h-12 items-center justify-center">
                        {useMedal ? (
                          <RibbonMedal color={award.color} idSuffix={`aw-${i}`} />
                        ) : (
                          <span
                            className="flex h-11 w-11 items-center justify-center rounded-full ring-1 ring-inset ring-black/5 transition-transform duration-300 group-hover:scale-110"
                            style={{
                              backgroundImage: `linear-gradient(135deg, ${award.color}26, ${award.color}10)`,
                            }}
                          >
                            <FallbackIcon
                              className="h-6 w-6"
                              style={{ color: award.color }}
                            />
                          </span>
                        )}
                      </div>

                      <span className="text-[9px] font-semibold uppercase tracking-wide text-ink-muted">
                        {award.top}
                      </span>
                      <span className="font-display text-sm font-extrabold leading-tight text-ink">
                        {award.main}
                      </span>
                      <span className="text-[10px] leading-tight text-ink-muted">
                        {award.sub}
                      </span>
                    </div>
                  </div>
                );
              })}
            </Marquee>
          </div>
        </Reveal>

        {/* trust footnote */}
        <Reveal direction="up" delay={0.15} amount={0.4}>
          <p className={cn(
            "mt-12 text-center text-xs font-medium uppercase tracking-[0.2em] text-ink-muted",
          )}>
            Top-rated across G2 &middot; Capterra &middot; GetApp &middot; Software Advice
          </p>
        </Reveal>
      </div>
    </section>
  );
}

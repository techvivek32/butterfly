import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { Avatar } from "@/components/mockups/Frames";
import { Stars } from "@/components/mockups/Charts";
import { ButterflyMark } from "@/components/brand/ButterflyMark";

export function Stories() {
  return (
    <section id="stories" className="py-20 sm:py-28">
      <div className="section">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0a1410] via-[#06231a] to-[#072a3a] p-8 sm:p-14">
          {/* Blurred ambient orbs */}
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-brand-500/30 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-wing-violet/30 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-28 left-1/3 h-80 w-80 rounded-full bg-wing-sky/20 blur-3xl"
          />

          {/* Fine grid texture */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-grid opacity-[0.04]"
          />

          {/* Drifting butterfly accents */}
          <ButterflyMark
            idSuffix="stories-fly-1"
            flutter
            className="pointer-events-none absolute right-10 top-10 hidden h-10 w-10 opacity-30 sm:block"
          />
          <ButterflyMark
            idSuffix="stories-fly-2"
            flutter
            className="pointer-events-none absolute bottom-12 left-8 hidden h-8 w-8 opacity-25 lg:block"
          />

          <div className="relative">
            {/* Header */}
            <Reveal direction="up" className="mx-auto max-w-2xl text-center">
              <span className="chip mb-5 inline-flex items-center gap-1.5 border-white/15 bg-white/5 text-white/80">
                <Star className="h-3.5 w-3.5 fill-wing-amber text-wing-amber" />
                Loved by 60,000+ businesses
              </span>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Discover More{" "}
                <span className="bg-gradient-to-r from-brand-300 via-wing-teal to-wing-sky bg-clip-text text-transparent">
                  Success Stories!
                </span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
                Real teams, real growth. See how founders and agencies turned
                Butterfly into their everyday operating system.
              </p>
              <div className="mt-5 flex items-center justify-center gap-2">
                <Stars rating={5} size={16} />
                <span className="text-xs font-medium text-white/55">
                  4.9/5 average across 2,400+ reviews
                </span>
              </div>
            </Reveal>

            {/* Testimonial grid */}
            <RevealStagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {TESTIMONIALS.map((t) => (
                <RevealItem key={t.name}>
                  <figure className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08]">
                    {/* Accent glow on hover */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-60"
                      style={{ background: t.color }}
                    />

                    <div className="relative flex h-full flex-col">
                      {/* Quote mark */}
                      <span
                        aria-hidden
                        className="font-display text-4xl leading-none text-brand-400/50"
                      >
                        &ldquo;
                      </span>

                      {/* Quote */}
                      <blockquote className="mt-1 flex-1 text-sm leading-relaxed text-white/90">
                        {t.quote}
                      </blockquote>

                      {/* Rating */}
                      <div className="mt-4">
                        <Stars rating={5} />
                      </div>

                      {/* Author */}
                      <figcaption className="mt-4 flex items-center gap-2.5 border-t border-white/10 pt-4">
                        <Avatar name={t.name} color={t.color} size={36} ring />
                        <div className="min-w-0">
                          <div className="truncate text-sm font-semibold text-white">
                            {t.name}
                          </div>
                          <div className="truncate text-xs text-white/55">
                            {t.role}
                          </div>
                        </div>
                      </figcaption>
                    </div>
                  </figure>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </div>
      </div>
    </section>
  );
}

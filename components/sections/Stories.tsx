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
        <div className="relative overflow-hidden rounded-[2rem] border border-black/5 bg-gradient-to-br from-brand-50 via-white to-brand-50/40 p-8 shadow-[0_24px_70px_-40px_rgba(10,20,16,0.22)] sm:p-14">
          {/* Blurred ambient orbs */}
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-brand-300/30 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-28 left-1/3 h-80 w-80 rounded-full bg-brand-100/50 blur-3xl"
          />

          {/* Fine grid texture */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-grid opacity-50"
          />

          {/* Drifting butterfly accents */}
          <ButterflyMark
            idSuffix="stories-fly-1"
            flutter
            className="pointer-events-none absolute right-10 top-10 hidden h-10 w-10 opacity-40 sm:block"
          />
          <ButterflyMark
            idSuffix="stories-fly-2"
            flutter
            className="pointer-events-none absolute bottom-12 left-8 hidden h-8 w-8 opacity-30 lg:block"
          />

          <div className="relative">
            {/* Header */}
            <Reveal direction="up" className="mx-auto max-w-2xl text-center">
              <span className="chip mb-5 inline-flex items-center gap-1.5">
                <Star className="h-3.5 w-3.5 fill-wing-amber text-wing-amber" />
                Loved by 60,000+ businesses
              </span>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                Discover More{" "}
                <span className="text-gradient">Success Stories!</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink-muted sm:text-base">
                Real teams, real growth. See how founders and agencies turned
                Butterfly into their everyday operating system.
              </p>
              <div className="mt-5 flex items-center justify-center gap-2">
                <Stars rating={5} size={16} />
                <span className="text-xs font-medium text-ink-muted">
                  4.9/5 average across 2,400+ reviews
                </span>
              </div>
            </Reveal>

            {/* Testimonial grid */}
            <RevealStagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {TESTIMONIALS.map((t) => (
                <RevealItem key={t.name}>
                  <figure className="group relative h-full overflow-hidden rounded-2xl border border-black/5 bg-white p-5 shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-soft">
                    {/* Accent glow on hover */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-30"
                      style={{ background: t.color }}
                    />

                    <div className="relative flex h-full flex-col">
                      {/* Quote mark */}
                      <span
                        aria-hidden
                        className="font-display text-4xl leading-none text-brand-500/40"
                      >
                        &ldquo;
                      </span>

                      {/* Quote */}
                      <blockquote className="mt-1 flex-1 text-sm leading-relaxed text-ink-soft">
                        {t.quote}
                      </blockquote>

                      {/* Rating */}
                      <div className="mt-4">
                        <Stars rating={5} />
                      </div>

                      {/* Author */}
                      <figcaption className="mt-4 flex items-center gap-2.5 border-t border-black/5 pt-4">
                        <Avatar name={t.name} color={t.color} size={36} ring />
                        <div className="min-w-0">
                          <div className="truncate text-sm font-semibold text-ink">
                            {t.name}
                          </div>
                          <div className="truncate text-xs text-ink-muted">
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

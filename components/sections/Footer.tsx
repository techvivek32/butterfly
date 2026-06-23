import {
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  Facebook,
  MapPin,
  PhoneCall,
  Mail,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { BRAND, FOOTER } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { Logo } from "@/components/brand/Logo";
import { ButterflyMark } from "@/components/brand/ButterflyMark";

const SOCIALS = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
] as const;

const LEGAL = ["Privacy Policy", "Terms of Service", "Your Privacy Choices"] as const;

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
      {children}
    </h3>
  );
}

function FooterLink({ children }: { children: React.ReactNode }) {
  return (
    <li>
      <a
        href="#"
        className="group inline-flex items-center gap-1 text-sm text-ink-muted transition-colors duration-200 hover:text-brand-700"
      >
        <span className="relative">
          {children}
          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-brand-gradient transition-all duration-300 group-hover:w-full" />
        </span>
        <ArrowUpRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
      </a>
    </li>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-black/5 bg-[#f6faf8] text-ink">
      {/* Thin top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-brand-gradient" />

      {/* Faint grid overlay */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" aria-hidden />

      {/* Soft brand glow bleeding up from the bottom-left */}
      <div
        className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-brand-300/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-24 right-10 h-72 w-72 rounded-full bg-brand-200/30 blur-3xl"
        aria-hidden
      />

      {/* Oversized watermark butterfly */}
      <ButterflyMark
        className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 opacity-[0.05]"
        idSuffix="footer-watermark"
      />

      <div className="section relative py-16">
        <div className="grid grid-cols-2 gap-8 gap-y-12 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-2">
            <Reveal direction="up">
              <Logo flutter />
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-muted">
                The AI-powered business operating system. Capture, nurture and
                close — all in one place.
              </p>

              {/* Social row */}
              <div className="mt-6 flex items-center gap-2.5">
                {SOCIALS.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className={cn(
                      "group rounded-lg border border-black/10 bg-white p-2 shadow-sm",
                      "transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-300",
                      "hover:shadow-[0_8px_24px_-12px_rgba(22,189,94,0.5)]"
                    )}
                  >
                    <Icon className="h-4 w-4 text-ink-muted transition-colors duration-200 group-hover:text-brand-600" />
                  </a>
                ))}
              </div>

              {/* Trust chip */}
              <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1.5 shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-brand-600" />
                <span className="text-xs font-medium text-ink-soft">
                  Trusted by 60,000+ teams worldwide
                </span>
              </div>
            </Reveal>
          </div>

          {/* Butterfly Vs */}
          <div>
            <Reveal direction="up" delay={0.05}>
              <ColumnHeading>Butterfly Vs</ColumnHeading>
              <ul className="space-y-2.5">
                {FOOTER.vs.map((item) => (
                  <FooterLink key={item}>{item}</FooterLink>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* About */}
          <div>
            <Reveal direction="up" delay={0.1}>
              <ColumnHeading>About Butterfly</ColumnHeading>
              <ul className="space-y-2.5">
                {FOOTER.about.map((item) => (
                  <FooterLink key={item}>{item}</FooterLink>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <Reveal direction="up" delay={0.15}>
              <ColumnHeading>Contact Us</ColumnHeading>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2.5 text-ink-muted">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-600" />
                  <span className="not-italic">
                    {BRAND.address.map((line, i) => (
                      <span key={i} className="block leading-snug">
                        {line}
                      </span>
                    ))}
                  </span>
                </li>
                <li>
                  <a
                    href={`tel:${BRAND.phone.replace(/\s+/g, "")}`}
                    className="group flex items-center gap-2.5 text-ink-muted transition-colors hover:text-ink"
                  >
                    <PhoneCall className="h-4 w-4 flex-shrink-0 text-brand-600" />
                    <span>Toll Free: {BRAND.phone}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="group flex items-center gap-2.5 text-brand-700 transition-colors hover:text-brand-600"
                  >
                    <Mail className="h-4 w-4 flex-shrink-0" />
                    <span className="relative">
                      {BRAND.email}
                      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-brand-gradient transition-all duration-300 group-hover:w-full" />
                    </span>
                  </a>
                </li>
              </ul>
            </Reveal>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-black/5 pt-6 sm:flex-row">
          <p className="text-xs text-ink-muted">
            © 2026 Butterfly, Inc. All Rights Reserved · Made with 🦋 for operators
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {LEGAL.map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-ink-muted transition-colors duration-200 hover:text-ink"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

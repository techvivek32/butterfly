"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV } from "@/lib/data";
import { Logo } from "@/components/brand/Logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "glass border-b border-black/5 shadow-soft"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="section">
        <nav className="flex h-16 items-center justify-between gap-4">
          {/* Left — brand */}
          <a
            href="#top"
            aria-label="Butterfly home"
            className="relative -ml-1 inline-flex shrink-0 items-center rounded-xl px-1 py-1 transition-transform duration-300 hover:scale-[1.02]"
          >
            <Logo flutter />
          </a>

          {/* Middle — desktop nav */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group relative inline-flex items-center rounded-lg px-3 py-2 text-sm font-medium text-ink-soft transition-colors duration-200 hover:text-brand-700"
                >
                  <span className="relative">
                    {item.label}
                    {/* animated underline */}
                    <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-brand-gradient transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {/* Right — actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#login"
              className="hidden rounded-lg px-3 py-2 text-sm font-semibold text-ink-soft transition-colors duration-200 hover:text-brand-700 sm:inline-flex"
            >
              Login
            </a>

            <a
              href="#pricing"
              className="btn-primary group hidden h-10 items-center gap-1.5 px-4 text-sm sm:inline-flex"
            >
              Start 14-day trial
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/5 bg-white/70 text-ink shadow-soft backdrop-blur transition-colors duration-200 hover:text-brand-700 lg:hidden"
            >
              <AnimatePresence initial={false} mode="wait">
                {open ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="inline-flex"
                  >
                    <X className="h-5 w-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="inline-flex"
                  >
                    <Menu className="h-5 w-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile dropdown panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden lg:hidden"
          >
            <div className="glass border-t border-black/5 shadow-soft">
              <div className="section py-5">
                <motion.ul
                  initial="hidden"
                  animate="show"
                  variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
                  }}
                  className="flex flex-col gap-1"
                >
                  {NAV.map((item) => (
                    <motion.li
                      key={item.href}
                      variants={{
                        hidden: { opacity: 0, y: 8 },
                        show: { opacity: 1, y: 0 },
                      }}
                    >
                      <a
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="group flex items-center justify-between rounded-xl px-3 py-3 text-base font-medium text-ink-soft transition-colors duration-200 hover:bg-brand-50 hover:text-brand-700"
                      >
                        {item.label}
                        <ArrowRight className="h-4 w-4 -translate-x-1 text-ink-muted opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:text-brand-600 group-hover:opacity-100" />
                      </a>
                    </motion.li>
                  ))}
                </motion.ul>

                <div className="mt-4 flex flex-col gap-2.5 border-t border-black/5 pt-4">
                  <a
                    href="#login"
                    onClick={() => setOpen(false)}
                    className="btn-ghost h-11 w-full justify-center text-sm"
                  >
                    Login
                  </a>
                  <a
                    href="#pricing"
                    onClick={() => setOpen(false)}
                    className="btn-primary group h-11 w-full justify-center gap-1.5 text-sm"
                  >
                    Start 14-day trial
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

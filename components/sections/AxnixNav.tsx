"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { AxnixLogo } from "@/components/brand/AxnixLogo";

const LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Blogs", href: "#blogs" },
  { label: "Pricing", href: "#pricing" },
] as const;

export function AxnixNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        {/* Brand */}
        <a href="#top" aria-label="Axnix home" className="relative z-10 shrink-0">
          <AxnixLogo />
        </a>

        {/* Center links */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[15px] font-medium text-neutral-700 transition-colors duration-200 hover:text-neutral-950"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right action */}
        <div className="flex items-center gap-2">
          <a
            href="#get-started"
            className="hidden rounded-full bg-neutral-900 px-6 py-3 text-[15px] font-medium text-white transition-all duration-200 hover:bg-neutral-800 active:scale-[0.98] sm:inline-flex"
          >
            Get started
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-900 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-neutral-200/70 bg-white/90 backdrop-blur lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-8">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-base font-medium text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-950"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#get-started"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-neutral-900 px-6 py-3 text-center text-base font-medium text-white"
              >
                Get started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Infinite horizontal marquee. Duplicates children for a seamless loop. */
export function Marquee({
  children,
  className,
  reverse = false,
  speed = 32,
  pauseOnHover = true,
}: {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
  speed?: number;
  pauseOnHover?: boolean;
}) {
  return (
    <div className={cn("group relative flex w-full overflow-hidden mask-fade-x", className)}>
      <div
        className="flex min-w-full shrink-0 items-center justify-around gap-6 animate-marquee"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? "reverse" : "normal",
          animationPlayState: "running",
        }}
        data-pause={pauseOnHover}
      >
        {children}
      </div>
      <div
        aria-hidden
        className="flex min-w-full shrink-0 items-center justify-around gap-6 animate-marquee"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {children}
      </div>
    </div>
  );
}

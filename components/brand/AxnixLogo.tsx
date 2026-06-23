import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

/** Axnix wordmark — a bright-green disc with a white up-right arrow. */
export function AxnixLogo({
  className,
  markSize = 36,
  textClassName,
  showText = true,
}: {
  className?: string;
  markSize?: number;
  textClassName?: string;
  showText?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        className="grid shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#86d957] to-[#4ba62c] shadow-[0_6px_16px_-4px_rgba(74,166,44,0.55)]"
        style={{ width: markSize, height: markSize }}
      >
        <ArrowUpRight
          className="text-white"
          style={{ width: markSize * 0.55, height: markSize * 0.55 }}
          strokeWidth={2.75}
        />
      </span>
      {showText && (
        <span
          className={cn(
            "font-display text-2xl font-semibold tracking-tight text-neutral-900",
            textClassName
          )}
        >
          Axnix
        </span>
      )}
    </span>
  );
}

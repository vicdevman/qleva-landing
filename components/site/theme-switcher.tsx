"use client";

/**
 * theme-switcher.tsx
 * ──────────────────
 * Light / System / Dark, as a sliding pill.
 *
 * The same control as the app's (`qleva-app/components/shared/theme-switcher`)
 * — same muted track, same `bg-background` thumb, same spring — with a third
 * position. The landing page is often someone's first visit, and honouring the
 * OS preference they already set is a smaller ask than making them choose.
 *
 * The placeholder before mount is not laziness. `next-themes` cannot know the
 * resolved theme during SSR, so rendering the real control immediately would
 * paint the wrong position and then snap. A neutral box of the same size holds
 * the space instead.
 */

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const OPTIONS = [
  { value: "light", icon: Sun, label: "Light" },
  { value: "system", icon: Monitor, label: "System" },
  { value: "dark", icon: Moon, label: "Dark" },
] as const;

export function ThemeSwitcher({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className={cn("h-8 w-[92px] rounded-lg bg-muted/30", className)} aria-hidden />;
  }

  // `theme`, not `resolvedTheme` — the control shows what was CHOSEN, so
  // "System" stays lit rather than jumping to whichever it resolved to.
  const current = theme ?? "system";
  const index = Math.max(
    0,
    OPTIONS.findIndex((o) => o.value === current),
  );

  return (
    <div
      role="radiogroup"
      aria-label="Colour theme"
      className={cn(
        "relative flex items-center rounded-lg border-0 bg-muted/30 p-1 transition-colors hover:bg-muted/60",
        className,
      )}
    >
      <motion.div
        aria-hidden
        className="absolute h-[calc(100%-8px)] w-[calc(33.333%-5px)] rounded-md border border-border/50 bg-background"
        initial={false}
        animate={{ left: `calc(${index * 33.333}% + 4px)` }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />

      {OPTIONS.map(({ value, icon: Icon, label }) => {
        const selected = value === current;
        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={selected}
            aria-label={label}
            title={label}
            onClick={() => setTheme(value)}
            className="relative z-10 flex flex-1 cursor-pointer items-center justify-center px-2.5 py-1.5"
          >
            <Icon
              className={cn(
                "size-3.5 transition-colors",
                selected ? "text-foreground" : "text-muted-foreground",
              )}
            />
          </button>
        );
      })}
    </div>
  );
}

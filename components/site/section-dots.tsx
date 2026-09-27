"use client";

/**
 * section-dots.tsx
 * ────────────────
 * Where you are on the page, as a row of small squares under the nav.
 *
 * HOW THE "LIQUID" SLIDE WORKS
 *
 * There is only ever ONE highlight element. It is not moved by animating each
 * dot's colour in sequence — it is a single absolutely-positioned block whose
 * `x` and `width` are animated to the bounds of whichever dot is active. Framer
 * springs the transform, so it appears to flow from one square to the next
 * rather than blink between them. That is the whole trick: one thing moving,
 * not nine things fading.
 *
 * WHY IT MEASURES INSTEAD OF CALCULATING
 *
 * The offset comes from `getBoundingClientRect` on the real dots rather than
 * from `index * (size + gap)`. A calculated position is right until the row
 * wraps, the font loads, or a label changes width — and then it is silently a
 * few pixels off with nothing to point at. Measuring is correct by
 * construction, and it re-measures on resize.
 *
 * SCROLL-SPY, CHEAPLY
 *
 * `IntersectionObserver` with a rootMargin that turns the viewport into a thin
 * band just under the nav, so a section counts as "active" when its top crosses
 * that line. No scroll listener, no per-frame measurement — the browser tells
 * us, which is the difference between this being free and this being the reason
 * the page stutters.
 */

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SECTIONS } from "@/lib/site";

export function SectionDots({ className }: { className?: string }) {
  const [activeId, setActiveId] = React.useState<string>(SECTIONS[0].id);
  const [bounds, setBounds] = React.useState<{ x: number; w: number } | null>(null);

  const listRef = React.useRef<HTMLDivElement>(null);
  const dotRefs = React.useRef(new Map<string, HTMLAnchorElement>());
  const reduceMotion = useReducedMotion();

  /* ── Which section is in view ─────────────────────────────────────────── */
  React.useEffect(() => {
    const elements = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => !!el,
    );
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Several sections can straddle the band at once on a tall screen.
        // The topmost visible one is the one the reader is actually in.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]?.target.id) setActiveId(visible[0].target.id);
      },
      {
        // A band from just under the nav to roughly the middle of the screen.
        rootMargin: "-96px 0px -55% 0px",
        threshold: 0,
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* ── Where the highlight should sit ───────────────────────────────────── */
  const measure = React.useCallback(() => {
    const list = listRef.current;
    const dot = dotRefs.current.get(activeId);
    if (!list || !dot) return;

    const listBox = list.getBoundingClientRect();
    const dotBox = dot.getBoundingClientRect();
    setBounds({ x: dotBox.left - listBox.left, w: dotBox.width });
  }, [activeId]);

  React.useEffect(() => {
    measure();
  }, [measure]);

  React.useEffect(() => {
    // Fonts and layout settle after first paint; a resize changes the row.
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    const settle = setTimeout(measure, 120);
    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(settle);
    };
  }, [measure]);

  return (
    <div
      className={cn(
        /*
          Outside the content container and full-bleed, so the row sits against
          the page rather than inside the nav.

          z-1500 is chosen against the stack this page already uses: the header
          is z-2000 and several content wrappers are z-10 or z-200. At z-40 the
          row was painted underneath them, which is why it looked like it had
          not rendered at all.
        */
        "pointer-events-none fixed inset-x-0 top-[52px] z-1500 flex justify-center px-4 sm:top-[64px]",
        className,
      )}
    >
      <nav
        ref={listRef}
        aria-label="Page sections"
        className="pointer-events-auto relative flex items-center gap-1.5 rounded-full border-0 border-border/40  sm:gap-2"
      >
        {/* The single moving highlight. */}
        {bounds && (
          <motion.span
            aria-hidden
            className="absolute top-1/2 h-[7px] rounded-[2px] bg-accent-ink"
            initial={false}
            animate={{ x: bounds.x, width: bounds.w, y: "-50%" }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : // Springy enough to read as liquid, damped enough not to wobble.
                  { type: "spring", stiffness: 380, damping: 30, mass: 0.6 }
            }
            style={{ left: 0 }}
          />
        )}

        {SECTIONS.map((section) => {
          const active = section.id === activeId;
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              ref={(el) => {
                if (el) dotRefs.current.set(section.id, el);
                else dotRefs.current.delete(section.id);
              }}
              aria-label={section.label}
              aria-current={active ? "true" : undefined}
              title={section.label}
              className="group relative flex h-4 w-[7px] items-center justify-center"
            >
              {/* The square itself. Kept visible when inactive — a dot you can
                  only see once it is selected cannot tell you where you are. */}
              <span
                className={cn(
                  "size-[7px] rounded-[2px] transition-colors duration-200",
                  active
                    ? "bg-transparent"
                    : "bg-muted-foreground/20 group-hover:bg-foreground",
                )}
              />
            </a>
          );
        })}
      </nav>
    </div>
  );
}

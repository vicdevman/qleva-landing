"use client";

/**
 * use-theme-colors.ts
 * ───────────────────
 * Colours for components that take a string, not a class.
 *
 * StaggeredMenu, PixelBlast and LogoLoop all accept raw colour props — they
 * draw to a canvas or an SVG attribute, so a Tailwind token is no use to them.
 * Left hardcoded they were the last thing keeping the page dark-only: a white
 * menu button and a near-black logo fade are invisible on a white background.
 *
 * `resolvedTheme` rather than `theme`, because "system" has to become an actual
 * colour. The dark values are exactly the literals that were inline before, so
 * the dark rendering is unchanged.
 */

import { useTheme } from "next-themes";
import * as React from "react";

export interface ThemeColors {
  /** Closed-state menu button. */
  menuButton: string;
  /** Open-state menu button. */
  menuButtonOpen: string;
  /** The page background, for gradient fades that must blend into it. */
  pageBg: string;
  /** The muted accent used by the pixel/canvas effects. */
  effect: string;
  isDark: boolean;
}

const DARK: ThemeColors = {
  menuButton: "#f7f4ea",
  menuButtonOpen: "#ffce48",
  pageBg: "#0b0b0b",
  effect: "#3a2e0e",
  isDark: true,
};

const LIGHT: ThemeColors = {
  menuButton: "#141414",
  menuButtonOpen: "#8a6a12",
  pageBg: "#ffffff",
  // A pale warm tint — the dark value is a deep olive that would read as dirt
  // on white.
  effect: "#f0e2b8",
  isDark: false,
};

export function useThemeColors(): ThemeColors {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  // Before mount the resolved theme is unknown. Returning the dark set matches
  // `defaultTheme="dark"`, so the first paint agrees with the server and there
  // is no flash of the wrong colour.
  if (!mounted) return DARK;
  return resolvedTheme === "light" ? LIGHT : DARK;
}

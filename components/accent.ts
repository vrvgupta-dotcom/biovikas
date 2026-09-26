import type { CSSProperties } from "react";
import type { Accent } from "@/content/profile";

const accentVars: Record<Accent, string> = {
  teal: "var(--teal)",
  gold: "var(--gold)",
  tealDark: "var(--teal-dark)",
  navy: "var(--navy)",
};

/** Exposes an accent colour to CSS modules as `var(--accent)`. */
export function accentStyle(accent: Accent): CSSProperties {
  return { "--accent": accentVars[accent] } as CSSProperties;
}

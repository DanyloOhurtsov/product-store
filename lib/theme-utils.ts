import type { ThemeColors } from "./types";

export function generateCssVars(colors: ThemeColors): string {
  return Object.entries(colors)
    .map(([key, value]) => {
      const cssKey = key.replace(/([A-Z])/g, "-$1").toLowerCase();
      return `--${cssKey}: ${value};`;
    })
    .join("\n    ");
}

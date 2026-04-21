import type { NextApiRequest, NextApiResponse } from "next";
import type { Theme } from "../../lib/types";

const themes: Theme[] = [
{
    id: "urban-essentials",
    name: "Urban Essentials",
    fonts: {
      body: "'Work Sans', sans-serif",
      heading: "'Space Grotesk', sans-serif",
    },
    colors: {
      primary: "#FECC00",
      primaryHover: "#E5B800",
      primaryLight: "#FFF9DB",
      primaryForeground: "#000000",
      secondary: "#4A4A4A",
      secondaryLight: "#F5F0EA",
      accent: "#FECC00",
      background: "#FDF8F0",
      surface: "#FFFFFF",
      border: "#1E1C10",
      text: "#1E1C10",
      textMuted: "#5E5E5E",
      badge: "#FFD700",
      badgeText: "#1E1C10",
      star: "#1E1C10",
      cardShadow: "rgba(0, 0, 0, 0.04)",
    },
  },
  {
    id: "forest-explorer",
    name: "Forest Explorer",
    fonts: {
      body: "'Plus Jakarta Sans', sans-serif",
      heading: "'Plus Jakarta Sans', sans-serif",
    },
    colors: {
      primary: "#2e4e3d",
      primaryHover: "#3a6350",
      primaryLight: "#051e12",
      primaryForeground: "#c9eed6",
      secondary: "#90b39d",
      secondaryLight: "#051e12",
      accent: "#2e4e3d",
      background: "#041109",
      surface: "#051e12",
      border: "#2e4e3d",
      text: "#c9eed6",
      textMuted: "#90b39d",
      badge: "#2e4e3d",
      badgeText: "#c9eed6",
      star: "#c9eed6",
      cardShadow: "rgba(0, 0, 0, 0.2)",
    },
  },
];

export default function handler(_req: NextApiRequest, res: NextApiResponse<Theme>) {
  const randomTheme = themes[Math.floor(Math.random() * themes.length)];
  res.status(200).json(randomTheme);
}

export { themes };

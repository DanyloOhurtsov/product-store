export interface ThemeColors {
  primary: string;
  primaryHover: string;
  primaryLight: string;
  primaryForeground: string;
  secondary: string;
  secondaryLight: string;
  accent: string;
  background: string;
  surface: string;
  border: string;
  text: string;
  textMuted: string;
  badge: string;
  badgeText: string;
  star: string;
  cardShadow: string;
}

export interface ThemeFonts {
  body: string;
  heading: string;
}

export type ThemeId = "urban-essentials" | "forest-explorer";

export interface Theme {
  id: ThemeId;
  name: string;
  fonts: ThemeFonts;
  colors: ThemeColors;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  discountPercentage: number;
}

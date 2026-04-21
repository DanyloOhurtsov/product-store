import type { ThemeId } from "./types";

export const THEME_IDS: Record<string, ThemeId> = {

  URBAN_ESSENTIALS: "urban-essentials",
  FOREST_EXPLORER: "forest-explorer",
};

export const API_BASE_URL = "https://dummyjson.com";
export const PRODUCTS_ENDPOINT = `${API_BASE_URL}/products`;
export const PRODUCTS_FIELDS =
  "id,title,description,price,thumbnail,rating,stock,brand,category,discountPercentage";
export const PRODUCTS_LIMIT = 20;

export const NAV_ITEMS = ["Products", "Categories", "Deals", "About"] as const;

export const LOW_STOCK_THRESHOLD = 10;
export const LOW_STOCK_COLORS = {
  background: "#FEF3C7",
  text: "#92400E",
} as const;

import Image from "next/image";
import type { Product, ThemeId, ThemeFonts } from "../lib/types";
import {
  THEME_IDS,
  LOW_STOCK_THRESHOLD,
  LOW_STOCK_COLORS,
} from "../lib/constants";
import { StarRating } from "./StarRating";
import { UrbanProductCard } from "./UrbanProductCard";
import { ForestProductCard } from "./ForestProductCard";

export interface ProductCardProps {
  product: Product;
  themeId: ThemeId;
  fonts: ThemeFonts;
}

export default function ProductCard({
  product,
  themeId,
  fonts,
}: ProductCardProps) {
  if (themeId === THEME_IDS.URBAN_ESSENTIALS) {
    return <UrbanProductCard product={product} fonts={fonts} />;
  }

  if (themeId === THEME_IDS.FOREST_EXPLORER) {
    return <ForestProductCard product={product} />;
  }

  const discountedPrice = product.discountPercentage
    ? product.price * (1 - product.discountPercentage / 100)
    : null;

  return (
    <article
      className="group flex flex-col rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover-card-shadow h-full"
      style={{
        backgroundColor: "var(--surface)",
        borderColor: "var(--border)",
        boxShadow: "0 1px 3px var(--card-shadow)",
      }}
    >
      <div
        className="relative aspect-square overflow-hidden"
        style={{ backgroundColor: "var(--secondary-light)" }}
      >
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
        />
        {product.discountPercentage > 0 && (
          <span
            className="absolute top-3 left-3 px-2 py-1 rounded-lg text-xs font-bold"
            style={{
              backgroundColor: "var(--primary)",
              color: "var(--primary-foreground)",
            }}
          >
            -{Math.round(product.discountPercentage)}%
          </span>
        )}
        {product.stock < LOW_STOCK_THRESHOLD && (
          <span
            className="absolute top-3 right-3 px-2 py-1 rounded-lg text-xs font-medium"
            style={{
              backgroundColor: LOW_STOCK_COLORS.background,
              color: LOW_STOCK_COLORS.text,
            }}
          >
            Low stock
          </span>
        )}
        <div className="absolute inset-0 flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            className="w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
            style={{
              backgroundColor: "var(--primary)",
              color: "var(--primary-foreground)",
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="flex flex-col flex-1 p-4">
        <div className="mb-2">
          <span
            className="inline-block text-xs font-medium px-2 py-0.5 rounded-full mb-1.5 capitalize"
            style={{
              backgroundColor: "var(--badge)",
              color: "var(--badge-text)",
            }}
          >
            {product.category}
          </span>
          <h2
            className="text-2xl font-semibold leading-tight line-clamp-2 min-h-[3em]"
            style={{ color: "var(--text)" }}
          >
            {product.title}
          </h2>
          {product.brand && (
            <p
              className="text-xs mt-0.5"
              style={{ color: "var(--text-muted)" }}
            >
              {product.brand}
            </p>
          )}
        </div>
        <StarRating rating={product.rating} />
        <div className="flex items-center justify-between mt-auto pt-3">
          <div>
            <span
              className="text-lg font-bold"
              style={{ color: "var(--text)" }}
            >
              $
              {discountedPrice
                ? discountedPrice.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                : product.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
            {discountedPrice && (
              <span
                className="text-xs line-through ml-1.5"
                style={{ color: "var(--text-muted)" }}
              >
                ${product.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            )}
          </div>
          <button
            className="p-2 rounded-full border transition-all duration-200 hover-border-primary"
            style={{
              borderColor: "var(--border)",
              color: "var(--text-muted)",
            }}
            aria-label="Add to wishlist"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}

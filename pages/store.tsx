import { useState } from "react";
import Head from "next/head";
import type { GetServerSideProps } from "next";
import { themes } from "./api/theme";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import FilterBar from "../components/FilterBar";
import { generateCssVars } from "../lib/theme-utils";
import {
  THEME_IDS,
  PRODUCTS_ENDPOINT,
  PRODUCTS_LIMIT,
  PRODUCTS_FIELDS,
} from "../lib/constants";
import type { Theme, Product } from "../lib/types";

interface StorePageProps {
  themes: Theme[];
  products: Product[];
  error?: string;
}

export const getServerSideProps: GetServerSideProps<
  StorePageProps
> = async () => {
  try {
    const res = await fetch(
      `${PRODUCTS_ENDPOINT}?limit=${PRODUCTS_LIMIT}&select=${PRODUCTS_FIELDS}`,
    );

    if (!res.ok) {
      throw new Error(`API responded with ${res.status}`);
    }

    const data = await res.json();

    return {
      props: {
        themes,
        products: data.products as Product[],
      },
    };
  } catch {
    return {
      props: {
        themes,
        products: [],
        error: "Failed to load products",
      },
    };
  }
};

export default function StorePage({ themes, products, error }: StorePageProps) {
  const [themeIndex, setThemeIndex] = useState(0);
  const theme = themes[themeIndex];
  const cssVars = generateCssVars(theme.colors);
  const isUrban = theme.id === THEME_IDS.URBAN_ESSENTIALS;
  const isForest = theme.id === THEME_IDS.FOREST_EXPLORER;

  const toggleTheme = () => {
    setThemeIndex((i) => (i + 1) % themes.length);
  };

  return (
    <>
      <Head>
        <title>{`${theme.name} — Product Store`}</title>
        <meta
          name="description"
          content="Browse our curated product collection"
        />
      </Head>
      <style>{`
        :root { ${cssVars}}
        body { background-color: var(--background); color: var(--text);}
      `}</style>
      <div
        className="min-h-screen"
        style={{
          backgroundColor: "var(--background)",
          fontFamily: theme.fonts.body,
        }}
      >
        {!isUrban && !isForest && (
          <Header themeName={theme.name} onToggleTheme={toggleTheme} />
        )}
        <main className={`max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 ${isForest ? "p-12" : ""}`}>
          {isForest ? (
            <div className="flex flex-col items-center mb-20">
              <h1
                className="text-[36px] font-bold uppercase leading-[40px] tracking-[5.4px] mb-6"
                style={{
                  color: "#C9EED6",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                NEW ARRIVALS
              </h1>
              <div
                className="w-12 h-px opacity-50"
                style={{ backgroundColor: "#2e4e3d" }}
              />
            </div>
          ) : isUrban ? null : (
            <div className="mb-8">
              <h1
                className="text-4xl sm:text-5xl font-normal mb-2"
                style={{
                  color: "var(--text)",
                  fontFamily: theme.fonts.heading,
                }}
              >
                {theme.name}
              </h1>
              <p className="text-base" style={{ color: "var(--text-muted)" }}>
                {products.length} products available
              </p>
            </div>
          )}
          {!isUrban && !isForest && <FilterBar />}
          {error ? (
            <div
              className="text-center py-16 rounded-xl border"
              style={{
                backgroundColor: "var(--surface)",
                borderColor: "var(--border)",
                color: "var(--text-muted)",
              }}
            >
              <p className="text-lg font-medium mb-2">
                Unable to load products
              </p>
              <p className="text-sm">Please try refreshing the page.</p>
            </div>
          ) : isUrban ? (
            <div className="w-fit mx-auto">
              <div className="mb-[3.25rem]">
                <h1
                  className="text-6xl font-bold uppercase leading-[60px] tracking-[-3px]"
                  style={{
                    color: "var(--text)",
                    fontFamily: theme.fonts.heading,
                  }}
                >
                  Urban
                  <br />
                  Essentials
                </h1>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-[44px]">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    themeId={theme.id}
                    fonts={theme.fonts}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 ${
                isForest
                  ? "lg:grid-cols-[repeat(4,272px)] gap-8 w-fit mx-auto"
                  : "md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-[3.25rem]"
              }`}
            >
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  themeId={theme.id}
                  fonts={theme.fonts}
                />
              ))}
            </div>
          )}
        </main>
        <button
          onClick={toggleTheme}
          className="fixed bottom-6 right-6 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 z-50"
          style={{
            backgroundColor: "var(--primary)",
            color: "var(--primary-foreground)",
          }}
          aria-label="Switch theme"
          title={`Current: ${theme.name}`}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
            />
          </svg>
        </button>
      </div>
    </>
  );
}

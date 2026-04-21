import Head from "next/head";
import Link from "next/link";
import type { GetServerSideProps } from "next";
import { themes } from "./api/theme";
import { generateCssVars } from "../lib/theme-utils";
import type { Theme } from "../lib/types";

interface NotFoundPageProps {
  theme: Theme;
}

export const getServerSideProps: GetServerSideProps<NotFoundPageProps> = async ({ req }) => {
  const cookies = req.headers.cookie || "";
  const themeIdMatch = cookies.match(/themeId=([^;]+)/);
  const themeId = themeIdMatch ? themeIdMatch[1] : null;

  const theme = themes.find((t) => t.id === themeId) ||
    themes[Math.floor(Math.random() * themes.length)];

  return { props: { theme } };
};

export default function NotFoundPage({ theme }: NotFoundPageProps) {
  const cssVars = generateCssVars(theme.colors);

  return (
    <>
      <Head>
        <title>{`404 - Not Found | ${theme.name} Store`}</title>
      </Head>

      <style>{`
        :root {
          ${cssVars}
        }
        body {
          background-color: var(--background);
          color: var(--text);
        }
      `}</style>

      <div
        className="min-h-screen flex flex-col items-center justify-center px-4"
        style={{ backgroundColor: "var(--background)", fontFamily: theme.fonts.body }}
      >
        <div className="text-center max-w-md">
          <div
            className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-6"
            style={{ backgroundColor: "var(--primary-light)" }}
          >
            <span
              className="text-4xl font-bold"
              style={{ color: "var(--primary)", fontFamily: theme.fonts.heading }}
            >
              404
            </span>
          </div>

          <h1
            className="text-5xl sm:text-6xl font-normal mb-4"
            style={{ color: "var(--text)", fontFamily: theme.fonts.heading }}
          >
            Not Found
          </h1>
          <p
            className="text-lg mb-2"
            style={{ color: "var(--text-muted)" }}
          >
            Oops! This page doesn&apos;t exist.
          </p>
          <p className="text-sm mb-10" style={{ color: "var(--text-muted)" }}>
            Current theme: <span style={{ color: "var(--primary)" }} className="font-medium">{theme.name}</span>
          </p>

          <Link
            href="/store"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-medium text-base transition-all duration-200 hover-primary-bg"
            style={{
              backgroundColor: "var(--primary)",
              color: "var(--primary-foreground)",
            }}
          >
            &larr; Back to Store
          </Link>
        </div>

        <div
          className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <div
            className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-10 blur-3xl"
            style={{ backgroundColor: "var(--primary)" }}
          />
          <div
            className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-10 blur-3xl"
            style={{ backgroundColor: "var(--accent)" }}
          />
        </div>
      </div>
    </>
  );
}

import Link from "next/link";
import { NAV_ITEMS } from "../lib/constants";

interface HeaderProps {
  themeName: string;
  onToggleTheme?: () => void;
}

export default function Header({ themeName, onToggleTheme }: HeaderProps) {
  return (
    <header
      className="sticky top-0 z-50 border-b bg-white/85 backdrop-blur-sm"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/store"
            className="flex items-center gap-2 font-display text-xl font-normal"
            style={{ color: "var(--text)" }}
          >
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
              style={{
                backgroundColor: "var(--primary)",
                color: "var(--primary-foreground)",
              }}
            >
              S
            </span>
            Store
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item}
                href="/store"
                className="text-sm font-medium transition-colors hover-text-primary"
                style={{ color: "var(--text-muted)" }}
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {onToggleTheme && (
              <button
                onClick={onToggleTheme}
                className="p-2 rounded-lg transition-colors"
                style={{ color: "var(--text-muted)" }}
                aria-label="Toggle theme"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </button>
            )}
            <button
              className="p-2 rounded-lg transition-colors"
              style={{ color: "var(--text-muted)" }}
              aria-label="Search"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button
              className="relative p-2 rounded-lg transition-colors"
              style={{ color: "var(--text-muted)" }}
              aria-label="Cart"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span
                className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-xs flex items-center justify-center font-bold"
                style={{
                  backgroundColor: "var(--primary)",
                  color: "var(--primary-foreground)",
                }}
              >
                3
              </span>
            </button>
            <button
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors hover-primary-bg"
              style={{
                backgroundColor: "var(--primary)",
                color: "var(--primary-foreground)",
              }}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

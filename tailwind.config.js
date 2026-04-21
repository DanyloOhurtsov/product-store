/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "primary-hover": "var(--primary-hover)",
        "primary-light": "var(--primary-light)",
        "primary-foreground": "var(--primary-foreground)",
        secondary: "var(--secondary)",
        "secondary-light": "var(--secondary-light)",
        accent: "var(--accent)",
        background: "var(--background)",
        surface: "var(--surface)",
        border: "var(--border)",
        "text-main": "var(--text)",
        "text-muted": "var(--text-muted)",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        display: ["DM Serif Display", "serif"],
        grotesk: ["Space Grotesk", "sans-serif"],
        work: ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

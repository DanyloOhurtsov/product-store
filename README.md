# nextjs-themed-store

A Next.js product store with server-side dynamic theming.

## Features

- **Dynamic themes**: "Classic Blue" and "Modern Emerald" — randomly selected on each server request
- **CSS Variables + Tailwind**: Theme colors injected as CSS vars, consumed by Tailwind config
- **SSR only**: All data fetching (products + theme selection) happens on the server
- **404 with theme**: Custom 404 page that also uses the active theme colors
- **Responsive**: Mobile-first grid layout matching Figma specs

## Stack

- Next.js 14 (Page Router)
- Tailwind CSS 3
- DummyJSON API for products
- Google Fonts (DM Sans + DM Serif Display)

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000/store](http://localhost:3000/store)

## Routes

| Route | Description |
|-------|-------------|
| `/store` | Main product listing (theme randomly selected SSR) |
| `/` | Redirects to `/store` |
| `/*` | 404 page (with active theme colors) |

## Architecture

```
pages/
  api/
    theme.js        # Mock theme config (Classic Blue / Modern Emerald)
  store.js          # Main page — getServerSideProps picks theme + fetches products
  404.js            # Custom 404 — getStaticProps picks theme
  index.js          # Redirects to /store
  _app.js
  _document.js

components/
  Header.js
  FilterBar.js
  ProductCard.js

styles/
  globals.css
```

## Theming

Each theme defines CSS variables injected into `:root` at render time:

```js
// pages/api/theme.js
{
  id: "classic-blue",
  name: "Classic Blue",
  colors: {
    primary: "#1D4ED8",
    primaryHover: "#1E40AF",
    // ...
  }
}
```

Tailwind config reads these via `var(--primary)` etc., allowing full Tailwind class usage with dynamic colors.

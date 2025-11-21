# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a pizzeria website built with Astro, configured for Spanish (default) and English. It uses Tailwind CSS v4 for styling, includes React support (currently unused, all components are Astro), and features SEO optimizations with sitemap generation and full i18n support. The site includes a complete landing page with menu, features, and WhatsApp integration.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs at localhost:4321)
npm run dev

# Build production site (outputs to ./dist/)
npm run build

# Preview production build locally
npm run preview

# Run Astro CLI commands
npm run astro <command>
```

## Project Architecture

### Directory Structure

```
src/
├── i18n/           # Internationalization configuration and utilities
├── pages/          # File-based routing (es/, en/ subdirectories)
└── ui/             # UI components and styles
    ├── _shared/    # Shared layouts and components
    │   ├── components/  # Header, Footer, WhatsAppButton
    │   └── layouts/     # BaseLayout, BaseHeadLayout
    ├── home/       # Home page specific components
    │   ├── components/  # HeroSection, MenuSection, etc.
    │   └── layout/      # HomePageLayout
    ├── constants/  # Data files (pizzas.ts)
    └── styles/     # Global CSS and CSS variables
```

### Path Aliases

The following TypeScript path aliases are configured in `tsconfig.json`:

- `@ui/*` → `src/ui/*`
- `@i18n/*` → `src/i18n/*`
- `@features/*` → `src/features/*`

Always use these aliases when importing modules.

### Internationalization (i18n)

The site supports two locales: Spanish (`es`) and English (`en`). Default locale is Spanish.

**Key files:**
- `src/i18n/ui.ts` - Translation dictionaries for all locales
- `src/i18n/utils.ts` - i18n utilities (`getLangFromUrl`, `useTranslations`)

**Translation system:**
- Add new translation keys to both language objects (es and en) in `src/i18n/ui.ts`
- Use `useTranslations(lang)` to get a translation function `t(key, variables?)`
- Variables in translations use `{{variableName}}` syntax (e.g., `"© {{year}} Todos los derechos reservados."`)

**Page structure:**
- Each locale has its own directory under `src/pages/` (`pages/es/`, `pages/en/`)
- Pages must specify their locale when using translations
- Use `BaseLayout` or `HomePageLayout` which handle SEO meta tags, canonical URLs, and alternate language links
- Root `/` redirects to `/es/` (default language)

### Layouts System

**BaseLayout** (`src/ui/_shared/layouts/BaseLayout.astro`):
- Primary layout wrapper for all pages
- Props: `title`, `description`, `lang`, `keywords?`, `image?`, `canonicalPath?`
- Automatically imports global styles

**BaseHeadLayout** (`src/ui/_shared/layouts/BaseHeadLayout.astro`):
- Generates complete `<head>` section with SEO meta tags
- Handles Open Graph and Twitter Card meta tags
- Generates canonical URLs and alternate language links (hreflang)
- Creates x-default alternate link pointing to Spanish version (default)

**HomePageLayout** (`src/ui/home/layout/HomePageLayout.astro`):
- Specific layout for the pizzeria landing page
- Composes Header, HeroSection, MenuSection, FeaturesSection, CTASection, Footer, and WhatsAppButton
- Props: `title`, `description`, `lang`, `keywords?`, `image?`, `canonicalPath?`, `whatsappPhone?`

### Component Organization

**Shared components** (`src/ui/_shared/components/`):
- **Header.astro**: Fixed navigation bar with logo and menu links
- **Footer.astro**: Footer with schedule, contact info, and social links
- **WhatsAppButton.astro**: Floating WhatsApp button with pulse animation
- **Button.astro**: Reusable button component with variants (primary, secondary) and sizes (md, lg)

**Home page components** (`src/ui/home/components/`):
- **HeroSection.astro**: Hero banner with background image and CTA
- **MenuSection.astro**: Grid of pizza cards
- **MenuCard.astro**: Individual pizza card with image, name, price, and description
- **FeaturesSection.astro**: Grid of feature cards
- **FeatureCard.astro**: Individual feature with icon, title, and description
- **CTASection.astro**: Call-to-action section with gradient background

### Data Management

**Pizza data** (`src/ui/constants/pizzas.ts`):
- Defines `Pizza` interface with bilingual name and description
- Exports `pizzas` array with all menu items
- Each pizza includes: id, name (es/en), description (es/en), price, and image URL
- To add/modify pizzas, edit this file

### Astro Configuration

**Integrations enabled:**
- `@astrojs/react` - React component support
- `@astrojs/sitemap` - Automatic sitemap generation with i18n support
- `@astrojs/partytown` - Third-party script optimization (configured for Google Analytics)
- `astro-icon` - Icon component (Tabler icons included)
- `@tailwindcss/vite` - Tailwind CSS v4 via Vite plugin

**Site configuration:**
- Site URL is set to `https://example.com` in `astro.config.mjs` - update this for production
- i18n routing uses `prefixDefaultLocale: true` (all routes include language prefix, including `/es/`)

### Styling

All styles use **Tailwind CSS v4** via Vite plugin. Custom animations are defined in `src/ui/styles/global.css`:
- `animate-fade-in-up`: Fade in with upward motion
- `animation-delay-200` / `animation-delay-400`: Animation delays for sequential effects
- `animate-pulse-whatsapp`: Pulsing effect for WhatsApp button

## Git Hooks (Husky)

Pre-push hook automatically runs `npm run build` before allowing pushes. If the build fails, the push is aborted. This ensures only buildable code is pushed to the repository.

## Adding New Features

### Adding new pages
1. Create versions in both language directories (`pages/es/`, `pages/en/`)
2. Use `BaseLayout` or create a custom layout with appropriate props
3. Extract all text into `src/i18n/ui.ts` with keys for both languages (es and en)
4. Provide correct `canonicalPath` prop (e.g., `/es/about/`, `/en/about/`)

### Adding pizzas to the menu
1. Edit `src/ui/constants/pizzas.ts`
2. Add new object to `pizzas` array with bilingual name and description
3. Include price and Unsplash image URL
4. MenuSection will automatically render the new pizza

### Creating new components
- Shared components (Header, Footer, etc.): `src/ui/_shared/components/`
- Page-specific components: `src/ui/[page-name]/components/`
- All components currently use Astro (no React)
- Use Tailwind CSS v4 utility classes for styling
- For buttons, use the shared `Button.astro` component:
  ```astro
  <Button href="/path" variant="primary" size="lg">
    Button Text
  </Button>
  ```
  - Variants: `primary` (orange), `secondary` (white)
  - Sizes: `md`, `lg`

### Updating styles
- Global styles and animations: `src/ui/styles/global.css`
- CSS variables: `src/ui/styles/variables.css`
- Prefer Tailwind CSS v4 utilities over custom CSS

### WhatsApp integration
- WhatsAppButton component accepts `phone` prop (format: "34123456789")
- Message text is automatically translated based on current locale
- Update phone number in page props or component usage

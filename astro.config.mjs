// @ts-check
import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com", // Cambiar por tu URL de producción
  integrations: [
    react(),
    sitemap({
      lastmod: new Date(),
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en",
          es: "es",
          fr: "fr",
        },
      },
    }),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    icon({
      include: {
        tabler: ["*"],
      },
    }),
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["es", "en", "fr"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

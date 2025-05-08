import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import rootPkg from "../package.json";

// https://astro.build/config
export default defineConfig({
  site: "https://sse-auth.github.io",
  base: "/icons/showcase",
  vite: {
    define: {
      __LIB_VERSION__: JSON.stringify(rootPkg.version),
    },
  },
  trailingSlash: "never",
  publicDir: "./assets",
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    sitemap(),
  ],
});

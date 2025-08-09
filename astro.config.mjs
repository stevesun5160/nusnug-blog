import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: 'https://louai.site',
  integrations: [react(), mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
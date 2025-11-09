import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import Icons from 'unplugin-icons/vite'

// https://astro.build/config
export default defineConfig({
  site: 'https://louai.site',
  integrations: [react(), mdx()],
  vite: {
    plugins: [
      tailwindcss(),
      Icons({
        compiler: 'astro',
        autoInstall: true
      })
    ],
  }, 
  markdown: {
    shikiConfig: {
      theme: 'catppuccin-macchiato',
    },
  },
});

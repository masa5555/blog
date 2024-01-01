import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://masa5555.github.io",
  base: "/blog",
  integrations: [mdx(), sitemap()],
});

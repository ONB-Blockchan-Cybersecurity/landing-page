import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://ONB-Blockchan-Cybersecurity.github.io",
  base: process.env.GITHUB_ACTIONS ? "/landing-page" : "/",
});

import { defineConfig } from "astro/config";

const isGithub = process.env.GITHUB_ACTIONS;

export default defineConfig({
  site: isGithub
    ? "https://ONB-Blockchan-Cybersecurity.github.io/landing-page"
    : "http://localhost:4321",
  base: "/",
});

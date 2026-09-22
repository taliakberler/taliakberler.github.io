import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path";
import { copyFileSync } from "node:fs";

// GitHub Pages has no server-side rewrite, so a direct hit on /card would 404.
// Shipping index.html as 404.html makes Pages serve the SPA for any deep link,
// and react-router then resolves the real route client-side.
const spaFallback = () => ({
  name: "spa-404-fallback",
  closeBundle() {
    copyFileSync(
      path.resolve(__dirname, "dist/index.html"),
      path.resolve(__dirname, "dist/404.html")
    );
  },
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), spaFallback()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: '/',
  // build: {
  //   outDir: "dist",
  // },
});

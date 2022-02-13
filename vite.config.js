import { defineConfig } from "vite";
const { resolve } = require("path");

export default defineConfig({
  base: "./",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        nested: resolve(__dirname, "restaurants/palette_du_gout.html"),
      },
    },
  },
});

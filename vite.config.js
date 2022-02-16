import { defineConfig } from "vite";
const { resolve } = require("path");

export default defineConfig({
  base: "./",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        nested1: resolve(__dirname, "restaurants/a_la_francaise.html"),
        nested2: resolve(__dirname, "restaurants/delice_des_sens.html"),
        nested3: resolve(__dirname, "restaurants/note_enchantee.html"),
        nested4: resolve(__dirname, "restaurants/palette_du_gout.html"),
      },
    },
  },
});

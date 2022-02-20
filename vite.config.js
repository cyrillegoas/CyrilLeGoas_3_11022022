import { defineConfig } from "vite";
const { resolve } = require("path");

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        nested1: resolve("./restaurants/", "a_la_francaise.html"),
        nested2: resolve("./restaurants/", "delice_des_sens.html"),
        nested3: resolve("./restaurants/", "note_enchantee.html"),
        nested4: resolve("./restaurants/", "palette_du_gout.html"),
      },
    },
  },
});

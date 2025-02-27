import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const basenameProd = "/fauxpix";

export default defineConfig(({ command }) => {
  const isProd = command === "build";

  return {
    base: isProd ? basenameProd : "",
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    define: {
      global: {
        basename: isProd ? basenameProd : "",
      },
    },
    build: {
      outDir: "dist", // Output directory
    },
  };
});

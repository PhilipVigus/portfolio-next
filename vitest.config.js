import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    global: true,
    environment: "jsdom",
    css: true,
    setupFiles: "./tests/setup.js",
  },
});

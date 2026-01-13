import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "vitest.setup.ts",
    include: ["app/**/*.test.{ts,tsx}", "tests/**/*.test.{ts,tsx}"],
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "app"),
      "app": path.resolve(__dirname, "app"),
      "assets": path.resolve(__dirname, "public", "assets"),
    },
  },
});
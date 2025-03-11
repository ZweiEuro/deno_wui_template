/// <reference types="vitest" />
import { defineConfig } from "npm:vitest/config";
import deno from "@deno/vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: "./client",
  server: {
    port: 3000,
  },
  plugins: [
    // Some odd recognition bug, they are the correct type
    //@ts-ignore
    react(),
    //@ts-ignore
    deno(),
  ],
  build: {
    outDir: "../dist",
  },
  optimizeDeps: {
    include: ["react/jsx-runtime"],
  },
  test: {
    environment: "jsdom",
    setupFiles: ["tests/TestSetup.ts"],
    globals: true,
    coverage: {
      provider: "istanbul",
      reporters: ["text", "html"],
      all: true,
      exclude: ["src/main.tsx", "**\/node_modules/**"], // the main file doesn't really do anything testable
    },
  },
});

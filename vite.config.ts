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
  optimizeDeps: {
    include: ["react/jsx-runtime"],
  },
  test: {
    environment: "jsdom",
    setupFiles: ["tests/TestSetup.ts"],
    globals: true
  },
});

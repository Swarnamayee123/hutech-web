/** @format */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  base: "/cloud-transformation",
  build: {
    // ssr: true, // Enables SSR
    // rollupOptions: {
    //   input: "./server/entry-server.tsx",
    // },
  },
});

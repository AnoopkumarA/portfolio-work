import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
 
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      base: "/portfol/",
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
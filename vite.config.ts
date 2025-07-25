import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import path from "path"
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'


export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths(), cssInjectedByJsPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./app"),
    },
  }
});

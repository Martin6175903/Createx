import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc';
import svgr from "vite-plugin-svgr";
import * as path from "node:path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
      react(),
      svgr({
          include: "**/*.svg"
      })
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src")
        }
    }
})

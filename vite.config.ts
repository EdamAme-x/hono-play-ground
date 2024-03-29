import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";
import topLevelAwait from "vite-plugin-top-level-await";

export default defineConfig({
    plugins: [
        react(),
        topLevelAwait({
            promiseExportName: "__tla",
            promiseImportName: i => `__tla_${i}`
        })
    ],
    server: {
        port: 3000,
        strictPort: true,
    },
    build: {
        minify: true,
        outDir: "dist",
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    optimizeDeps: {
        exclude: ['@swc/wasm-web']
    }
});

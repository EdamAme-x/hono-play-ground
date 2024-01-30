import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
    plugins: [
        react(),
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

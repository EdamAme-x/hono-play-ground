import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import devServer from '@hono/vite-dev-server'

export default defineConfig({
  plugins: [react({
    jsxImportSource: 'hono/jsx'
  }), devServer({
    entry: "server",
    exclude: [
        /.*\.tsx?($|\?)/,
        /.*\.(s?css|less)($|\?)/,
        /.*\.(svg|png)($|\?)/,
        /^\/@.+$/,
        /^\/favicon\.ico$/,
        /^\/(public|assets|static)\/.+/,
        /^\/node_modules\/.*/
    ],
    injectClientScript: false,
})],
  server: {
    port: 3000,
    strictPort: true
  },
  build: {
    minify: true,
    outDir: 'dist',
  }
})

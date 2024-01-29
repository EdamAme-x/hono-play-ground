import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react({
    jsxImportSource: 'hono/jsx'
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

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import * as path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  resolve: {
    alias: {
      '@': path.resolve( './src'),
      '@pages': path.resolve( './src/pages'),
      '@layouts': path.resolve( './src/layouts'),
      '@ui': path.resolve( './src/ui_components'),
    }
  },
})

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
      '@users': path.resolve( './src/user'),
      '@admin': path.resolve( './src/admin'),
      '@ui': path.resolve( './src/ui_components'),
    }
  },
})

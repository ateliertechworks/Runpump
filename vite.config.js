import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const __dirname = path.resolve()

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  logLevel: 'error', // Suppress warnings, only show errors
  plugins: [
    react(),
  ]
});
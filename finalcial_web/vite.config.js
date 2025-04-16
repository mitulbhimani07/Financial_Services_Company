import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    host: true,
    },
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000 // Increase the limit to 1000 KB (adjust as needed)
  }
})

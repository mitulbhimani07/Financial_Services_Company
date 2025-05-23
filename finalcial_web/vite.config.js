import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3001,
    host: true,
  },
  plugins: [react(), tailwindcss()],
  build: {
    chunkSizeWarningLimit: 1000 // Increase the limit to 1000 KB (adjust as needed)
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/devonboard/api/v1/inquires': {
        target: 'https://contactus-api-g8p6.onrender.com',
        changeOrigin: true
      }
    }
  }
})

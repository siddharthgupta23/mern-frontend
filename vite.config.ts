import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react-dom/client']  // Explicitly add if necessary
    }
  },
  server: {
    host: true, // Allows listening on all network interfaces
    port: process.env.PORT || 5173, // Render provides a PORT variable
  },
  
  
})

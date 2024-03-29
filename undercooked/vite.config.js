import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
 //       target: 'http://10.44.7.221:8080/',
          target: 'http://localhost:8080/',
        changeOrigin: true,
      },
    }
  }
})

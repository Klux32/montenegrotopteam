import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5000,
    proxy: {
      "/api": {
        target: 'http://localhost:5000',
        changeOrigin: true
      }
    }
  },
  // build: {
  //   rollupOptions: {
  //     input: {
  //       main: resolve(__dirname, 'dist/index.html'),
  //       nested: resolve(__dirname, 'nested/index.html')
  //     }
  //   }
  // }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  appType: 'spa',
  base: '/',
  server: {
    port: 5173,
    strictPort: false,
    watch: {
      usePolling: false,
    },
  },
})

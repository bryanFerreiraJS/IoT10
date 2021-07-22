import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import pluginEnv from 'vite-plugin-vue-env'

export default defineConfig({
  plugins: [
    vue(),
    pluginEnv()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
    },
  },
  server: {
    open: true,
  },
  optimizeDeps: {
    include: ['chart.js/dist/chart.min.js']
  }
})

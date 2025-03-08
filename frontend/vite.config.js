import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@mdi': fileURLToPath(new URL('./node_modules/@mdi/font', import.meta.url)), // Alias pour Vuetify (icônes)
    }
  },
  build: {
    outDir: 'target/dist',
    assetsDir: 'static',
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8989',
        changeOrigin: true,
      },
      '/rest': {
        target: 'http://localhost:8989',
        changeOrigin: true,
      },
    },
  },
})

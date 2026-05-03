import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-vue';
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [plugin()],
  base: '/FurryMeiker/',
  server: {
    port: 57347,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})

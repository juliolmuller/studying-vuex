import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/studying-vuex',
  build: {
    outDir: 'docs',
  },
  server: {
    open: '/docs/index.html',
  },
  plugins: [vue()],
})

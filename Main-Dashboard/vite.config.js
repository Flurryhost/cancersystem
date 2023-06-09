import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'


export default {
  plugins: [vue()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'src/main.js'
    }
  }
}



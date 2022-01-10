import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },

  plugins: [
    // https://github.com/vitejs/vite/tree/main/packages/plugin-vue-jsx
    Vue()
  ],
  
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: '@swert/feather-icons',
      fileName: (format) => `feather-icons.${format}.js`
    }
  }
})

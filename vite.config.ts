import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  optimizeDeps: {
  include: [
    `monaco-editor/esm/vs/language/json/json.worker`,
    `monaco-editor/esm/vs/language/css/css.worker`,
    `monaco-editor/esm/vs/language/html/html.worker`,
    `monaco-editor/esm/vs/language/typescript/ts.worker`,
    `monaco-editor/esm/vs/editor/editor.worker`
  ], 
},
})

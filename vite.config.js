import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { cjsInterop } from 'vite-plugin-cjs-interop'
import path from 'path'

const __dirname = path.resolve();

// https://vitejs.dev/config/
export default defineConfig({
  root: __dirname,
  plugins: [
    react(),
    cjsInterop()
  ],
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
})

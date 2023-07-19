import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  base: './',
  build: {
    // build目录名称，默认为"dist"
    outDir: 'build',
    // 静态资源存放目录名称，默认为"assets"
    assetsDir: 'static',
  },
})

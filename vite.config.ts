import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitetsconfigpath from 'vite-plugin-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitetsconfigpath()
  ],
  server: {
    port: 3000
  }
})

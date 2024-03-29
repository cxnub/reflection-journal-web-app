import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/n
export default defineConfig({
  plugins: [react(), basicSsl()],
  server: {
    proxy: {
      '/api': {
        target: 'https://localhost:3000',
        changeOrigin: false,
        secure: false
      }
    }
  }
})

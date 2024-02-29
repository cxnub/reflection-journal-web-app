import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/n
export default defineConfig({
  plugins: [react()],
})

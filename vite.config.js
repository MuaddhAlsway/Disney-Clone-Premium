import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Disney-Clone-Premium/', // 👈 this is the important part
})

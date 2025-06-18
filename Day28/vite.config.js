import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// tailwind css 포함
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
})
// 플러그인 포함
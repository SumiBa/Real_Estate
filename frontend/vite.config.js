import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    proxy: {
      // Proxy API requests to Ngrok backend during local development
      '/get_properties.php': {
        target: 'https://b795-65-2-31-39.ngrok-free.app', // Ngrok URL for your backend
        changeOrigin: true, // Needed for virtual hosted sites
        rewrite: (path) => path.replace(/^\/get_properties.php/, '/get_properties.php'),
      },
      '/submit_enquiry.php': {
        target: 'https://b795-65-2-31-39.ngrok-free.app',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/submit_enquiry.php/, '/submit_enquiry.php'),
      },
      // Proxy for contact.php API
      '/contact.php': {
        target: 'https://b795-65-2-31-39.ngrok-free.app',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/contact.php/, '/contact.php'),
      }
    }
  }
})

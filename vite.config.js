import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'],  // Include .glb assets (for 3D models, etc.)
  
  // Explicitly set the output directory to 'dist'
  build: {
    outDir: 'dist',  // Ensure built files are placed in the 'dist' directory
    chunkSizeWarningLimit: 2000,  // Optional: increase chunk size limit if needed
  }
})

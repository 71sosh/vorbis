import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  base: "/", // Ensure this is set to root
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@shared": path.resolve(__dirname, "../../shared"),
      "@assets": path.resolve(__dirname, "../../attached_assets"),
    },
  },
  root: __dirname,
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('@radix-ui')) return 'radix';
            if (id.includes('framer-motion')) return 'framer';
            if (id.includes('recharts')) return 'charts';
            if (id.includes('react-hook-form') || id.includes('zod')) return 'forms';
            if (id.includes('@tanstack/react-query')) return 'tanstack';
            if (id.includes('embla-carousel')) return 'carousel';
            if (id.includes('react-resizable-panels')) return 'panels';
            if (id.includes('lucide-react')) return 'icons';
            if (id.includes('sonner')) return 'toast';
            if (id.includes('@supabase/supabase-js')) return 'supabase';
            if (id.includes('jszip')) return 'zip';
            return 'vendor';
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
    watch: {
      usePolling: true,
    },
  },
  css: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
});

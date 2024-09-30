import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sassDts from 'vite-plugin-sass-dts';
import svgr from 'vite-plugin-svgr';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts(),
    sassDts(),
    svgr(),
  ],
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
});

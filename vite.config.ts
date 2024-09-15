import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'ComponentLibrary',
      fileName: (format) => `component-library.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  css: {
    modules: {
      // Customize CSS Modules options here if needed
      localsConvention: 'camelCaseOnly', // or 'camelCase', 'dashes', etc.
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/variables";`, // if you have global SCSS variables
      },
    },
  },
});

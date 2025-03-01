import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,  // ✅ Creates a `types` entry in package.json
      copyDtsFiles: true,      // ✅ Ensures `.d.ts` files are copied
      rollupTypes: true,       // ✅ Generates a single `index.d.ts`
    }),
  ],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "RegionXComponents",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"], // ✅ Prevents React from being bundled
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});

import postcss from 'rollup-plugin-postcss';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import image from '@rollup/plugin-image';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',   // Output for CommonJS
      format: 'cjs',           // CommonJS format for Node.js
      exports: 'named'         // Named exports
    },
    {
      file: 'dist/index.es.js', // Output for ES modules
      format: 'es',            // ES module format for modern bundlers
      exports: 'named'
    }
  ],
  plugins: [
    nodeResolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      moduleDirectories: ['node_modules']
    }),
    commonjs({
      include: /node_modules/,
      exclude: [/react/, /react-dom/],
      transformMixedEsModules: true,
    }),
    typescript(),
    postcss({
      extract: true,
      modules: true,
      use: ['sass'],
    }),
    image()
  ],
  external: (id) => /^(react|react-dom|react\/jsx-runtime)$/.test(id) || /node_modules/.test(id),
  cache: false,
};

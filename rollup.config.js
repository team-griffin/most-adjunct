import babel from 'rollup-plugin-babel';
import localResolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import path from 'path';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/es/most-adjunct.js',
      format: 'es',
    },
    {
      file: 'dist/cjs/most-adjunct.js',
      format: 'cjs',
    },
  ],
  plugins: [
    localResolve(),
    typescript({
      tsconfig: path.resolve('./tsconfig.json'),
      tsconfigOverride: {
        compilerOptions: {
          module: 'ES2015',
        },
      },
    }),
    babel({
      exclude: 'node_modules/**',
      extensions: [ '.js', '.ts' ],
    }),
  ],
  external: [
    'most',
    '@most/create',
  ],
};

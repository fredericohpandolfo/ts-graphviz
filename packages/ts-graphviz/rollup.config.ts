import { RollupOptions } from 'rollup';
import typescript from 'rollup-plugin-typescript2';
import del from 'rollup-plugin-delete';
import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-terser';

const options: RollupOptions[] = [
  {
    input: './src/index.ts',
    plugins: [typescript()],
    output: [
      {
        format: 'cjs',
        file: './lib/index.cjs',
      },
      {
        format: 'esm',
        file: './lib/index.js',
      },
      {
        format: 'umd',
        name: 'graphviz',
        file: './lib/bundle.min.js',
        plugins: [terser()],
      },
    ],
  },
  {
    input: './lib/index.d.ts',
    plugins: [
      del({
        targets: ['lib/**/*.d.ts', '!lib/index.d.ts'],
        hook: 'buildEnd',
      }),
      dts(),
    ],
    output: [
      {
        format: 'esm',
        file: './lib/index.d.ts',
      },
    ],
  },
];

export default options;
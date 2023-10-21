import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/bundle.mjs',
            format: 'esm'
        },
        {
            file: "dist/bundle.cjs",
            format: 'commonjs'
        }
    ],
    plugins: [
        resolve(),
        commonjs(),
        typescript(),
        terser(),
        babel({
            exclude: 'node_modules/**'
        })
    ]
};
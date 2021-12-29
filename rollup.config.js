import babel from '@rollup/plugin-babel';
import resolve, { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import dtsBundle from 'rollup-plugin-dts-bundle';
import path from 'path';
import pkg from './package.json';

const banner = '/*!\n' + ` * shuxinInfo-FE-util.js v${pkg.version}\n` + ` * (c) 2021-${new Date().getFullYear()} zhonghao.ge\n` + ' * Released under the MIT License.\n' + ' */';

const conmmonPlugins = [
    nodeResolve({
        extensions: ['.ts', '.js'],
    }),
    typescript({
        useTsconfigDeclarationDir: true,
    }),
    dtsBundle({
        bundle: {
            name: '@shuinfo/utils',
            main: './distTypes/index.d.ts',
            out: path.resolve(__dirname, 'types/index.d.ts')
        }
    })
];
export default [
    {
        input: 'src/index.ts',
        output: [
            {
                format: 'cjs',
                file: path.resolve(__dirname, `dist/utils.cjs.js`),
                sourcemap: true,
                banner,
            },
            {
                name: 'utils',
                format: 'umd',
                file: path.resolve(__dirname, `dist/utils.umd.js`),
                sourcemap: true,
                banner,
            },
            {
                name: 'utils',
                format: 'iife',
                file: path.resolve(__dirname, `dist/utils.iife.js`),
                sourcemap: true,
                banner,
            },
            {
                format: 'cjs',
                file: path.resolve(__dirname, `dist/utils.cjs.min.js`),
                sourcemap: true,
                banner,
                plugins: [terser()],
            },
            {
                name: 'utils',
                format: 'umd',
                file: path.resolve(__dirname, `dist/utils.umd.min.js`),
                sourcemap: true,
                banner,
                plugins: [terser()],
            },
            {
                name: 'utils',
                format: 'iife',
                file: path.resolve(__dirname, `dist/utils.iife.min.js`),
                sourcemap: true,
                banner,
                plugins: [terser()],
            },
        ],
        plugins: [
            commonjs(),
            resolve(),
            babel({
                exclude: 'node_modules/**',
                presets: [
                    [
                        '@babel/preset-env',
                        {
                            modules: false,
                            useBuiltIns: 'usage',
                            corejs: 3,
                        },
                    ],
                ],
                babelHelpers: 'bundled',
            }),
            ...conmmonPlugins,
        ],
    },
    {
        input: 'src/index.ts',
        output: [
            {
                format: 'esm',
                file: path.resolve(__dirname, `dist/utils.esm.js`),
                sourcemap: true,
                banner,
            },
            {
                format: 'esm',
                file: path.resolve(__dirname, `dist/utils.esm.min.js`),
                sourcemap: true,
                banner,
                plugins: [terser()],
            },
        ],
        plugins: [
            babel({
                exclude: 'node_modules/**',
                extends: './babel.config.js',
                plugins: [['@babel/plugin-transform-runtime', { useESModules: true }]],
                babelHelpers: 'runtime',
            }),
            ...conmmonPlugins,
        ],
        external: [/@babel\/runtime/],
    },
];

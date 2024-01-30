import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy'
import tsconfigPaths from 'vite-tsconfig-paths'
import copy from 'rollup-plugin-copy';


export default defineConfig({
    ...(process.env.NODE_ENV === 'development'
        ? {
            define: {
                global: {},
            },
        }
        : {}),
    resolve: {
        alias: {
            ...(process.env.NODE_ENV !== 'development'
                ? {
                    './runtimeConfig': './runtimeConfig.browser', //fix production build
                }
                : {}),
        },
    },
    plugins: [
        tsconfigPaths(),
        react(),
        copy({
            targets: [
                //   { src: 'src/assets/*', dest: 'dist/src/assets' },
                { src: 'netlify.toml', dest: 'dist' }
            ],
            hook: 'writeBundle' // This is important for the copy to happen at the correct stage in the build process
        })
    ],
    esbuild: {
        jsxFactory: 'React.createElement',
        jsxFragment: 'React.Fragment',
    },
    css: {
        modules: {
            localsConvention: 'camelCaseOnly',
        },
    },
    build: {
        minify: false,
        outDir: './dist'
    },
});
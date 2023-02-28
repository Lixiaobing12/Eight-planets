import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import path from 'path'
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            imports: [
                'vue',
                {
                    'naive-ui': [
                        'useDialog',
                        'useMessage',
                        'useNotification',
                        'useLoadingBar'
                    ]
                }
            ]
        }),
        Components({
            resolvers: [NaiveUiResolver()]
        })
    ],
    server: {
        host: '0.0.0.0',
        port: 8080,
        open: true,
        hmr: true,
        usePolling: true,
        // 设置代理
        proxy: {
            '/api': {
                target: 'http://139.180.159.42:8080/',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/api/, '')
            },
        }
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            web3: 'web3/dist/web3.min.js',
        },
    },
});
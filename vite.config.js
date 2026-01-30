import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/fanyi': {
        target: 'https://fanyi-api.baidu.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fanyi/, ''),
        // 添加跨域相关配置
        headers: {
          'Origin': 'http://localhost:5173'
        }
      }
    }
  },
  // 添加环境变量定义
  define: {
    'process.env': {}
  }
})
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import VueMacros from 'unplugin-vue-macros'
import { resolve } from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    VueMacros.vite({
      plugins: {
        vue: vue(),
        vueJsx: vueJsx(), // 如有需要
        // vueRouter: VueRouter({ // 如有需要
        //   extensions: ['.vue', '.setup.tsx']
        // })
      },
    }),

    ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build:{
    outDir:'dist/umd',
    lib:{
      entry:resolve(__dirname,'src/index.ts'),
      name:'VElement',
      fileName:'v-element',
      formats:['umd']
    },
    rollupOptions:{
      external:['vue'],
      output:{
        exports:'named',
        globals:{
          vue:'Vue'
        },
        assetFileNames:(chunkInfo)=>{
          if(chunkInfo.name==='style.css'){
            return 'index.css'
          }
          return chunkInfo.name as string

        }
      }
    }
  }
})

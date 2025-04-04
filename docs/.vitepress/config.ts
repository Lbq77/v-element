import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'

import vueJsx from '@vitejs/plugin-vue-jsx'
import VueMacros from 'unplugin-vue-macros'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  vite:{
    plugins: [
      VueMacros.vite({
        setupComponent:false,
        setupSFC:false,
        plugins: {
          vueJsx: vueJsx(), // 如有需要
        },
      }),
      ],
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('../../src', import.meta.url))
        },
      },
  },
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  },
  // srcDir:'components',
  themeConfig: {


    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text:'Basic',
        items:[
         { text:'Button',link:'/components/button'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

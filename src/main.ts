import { createApp } from 'vue'
import VElement from '@lbq77/v-element'
import '../node_modules/@lbq77/v-element/dist/v-element.css'
import App from './App.vue'

createApp(App).use(VElement)
.mount('#app')

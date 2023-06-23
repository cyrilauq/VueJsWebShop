import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { router } from '@/modules/Router'


import HeaderVue from '@/components/global/HeaderVue.vue'
import FooterVue from '@/components/global/FooterVue.vue'

const app = createApp(App)

// With this, I can access use the component HeaderVue in every part of my application
app
    .component('HeaderVue', HeaderVue)
    .component('FooterVue', FooterVue)

app.use(router).mount('#app')

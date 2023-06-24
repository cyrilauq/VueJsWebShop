import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { router } from '@/modules/Router'


import ProductItemVue from '@/components/pages/ProductItemVue.vue'

const app = createApp(App)

// With this, I can access use the component HeaderVue in every part of my application
app
    .component('ProductItemVue', ProductItemVue)

app.use(router).mount('#app')

export { router }

import { createWebHistory, createRouter } from 'vue-router'

import HomeVue from '@/components/HomeVue.vue'
import AboutVue from '@/components/AboutVue.vue'

const routes = [
    { path: '/', component: HomeVue },
    { path: '/about', component: AboutVue },
    { path: '/home', component: HomeVue },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
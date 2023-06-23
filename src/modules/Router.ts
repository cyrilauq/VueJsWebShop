export { router }

import { createWebHistory, createRouter } from 'vue-router'

import HomeVue from '@/components/pages/HomeVue.vue'
import AboutVue from '@/components/pages/AboutVue.vue'
import ContactVue from '@/components/pages/ContactVue.vue'
import Error505Vue from '@/components/pages/error/Error505Vue.vue'

const routes = [
    { path: '/', redirect: { name: 'Home' } },
    { path: '/about', name: "About us", component: AboutVue },
    { path: '/home', name: "Home" , component: HomeVue },
    { path: '/contact', name: "Contact us" , component: ContactVue },
    { path: '/:notFound', name: "Page not found" , component: Error505Vue },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
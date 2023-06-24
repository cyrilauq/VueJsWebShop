export { router }

import { createWebHistory, createRouter } from 'vue-router'

import HomeVue from '@/components/pages/HomeVue.vue'
import AboutVue from '@/components/pages/AboutVue.vue'
import ContactVue from '@/components/pages/ContactVue.vue'
import ProductVue from '@/components/pages/ProductVue.vue'
import Error404Vue from '@/components/pages/error/Error404Vue.vue'
import ShopCartVue from '@/components/pages/user/ShopCartVue.vue'
import UserProfileVue from '@/components/pages/user/UserProfileVue.vue'

const routes = [
    /* With this [redirect: { name: 'Home' }], I tell to the router to redirect to the page with the name Home */
    { path: '/', redirect: { name: 'Home' }, meta: { transition: 'slide-left' }, },
    { path: '/about', name: "About us", component: AboutVue, meta: { transition: 'slide-left' }, },
    { path: '/home', name: "Home" , component: HomeVue, meta: { transition: 'slide-left' }, },
    { path: '/contact', name: "Contact us" , component: ContactVue, meta: { transition: 'slide-left' }, },
    { path: '/product/:productId(\\d+)', name: "Product" , component: ProductVue, meta: { transition: 'slide-left' }, },
    { path: '/shop-cart', name: "Shop cart" , component: ShopCartVue, meta: { transition: 'slide-left' }, },
    { path: '/profile', name: "Profile" , component: UserProfileVue, meta: { transition: 'slide-left' }, },
    { path: '/:notFound', name: "Page not found" , component: Error404Vue, meta: { transition: 'slide-left' }, },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
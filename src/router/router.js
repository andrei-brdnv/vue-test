import { createRouter, createWebHistory } from "vue-router";
import Main from "@/pages/Main";
import ProductPage from "@/pages/ProductPage";

const routes = [
    {
        path: '/',
        component: Main,
    },
    {
        path: '/products/:id',
        component: ProductPage,
    },
]

export const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})
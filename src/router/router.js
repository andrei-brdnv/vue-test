import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/pages/MainPage";
import ProductPage from "@/pages/ProductPage";

const routes = [
    {
        path: '/',
        component: MainPage,
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
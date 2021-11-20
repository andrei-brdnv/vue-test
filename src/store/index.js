import { createStore } from "vuex";
import { productsModule } from "@/store/productsModule";
import createPersistedState from "vuex-persistedstate";

const productState = createPersistedState({
    paths: ['products.products'],
})

export const store = createStore({
    modules: {
        products: productsModule
    },
    plugins: [productState]
})
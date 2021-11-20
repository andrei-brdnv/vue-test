import mockupData from "@/utils/mockupData";

export const productsModule = {
    state: () => ({
        products: mockupData,
    }),
    getters: {

    },
    mutations: {
        createProduct(state, product) {
            state.products.unshift(product)
        },
    },
    actions: {

    },
    namespaced: true,
}
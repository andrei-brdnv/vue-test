import mockupData from "@/utils/mockupData";

export const productsModule = {
    state: () => ({
        products: mockupData,
        searchQuery: '',
        selectedSort: '',
        sortOptions: [
            {value: 'title', name: 'По названию'},
            {value: 'descPrice', name: 'Цена по убыванию'},
            {value: 'ascPrice', name: 'Цена по возрастанию'},
        ],
    }),
    getters: {
        sortedProducts(state) {
            switch (state.selectedSort) {
                case "title":
                    return [...state.products].sort((a, b) => {
                        return a[state.selectedSort]?.localeCompare(b[state.selectedSort])
                    })
                case "descPrice":
                    return [...state.products].sort((a, b) => {
                        return b.price - a.price
                    })
                case "ascPrice":
                    return [...state.products].sort((a, b) => {
                        return a.price - b.price
                    })
                default:
                    return state.products
            }
        },
        sortedAndSearchedProducts(state, getters) {
            return getters.sortedProducts.filter(product => {
                return (
                    product.title.toLowerCase().includes(state.searchQuery.toLowerCase())
                    || product.price.toString().includes(state.searchQuery.toString())
                    || product.description.toLowerCase().includes(state.searchQuery.toLowerCase())
                )
            })
        }
    },
    mutations: {
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort
        },
        createProduct(state, product) {
            state.products.unshift(product)
        },
        deleteProduct(state, product) {
            state.products = state.products.filter(p => p.id !== product.id)
        }
    },
    actions: {

    },
    namespaced: true,
}
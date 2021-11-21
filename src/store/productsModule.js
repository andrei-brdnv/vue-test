import mockupData from "@/utils/mockupData";

export const productsModule = {
    state: () => ({
        products: mockupData,
        searchQuery: '',
        selectedSort: '',
        isMobileFormOpened: false,
        isProductCreated: false,
        sortOptions: [
            {value: 'title', name: 'По названию'},
            {value: 'descPrice', name: 'Цена по убыванию'},
            {value: 'ascPrice', name: 'Цена по возрастанию'},
        ],
    }),

    getters: {
        sortedProducts(state) {
            switch (state.selectedSort) {
                // Сортируем по названию товара
                case "title":
                    return [...state.products].sort((a, b) => {
                        return a[state.selectedSort]?.localeCompare(b[state.selectedSort])
                    })
                // Сортируем по убыванию цены
                case "descPrice":
                    return [...state.products].sort((a, b) => {
                        return b.price - a.price
                    })
                // Сортируем по возрастанию цены
                case "ascPrice":
                    return [...state.products].sort((a, b) => {
                        return a.price - b.price
                    })
                default:
                    return state.products
            }
        },
        // Поиск по названию, описанию и цене
        sortedAndSearchedProducts(state, getters) {
            return getters.sortedProducts.filter(product => {
                return (
                    product.title.toLowerCase().includes(state.searchQuery.toLowerCase())
                    || product.price.toString().includes(state.searchQuery.toString())
                    || product.description?.toLowerCase().includes(state.searchQuery.toLowerCase())
                )
            })
        },
    },

    mutations: {
        setIsMobileFormOpened(state, bool) {
            state.isMobileFormOpened = bool
        },
        setIsProductCreated(state, bool) {
            state.isProductCreated = bool
        },
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
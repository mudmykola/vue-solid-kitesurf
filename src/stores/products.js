import { defineStore } from 'pinia';

export const useProductsStore = defineStore('products', {
    state: () => ({
        productTitle: {
            title: 'Our Shop',
            desc: 'Join our kitesurf lovers worldwide who trust us to provide the best kite gear and deals.',
        },
    }),
    getters: {
        GET_TITLE: (state) => state.productTitle,
    },
    actions: {
        SET_TITLE(productTitle) {
            this.productTitle = productTitle;
        },
    },
});
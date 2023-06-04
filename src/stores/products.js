import {defineStore} from 'pinia';

export const useProductsStore = defineStore('products', {
    state: () => ({

        productTitle: {
            title: 'Our Shop',
            desc: 'Join our kitesurf lovers worldwide who trust us to provide the best kite gear and deals.',
        },
        productCards: [
            {
                id: 1,
                title: 'Summer surfboat 6ft',
                img: 'product-img-1.webp',
                alt: 'product-img'
            },
            {
                id: 2,
                title: 'Summer surfboat 6ft',
                img: 'product-img-2.webp',
                alt: 'product-img'
            },
            {
                id: 3,
                title: 'Summer surfboat 6ft',
                img: 'product-img-3.webp',
                alt: 'product-img'
            },
            {
                id: 4,
                title: 'Summer surfboat 6ft',
                img: 'product-img-1.webp',
                alt: 'product-img'
            },
            {
                id: 5,
                title: 'Summer surfboat 6ft',
                img: 'product-img-2.webp',
                alt: 'product-img'
            },
            {
                id: 6,
                title: 'Summer surfboat 6ft',
                img: 'product-img-3.webp',
                alt: 'product-img'
            },

        ],

    }),
    getters: {
        GET_TITLE: (state) => state.productTitle,
        GET_PRODUCT_CARDS: (state) => state.productCards,

    },
    actions: {
        SET_TITLE(productTitle) {
            this.productTitle = productTitle;
        },

    },
});
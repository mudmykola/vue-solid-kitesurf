import { defineStore } from 'pinia';

export const useBlogStore = defineStore('blog', {
    state: () => ({
        blogList: [
            {
                img: 'src/assets/image/blog-img-1.png',
                alt: 'blog-img',
                link: '#',
                text: 'Care of licenced instructor to make you feel safe and confident',
            },
            {
                img: 'src/assets/image/blog-img-2.png',
                alt: 'blog-img',
                link: '#',
                text: 'Wetsuit, Helmet, Harness, Vest included in the cource price',
            },
            {
                img: 'src/assets/image/blog-img-3.png',
                alt: 'blog-img',
                link: '#',
                text: 'The latest multibrand kitesurfing equipment',
            },
            {
                img: 'src/assets/image/blog-img-1.png',
                alt: 'blog-img',
                link: '#',
                text: 'The latest multibrand kitesurfing equipment',
            },
        ],
    }),
});

import {defineStore} from 'pinia'

export const useTrainersStore = defineStore('trainers', {
    state: () => ({
        title: 'Meet our Trainers',
        desc: 'Get on Obidos waters! Enjoy a place with perfect surfing conditions and our professional trainers. ',

        trainersList: [
            {
                id: 1,
                textLink: 'Wingfoil',
                urlLink: '/',
                image: 'lessons-img-link-1.webp',
                alt: " lessons-img",
                icon: 'arrrow-link.svg',
                iconAlt: 'arrow-icon',
            },

        ],
    }),
    getters: {
        getTitle: (state) => state.title,
        getDesc: (state) => state.desc,
    },
    actions: {
        setTitle(title) {
            this.title = title;
        },
        setDesc(desc) {
            this.desc = desc;
        },
    },
})
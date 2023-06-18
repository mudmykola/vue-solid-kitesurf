import {defineStore} from 'pinia'

export const useTrainersStore = defineStore('trainers', {
    state: () => ({
        title: 'Meet our Trainers',
        desc: 'Get on Obidos waters! Enjoy a place with perfect surfing conditions and our professional trainers. ',

        trainersList: [{
            id: 1, nameTrainers: 'Mike Jones', trainersLink: '/', image: 'trainers-1.webp', alt: " trainers-img-1",
        }, {
            id: 2, nameTrainers: 'Elisa Stone', trainersLink: '/', image: 'trainers-2.webp', alt: " trainers-img-2",
        }, {
            id: 3, nameTrainers: 'Tony Kent', trainersLink: '/', image: 'trainers-3.webp', alt: " trainers-img-3",
        },

        ],
    }), getters: {
        getTitle: (state) => state.title, getDesc: (state) => state.desc,
    }, actions: {
        setTitle(title) {
            this.title = title;
        }, setDesc(desc) {
            this.desc = desc;
        },
    },
})
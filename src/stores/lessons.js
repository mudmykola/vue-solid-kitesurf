import {defineStore} from 'pinia'

export const useLessonsTextStore = defineStore('lessons',{
    state: () => ({
        title: 'Kitesurfing Lessons"',
        desc: [{
            id: 1,
            text: 'Unleash your passion for kitesurfing at SOLid Kite School, the go-to Obidos Kite School for' +
                ' adrenaline-fueled adventures in Portugal\'s azure waters. 🌊 🏄‍♂️'
        }, {
            id: 2,
            text: 'Our expert instructors provide personalized kite lessons in Obidos, ensuring a thrilling and' +
                ' safe experience for kitesurfing enthusiasts of all skill levels. Join us for unforgettable Portugal kitesurfing lessons, and let your kiteboarding journey take flight on the breathtaking shores of Obidos! 🏝️'
        },],
        lessonsList: [
            {
                id:1,
                textLink: 'Wingfoil',
                urlLink: '/',
                image: 'lessons-img-link-1.webp',
                alt:" lessons-img",
                icon: 'arrrow-link.svg',
                iconAlt: 'arrow-icon',
            },
            {
                id:2,
                textLink: 'Accomodation',
                urlLink: '/',
                image: 'lessons-img-link-2.webp',
                alt:" lessons-img",
                icon: 'arrrow-link.svg',
                iconAlt: 'arrow-icon',
            },
            {
                id:3,
                textLink: 'Learning to surf',
                urlLink: '/',
                image: 'lessons-img-link-3.webp',
                alt:" lessons-img",
                icon: 'arrrow-link.svg',
                iconAlt: 'arrow-icon',
            },
            {
                id:4,
                textLink: 'Rental kitesurfing equipment',
                urlLink: '/',
                image: 'lessons-img-link-4.webp',
                alt:" lessons-img",
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
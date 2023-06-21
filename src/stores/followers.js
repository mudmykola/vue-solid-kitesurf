import {defineStore} from 'pinia'

export const useFollowersStore = defineStore({
    id: 'followers',
    state: () => ({
       ava: [
           {
               id:1,
               image: 'avatar-1.webp',
               alt: 'ava-1'
           },
           {
               id:2,
               image: 'avatar-2.webp',
               alt: 'ava-2'
           },
           {
               id:3,
               image: 'avatar-3.webp',
               alt: 'ava-3'
           },
           {
               id:4,
               image: 'avatar-4.webp',
               alt: 'ava-4'
           },
       ],
        followImageFirst: [
            {
                id: 1,
                image: 'follow-image-1.webp',
                alt: 'follow-image-1'
            },
        ],
        followImageSecond: [
            {
                id: 1,
                image: 'follow-image-2.webp',
                alt: 'follow-image-2'
            },

        ],
        followImageThird: [

            {
                id: 1,
                image: 'follow-image-3.webp',
                alt: 'follow-image-3'
            },
        ],

    }),

});
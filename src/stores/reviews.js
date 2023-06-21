import { defineStore } from 'pinia';
import axios from 'axios';

export const useUserStore = defineStore('user', {
    state: () => ({
        users: [],
        filledStars: 0,
    }),
    actions: {
        async fetchUsersData() {
            try {
                const avatarResponse = await axios.get('https://randomuser.me/api/?results=3');
                const avatarData = avatarResponse.data.results;

                const reviewsResponse = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=3');
                const reviewsData = reviewsResponse.data;

                const users = avatarData.map((avatar, index) => ({
                    id: avatar.login.uuid,
                    avatar: avatar.picture.large,
                    name: `${avatar.name.first} ${avatar.name.last}`,
                    city: avatar.location.city,
                    review: reviewsData[index].body,
                }));

                this.users = users;
            } catch (error) {
                console.log(error);
            }
        },
        fillStars(index) {
            if (this.filledStars === index) {
                this.filledStars = 0;
            } else {
                this.filledStars = index;
            }
        },
    },
});
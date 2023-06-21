<template>
  <div>
    <div class="card bg-default w-404 rounded-20" v-for="user in users" :key="user.id">
      <div class="card-box pt-9 pr-7 pb-12 pl-9">
        <div class="card-image flex">
          <img :src="user.avatar" alt="Avatar"/>
          <div class="card-image__name">
            <div class="fcard-image__name--stars stars ">
              <ul class="flex pb-2.5">
                <li class="flex cursor-pointer" v-for="star in 5" :key="star" :class="{ 'filled': star <= filledStars }"
                    @click="fillStars(star)">
                  <svg-icon type="mdi" :path="path"></svg-icon>
                </li>
              </ul>
            </div>
            <h2>{{ user.name }}</h2>
            <p>{{ user.city }}</p>
          </div>
        </div>
        <div class="card-reviews">
          <p>{{ user.review }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { useUserStore } from '@/stores/reviews';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiStar } from '@mdi/js';

export default {
  name: 'ReviewsContentList',
  components: {
    SvgIcon,
  },
  setup() {
    const userStore = useUserStore();

    userStore.fetchUsersData();

    const filledStars = userStore.filledStars;
    const fillStars = userStore.fillStars;
    const users = userStore.users;
    const path = mdiStar;

    return {
      filledStars,
      fillStars,
      users,
      path,
    };
  },
}
</script>


<style lang="scss" scoped>
@use "src/styles/variables" as var;

.stars {
  color: var.$c102;
  display: flex;
}

.filled {
  color: var.$c102;
}
</style>
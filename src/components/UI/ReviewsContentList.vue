<template>
  <div class="flex justify-center pt-11 pb-24  gap-5">
    <div class="card  bg-default w-404 rounded-20 cursor-pointer" v-for="user in users" :key="user.id">
      <div class="card-box pt-9 pr-7 pb-12 pl-9">
        <div class="card-image flex">
          <img class="rounded-20 w-70 h-70" :src="user.avatar" alt="Avatar"/>
          <div class="card-image__name pl-4">
            <div class="fcard-image__name--stars stars ">
              <ul class="flex ">
                <li class="flex cursor-pointer pb-1.5" v-for="star in 5" :key="star" :class="{ 'filled': star <=
                filledStars }"
                    @click="fillStars(star)">
                  <svg-icon type="mdi" :path="path"></svg-icon>
                </li>
              </ul>
            </div>
            <h2 class="text-16 leading-20 font-font-b text-c100">{{ user.name }}</h2>
            <p class="text-16 leading-20 font-font-l text-c100 pt-1.5">{{ user.city }}</p>
          </div>
        </div>
        <div class="card-reviews pt-3.5">
          <p class="font-font-l text-16 leading-20 capitalize">{{ user.review }}</p>
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
  components: {
    SvgIcon,
  },

}
</script>


<style lang="scss" scoped>
@use "src/styles/variables" as var;
.card{
  @extend %dtrans;
  &:hover{
    @extend %form-ef;
    @extend %htrans;
  }
  &-reviews{
    position: relative;
    z-index: 999;
  }
  &-image{
    &__name{
      position: relative;
      z-index: 999;
      &:after{
        position: absolute;
        content: '';
        background-image: url('src/assets/image/svg/reviews-el.svg');
        width: 148px;
        height: 104px;
        z-index: -1;
        top: 0;
        left: 92%;
      }
    }
  }
}
.stars {
  color: var.$c102;
  display: flex;
}

.filled {
  color: var.$c102;
}
</style>
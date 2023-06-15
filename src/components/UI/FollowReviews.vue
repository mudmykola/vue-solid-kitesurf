<template>
  <div class="follow-reviews bg-c100 rounded-20 w-280 h-120 flex justify-center items-center">
    <div class="follow-reviews__number mr-5">
      <h2 class="text-38 leading-42 text-default font-font-bl">{{
          numberRating
        }}</h2>
    </div>
    <div class="follow-reviews__rating  ">
      <div class="follow-reviews__stars stars ">
        <ul class="flex pb-2.5">
          <li class="flex cursor-pointer" v-for="star in 5" :key="star" :class="{ 'filled': star <= filledStars }"
              @click="fillStars(star)">
            <svg-icon type="mdi" :path="path"></svg-icon>
          </li>
        </ul>
      </div>
      <div class="follow-reviews__view ">
        <p class="text-16 leading-22 font-font-l text-default ">{{
            numberReviews
          }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import {mdiStar} from '@mdi/js';
import { ref, reactive } from 'vue';

export default {
  name: "FollowReviews",
  components: {
    SvgIcon
  },
  setup (props) {
    const filledStars = ref(props.numberRating);
    const fillStars = (index) => {
      if (filledStars.value === index) {
        filledStars.value = 0;
      } else {
        filledStars.value = index;
      }
    };

    return{
      filledStars,
      fillStars,
      path: mdiStar,
    }
  },
  props: {
    numberRating: {
      type: Number,
      required: true,
    },
    numberReviews: {
      type: String,
      required: true,
    }
  },
}
</script>

<style lang="scss" scoped>
@use "src/styles/variables" as var;

.stars {
  color: var.$default;
  display: flex;
}

.filled {
  color: var.$c102;
}
</style>
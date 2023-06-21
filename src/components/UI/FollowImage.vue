<template>
  <div class="image-box flex items-center gap-5" >
    <div class="image-box__items flex flex-col items-end" v-for="item in followImageFirst" :key="item.id">
      <img :src="`/src/assets/image/${item.image}`" :alt="item.alt"/>
      <span class="flex rounded-20 bg-c103 mt-5"></span>
    </div>
    <div class="image-box__items flex flex-col " >
      <img v-for="item in followImageSecond" :key="item.id" :src="`/src/assets/image/${item.image}`" :alt="item.alt"/>
      <img class="w-170 mt-5" v-for="item in followImageThird" :key="item.id" :src="`/src/assets/image/${item.image}`"
           :alt="item.alt"/>
    </div>
  </div>
</template>

<script>
import {useFollowersStore} from "@/stores/followers";

export default {
  name: "FollowImage",
  setup() {
    const followersStore = useFollowersStore();

    return {
      followImageFirst: followersStore.followImageFirst,
      followImageSecond: followersStore.followImageSecond,
      followImageThird: followersStore.followImageThird,
    }
  }
}
</script>

<style lang="scss" scoped>
@use "src/styles/variables" as var;
.image-box{
  &__items{
    span{
      width: 109px;
      height: 109px;

    }
  }
}
</style>
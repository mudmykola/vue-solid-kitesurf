<template>
 <div class="avatars">
     <ul  class="flex items-center" >
       <li  v-for="item in avaItems"  :key="item.id" >
         <img :src="`/src/assets/image/${item.image}`" :alt="item.alt"/>
       </li>
     </ul>
  <div class="flex items-center pt-2.5">
    <h2 class="text-16 leading-20 font-font-b text-c100">{{followersCount}}</h2>
    <p class="font-font-l ml-3">{{followersTitle}}</p>
  </div>
 </div>
</template>

<script>
import {useFollowersStore} from "@/stores/followers";


export default {
  name: "FollowCommunity",
  props: {
    followersTitle: {
      type: String,
      required: true,
      default: 'Join our community',
    },
    followersCount: {
      type: Number,
      required: true,
      default: '2579+',
    },
  },
  setup() {
  const followersStore = useFollowersStore();
  return{
    avaItems: followersStore.ava,
  }

  },
}
</script>

<style lang="scss" scoped>
@use "src/styles/variables" as var;
</style>
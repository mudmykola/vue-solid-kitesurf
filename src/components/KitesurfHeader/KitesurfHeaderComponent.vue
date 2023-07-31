<template>
  <div class="kitesurf-inner pt-[0.938rem] flex justify-between">
    <div class="kitesurf-text bg-c103 rounded-[1.25rem] w-[61.563rem] relative z-[9999]">
      <div class="kitesurf-text__box w-[46.375rem] py-[5.375rem] px-[5.375rem]">
        <div class="kitesurf-text__box--el absolute top-[-1rem] right-[20.25rem] z-[-1]">
          <img :src="kitesurfEl" alt="kitesurf-el">
        </div>
        <h1 class="text-[3.625rem] leading-[4.063rem] font-font-b text-c100 pb-[1.25rem]">{{ title }}</h1>
        <p class="text-[1rem] leading-[1.25rem] font-font-l pb-[3.375rem]">{{ desc }}</p>
          <Button :button-text="btnText"/>
      </div>
    </div>
    <div class="kitesurf-img relative">
      <img class="rounded-[1.25rem]" :src="kitesurfImg" alt="kitesurf-img">
      <div class="kitesurf-img__el absolute top-[0] left-[-7rem] z-[9999]">
        <img :src="kitesurfImgEl" alt="kitesurf-el">
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from "@/components/UI/Button.vue";
import { reactive } from 'vue';

const kitesurfEl = reactive('src/assets/image/svg/kitesurf-el.svg');
const kitesurfImg = reactive('src/assets/image/kitesurf-img.png');
const kitesurfImgEl = reactive('src/assets/image/kitesurf-img-el.png');
const btnText = 'Book now';
const title = 'Kitesurfing';
const desc = '“We can lift ourselves out of ignorance, we can find ourselves as creatures of excellence and intelligence and skill. We can be free! We can learn to fly!”';
</script>
